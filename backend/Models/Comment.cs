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

        // المفاتيح المشتركة

        // الفورن كي
        [Required]
        public int UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        public User? User { get; set; }

        // Which hostel the comment is about
        [Required]
        [MaxLength(200)]
        public string HostelName { get; set; } = string.Empty;

        [ForeignKey(nameof(HostelName))]
        public Hostel? Hostel { get; set; }
    }
}