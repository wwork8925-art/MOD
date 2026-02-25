// =============================================================================
// UsersController.cs  إدارة المستخدمين (للأدمن فقط)
// =============================================================================
// بعد الانتقال لـ Identity الأدوار لا تخزن كعمود في جدول المستخدمين
// بل في جدول منفصل AspNetUserRoles
// لذلك نستخدم UserManager للحصول على الأدوار وتغييرها
// =============================================================================

using backend.Data;
using backend.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace HostelApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _db;
        // UserManager يدير المستخدمين  بدله كنا نستخدم _db.Users مباشرة
        private readonly UserManager<AppUser> _userManager;

        public UsersController(AppDbContext db, UserManager<AppUser> userManager)
        {
            _db          = db;
            _userManager = userManager;
        }

        // -----------------------------------------------------------------
        // GET /api/users  الأدمن يجلب قائمة جميع المستخدمين
        // -----------------------------------------------------------------
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<List<UserDto>>> GetAll()
        {
            // نجلب المستخدمين من Identity
            var users = await _userManager.Users
                .Select(u => new
                {
                    u.Id,
                    u.UserName,
                    u.CivilNumber,
                    u.Number,
                    u.HostelName,
                    u.ProfileImageUrl
                })
                .ToListAsync();

            // نجلب الأدوار لكل مستخدم بشكل منفصل (الأدوار في جدول منفصل)
            var result = new List<UserDto>();
            foreach (var u in users)
            {
                // FindByIdAsync ثم GetRolesAsync للحصول على الدور
                var appUser = await _userManager.FindByIdAsync(u.Id.ToString());
                var roles   = await _userManager.GetRolesAsync(appUser!);

                result.Add(new UserDto
                {
                    Id              = u.Id,
                    Username        = u.UserName ?? "",
                    CivilNumber     = u.CivilNumber,
                    Number          = u.Number,
                    Role            = roles.FirstOrDefault() ?? "User",
                    HostelName      = u.HostelName,
                    ProfileImageUrl = u.ProfileImageUrl
                });
            }

            return Ok(result);
        }

        // -----------------------------------------------------------------
        // PUT /api/users/{id}/role  الأدمن يغير دور المستخدم
        // -----------------------------------------------------------------
        [HttpPut("{id}/role")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> UpdateRole(int id, [FromBody] UpdateUserRoleDto dto)
        {
            // التحقق من صحة الدور المطلوب
            var allowedRoles = new[] { "Admin", "User" };
            if (!allowedRoles.Contains(dto.Role))
                return BadRequest(new { message = "الصلاحية غير صالحة. القيم المسموحة: Admin, User" });

            // البحث عن المستخدم
            var user = await _userManager.FindByIdAsync(id.ToString());
            if (user == null)
                return NotFound(new { message = "المستخدم غير موجود." });

            // جلب الأدوار الحالية ثم إزالتها
            var currentRoles = await _userManager.GetRolesAsync(user);
            await _userManager.RemoveFromRolesAsync(user, currentRoles);

            // إضافة الدور الجديد
            await _userManager.AddToRoleAsync(user, dto.Role);

            return Ok(new { message = "تم تحديث الصلاحية بنجاح." });
        }

        // -----------------------------------------------------------------
        // DELETE /api/users/{id}  الأدمن يحذف مستخدم
        // -----------------------------------------------------------------
        [HttpDelete("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<IActionResult> Delete(int id)
        {
            var user = await _userManager.FindByIdAsync(id.ToString());
            if (user == null)
                return NotFound(new { message = "المستخدم غير موجود." });

            // منع الأدمن من حذف نفسه
            var currentUserId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);
            if (user.Id == currentUserId)
                return BadRequest(new { message = "لا يمكنك حذف حسابك الخاص." });

            // تحديث عداد السكن إذا كان المستخدم مسجل في سكن
            if (!string.IsNullOrEmpty(user.HostelName))
            {
                var hostel = await _db.Hostels.FindAsync(user.HostelName);
                if (hostel != null && hostel.CurrentResidents > 0)
                    hostel.CurrentResidents--;
                await _db.SaveChangesAsync();
            }

            // DeleteAsync يحذف المستخدم وكل بياناته من جداول Identity
            await _userManager.DeleteAsync(user);

            return Ok(new { message = "تم حذف الحساب بنجاح." });
        }
    }
}