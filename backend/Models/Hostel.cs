// =============================================================================
// العلاقات والمفاتيح بين الجداول 
// =============================================================================

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json;
using backend.Models;

namespace backend.Models
{
    public class Hostel
    {
        //البرايمي كيف والفورن كي في الجدول الثاني
        [Key]
        [Required]
        [MaxLength(200)]
        public string HostelName { get; set; } = string.Empty;

        //العدد الأقصى
        [Required]
        public int Capacity { get; set; }

        // العدد الحالي
        [Required]
        public int CurrentResidents { get; set; }

        // الموقع
        [Required]
        [MaxLength(500)]
        public string Location { get; set; } = string.Empty;

        //قائمه بالصور في حالة وجود أكثر من صورة
        public List<string> ImageUrls { get; set; } = new();

        // معلومات اضافيه في حالة وحالة
        [MaxLength(2000)]
        public string Info { get; set; } = string.Empty;

        // -----------------------------------------------------------------
        //عدد المنتسبين للسكن
        // -----------------------------------------------------------------
        public ICollection<User> Users { get; set; } = new List<User>();

        // -----------------------------------------------------------------
        // التعليقات للسكنات
        // -----------------------------------------------------------------
        public ICollection<Comment> Comments { get; set; } = new List<Comment>();
    }
}
