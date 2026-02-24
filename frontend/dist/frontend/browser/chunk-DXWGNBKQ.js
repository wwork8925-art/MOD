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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UC2EJXZ5.js";

// src/app/components/register/register.ts
function Register_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function Register_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.imagePreview(), \u0275\u0275sanitizeUrl);
  }
}
function Register_Conditional_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639... ");
  }
}
function Register_Conditional_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 ");
  }
}
function Register_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function Register_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.uploadImage());
    });
    \u0275\u0275conditionalCreate(1, Register_Conditional_20_Conditional_1_Template, 1, 0)(2, Register_Conditional_20_Conditional_2_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.uploading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.uploading() ? 1 : 2);
  }
}
function Register_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "\u2713 \u062A\u0645 \u0627\u0644\u0631\u0641\u0639");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 27);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2, "\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0633\u062C\u064A\u0644...");
    \u0275\u0275elementEnd();
  }
}
function Register_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628 ");
  }
}
var Register = class _Register {
  auth = inject(AuthService);
  router = inject(Router);
  username = "";
  password = "";
  civilNumber = "";
  phoneNumber = "";
  profileImageUrl = "";
  selectedFile = null;
  imagePreview = signal("", ...ngDevMode ? [{ debugName: "imagePreview" }] : []);
  uploading = signal(false, ...ngDevMode ? [{ debugName: "uploading" }] : []);
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  onFileSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const file = input.files[0];
    this.selectedFile = file;
    const reader = new FileReader();
    reader.onload = (e) => this.imagePreview.set(e.target?.result);
    reader.readAsDataURL(file);
  }
  uploadImage() {
    if (!this.selectedFile)
      return;
    this.uploading.set(true);
    this.auth.uploadProfileImage(this.selectedFile).subscribe({
      next: (res) => {
        this.profileImageUrl = res.imageUrl;
        this.uploading.set(false);
      },
      error: (err) => {
        this.error.set(err?.error?.message ?? "\u062E\u0637\u0623 \u0641\u064A \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629");
        this.uploading.set(false);
      }
    });
  }
  submit() {
    if (!this.username.trim() || !this.password || !this.civilNumber.trim() || !this.phoneNumber.trim()) {
      this.error.set("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629");
      return;
    }
    this.loading.set(true);
    this.error.set("");
    this.auth.register({
      username: this.username.trim(),
      password: this.password,
      civilNumber: this.civilNumber.trim(),
      number: this.phoneNumber.trim(),
      profileImageUrl: this.profileImageUrl
    }).subscribe({
      next: () => this.router.navigate(["/hostels"]),
      error: (err) => {
        this.error.set(err?.error?.message ?? "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0627\u0644\u062A\u0633\u062C\u064A\u0644");
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function Register_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Register)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Register, selectors: [["app-register"]], decls: 46, vars: 10, consts: [[1, "auth-page"], [1, "auth-card"], [1, "auth-header"], [1, "auth-icon"], [1, "alert", "alert-error"], [3, "ngSubmit"], [1, "form-group"], [1, "image-upload-area"], ["alt", "preview", 1, "image-preview", 3, "src"], [1, "image-upload-controls"], ["type", "file", "accept", "image/*", "id", "profile-img", 2, "display", "none", 3, "change"], ["for", "profile-img", 1, "btn", "btn-secondary", "btn-sm"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "disabled"], [1, "success-badge"], ["for", "reg-username"], ["id", "reg-username", "type", "text", "name", "username", "placeholder", "\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645", "required", "", 3, "ngModelChange", "ngModel"], ["for", "reg-password"], ["id", "reg-password", "type", "password", "name", "password", "placeholder", "\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631", "required", "", 3, "ngModelChange", "ngModel"], [1, "form-row"], ["for", "civil"], ["id", "civil", "type", "text", "name", "civilNumber", "placeholder", "\u0631\u0642\u0645\u0643 \u0627\u0644\u0645\u062F\u0646\u064A", "required", "", 3, "ngModelChange", "ngModel"], ["for", "phone"], ["id", "phone", "type", "text", "name", "number", "placeholder", "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641", "required", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-primary", "btn-full", 3, "disabled"], [1, "auth-footer"], ["routerLink", "/login"], ["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click", "disabled"], [1, "spinner-sm"]], template: function Register_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "\u{1F464}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, Register_Conditional_9_Template, 2, 1, "div", 4);
      \u0275\u0275elementStart(10, "form", 5);
      \u0275\u0275listener("ngSubmit", function Register_Template_form_ngSubmit_10_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(11, "div", 6)(12, "label");
      \u0275\u0275text(13, "\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7);
      \u0275\u0275conditionalCreate(15, Register_Conditional_15_Template, 1, 1, "img", 8);
      \u0275\u0275elementStart(16, "div", 9)(17, "input", 10);
      \u0275\u0275listener("change", function Register_Template_input_change_17_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "label", 11);
      \u0275\u0275text(19, "\u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(20, Register_Conditional_20_Template, 3, 2, "button", 12);
      \u0275\u0275conditionalCreate(21, Register_Conditional_21_Template, 2, 0, "span", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 6)(23, "label", 14);
      \u0275\u0275text(24, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_25_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.username, $event) || (ctx.username = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 6)(27, "label", 16);
      \u0275\u0275text(28, "\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_29_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 18)(31, "div", 6)(32, "label", 19);
      \u0275\u0275text(33, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.civilNumber, $event) || (ctx.civilNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 6)(36, "label", 21);
      \u0275\u0275text(37, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 22);
      \u0275\u0275twoWayListener("ngModelChange", function Register_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.phoneNumber, $event) || (ctx.phoneNumber = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "button", 23);
      \u0275\u0275conditionalCreate(40, Register_Conditional_40_Template, 3, 0)(41, Register_Conditional_41_Template, 1, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "p", 24);
      \u0275\u0275text(43, " \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061F; ");
      \u0275\u0275elementStart(44, "a", 25);
      \u0275\u0275text(45, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.error() ? 9 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.imagePreview() ? 15 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.selectedFile && !ctx.profileImageUrl ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.profileImageUrl ? 21 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.username);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.civilNumber);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.phoneNumber);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading() || ctx.uploading());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 40 : 41);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterLink], styles: ["\n\n.auth-page[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 64px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4f8 0%,\n      #dbeafe 100%);\n  padding: 2rem 1rem;\n}\n.auth-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);\n  padding: 2.5rem 2rem;\n  width: 100%;\n  max-width: 500px;\n}\n.auth-header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: #1e3a5f;\n  margin-bottom: 0.3rem;\n}\n.auth-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.93rem;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.image-upload-area[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.image-preview[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #2563eb;\n}\n.image-upload-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.8rem;\n  font-size: 0.85rem;\n}\n.success-badge[_ngcontent-%COMP%] {\n  color: #16a34a;\n  font-weight: 700;\n  font-size: 0.88rem;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n  padding: 0.7rem;\n  font-size: 1rem;\n  margin-top: 0.5rem;\n}\n.btn-full[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.spinner-sm[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  border: 2.5px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #6b7280;\n  font-size: 0.92rem;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 600;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=register.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Register, [{
    type: Component,
    args: [{ selector: "app-register", imports: [FormsModule, RouterLink], template: '<div class="auth-page">\r\n  <div class="auth-card">\r\n    <div class="auth-header">\r\n      <div class="auth-icon">&#128100;</div>\r\n      <h1>\u0625\u0646\u0634\u0627\u0621 \u062D\u0633\u0627\u0628 \u062C\u062F\u064A\u062F</h1>\r\n      <p>\u0627\u0646\u0636\u0645 \u0625\u0644\u0649 \u0646\u0638\u0627\u0645 \u0627\u0644\u0633\u0643\u0646\u0627\u062A</p>\r\n    </div>\r\n\r\n    @if (error()) {\r\n      <div class="alert alert-error">{{ error() }}</div>\r\n    }\r\n\r\n    <form (ngSubmit)="submit()">\r\n      <!-- Profile Image -->\r\n      <div class="form-group">\r\n        <label>\u0635\u0648\u0631\u0629 \u0627\u0644\u0645\u0644\u0641 \u0627\u0644\u0634\u062E\u0635\u064A (\u0627\u062E\u062A\u064A\u0627\u0631\u064A)</label>\r\n        <div class="image-upload-area">\r\n          @if (imagePreview()) {\r\n            <img [src]="imagePreview()" alt="preview" class="image-preview" />\r\n          }\r\n          <div class="image-upload-controls">\r\n            <input\r\n              type="file"\r\n              accept="image/*"\r\n              (change)="onFileSelected($event)"\r\n              id="profile-img"\r\n              style="display:none"\r\n            />\r\n            <label for="profile-img" class="btn btn-secondary btn-sm">\u0627\u062E\u062A\u0631 \u0635\u0648\u0631\u0629</label>\r\n            @if (selectedFile && !profileImageUrl) {\r\n              <button type="button" class="btn btn-primary btn-sm" (click)="uploadImage()" [disabled]="uploading()">\r\n                @if (uploading()) { \u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639... } @else { \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631\u0629 }\r\n              </button>\r\n            }\r\n            @if (profileImageUrl) {\r\n              <span class="success-badge">&#10003; \u062A\u0645 \u0627\u0644\u0631\u0641\u0639</span>\r\n            }\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label for="reg-username">\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 *</label>\r\n        <input\r\n          id="reg-username"\r\n          type="text"\r\n          [(ngModel)]="username"\r\n          name="username"\r\n          placeholder="\u0623\u062F\u062E\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645"\r\n          required\r\n        />\r\n      </div>\r\n\r\n      <div class="form-group">\r\n        <label for="reg-password">\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 *</label>\r\n        <input\r\n          id="reg-password"\r\n          type="password"\r\n          [(ngModel)]="password"\r\n          name="password"\r\n          placeholder="\u0623\u062F\u062E\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631"\r\n          required\r\n        />\r\n      </div>\r\n\r\n      <div class="form-row">\r\n        <div class="form-group">\r\n          <label for="civil">\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A *</label>\r\n          <input\r\n            id="civil"\r\n            type="text"\r\n            [(ngModel)]="civilNumber"\r\n            name="civilNumber"\r\n            placeholder="\u0631\u0642\u0645\u0643 \u0627\u0644\u0645\u062F\u0646\u064A"\r\n            required\r\n          />\r\n        </div>\r\n\r\n        <div class="form-group">\r\n          <label for="phone">\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641 *</label>\r\n          <input\r\n            id="phone"\r\n            type="text"\r\n            [(ngModel)]="phoneNumber"\r\n            name="number"\r\n            placeholder="\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641"\r\n            required\r\n          />\r\n        </div>\r\n      </div>\r\n\r\n      <button type="submit" class="btn btn-primary btn-full" [disabled]="loading() || uploading()">\r\n        @if (loading()) {\r\n          <span class="spinner-sm"></span>\r\n          <span>\u062C\u0627\u0631\u064A \u0627\u0644\u062A\u0633\u062C\u064A\u0644...</span>\r\n        } @else {\r\n          \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u062D\u0633\u0627\u0628\r\n        }\r\n      </button>\r\n    </form>\r\n\r\n    <p class="auth-footer">\r\n      \u0644\u062F\u064A\u0643 \u062D\u0633\u0627\u0628 \u0628\u0627\u0644\u0641\u0639\u0644\u061F; <a routerLink="/login">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</a>\r\n    </p>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/components/register/register.css */\n.auth-page {\n  min-height: calc(100vh - 64px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #f0f4f8 0%,\n      #dbeafe 100%);\n  padding: 2rem 1rem;\n}\n.auth-card {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 8px 32px rgba(37, 99, 235, 0.12);\n  padding: 2.5rem 2rem;\n  width: 100%;\n  max-width: 500px;\n}\n.auth-header {\n  text-align: center;\n  margin-bottom: 2rem;\n}\n.auth-icon {\n  font-size: 2.5rem;\n  margin-bottom: 0.75rem;\n}\n.auth-header h1 {\n  font-size: 1.7rem;\n  font-weight: 800;\n  color: #1e3a5f;\n  margin-bottom: 0.3rem;\n}\n.auth-header p {\n  color: #6b7280;\n  font-size: 0.93rem;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.image-upload-area {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.image-preview {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 3px solid #2563eb;\n}\n.image-upload-controls {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.btn-sm {\n  padding: 0.35rem 0.8rem;\n  font-size: 0.85rem;\n}\n.success-badge {\n  color: #16a34a;\n  font-weight: 700;\n  font-size: 0.88rem;\n}\n.btn-full {\n  width: 100%;\n  justify-content: center;\n  padding: 0.7rem;\n  font-size: 1rem;\n  margin-top: 0.5rem;\n}\n.btn-full:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n  box-shadow: none;\n}\n.spinner-sm {\n  width: 16px;\n  height: 16px;\n  border: 2.5px solid rgba(255, 255, 255, 0.4);\n  border-top-color: #fff;\n  border-radius: 50%;\n  animation: spin 0.7s linear infinite;\n  display: inline-block;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.auth-footer {\n  text-align: center;\n  margin-top: 1.5rem;\n  color: #6b7280;\n  font-size: 0.92rem;\n}\n.auth-footer a {\n  color: #2563eb;\n  font-weight: 600;\n}\n.auth-footer a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=register.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Register, { className: "Register", filePath: "src/app/components/register/register.ts", lineNumber: 12 });
})();
export {
  Register
};
//# sourceMappingURL=chunk-DXWGNBKQ.js.map
