// التعليقات من قبل المستخدمين
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using backend.Models;

namespace backend.Models
{

    public class Comment
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        // محتوى التعليق
        [Required]
        [MaxLength(2000)]
        public string Text { get; set; } = string.Empty;

        //تاريخ التعليق
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        // -----------------------------------------------------------------
        // النافيجيشن بروبرتي : من كتب التعليق
        // -----------------------------------------------------------------

        // رقم المستخدم (فورن كي لجدول AppUsers)
        [Required]
        public int UserId { get; set; }

        // كائن المستخدم الكامل — AppUser بعد انتقالنا لنظام Identity
        [ForeignKey(nameof(UserId))]
        public AppUser? User { get; set; }

        // -----------------------------------------------------------------
        // أي سكن يخص هذا التعليق
        // -----------------------------------------------------------------

        // اسم السكن (فورن كي لجدول Hostels)
        [Required]
        [MaxLength(200)]
        public string HostelName { get; set; } = string.Empty;

        // كائن السكن الكامل
        [ForeignKey(nameof(HostelName))]
        public Hostel? Hostel { get; set; }
    }
}