// =============================================================================
// CommentsController.cs  إدارة التعليقات على السكنات
// =============================================================================
// يتيح هذا الكونترولر:
//   GET  /api/comments/{hostelName}  جلب تعليقات سكن معين (للجميع)
//   POST /api/comments               إضافة تعليق جديد (المستخدمون المسجلون)
// =============================================================================

using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using backend.Models;
using backend.Data;

namespace HostelApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CommentsController : ControllerBase
    {
        private readonly AppDbContext _db;

        public CommentsController(AppDbContext db)
        {
            _db = db;
        }

        // -----------------------------------------------------------------
        // GET /api/comments/{hostelName}  جلب تعليقات سكن معين
        // متاح للجميع بدون تسجيل دخول
        // -----------------------------------------------------------------
        [HttpGet("{hostelName}")]
        [AllowAnonymous]
        public async Task<ActionResult<List<CommentDto>>> GetByHostel(string hostelName)
        {
            var comments = await _db.Comments
                .Where(c => c.HostelName == hostelName)
                .Include(c => c.User)                     // نحتاج بيانات المستخدم لجلب اسمه
                .OrderByDescending(c => c.CreatedAt)      // الأحدث أولا
                .Select(c => new CommentDto
                {
                    Id         = c.Id,
                    Text       = c.Text,
                    CreatedAt  = c.CreatedAt,
                    UserId     = c.UserId,
                    Username   = c.User!.UserName ?? "",  // UserName بحرف N كبير (Identity)
                    HostelName = c.HostelName
                })
                .ToListAsync();

            return Ok(comments);
        }

        // -----------------------------------------------------------------
        // POST /api/comments  إضافة تعليق جديد
        // المستخدمون والأدمن فقط (يجب تسجيل الدخول)
        // نجلب UserId من التوكن وليس من الفرونت إند (أكثر أمانا)
        // -----------------------------------------------------------------
        [HttpPost]
        [Authorize(Roles = "User,Admin")]
        public async Task<ActionResult<CommentDto>> Create([FromBody] CreateCommentDto dto)
        {
            // استخراج هوية المستخدم من التوكن
            var userId   = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
            var username = User.FindFirstValue(ClaimTypes.Name)!;

            // التحقق من وجود السكن
            if (!await _db.Hostels.AnyAsync(h => h.HostelName == dto.HostelName))
                return NotFound(new { message = "السكن غير موجود." });

            var comment = new Comment
            {
                Text       = dto.Text,
                UserId     = userId,
                HostelName = dto.HostelName,
                CreatedAt  = DateTime.UtcNow
            };

            _db.Comments.Add(comment);
            await _db.SaveChangesAsync();

            return Ok(new CommentDto
            {
                Id         = comment.Id,
                Text       = comment.Text,
                CreatedAt  = comment.CreatedAt,
                UserId     = userId,
                Username   = username,
                HostelName = comment.HostelName
            });
        }
    }
}