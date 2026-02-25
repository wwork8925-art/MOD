// =============================================================================
// RequestsController.cs  إدارة طلبات حجز السكن
// =============================================================================
// دورة حياة الطلب:
//   1. يتقدم المستخدم المسجل بطلب  Status = "Pending"
//   2. يراجع الأدمن الطلبات
//   3. يوافق الأدمن   Status = "Approved" + يعين السكن للمستخدم
//      أو يرفض الأدمن  Status = "Rejected"
//
// المسارات:
//   GET /api/requests         جلب جميع الطلبات (الأدمن)
//   POST /api/requests        تقديم طلب جديد (المستخدم)
//   PUT /api/requests/{id}    الموافقة أو الرفض (الأدمن)
// =============================================================================

using System.Security.Claims;
using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HostelApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RequestsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public RequestsController(AppDbContext db)
        {
            _db = db;
        }

        // -----------------------------------------------------------------
        // GET /api/requests  جلب جميع طلبات السكن
        // الأدمن فقط  يعرضها في لوحة التحكم
        // -----------------------------------------------------------------
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<List<HostelRequestDto>>> GetAll()
        {
            var requests = await _db.HostelRequests
                .Include(r => r.User)               // تضمين بيانات المستخدم
                .OrderByDescending(r => r.CreatedAt) // الأحدث أولا
                .Select(r => new HostelRequestDto
                {
                    Id         = r.Id,
                    UserId     = r.UserId,
                    Username   = r.User!.UserName ?? "",
                    HostelName = r.HostelName,
                    Status     = r.Status,
                    CreatedAt  = r.CreatedAt
                })
                .ToListAsync();

            return Ok(requests);
        }

        // -----------------------------------------------------------------
        // POST /api/requests  تقديم طلب حجز سكن جديد
        // المستخدمون المسجلون فقط (Role = "User")
        // -----------------------------------------------------------------
        [HttpPost]
        [Authorize(Roles = "User")]
        public async Task<ActionResult<HostelRequestDto>> Create([FromBody] CreateHostelRequestDto dto)
        {
            // نجلب هوية المستخدم من التوكن (أكثر أمانا من قبوله من الفرونت إند)
            var userId   = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
            var username = User.FindFirstValue(ClaimTypes.Name)!;

            // التحقق من وجود السكن
            var hostel = await _db.Hostels.FindAsync(dto.HostelName);
            if (hostel == null)
                return NotFound(new { message = "السكن غير موجود." });

            // منع تقديم طلب جديد إذا كان هناك طلب قيد الانتظار
            var existingPending = await _db.HostelRequests
                .AnyAsync(r => r.UserId == userId && r.Status == "Pending");
            if (existingPending)
                return BadRequest(new { message = "لديك طلب قيد الانتظار بالفعل." });

            var request = new HostelRequest
            {
                UserId     = userId,
                HostelName = dto.HostelName,
                Status     = "Pending",
                CreatedAt  = DateTime.UtcNow
            };

            _db.HostelRequests.Add(request);
            await _db.SaveChangesAsync();

            return Ok(new HostelRequestDto
            {
                Id         = request.Id,
                UserId     = userId,
                Username   = username,
                HostelName = request.HostelName,
                Status     = request.Status,
                CreatedAt  = request.CreatedAt
            });
        }

        // -----------------------------------------------------------------
        // PUT /api/requests/{id}  الموافقة على طلب أو رفضه
        // الأدمن فقط
        // عند الموافقة: يعين السكن للمستخدم ويحدث عداد الساكنين
        // -----------------------------------------------------------------
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateRequestStatusDto dto)
        {
            // جلب الطلب مع بيانات المستخدم (نحتاج User لتعيين السكن)
            var request = await _db.HostelRequests
                .Include(r => r.User)
                .FirstOrDefaultAsync(r => r.Id == id);

            if (request == null)
                return NotFound(new { message = "الطلب غير موجود." });

            // التحقق من صحة الحالة المرسلة
            if (dto.Status != "Approved" && dto.Status != "Rejected")
                return BadRequest(new { message = "الحالة غير صالحة. القيم المقبولة: Approved, Rejected" });

            request.Status = dto.Status;

            // إذا تمت الموافقة  نعين السكن للمستخدم ونحدث العداد
            if (dto.Status == "Approved" && request.User != null)
            {
                // تعيين السكن للمستخدم
                request.User.HostelName = request.HostelName;

                // زيادة عداد الساكنين الحاليين
                var hostel = await _db.Hostels.FindAsync(request.HostelName);
                if (hostel != null)
                    hostel.CurrentResidents++;
            }

            await _db.SaveChangesAsync();

            return Ok(new { message = dto.Status == "Approved" ? "تمت الموافقة على الطلب." : "تم رفض الطلب." });
        }
    }
}