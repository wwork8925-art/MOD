// =============================================================================
// AppDbContext.cs — Entity Framework Core + ASP.NET Identity
// الكونتيكست هو الجسر بين الكود والقاعدة البيانات
// بعد إضافة Identity صار يرث من IdentityDbContext بدل DbContext
// =============================================================================

using backend.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Text.Json;


namespace backend.Data
{
    // IdentityDbContext<AppUser, IdentityRole<int>, int>
    // AppUser        : كلاس المستخدم المخصص
    // IdentityRole<int> : كلاس الدور (Role) — نستخدم int كمفتاح أساسي
    // int            : نوع المفتاح الأساسي لجميع جداول Identity
    public class AppDbContext : IdentityDbContext<AppUser, IdentityRole<int>, int>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // -----------------------------------------------------------------
        // جداولنا المخصصة — Identity تضيف جداولها تلقائياً (AspNetUsers، AspNetRoles...)
        // -----------------------------------------------------------------
        public DbSet<Hostel> Hostels => Set<Hostel>();
        public DbSet<Comment> Comments => Set<Comment>();
        public DbSet<HostelRequest> HostelRequests => Set<HostelRequest>();

        // -----------------------------------------------------------------
        // تحديد العلاقات 
        // -----------------------------------------------------------------
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // --- Hostel entity configuration ---
            modelBuilder.Entity<Hostel>(entity =>
            {
                entity.HasKey(h => h.HostelName);           // هذا البرامري كي
                entity.Property(h => h.HostelName)
                      .ValueGeneratedNever();                // الاي دي لا يتم إنشائهُ

                // تخزين الصور في ملف جيسون
                entity.Property(h => h.ImageUrls)
                      .HasConversion(
                          v => JsonSerializer.Serialize(v, (JsonSerializerOptions?)null),
                          v => JsonSerializer.Deserialize<List<string>>(v, (JsonSerializerOptions?)null) ?? new List<string>()
                      )
                      .Metadata.SetValueComparer(
                          new ValueComparer<List<string>>(
                              (c1, c2) => c1!.SequenceEqual(c2!),
                              c => c.Aggregate(0, (a, v) => HashCode.Combine(a, v.GetHashCode())),
                              c => c.ToList()
                          )
                      );
            });

            // --- AppUser entity configuration ---
            // Identity تدير مفتاح AppUser تلقائيا، نحن نضيف فقط علاقة Hostel
            modelBuilder.Entity<AppUser>(entity =>
            {
                // One-to-many: Hostel → Users (المستخدم ينتمي لسكن واحد)
                entity.HasOne(u => u.Hostel)
                      .WithMany(h => h.Users)
                      .HasForeignKey(u => u.HostelName)
                      .OnDelete(DeleteBehavior.SetNull);     // عند حذف السكن، يبقى المستخدم لكن HostelName يصبح null

                // CivilNumber يجب أن يكون فريداً
                entity.HasIndex(u => u.CivilNumber).IsUnique();
            });

            // --- Comment entity configuration ---
            modelBuilder.Entity<Comment>(entity =>
            {
                entity.HasKey(c => c.Id);

                entity.HasOne(c => c.User)
                      .WithMany()
                      .HasForeignKey(c => c.UserId)
                      .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne(c => c.Hostel)
                      .WithMany(h => h.Comments)
                      .HasForeignKey(c => c.HostelName)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            // --- HostelRequest entity configuration ---
            modelBuilder.Entity<HostelRequest>(entity =>
            {
                entity.HasKey(r => r.Id);

                entity.HasOne(r => r.User)
                      .WithMany()
                      .HasForeignKey(r => r.UserId)
                      .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne(r => r.Hostel)
                      .WithMany()
                      .HasForeignKey(r => r.HostelName)
                      .OnDelete(DeleteBehavior.Cascade);
            });

            // =================================================================
    
            // =================================================================
        }
    }
}
