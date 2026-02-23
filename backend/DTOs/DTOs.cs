// داتا ترانفير اوبجت ، كائن نقل البيانات  


// فائدة الحاويات لكي تستعمل لنقل البيانات من بدل الدخول المباشر للداتا بيس 


// تفيد ايضا في الحمايه من الهجمات الخارجية


// لتسجيل الحسابات الجديدة

using System.Data;

public class RegisterDto
{
    public string Username {get ; set ;} = string.Empty ;    // نعطيها قيمه فارغة ، بسبب دوت نت 10 يعطي خظئ في حالة عدم وجود اي قيمه 

    public string Password {get ; set ;} = string.Empty;
    public string Number { get; set; } = string.Empty;
    public string CivilNumber { get; set; } = string.Empty;
    public string ProfileImageUrl { get; set; } = string.Empty;



}

// حاويات تسجيل الدخول
 public class LoginDto
    {
        public string Username { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }

    /// حوية الرد بعد التحقق الصحيح
    public class AuthResponseDto
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Token { get; set; } = string.Empty;
        public string ProfileImageUrl { get; set; } = string.Empty;
    }

    // -------------------------------------------------------------------------
    // بيانات المستخدم
    // -------------------------------------------------------------------------
    public class UserDto
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public string CivilNumber { get; set; } = string.Empty;
        public string Number { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string? HostelName { get; set; }
        public string ProfileImageUrl { get; set; } = string.Empty;
    }

    // -------------------------------------------------------------------------
    // حاويات السكنات
    // -------------------------------------------------------------------------

    public class HostelDto
    {
        public string HostelName { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public int CurrentResidents { get; set; }
        public string Location { get; set; } = string.Empty;
        public List<string> ImageUrls { get; set; } = new();
        public string Info { get; set; } = string.Empty;
    }

    /// حاوية السكن لعملية التعديل من قبل المسؤولين 
    public class CreateHostelDto
    {
        public string HostelName { get; set; } = string.Empty;
        public int Capacity { get; set; }
        public int CurrentResidents { get; set; }
        public string Location { get; set; } = string.Empty;
        public List<string> ImageUrls { get; set; } = new();
        public string Info { get; set; } = string.Empty;
    }

    // -------------------------------------------------------------------------
    // حاوية التعديلات
    // -------------------------------------------------------------------------

    /// حاوية التعليقات المرسله من الباك إلند إلى الفرونت إند للمستخدم
    public class CommentDto
    {
        public int Id { get; set; }
        public string Text { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; } = string.Empty;
        public string HostelName { get; set; } = string.Empty;
    }

    /// حاوية التعليق على السكنات
    public class CreateCommentDto
    {
        public string Text { get; set; } = string.Empty;
        public string HostelName { get; set; } = string.Empty;
    }

    // -------------------------------------------------------------------------
    // حاوية طلب السكن
    // -------------------------------------------------------------------------

    /// حاوية تخزين قاعدة بيانات المستخدمين الذين يطلبون سكن
    public class HostelRequestDto
    {
        public int Id { get; set; }
        public int UserId { get; set; }
        public string Username { get; set; } = string.Empty;
        public string HostelName { get; set; } = string.Empty;
        public string Status { get; set; } = string.Empty;
        public DateTime CreatedAt { get; set; }
    }

    ///حاوية تخزين الطلبات للسكنات
    public class CreateHostelRequestDto
    {
        public string HostelName { get; set; } = string.Empty;
    }

    /// حاوية تخزين الرفظ من القبول
    public class UpdateRequestStatusDto
    {
        public string Status { get; set; } = string.Empty; // "Approved" or "Rejected"
    }

    // -------------------------------------------------------------------------
    // حاوية التحكم بالمستخدمين 
    // -------------------------------------------------------------------------
    public class UpdateUserRoleDto
    {
        public string Role { get; set; } = string.Empty; // "Admin" or "User"
    }

