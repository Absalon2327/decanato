"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_modules_modules_module_ts"],{

/***/ 44537:
/*!***************************************************!*\
  !*** ./src/app/modules/modules-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModulesRoutingModule": () => (/* binding */ ModulesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/guards/auth.guard */ 85298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'solicitud-vehiculo', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-src_app_modules_solicitud-vehiculo_components_modal-secretaria_modal-secretaria_compo-7f6fd9"), __webpack_require__.e("src_app_modules_solicitud-vehiculo_solicitud-vehiculo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./solicitud-vehiculo/solicitud-vehiculo.module */ 36962)).then(m => m.SolicitudVehiculoModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'solicitud-vale-paginacion', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_solicitud-vale-paginacion_solicitud-vale-paginacion_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./solicitud-vale-paginacion/solicitud-vale-paginacion.module */ 54040)).then(m => m.SolicitudValePaginacionModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'asignacion-vale', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-src_app_shared_widget_widget_module_ts"), __webpack_require__.e("default-node_modules_ngx-infinite-scroll_fesm2020_ngx-infinite-scroll_mjs"), __webpack_require__.e("default-node_modules_ng5-slider___ivy_ngcc___esm2015_ng5-slider_js-src_app_core_guards_has-ro-b6245c"), __webpack_require__.e("default-src_app_modules_asignacion-vales_services_detalle_service_ts"), __webpack_require__.e("src_app_modules_asignacion-vales_asignacion-vales_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./asignacion-vales/asignacion-vales.module */ 97176)).then(m => m.AsignacionValesModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'entrasalida', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-7e2736"), __webpack_require__.e("default-node_modules_ngx-infinite-scroll_fesm2020_ngx-infinite-scroll_mjs"), __webpack_require__.e("default-src_app_modules_entradasalida_entradasalida_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./entradasalida/entradasalida.module */ 61711)).then(m => m.EntradasalidaModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'compra', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_compra_compra_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./compra/compra.module */ 67270)).then(m => m.CompraModule) },
    { path: 'proveedor', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("src_app_modules_proveedor_proveedor_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./proveedor/proveedor.module */ 97978)).then(m => m.ProveedorModule) },
    { path: 'devolucion-vale', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("src_app_modules_devolucion-vale_devolucion-vale_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./devolucion-vale/devolucion-vale.module */ 39089)).then(m => m.DevolucionValeModule) },
    { path: 'home-financiero', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-src_app_shared_widget_widget_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-7e2736"), __webpack_require__.e("default-src_app_modules_home-financiero_home-financiero_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home-financiero/home-financiero.module */ 63303)).then(m => m.HomeFinancieroModule) },
    //Ruta de empleado //
    { path: 'empleados', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-src_app_shared_widget_widget_module_ts"), __webpack_require__.e("default-node_modules_ng5-slider___ivy_ngcc___esm2015_ng5-slider_js-src_app_core_guards_has-ro-b6245c"), __webpack_require__.e("src_app_modules_empleado_empleado_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./empleado/empleado.module */ 63021)).then(m => m.EmpleadoModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'vehiculo', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("src_app_modules_vehiculo_vehiculo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./vehiculo/vehiculo.module */ 72386)).then(m => m.VehiculoModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'cargo', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("src_app_modules_cargo_cargo_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cargo/cargo.module */ 59615)).then(m => m.CargoModule) },
    { path: 'depto', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("src_app_modules_depto_depto_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./depto/depto.module */ 55249)).then(m => m.DeptoModule) },
    { path: 'calendario', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-src_app_modules_solicitud-vehiculo_components_modal-secretaria_modal-secretaria_compo-7f6fd9"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_calendario_calendario_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./calendario/calendario.module */ 55473)).then(m => m.CalendarioModule) },
    { path: 'dashboard', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-src_app_shared_widget_widget_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-7e2736"), __webpack_require__.e("default-node_modules_ngx-infinite-scroll_fesm2020_ngx-infinite-scroll_mjs"), __webpack_require__.e("default-src_app_modules_entradasalida_entradasalida_module_ts"), __webpack_require__.e("default-src_app_modules_home-financiero_home-financiero_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboards_dashboards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../pages/dashboards/dashboards.module */ 77480)).then(m => m.DashboardsModule) },
    { path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-src_app_shared_widget_widget_module_ts"), __webpack_require__.e("default-node_modules_ng-apexcharts___ivy_ngcc___fesm2015_ng-apexcharts_js-node_modules_ng2-ch-7e2736"), __webpack_require__.e("default-node_modules_ngx-infinite-scroll_fesm2020_ngx-infinite-scroll_mjs"), __webpack_require__.e("default-src_app_modules_entradasalida_entradasalida_module_ts"), __webpack_require__.e("default-src_app_modules_home-financiero_home-financiero_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_pages_dashboards_dashboards_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./../pages/dashboards/dashboards.module */ 77480)).then(m => m.DashboardsModule) },
];
class ModulesRoutingModule {
}
ModulesRoutingModule.ɵfac = function ModulesRoutingModule_Factory(t) { return new (t || ModulesRoutingModule)(); };
ModulesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModulesRoutingModule });
ModulesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModulesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 12818:
/*!*******************************************!*\
  !*** ./src/app/modules/modules.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModulesModule": () => (/* binding */ ModulesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _modules_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules-routing.module */ 44537);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




class ModulesModule {
}
ModulesModule.ɵfac = function ModulesModule_Factory(t) { return new (t || ModulesModule)(); };
ModulesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ModulesModule });
ModulesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModulesRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ModulesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _modules_routing_module__WEBPACK_IMPORTED_MODULE_0__.ModulesRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltipModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_modules_module_ts.js.map