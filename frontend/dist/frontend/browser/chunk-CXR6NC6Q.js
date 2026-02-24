import {
  ActivatedRoute,
  AuthService,
  RouterLink
} from "./chunk-JJ33MNBI.js";
import {
  RequestService
} from "./chunk-AXDNQ5YN.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-QGFOKBGT.js";
import {
  HostelService
} from "./chunk-DTCR6Y5F.js";
import {
  Component,
  HttpClient,
  Injectable,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UC2EJXZ5.js";

// src/app/services/comment.service.ts
var CommentService = class _CommentService {
  http;
  API = "http://localhost:5003/api/comments";
  constructor(http) {
    this.http = http;
  }
  getByHostel(hostelName) {
    return this.http.get(`${this.API}/${encodeURIComponent(hostelName)}`);
  }
  create(text, hostelName) {
    return this.http.post(this.API, { text, hostelName });
  }
  static \u0275fac = function CommentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CommentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CommentService, factory: _CommentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CommentService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/components/hostel-detail/hostel-detail.ts
var _forTrack0 = ($index, $item) => $item.id;
function HostelDetail_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "div", 2);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u0643\u0646...");
    \u0275\u0275elementEnd()();
  }
}
function HostelDetail_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 4);
    \u0275\u0275text(3, "\u2192 \u0627\u0644\u0639\u0648\u062F\u0629");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function HostelDetail_Conditional_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1, "\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0643\u0646");
    \u0275\u0275elementEnd();
  }
}
function HostelDetail_Conditional_3_Conditional_7_Conditional_3_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "img", 40);
    \u0275\u0275listener("click", function HostelDetail_Conditional_3_Conditional_7_Conditional_3_For_2_Template_img_click_0_listener() {
      const \u0275$index_44_r3 = \u0275\u0275restoreView(_r2).$index;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.selectedImageIndex.set(\u0275$index_44_r3));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const url_r4 = ctx.$implicit;
    const \u0275$index_44_r3 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("active", ctx_r0.selectedImageIndex() === \u0275$index_44_r3);
    \u0275\u0275property("src", url_r4, \u0275\u0275sanitizeUrl)("alt", ctx_r0.hostel().hostelName);
  }
}
function HostelDetail_Conditional_3_Conditional_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275repeaterCreate(1, HostelDetail_Conditional_3_Conditional_7_Conditional_3_For_2_Template, 1, 4, "img", 39, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.hostel().imageUrls);
  }
}
function HostelDetail_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 36);
    \u0275\u0275element(2, "img", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, HostelDetail_Conditional_3_Conditional_7_Conditional_3_Template, 3, 0, "div", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.hostel().imageUrls[ctx_r0.selectedImageIndex()], \u0275\u0275sanitizeUrl)("alt", ctx_r0.hostel().hostelName);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hostel().imageUrls.length > 1 ? 3 : -1);
  }
}
function HostelDetail_Conditional_3_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, "\u{1F3E0}");
    \u0275\u0275elementEnd();
  }
}
function HostelDetail_Conditional_3_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "h3");
    \u0275\u0275text(2, "\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.hostel().info);
  }
}
function HostelDetail_Conditional_3_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.commentError());
  }
}
function HostelDetail_Conditional_3_Conditional_41_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.commentSuccess());
  }
}
function HostelDetail_Conditional_3_Conditional_41_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062C\u0627\u0631\u064A... ");
  }
}
function HostelDetail_Conditional_3_Conditional_41_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642 ");
  }
}
function HostelDetail_Conditional_3_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275conditionalCreate(1, HostelDetail_Conditional_3_Conditional_41_Conditional_1_Template, 2, 1, "div", 3);
    \u0275\u0275conditionalCreate(2, HostelDetail_Conditional_3_Conditional_41_Conditional_2_Template, 2, 1, "div", 41);
    \u0275\u0275elementStart(3, "textarea", 42);
    \u0275\u0275twoWayListener("ngModelChange", function HostelDetail_Conditional_3_Conditional_41_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.newComment, $event) || (ctx_r0.newComment = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 43);
    \u0275\u0275listener("click", function HostelDetail_Conditional_3_Conditional_41_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submitComment());
    });
    \u0275\u0275conditionalCreate(5, HostelDetail_Conditional_3_Conditional_41_Conditional_5_Template, 1, 0)(6, HostelDetail_Conditional_3_Conditional_41_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.commentError() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.commentSuccess() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newComment);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.commentLoading() || !ctx_r0.newComment.trim());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.commentLoading() ? 5 : 6);
  }
}
function HostelDetail_Conditional_3_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28)(1, "a", 44);
    \u0275\u0275text(2, "\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u0644\u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642 ");
    \u0275\u0275elementEnd();
  }
}
function HostelDetail_Conditional_3_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 30);
    \u0275\u0275text(1, "\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0628\u0639\u062F. \u0643\u0646 \u0623\u0648\u0644 \u0645\u0646 \u064A\u0639\u0644\u0642!");
    \u0275\u0275elementEnd();
  }
}
function HostelDetail_Conditional_3_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46)(4, "div", 47)(5, "span", 48);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 49);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 50);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const comment_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r6.username.charAt(0).toUpperCase());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(comment_r6.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.formatDate(comment_r6.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comment_r6.text);
  }
}
function HostelDetail_Conditional_3_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "\u064A\u062C\u0628 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "a", 51);
    \u0275\u0275text(3, "\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644");
    \u0275\u0275elementEnd();
  }
}
function HostelDetail_Conditional_3_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34);
    \u0275\u0275text(1, "\u0623\u0646\u062A \u0645\u0633\u062C\u0644 \u0641\u064A: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.auth.user().hostelName);
  }
}
function HostelDetail_Conditional_3_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u0648\u0646 \u0644\u0627 \u064A\u0645\u0643\u0646\u0647\u0645 \u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628\u0627\u062A");
    \u0275\u0275elementEnd();
  }
}
function HostelDetail_Conditional_3_Conditional_54_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.requestSuccess());
  }
}
function HostelDetail_Conditional_3_Conditional_54_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.requestError());
  }
}
function HostelDetail_Conditional_3_Conditional_54_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u062C\u0627\u0631\u064A... ");
  }
}
function HostelDetail_Conditional_3_Conditional_54_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0627\u0644\u0633\u0643\u0646 \u0645\u0645\u062A\u0644\u0626 ");
  }
}
function HostelDetail_Conditional_3_Conditional_54_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0637\u0644\u0628 \u0633\u0643\u0646 ");
  }
}
function HostelDetail_Conditional_3_Conditional_54_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 35);
    \u0275\u0275text(1, "\u0623\u0648\u062F \u0627\u0644\u0633\u0643\u0646 \u0641\u064A ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 52);
    \u0275\u0275listener("click", function HostelDetail_Conditional_3_Conditional_54_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.requestRoom());
    });
    \u0275\u0275conditionalCreate(5, HostelDetail_Conditional_3_Conditional_54_Conditional_2_Conditional_5_Template, 1, 0)(6, HostelDetail_Conditional_3_Conditional_54_Conditional_2_Conditional_6_Template, 1, 0)(7, HostelDetail_Conditional_3_Conditional_54_Conditional_2_Conditional_7_Template, 1, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.hostel().hostelName);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.requestLoading() || ctx_r0.hostel().currentResidents >= ctx_r0.hostel().capacity);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.requestLoading() ? 5 : ctx_r0.hostel().currentResidents >= ctx_r0.hostel().capacity ? 6 : 7);
  }
}
function HostelDetail_Conditional_3_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, HostelDetail_Conditional_3_Conditional_54_Conditional_0_Template, 2, 1, "div", 41);
    \u0275\u0275conditionalCreate(1, HostelDetail_Conditional_3_Conditional_54_Conditional_1_Template, 2, 1, "div", 3);
    \u0275\u0275conditionalCreate(2, HostelDetail_Conditional_3_Conditional_54_Conditional_2_Template, 8, 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.requestSuccess() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.requestError() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.requestSuccess() ? 2 : -1);
  }
}
function HostelDetail_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "a", 6);
    \u0275\u0275text(2, "\u2190 \u062C\u0645\u064A\u0639 \u0627\u0644\u0633\u0643\u0646\u0627\u062A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
    \u0275\u0275conditionalCreate(4, HostelDetail_Conditional_3_Conditional_4_Template, 2, 0, "a", 8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275conditionalCreate(7, HostelDetail_Conditional_3_Conditional_7_Template, 4, 3, "div", 11)(8, HostelDetail_Conditional_3_Conditional_8_Template, 2, 0, "div", 12);
    \u0275\u0275elementStart(9, "div", 13)(10, "h1", 14);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 15);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, HostelDetail_Conditional_3_Conditional_14_Template, 5, 1, "div", 16);
    \u0275\u0275elementStart(15, "div", 17)(16, "h3");
    \u0275\u0275text(17, "\u0627\u0644\u0625\u0634\u063A\u0627\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 18)(19, "div", 19)(20, "span", 20);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 21);
    \u0275\u0275text(23, "\u0633\u0627\u0643\u0646 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 19)(25, "span", 20);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 21);
    \u0275\u0275text(28, "\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0642\u0635\u0648\u0649");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 19)(30, "span", 20);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 21);
    \u0275\u0275text(33, "\u0645\u062A\u0627\u062D");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 22);
    \u0275\u0275element(35, "div", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "p", 24);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 25)(39, "h2", 26);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(41, HostelDetail_Conditional_3_Conditional_41_Template, 7, 5, "div", 27)(42, HostelDetail_Conditional_3_Conditional_42_Template, 4, 0, "p", 28);
    \u0275\u0275elementStart(43, "div", 29);
    \u0275\u0275conditionalCreate(44, HostelDetail_Conditional_3_Conditional_44_Template, 2, 0, "p", 30);
    \u0275\u0275repeaterCreate(45, HostelDetail_Conditional_3_For_46_Template, 11, 4, "div", 31, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 32)(48, "div", 33)(49, "h3");
    \u0275\u0275text(50, "\u0637\u0644\u0628 \u0633\u0643\u0646");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(51, HostelDetail_Conditional_3_Conditional_51_Template, 4, 0)(52, HostelDetail_Conditional_3_Conditional_52_Template, 4, 1, "p", 34)(53, HostelDetail_Conditional_3_Conditional_53_Template, 2, 0, "p", 35)(54, HostelDetail_Conditional_3_Conditional_54_Template, 3, 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.auth.isAdmin() ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.hostel().imageUrls && ctx_r0.hostel().imageUrls.length > 0 ? 7 : 8);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.hostel().hostelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", ctx_r0.hostel().location);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.hostel().info ? 14 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.hostel().currentResidents);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.hostel().capacity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.hostel().capacity - ctx_r0.hostel().currentResidents);
    \u0275\u0275advance(4);
    \u0275\u0275styleProp("width", ctx_r0.getOccupancyPercent() + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getOccupancyPercent(), "% \u0645\u0634\u063A\u0648\u0644");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A (", ctx_r0.comments().length, ")");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.auth.isLoggedIn() ? 41 : 42);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.comments().length === 0 ? 44 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.comments());
    \u0275\u0275advance(6);
    \u0275\u0275conditional(!ctx_r0.auth.isLoggedIn() ? 51 : ((tmp_15_0 = ctx_r0.auth.user()) == null ? null : tmp_15_0.hostelName) ? 52 : ctx_r0.auth.isAdmin() ? 53 : 54);
  }
}
var HostelDetail = class _HostelDetail {
  route = inject(ActivatedRoute);
  hostelService = inject(HostelService);
  commentService = inject(CommentService);
  requestService = inject(RequestService);
  auth = inject(AuthService);
  hostel = signal(null, ...ngDevMode ? [{ debugName: "hostel" }] : []);
  comments = signal([], ...ngDevMode ? [{ debugName: "comments" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  selectedImageIndex = signal(0, ...ngDevMode ? [{ debugName: "selectedImageIndex" }] : []);
  newComment = "";
  commentLoading = signal(false, ...ngDevMode ? [{ debugName: "commentLoading" }] : []);
  commentError = signal("", ...ngDevMode ? [{ debugName: "commentError" }] : []);
  commentSuccess = signal("", ...ngDevMode ? [{ debugName: "commentSuccess" }] : []);
  requestLoading = signal(false, ...ngDevMode ? [{ debugName: "requestLoading" }] : []);
  requestError = signal("", ...ngDevMode ? [{ debugName: "requestError" }] : []);
  requestSuccess = signal("", ...ngDevMode ? [{ debugName: "requestSuccess" }] : []);
  ngOnInit() {
    const name = this.route.snapshot.paramMap.get("name");
    this.hostelService.getByName(name).subscribe({
      next: (h) => {
        this.hostel.set(h);
        this.loading.set(false);
        this.loadComments(name);
      },
      error: () => {
        this.error.set("\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u0643\u0646");
        this.loading.set(false);
      }
    });
  }
  loadComments(hostelName) {
    this.commentService.getByHostel(hostelName).subscribe({
      next: (c) => this.comments.set(c)
    });
  }
  submitComment() {
    if (!this.newComment.trim())
      return;
    this.commentLoading.set(true);
    this.commentError.set("");
    this.commentSuccess.set("");
    const hostelName = this.hostel().hostelName;
    this.commentService.create(this.newComment.trim(), hostelName).subscribe({
      next: (comment) => {
        this.comments.update((prev) => [comment, ...prev]);
        this.newComment = "";
        this.commentSuccess.set("\u062A\u0645 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0642 \u0628\u0646\u062C\u0627\u062D");
        this.commentLoading.set(false);
        setTimeout(() => this.commentSuccess.set(""), 3e3);
      },
      error: (err) => {
        this.commentError.set(err?.error?.message ?? "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0636\u0627\u0641\u0629 \u0627\u0644\u062A\u0639\u0644\u064A\u0642");
        this.commentLoading.set(false);
      }
    });
  }
  requestRoom() {
    const hostelName = this.hostel().hostelName;
    this.requestLoading.set(true);
    this.requestError.set("");
    this.requestSuccess.set("");
    this.requestService.create(hostelName).subscribe({
      next: () => {
        this.requestSuccess.set("\u062A\u0645 \u0625\u0631\u0633\u0627\u0644 \u0637\u0644\u0628\u0643 \u0628\u0646\u062C\u0627\u062D. \u0633\u064A\u062A\u0645 \u0645\u0631\u0627\u062C\u0639\u062A\u0647 \u0645\u0646 \u0627\u0644\u0625\u062F\u0627\u0631\u0629");
        this.requestLoading.set(false);
      },
      error: (err) => {
        this.requestError.set(err?.error?.message ?? "\u062D\u062F\u062B \u062E\u0637\u0623 \u0623\u062B\u0646\u0627\u0621 \u0625\u0631\u0633\u0627\u0644 \u0627\u0644\u0637\u0644\u0628");
        this.requestLoading.set(false);
      }
    });
  }
  getOccupancyPercent() {
    const h = this.hostel();
    if (!h || !h.capacity)
      return 0;
    return Math.min(100, Math.round(h.currentResidents / h.capacity * 100));
  }
  formatDate(date) {
    return new Date(date).toLocaleDateString("ar-SA", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  static \u0275fac = function HostelDetail_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HostelDetail)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HostelDetail, selectors: [["app-hostel-detail"]], decls: 4, vars: 1, consts: [[1, "page-container"], [2, "text-align", "center", "padding", "3rem"], [1, "spinner"], [1, "alert", "alert-error"], ["routerLink", "/hostels", 1, "btn", "btn-secondary"], [1, "detail-header"], ["routerLink", "/hostels", 1, "back-link"], [1, "header-actions"], ["routerLink", "/admin", 1, "btn", "btn-warning", "btn-sm"], [1, "detail-layout"], [1, "detail-main"], [1, "gallery"], [1, "no-image-large"], [1, "hostel-details", "card"], [1, "hostel-title"], [1, "hostel-loc"], [1, "hostel-info-text"], [1, "occupancy-section"], [1, "occ-stats"], [1, "occ-stat"], [1, "occ-value"], [1, "occ-label"], [1, "occupancy-bar"], [1, "occupancy-fill"], [1, "occ-pct"], [1, "comments-section"], [1, "section-title"], [1, "comment-form", "card"], [1, "login-prompt"], [1, "comments-list"], [1, "no-comments"], [1, "comment-item"], [1, "detail-sidebar"], [1, "card", "sidebar-card"], [1, "sidebar-note", "occupied"], [1, "sidebar-note"], [1, "gallery-main"], [1, "main-image", 3, "src", "alt"], [1, "gallery-thumbs"], [1, "thumb", 3, "src", "alt", "active"], [1, "thumb", 3, "click", "src", "alt"], [1, "alert", "alert-success"], ["placeholder", "\u0623\u0636\u0641 \u062A\u0639\u0644\u064A\u0642\u0643...", "rows", "3", 1, "comment-textarea", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-primary", 3, "click", "disabled"], ["routerLink", "/login"], [1, "comment-avatar"], [1, "comment-body"], [1, "comment-meta"], [1, "comment-author"], [1, "comment-date"], [1, "comment-text"], ["routerLink", "/login", 1, "btn", "btn-primary", "btn-full"], [1, "btn", "btn-primary", "btn-full", 3, "click", "disabled"]], template: function HostelDetail_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, HostelDetail_Conditional_1_Template, 4, 0, "div", 1)(2, HostelDetail_Conditional_2_Template, 4, 1)(3, HostelDetail_Conditional_3_Template, 55, 15);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.error() ? 2 : ctx.hostel() ? 3 : -1);
    }
  }, dependencies: [FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterLink], styles: ["\n\n.detail-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.back-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: color 0.2s;\n}\n.back-link[_ngcontent-%COMP%]:hover {\n  color: #1d4ed8;\n  text-decoration: underline;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 2rem;\n}\n@media (max-width: 900px) {\n  .detail-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.gallery[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.gallery-main[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 360px;\n  overflow: hidden;\n  background: #e0eaff;\n}\n.main-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery-thumbs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n  overflow-x: auto;\n}\n.thumb[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 55px;\n  object-fit: cover;\n  border-radius: 6px;\n  cursor: pointer;\n  opacity: 0.65;\n  border: 2px solid transparent;\n  transition: opacity 0.2s, border-color 0.2s;\n  flex-shrink: 0;\n}\n.thumb.active[_ngcontent-%COMP%], \n.thumb[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  border-color: #2563eb;\n}\n.no-image-large[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 6rem;\n  padding: 2rem;\n  background: #e0eaff;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.hostel-details[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.hostel-title[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1e3a5f;\n  margin-bottom: 0.5rem;\n}\n.hostel-loc[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.95rem;\n  margin-bottom: 1rem;\n}\n.hostel-info-text[_ngcontent-%COMP%] {\n  background: #f0f4f8;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1.25rem;\n}\n.hostel-info-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #374151;\n  margin-bottom: 0.4rem;\n}\n.hostel-info-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4b5563;\n  font-size: 0.93rem;\n  line-height: 1.6;\n}\n.occupancy-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e3a5f;\n  margin-bottom: 0.75rem;\n}\n.occ-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  margin-bottom: 0.75rem;\n}\n.occ-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.occ-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #2563eb;\n}\n.occ-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n.occupancy-bar[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  border-radius: 99px;\n  height: 10px;\n  overflow: hidden;\n  margin-bottom: 0.4rem;\n}\n.occupancy-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #16a34a,\n      #2563eb);\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.occ-pct[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n.comments-section[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.comment-form[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n.comment-textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.7rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  resize: vertical;\n  font-family: inherit;\n  font-size: 0.95rem;\n  color: #111;\n  margin-bottom: 0.75rem;\n  transition: border-color 0.2s;\n}\n.comment-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #2563eb;\n}\n.login-prompt[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #6b7280;\n  font-size: 0.93rem;\n}\n.login-prompt[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2563eb;\n  font-weight: 600;\n}\n.no-comments[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-style: italic;\n  padding: 1rem 0;\n}\n.comment-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid #f0f4f8;\n}\n.comment-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.comment-avatar[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  background: #2563eb;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.comment-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.comment-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  margin-bottom: 0.3rem;\n}\n.comment-author[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.93rem;\n  color: #1e3a5f;\n}\n.comment-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #9ca3af;\n}\n.comment-text[_ngcontent-%COMP%] {\n  font-size: 0.93rem;\n  color: #374151;\n  line-height: 1.5;\n}\n.sidebar-card[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  position: sticky;\n  top: 80px;\n}\n.sidebar-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e3a5f;\n  margin-bottom: 1rem;\n}\n.sidebar-note[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.93rem;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n}\n.sidebar-note.occupied[_ngcontent-%COMP%] {\n  color: #16a34a;\n}\n.btn-full[_ngcontent-%COMP%] {\n  width: 100%;\n  justify-content: center;\n}\n.btn-sm[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.9rem;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=hostel-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HostelDetail, [{
    type: Component,
    args: [{ selector: "app-hostel-detail", imports: [FormsModule, RouterLink], template: `<div class="page-container">\r
  @if (loading()) {\r
    <div style="text-align:center;padding:3rem">\r
      <div class="spinner"></div>\r
      <p>\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0628\u064A\u0627\u0646\u0627\u062A \u0627\u0644\u0633\u0643\u0646...</p>\r
    </div>\r
  } @else if (error()) {\r
    <div class="alert alert-error">{{ error() }}</div>\r
    <a routerLink="/hostels" class="btn btn-secondary">&rarr; \u0627\u0644\u0639\u0648\u062F\u0629</a>\r
  } @else if (hostel()) {\r
    <!-- Header -->\r
    <div class="detail-header">\r
      <a routerLink="/hostels" class="back-link">&larr; \u062C\u0645\u064A\u0639 \u0627\u0644\u0633\u0643\u0646\u0627\u062A</a>\r
      <div class="header-actions">\r
        @if (auth.isAdmin()) {\r
          <a routerLink="/admin" class="btn btn-warning btn-sm">\u062A\u0639\u062F\u064A\u0644 \u0627\u0644\u0633\u0643\u0646</a>\r
        }\r
      </div>\r
    </div>\r
\r
    <div class="detail-layout">\r
      <!-- Left Column -->\r
      <div class="detail-main">\r
        <!-- Image Gallery -->\r
        @if (hostel()!.imageUrls && hostel()!.imageUrls.length > 0) {\r
          <div class="gallery">\r
            <div class="gallery-main">\r
              <img\r
                [src]="hostel()!.imageUrls[selectedImageIndex()]"\r
                [alt]="hostel()!.hostelName"\r
                class="main-image"\r
              />\r
            </div>\r
            @if (hostel()!.imageUrls.length > 1) {\r
              <div class="gallery-thumbs">\r
                @for (url of hostel()!.imageUrls; track url; let i = $index) {\r
                  <img\r
                    [src]="url"\r
                    [alt]="hostel()!.hostelName"\r
                    class="thumb"\r
                    [class.active]="selectedImageIndex() === i"\r
                    (click)="selectedImageIndex.set(i)"\r
                  />\r
                }\r
              </div>\r
            }\r
          </div>\r
        } @else {\r
          <div class="no-image-large">&#127968;</div>\r
        }\r
\r
        <!-- Info -->\r
        <div class="hostel-details card">\r
          <h1 class="hostel-title">{{ hostel()!.hostelName }}</h1>\r
          <p class="hostel-loc">&#128205; {{ hostel()!.location }}</p>\r
\r
          @if (hostel()!.info) {\r
            <div class="hostel-info-text">\r
              <h3>\u0645\u0639\u0644\u0648\u0645\u0627\u062A \u0625\u0636\u0627\u0641\u064A\u0629</h3>\r
              <p>{{ hostel()!.info }}</p>\r
            </div>\r
          }\r
\r
          <!-- Occupancy -->\r
          <div class="occupancy-section">\r
            <h3>\u0627\u0644\u0625\u0634\u063A\u0627\u0644</h3>\r
            <div class="occ-stats">\r
              <div class="occ-stat">\r
                <span class="occ-value">{{ hostel()!.currentResidents }}</span>\r
                <span class="occ-label">\u0633\u0627\u0643\u0646 \u062D\u0627\u0644\u064A\u0627\u064B</span>\r
              </div>\r
              <div class="occ-stat">\r
                <span class="occ-value">{{ hostel()!.capacity }}</span>\r
                <span class="occ-label">\u0627\u0644\u0637\u0627\u0642\u0629 \u0627\u0644\u0642\u0635\u0648\u0649</span>\r
              </div>\r
              <div class="occ-stat">\r
                <span class="occ-value">{{ hostel()!.capacity - hostel()!.currentResidents }}</span>\r
                <span class="occ-label">\u0645\u062A\u0627\u062D</span>\r
              </div>\r
            </div>\r
            <div class="occupancy-bar">\r
              <div class="occupancy-fill" [style.width]="getOccupancyPercent() + '%'"></div>\r
            </div>\r
            <p class="occ-pct">{{ getOccupancyPercent() }}% \u0645\u0634\u063A\u0648\u0644</p>\r
          </div>\r
        </div>\r
\r
        <!-- Comments -->\r
        <div class="comments-section">\r
          <h2 class="section-title">\u0627\u0644\u062A\u0639\u0644\u064A\u0642\u0627\u062A ({{ comments().length }})</h2>\r
\r
          @if (auth.isLoggedIn()) {\r
            <div class="comment-form card">\r
              @if (commentError()) {\r
                <div class="alert alert-error">{{ commentError() }}</div>\r
              }\r
              @if (commentSuccess()) {\r
                <div class="alert alert-success">{{ commentSuccess() }}</div>\r
              }\r
              <textarea\r
                [(ngModel)]="newComment"\r
                placeholder="\u0623\u0636\u0641 \u062A\u0639\u0644\u064A\u0642\u0643..."\r
                rows="3"\r
                class="comment-textarea"\r
              ></textarea>\r
              <button\r
                class="btn btn-primary"\r
                (click)="submitComment()"\r
                [disabled]="commentLoading() || !newComment.trim()"\r
              >\r
                @if (commentLoading()) { \u062C\u0627\u0631\u064A... } @else { \u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642 }\r
              </button>\r
            </div>\r
          } @else {\r
            <p class="login-prompt">\r
              <a routerLink="/login">\u0633\u062C\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</a> \u0644\u0625\u0636\u0627\u0641\u0629 \u062A\u0639\u0644\u064A\u0642\r
            </p>\r
          }\r
\r
          <div class="comments-list">\r
            @if (comments().length === 0) {\r
              <p class="no-comments">\u0644\u0627 \u062A\u0648\u062C\u062F \u062A\u0639\u0644\u064A\u0642\u0627\u062A \u0628\u0639\u062F. \u0643\u0646 \u0623\u0648\u0644 \u0645\u0646 \u064A\u0639\u0644\u0642!</p>\r
            }\r
            @for (comment of comments(); track comment.id) {\r
              <div class="comment-item">\r
                <div class="comment-avatar">{{ comment.username.charAt(0).toUpperCase() }}</div>\r
                <div class="comment-body">\r
                  <div class="comment-meta">\r
                    <span class="comment-author">{{ comment.username }}</span>\r
                    <span class="comment-date">{{ formatDate(comment.createdAt) }}</span>\r
                  </div>\r
                  <p class="comment-text">{{ comment.text }}</p>\r
                </div>\r
              </div>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
\r
      <!-- Right Sidebar -->\r
      <div class="detail-sidebar">\r
        <div class="card sidebar-card">\r
          <h3>\u0637\u0644\u0628 \u0633\u0643\u0646</h3>\r
          @if (!auth.isLoggedIn()) {\r
            <p class="sidebar-note">\u064A\u062C\u0628 \u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644 \u0644\u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628</p>\r
            <a routerLink="/login" class="btn btn-primary btn-full">\u062A\u0633\u062C\u064A\u0644 \u0627\u0644\u062F\u062E\u0648\u0644</a>\r
          } @else if (auth.user()?.hostelName) {\r
            <p class="sidebar-note occupied">\u0623\u0646\u062A \u0645\u0633\u062C\u0644 \u0641\u064A: <strong>{{ auth.user()!.hostelName }}</strong></p>\r
          } @else if (auth.isAdmin()) {\r
            <p class="sidebar-note">\u0627\u0644\u0645\u0633\u0624\u0648\u0644\u0648\u0646 \u0644\u0627 \u064A\u0645\u0643\u0646\u0647\u0645 \u062A\u0642\u062F\u064A\u0645 \u0637\u0644\u0628\u0627\u062A</p>\r
          } @else {\r
            @if (requestSuccess()) {\r
              <div class="alert alert-success">{{ requestSuccess() }}</div>\r
            }\r
            @if (requestError()) {\r
              <div class="alert alert-error">{{ requestError() }}</div>\r
            }\r
            @if (!requestSuccess()) {\r
              <p class="sidebar-note">\u0623\u0648\u062F \u0627\u0644\u0633\u0643\u0646 \u0641\u064A <strong>{{ hostel()!.hostelName }}</strong></p>\r
              <button\r
                class="btn btn-primary btn-full"\r
                (click)="requestRoom()"\r
                [disabled]="requestLoading() || hostel()!.currentResidents >= hostel()!.capacity"\r
              >\r
                @if (requestLoading()) { \u062C\u0627\u0631\u064A... }\r
                @else if (hostel()!.currentResidents >= hostel()!.capacity) { \u0627\u0644\u0633\u0643\u0646 \u0645\u0645\u062A\u0644\u0626 }\r
                @else { \u0637\u0644\u0628 \u0633\u0643\u0646 }\r
              </button>\r
            }\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/components/hostel-detail/hostel-detail.css */\n.detail-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n.back-link {\n  color: #2563eb;\n  font-weight: 600;\n  font-size: 0.95rem;\n  transition: color 0.2s;\n}\n.back-link:hover {\n  color: #1d4ed8;\n  text-decoration: underline;\n}\n.detail-layout {\n  display: grid;\n  grid-template-columns: 1fr 300px;\n  gap: 2rem;\n}\n@media (max-width: 900px) {\n  .detail-layout {\n    grid-template-columns: 1fr;\n  }\n}\n.gallery {\n  margin-bottom: 1.5rem;\n  border-radius: 12px;\n  overflow: hidden;\n}\n.gallery-main {\n  width: 100%;\n  height: 360px;\n  overflow: hidden;\n  background: #e0eaff;\n}\n.main-image {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.gallery-thumbs {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.5rem 0;\n  overflow-x: auto;\n}\n.thumb {\n  width: 70px;\n  height: 55px;\n  object-fit: cover;\n  border-radius: 6px;\n  cursor: pointer;\n  opacity: 0.65;\n  border: 2px solid transparent;\n  transition: opacity 0.2s, border-color 0.2s;\n  flex-shrink: 0;\n}\n.thumb.active,\n.thumb:hover {\n  opacity: 1;\n  border-color: #2563eb;\n}\n.no-image-large {\n  text-align: center;\n  font-size: 6rem;\n  padding: 2rem;\n  background: #e0eaff;\n  border-radius: 12px;\n  margin-bottom: 1.5rem;\n}\n.hostel-details {\n  padding: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.hostel-title {\n  font-size: 1.8rem;\n  font-weight: 800;\n  color: #1e3a5f;\n  margin-bottom: 0.5rem;\n}\n.hostel-loc {\n  color: #6b7280;\n  font-size: 0.95rem;\n  margin-bottom: 1rem;\n}\n.hostel-info-text {\n  background: #f0f4f8;\n  border-radius: 8px;\n  padding: 1rem;\n  margin-bottom: 1.25rem;\n}\n.hostel-info-text h3 {\n  font-size: 0.92rem;\n  font-weight: 700;\n  color: #374151;\n  margin-bottom: 0.4rem;\n}\n.hostel-info-text p {\n  color: #4b5563;\n  font-size: 0.93rem;\n  line-height: 1.6;\n}\n.occupancy-section h3 {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #1e3a5f;\n  margin-bottom: 0.75rem;\n}\n.occ-stats {\n  display: flex;\n  gap: 1.5rem;\n  margin-bottom: 0.75rem;\n}\n.occ-stat {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.occ-value {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #2563eb;\n}\n.occ-label {\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n.occupancy-bar {\n  background: #e5e7eb;\n  border-radius: 99px;\n  height: 10px;\n  overflow: hidden;\n  margin-bottom: 0.4rem;\n}\n.occupancy-fill {\n  height: 100%;\n  background:\n    linear-gradient(\n      90deg,\n      #16a34a,\n      #2563eb);\n  border-radius: 99px;\n  transition: width 0.6s ease;\n}\n.occ-pct {\n  font-size: 0.85rem;\n  color: #6b7280;\n}\n.comments-section {\n  margin-top: 0.5rem;\n}\n.comment-form {\n  padding: 1.25rem;\n  margin-bottom: 1.5rem;\n}\n.comment-textarea {\n  width: 100%;\n  padding: 0.7rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 8px;\n  resize: vertical;\n  font-family: inherit;\n  font-size: 0.95rem;\n  color: #111;\n  margin-bottom: 0.75rem;\n  transition: border-color 0.2s;\n}\n.comment-textarea:focus {\n  outline: none;\n  border-color: #2563eb;\n}\n.login-prompt {\n  margin-bottom: 1.5rem;\n  color: #6b7280;\n  font-size: 0.93rem;\n}\n.login-prompt a {\n  color: #2563eb;\n  font-weight: 600;\n}\n.no-comments {\n  color: #9ca3af;\n  font-style: italic;\n  padding: 1rem 0;\n}\n.comment-item {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem 0;\n  border-bottom: 1px solid #f0f4f8;\n}\n.comment-item:last-child {\n  border-bottom: none;\n}\n.comment-avatar {\n  width: 38px;\n  height: 38px;\n  background: #2563eb;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.95rem;\n  flex-shrink: 0;\n}\n.comment-body {\n  flex: 1;\n}\n.comment-meta {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  margin-bottom: 0.3rem;\n}\n.comment-author {\n  font-weight: 700;\n  font-size: 0.93rem;\n  color: #1e3a5f;\n}\n.comment-date {\n  font-size: 0.8rem;\n  color: #9ca3af;\n}\n.comment-text {\n  font-size: 0.93rem;\n  color: #374151;\n  line-height: 1.5;\n}\n.sidebar-card {\n  padding: 1.5rem;\n  position: sticky;\n  top: 80px;\n}\n.sidebar-card h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #1e3a5f;\n  margin-bottom: 1rem;\n}\n.sidebar-note {\n  color: #6b7280;\n  font-size: 0.93rem;\n  margin-bottom: 1rem;\n  line-height: 1.5;\n}\n.sidebar-note.occupied {\n  color: #16a34a;\n}\n.btn-full {\n  width: 100%;\n  justify-content: center;\n}\n.btn-sm {\n  padding: 0.35rem 0.9rem;\n  font-size: 0.85rem;\n}\n/*# sourceMappingURL=hostel-detail.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HostelDetail, { className: "HostelDetail", filePath: "src/app/components/hostel-detail/hostel-detail.ts", lineNumber: 15 });
})();
export {
  HostelDetail
};
//# sourceMappingURL=chunk-CXR6NC6Q.js.map
