import {
  RequestService
} from "./chunk-AXDNQ5YN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-QGFOKBGT.js";
import {
  HostelService
} from "./chunk-DTCR6Y5F.js";
import {
  Component,
  HttpClient,
  Injectable,
  __spreadProps,
  __spreadValues,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UC2EJXZ5.js";

// src/app/services/user.service.ts
var UserService = class _UserService {
  http;
  API = "http://localhost:5003/api/users";
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.API);
  }
  updateRole(id, role) {
    return this.http.put(`${this.API}/${id}/role`, { role });
  }
  delete(id) {
    return this.http.delete(`${this.API}/${id}`);
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/admin/admin.ts
var _forTrack0 = ($index, $item) => $item.hostelName;
var _forTrack1 = ($index, $item) => $item.id;
function Admin_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.hostelSuccess());
  }
}
function Admin_Conditional_10_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.hostelError());
  }
}
function Admin_Conditional_10_Conditional_7_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639... ");
  }
}
function Admin_Conditional_10_Conditional_7_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0631\u0641\u0639 \u0635\u0648\u0631 ");
  }
}
function Admin_Conditional_10_Conditional_7_Conditional_38_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "button", 30);
    \u0275\u0275listener("click", function Admin_Conditional_10_Conditional_7_Conditional_38_For_2_Template_button_click_2_listener() {
      const url_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeImageUrl(url_r5));
    });
    \u0275\u0275text(3, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const url_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", url_r5, \u0275\u0275sanitizeUrl);
  }
}
function Admin_Conditional_10_Conditional_7_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275repeaterCreate(1, Admin_Conditional_10_Conditional_7_Conditional_38_For_2_Template, 4, 1, "div", 28, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.hostelForm.imageUrls);
  }
}
function Admin_Conditional_10_Conditional_7_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062C\u0627\u0631\u064A... ");
  }
}
function Admin_Conditional_10_Conditional_7_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062D\u0641\u0638 ");
  }
}
function Admin_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, Admin_Conditional_10_Conditional_7_Conditional_3_Template, 2, 1, "div", 11);
    \u0275\u0275elementStart(4, "div", 12)(5, "div", 13)(6, "label");
    \u0275\u0275text(7, "\u0627\u0633\u0645 \u0627\u0644\u0633\u0643\u0646 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function Admin_Conditional_10_Conditional_7_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.hostelForm.hostelName, $event) || (ctx_r1.hostelForm.hostelName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 13)(10, "label");
    \u0275\u0275text(11, "\u0627\u0644\u0645\u0648\u0642\u0639 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 15);
    \u0275\u0275twoWayListener("ngModelChange", function Admin_Conditional_10_Conditional_7_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.hostelForm.location, $event) || (ctx_r1.hostelForm.location = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "label");
    \u0275\u0275text(16, "\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0642\u0635\u0648\u0649 *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function Admin_Conditional_10_Conditional_7_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.hostelForm.capacity, $event) || (ctx_r1.hostelForm.capacity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 13)(19, "label");
    \u0275\u0275text(20, "\u0639\u062F\u062F \u0627\u0644\u0633\u0643\u0627\u0646 \u0627\u0644\u062D\u0627\u0644\u064A\u064A\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function Admin_Conditional_10_Conditional_7_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.hostelForm.currentResidents, $event) || (ctx_r1.hostelForm.currentResidents = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "div", 13)(23, "label");
    \u0275\u0275text(24, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "textarea", 18);
    \u0275\u0275twoWayListener("ngModelChange", function Admin_Conditional_10_Conditional_7_Template_textarea_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.hostelForm.info, $event) || (ctx_r1.hostelForm.info = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 13)(27, "label");
    \u0275\u0275text(28, "\u0635\u0648\u0631 \u0627\u0644\u0633\u0643\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 19)(30, "input", 20);
    \u0275\u0275listener("change", function Admin_Conditional_10_Conditional_7_Template_input_change_30_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onImageFilesSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "label", 21);
    \u0275\u0275conditionalCreate(32, Admin_Conditional_10_Conditional_7_Conditional_32_Template, 1, 0)(33, Admin_Conditional_10_Conditional_7_Conditional_33_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 22)(35, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function Admin_Conditional_10_Conditional_7_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.newImageUrl, $event) || (ctx_r1.newImageUrl = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 24);
    \u0275\u0275listener("click", function Admin_Conditional_10_Conditional_7_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addImageUrl());
    });
    \u0275\u0275text(37, "+");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(38, Admin_Conditional_10_Conditional_7_Conditional_38_Template, 3, 0, "div", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 26)(40, "button", 6);
    \u0275\u0275listener("click", function Admin_Conditional_10_Conditional_7_Template_button_click_40_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.saveHostel());
    });
    \u0275\u0275conditionalCreate(41, Admin_Conditional_10_Conditional_7_Conditional_41_Template, 1, 0)(42, Admin_Conditional_10_Conditional_7_Conditional_42_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "button", 27);
    \u0275\u0275listener("click", function Admin_Conditional_10_Conditional_7_Template_button_click_43_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelHostelForm());
    });
    \u0275\u0275text(44, "\u0625\u0644\u063A\u0627\u0621");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.editingHostel() ? "\u062A\u0639\u062F\u064A\u0644 \u0633\u0643\u0646" : "\u0625\u0636\u0627\u0641\u0629 \u0633\u0643\u0646 \u062C\u062F\u064A\u062F");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hostelError() ? 3 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hostelForm.hostelName);
    \u0275\u0275property("disabled", !!ctx_r1.editingHostel());
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hostelForm.location);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hostelForm.capacity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hostelForm.currentResidents);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.hostelForm.info);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.imageUploadLoading() ? 32 : 33);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newImageUrl);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.hostelForm.imageUrls.length > 0 ? 38 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.hostelSaving());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hostelSaving() ? 41 : 42);
  }
}
function Admin_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function Admin_Conditional_10_Conditional_9_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "button", 31);
    \u0275\u0275listener("click", function Admin_Conditional_10_Conditional_9_For_16_Template_button_click_11_listener() {
      const h_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openEditHostel(h_r7));
    });
    \u0275\u0275text(12, "\u062A\u0639\u062F\u064A\u0644");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const h_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(h_r7.hostelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.location);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(h_r7.currentResidents);
  }
}
function Admin_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u0627\u0633\u0645 \u0627\u0644\u0633\u0643\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u0645\u0648\u0642\u0639");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0627\u0644\u0637\u0627\u0642\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0627\u0644\u0633\u0643\u0627\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, Admin_Conditional_10_Conditional_9_For_16_Template, 13, 4, "tr", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.hostels());
  }
}
function Admin_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2");
    \u0275\u0275text(3, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0633\u0643\u0646\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 6);
    \u0275\u0275listener("click", function Admin_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openAddHostel());
    });
    \u0275\u0275text(5, "+ \u0625\u0636\u0627\u0641\u0629 \u0633\u0643\u0646");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(6, Admin_Conditional_10_Conditional_6_Template, 2, 1, "div", 7);
    \u0275\u0275conditionalCreate(7, Admin_Conditional_10_Conditional_7_Template, 45, 13, "div", 8);
    \u0275\u0275conditionalCreate(8, Admin_Conditional_10_Conditional_8_Template, 1, 0, "div", 9)(9, Admin_Conditional_10_Conditional_9_Template, 17, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.showHostelForm());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hostelSuccess() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.showHostelForm() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hostelsLoading() ? 8 : 9);
  }
}
function Admin_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.usersSuccess());
  }
}
function Admin_Conditional_11_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.usersError());
  }
}
function Admin_Conditional_11_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function Admin_Conditional_11_Conditional_7_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 33);
  }
  if (rf & 2) {
    const u_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", u_r9.profileImageUrl, \u0275\u0275sanitizeUrl);
  }
}
function Admin_Conditional_11_Conditional_7_For_18_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r9.username.charAt(0).toUpperCase());
  }
}
function Admin_Conditional_11_Conditional_7_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "div", 32);
    \u0275\u0275conditionalCreate(3, Admin_Conditional_11_Conditional_7_For_18_Conditional_3_Template, 1, 1, "img", 33)(4, Admin_Conditional_11_Conditional_7_For_18_Conditional_4_Template, 2, 1, "div", 34);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "span", 35);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "td", 36)(17, "button", 31);
    \u0275\u0275listener("click", function Admin_Conditional_11_Conditional_7_For_18_Template_button_click_17_listener() {
      const u_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.toggleRole(u_r9));
    });
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 37);
    \u0275\u0275listener("click", function Admin_Conditional_11_Conditional_7_For_18_Template_button_click_19_listener() {
      const u_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.deleteUser(u_r9));
    });
    \u0275\u0275text(20, "\u062D\u0630\u0641");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r9 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(u_r9.profileImageUrl ? 3 : 4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(u_r9.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r9.civilNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r9.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(u_r9.hostelName ?? "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(u_r9.role === "Admin" ? "tag-admin" : "tag-user");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r9.role);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", u_r9.role === "Admin" ? "\u062C\u0639\u0644 \u0645\u0633\u062A\u062E\u062F\u0645" : "\u062C\u0639\u0644 \u0623\u062F\u0645\u0646", " ");
  }
}
function Admin_Conditional_11_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0627\u0644\u0633\u0643\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u0627\u0644\u062F\u0648\u0631");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "tbody");
    \u0275\u0275repeaterCreate(17, Admin_Conditional_11_Conditional_7_For_18_Template, 21, 9, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(17);
    \u0275\u0275repeater(ctx_r1.users());
  }
}
function Admin_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2");
    \u0275\u0275text(3, "\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, Admin_Conditional_11_Conditional_4_Template, 2, 1, "div", 7);
    \u0275\u0275conditionalCreate(5, Admin_Conditional_11_Conditional_5_Template, 2, 1, "div", 11);
    \u0275\u0275conditionalCreate(6, Admin_Conditional_11_Conditional_6_Template, 1, 0, "div", 9)(7, Admin_Conditional_11_Conditional_7_Template, 19, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.usersSuccess() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.usersError() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.usersLoading() ? 6 : 7);
  }
}
function Admin_Conditional_12_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.requestsSuccess());
  }
}
function Admin_Conditional_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.requestsError());
  }
}
function Admin_Conditional_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function Admin_Conditional_12_Conditional_7_For_16_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0645\u0639\u0644\u0642 ");
  }
}
function Admin_Conditional_12_Conditional_7_For_16_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0645\u0642\u0628\u0648\u0644 ");
  }
}
function Admin_Conditional_12_Conditional_7_For_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0645\u0631\u0641\u0648\u0636 ");
  }
}
function Admin_Conditional_12_Conditional_7_For_16_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function Admin_Conditional_12_Conditional_7_For_16_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const r_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateRequestStatus(r_r11, "Approved"));
    });
    \u0275\u0275text(1, "\u0642\u0628\u0648\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 37);
    \u0275\u0275listener("click", function Admin_Conditional_12_Conditional_7_For_16_Conditional_13_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r10);
      const r_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.updateRequestStatus(r_r11, "Rejected"));
    });
    \u0275\u0275text(3, "\u0631\u0641\u0636");
    \u0275\u0275elementEnd();
  }
}
function Admin_Conditional_12_Conditional_7_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td")(8, "span", 35);
    \u0275\u0275conditionalCreate(9, Admin_Conditional_12_Conditional_7_For_16_Conditional_9_Template, 1, 0)(10, Admin_Conditional_12_Conditional_7_For_16_Conditional_10_Template, 1, 0)(11, Admin_Conditional_12_Conditional_7_For_16_Conditional_11_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td", 36);
    \u0275\u0275conditionalCreate(13, Admin_Conditional_12_Conditional_7_For_16_Conditional_13_Template, 4, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r11.hostelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(r_r11.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("tag-" + r_r11.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275conditional(r_r11.status === "Pending" ? 9 : r_r11.status === "Approved" ? 10 : 11);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(r_r11.status === "Pending" ? 13 : -1);
  }
}
function Admin_Conditional_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "table")(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "\u0627\u0644\u0633\u0643\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "\u0627\u0644\u062A\u0627\u0631\u064A\u062E");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "\u0627\u0644\u062D\u0627\u0644\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "\u0625\u062C\u0631\u0627\u0621\u0627\u062A");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275repeaterCreate(15, Admin_Conditional_12_Conditional_7_For_16_Template, 14, 7, "tr", null, _forTrack1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r1.requests());
  }
}
function Admin_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "h2");
    \u0275\u0275text(3, "\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u0643\u0646");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, Admin_Conditional_12_Conditional_4_Template, 2, 1, "div", 7);
    \u0275\u0275conditionalCreate(5, Admin_Conditional_12_Conditional_5_Template, 2, 1, "div", 11);
    \u0275\u0275conditionalCreate(6, Admin_Conditional_12_Conditional_6_Template, 1, 0, "div", 9)(7, Admin_Conditional_12_Conditional_7_Template, 17, 0, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.requestsSuccess() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requestsError() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.requestsLoading() ? 6 : 7);
  }
}
var Admin = class _Admin {
  hostelService = inject(HostelService);
  userService = inject(UserService);
  requestService = inject(RequestService);
  activeTab = signal("hostels", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  // --- Hostels ---
  hostels = signal([], ...ngDevMode ? [{ debugName: "hostels" }] : []);
  hostelsLoading = signal(true, ...ngDevMode ? [{ debugName: "hostelsLoading" }] : []);
  showHostelForm = signal(false, ...ngDevMode ? [{ debugName: "showHostelForm" }] : []);
  editingHostel = signal(null, ...ngDevMode ? [{ debugName: "editingHostel" }] : []);
  hostelForm = this.emptyHostelForm();
  hostelError = signal("", ...ngDevMode ? [{ debugName: "hostelError" }] : []);
  hostelSuccess = signal("", ...ngDevMode ? [{ debugName: "hostelSuccess" }] : []);
  hostelSaving = signal(false, ...ngDevMode ? [{ debugName: "hostelSaving" }] : []);
  imageUploadLoading = signal(false, ...ngDevMode ? [{ debugName: "imageUploadLoading" }] : []);
  newImageUrl = "";
  // --- Users ---
  users = signal([], ...ngDevMode ? [{ debugName: "users" }] : []);
  usersLoading = signal(true, ...ngDevMode ? [{ debugName: "usersLoading" }] : []);
  usersError = signal("", ...ngDevMode ? [{ debugName: "usersError" }] : []);
  usersSuccess = signal("", ...ngDevMode ? [{ debugName: "usersSuccess" }] : []);
  // --- Requests ---
  requests = signal([], ...ngDevMode ? [{ debugName: "requests" }] : []);
  requestsLoading = signal(true, ...ngDevMode ? [{ debugName: "requestsLoading" }] : []);
  requestsError = signal("", ...ngDevMode ? [{ debugName: "requestsError" }] : []);
  requestsSuccess = signal("", ...ngDevMode ? [{ debugName: "requestsSuccess" }] : []);
  ngOnInit() {
    this.loadHostels();
    this.loadUsers();
    this.loadRequests();
  }
  // ====== HOSTELS ======
  emptyHostelForm() {
    return { hostelName: "", capacity: 0, currentResidents: 0, location: "", imageUrls: [], info: "" };
  }
  loadHostels() {
    this.hostelsLoading.set(true);
    this.hostelService.getAll().subscribe({
      next: (h) => {
        this.hostels.set(h);
        this.hostelsLoading.set(false);
      },
      error: () => this.hostelsLoading.set(false)
    });
  }
  openAddHostel() {
    this.editingHostel.set(null);
    this.hostelForm = this.emptyHostelForm();
    this.hostelError.set("");
    this.hostelSuccess.set("");
    this.showHostelForm.set(true);
  }
  openEditHostel(h) {
    this.editingHostel.set(h);
    this.hostelForm = __spreadProps(__spreadValues({}, h), { imageUrls: [...h.imageUrls] });
    this.hostelError.set("");
    this.hostelSuccess.set("");
    this.showHostelForm.set(true);
  }
  cancelHostelForm() {
    this.showHostelForm.set(false);
    this.editingHostel.set(null);
  }
  addImageUrl() {
    const url = this.newImageUrl.trim();
    if (url && !this.hostelForm.imageUrls.includes(url)) {
      this.hostelForm.imageUrls = [...this.hostelForm.imageUrls, url];
      this.newImageUrl = "";
    }
  }
  removeImageUrl(url) {
    this.hostelForm.imageUrls = this.hostelForm.imageUrls.filter((u) => u !== url);
  }
  onImageFilesSelected(event) {
    const input = event.target;
    if (!input.files?.length)
      return;
    const files = Array.from(input.files);
    this.imageUploadLoading.set(true);
    this.hostelService.uploadImages(files).subscribe({
      next: (res) => {
        this.hostelForm.imageUrls = [...this.hostelForm.imageUrls, ...res.imageUrls];
        this.imageUploadLoading.set(false);
      },
      error: (err) => {
        this.hostelError.set(err?.error?.message ?? "\u062E\u0637\u0623 \u0641\u064A \u0631\u0641\u0639 \u0627\u0644\u0635\u0648\u0631");
        this.imageUploadLoading.set(false);
      }
    });
  }
  saveHostel() {
    if (!this.hostelForm.hostelName.trim() || !this.hostelForm.location.trim() || this.hostelForm.capacity <= 0) {
      this.hostelError.set("\u064A\u0631\u062C\u0649 \u062A\u0639\u0628\u0626\u0629 \u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0644 \u0627\u0644\u0645\u0637\u0644\u0648\u0628\u0629");
      return;
    }
    this.hostelSaving.set(true);
    this.hostelError.set("");
    const editing = this.editingHostel();
    const onSuccess = () => {
      this.hostelSuccess.set(editing ? "\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0633\u0643\u0646 \u0628\u0646\u062C\u0627\u062D" : "\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u0633\u0643\u0646 \u0628\u0646\u062C\u0627\u062D");
      this.hostelSaving.set(false);
      this.showHostelForm.set(false);
      this.loadHostels();
      setTimeout(() => this.hostelSuccess.set(""), 3e3);
    };
    const onError = (err) => {
      this.hostelError.set(err?.error?.message ?? "\u062D\u062F\u062B \u062E\u0637\u0623");
      this.hostelSaving.set(false);
    };
    if (editing) {
      this.hostelService.update(editing.hostelName, this.hostelForm).subscribe({ next: onSuccess, error: onError });
    } else {
      this.hostelService.create(this.hostelForm).subscribe({ next: onSuccess, error: onError });
    }
  }
  // ====== USERS ======
  loadUsers() {
    this.usersLoading.set(true);
    this.userService.getAll().subscribe({
      next: (u) => {
        this.users.set(u);
        this.usersLoading.set(false);
      },
      error: () => this.usersLoading.set(false)
    });
  }
  toggleRole(user) {
    const newRole = user.role === "Admin" ? "User" : "Admin";
    this.userService.updateRole(user.id, newRole).subscribe({
      next: () => {
        this.users.update((prev) => prev.map((u) => u.id === user.id ? __spreadProps(__spreadValues({}, u), { role: newRole }) : u));
        this.usersSuccess.set("\u062A\u0645 \u062A\u062D\u062F\u064A\u062B \u0627\u0644\u0635\u0644\u0627\u062D\u064A\u0629");
        setTimeout(() => this.usersSuccess.set(""), 3e3);
      },
      error: (err) => this.usersError.set(err?.error?.message ?? "\u062D\u062F\u062B \u062E\u0637\u0623")
    });
  }
  deleteUser(user) {
    if (!confirm(`\u0647\u0644 \u062A\u0631\u064A\u062F \u062D\u0630\u0641 "${user.username}"?`))
      return;
    this.userService.delete(user.id).subscribe({
      next: () => {
        this.users.update((prev) => prev.filter((u) => u.id !== user.id));
        this.usersSuccess.set("\u062A\u0645 \u062D\u0630\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645");
        setTimeout(() => this.usersSuccess.set(""), 3e3);
      },
      error: (err) => this.usersError.set(err?.error?.message ?? "\u062D\u062F\u062B \u062E\u0637\u0623")
    });
  }
  // ====== REQUESTS ======
  loadRequests() {
    this.requestsLoading.set(true);
    this.requestService.getAll().subscribe({
      next: (r) => {
        this.requests.set(r);
        this.requestsLoading.set(false);
      },
      error: () => this.requestsLoading.set(false)
    });
  }
  updateRequestStatus(req, status) {
    this.requestService.updateStatus(req.id, status).subscribe({
      next: () => {
        this.requests.update((prev) => prev.map((r) => r.id === req.id ? __spreadProps(__spreadValues({}, r), { status }) : r));
        this.requestsSuccess.set(`\u062A\u0645 ${status === "Approved" ? "\u0642\u0628\u0648\u0644" : "\u0631\u0641\u0636"} \u0627\u0644\u0637\u0644\u0628`);
        setTimeout(() => this.requestsSuccess.set(""), 3e3);
      },
      error: (err) => this.requestsError.set(err?.error?.message ?? "\u062D\u062F\u062B \u062E\u0637\u0623")
    });
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("ar-SA", { year: "numeric", month: "short", day: "numeric" });
  }
  static \u0275fac = function Admin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Admin)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Admin, selectors: [["app-admin"]], decls: 13, vars: 12, consts: [[1, "page-container"], [1, "section-title"], [1, "tabs"], [1, "tab-btn", 3, "click"], [1, "tab-content"], [1, "tab-header"], [1, "btn", "btn-primary", 3, "click", "disabled"], [1, "alert", "alert-success"], [1, "form-card", "card"], [1, "spinner"], [1, "table-container"], [1, "alert", "alert-error"], [1, "form-row2"], [1, "form-group"], ["type", "text", "placeholder", "\u0627\u0633\u0645 \u0627\u0644\u0633\u0643\u0646", 3, "ngModelChange", "ngModel", "disabled"], ["type", "text", "placeholder", "\u0645\u062B\u0627\u0644: \u0645\u0628\u0646\u0649 A", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["rows", "3", "placeholder", "\u0623\u062F\u062E\u0644 \u0648\u0635\u0641\u0627\u064B \u0623\u0648 \u062A\u0641\u0627\u0635\u064A\u0644...", 3, "ngModelChange", "ngModel"], [1, "image-tools"], ["type", "file", "accept", "image/*", "multiple", "", "id", "hostel-imgs", 2, "display", "none", 3, "change"], ["for", "hostel-imgs", 1, "btn", "btn-secondary", "btn-sm"], [1, "url-input"], ["type", "text", "placeholder", "\u0623\u0648 \u0623\u062F\u062E\u0644 \u0631\u0627\u0628\u0637 \u0635\u0648\u0631\u0629", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-outline", "btn-sm", 3, "click"], [1, "image-previews"], [1, "form-actions"], [1, "btn", "btn-secondary", 3, "click"], [1, "img-thumb"], ["alt", "preview", 3, "src"], [1, "remove-img", 3, "click"], [1, "btn", "btn-warning", "btn-sm", 3, "click"], [1, "user-cell"], [1, "user-avatar", 3, "src"], [1, "user-avatar-ph"], [1, "tag"], [1, "actions-cell"], [1, "btn", "btn-danger", "btn-sm", 3, "click"], [1, "btn", "btn-success", "btn-sm", 3, "click"]], template: function Admin_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1", 1);
      \u0275\u0275text(2, "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "button", 3);
      \u0275\u0275listener("click", function Admin_Template_button_click_4_listener() {
        return ctx.activeTab.set("hostels");
      });
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function Admin_Template_button_click_6_listener() {
        return ctx.activeTab.set("users");
      });
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "button", 3);
      \u0275\u0275listener("click", function Admin_Template_button_click_8_listener() {
        return ctx.activeTab.set("requests");
      });
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(10, Admin_Conditional_10_Template, 10, 4, "div", 4);
      \u0275\u0275conditionalCreate(11, Admin_Conditional_11_Template, 8, 3, "div", 4);
      \u0275\u0275conditionalCreate(12, Admin_Conditional_12_Template, 8, 3, "div", 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275classProp("active", ctx.activeTab() === "hostels");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" \u{1F3E0} \u0627\u0644\u0633\u0643\u0646\u0627\u062A (", ctx.hostels().length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "users");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" \u{1F464} \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 (", ctx.users().length, ") ");
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.activeTab() === "requests");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" \u{1F4CB} \u0627\u0644\u0637\u0644\u0628\u0627\u062A (", ctx.requests().length, ") ");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "hostels" ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "users" ? 11 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "requests" ? 12 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel], styles: ["\n\n.tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.tab-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0.7rem 1.3rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #6b7280;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  cursor: pointer;\n  transition: color 0.2s, border-color 0.2s;\n}\n.tab-btn[_ngcontent-%COMP%]:hover {\n  color: #2563eb;\n}\n.tab-btn.active[_ngcontent-%COMP%] {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n}\n.tab-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fadeIn 0.2s;\n}\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tab-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.tab-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e3a5f;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  border: 2px solid #2563eb;\n}\n.form-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e3a5f;\n  margin-bottom: 1rem;\n}\n.form-row2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.image-tools[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.75rem;\n}\n.url-input[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 200px;\n}\n.url-input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.4rem 0.75rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 7px;\n  font-size: 0.88rem;\n}\n.image-previews[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n.img-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 60px;\n}\n.img-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 2px solid #e5e7eb;\n}\n.remove-img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -6px;\n  left: -6px;\n  width: 18px;\n  height: 18px;\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n}\n.user-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-avatar-ph[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #2563eb;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.88rem;\n  flex-shrink: 0;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.75rem;\n  font-size: 0.82rem;\n}\n/*# sourceMappingURL=admin.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Admin, [{
    type: Component,
    args: [{ selector: "app-admin", imports: [FormsModule], template: `<div class="page-container">\r
  <h1 class="section-title">\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645</h1>\r
\r
  <!-- Tabs -->\r
  <div class="tabs">\r
    <button class="tab-btn" [class.active]="activeTab() === 'hostels'" (click)="activeTab.set('hostels')">\r
      &#127968; \u0627\u0644\u0633\u0643\u0646\u0627\u062A ({{ hostels().length }})\r
    </button>\r
    <button class="tab-btn" [class.active]="activeTab() === 'users'" (click)="activeTab.set('users')">\r
      &#128100; \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u0648\u0646 ({{ users().length }})\r
    </button>\r
    <button class="tab-btn" [class.active]="activeTab() === 'requests'" (click)="activeTab.set('requests')">\r
      &#128203; \u0627\u0644\u0637\u0644\u0628\u0627\u062A ({{ requests().length }})\r
    </button>\r
  </div>\r
\r
  <!-- ==================== HOSTELS TAB ==================== -->\r
  @if (activeTab() === 'hostels') {\r
    <div class="tab-content">\r
      <div class="tab-header">\r
        <h2>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0633\u0643\u0646\u0627\u062A</h2>\r
        <button class="btn btn-primary" (click)="openAddHostel()" [disabled]="showHostelForm()">+ \u0625\u0636\u0627\u0641\u0629 \u0633\u0643\u0646</button>\r
      </div>\r
\r
      @if (hostelSuccess()) { <div class="alert alert-success">{{ hostelSuccess() }}</div> }\r
\r
      <!-- Hostel Form -->\r
      @if (showHostelForm()) {\r
        <div class="form-card card">\r
          <h3>{{ editingHostel() ? '\u062A\u0639\u062F\u064A\u0644 \u0633\u0643\u0646' : '\u0625\u0636\u0627\u0641\u0629 \u0633\u0643\u0646 \u062C\u062F\u064A\u062F' }}</h3>\r
          @if (hostelError()) { <div class="alert alert-error">{{ hostelError() }}</div> }\r
\r
          <div class="form-row2">\r
            <div class="form-group">\r
              <label>\u0627\u0633\u0645 \u0627\u0644\u0633\u0643\u0646 *</label>\r
              <input type="text" [(ngModel)]="hostelForm.hostelName" [disabled]="!!editingHostel()" placeholder="\u0627\u0633\u0645 \u0627\u0644\u0633\u0643\u0646" />\r
            </div>\r
            <div class="form-group">\r
              <label>\u0627\u0644\u0645\u0648\u0642\u0639 *</label>\r
              <input type="text" [(ngModel)]="hostelForm.location" placeholder="\u0645\u062B\u0627\u0644: \u0645\u0628\u0646\u0649 A" />\r
            </div>\r
          </div>\r
\r
          <div class="form-row2">\r
            <div class="form-group">\r
              <label>\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0642\u0635\u0648\u0649 *</label>\r
              <input type="number" [(ngModel)]="hostelForm.capacity" min="1" />\r
            </div>\r
            <div class="form-group">\r
              <label>\u0639\u062F\u062F \u0627\u0644\u0633\u0643\u0627\u0646 \u0627\u0644\u062D\u0627\u0644\u064A\u064A\u0646</label>\r
              <input type="number" [(ngModel)]="hostelForm.currentResidents" min="0" />\r
            </div>\r
          </div>\r
\r
          <div class="form-group">\r
            <label>\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629</label>\r
            <textarea [(ngModel)]="hostelForm.info" rows="3" placeholder="\u0623\u062F\u062E\u0644 \u0648\u0635\u0641\u0627\u064B \u0623\u0648 \u062A\u0641\u0627\u0635\u064A\u0644..."></textarea>\r
          </div>\r
\r
          <!-- Image Upload -->\r
          <div class="form-group">\r
            <label>\u0635\u0648\u0631 \u0627\u0644\u0633\u0643\u0646</label>\r
            <div class="image-tools">\r
              <input type="file" accept="image/*" multiple (change)="onImageFilesSelected($event)" id="hostel-imgs" style="display:none" />\r
              <label for="hostel-imgs" class="btn btn-secondary btn-sm">\r
                @if (imageUploadLoading()) { \u062C\u0627\u0631\u064A \u0627\u0644\u0631\u0641\u0639... } @else { \u0631\u0641\u0639 \u0635\u0648\u0631 }\r
              </label>\r
              <div class="url-input">\r
                <input type="text" [(ngModel)]="newImageUrl" placeholder="\u0623\u0648 \u0623\u062F\u062E\u0644 \u0631\u0627\u0628\u0637 \u0635\u0648\u0631\u0629" />\r
                <button class="btn btn-outline btn-sm" (click)="addImageUrl()">+</button>\r
              </div>\r
            </div>\r
            @if (hostelForm.imageUrls.length > 0) {\r
              <div class="image-previews">\r
                @for (url of hostelForm.imageUrls; track url) {\r
                  <div class="img-thumb">\r
                    <img [src]="url" alt="preview" />\r
                    <button class="remove-img" (click)="removeImageUrl(url)">&#10005;</button>\r
                  </div>\r
                }\r
              </div>\r
            }\r
          </div>\r
\r
          <div class="form-actions">\r
            <button class="btn btn-primary" (click)="saveHostel()" [disabled]="hostelSaving()">\r
              @if (hostelSaving()) { \u062C\u0627\u0631\u064A... } @else { \u062D\u0641\u0638 }\r
            </button>\r
            <button class="btn btn-secondary" (click)="cancelHostelForm()">\u0625\u0644\u063A\u0627\u0621</button>\r
          </div>\r
        </div>\r
      }\r
\r
      <!-- Hostels Table -->\r
      @if (hostelsLoading()) {\r
        <div class="spinner"></div>\r
      } @else {\r
        <div class="table-container">\r
          <table>\r
            <thead>\r
              <tr>\r
                <th>\u0627\u0633\u0645 \u0627\u0644\u0633\u0643\u0646</th>\r
                <th>\u0627\u0644\u0645\u0648\u0642\u0639</th>\r
                <th>\u0627\u0644\u0637\u0627\u0642\u0629</th>\r
                <th>\u0627\u0644\u0633\u0643\u0627\u0646</th>\r
                <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (h of hostels(); track h.hostelName) {\r
                <tr>\r
                  <td><strong>{{ h.hostelName }}</strong></td>\r
                  <td>{{ h.location }}</td>\r
                  <td>{{ h.capacity }}</td>\r
                  <td>{{ h.currentResidents }}</td>\r
                  <td>\r
                    <button class="btn btn-warning btn-sm" (click)="openEditHostel(h)">\u062A\u0639\u062F\u064A\u0644</button>\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      }\r
    </div>\r
  }\r
\r
  <!-- ==================== USERS TAB ==================== -->\r
  @if (activeTab() === 'users') {\r
    <div class="tab-content">\r
      <div class="tab-header"><h2>\u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645\u064A\u0646</h2></div>\r
      @if (usersSuccess()) { <div class="alert alert-success">{{ usersSuccess() }}</div> }\r
      @if (usersError()) { <div class="alert alert-error">{{ usersError() }}</div> }\r
\r
      @if (usersLoading()) {\r
        <div class="spinner"></div>\r
      } @else {\r
        <div class="table-container">\r
          <table>\r
            <thead>\r
              <tr>\r
                <th>\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645</th>\r
                <th>\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A</th>\r
                <th>\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062A\u0641</th>\r
                <th>\u0627\u0644\u0633\u0643\u0646</th>\r
                <th>\u0627\u0644\u062F\u0648\u0631</th>\r
                <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (u of users(); track u.id) {\r
                <tr>\r
                  <td>\r
                    <div class="user-cell">\r
                      @if (u.profileImageUrl) {\r
                        <img [src]="u.profileImageUrl" class="user-avatar" />\r
                      } @else {\r
                        <div class="user-avatar-ph">{{ u.username.charAt(0).toUpperCase() }}</div>\r
                      }\r
                      <span>{{ u.username }}</span>\r
                    </div>\r
                  </td>\r
                  <td>{{ u.civilNumber }}</td>\r
                  <td>{{ u.number }}</td>\r
                  <td>{{ u.hostelName ?? '\u2014' }}</td>\r
                  <td><span class="tag" [class]="u.role === 'Admin' ? 'tag-admin' : 'tag-user'">{{ u.role }}</span></td>\r
                  <td class="actions-cell">\r
                    <button class="btn btn-warning btn-sm" (click)="toggleRole(u)">\r
                      {{ u.role === 'Admin' ? '\u062C\u0639\u0644 \u0645\u0633\u062A\u062E\u062F\u0645' : '\u062C\u0639\u0644 \u0623\u062F\u0645\u0646' }}\r
                    </button>\r
                    <button class="btn btn-danger btn-sm" (click)="deleteUser(u)">\u062D\u0630\u0641</button>\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      }\r
    </div>\r
  }\r
\r
  <!-- ==================== REQUESTS TAB ==================== -->\r
  @if (activeTab() === 'requests') {\r
    <div class="tab-content">\r
      <div class="tab-header"><h2>\u0637\u0644\u0628\u0627\u062A \u0627\u0644\u0633\u0643\u0646</h2></div>\r
      @if (requestsSuccess()) { <div class="alert alert-success">{{ requestsSuccess() }}</div> }\r
      @if (requestsError()) { <div class="alert alert-error">{{ requestsError() }}</div> }\r
\r
      @if (requestsLoading()) {\r
        <div class="spinner"></div>\r
      } @else {\r
        <div class="table-container">\r
          <table>\r
            <thead>\r
              <tr>\r
                <th>\u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645</th>\r
                <th>\u0627\u0644\u0633\u0643\u0646 \u0627\u0644\u0645\u0637\u0644\u0648\u0628</th>\r
                <th>\u0627\u0644\u062A\u0627\u0631\u064A\u062E</th>\r
                <th>\u0627\u0644\u062D\u0627\u0644\u0629</th>\r
                <th>\u0625\u062C\u0631\u0627\u0621\u0627\u062A</th>\r
              </tr>\r
            </thead>\r
            <tbody>\r
              @for (r of requests(); track r.id) {\r
                <tr>\r
                  <td>{{ r.username }}</td>\r
                  <td>{{ r.hostelName }}</td>\r
                  <td>{{ formatDate(r.createdAt) }}</td>\r
                  <td>\r
                    <span class="tag" [class]="'tag-' + r.status.toLowerCase()">\r
                      @if (r.status === 'Pending') { \u0645\u0639\u0644\u0642 }\r
                      @else if (r.status === 'Approved') { \u0645\u0642\u0628\u0648\u0644 }\r
                      @else { \u0645\u0631\u0641\u0648\u0636 }\r
                    </span>\r
                  </td>\r
                  <td class="actions-cell">\r
                    @if (r.status === 'Pending') {\r
                      <button class="btn btn-success btn-sm" (click)="updateRequestStatus(r, 'Approved')">\u0642\u0628\u0648\u0644</button>\r
                      <button class="btn btn-danger btn-sm" (click)="updateRequestStatus(r, 'Rejected')">\u0631\u0641\u0636</button>\r
                    }\r
                  </td>\r
                </tr>\r
              }\r
            </tbody>\r
          </table>\r
        </div>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/components/admin/admin.css */\n.tabs {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n  border-bottom: 2px solid #e5e7eb;\n  padding-bottom: 0;\n}\n.tab-btn {\n  background: none;\n  border: none;\n  padding: 0.7rem 1.3rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #6b7280;\n  border-bottom: 3px solid transparent;\n  margin-bottom: -2px;\n  cursor: pointer;\n  transition: color 0.2s, border-color 0.2s;\n}\n.tab-btn:hover {\n  color: #2563eb;\n}\n.tab-btn.active {\n  color: #2563eb;\n  border-bottom-color: #2563eb;\n}\n.tab-content {\n  animation: fadeIn 0.2s;\n}\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tab-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.tab-header h2 {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #1e3a5f;\n}\n.form-card {\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n  border: 2px solid #2563eb;\n}\n.form-card h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e3a5f;\n  margin-bottom: 1rem;\n}\n.form-row2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n}\n.form-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.image-tools {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.75rem;\n}\n.url-input {\n  display: flex;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 200px;\n}\n.url-input input {\n  flex: 1;\n  padding: 0.4rem 0.75rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 7px;\n  font-size: 0.88rem;\n}\n.image-previews {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n}\n.img-thumb {\n  position: relative;\n  width: 72px;\n  height: 60px;\n}\n.img-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  border-radius: 6px;\n  border: 2px solid #e5e7eb;\n}\n.remove-img {\n  position: absolute;\n  top: -6px;\n  left: -6px;\n  width: 18px;\n  height: 18px;\n  background: #dc2626;\n  color: #fff;\n  border: none;\n  border-radius: 50%;\n  font-size: 0.65rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  padding: 0;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.user-avatar {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.user-avatar-ph {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #2563eb;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.88rem;\n  flex-shrink: 0;\n}\n.actions-cell {\n  display: flex;\n  gap: 0.4rem;\n  flex-wrap: wrap;\n}\n.btn-sm {\n  padding: 0.3rem 0.75rem;\n  font-size: 0.82rem;\n}\n/*# sourceMappingURL=admin.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Admin, { className: "Admin", filePath: "src/app/components/admin/admin.ts", lineNumber: 15 });
})();
export {
  Admin
};
//# sourceMappingURL=chunk-Z2JTZOXD.js.map
