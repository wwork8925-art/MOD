using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using backend.Services;
using backend.Models;
using backend.Data;



namespace backend.Services

{


public class AuthService
    {
        private readonly AppDbContext _db;
        private readonly IConfiguration _config;
        public AuthService(AppDbContext db, IConfiguration config)
        {
            _db = db;
            _config = config;
        }

        // -----------------------------------------------------------------
        // تسجيل حساب جديد 
        // -----------------------------------------------------------------
        public async Task<AuthResponseDto?> RegisterAsync(RegisterDto dto)
        {
            // التحقق إذا كان المستخدم مسجل مسبقاً 
            if (await _db.Users.AnyAsync(u => u.Username == dto.Username))
                return null; // Username exists

            // إنشاء كائن اليوزر
            var user = new User
            {
                Username = dto.Username,
                Number = dto.Number,
                CivilNumber = dto.CivilNumber,
                PasswordHash = HashPassword(dto.Password),
                Role = "User",                    //
                ProfileImageUrl = dto.ProfileImageUrl
            };

            _db.Users.Add(user);
            await _db.SaveChangesAsync();

            // هنا نعطي المستخدم توكن اذا ما تم تسجيل دخولهُ بنجاح
            return new AuthResponseDto
            {
                Id = user.Id,
                Username = user.Username,
                Role = user.Role,
                Token = GenerateJwt(user),
                ProfileImageUrl = user.ProfileImageUrl,
                HostelName = user.HostelName
            };
        }

        // ---------------------------------------------------------------
        // ***********************كود مهم********************************


        //التحقق من  التوكنيس
        // --------------------------------------------------------------------------
        public async Task<AuthResponseDto?> LoginAsync(LoginDto dto)
        {
            // إيجاد المستخدم
            var user = await _db.Users.FirstOrDefaultAsync(u => u.Username == dto.Username);
            if (user == null) return null;

            // التحقق من كلمة المرور
            if (!VerifyPassword(dto.Password, user.PasswordHash))
                return null;

            // منح التوكن 
            return new AuthResponseDto
            {
                Id = user.Id,
                Username = user.Username,
                Role = user.Role,
                Token = GenerateJwt(user),
                ProfileImageUrl = user.ProfileImageUrl,
                HostelName = user.HostelName
            };
        }

        // -----------------------------------------------------------------
        // خصائص التوكن
        // -----------------------------------------------------------------
        private string GenerateJwt(User user)
        {
            // Read the secret key from appsettings.json
            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_config["Jwt:Key"]!));

            var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            // الإدعائات تخزن داخل التوكن
            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Role, user.Role)
            };

            var token = new JwtSecurityToken(
                issuer: _config["Jwt:Issuer"],
                audience: _config["Jwt:Audience"],
                claims: claims,
                expires: DateTime.UtcNow.AddHours(24),   // الوقت قبل إنتهاء التوكن بالساعات
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        // -----------------------------------------------------------------
        // باسورد هاش
        // -----------------------------------------------------------------

        /// <summary>Hash a plain-text password.</summary>
        private string HashPassword(string password)
        {
            using var hmac = new HMACSHA256();
            var hash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));
            // Store key + hash together so we can verify later
            return Convert.ToBase64String(hmac.Key) + ":" + Convert.ToBase64String(hash);
        }

        /// التحقق من 
        private bool VerifyPassword(string password, string stored)
        {
            var parts = stored.Split(':');
            if (parts.Length != 2) return false;

            var key = Convert.FromBase64String(parts[0]);
            var storedHash = Convert.FromBase64String(parts[1]);

            using var hmac = new HMACSHA256(key);
            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(password));

            return computedHash.SequenceEqual(storedHash);
        }
    }

}
