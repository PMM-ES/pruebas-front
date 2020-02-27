import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ListarComponent = class ListarComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
        this.service.getUsuarios()
            .subscribe(data => {
            this.usuarios = data;
        });
    }
};
ListarComponent = __decorate([
    Component({
        selector: 'app-listar',
        templateUrl: './listar.component.html',
        styleUrls: ['./listar.component.css']
    })
], ListarComponent);
export { ListarComponent };
//# sourceMappingURL=listar.component.js.map