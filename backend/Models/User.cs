// =============================================================================
// AppUser.cs — نموذج المستخدم باستخدام ASP.NET Core Identity
// =============================================================================
//
// الفكرة:
//   بدلاً من كتابة كود هاش كلمة المرور وإدارة الأدوار يدوياً،
//   نرث من IdentityUser<int> وهو يتولى كل ذلك تلقائياً.
//
// ما يوفره IdentityUser<int> تلقائياً:
//   - Id              : رقم تعريفي فريد (int)
//   - UserName        : اسم المستخدم
//   - PasswordHash    : هاش آمن لكلمة المرور (PBKDF2 + salt)
//   - SecurityStamp   : يُستخدم لإبطال التوكنات القديمة
//   - Email / PhoneNumber وغيرها
//
// نحن نضيف فقط الحقول الإضافية الخاصة بمشروعنا:
// =============================================================================

using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
    public class AppUser : IdentityUser<int>
    {
        // -----------------------------------------------------------------
        // حقول إضافية خاصة بمشروعنا — ليست موجودة في IdentityUser
        // -----------------------------------------------------------------

        // الرقم المدني للمستخدم
        [Required]
        [MaxLength(20)]
        public string CivilNumber { get; set; } = string.Empty;

        // رقم الهاتف الخاص بمشروعنا (مختلف عن PhoneNumber في Identity)
        [Required]
        [MaxLength(20)]
        public string Number { get; set; } = string.Empty;

        // اسم السكن الذي يسكن فيه المستخدم (null = لم يُعيَّن بعد)
        [MaxLength(200)]
        public string? HostelName { get; set; }

        // رابط صورة الملف الشخصي
        [MaxLength(1000)]
        public string ProfileImageUrl { get; set; } = string.Empty;

        // -----------------------------------------------------------------
        // علاقة التنقل (Navigation Property)
        // الفورن كي → HostelName يشير إلى جدول Hostels
        // -----------------------------------------------------------------
        [ForeignKey(nameof(HostelName))]
        public Hostel? Hostel { get; set; }
    }
}
