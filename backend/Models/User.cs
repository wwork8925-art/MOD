// =============================================================================
//المستخدم
// =============================================================================

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;


namespace backend.Models
{
    public class User
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        // الرقم المدني
        [Required]
        [MaxLength(20)]
        public string CivilNumber { get; set; } = string.Empty;

        //الرقم
        [Required]
        [MaxLength(20)]
        public string Number { get; set; } = string.Empty;

        // اسم المستخدم
        [Required]
        [MaxLength(100)]
        public string Username { get; set; } = string.Empty;

        // الباسورد هاش
        [Required]
        public string PasswordHash { get; set; } = string.Empty;

        // نوعية المستخدم
        [Required]
        [MaxLength(20)]
        public string Role { get; set; } = "User";

        // مفتاح مشترك 
        [MaxLength(200)]
        public string? HostelName { get; set; }

        // صورة الرابط
        [MaxLength(1000)]
        public string ProfileImageUrl { get; set; } = string.Empty;

        // -----------------------------------------------------------------
        // الفرون كي
        // -----------------------------------------------------------------
        [ForeignKey(nameof(HostelName))]
        public Hostel? Hostel { get; set; }
    }
}
