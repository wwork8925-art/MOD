// =============================================================================
// هنا عمليات القرائه والتعديل وجميع عمليات الاس كيو أل للسكنات
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
        private readonly AppDbContext _db;
        private readonly IWebHostEnvironment _env;

        public HostelsController(AppDbContext db, IWebHostEnvironment env)
        {
            _db = db;
            _env = env;
        }

        // -----------------------------------------------------------------
        // GET جميع الأشخاص يمكنهم استعراض السكنات
        // -----------------------------------------------------------------
        [HttpGet]
        [AllowAnonymous]    // السماح بطلبات للغير مسجلين فالموقع
        public async Task<ActionResult<List<HostelDto>>> GetAll()
        {
            var hostels = await _db.Hostels
                .Select(h => new HostelDto
                {
                    HostelName = h.HostelName,
                    Capacity = h.Capacity,
                    CurrentResidents = h.CurrentResidents,
                    Location = h.Location,
                    ImageUrls = h.ImageUrls,
                    Info = h.Info
                })
                .ToListAsync();

            return Ok(hostels);
        }

        // -----------------------------------------------------------------
        // GET للبحث عن سكن معين
        // -----------------------------------------------------------------
        [HttpGet("{name}")]
        [AllowAnonymous]
        public async Task<ActionResult<HostelDto>> GetByName(string name)
        {
            var h = await _db.Hostels.FindAsync(name);
            if (h == null) return NotFound();

            return Ok(new HostelDto
            {
                HostelName = h.HostelName,
                Capacity = h.Capacity,
                CurrentResidents = h.CurrentResidents,
                Location = h.Location,
                ImageUrls = h.ImageUrls,
                Info = h.Info
            });
        }

        // -----------------------------------------------------------------
        // POST الأدمن والسكنات
        // -----------------------------------------------------------------
        [HttpPost]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<HostelDto>> Create([FromBody] CreateHostelDto dto)
        {
            // Validate required fields
            if (string.IsNullOrWhiteSpace(dto.HostelName))
                return BadRequest(new { message = "اسم السكن مطلوب." });

            if (string.IsNullOrWhiteSpace(dto.Location))
                return BadRequest(new { message = "الموقع مطلوب." });

            if (dto.Capacity <= 0)
                return BadRequest(new { message = "المساحة القصوى يجب أن تكون أكبر من صفر." });

            dto.HostelName = dto.HostelName.Trim();

            // Check if a hostel with the same name already exists
            if (await _db.Hostels.AnyAsync(h => h.HostelName == dto.HostelName))
                return BadRequest(new { message = "يوجد سكن بهذا الاسم بالفعل." });

            var hostel = new Hostel
            {
                HostelName = dto.HostelName,
                Capacity = dto.Capacity,
                CurrentResidents = dto.CurrentResidents,
                Location = dto.Location,
                ImageUrls = dto.ImageUrls,
                Info = dto.Info
            };

            _db.Hostels.Add(hostel);
            await _db.SaveChangesAsync();

            return CreatedAtAction(nameof(GetByName), new { name = hostel.HostelName },
                new HostelDto
                {
                    HostelName = hostel.HostelName,
                    Capacity = hostel.Capacity,
                    CurrentResidents = hostel.CurrentResidents,
                    Location = hostel.Location,
                    ImageUrls = hostel.ImageUrls,
                    Info = hostel.Info
                });
        }

        // -----------------------------------------------------------------
        // PUT  تعديل الأدمن للسكنات
        // -----------------------------------------------------------------
        [HttpPut("{name}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Update(string name, [FromBody] CreateHostelDto dto)
        {
            var hostel = await _db.Hostels.FindAsync(name);
            if (hostel == null) return NotFound();

            // تحديث البيانات
            hostel.Capacity = dto.Capacity;
            hostel.CurrentResidents = dto.CurrentResidents;
            hostel.Location = dto.Location;
            hostel.ImageUrls = dto.ImageUrls;
            hostel.Info = dto.Info;

            await _db.SaveChangesAsync();
            return NoContent();
        }

        // -----------------------------------------------------------------
        // POST رفع الصور 
        // -----------------------------------------------------------------
        [HttpPost("upload-images")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UploadImages(List<IFormFile> files)
        {
            if (files == null || files.Count == 0)
                return BadRequest(new { message = "No files uploaded." });

            var allowedTypes = new[] { "image/jpeg", "image/png", "image/gif", "image/webp" };
            var allowedExtensions = new[] { ".jpg", ".jpeg", ".png", ".gif", ".webp" };
            var imageUrls = new List<string>();

            foreach (var file in files)
            {
                if (!allowedTypes.Contains(file.ContentType.ToLower()))
                    return BadRequest(new { message = $"File \"{file.FileName}\" صيغة غير مدعومة" });

                if (file.Length > 5 * 1024 * 1024)
                    return BadRequest(new { message = $"File \"{file.FileName}\" الحجم اكبر عن 5 ميجا بت" });

                var ext = Path.GetExtension(file.FileName).ToLowerInvariant();
                if (!allowedExtensions.Contains(ext))
                    return BadRequest(new { message = $"File \"{file.FileName}\" صيغة غير مدعومة" });

                var fileName = $"{Guid.NewGuid()}{ext}";
                var uploadsDir = Path.Combine(
                    _env.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot"),
                    "uploads", "hostels");
                Directory.CreateDirectory(uploadsDir);
                var filePath = Path.Combine(uploadsDir, fileName);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }

                var baseUrl = $"{Request.Scheme}://{Request.Host}";
                imageUrls.Add($"{baseUrl}/uploads/hostels/{fileName}");
            }

            return Ok(new { imageUrls });
        }

        // -----------------------------------------------------------------
        // DELETE حذف
        // -----------------------------------------------------------------
        [HttpDelete("{name}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(string name)
        {
            var hostel = await _db.Hostels.FindAsync(name);
            if (hostel == null) return NotFound();

            _db.Hostels.Remove(hostel);
            await _db.SaveChangesAsync();
            return NoContent();
        }
    }
}
