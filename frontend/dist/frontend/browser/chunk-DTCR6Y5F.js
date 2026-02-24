import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UC2EJXZ5.js";

// src/app/services/hostel.service.ts
var HostelService = class _HostelService {
  http;
  API = "http://localhost:5003/api/hostels";
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.API);
  }
  getByName(name) {
    return this.http.get(`${this.API}/${encodeURIComponent(name)}`);
  }
  create(dto) {
    return this.http.post(this.API, dto);
  }
  update(name, dto) {
    return this.http.put(`${this.API}/${encodeURIComponent(name)}`, dto);
  }
  uploadImages(files) {
    const formData = new FormData();
    files.forEach((f) => formData.append("files", f));
    return this.http.post(`${this.API}/upload-images`, formData);
  }
  static \u0275fac = function HostelService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HostelService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HostelService, factory: _HostelService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HostelService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  HostelService
};
//# sourceMappingURL=chunk-DTCR6Y5F.js.map
