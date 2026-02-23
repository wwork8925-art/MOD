// =============================================================================
// Program.cs — Entry point for the Hostel Management API
// =============================================================================
// Configures:
//   - SQLite via Entity Framework Core
//   - JWT Bearer Authentication
//   - CORS (so Angular can call the API)
//   - Controller routing
//   - Automatic database creation with seed data
// =============================================================================

using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using backend.Services;
using backend.Data;


var builder = WebApplication.CreateBuilder(args);

// -----------------------------------------------------------------
// 1. Register the SQLite database context
// -----------------------------------------------------------------
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// -----------------------------------------------------------------
// 2. Register application services
// -----------------------------------------------------------------
builder.Services.AddScoped<AuthService>();

// -----------------------------------------------------------------
// 3. Configure JWT authentication
// -----------------------------------------------------------------
var jwtKey = builder.Configuration["Jwt:Key"]!;
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = builder.Configuration["Jwt:Issuer"],
        ValidAudience = builder.Configuration["Jwt:Audience"],
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtKey))
    };
});

// -----------------------------------------------------------------
// 4. Add controllers and CORS
// -----------------------------------------------------------------
builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
    {
        policy.WithOrigins("http://localhost:4200")   // Angular dev server
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Swagger / OpenAPI (optional, useful for testing)
builder.Services.AddOpenApi();

var app = builder.Build();

// -----------------------------------------------------------------
// 5. Ensure the database is created (applies migrations / creates tables)
// -----------------------------------------------------------------
using (var scope = app.Services.CreateScope())
{
    var db = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    db.Database.EnsureCreated(); // Creates the SQLite DB file if it doesn't exist

    // Seed the admin account with a real hashed password if it doesn't exist yet
    if (!db.Users.Any(u => u.Username == "admin"))
    {
        var authService = scope.ServiceProvider.GetRequiredService<AuthService>();
        // Register the admin account (password: Admin123!)
        // We manually set the role to Admin after registration
        var adminUser = new backend.Models.User
        {
            Username = "admin",
            CivilNumber = "0000000000",
            Number = "0000000000",
            PasswordHash = "", // Will be set below
            Role = "Admin",
            ProfileImageUrl = ""
        };
        // Use HMAC hashing consistent with AuthService
        using var hmac = new System.Security.Cryptography.HMACSHA256();
        var hash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes("Admin123!"));
        adminUser.PasswordHash = Convert.ToBase64String(hmac.Key) + ":" + Convert.ToBase64String(hash);
        db.Users.Add(adminUser);
        db.SaveChanges();
    }

   
    }

// -----------------------------------------------------------------
// 6. Ensure wwwroot/uploads directories exist for uploaded images
// -----------------------------------------------------------------
var webRoot = app.Environment.WebRootPath ?? Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
Directory.CreateDirectory(Path.Combine(webRoot, "uploads", "profiles"));
Directory.CreateDirectory(Path.Combine(webRoot, "uploads", "hostels"));

// -----------------------------------------------------------------
// 7. Configure the HTTP request pipeline
// -----------------------------------------------------------------
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseStaticFiles(new StaticFileOptions
{
    OnPrepareResponse = ctx =>
    {
        ctx.Context.Response.Headers.Append("Access-Control-Allow-Origin", "http://localhost:4200");
    }
});                                    // Serve uploaded images from wwwroot with CORS
app.UseCors("AllowAngular");       // Enable CORS for the Angular front-end
app.UseAuthentication();            // JWT auth middleware
app.UseAuthorization();             // Role-based authorization
app.MapControllers();               // Map attribute-routed controllers

app.Run();
