import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// CanActivateFn = نوع الدالة التي تحمي المسارات (routes)
// تُستخدم في app.routes.ts عبر canActivate: [authGuard]
// إذا أرجعت true  → يُسمح بالدخول
// إذا أرجعت UrlTree → يُعاد التوجيه إلى صفحة أخرى
export const authGuard: CanActivateFn = () => {
  // نحصل على AuthService لمعرفة هل المستخدم مسجل دخوله أم لا
  const auth = inject(AuthService);

  // نحصل على Router لإعادة التوجيه عند الحاجة
  const router = inject(Router);

  // إذا كان المستخدم مسجلاً → نسمح له بالدخول
  if (auth.isLoggedIn()) {
    return true;
  }

  // إذا لم يكن مسجلاً → نعيد توجيهه إلى صفحة تسجيل الدخول
  return router.createUrlTree(['/login']);
};
