// استيراد المكتبات الأساسية للـ Web API
using Microsoft.AspNetCore.Mvc;              // ControllerBase + ApiController
using Microsoft.AspNetCore.Authorization;    // Authorize Attribute
using Microsoft.EntityFrameworkCore;         // LINQ + FirstOrDefaultAsync
using System.Security.Claims;                // ClaimTypes
using backend.Data;                          // AppDbContext

namespace backend.Controllers
{
    // يخبر ASP.NET أن هذا Controller API
    [ApiController]

    // يحدد مسار الوصول
    // api/UserReqYN
    [Route("api/[controller]")]
    public class UserReqYN : ControllerBase
    {
        // ---------------------------------------------------------
        //  المتغيرات الخاصة (Private Fields)
        // ---------------------------------------------------------

        // للوصول إلى قاعدة البيانات
        private readonly AppDbContext _db;

        // ---------------------------------------------------------
        //  Constructor (الكنستركتر)
        // ---------------------------------------------------------

        // هذا هو البناء (يتم استدعاؤه عند إنشاء Controller)
        // ASP.NET يقوم بحقن القيم تلقائيًا (Dependency Injection)
        public UserReqYN(AppDbContext db)
        {
            // نحفظ نسخة من الـ DbContext داخل الكلاس
            _db = db;
        }

        // ---------------------------------------------------------
        //  GET: api/UserReqYN/my-latest
        // ---------------------------------------------------------

        // هذا Endpoint من نوع GET
        [HttpGet("my-latest")]

        // يسمح فقط للمستخدمين المسجلين بدور User
        [Authorize(Roles = "User")]
        public async Task<ActionResult<HostelRequestDto>> GetMyLatestRequest()
        {
            // -----------------------------------------------------
            //  استخراج رقم المستخدم من الـ Token
            // -----------------------------------------------------

            // NameIdentifier يحتوي على UserId داخل الـ JWT
            var userId = int.Parse(
                User.FindFirstValue(ClaimTypes.NameIdentifier)!
            );

            // -----------------------------------------------------
            //  البحث عن أحدث طلب لهذا المستخدم
            // -----------------------------------------------------

            var request = await _db.HostelRequests

                // فلترة الطلبات الخاصة بهذا المستخدم فقط
                .Where(r => r.UserId == userId)

                // ترتيب من الأحدث للأقدم
                .OrderByDescending(r => r.CreatedAt)

                // تحويل البيانات إلى DTO
                // HostelRequestDto = the form (defined once in RequestDtos.cs)
// new HostelRequestDto { ... } = filling out that form with data from the database

.Select(r => new HostelRequestDto   // ← take the existing form
{
    Id         = r.Id,              // ← fill field 1 from DB
    UserId     = r.UserId,          // ← fill field 2 from DB
    HostelName = r.HostelName,      // ← fill field 3 from DB
    Status     = r.Status,          // ← fill field 4 from DB
    CreatedAt  = r.CreatedAt        // ← fill field 5 from DB
})
                // جلب أول نتيجة فقط
                .FirstOrDefaultAsync();

            // -----------------------------------------------------
            //  إذا لم يوجد طلب
            // -----------------------------------------------------

            if (request == null)
                return NotFound(new { message = "لا يوجد طلبات لك بعد." });

            // -----------------------------------------------------
            //  إرجاع الطلب بنجاح
            // -----------------------------------------------------

            return Ok(request);
        }
    }
}