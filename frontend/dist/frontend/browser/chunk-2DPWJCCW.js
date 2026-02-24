import {
  AuthService,
  Router,
  RouterLink
} from "./chunk-JJ33MNBI.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-QGFOKBGT.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UC2EJXZ5.js";

// src/app/components/login/login.ts
function Login_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function Login_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 15);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u062C\u0627\u0631\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644...");
    \u0275\u0275elementEnd();
  }
}
function Login_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 ");
  }
}
var Login = class _Login {
  auth = inject(AuthService);
  router = inject(Router);
  username = "";
  password = "";
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  submit() {
    if (!this.username.trim() || !this.password.trim()) {
      this.error.set("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.auth.login(this.username.trim(), this.password).subscribe({
      next: () => this.router.navigate(["/hostels"]),
      error: (err) => {
        this.error.set(err?.error?.message ?? "\u0628\u064A\u0627\u0646\u0627\u062A \u063A\u064A\u0631 \u0635\u062D\u064A\u062D\u0629. \u062A\u062D\u0642\u0642 \u0645\u0646 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function Login_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Login)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Login, selectors: [["app-login"]], decls: 27, vars: 5, consts: [["f", "ngForm"], [1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [1, "auth-icon"], [1, "alert", "alert-error"], [3, "ngSubmit"], [1, "form-group"], ["for", "username"], ["id", "username", "type", "text", "name", "username", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", "required", "", "autocomplete", "username", 3, "ngModelChange", "ngModel"], ["for", "password"], ["id", "password", "type", "password", "name", "password", "placeholder", "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "required", "", "autocomplete", "current-password", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-full", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/register"], [1, "spinner-sm"]], template: function Login_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0645\u062C\u062F\u062F\u0627\u064B \u0641\u064A \u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, Login_Conditional_9_Template, 2, 1, "div", 5);
      \u0275\u0275elementStart(10, "form", 6, 0);
      \u0275\u0275listener("ngSubmit", function Login_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.submit());
      });
      \u0275\u0275elementStart(12, "div", 7)(13, "label", 8);
      \u0275\u0275text(14, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_input_ngModelChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 7)(17, "label", 10);
      \u0275\u0275text(18, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function Login_Template_input_ngModelChange_19_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "button", 12);
      \u0275\u0275conditionalCreate(21, Login_Conditional_21_Template, 3, 0)(22, Login_Conditional_22_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "p", 13);
      \u0275\u0275text(24, " \u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F ");
      \u0275\u0275elementStart(25, "a", 14);
      \u0275\u0275text(26, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.error() ? 9 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 21 : 22);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4f8 0%,\n      #dbeafe 100%);\n  padding: 2rem 1rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);\n  padding: 2.5rem 2rem;\n  width: 100%;\n  max-width: 420px;\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: #1e3a5f;\n  margin-bottom: 0.3rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.93rem;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 0.7rem;\n  font-size: 1rem;\n  margin-top: 0.5rem;\n}\n.btn-full[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2.5px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #6b7280;\n  font-size: 0.92rem;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 600;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Login, [{
    type: Component,
    args: [{ selector: "app-login", imports: [FormsModule, RouterLink], template: '<div class="auth-page">\r\n  <div class="auth-card">\r\n    <div class="auth-header">\r\n      <div class="auth-icon">&#128274;</div>\r\n      <h1>\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</h1>\r\n      <p>\u0645\u0631\u062D\u0628\u0627\u064B \u0628\u0643 \u0645\u062C\u062F\u062F\u0627\u064B \u0641\u064A \u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A</p>\r\n    </div>\r\n\r\n    @if (error()) {\r\n      <div class="alert alert-error">{{ error() }}</div>\r\n    }\r\n\r\n    <form (ngSubmit)="submit()" #f="ngForm">\r\n      <div class="form-group">\r\n        <label for="username">\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645</label>\r\n        <input\r\n          id="username"\r\n          type="text"\r\n          [(ngModel)]="username"\r\n          name="username"\r\n          placeholder="\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"\r\n          required\r\n          autocomplete="username"\r\n        />\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label for="password">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631</label>\r\n        <input\r\n          id="password"\r\n          type="password"\r\n          [(ngModel)]="password"\r\n          name="password"\r\n          placeholder="\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"\r\n          required\r\n          autocomplete="current-password"\r\n        />\r\n      </div>\r\n\r\n      <button type="submit" class="btn btn-primary btn-full" [disabled]="loading()">\r\n        @if (loading()) {\r\n          <span class="spinner-sm"></span>\r\n          <span>\u062C\u0627\u0631\u064A \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644...</span>\r\n        } @else {\r\n          \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644\r\n        }\r\n      </button>\r\n    </form>\r\n\r\n    <p class="auth-footer">\r\n      \u0644\u064A\u0633 \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628\u061F <a routerLink="/register">\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/components/login/login.css */\n.auth-page {\n  min-height: calc(100vh - 64px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4f8 0%,\n      #dbeafe 100%);\n  padding: 2rem 1rem;\n}\n.auth-card {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);\n  padding: 2.5rem 2rem;\n  width: 100%;\n  max-width: 420px;\n}\n.auth-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n.auth-header h1 {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: #1e3a5f;\n  margin-bottom: 0.3rem;\n}\n.auth-header p {\n  color: #6b7280;\n  font-size: 0.93rem;\n}\n.btn-full {\n  width: 100%;\n  justify-content: center;\n  padding: 0.7rem;\n  font-size: 1rem;\n  margin-top: 0.5rem;\n}\n.btn-full:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.spinner-sm {\n  width: 16px;\n  height: 16px;\n  border: 2.5px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #6b7280;\n  font-size: 0.92rem;\n}\n.auth-footer a {\n  color: #2563eb;\n  font-weight: 600;\n}\n.auth-footer a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Login, { className: "Login", filePath: "src/app/components/login/login.ts", lineNumber: 12 });
})();
export {
  Login
};
//# sourceMappingURL=chunk-2DPWJCCW.js.map
