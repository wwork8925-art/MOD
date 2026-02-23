// =============================================================================
// هنا الأند بوينت الأساسي 
// =============================================================================

using Microsoft.AspNetCore.Mvc;
using backend.Services;
namespace HostelApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;
        private readonly IWebHostEnvironment _env;

        // الأوثنتكيشن
        public AuthController(AuthService authService, IWebHostEnvironment env)
        {
            _authService = authService;
            _env = env;
        }

        // -----------------------------------------------------------------
        // POST 
        // -----------------------------------------------------------------
        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            // محاولة التسجيل
            var result = await _authService.RegisterAsync(dto);

            if (result == null)
                return BadRequest(new { message = "اسم المستخدم موجود مسبقاً ، راجع الكود 33 في حالة التأخر " });

            // اذا نجح بيرسل التوكن
            return Ok(result);
        }

        // -----------------------------------------------------------------
        // POST 
        // -----------------------------------------------------------------
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            // تسجيل الدخول
            var result = await _authService.LoginAsync(dto);

            if (result == null)
                return Unauthorized(new { message = "Invalid username or password." });

            // اذا نحح بيرسل التوكن
            return Ok(result);
        }

        // -----------------------------------------------------------------
        // POST رقع الصور
        // -----------------------------------------------------------------
        [HttpPost("upload-profile-image")]
        public async Task<IActionResult> UploadProfileImage(IFormFile file)
        {
            if (file == null || file.Length == 0)
                return BadRequest(new { message = "لم تقم برفع ملف" });

            // Validate file type
            var allowedTypes = new[] { "image/jpeg", "image/png", "image/gif", "image/webp" };
            if (!allowedTypes.Contains(file.ContentType.ToLower()))
                return BadRequest(new { message = "هذه الصغية غير مدعومه." });

            // Validate file size (max 2 MB for profile images)
            if (file.Length > 2 * 1024 * 1024)
                return BadRequest(new { message = "يجب ان تكون الصوره اقل من 2 ميجابت " });

            // Sanitize extension
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp" };
            var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
            if (!allowedExtensions.Contains(ext))
                return BadRequest(new { message = "صيغة غير مدعومه" });

            var fileName = $"{Guid.NewGuid()}{ext}";

            var uploadsDir = Path.Combine(_env.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"), "uploads", "profiles");
            Directory.CreateDirectory(uploadsDir);
            var filePath = Path.Combine(uploadsDir, fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            // 
            var baseUrl = $"{Request.Scheme}://{Request.Host}";
            var imageUrl = $"{baseUrl}/uploads/profiles/{fileName}";
            return Ok(new { imageUrl });
        }
    }
}