// =============================================================================
// AuthService.cs  خدمة المصادقة باستخدام ASP.NET Core Identity
// =============================================================================
// بدل كتابة كود التشفير يدويا نستخدم UserManager الذي يوفره Identity
// UserManager   : يدير إنشاء المستخدمين التحقق من كلمات المرور والأدوار
// RoleManager   : يدير الأدوار (Admin, User)
// GenerateJwtAsync : يبني التوكن بناء على بيانات المستخدم وأدواره
// =============================================================================

using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using backend.Models;

namespace backend.Services
{
    public class AuthService
    {
        // UserManager : الكلاس المسؤول عن إدارة المستخدمين (Identity)
        private readonly UserManager<AppUser> _userManager;

        // IConfiguration : لقراءة إعدادات JWT من appsettings.json
        private readonly IConfiguration _config;

        // حقن التبعيات عبر المنشئ (Constructor Injection)
        public AuthService(UserManager<AppUser> userManager, IConfiguration config)
        {
            _userManager = userManager;
            _config = config;
        }

        // -----------------------------------------------------------------
        // تسجيل حساب جديد
        // -----------------------------------------------------------------
        public async Task<AuthResponseDto?> RegisterAsync(RegisterDto dto)
        {
            // إنشاء كائن المستخدم الجديد (AppUser يرث من IdentityUser)
            var user = new AppUser
            {
                // UserName هو اسم الدخول في Identity
                UserName        = dto.Username,
                Number          = dto.Number,
                CivilNumber     = dto.CivilNumber,
                ProfileImageUrl = dto.ProfileImageUrl ?? string.Empty
            };

            // CreateAsync ينشئ المستخدم ويشفر كلمة المرور تلقائيا (PBKDF2)
            var result = await _userManager.CreateAsync(user, dto.Password);

            // إذا فشل الإنشاء نرجع null (مثلا اسم مكرر أو كلمة مرور ضعيفة)
            if (!result.Succeeded) return null;

            // إضافة الدور الافتراضي "User" للمستخدم الجديد
            await _userManager.AddToRoleAsync(user, "User");

            return new AuthResponseDto
            {
                Id              = user.Id,
                Username        = user.UserName!,
                Role            = "User",
                Token           = await GenerateJwtAsync(user),
                ProfileImageUrl = user.ProfileImageUrl,
                HostelName      = user.HostelName
            };
        }

        // -----------------------------------------------------------------
        // تسجيل الدخول
        // -----------------------------------------------------------------
        public async Task<AuthResponseDto?> LoginAsync(LoginDto dto)
        {
            // البحث عن المستخدم باسم الدخول
            var user = await _userManager.FindByNameAsync(dto.Username);
            if (user == null) return null;

            // CheckPasswordAsync يتحقق من كلمة المرور بأمان
            if (!await _userManager.CheckPasswordAsync(user, dto.Password))
                return null;

            // جلب الأدوار المسندة للمستخدم
            var roles    = await _userManager.GetRolesAsync(user);
            var primary  = roles.FirstOrDefault() ?? "User";

            return new AuthResponseDto
            {
                Id              = user.Id,
                Username        = user.UserName!,
                Role            = primary,
                Token           = await GenerateJwtAsync(user),
                ProfileImageUrl = user.ProfileImageUrl,
                HostelName      = user.HostelName
            };
        }

        // -----------------------------------------------------------------
        // بناء JWT Token
        // -----------------------------------------------------------------
        // async لأننا نجلب الأدوار من قاعدة البيانات
        private async Task<string> GenerateJwtAsync(AppUser user)
        {
            // قراءة مفتاح التشفير من appsettings.json
            var key         = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));
            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // جلب الأدوار لإضافتها داخل التوكن
            var roles = await _userManager.GetRolesAsync(user);

            // بناء قائمة المعلومات (Claims) المخزنة داخل التوكن
            var claims = new List<Claim>
            {
                // رقم المستخدم  للتعرف عليه في الكونترولرات
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),

                // اسم المستخدم
                new Claim(ClaimTypes.Name, user.UserName!),
            };

            // إضافة كل دور كـ Claim منفصل
            foreach (var role in roles)
                claims.Add(new Claim(ClaimTypes.Role, role));

            var token = new JwtSecurityToken(
                issuer             : _config["Jwt:Issuer"],
                audience           : _config["Jwt:Audience"],
                claims             : claims,
                expires            : DateTime.UtcNow.AddHours(24),
                signingCredentials : credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}