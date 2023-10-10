"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_modules_devolucion-vale_devolucion-vale_module_ts"],{

/***/ 94987:
/*!***************************************************************************!*\
  !*** ./src/app/modules/devolucion-vale/devolucion-vale-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevolucionValeRoutingModule": () => (/* binding */ DevolucionValeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/mostrar/mostrar.component */ 83235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    {
        path: '',
        component: _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_0__.MostrarComponent
    }
];
class DevolucionValeRoutingModule {
}
DevolucionValeRoutingModule.ɵfac = function DevolucionValeRoutingModule_Factory(t) { return new (t || DevolucionValeRoutingModule)(); };
DevolucionValeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DevolucionValeRoutingModule });
DevolucionValeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DevolucionValeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 39089:
/*!*******************************************************************!*\
  !*** ./src/app/modules/devolucion-vale/devolucion-vale.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevolucionValeModule": () => (/* binding */ DevolucionValeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _devolucion_vale_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./devolucion-vale-routing.module */ 94987);
/* harmony import */ var _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mostrar/mostrar.component */ 83235);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var _pages_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/tabla/tabla.component */ 73825);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);











class DevolucionValeModule {
}
DevolucionValeModule.ɵfac = function DevolucionValeModule_Factory(t) { return new (t || DevolucionValeModule)(); };
DevolucionValeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: DevolucionValeModule });
DevolucionValeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _devolucion_vale_routing_module__WEBPACK_IMPORTED_MODULE_0__.DevolucionValeRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](DevolucionValeModule, { declarations: [_pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_1__.MostrarComponent,
        _pages_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_3__.TablaComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _devolucion_vale_routing_module__WEBPACK_IMPORTED_MODULE_0__.DevolucionValeRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.NgxPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectModule] }); })();


/***/ }),

/***/ 83235:
/*!****************************************************************************!*\
  !*** ./src/app/modules/devolucion-vale/pages/mostrar/mostrar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarComponent": () => (/* binding */ MostrarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/constants */ 24017);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_devolucion_vale_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/devolucion-vale.service */ 60432);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tabla/tabla.component */ 73825);















