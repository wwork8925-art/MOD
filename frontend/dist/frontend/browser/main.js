import {
  AuthService,
  Router,
  RouterLink,
  RouterOutlet,
  bootstrapApplication,
  provideRouter
} from "./chunk-JJ33MNBI.js";
import {
  Component,
  inject,
  provideBrowserGlobalErrorListeners,
  provideHttpClient,
  setClassMetadata,
  withInterceptors,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UC2EJXZ5.js";

// src/app/guards/admin-guard.ts
var adminGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (auth.isAdmin()) {
    return true;
  }
  return router.createUrlTree(["/hostels"]);
};

// src/app/app.routes.ts
var routes = [
  { path: "", redirectTo: "hostels", pathMatch: "full" },
  {
    path: "login",
    loadComponent: () => import("./chunk-2DPWJCCW.js").then((m) => m.Login)
  },
  {
    path: "register",
    loadComponent: () => import("./chunk-DXWGNBKQ.js").then((m) => m.Register)
  },
  {
    path: "hostels",
    loadComponent: () => import("./chunk-FKFBYPW3.js").then((m) => m.HostelList)
  },
  {
    path: "hostels/:name",
    loadComponent: () => import("./chunk-CXR6NC6Q.js").then((m) => m.HostelDetail)
  },
  {
    path: "admin",
    loadComponent: () => import("./chunk-Z2JTZOXD.js").then((m) => m.Admin),
    canActivate: [adminGuard]
  },
  { path: "**", redirectTo: "hostels" }
];

// src/app/interceptors/auth-interceptor.ts
var authInterceptor = (req, next) => {
  const auth = inject(AuthService);
  const token = auth.getToken();
  if (token) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
    return next(authReq);
  }
  return next(req);
};

// src/app/app.config.ts
var appConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor]))
  ]
};

