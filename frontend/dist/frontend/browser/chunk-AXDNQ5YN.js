import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UC2EJXZ5.js";

// src/app/services/request.service.ts
var RequestService = class _RequestService {
  http;
  API = "http://localhost:5003/api/requests";
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.API);
  }
  create(hostelName) {
    return this.http.post(this.API, { hostelName });
  }
  updateStatus(id, status) {
    return this.http.put(`${this.API}/${id}`, { status });
  }
  static \u0275fac = function RequestService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RequestService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestService, factory: _RequestService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  RequestService
};
//# sourceMappingURL=chunk-AXDNQ5YN.js.map