const _c0 = ["content"];
function MostrarComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_div_7_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const alert_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.CambiarAlert(alert_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r13.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](alert_r13.type === "info" ? "Importante!" : "Precauci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", alert_r13.message, " ");
} }
function MostrarComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MostrarComponent_div_7_div_1_Template, 5, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", alert_r13.show);
} }
function MostrarComponent_div_13_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_div_13_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r20.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MostrarComponent_div_13_i_1_Template, 1, 0, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r1.siMuestraAlertas());
} }
function MostrarComponent_ng_option_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ng-option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", x_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](x_r22.nombre);
} }
function MostrarComponent_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Requiere un proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_container_32_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Requiere una cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_container_32_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Cantidad no puede ser negativa o cero");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_container_32_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Solamente se permiten numeros enteros");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_container_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Cantidad de vales: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MostrarComponent_ng_container_32_span_7_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, MostrarComponent_ng_container_32_span_8_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, MostrarComponent_ng_container_32_span_9_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r4.esCampoValido("cantidad"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r4.formularioGeneral.get("cantidad")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.formularioGeneral.get("cantidad")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.formularioGeneral.get("cantidad")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
} }
function MostrarComponent_ng_template_33_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Requiere un total monetario");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_template_33_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Total monetario no puede ser negativo o cero");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_template_33_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Solamente se permiten numeros con dos decimales");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "Total monetario ($): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MostrarComponent_ng_template_33_span_6_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MostrarComponent_ng_template_33_span_7_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, MostrarComponent_ng_template_33_span_8_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r6.esCampoValido("total_monetario"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r6.formularioGeneral.get("total_monetario")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r6.formularioGeneral.get("total_monetario")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r6.formularioGeneral.get("total_monetario")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
} }
function MostrarComponent_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Requiere un concepto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Digite m\u00E1s de 2 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Limite 750 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_div_51_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Importante!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" No se pudo encontrar N cantidad de vales que su suma total del valor (precio) sea igual a ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind4"](5, 1, ctx_r29.total_monetario, "USD", "symbol", "1.2-2"), ", solo se obtuvieron los siguientes vales que su suma del valor se acerca a dicho monto. ");
} }
function MostrarComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, MostrarComponent_div_51_ng_container_4_Template, 6, 6, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function MostrarComponent_div_51_Template_input_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r30.term = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, " Vales Encontrados ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18, " Monto Generado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](21, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_div_51_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r32.registrarDevolucion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Registrar Transacci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "app-tabla", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.tipoOpcion == 0 && ctx_r10.montoGenerado != ctx_r10.total_monetario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx_r10.term);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r10.cantidaGenerada);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind4"](21, 6, ctx_r10.montoGenerado, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("vales", ctx_r10.listDatos)("queryString", ctx_r10.term);
} }
function MostrarComponent_ng_template_52_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "i", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_ng_template_52_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3); return ctx_r40.restaurarAlertsUsuario(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_template_52_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MostrarComponent_ng_template_52_div_3_i_1_Template, 1, 0, "i", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r34.siMuestraAlertasUsuario());
} }
function MostrarComponent_ng_template_52_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_ng_template_52_div_6_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r46); const alertsUsuario_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r44.CambiarAlertUsuario(alertsUsuario_r42); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alertsUsuario_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMapInterpolate1"]("alert alert-", alertsUsuario_r42.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](alertsUsuario_r42.type === "warning" ? "Precauci\u00F3n!" : "Importante!");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", alertsUsuario_r42.message, " ");
} }
function MostrarComponent_ng_template_52_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MostrarComponent_ng_template_52_div_6_div_1_Template, 5, 5, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alertsUsuario_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", alertsUsuario_r42.show);
} }
function MostrarComponent_ng_template_52_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Requiere un correo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_template_52_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Requiere una contrase\u00F1a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_template_52_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Limite 50 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MostrarComponent_ng_template_52_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "h5", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Ingresar Credenciales");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MostrarComponent_ng_template_52_div_3_Template, 2, 1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_ng_template_52_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49); const modal_r33 = restoredCtx.$implicit; return modal_r33.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MostrarComponent_ng_template_52_div_6_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "form", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function MostrarComponent_ng_template_52_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r50.validarUsuario(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "label", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Correo Institucional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keyup", function MostrarComponent_ng_template_52_Template_input_keyup_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r51.getCorreo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, MostrarComponent_ng_template_52_span_18_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Contrase\u00F1a:");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "input", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_ng_template_52_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r52.togglePasswordVisibility(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](27, MostrarComponent_ng_template_52_span_27_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, MostrarComponent_ng_template_52_span_28_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, " Registrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, "unread messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](38, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40, "unread messages");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_ng_template_52_Template_button_click_41_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r49); const modal_r33 = restoredCtx.$implicit; return modal_r33.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.alertsUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r12.alertsUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r12.formularioUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r12.correoCompleto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r12.esCampoValidoUsuario("nombre"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.formularioUsuario.get("nombre").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r12.esCampoValidoUsuario("clave"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("type", ctx_r12.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx_r12.showPassword ? "mdi mdi-eye-off-outline" : "mdi mdi-eye-outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.formularioUsuario.get("clave").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r12.formularioUsuario.get("clave").hasError("maxlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r12.cantidaGenerada, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind4"](38, 16, ctx_r12.montoGenerado, "USD", "symbol", "1.2-2"), " ");
} }
class MostrarComponent {
    constructor(fb, devolucionValeService, mensajesService, modalService, usuarioService) {
        this.fb = fb;
        this.devolucionValeService = devolucionValeService;
        this.mensajesService = mensajesService;
        this.modalService = modalService;
        this.usuarioService = usuarioService;
        this.showPassword = false;
        this.term = "";
        this.isNumber = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.DECIMAL_VALIDATE;
        this.isInteger = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.INTEGER_VALIDATE;
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: " Seleccione un tipo de movimiento y complete los campos obligatorios (*).",
                show: false,
            },
            {
                id: 2,
                type: "warning",
                message: " Tenga en cuenta que una vez registrada la devolución de los vales no podrá revertir la operación.",
                show: false,
            },
        ];
        this.alertsUsuario = [
            {
                id: 1,
                type: "info",
                message: " Al ingresar las credenciales pertenecientes a Jefe Financiera, clic en botón 'Registrar', se realizará el ajuste y los datos no se podrán revertir.",
                show: true,
            },
        ];
        this.formularioGeneral = this.iniciarFormulario();
        this.formularioGeneral.get("total_monetario").disable();
        this.formularioUsuario = this.iniciarFormularioUsuario();
    }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: "Ajuste de Vale" },
            { label: "Mostrar", active: true },
        ];
        this.devolucionValeService.getProveedor();
        this.devolucionValeService.getValesPorCantidad();
        this.devolucionValeService.getValesPorMonto();
        this.usuarioService.getUsuario();
    }
    iniciarFormularioUsuario() {
        return this.fb.group({
            nombre: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            clave: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(50)]],
        });
    }
    iniciarFormulario() {
        return this.fb.group({
            tipo: [1],
            proveedor: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            cantidad: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.isInteger),
                ],
            ],
            total_monetario: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.isNumber),
                ],
            ],
            concepto: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(2),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(750),
                ],
            ],
        });
    }
    getCorreo() {
        const nombre = this.formularioUsuario.get("nombre").value;
        if (nombre == null || nombre == "") {
            this.correoCompleto = null;
        }
        else {
            this.correoCompleto = nombre + "@ues.edu.sv";
        }
    }
    cambiartipo1() {
        this.formularioGeneral.get("total_monetario").disable();
        this.formularioGeneral.get("cantidad").enable();
        this.devolucionValeService.listVale = [];
    }
    cambiartipo0() {
        this.formularioGeneral.get("total_monetario").enable();
        this.formularioGeneral.get("cantidad").disable();
        this.devolucionValeService.listVale = [];
    }
    get listProveedor() {
        const proveedores = [];
        this.devolucionValeService.listProveedor.forEach((x) => {
            if (x.estado == 8 && x.tipo == 14) {
                proveedores.push(x);
            }
        });
        return proveedores;
    }
    get listDatos() {
        this.montoGenerado = this.cantidaGenerada = 0;
        this.devolucionValeService.listVale.forEach((x) => {
            this.montoGenerado += x.valor;
        });
        this.cantidaGenerada = this.devolucionValeService.listVale.length;
        return this.devolucionValeService.listVale;
    }
    generarVales() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.cantidad = this.formularioGeneral.get("cantidad").value;
            this.total_monetario = this.formularioGeneral.get("total_monetario").value;
            this.tipoOpcion = this.formularioGeneral.get("tipo").value;
            this.devolucionValeService.listVale = [];
            if (this.formularioGeneral.valid) {
                if (this.tipoOpcion == 1) {
                    this.devolucionValeService.getValesPorCantidad(this.cantidad);
                }
                else {
                    this.devolucionValeService.getValesPorMonto(this.total_monetario);
                }
            }
            else {
                this.mensajesService.mensajesToast("warning", "Complete los que se indican");
                return Object.values(this.formularioGeneral.controls).forEach((control) => control.markAsTouched());
            }
        });
    }
    registrarDevolucion() {
        if (this.formularioGeneral.valid) {
            this.openModal(this.contentTemplate);
        }
        else {
            this.mensajesService.mensajesToast("warning", "Complete los que se indican");
            return Object.values(this.formularioGeneral.controls).forEach((control) => control.markAsTouched());
        }
    }
    validarUsuario() {
        const usuarioMardarDto = {
            nombre: this.correoCompleto,
            clave: this.formularioUsuario.get("clave").value,
        };
        if (this.formularioUsuario.valid) {
            this.devolucionValeService.validarUsuario(usuarioMardarDto).subscribe({
                next: (resp) => {
                    this.usuarioRespuestaDto = resp;
                    this.editando();
                },
                error: (err) => {
                    this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
                },
            });
        }
        else {
            this.mensajesService.mensajesToast("warning", "Complete los que se indican");
            return Object.values(this.formularioUsuario.controls).forEach((control) => control.markAsTouched());
        }
    }
    editando() {
        this.proveedor = this.formularioGeneral.get("proveedor").value;
        const concepto = this.formularioGeneral.get("concepto").value;
        const idusuariologueado = this.usuarioService.usuario.codigoUsuario;
        const nuevoconcepto = "Ajuste a " +
            this.proveedor.nombre +
            ", autorizado por " +
            this.usuarioRespuestaDto.empleado.nombre +
            " " +
            this.usuarioRespuestaDto.empleado.apellido +
            " con cargo de " +
            this.usuarioRespuestaDto.empleado.cargo.nombreCargo +
            " en concepto de: " +
            concepto;
        // Crear una variable para la alerta de carga
        let loadingAlert;
        // Mostrar SweetAlert de carga
        loadingAlert = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Espere un momento!",
            html: "Se está procesando la información...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
            },
        });
        this.devolucionValeService
            .modificarPorCantidad(this.listDatos, nuevoconcepto, idusuariologueado)
            .subscribe({
            next: (resp) => {
                // Ocultar SweetAlert de carga
                loadingAlert.close();
                this.mensajesService.mensajesSweet("success", "Ajuste de vales completado", "Acción realizada por " +
                    this.usuarioRespuestaDto.empleado.nombre +
                    " " +
                    this.usuarioRespuestaDto.empleado.apellido);
                this.limpiarCampos();
                this.modalService.dismissAll();
            },
            error: (err) => {
                // Ocultar SweetAlert de carga
                loadingAlert.close();
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
            },
        });
    }
    limpiarCampos() {
        this.cantidad = null;
        this.total_monetario = null;
        this.cantidad = null;
        this.cantidaGenerada = null;
        this.montoGenerado = null;
        this.formularioGeneral.reset();
        this.formularioGeneral.get("tipo").patchValue(this.tipoOpcion);
        this.devolucionValeService.listVale = [];
    }
    esCampoValido(campo) {
        const validarCampo = this.formularioGeneral.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    esCampoValidoUsuario(campo) {
        const validarCampo = this.formularioUsuario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    CambiarAlert(alert) {
        alert.show = !alert.show;
    }
    CambiarAlertUsuario(alertsUsuario) {
        alertsUsuario.show = !alertsUsuario.show;
    }
    restaurarAlerts() {
        this.alerts.forEach((alert) => {
            alert.show = true;
        });
    }
    restaurarAlertsUsuario() {
        this.alertsUsuario.forEach((alertsUsuario) => {
            alertsUsuario.show = true;
        });
    }
    siMuestraAlertas() {
        return this.alerts.every((alert) => alert.show);
    }
    siMuestraAlertasUsuario() {
        return this.alertsUsuario.every((alertsUsuario) => alertsUsuario.show);
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    openModal(content) {
        this.correoCompleto = null;
        this.formularioUsuario.reset();
        const modalOptions = {
            centered: false,
            backdrop: "static",
            keyboard: false,
            windowClass: "modal-holder",
        };
        this.modalService.open(content, modalOptions);
    }
}
MostrarComponent.ɵfac = function MostrarComponent_Factory(t) { return new (t || MostrarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_devolucion_vale_service__WEBPACK_IMPORTED_MODULE_2__.DevolucionValeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__.MensajesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService)); };
MostrarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MostrarComponent, selectors: [["app-mostrar"]], viewQuery: function MostrarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.contentTemplate = _t.first);
    } }, decls: 54, vars: 19, consts: [[1, "container-fluid"], ["title", "Ajuste de Vales", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [4, "ngFor", "ngForOf"], ["id", "formDeVale", "name", "formDeVale", 3, "formGroup", "ngSubmit"], [1, "mb-4", "d-grid", "gap-2", "mx-auto", "text-center"], ["for", "proveedor"], ["class", "btn-alerta miDiv", 4, "ngIf"], ["role", "group", "aria-label", "Basic mixed styles example", 1, "btn-group"], ["type", "radio", "name", "tipo", "id", "tipo1", "autocomplete", "off", "formControlName", "tipo", 1, "btn-check", 3, "value", "click"], ["for", "tipo1", 1, "btn", "btn-outline-dark"], ["type", "radio", "name", "tipo", "id", "tipo2", "autocomplete", "off", "formControlName", "tipo", 1, "btn-check", 3, "value", "click"], ["for", "tipo2", 1, "btn", "btn-outline-primary"], [1, "col-sm-3", "mb-4"], [1, "text-danger"], ["formControlName", "proveedor", "placeholder", "Escriba o seleccione", "labelForId", "proveedor", 3, "selectOnTab"], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["tipo", ""], [1, "col-sm-4", "mb-4"], ["for", "direccion"], ["row", "3", "maxlength", "750", "placeholder", "Concepto", "formControlName", "concepto", 1, "form-control"], [1, "col-sm-2"], [1, "d-grid", "gap-2", "mx-auto", "text-center"], ["type", "submit", "form", "formDeVale", 1, "btn", "btn-primary", "w-sm"], ["class", "row", 4, "ngIf"], ["role", "document"], ["content", ""], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "btn-alerta", "miDiv"], ["class", "mdi mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], [3, "value"], ["for", "cantidad"], ["id", "cantidad", "name", "cantidad", "type", "text", "formControlName", "cantidad", "placeholder", "Cantidad", 1, "form-control"], ["for", "total_monetario"], ["id", "total_monetario", "name", "total_monetario", "type", "text", "formControlName", "total_monetario", "placeholder", "Total monetario", 1, "form-control"], [1, "row", "mb-2", "align-items-center"], [1, "col-sm-3"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-3", "mx-auto", "text-center"], [1, "badge", "bg-dark"], [1, "badge", "bg-primary"], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], [3, "vales", "queryString"], ["role", "alert", 1, "alert", "alert-info"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], ["id", "formUsuario", "name", "formUsuario", 3, "formGroup", "ngSubmit"], [1, "mb-4", "col-md-12"], ["for", "nombre"], [1, "text-success"], ["id", "nombre", "name", "nombre", "maxlength", "200", "minlength", "2", "type", "text", "placeholder", "Omita @ues.edu.sv", "formControlName", "nombre", 1, "form-control", 3, "keyup"], ["for", "clave"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "clave", "placeholder", "Digite contrase\u00F1a", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control", 3, "type"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light", "ms-0", 3, "click"], [1, "modal-footer"], ["type", "submit", "form", "formUsuario", 1, "btn", "btn-primary", "w-sm", "me-2", "position-relative"], [1, "position-absolute", "top-0", "start-100", "translate-middle", "badge", "rounded-pill", "bg-warning"], [1, "visually-hidden"], [1, "position-absolute", "top-100", "start-0", "translate-middle", "badge", "rounded-pill", "bg-success"], [1, "btn", "btn-dark", "w-sm", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"]], template: function MostrarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](7, MostrarComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function MostrarComponent_Template_form_ngSubmit_8_listener() { return ctx.generarVales(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Elija el tipo de movimiento: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, MostrarComponent_div_13_Template, 2, 1, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_Template_input_click_15_listener() { return ctx.cambiartipo1(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Por cantidad de Vales");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_Template_input_click_18_listener() { return ctx.cambiartipo0(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Por Total Monetario de Vales");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24, "Abonar a: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](26, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "ng-select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](28, MostrarComponent_ng_option_28_Template, 2, 2, "ng-option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, MostrarComponent_span_30_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, MostrarComponent_ng_container_32_Template, 10, 5, "ng-container", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](33, MostrarComponent_ng_template_33_Template, 9, 5, "ng-template", null, 23, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Descripci\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](40, "textarea", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](42, MostrarComponent_span_42_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](43, MostrarComponent_span_43_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](44, MostrarComponent_span_44_Template, 2, 0, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Generar Vales");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, " Obtener Lista ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](51, MostrarComponent_div_51_Template, 27, 11, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, MostrarComponent_ng_template_52_Template, 43, 21, "ng-template", 31, 32, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](34);
        let tmp_9_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formularioGeneral);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.esCampoValido("proveedor"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.listProveedor);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx.formularioGeneral.get("proveedor")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formularioGeneral.get("tipo").value == 1)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](ctx.esCampoValido("concepto"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formularioGeneral.get("concepto").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formularioGeneral.get("concepto").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.formularioGeneral.get("concepto").hasError("maxlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.listDatos.length != 0);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_5__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_6__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltip, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_7__.TablaComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinLengthValidator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CurrencyPipe], styles: ["ng-select.is-invalid[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px #f46a6a;\n  border-radius: 0.25rem;\n}\n\nng-select.is-valid[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px #34c38f;\n  border-radius: 0.25rem;\n}\n\n.miDiv[_ngcontent-%COMP%] {\n  float: right;\n  \n  height: 15px;\n}\n\nbutton.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc3RyYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQWMsK0JBQUE7RUFDZCxZQUFBO0FBRUY7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGIiwiZmlsZSI6Im1vc3RyYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZy1zZWxlY3QuaXMtaW52YWxpZCB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmNDZhNmE7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxufVxyXG5cclxubmctc2VsZWN0LmlzLXZhbGlkIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzM0YzM4ZjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4ubWlEaXYge1xyXG4gIGZsb2F0OiByaWdodDsgLyogQWxpbmVhIGVsIGRpdiBhIGxhIGRlcmVjaGEgKi9cclxuICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4tY2xvc2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 73825:
/*!************************************************************************!*\
  !*** ./src/app/modules/devolucion-vale/pages/tabla/tabla.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaComponent": () => (/* binding */ TablaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);




function TablaComponent_tr_15_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "N/A");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function TablaComponent_tr_15_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.compra.factura, " ");
} }
function TablaComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, TablaComponent_tr_15_ng_container_10_Template, 3, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, TablaComponent_tr_15_ng_template_11_Template, 2, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](15, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r1.correlativo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 6, data_r1.compra.fechaCompra, "dd/MM/yyyy h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](9, 9, data_r1.valor, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r1.compra.factura == null || data_r1.compra.factura == "")("ngIfElse", _r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](15, 14, data_r1.fechaVencimiento, "dd/MM/yyyy"));
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class TablaComponent {
    constructor() { }
    ngOnInit() {
    }
}
TablaComponent.ɵfac = function TablaComponent_Factory(t) { return new (t || TablaComponent)(); };
TablaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TablaComponent, selectors: [["app-tabla"]], inputs: { vales: "vales", queryString: "queryString" }, decls: 20, vars: 11, consts: [[1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle"], [4, "ngFor", "ngForOf"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "nextLabel", "previousLabel", "pageChange"], [1, "text-body", "fw-bold"], [4, "ngIf", "ngIfElse"], ["factura", ""]], template: function TablaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "C\u00F3digo de Vale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Fecha de Compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Valor");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Fecha ven. vale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TablaComponent_tr_15_Template, 16, 17, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "pagination-controls", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function TablaComponent_Template_pagination_controls_pageChange_19_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](16, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](17, 6, ctx.vales, ctx.queryString), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](9, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nextLabel", "")("previousLabel", "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_3__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.CurrencyPipe], styles: ["@charset \"UTF-8\";\ntd[_ngcontent-%COMP%] {\n  white-space: normal;\n  \n  max-width: 300px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLG1CQUFBO0VBQXFCLHVDQUFBO0VBQ3JCLGdCQUFBO0VBQWtCLCtDQUFBO0FBSXBCIiwiZmlsZSI6InRhYmxhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xudGQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiBGb3J6YXIgc2FsdG9zIGRlIGzDrW5lYSBlbiBlbCB0ZXh0byAqL1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICAvKiBFc3RhYmxlY2VyIHVuIGFuY2hvIG3DoXhpbW8gcGFyYSBsYSBjb2x1bW5hICovXG59Il19 */"] });


