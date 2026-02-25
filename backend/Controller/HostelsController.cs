// =============================================================================
// HostelsController.cs  إدارة السكنات
// =============================================================================
// يتيح هذا الكونترولر العمليات التالية:
//   GET    /api/hostels           جلب جميع السكنات (للجميع)
//   GET    /api/hostels/{name}    جلب سكن بالاسم (للجميع)
//   POST   /api/hostels           إضافة سكن جديد (الأدمن فقط)
//   PUT    /api/hostels/{name}    تعديل سكن (الأدمن فقط)
//   POST   /api/hostels/upload-images  رفع صور السكن (الأدمن فقط)
//   DELETE /api/hostels/{name}    حذف سكن (الأدمن فقط)
// =============================================================================

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data;

namespace HostelApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HostelsController : ControllerBase
    {
        // _db  : للتعامل مع قاعدة البيانات
        // _env : للوصول إلى مسارات الملفات (wwwroot)
        private readonly AppDbContext _db;
        private readonly IWebHostEnvironment _env;

        public HostelsController(AppDbContext db, IWebHostEnvironment env)
        {
            _db  = db;
            _env = env;
        }

        // -----------------------------------------------------------------
        // GET /api/hostels  جلب جميع السكنات
        // متاح للجميع بدون تسجيل دخول
        // -----------------------------------------------------------------
        [HttpGet]
        [AllowAnonymous]
        public async Task<ActionResult<List<HostelDto>>> GetAll()
        {
            // نستخدم Select لإرجاع HostelDto فقط بدل كامل كائن Hostel
            // هذا أسرع لأننا نجلب فقط الأعمدة اللي نحتاجها من قاعدة البيانات
            var hostels = await _db.Hostels
                .Select(h => new HostelDto
                {
                    HostelName       = h.HostelName,
                    Capacity         = h.Capacity,
                    CurrentResidents = h.CurrentResidents,
                    Location         = h.Location,
                    ImageUrls        = h.ImageUrls,
                    Info             = h.Info
                })
                .ToListAsync();

            return Ok(hostels);
        }

        // -----------------------------------------------------------------
        // GET /api/hostels/{name}  جلب سكن واحد بالاسم
        // متاح للجميع  يستخدم في صفحة تفاصيل السكن
        // -----------------------------------------------------------------
        [HttpGet("{name}")]
        [AllowAnonymous]
        public async Task<ActionResult<HostelDto>> GetByName(string name)
        {
            var h = await _db.Hostels.FindAsync(name);

            // إذا لم يوجد سكن بهذا الاسم نرجع 404
            if (h == null) return NotFound(new { message = "السكن غير موجود." });

            return Ok(new HostelDto
            {
                HostelName       = h.HostelName,
                Capacity         = h.Capacity,
                CurrentResidents = h.CurrentResidents,
                Location         = h.Location,
                ImageUrls        = h.ImageUrls,
                Info             = h.Info
            });
        }

        // -----------------------------------------------------------------
        // POST /api/hostels  إضافة سكن جديد
        // الأدمن فقط
        // -----------------------------------------------------------------
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<HostelDto>> Create([FromBody] CreateHostelDto dto)
        {
            // التحقق من البيانات المطلوبة
            if (string.IsNullOrWhiteSpace(dto.HostelName))
                return BadRequest(new { message = "اسم السكن مطلوب." });

            if (string.IsNullOrWhiteSpace(dto.Location))
                return BadRequest(new { message = "الموقع مطلوب." });

            if (dto.Capacity <= 0)
                return BadRequest(new { message = "الطاقة الاستيعابية يجب أن تكون أكبر من صفر." });

            // إزالة المسافات الزائدة من الاسم
            dto.HostelName = dto.HostelName.Trim();

            // التحقق من عدم وجود سكن بنفس الاسم مسبقا
            if (await _db.Hostels.AnyAsync(h => h.HostelName == dto.HostelName))
                return BadRequest(new { message = "يوجد سكن بهذا الاسم بالفعل." });

            var hostel = new Hostel
            {
                HostelName       = dto.HostelName,
                Capacity         = dto.Capacity,
                CurrentResidents = dto.CurrentResidents,
                Location         = dto.Location,
                ImageUrls        = dto.ImageUrls,
                Info             = dto.Info
            };

            _db.Hostels.Add(hostel);
            await _db.SaveChangesAsync();

            // نرجع 201 Created مع رابط للسكن الجديد
            return CreatedAtAction(nameof(GetByName), new { name = hostel.HostelName },
                new HostelDto
                {
                    HostelName       = hostel.HostelName,
                    Capacity         = hostel.Capacity,
                    CurrentResidents = hostel.CurrentResidents,
                    Location         = hostel.Location,
                    ImageUrls        = hostel.ImageUrls,
                    Info             = hostel.Info
                });
        }

        // -----------------------------------------------------------------
        // PUT /api/hostels/{name}  تعديل بيانات سكن موجود
        // الأدمن فقط  لا يمكن تغيير الاسم (لأنه المفتاح الأساسي)
        // -----------------------------------------------------------------
        [HttpPut("{name}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Update(string name, [FromBody] CreateHostelDto dto)
        {
            var hostel = await _db.Hostels.FindAsync(name);
            if (hostel == null) return NotFound(new { message = "السكن غير موجود." });

            // تحديث البيانات القابلة للتعديل
            hostel.Capacity         = dto.Capacity;
            hostel.CurrentResidents = dto.CurrentResidents;
            hostel.Location         = dto.Location;
            hostel.ImageUrls        = dto.ImageUrls;
            hostel.Info             = dto.Info;

            await _db.SaveChangesAsync();

            // 204 No Content = نجح التعديل ولا يوجد شيء لإرجاعه
            return NoContent();
        }

        // -----------------------------------------------------------------
        // POST /api/hostels/upload-images  رفع صور السكن
        // الأدمن فقط  يستخدم قبل إنشاء/تعديل السكن
        // -----------------------------------------------------------------
        [HttpPost("upload-images")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UploadImages(List<IFormFile> files)
        {
            if (files == null || files.Count == 0)
                return BadRequest(new { message = "لم يتم رفع أي ملفات." });

            // الصيغ والامتدادات المسموح بها
            var allowedTypes      = new[] { "image/jpeg", "image/png", "image/gif", "image/webp" };
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp" };
            var imageUrls         = new List<string>();

            foreach (var file in files)
            {
                // التحقق من نوع الملف
                if (!allowedTypes.Contains(file.ContentType.ToLower()))
                    return BadRequest(new { message = $"الملف \"{file.FileName}\" صيغة غير مدعومة." });

                // التحقق من الحجم (الحد الأقصى 5 ميجابايت)
                if (file.Length > 5 * 1024 * 1024)
                    return BadRequest(new { message = $"الملف \"{file.FileName}\" يتجاوز الحد الأقصى (5 ميجابايت)." });

                // التحقق من الامتداد
                var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
                if (!allowedExtensions.Contains(ext))
                    return BadRequest(new { message = $"الملف \"{file.FileName}\" امتداد غير مسموح به." });

                // إنشاء اسم فريد للملف باستخدام GUID لمنع التعارض
                var fileName   = $"{Guid.NewGuid()}{ext}";
                var uploadPath = Path.Combine(
                    _env.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"),
                    "uploads", "hostels");

                Directory.CreateDirectory(uploadPath);

                var filePath = Path.Combine(uploadPath, fileName);
                using (var stream = new FileStream(filePath, FileMode.Create))
                    await file.CopyToAsync(stream);

                // بناء الرابط الكامل للصورة
                var baseUrl = $"{Request.Scheme}://{Request.Host}";
                imageUrls.Add($"{baseUrl}/uploads/hostels/{fileName}");
            }

            return Ok(new { imageUrls });
        }

        // -----------------------------------------------------------------
        // DELETE /api/hostels/{name}  حذف سكن
        // الأدمن فقط  يحذف السكن وجميع البيانات المرتبطة به (Cascade)
        // -----------------------------------------------------------------
        [HttpDelete("{name}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(string name)
        {
            var hostel = await _db.Hostels.FindAsync(name);
            if (hostel == null) return NotFound(new { message = "السكن غير موجود." });

            _db.Hostels.Remove(hostel);
            await _db.SaveChangesAsync();

            return NoContent();
        }
    }
}