// =============================================================================
// HostelDtos.cs — حاويات بيانات السكنات
// =============================================================================
// تُستخدم لعرض السكنات للزوار وللأدمن عند الإنشاء والتعديل.
// =============================================================================

namespace backend.DTOs
{
    // -------------------------------------------------------------------------
    // بيانات السكن — تُرسل للفرونت إند عند عرض قائمة السكنات أو سكن واحد
    // -------------------------------------------------------------------------
    public class HostelDto
    {
        // اسم السكن (هو أيضاً المفتاح الأساسي في قاعدة البيانات)
        public string HostelName { get; set; } = string.Empty;

        // الطاقة الاستيعابية القصوى
        public int Capacity { get; set; }

        // عدد الساكنين الحاليين
        public int CurrentResidents { get; set; }

        // موقع السكن
        public string Location { get; set; } = string.Empty;

        // قائمة روابط صور السكن (مخزنة كـ JSON في قاعدة البيانات)
        public List<string> ImageUrls { get; set; } = new();

        // معلومات إضافية عن السكن
        public string Info { get; set; } = string.Empty;
    }

    // -------------------------------------------------------------------------
    // بيانات إنشاء/تعديل سكن — يرسلها الأدمن
    // نستخدم نفس الحاوية للإنشاء والتعديل (POST و PUT)
    // -------------------------------------------------------------------------
    public class CreateHostelDto
    {
        // اسم السكن (مطلوب)
        public string HostelName { get; set; } = string.Empty;

        // الطاقة الاستيعابية (مطلوب — أكبر من صفر)
        public int Capacity { get; set; }

        // عدد الساكنين الحاليين
        public int CurrentResidents { get; set; }

        // الموقع (مطلوب)
        public string Location { get; set; } = string.Empty;

        // روابط الصور
        public List<string> ImageUrls { get; set; } = new();

        // معلومات إضافية
        public string Info { get; set; } = string.Empty;
    }
}
