import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ServiceService = class ServiceService {
    constructor(http) {
        this.http = http;
        this.Url = 'http://localhost:8080/usuarios';
    }
    getUsuarios() {
        return this.http.get(this.Url);
    }
};
ServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ServiceService);
export { ServiceService };
//# sourceMappingURL=service.service.js.map