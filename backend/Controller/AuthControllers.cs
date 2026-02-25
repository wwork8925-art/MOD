// =============================================================================
// AuthController.cs  نقطة دخول المصادقة
// =============================================================================
// يتولى هذا الكونترولر:
//   POST /api/auth/register              تسجيل حساب جديد
//   POST /api/auth/login                 تسجيل الدخول والحصول على التوكن
//   POST /api/auth/upload-profile-image  رفع صورة الملف الشخصي
// =============================================================================

using Microsoft.AspNetCore.Mvc;
using backend.Services;

namespace HostelApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        // AuthService يتولى منطق التسجيل والدخول وبناء التوكن
        private readonly AuthService _authService;

        // _env للوصول إلى مسار wwwroot لحفظ الصور
        private readonly IWebHostEnvironment _env;

        public AuthController(AuthService authService, IWebHostEnvironment env)
        {
            _authService = authService;
            _env         = env;
        }

        // -----------------------------------------------------------------
        // POST /api/auth/register  إنشاء حساب جديد
        // متاح للجميع بدون توكن
        // -----------------------------------------------------------------
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            // AuthService.RegisterAsync يتحقق من تكرار الاسم ويشفر كلمة المرور
            var result = await _authService.RegisterAsync(dto);

            // null = فشل التسجيل (الاسم مكرر أو كلمة المرور ضعيفة)
            if (result == null)
                return BadRequest(new { message = "فشل التسجيل. تأكد من أن اسم المستخدم غير مستخدم وكلمة المرور لا تقل عن 6 أحرف." });

            // نجاح  نرجع بيانات المستخدم مع التوكن
            return Ok(result);
        }

        // -----------------------------------------------------------------
        // POST /api/auth/login  تسجيل الدخول
        // يرجع JWT Token صالح لمدة 24 ساعة
        // -----------------------------------------------------------------
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var result = await _authService.LoginAsync(dto);

            // null = اسم المستخدم أو كلمة المرور غير صحيحة
            if (result == null)
                return Unauthorized(new { message = "اسم المستخدم أو كلمة المرور غير صحيحة." });

            return Ok(result);
        }

        // -----------------------------------------------------------------
        // POST /api/auth/upload-profile-image  رفع صورة الملف الشخصي
        // الصور تحفظ في wwwroot/uploads/profiles وترجع رابطها
        // -----------------------------------------------------------------
        [HttpPost("upload-profile-image")]
        public async Task<IActionResult> UploadProfileImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest(new { message = "لم يتم إرسال أي ملف." });

            // الصيغ المسموح بها
            var allowedTypes      = new[] { "image/jpeg", "image/png", "image/gif", "image/webp" };
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp" };

            if (!allowedTypes.Contains(file.ContentType.ToLower()))
                return BadRequest(new { message = "صيغة الملف غير مدعومة. المسموح: JPG, PNG, GIF, WEBP." });

            // الحد الأقصى لحجم صورة الملف الشخصي = 2 ميجابايت
            if (file.Length > 2 * 1024 * 1024)
                return BadRequest(new { message = "حجم الصورة يتجاوز الحد الأقصى (2 ميجابايت)." });

            var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!allowedExtensions.Contains(ext))
                return BadRequest(new { message = "امتداد الملف غير مسموح به." });

            // إنشاء اسم فريد لتجنب تعارض الأسماء
            var fileName   = $"{Guid.NewGuid()}{ext}";
            var uploadPath = Path.Combine(
                _env.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"),
                "uploads", "profiles");

            Directory.CreateDirectory(uploadPath);

            var filePath = Path.Combine(uploadPath, fileName);
            using (var stream = new FileStream(filePath, FileMode.Create))
                await file.CopyToAsync(stream);

            // بناء الرابط الكامل للصورة (يعمل مع HTTP و HTTPS)
            var baseUrl  = $"{Request.Scheme}://{Request.Host}";
            var imageUrl = $"{baseUrl}/uploads/profiles/{fileName}";

            return Ok(new { imageUrl });
        }
    }
}