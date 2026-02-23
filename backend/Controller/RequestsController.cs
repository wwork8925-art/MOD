// =============================================================================
// الاند بوينت للطلبات
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
        // GET الادم يحصل على طلبات السكن
        // -----------------------------------------------------------------
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<List<HostelRequestDto>>> GetAll()
        {
            var requests = await _db.HostelRequests
                .Include(r => r.User)
                .OrderByDescending(r => r.CreatedAt)
                .Select(r => new HostelRequestDto
                {
                    Id = r.Id,
                    UserId = r.UserId,
                    Username = r.User!.Username,
                    HostelName = r.HostelName,
                    Status = r.Status,
                    CreatedAt = r.CreatedAt
                })
                .ToListAsync();

            return Ok(requests);
        }

        // -----------------------------------------------------------------
        // POST طلب المستخدم للسكن
        // -----------------------------------------------------------------
        [HttpPost]
        [Authorize(Roles = "User")]
        public async Task<ActionResult<HostelRequestDto>> Create([FromBody] CreateHostelRequestDto dto)
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
            var username = User.FindFirstValue(ClaimTypes.Name)!;

            // Check if the hostel exists
            var hostel = await _db.Hostels.FindAsync(dto.HostelName);
            if (hostel == null)
                return NotFound(new { message = "Hostel not found." });

            // Check if the user already has a pending request
            var existing = await _db.HostelRequests
                .AnyAsync(r => r.UserId == userId && r.Status == "Pending");
            if (existing)
                return BadRequest(new { message = "You already have a pending request." });

            var request = new HostelRequest
            {
                UserId = userId,
                HostelName = dto.HostelName,
                Status = "Pending",
                CreatedAt = DateTime.UtcNow
            };

            _db.HostelRequests.Add(request);
            await _db.SaveChangesAsync();

            return Ok(new HostelRequestDto
            {
                Id = request.Id,
                UserId = userId,
                Username = username,
                HostelName = request.HostelName,
                Status = request.Status,
                CreatedAt = request.CreatedAt
            });
        }

        // -----------------------------------------------------------------
        // PUT موافقة الادمن على السكن او لا
        // -----------------------------------------------------------------
        [HttpPut("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateStatus(int id, [FromBody] UpdateRequestStatusDto dto)
        {
            var request = await _db.HostelRequests
                .Include(r => r.User)
                .FirstOrDefaultAsync(r => r.Id == id);

            if (request == null)
                return NotFound();

            // تقيم
            if (dto.Status != "Approved" && dto.Status != "Rejected")
                return BadRequest(new { message = "يجب ان تختار خيار" });

            request.Status = dto.Status;

            // موافقة
            if (dto.Status == "Approved" && request.User != null)
            {
                request.User.HostelName = request.HostelName;

                var hostel = await _db.Hostels.FindAsync(request.HostelName);
                if (hostel != null)
                {
                    hostel.CurrentResidents++;
                }
            }

            await _db.SaveChangesAsync();
            return NoContent();
        }
    }
}