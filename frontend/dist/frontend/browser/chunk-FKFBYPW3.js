import {
  AuthService,
  Router,
  RouterLink
} from "./chunk-JJ33MNBI.js";
import {
  HostelService
} from "./chunk-DTCR6Y5F.js";
import {
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UC2EJXZ5.js";

// src/app/components/hostel-list/hostel-list.ts
var _c0 = (a0) => ["/hostels", a0];
var _forTrack0 = ($index, $item) => $item.hostelName;
function HostelList_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275text(1, " + \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0633\u0643\u0646\u0627\u062A ");
    \u0275\u0275elementEnd();
  }
}
function HostelList_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u0643\u0646\u0627\u062A...");
    \u0275\u0275elementEnd()();
  }
}
function HostelList_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function HostelList_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 9);
    \u0275\u0275text(2, "\u{1F3E0}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u0643\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B");
    \u0275\u0275elementEnd()();
  }
}
function HostelList_Conditional_8_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const hostel_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", hostel_r2.imageUrls[0], \u0275\u0275sanitizeUrl)("alt", hostel_r2.hostelName);
  }
}
function HostelList_Conditional_8_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1, "\u{1F3E0}");
    \u0275\u0275elementEnd();
  }
}
function HostelList_Conditional_8_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0645\u0645\u062A\u0644\u0626 ");
  }
}
function HostelList_Conditional_8_For_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0634\u0628\u0647 \u0645\u0645\u062A\u0644\u0626 ");
  }
}
function HostelList_Conditional_8_For_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " \u0645\u062A\u0627\u062D ");
  }
}
function HostelList_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 10)(1, "div", 11);
    \u0275\u0275conditionalCreate(2, HostelList_Conditional_8_For_2_Conditional_2_Template, 1, 2, "img", 12)(3, HostelList_Conditional_8_For_2_Conditional_3_Template, 2, 0, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14)(5, "h3", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 16);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 17)(10, "div", 18)(11, "span");
    \u0275\u0275text(12, "\u0627\u0644\u0625\u0634\u063A\u0627\u0644");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 19);
    \u0275\u0275element(16, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 21)(18, "span", 22);
    \u0275\u0275conditionalCreate(19, HostelList_Conditional_8_For_2_Conditional_19_Template, 1, 0)(20, HostelList_Conditional_8_For_2_Conditional_20_Template, 1, 0)(21, HostelList_Conditional_8_For_2_Conditional_21_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span", 23);
    \u0275\u0275text(23, "\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 \u2190");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const hostel_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(13, _c0, hostel_r2.hostelName));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(hostel_r2.imageUrls && hostel_r2.imageUrls.length > 0 ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(hostel_r2.hostelName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u{1F4CD} ", hostel_r2.location);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", hostel_r2.currentResidents, " / ", hostel_r2.capacity);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.getOccupancyClass(hostel_r2));
    \u0275\u0275styleProp("width", ctx_r0.getOccupancyPercent(hostel_r2) + "%");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("badge-" + ctx_r0.getOccupancyClass(hostel_r2));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.getOccupancyPercent(hostel_r2) >= 100 ? 19 : ctx_r0.getOccupancyPercent(hostel_r2) >= 60 ? 20 : 21);
  }
}
function HostelList_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, HostelList_Conditional_8_For_2_Template, 24, 15, "a", 10, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.hostels());
  }
}
var HostelList = class _HostelList {
  hostelService = inject(HostelService);
  auth = inject(AuthService);
  router = inject(Router);
  hostels = signal([], ...ngDevMode ? [{ debugName: "hostels" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  ngOnInit() {
    this.hostelService.getAll().subscribe({
      next: (data) => {
        this.hostels.set(data);
        this.loading.set(false);
      },
      error: () => {
        this.error.set("\u062A\u0639\u0630\u0631 \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u0643\u0646\u0627\u062A. \u062A\u062D\u0642\u0642 \u0645\u0646 \u062A\u0634\u063A\u064A\u0644 \u0627\u0644\u062E\u0627\u062F\u0645");
        this.loading.set(false);
      }
    });
  }
  getOccupancyPercent(hostel) {
    if (!hostel.capacity)
      return 0;
    return Math.round(hostel.currentResidents / hostel.capacity * 100);
  }
  getOccupancyClass(hostel) {
    const pct = this.getOccupancyPercent(hostel);
    if (pct >= 90)
      return "full";
    if (pct >= 60)
      return "medium";
    return "available";
  }
  static \u0275fac = function HostelList_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HostelList)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HostelList, selectors: [["app-hostel-list"]], decls: 9, vars: 2, consts: [[1, "page-container"], [1, "page-header"], [1, "section-title"], ["routerLink", "/admin", 1, "btn", "btn-primary"], [1, "loading-state"], [1, "alert", "alert-error"], [1, "empty-state"], [1, "hostels-grid"], [1, "spinner"], [1, "empty-icon"], [1, "hostel-card", "card", 3, "routerLink"], [1, "hostel-image"], [3, "src", "alt"], [1, "no-image"], [1, "hostel-info"], [1, "hostel-name"], [1, "hostel-location"], [1, "occupancy"], [1, "occupancy-labels"], [1, "occupancy-bar"], [1, "occupancy-fill"], [1, "hostel-footer"], [1, "occupancy-badge"], [1, "view-details"]], template: function HostelList_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
      \u0275\u0275text(3, "\u0627\u0644\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(4, HostelList_Conditional_4_Template, 2, 0, "a", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(5, HostelList_Conditional_5_Template, 4, 0, "div", 4)(6, HostelList_Conditional_6_Template, 2, 1, "div", 5)(7, HostelList_Conditional_7_Template, 5, 0, "div", 6)(8, HostelList_Conditional_8_Template, 3, 0, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.auth.isAdmin() ? 4 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 5 : ctx.error() ? 6 : ctx.hostels().length === 0 ? 7 : 8);
    }
  }, dependencies: [RouterLink], styles: ["\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  color: #6b7280;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #9ca3af;\n}\n.empty-icon[_ngcontent-%COMP%] {\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n}\n.hostels-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.hostel-card[_ngcontent-%COMP%] {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.hostel-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.18);\n  transform: translateY(-3px);\n}\n.hostel-image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  background: #e0eaff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hostel-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.hostel-card[_ngcontent-%COMP%]:hover   .hostel-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.04);\n}\n.no-image[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  color: #93c5fd;\n}\n.hostel-info[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n.hostel-name[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #1e3a5f;\n  margin-bottom: 0.4rem;\n}\n.hostel-location[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.occupancy[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.occupancy-labels[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin-bottom: 0.35rem;\n}\n.occupancy-bar[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  border-radius: 99px;\n  height: 8px;\n  overflow: hidden;\n}\n.occupancy-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.5s ease;\n}\n.occupancy-fill.available[_ngcontent-%COMP%] {\n  background: #16a34a;\n}\n.occupancy-fill.medium[_ngcontent-%COMP%] {\n  background: #d97706;\n}\n.occupancy-fill.full[_ngcontent-%COMP%] {\n  background: #dc2626;\n}\n.hostel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.occupancy-badge[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 0.25rem 0.65rem;\n  border-radius: 20px;\n}\n.badge-available[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-medium[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-full[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.view-details[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #2563eb;\n  font-weight: 600;\n}\n/*# sourceMappingURL=hostel-list.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HostelList, [{
    type: Component,
    args: [{ selector: "app-hostel-list", imports: [RouterLink], template: `<div class="page-container">\r
  <div class="page-header">\r
    <h1 class="section-title">\u0627\u0644\u0633\u0643\u0646\u0627\u062A \u0627\u0644\u0645\u062A\u0627\u062D\u0629</h1>\r
    @if (auth.isAdmin()) {\r
      <a routerLink="/admin" class="btn btn-primary">\r
        + \u0625\u062F\u0627\u0631\u0629 \u0627\u0644\u0633\u0643\u0646\u0627\u062A\r
      </a>\r
    }\r
  </div>\r
\r
  @if (loading()) {\r
    <div class="loading-state">\r
      <div class="spinner"></div>\r
      <p>\u062C\u0627\u0631\u064A \u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u0633\u0643\u0646\u0627\u062A...</p>\r
    </div>\r
  } @else if (error()) {\r
    <div class="alert alert-error">{{ error() }}</div>\r
  } @else if (hostels().length === 0) {\r
    <div class="empty-state">\r
      <div class="empty-icon">&#127968;</div>\r
      <p>\u0644\u0627 \u062A\u0648\u062C\u062F \u0633\u0643\u0646\u0627\u062A \u0645\u062A\u0627\u062D\u0629 \u062D\u0627\u0644\u064A\u0627\u064B</p>\r
    </div>\r
  } @else {\r
    <div class="hostels-grid">\r
      @for (hostel of hostels(); track hostel.hostelName) {\r
        <a [routerLink]="['/hostels', hostel.hostelName]" class="hostel-card card">\r
          <div class="hostel-image">\r
            @if (hostel.imageUrls && hostel.imageUrls.length > 0) {\r
              <img [src]="hostel.imageUrls[0]" [alt]="hostel.hostelName" />\r
            } @else {\r
              <div class="no-image">&#127968;</div>\r
            }\r
          </div>\r
          <div class="hostel-info">\r
            <h3 class="hostel-name">{{ hostel.hostelName }}</h3>\r
            <p class="hostel-location">&#128205; {{ hostel.location }}</p>\r
\r
            <div class="occupancy">\r
              <div class="occupancy-labels">\r
                <span>\u0627\u0644\u0625\u0634\u063A\u0627\u0644</span>\r
                <span>{{ hostel.currentResidents }} / {{ hostel.capacity }}</span>\r
              </div>\r
              <div class="occupancy-bar">\r
                <div\r
                  class="occupancy-fill"\r
                  [class]="getOccupancyClass(hostel)"\r
                  [style.width]="getOccupancyPercent(hostel) + '%'"\r
                ></div>\r
              </div>\r
            </div>\r
\r
            <div class="hostel-footer">\r
              <span class="occupancy-badge" [class]="'badge-' + getOccupancyClass(hostel)">\r
                @if (getOccupancyPercent(hostel) >= 100) {\r
                  \u0645\u0645\u062A\u0644\u0626\r
                } @else if (getOccupancyPercent(hostel) >= 60) {\r
                  \u0634\u0628\u0647 \u0645\u0645\u062A\u0644\u0626\r
                } @else {\r
                  \u0645\u062A\u0627\u062D\r
                }\r
              </span>\r
              <span class="view-details">\u0639\u0631\u0636 \u0627\u0644\u062A\u0641\u0627\u0635\u064A\u0644 &larr;</span>\r
            </div>\r
          </div>\r
        </a>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/components/hostel-list/hostel-list.css */\n.page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.loading-state {\n  text-align: center;\n  padding: 3rem;\n  color: #6b7280;\n}\n.empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #9ca3af;\n}\n.empty-icon {\n  font-size: 3.5rem;\n  margin-bottom: 1rem;\n}\n.hostels-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.5rem;\n}\n.hostel-card {\n  display: block;\n  text-decoration: none;\n  color: inherit;\n  border-radius: 12px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);\n  transition: box-shadow 0.2s, transform 0.2s;\n}\n.hostel-card:hover {\n  box-shadow: 0 8px 28px rgba(37, 99, 235, 0.18);\n  transform: translateY(-3px);\n}\n.hostel-image {\n  width: 100%;\n  height: 200px;\n  overflow: hidden;\n  background: #e0eaff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.hostel-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.hostel-card:hover .hostel-image img {\n  transform: scale(1.04);\n}\n.no-image {\n  font-size: 4rem;\n  color: #93c5fd;\n}\n.hostel-info {\n  padding: 1.25rem;\n}\n.hostel-name {\n  font-size: 1.15rem;\n  font-weight: 700;\n  color: #1e3a5f;\n  margin-bottom: 0.4rem;\n}\n.hostel-location {\n  color: #6b7280;\n  font-size: 0.9rem;\n  margin-bottom: 1rem;\n}\n.occupancy {\n  margin-bottom: 1rem;\n}\n.occupancy-labels {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin-bottom: 0.35rem;\n}\n.occupancy-bar {\n  background: #e5e7eb;\n  border-radius: 99px;\n  height: 8px;\n  overflow: hidden;\n}\n.occupancy-fill {\n  height: 100%;\n  border-radius: 99px;\n  transition: width 0.5s ease;\n}\n.occupancy-fill.available {\n  background: #16a34a;\n}\n.occupancy-fill.medium {\n  background: #d97706;\n}\n.occupancy-fill.full {\n  background: #dc2626;\n}\n.hostel-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.occupancy-badge {\n  font-size: 0.8rem;\n  font-weight: 600;\n  padding: 0.25rem 0.65rem;\n  border-radius: 20px;\n}\n.badge-available {\n  background: #dcfce7;\n  color: #166534;\n}\n.badge-medium {\n  background: #fef3c7;\n  color: #92400e;\n}\n.badge-full {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.view-details {\n  font-size: 0.85rem;\n  color: #2563eb;\n  font-weight: 600;\n}\n/*# sourceMappingURL=hostel-list.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HostelList, { className: "HostelList", filePath: "src/app/components/hostel-list/hostel-list.ts", lineNumber: 12 });
})();
export {
  HostelList
};
//# sourceMappingURL=chunk-FKFBYPW3.js.map
