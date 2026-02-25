// =============================================================================
// Program.cs  نقطة البداية للتطبيق
// =============================================================================
// يضبط هذا الملف كل خدمات التطبيق قبل تشغيله:
//   1. قاعدة البيانات SQLite عبر Entity Framework Core
//   2. ASP.NET Core Identity (إدارة المستخدمين والأدوار)
//   3. JWT Bearer Authentication (التوكن)
//   4. CORS (السماح لـ Angular بالاتصال)
//   5. بذر البيانات الأولية (أدوار + حساب Admin)
// =============================================================================

using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using backend.Data;
using backend.Models;
using backend.Services;

var builder = WebApplication.CreateBuilder(args);

// -----------------------------------------------------------------
// 1. تسجيل قاعدة البيانات SQLite
// -----------------------------------------------------------------
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// -----------------------------------------------------------------
// 2. إضافة ASP.NET Core Identity
// -----------------------------------------------------------------
// نستخدم AddIdentityCore بدل AddIdentity لأن AddIdentity تغير
// نظام المصادقة الافتراضي إلى Cookies وهذا يكسر JWT
// AddIdentityCore تضيف الخدمات فقط دون تغيير نظام المصادقة
builder.Services.AddIdentityCore<AppUser>(options =>
{
    // إعدادات كلمة المرور  خففناها لسهولة الاختبار
    options.Password.RequiredLength         = 6;
    options.Password.RequireNonAlphanumeric = false;
    options.Password.RequireUppercase       = false;
    options.Password.RequireDigit           = false;
})
.AddRoles<IdentityRole<int>>()              // تفعيل نظام الأدوار
.AddEntityFrameworkStores<AppDbContext>()   // ربط Identity بقاعدة البيانات
.AddDefaultTokenProviders();                // لazard tokens (إعادة تعيين كلمة المرور)

// -----------------------------------------------------------------
// 3. تسجيل خدمات التطبيق
// -----------------------------------------------------------------
builder.Services.AddScoped<AuthService>();

// -----------------------------------------------------------------
// 4. إعداد JWT Authentication
// -----------------------------------------------------------------
// نضيف JWT بشكل منفصل ليكون هو نظام المصادقة الافتراضي (وليس Cookies)
var jwtKey = builder.Configuration["Jwt:Key"]!;
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme    = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer           = true,
        ValidateAudience         = true,
        ValidateLifetime         = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer              = builder.Configuration["Jwt:Issuer"],
        ValidAudience            = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey         = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
    };
});

// -----------------------------------------------------------------
// 5. إضافة الكونترولرات و CORS
// -----------------------------------------------------------------
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

builder.Services.AddOpenApi();

var app = builder.Build();

// -----------------------------------------------------------------
// 6. إنشاء قاعدة البيانات وبذر البيانات الأولية
// -----------------------------------------------------------------
using (var scope = app.Services.CreateScope())
{
    var db          = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    var userManager = scope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole<int>>>();

    // إنشاء جداول قاعدة البيانات إذا لم تكن موجودة
    db.Database.EnsureCreated();

    // ----- بذر الأدوار -----
    // نتأكد أن الأدوار موجودة في جدول AspNetRoles
    string[] roles = ["Admin", "User"];
    foreach (var role in roles)
    {
        if (!await roleManager.RoleExistsAsync(role))
            await roleManager.CreateAsync(new IdentityRole<int>(role));
    }

    // ----- بذر حساب Admin -----
    // نتحقق بـ UserName (حرف N كبير  هكذا Identity)
    if (await userManager.FindByNameAsync("admin") == null)
    {
        var admin = new AppUser
        {
            UserName        = "admin",
            CivilNumber     = "0000000000",
            Number          = "0000000000",
            ProfileImageUrl = ""
        };

        // CreateAsync يشفر كلمة المرور تلقائيا
        var result = await userManager.CreateAsync(admin, "Admin123!");

        if (result.Succeeded)
            // إسناد دور Admin للحساب
            await userManager.AddToRoleAsync(admin, "Admin");
    }
}

// -----------------------------------------------------------------
// 7. إنشاء مجلدات رفع الصور إذا لم تكن موجودة
// -----------------------------------------------------------------
var webRoot = app.Environment.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
Directory.CreateDirectory(Path.Combine(webRoot, "uploads", "profiles"));
Directory.CreateDirectory(Path.Combine(webRoot, "uploads", "hostels"));

// -----------------------------------------------------------------
// 8. إعداد pipeline الطلبات HTTP
// -----------------------------------------------------------------
if (app.Environment.IsDevelopment())
    app.MapOpenApi();

app.UseStaticFiles(new StaticFileOptions
{
    OnPrepareResponse = ctx =>
        ctx.Context.Response.Headers.Append("Access-Control-Allow-Origin", "http://localhost:4200")
});

app.UseCors("AllowAngular");
app.UseAuthentication();
app.UseAuthorization();
app.MapControllers();

app.Run();