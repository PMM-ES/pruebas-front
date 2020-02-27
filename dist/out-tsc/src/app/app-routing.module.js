import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ListarComponent } from './Usuario/listar/listar.component';
import { EditarComponent } from './Usuario/editar/editar.component';
import { BorrarComponent } from './Usuario/borrar/borrar.component';
import { AgregarComponent } from './Usuario/agregar/agregar.component';
const routes = [
    { path: 'listar', component: ListarComponent },
    { path: 'agregar', component: AgregarComponent },
    { path: 'editar', component: EditarComponent },
    { path: 'borrar', component: BorrarComponent },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map