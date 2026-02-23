// =============================================================================
// اليوزر اند بوينت
// =============================================================================


using backend.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace HostelApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _db;

        public UsersController(AppDbContext db)
        {
            _db = db;
        }

        // -----------------------------------------------------------------
        // GET الادمن يجلب جميع المستخدمين 
        // -----------------------------------------------------------------
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<List<UserDto>>> GetAll()
        {
            var users = await _db.Users
                .Select(u => new UserDto
                {
                    Id = u.Id,
                    Username = u.Username,
                    CivilNumber = u.CivilNumber,
                    Number = u.Number,
                    Role = u.Role,
                    HostelName = u.HostelName,
                    ProfileImageUrl = u.ProfileImageUrl
                })
                .ToListAsync();

            return Ok(users);
        }

        // -----------------------------------------------------------------
        // PUT /api/users/{id}/role الادم يسططيع تغير المستخدمين 
        // -----------------------------------------------------------------
        [HttpPut("{id}/role")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateRole(int id, [FromBody] UpdateUserRoleDto dto)
        {
            var allowedRoles = new[] { "Admin", "User" };
            if (!allowedRoles.Contains(dto.Role))
                return BadRequest(new { message = "الصلاحية غير صالحة. القيم المسموحة: Admin, User" });

            var user = await _db.Users.FindAsync(id);
            if (user == null)
                return NotFound(new { message = "المستخدم غير موجود." });

            user.Role = dto.Role;
            await _db.SaveChangesAsync();

            return Ok(new { message = "تم تحديث الصلاحية بنجاح." });
        }

        // -----------------------------------------------------------------
        // DELETE /api/users/{id} — حذف 
        // -----------------------------------------------------------------
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var user = await _db.Users.FindAsync(id);
            if (user == null)
                return NotFound(new { message = "المستخدم غير موجود." });

            // منع الادمن من حذف نفسه
            var currentUserId = int.Parse(User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)!.Value);
            if (user.Id == currentUserId)
                return BadRequest(new { message = "لا يمكنك حذف حسابك الخاص." });

            // حذف
            if (!string.IsNullOrEmpty(user.HostelName))
            {
                var hostel = await _db.Hostels.FindAsync(user.HostelName);
                if (hostel != null && hostel.CurrentResidents > 0)
                {
                    hostel.CurrentResidents--;
                }
            }

            _db.Users.Remove(user);
            await _db.SaveChangesAsync();

            return Ok(new { message = "تم حذف الحساب بنجاح." });
        }
    }
}