/***/ }),

/***/ 60432:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/devolucion-vale/services/devolucion-vale.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DevolucionValeService": () => (/* binding */ DevolucionValeService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);







class DevolucionValeService {
    constructor(http, mensajesService) {
        this.http = http;
        this.mensajesService = mensajesService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.listProveedor = [];
        this.listVale = [];
    }
    getProveedor() {
        this.http
            .get(`${this.baseUrl}/proveedor/listasinpagina`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp))
            .subscribe((proveedor) => {
            this.listProveedor = proveedor;
        });
    }
    getValesPorCantidad(cantidad = 0) {
        // Crear una variable para la alerta de carga
        let loadingAlert;
        // Mostrar SweetAlert de carga
        loadingAlert = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Espere un momento!",
            html: "Se está procesando la información...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
            },
        });
        return new Promise((resolve, reject) => {
            if (cantidad != 0) {
                this.http
                    .get(`${this.baseUrl}/vale/devolucioncantidad/${cantidad}`)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp))
                    .subscribe({
                    next: (vale) => {
                        loadingAlert.close();
                        this.listVale = vale;
                        resolve(vale); // Resuelve la promesa con los datos
                    },
                    error: (err) => {
                        loadingAlert.close();
                        this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
                        reject(err);
                    },
                });
            }
            else {
                loadingAlert.close();
                this.listVale = [];
                resolve([]);
            }
        });
    }
    getValesPorMonto(monto = 0) {
        // Crear una variable para la alerta de carga
        let loadingAlert;
        // Mostrar SweetAlert de carga
        loadingAlert = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: "Espere un momento!",
            html: "Se está procesando la información...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
            },
        });
        return new Promise((resolve, reject) => {
            if (monto != 0) {
                this.http
                    .get(`${this.baseUrl}/vale/devolucionmonto/${monto}`)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp))
                    .subscribe({
                    next: (vale) => {
                        loadingAlert.close();
                        if (vale.length === 0) {
                            this.listVale = [];
                            this.mensajesService.mensajesSweet("info", "Posibles razones...", "Es posible que no se tengan existencias de vales, que con el monto ingresado no se puedan obtener vales o que no haya vales disponibles (Activos)", "Entiendo");
                        }
                        else {
                            this.listVale = vale;
                        }
                        resolve(vale); // Resuelve la promesa con los datos
                    },
                    error: (err) => {
                        loadingAlert.close();
                        this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
                        reject(err);
                    },
                });
            }
            else {
                loadingAlert.close();
                this.listVale = [];
                resolve([]);
            }
        });
    }
    modificar(vales) {
        return this.http.put(`${this.baseUrl}/vale/actualizarValesCantidad`, vales);
    }
    modificarPorCantidad(vales, concepto, idusuariologueado) {
        const url = `${this.baseUrl}/vale/actualizarValesCantidad`;
        // Crea un objeto que coincide con la estructura de ActualizacionValesRequest
        const requestBody = {
            vales: vales,
            concepto: concepto,
            idusuariologueado: idusuariologueado,
        };
        // Realiza la solicitud HTTP con el objeto requestBody y configura el encabezado para JSON
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({ "Content-Type": "application/json" });
        const options = { headers: headers };
        // Realiza la solicitud HTTP con el objeto modificado y devuelve un Observable
        return this.http.put(url, requestBody, options);
    }
    validarUsuario(usuarioMardarDto) {
        return this.http.post(`${this.baseUrl}/vale/validarusuario`, usuarioMardarDto);
    }
}
DevolucionValeService.ɵfac = function DevolucionValeService_Factory(t) { return new (t || DevolucionValeService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__.MensajesService)); };
DevolucionValeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: DevolucionValeService, factory: DevolucionValeService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_devolucion-vale_devolucion-vale_module_ts.js.map