// src/app/components/navbar/navbar.ts
function Navbar_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 8);
    \u0275\u0275text(2, "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
    \u0275\u0275elementEnd()();
  }
}
function Navbar_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.auth.user().profileImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function Navbar_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.auth.user().username.charAt(0).toUpperCase());
  }
}
function Navbar_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275conditionalCreate(1, Navbar_Conditional_13_Conditional_1_Template, 1, 1, "img", 10)(2, Navbar_Conditional_13_Conditional_2_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275listener("click", function Navbar_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.logout());
    });
    \u0275\u0275text(6, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(((tmp_1_0 = ctx_r1.auth.user()) == null ? null : tmp_1_0.profileImageUrl) ? 1 : 2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.auth.user().username);
  }
}
function Navbar_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 14);
    \u0275\u0275text(1, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 15);
    \u0275\u0275text(3, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628");
    \u0275\u0275elementEnd();
  }
}
var Navbar = class _Navbar {
  auth = inject(AuthService);
  router = inject(Router);
  logout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }
  static \u0275fac = function Navbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Navbar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Navbar, selectors: [["app-navbar"]], decls: 15, vars: 2, consts: [[1, "navbar"], [1, "navbar-brand"], ["routerLink", "/hostels", 1, "brand-link"], [1, "brand-icon"], [1, "brand-name"], [1, "navbar-links"], ["routerLink", "/hostels", 1, "nav-link"], [1, "navbar-auth"], ["routerLink", "/admin", 1, "nav-link", "nav-link-admin"], [1, "user-info"], ["alt", "profile", 1, "avatar", 3, "src"], [1, "avatar-placeholder"], [1, "username"], [1, "btn", "btn-outline-white", 3, "click"], ["routerLink", "/login", 1, "btn", "btn-outline-white"], ["routerLink", "/register", 1, "btn", "btn-white"]], template: function Navbar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "nav", 0)(1, "div", 1)(2, "a", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u{1F3E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "ul", 5)(8, "li")(9, "a", 6);
      \u0275\u0275text(10, "\u0627\u0644\u0633\u0643\u0646\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(11, Navbar_Conditional_11_Template, 3, 0, "li");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 7);
      \u0275\u0275conditionalCreate(13, Navbar_Conditional_13_Template, 7, 2)(14, Navbar_Conditional_14_Template, 4, 0);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.auth.isAdmin() ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.auth.isLoggedIn() ? 13 : 14);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.navbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a5f 0%,\n      #2563eb 100%);\n  padding: 0 2rem;\n  height: 64px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  gap: 1rem;\n}\n.brand-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.brand-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.navbar-links[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  list-style: none;\n}\n.nav-link[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.88);\n  padding: 0.45rem 0.9rem;\n  border-radius: 6px;\n  font-weight: 500;\n  transition: background 0.2s, color 0.2s;\n  font-size: 0.95rem;\n}\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n.nav-link-admin[_ngcontent-%COMP%] {\n  background: rgba(255, 200, 0, 0.18);\n  color: #fde68a;\n}\n.nav-link-admin[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 200, 0, 0.3);\n  color: #fef3c7;\n}\n.navbar-auth[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.avatar[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n}\n.avatar-placeholder[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.95rem;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n}\n.username[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.btn-outline-white[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.7);\n  color: #fff;\n  padding: 0.4rem 1rem;\n  border-radius: 7px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  transition: background 0.2s, border-color 0.2s;\n  cursor: pointer;\n}\n.btn-outline-white[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: #fff;\n}\n.btn-white[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1e3a5f;\n  padding: 0.4rem 1rem;\n  border-radius: 7px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  border: none;\n  transition: background 0.2s;\n  cursor: pointer;\n}\n.btn-white[_ngcontent-%COMP%]:hover {\n  background: #e0eaff;\n}\n/*# sourceMappingURL=navbar.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Navbar, [{
    type: Component,
    args: [{ selector: "app-navbar", imports: [RouterLink], template: '<nav class="navbar">\r\n  <div class="navbar-brand">\r\n    <a routerLink="/hostels" class="brand-link">\r\n      <span class="brand-icon">&#127968;</span>\r\n      <span class="brand-name">\u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A</span>\r\n    </a>\r\n  </div>\r\n\r\n  <ul class="navbar-links">\r\n    <li><a routerLink="/hostels" class="nav-link">\u0627\u0644\u0633\u0643\u0646\u0627\u062A</a></li>\r\n\r\n    @if (auth.isAdmin()) {\r\n      <li><a routerLink="/admin" class="nav-link nav-link-admin">\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645</a></li>\r\n    }\r\n  </ul>\r\n\r\n  <div class="navbar-auth">\r\n    @if (auth.isLoggedIn()) {\r\n      <div class="user-info">\r\n        @if (auth.user()?.profileImageUrl) {\r\n          <img [src]="auth.user()!.profileImageUrl" alt="profile" class="avatar" />\r\n        } @else {\r\n          <div class="avatar-placeholder">{{ auth.user()!.username.charAt(0).toUpperCase() }}</div>\r\n        }\r\n        <span class="username">{{ auth.user()!.username }}</span>\r\n      </div>\r\n      <button class="btn btn-outline-white" (click)="logout()">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062E\u0631\u0648\u062C</button>\r\n    } @else {\r\n      <a routerLink="/login" class="btn btn-outline-white">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</a>\r\n      <a routerLink="/register" class="btn btn-white">\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628</a>\r\n    }\r\n  </div>\r\n</nav>\r\n', styles: ["/* src/app/components/navbar/navbar.css */\n.navbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background:\n    linear-gradient(\n      135deg,\n      #1e3a5f 0%,\n      #2563eb 100%);\n  padding: 0 2rem;\n  height: 64px;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  gap: 1rem;\n}\n.brand-link {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  color: #fff;\n  font-size: 1.2rem;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n}\n.brand-icon {\n  font-size: 1.5rem;\n}\n.navbar-links {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  list-style: none;\n}\n.nav-link {\n  color: rgba(255, 255, 255, 0.88);\n  padding: 0.45rem 0.9rem;\n  border-radius: 6px;\n  font-weight: 500;\n  transition: background 0.2s, color 0.2s;\n  font-size: 0.95rem;\n}\n.nav-link:hover {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n}\n.nav-link-admin {\n  background: rgba(255, 200, 0, 0.18);\n  color: #fde68a;\n}\n.nav-link-admin:hover {\n  background: rgba(255, 200, 0, 0.3);\n  color: #fef3c7;\n}\n.navbar-auth {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.user-info {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid rgba(255, 255, 255, 0.6);\n}\n.avatar-placeholder {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.95rem;\n  border: 2px solid rgba(255, 255, 255, 0.5);\n}\n.username {\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.btn-outline-white {\n  background: transparent;\n  border: 2px solid rgba(255, 255, 255, 0.7);\n  color: #fff;\n  padding: 0.4rem 1rem;\n  border-radius: 7px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  transition: background 0.2s, border-color 0.2s;\n  cursor: pointer;\n}\n.btn-outline-white:hover {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: #fff;\n}\n.btn-white {\n  background: #fff;\n  color: #1e3a5f;\n  padding: 0.4rem 1rem;\n  border-radius: 7px;\n  font-size: 0.88rem;\n  font-weight: 700;\n  border: none;\n  transition: background 0.2s;\n  cursor: pointer;\n}\n.btn-white:hover {\n  background: #e0eaff;\n}\n/*# sourceMappingURL=navbar.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Navbar, { className: "Navbar", filePath: "src/app/components/navbar/navbar.ts", lineNumber: 11 });
})();

// src/app/app.ts
var App = class _App {
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "main-content"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-navbar");
      \u0275\u0275elementStart(1, "main", 0);
      \u0275\u0275element(2, "router-outlet");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [RouterOutlet, Navbar], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", imports: [RouterOutlet, Navbar], template: '<app-navbar></app-navbar>\n<main class="main-content">\n  <router-outlet></router-outlet>\n</main>\n\r\n' }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 11 });
})();

// src/main.ts
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
//# sourceMappingURL=main.js.map
