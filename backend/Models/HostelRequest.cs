// =============================================================================
// طلبات السكن
// =============================================================================

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace backend.Models
{
    
    public class HostelRequest
    {
        [Key]    // المفتاح المميز
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)] // توليد القيم تلقائياً 
    
        public int Id { get; set; } // الاي دي 

        // المستخدم اللي قدم الطلب
        [Required]
        public int UserId { get; set; }

        // AppUser بدلاً من User بعد الانتقال لنظام Identity
        [ForeignKey(nameof(UserId))]
        public AppUser? User { get; set; }

        // السكن اللي يريده المستخدم
        [Required]
        [MaxLength(200)]
        public string HostelName { get; set; } = string.Empty;

        [ForeignKey(nameof(HostelName))]
        public Hostel? Hostel { get; set; }

        // حالة الطلب 
        [Required]
        [MaxLength(20)]
        public string Status { get; set; } = "Pending";

        // متى تم إنشاء الطلب
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
    }
}
