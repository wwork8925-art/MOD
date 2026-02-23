// =============================================================================
// AppDbContext.cs — Entity Framework Core --> من بدل الأسكيو أل
// =============================================================================

using backend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Text.Json;


namespace backend.Data
{
    public class AppDbContext : DbContext
    {
        
        
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        // -----------------------------------------------------------------
        // تحديد الجداول الوفرييبل الخاصه بهن 
        // -----------------------------------------------------------------
        public DbSet<User> Users => Set<User>();
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

            // --- User entity configuration ---
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(u => u.Id);                    // 

                // One-to-many: Hostel → Users
                entity.HasOne(u => u.Hostel)
                      .WithMany(h => h.Users)
                      .HasForeignKey(u => u.HostelName)
                      .OnDelete(DeleteBehavior.SetNull);     // راجع هذا الكود للمشاريع المستقبلية 

                // Unique constraint on Username (used for login)
                entity.HasIndex(u => u.Username).IsUnique();

                // Unique constraint on CivilNumber
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
