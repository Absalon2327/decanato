"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["default-src_app_modules_solicitud-vehiculo_components_modal-secretaria_modal-secretaria_compo-7f6fd9"],{

/***/ 61473:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/components/modal-secretaria/modal-secretaria.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalSecretariaComponent": () => (/* binding */ ModalSecretariaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../constants/constants */ 24017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/solicitud-vehiculo.service */ 88345);
/* harmony import */ var _shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/global/mensajes.service */ 66548);
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/email.service */ 27261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);














function ModalSecretariaComponent_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r56.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalSecretariaComponent_div_3_i_1_Template, 1, 0, "i", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.siMuestraAlertas());
} }
function ModalSecretariaComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_div_6_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r62); const alert_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r60.CambiarAlert(alert_r58); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r58.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](alert_r58.type === "info" ? "Importante!" : "Precauci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", alert_r58.message, " ");
} }
function ModalSecretariaComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalSecretariaComponent_div_6_div_1_Template, 5, 5, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", alert_r58.show);
} }
function ModalSecretariaComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de solicitud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha no valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de misi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha no valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de solicitud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere el lugar o institucci\u00F3n que visitar\u00E1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Digite m\u00E1s de 3 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Direcci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "textarea", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Direcci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "textarea", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_49_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_49_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dpt_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dpt_r67.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dpt_r67.na2, " ");
} }
function ModalSecretariaComponent_div_49_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un departamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Departamento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalSecretariaComponent_div_49_span_4_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ModalSecretariaComponent_div_49_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r68.deptoChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalSecretariaComponent_div_49_ng_option_6_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalSecretariaComponent_div_49_span_8_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r15.soliVeOd != null && ctx_r15.leyenda === "Edicion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r15.esCampoValido("depto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true)("notFoundText", "Datos no econtrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r15.departamentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r15.formularioSoliVe.get("depto")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
} }
function ModalSecretariaComponent_div_50_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_50_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const muni_r73 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", muni_r73.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", muni_r73.nam, " ");
} }
function ModalSecretariaComponent_div_50_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un municipio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Municipio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalSecretariaComponent_div_50_span_4_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ModalSecretariaComponent_div_50_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r75); const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r74.distChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalSecretariaComponent_div_50_ng_option_6_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalSecretariaComponent_div_50_span_8_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.soliVeOd != null && ctx_r16.leyenda === "Edicion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r16.esCampoValido("municipio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r16.municipios);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r16.formularioSoliVe.get("municipio")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
} }
function ModalSecretariaComponent_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
function ModalSecretariaComponent_div_53_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_53_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cton_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", cton_r79.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", cton_r79.nam, " ");
} }
function ModalSecretariaComponent_div_53_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un cant\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cant\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalSecretariaComponent_div_53_span_4_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalSecretariaComponent_div_53_ng_option_6_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalSecretariaComponent_div_53_span_8_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.soliVeOd == null && ctx_r18.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r18.esCampoValido("canton"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r18.cantones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r18.formularioSoliVe.get("canton")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
} }
function ModalSecretariaComponent_div_56_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_56_ng_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", x_r83.codigoEmpleado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](x_r83.nombre + " " + x_r83.apellido);
} }
function ModalSecretariaComponent_div_56_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere un motorista ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Motorista: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalSecretariaComponent_div_56_span_3_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "ng-select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalSecretariaComponent_div_56_ng_option_5_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalSecretariaComponent_div_56_span_7_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r19.soliVeOd != null && ctx_r19.leyenda === "Edicion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r19.esCampoValido("motorista"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true)("notFoundText", "Datos no econtrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r19.listMotoristas);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r19.formularioSoliVe.get("motorista")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
} }
function ModalSecretariaComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Motorista:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una observaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de regreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha no valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_ng_select_85_ng_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", car_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](car_r85);
} }
function ModalSecretariaComponent_ng_select_85_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalSecretariaComponent_ng_select_85_Template_ng_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r86.cargarPlacas(ctx_r86.formularioSoliVe.get("tipoVehiculo").value, ctx_r86.formularioSoliVe.get("fechaSalida").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalSecretariaComponent_ng_select_85_ng_option_1_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r26.esCampoValido("tipoVehiculo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r26.listVehiculos);
} }
function ModalSecretariaComponent_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un tipo de veh\u00EDculo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_input_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 89);
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r28.soliVeOd != null ? ctx_r28.soliVeOd.vehiculo.clase : "");
} }
function ModalSecretariaComponent_span_94_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_ng_template_95_ng_select_0_ng_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehiculo_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", vehiculo_r91.codigoVehiculo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](vehiculo_r91.placa);
} }
function ModalSecretariaComponent_ng_template_95_ng_select_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalSecretariaComponent_ng_template_95_ng_select_0_ng_option_1_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r88.esCampoValido("vehiculo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true)("notFoundText", "Datos no econtrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r88.placas);
} }
function ModalSecretariaComponent_ng_template_95_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un veh\u00EDculo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_ng_template_95_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalSecretariaComponent_ng_template_95_ng_select_0_Template, 2, 5, "ng-select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalSecretariaComponent_ng_template_95_span_2_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r31.leyenda == "Edicion" && ctx_r31.soliVeOd != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r31.formularioSoliVe.get("vehiculo")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
} }
function ModalSecretariaComponent_ng_template_97_input_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 93);
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r92.soliVeOd != null ? ctx_r92.soliVeOd.vehiculo.placa : "");
} }
function ModalSecretariaComponent_ng_template_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalSecretariaComponent_ng_template_97_input_0_Template, 1, 1, "input", 92);
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r33.leyenda == "Detalle" && ctx_r33.soliVeOd != null);
} }
function ModalSecretariaComponent_div_100_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_100_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dist_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dist_r96.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dist_r96.nam, " ");
} }
function ModalSecretariaComponent_div_100_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un distrito ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_100_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Distrito: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalSecretariaComponent_div_100_span_5_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ng-select", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ModalSecretariaComponent_div_100_Template_ng_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r97.muniChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalSecretariaComponent_div_100_ng_option_7_Template, 2, 2, "ng-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ModalSecretariaComponent_div_100_span_9_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r34.soliVeOd == null && ctx_r34.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r34.esCampoValido("distrito"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r34.distritos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r34.formularioSoliVe.get("distrito")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
} }
function ModalSecretariaComponent_span_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere la hora de regreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere la hora de salida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_134_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Requiere campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_140_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_144_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere el obejetivo de la misi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_145_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Digite m\u00E1s de 6 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_154_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere la cantidad de pasajeros en la misi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_155_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " La cantidad de personas debe ser al menos 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_span_156_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Solamente se permiten n\u00FAmeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_157_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Responsable:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_158_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_158_div_2_table_4_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r108 = ctx.index;
    const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r108 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", ctx_r106.pasajeroFormControls[i_r108])("readonly", ctx_r106.soliVeOd != null && ctx_r106.leyenda === "Detalle");
} }
function ModalSecretariaComponent_div_158_div_2_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalSecretariaComponent_div_158_div_2_table_4_tr_8_Template, 5, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r104.pasajeros);
} }
function ModalSecretariaComponent_div_158_div_2_table_5_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_div_158_div_2_table_5_tr_10_Template_button_click_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r113); const i_r111 = restoredCtx.index; const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r112.borrarPasatiempo(i_r111); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const control_r110 = ctx.$implicit;
    const i_r111 = ctx.index;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r111 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formControl", control_r110)("readonly", ctx_r109.soliVeOd != null && ctx_r109.leyenda === "Detalle");
} }
function ModalSecretariaComponent_div_158_div_2_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Accion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ModalSecretariaComponent_div_158_div_2_table_5_tr_10_Template, 8, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r105.pasajeroFormControls);
} }
function ModalSecretariaComponent_div_158_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ingrese los nombres de los pasajeros: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalSecretariaComponent_div_158_div_2_span_3_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalSecretariaComponent_div_158_div_2_table_4_Template, 9, 1, "table", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalSecretariaComponent_div_158_div_2_table_5_Template, 11, 1, "table", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.soliVeOd != null && ctx_r99.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.leyenda === "Detalle" && ctx_r99.soliVeOd != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.leyenda !== "Detalle" && ctx_r99.soliVeOd != null);
} }
function ModalSecretariaComponent_div_158_ng_template_3_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_158_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Por favor, adjunta la lista de pasajeros: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalSecretariaComponent_div_158_ng_template_3_div_0_span_2_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalSecretariaComponent_div_158_ng_template_3_div_0_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r116.cambioDeArchivo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r114.soliVeOd != null && ctx_r114.leyenda === "Edicion");
} }
function ModalSecretariaComponent_div_158_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalSecretariaComponent_div_158_ng_template_3_div_0_Template, 4, 1, "div", 107);
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r101.mostrarArchivoAdjunto && ctx_r101.leyenda === "Edicion");
} }
function ModalSecretariaComponent_div_158_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_div_158_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r118.descargaPdf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Lista de pasajeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Descargar pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_div_158_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalSecretariaComponent_div_158_div_2_Template, 6, 3, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalSecretariaComponent_div_158_ng_template_3_Template, 1, 1, "ng-template", null, 99, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalSecretariaComponent_div_158_div_5_Template, 5, 0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r49.mostrarTabla)("ngIfElse", _r100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r49.btnVerPdf);
} }
function ModalSecretariaComponent_button_160_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Asignar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_button_161_Template(rf, ctx) { if (rf & 1) {
    const _r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_button_161_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r121); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r120.aprobarSolicitud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Aprobar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_button_162_Template(rf, ctx) { if (rf & 1) {
    const _r123 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_button_162_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r123); const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r122.revisionSolicitud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Revisi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_button_163_Template(rf, ctx) { if (rf & 1) {
    const _r125 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_button_163_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r125); const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r124.anularSolicitud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Anular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalSecretariaComponent_button_164_Template(rf, ctx) { if (rf & 1) {
    const _r127 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_button_164_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r127); const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r126.anularSolicitud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Anular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ModalSecretariaComponent {
    constructor(modalService, fb, router, soliVeService, activeModal, mensajesService, emailService) {
        this.modalService = modalService;
        this.fb = fb;
        this.router = router;
        this.soliVeService = soliVeService;
        this.activeModal = activeModal;
        this.mensajesService = mensajesService;
        this.emailService = emailService;
        this.isInteger = _constants_constants__WEBPACK_IMPORTED_MODULE_1__.INTEGER_VALIDATE;
        this.isDate = "";
        this.pasajeros = [];
        this.username = 'Usuario que inicia';
        this.mostrarTabla = true;
        this.btnVerPdf = false;
        this.mostrarArchivoAdjunto = false;
        this.cantidadPersonas = 0;
        this.isChecked = false;
        this.pasajeroFormControls = [];
        this.soliSave = [];
        this.documentoSoliVe = [];
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: " Complete los campos obligatorios (*)",
                show: false,
            },
            {
                id: 2,
                type: "warning",
                message: " Tenga en cuenta que una vez almacenada la información no las podrá modificar y serán datos permanentes.",
                show: false,
            },
        ];
    }
    ngOnInit() {
        this.iniciarFormulario();
        this.llenarSelectDepartamentos();
        this.soliVeService.obtenerVehiculos();
        this.soliVeService.obtenerMotoristas();
        this.detalle(this.leyenda);
    }
    get listVehiculos() {
        return this.soliVeService.listVehiculos;
    }
    get listMotoristas() {
        return this.soliVeService.listMotorista;
    }
    detalle(leyenda) {
        if (leyenda == 'Edicion' || leyenda == 'Detalle') {
            const solicitudVehiculo = this.soliVeOd;
            const cadena = this.soliVeOd.direccion;
            const partes = cadena.split(', ');
            this.formularioSoliVe.get('fechaSolicitud')
                .setValue(this.soliVeOd != null ? this.soliVeOd.fechaSolicitud : '');
            this.formularioSoliVe.get('fechaSalida')
                .setValue(this.soliVeOd != null ? this.soliVeOd.fechaSalida : '');
            this.formularioSoliVe.get('unidadSolicitante')
                .setValue(this.soliVeOd != null ? this.soliVeOd.unidadSolicitante : '');
            this.formularioSoliVe.get('lugarMision')
                .setValue(this.soliVeOd != null ? this.soliVeOd.lugarMision : '');
            this.formularioSoliVe.get('depto')
                .setValue(this.soliVeOd != null ? partes[0].toLocaleUpperCase() : '');
            this.formularioSoliVe.get('direccion')
                .setValue(this.soliVeOd != null ? this.soliVeOd.direccion : '');
            this.formularioSoliVe.get('fechaEntrada')
                .setValue(this.soliVeOd != null ? this.soliVeOd.fechaEntrada : '');
            this.formularioSoliVe.get('objetivoMision')
                .setValue(this.soliVeOd != null ? this.soliVeOd.objetivoMision : '');
            this.formularioSoliVe.get('tipoVehiculo')
                .setValue(this.soliVeOd != null ? this.soliVeOd.vehiculo.clase : '');
            this.formularioSoliVe.get('vehiculo')
                .setValue(this.soliVeOd != null ? this.soliVeOd.vehiculo.placa : '');
            this.formularioSoliVe.get('cantidadPersonas')
                .setValue(this.soliVeOd != null ? this.soliVeOd.cantidadPersonas : '');
            this.formularioSoliVe.get('horaSalida')
                .setValue(this.soliVeOd != null ? this.soliVeOd.horaSalida : '');
            this.formularioSoliVe.get('horaEntrada')
                .setValue(this.soliVeOd != null ? this.soliVeOd.horaEntrada : '');
            this.formularioSoliVe.get('solicitante')
                .setValue(this.soliVeOd != null ? this.soliVeOd.solicitante.empleado.nombre + ' '
                + this.soliVeOd.solicitante.empleado.apellido : '');
            // para input radio
            if (this.usuarioActivo.role == 'DECANO') {
                this.formularioSoliVe.get('tieneVale')
                    .setValue(this.soliVeOd.tieneVale ? 'true' : 'false');
                this.formularioSoliVe.get('tieneVale').disable();
            }
            // por estado revision
            if (this.soliVeOd.motorista != null) {
                this.formularioSoliVe.get('motorista')
                    .setValue(this.soliVeOd != null ? this.soliVeOd.motorista.nombre + ' '
                    + this.soliVeOd.motorista.apellido : '');
            }
            if (this.soliVeOd.observaciones != null) {
                this.formularioSoliVe.get('observaciones')
                    .setValue(this.soliVeOd != null ? this.soliVeOd.observaciones : '');
            }
            if (solicitudVehiculo.cantidadPersonas > 5) {
                this.mostrarTabla = false;
                this.btnVerPdf = true;
            }
            else if (solicitudVehiculo.cantidadPersonas == 1) {
                this.mostrarTabla = false;
            }
            for (const persona of this.soliVeOd.listaPasajeros) {
                //console.log(persona);
                this.pasajeros.push({ id: persona.id, nombrePasajero: persona.nombrePasajero });
                const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.soliVeOd != null ? persona.nombrePasajero : '');
                this.pasajeroFormControls.push(control);
            }
            //console.log(this.pasajeros);
        }
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            //this.formularioSoliVe.value.unidadSolicitante = this.usuarioActivo.empleado.departamento.nombre;
            const solicitudVehiculo = this.formularioSoliVe.value;
            //console.log("formularo: ",this.formularioSoliVe);
            if (this.formularioSoliVe.valid) {
                if (this.validarfecha(solicitudVehiculo.fechaSolicitud)) {
                    if (this.validarfecha(solicitudVehiculo.fechaSalida)) {
                        if (this.validarfecha(solicitudVehiculo.fechaEntrada)) {
                            if ((solicitudVehiculo.cantidadPersonas == this.soliVeOd.cantidadPersonas
                                || this.file != null) ||
                                (solicitudVehiculo.cantidadPersonas < 6)) {
                                //  vacío para almacenar los datos de los pasajeros
                                const pasajerosData = [];
                                // Recorrer los controles de los pasajeros
                                for (const control of this.pasajeroFormControls) {
                                    // Obtener el valor del control
                                    const nombrePasajero = control.value;
                                    // objeto con el valor del control y un ID vacío
                                    const pasajero = { id: '', nombrePasajero };
                                    // Agregar el objeto al arreglo de pasajerosData
                                    pasajerosData.push(pasajero);
                                }
                                solicitudVehiculo.listaPasajeros = pasajerosData;
                                //console.log("dataPas: ",pasajerosData);
                                // validacion lista de pasajeros
                                const todosLlenos = pasajerosData.every((pasajero) => {
                                    const value = pasajero.nombrePasajero;
                                    if (typeof value === 'string' && value.trim() !== '') {
                                        return true;
                                    }
                                    return false;
                                });
                                if (!todosLlenos && solicitudVehiculo.cantidadPersonas < 6) {
                                    this.mensajesService.mensajesToast("warning", "Por favor, completa todos los nombres de los pasajeros.");
                                    // fin validacion de lista de pasajeros
                                }
                                else {
                                    // Todos los nombres de los pasajeros están llenos, continuar con el envío de la solicitud.
                                    if ((yield this.mensajesService.mensajesConfirmar()) == true) {
                                        this.registrarSoliVe();
                                    }
                                }
                            }
                            else {
                                this.mensajesService.mensajesToast("warning", "Debe subir pdf de la lista de pasajeros");
                            }
                        }
                        else {
                            this.mensajesService.mensajesToast("warning", "Año de fecha de regreso incorrecta");
                        }
                    }
                    else {
                        this.mensajesService.mensajesToast("warning", "Año de fecha de misión incorrecta");
                    }
                }
                else {
                    this.mensajesService.mensajesToast("warning", "Año de fecha de solicitud incorrecta");
                }
            }
            else {
                // Mostrar nombres de campos inválidos por consola
                /*console.log('Campos inválidos:',
                  Object.keys(this.formularioSoliVe.controls).filter((controlName) =>
                    this.formularioSoliVe.get(controlName)?.invalid));*/
                this.mensajesService.mensajesToast("warning", "Complete los que se indican");
                return Object.values(this.formularioSoliVe.controls).forEach((control) => control.markAsTouched());
            }
        });
    }
    // subir el archivo
    cambioDeArchivo(event) {
        const target = event.target;
        this.file = target.files[0];
    }
    registrarSoliVe() {
        const solicitudVehiculo = this.formularioSoliVe.value;
        solicitudVehiculo.codigoSolicitudVehiculo = this.soliVeOd.codigoSolicitudVehiculo;
        //solicitudVehiculo.motorista = this.soliVeOd.motorista.codigoEmpleado;
        solicitudVehiculo.solicitante = this.soliVeOd.solicitante.codigoUsuario;
        solicitudVehiculo.nombreJefeDepto = this.soliVeOd.nombreJefeDepto;
        let nombreMotoristaExistente;
        if (this.soliVeOd.motorista != null) {
            nombreMotoristaExistente = this.soliVeOd.motorista.nombre + ' ' +
                this.soliVeOd.motorista.apellido;
            if (nombreMotoristaExistente.toString() == this.formularioSoliVe.get('motorista').value) {
                solicitudVehiculo.motorista = this.soliVeOd.motorista.codigoEmpleado;
            }
        }
        if (this.soliVeOd.vehiculo.placa == this.formularioSoliVe.get('vehiculo').value) {
            solicitudVehiculo.vehiculo = this.soliVeOd.vehiculo.codigoVehiculo;
        }
        const tipoBuscado = "Lista de pasajeros";
        const documentosFiltrados = this.soliVeOd.listDocumentos.filter((documento) => {
            return documento.tipoDocumento === tipoBuscado;
        });
        //console.log(documentosFiltrados);
        /* para la direccion */
        let nombreDepartamento;
        let nombreMunicipio;
        let nombreDistrito;
        let nombreCanton;
        const codigoDepartamentoSeleccionado = this.formularioSoliVe.get('depto').value;
        const codigoMunicipioSeleccionado = this.formularioSoliVe.get('municipio').value;
        const codigoDistritoSeleccionado = this.formularioSoliVe.get('distrito').value;
        const codigoCantonSeleccionado = this.formularioSoliVe.get('canton').value;
        // Busca el objeto correspondiente al código seleccionado
        const departamentoSeleccionado = this.departamentos.find(dpt => dpt.codigo === codigoDepartamentoSeleccionado);
        const municipioSeleccionado = this.municipios.find(muni => muni.codigo === codigoMunicipioSeleccionado);
        const distritoSeleccionado = this.distritos.find(dist => dist.codigo === codigoDistritoSeleccionado);
        const cantonSeleccionado = this.cantones.find(ctn => ctn.codigo === codigoCantonSeleccionado);
        if (departamentoSeleccionado) {
            nombreDepartamento = departamentoSeleccionado.nam;
        }
        if (municipioSeleccionado) {
            nombreMunicipio = municipioSeleccionado.nam;
        }
        if (distritoSeleccionado) {
            nombreDistrito = distritoSeleccionado.nam;
        }
        if (cantonSeleccionado) {
            nombreCanton = cantonSeleccionado.nam;
        }
        solicitudVehiculo.direccion = this.soliVeOd.direccion;
        // solicitudVehiculo.direccion = nombreDepartamento+', '+nombreMunicipio+', '+
        //   nombreDistrito+', '+nombreCanton;
        /* fin de la direccion */
        // Mostrar SweetAlert de carga
        const loadingAlert = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Espere",
            text: "Realizando la acción...",
            icon: "info",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
        });
        //console.log(solicitudVehiculo);
        return new Promise((resolve, reject) => {
            this.soliVeService.updateSolicitudVehiculo(solicitudVehiculo).subscribe({
                next: (resp) => {
                    this.soliSave = resp;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    if (solicitudVehiculo.cantidadPersonas != this.soliVeOd.cantidadPersonas && this.file != null) {
                        // enviar pdf
                        const formData = new FormData();
                        let obj = {
                            codigoDocumento: documentosFiltrados.length > 0 ? documentosFiltrados[0].codigoDocumento : '',
                            nombreDocumento: documentosFiltrados.length > 0 ? documentosFiltrados[0].nombreDocumento : '',
                            urlDocumento: documentosFiltrados.length > 0 ? documentosFiltrados[0].urlDocumento : '',
                            tipoDocumento: 'Lista de pasajeros',
                            fecha: this.obtenerFechaActual(new Date()),
                            codigoSolicitudVehiculo: {
                                codigoSolicitudVehiculo: resp.codigoSolicitudVehiculo,
                            }
                        };
                        formData.append('archivo', this.file);
                        formData.append('entidad', new Blob([JSON.stringify(obj)], { type: 'application/json' }));
                        this.soliVeService.enviarPdfPasajeros(formData).subscribe({
                            next: (pdfResp) => {
                                //console.log(pdfResp);
                                if (this.usuarioActivo.role == 'ADMIN') {
                                    this.soliVeService.getSolicitudesVehiculo(2);
                                }
                                else {
                                    this.soliVeService.getSolicitudesRol(this.usuarioActivo.role);
                                }
                                this.mensajesService.mensajesToast("success", "Asignación exitosa");
                                this.enviarEmailSD('DECANO', 'Solicitud de vehículo pendiente de aprobación', 'Tiene una nueva solicitud de vehículo pendiente de aprobar o verificar la información');
                                this.modalService.dismissAll();
                                this.formularioSoliVe.reset();
                                resolve();
                            },
                            error: (pdfError) => {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                                this.mensajesService.mensajesSweet('error', 'Ups... Algo salió mal al enviar el PDF', pdfError.error.message);
                                reject(pdfError);
                            },
                        });
                    }
                    else {
                        if (this.usuarioActivo.role == 'ADMIN') {
                            this.soliVeService.getSolicitudesVehiculo(2);
                        }
                        else {
                            this.soliVeService.getSolicitudesRol(this.usuarioActivo.role);
                        }
                        this.mensajesService.mensajesToast("success", "Asignación exitosa");
                        this.enviarEmailSD('DECANO', 'Solicitud de vehículo pendiente de aprobación', 'Tiene una nueva solicitud de vehículo pendiente de aprobar o verificar la información');
                        this.modalService.dismissAll();
                        this.formularioSoliVe.reset();
                        resolve();
                    }
                },
                error: (err) => {
                    // Cerrar SweetAlert de carga
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal en la asignacion", err.error.message);
                    reject(err); // Rechaza la promesa con el error
                },
            });
        });
    }
    editarSoliVe() {
    }
    cargarPlacas(tipoVehiculo, fechaSalida) {
        this.soliVeService.filtroPlacasVehiculo(tipoVehiculo, fechaSalida).subscribe((vehiculosData) => {
            if (vehiculosData && vehiculosData.length > 0) {
                this.placas = vehiculosData;
                this.formularioSoliVe.get('vehiculo').setValue('');
                if (this.soliVeOd.vehiculo.clase == tipoVehiculo) {
                    this.placas.push(this.soliVeOd.vehiculo);
                    this.formularioSoliVe.get('vehiculo').setValue(this.soliVeOd.vehiculo.placa);
                }
            }
            else if (tipoVehiculo != '') {
                this.placas = [];
                this.formularioSoliVe.get('vehiculo').setValue('');
                this.mensajesService.mensajesToast("warning", "En estas fechas, no hay vehiculos disponibles del tipo seleccionado.");
            }
        }, (error) => {
            //console.error('Error al obtener opciones de vehículos desde el backend:', error);
        });
    }
    iniciarFormulario() {
        const fechaActual = this.obtenerFechaActual(new Date()) || '';
        this.formularioSoliVe = this.fb.group({
            fechaSolicitud: [
                fechaActual,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isDate)
                ]
            ],
            fechaSalida: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            ],
            fechaEntrada: [
                '',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            ],
            unidadSolicitante: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            ],
            tipoVehiculo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            vehiculo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            objetivoMision: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            lugarMision: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            direccion: [''],
            depto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            //modificado por sino se ocupa borrar
            municipio: ['', []],
            distrito: ['', []],
            canton: ['', []],
            horaSalida: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            horaEntrada: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            cantidadPersonas: [
                1,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)]
            ],
            solicitante: [],
            listaPasajeros: this.fb.array([]),
            motorista: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            observaciones: ['', []],
            file: ['',],
            tieneVale: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    validarfecha(fecha) {
        const inputDate = new Date(fecha);
        if (inputDate.getFullYear() > 999 && inputDate.getFullYear() < 10000) {
            return true;
        }
        else {
            return false;
        }
    }
    //// metodo para validar el campo si es valido o no ////
    esCampoValido(campo) {
        const validarCampo = this.formularioSoliVe.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    obtenerFechaActual(date) {
        const year = date.getFullYear();
        const mes = (date.getMonth() + 1).toString().
            padStart(2, '0');
        const dia = date.getDate().toString().
            padStart(2, '0');
        return `${year}-${mes}-${dia}`;
    }
    llenarSelectDepartamentos() {
        // Reiniciar las selecciones y opciones para los selectores subsiguientes
        this.formularioSoliVe.get('depto').setValue(null);
        this.formularioSoliVe.get('municipio').setValue(null);
        this.formularioSoliVe.get('distrito').setValue(null);
        this.formularioSoliVe.get('canton').setValue(null);
        this.municipios = [];
        this.distritos = [];
        this.cantones = [];
        this.soliVeService.getDepa()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)((dp) => dp.filter((depa) => depa.codigo.length === 2)))
            .subscribe((resp) => {
            this.departamentos = this.sortItemsByCodigo(resp);
        });
    }
    /**Cargar municipio segun dpto */
    deptoChange(id) {
        this.formularioSoliVe.get('municipio').setValue(null);
        this.formularioSoliVe.get('distrito').setValue(null);
        this.formularioSoliVe.get('canton').setValue(null);
        this.municipios = [];
        this.distritos = [];
        this.cantones = [];
        // Obtener las opciones correspondientes al departamento seleccionado
        this.soliVeService.getDepa()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(dp => dp.filter(muni => muni.codigo.startsWith(id) && muni.codigo.length === 4)))
            .subscribe(resp => {
            this.municipios = this.sortItemsByCodigo(resp);
        });
    }
    distChange(id) {
        this.formularioSoliVe.get('distrito').setValue(null);
        this.formularioSoliVe.get('canton').setValue(null);
        this.distritos = [];
        this.cantones = [];
        // Obtener las opciones correspondientes al distrito seleccionado
        this.soliVeService.getDepa()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(dp => dp.filter(disti => disti.codigo.startsWith(id) && disti.codigo.length === 6)))
            .subscribe(resp => {
            this.distritos = this.sortItemsByCodigo(resp);
        });
    }
    muniChange(id) {
        this.formularioSoliVe.get('canton').setValue(null);
        this.cantones = [];
        // Obtener las opciones correspondientes al municipio seleccionado
        this.soliVeService.getDepa()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(dp => dp.filter(canton => canton.codigo.startsWith(id) && canton.codigo.length === 8)))
            .subscribe(resp => {
            this.cantones = this.sortItemsByCodigo(resp);
        });
    }
    //metodo para ordenar los datos del json de direcciones
    sortItemsByCodigo(items) {
        return items.sort((a, b) => a.codigo.localeCompare(b.codigo));
    }
    actualizarPasajeros() {
        this.cantidadPersonas = this.formularioSoliVe.get('cantidadPersonas').value;
        if (this.cantidadPersonas == this.soliVeOd.cantidadPersonas) {
            this.mostrarTabla = false;
            this.mostrarArchivoAdjunto = false;
        }
        else if (this.cantidadPersonas > 5) {
            this.mostrarTabla = false; // Ocultar la tabla
            this.mostrarArchivoAdjunto = true; // Mostrar el campo de entrada de archivo
        }
        else if (this.cantidadPersonas <= 1) {
            this.mostrarTabla = false;
            this.mostrarArchivoAdjunto = false;
        }
        else {
            this.mostrarTabla = true; // Mostrar la tabla
            this.mostrarArchivoAdjunto = false; // Ocultar el campo de entrada de archivo
        }
        // Verifica si la cantidad de personas está dentro del rango deseado (2 a 5)
        if (this.cantidadPersonas >= 2 && this.cantidadPersonas <= 5) {
            const cantidadFilasDeseada = this.cantidadPersonas - 1;
            // Elimina filas en exceso si hay más de las deseadas
            while (this.pasajeroFormControls.length > cantidadFilasDeseada) {
                this.pasajeroFormControls.pop();
            }
            // Agrega filas
            while (this.pasajeroFormControls.length < cantidadFilasDeseada) {
                const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required);
                this.pasajeroFormControls.push(control);
            }
        }
        else {
            this.pasajeroFormControls = [];
        }
    }
    siMuestraAlertas() {
        return this.alerts.every((alert) => alert.show);
    }
    restaurarAlerts() {
        this.alerts.forEach((alert) => {
            alert.show = true;
        });
    }
    CambiarAlert(alert) {
        alert.show = !alert.show;
    }
    descargaPdf() {
        const tipoBuscado = "Lista de pasajeros";
        const nombreDocument = this.soliVeOd.listDocumentos.filter((documento) => documento.tipoDocumento === tipoBuscado)
            .map((documento) => documento.nombreDocumento);
        this.soliVeService.obtenerDocumentPdf(nombreDocument)
            .subscribe((resp) => {
            let file = new Blob([resp], { type: 'application/pdf' });
            let fileUrl = URL.createObjectURL(file);
            window.open(fileUrl);
        });
    }
    actualizarEstadoCheckbox() {
        this.isChecked = !this.isChecked;
        //console.log(this.isChecked);
    }
    borrarPasatiempo(i) {
        this.pasajeroFormControls.splice(i, 1);
        this.formularioSoliVe.get('cantidadPersonas')
            .setValue(this.pasajeroFormControls.length + 1);
    }
    anularSolicitud() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formularioSoliVe.get('observaciones').value == '') {
                this.formularioSoliVe.get('observaciones').setErrors({ required: true });
                this.formularioSoliVe.get('observaciones').markAsTouched();
                this.mensajesService.mensajesToast("warning", "Solicitud se requiere campo observaciones");
            }
            else {
                if ((yield this.mensajesService.mensajeAnular()) == true) {
                    this.soliVeOd.estado = 15;
                    this.soliVeOd.observaciones = this.formularioSoliVe.get('observaciones').value;
                    yield this.actualizarSolicitud(this.soliVeOd, 'anulada');
                }
            }
        });
    }
    actualizarSolicitud(data, accion) {
        return new Promise((resolve, reject) => {
            this.soliVeService.updateSolciitudVehiculo(data).subscribe({
                next: () => {
                    //resp:any this.usuarioActivo.role == 'ADMIN' && data.estado == 15 && this.leyenda == 'Edicion'
                    if (this.usuarioActivo.role == 'ADMIN' && data.estado == 15 && this.leyenda == 'Edicion') {
                        this.soliVeService.getSolicitudesVehiculo(2);
                    }
                    else if (this.usuarioActivo.role == 'ADMIN' && (data.estado == 6 || data.estado == 15)) {
                        this.soliVeService.getSolicitudesVehiculo(3);
                    }
                    else {
                        this.soliVeService.getSolicitudesRol(this.usuarioActivo.role);
                    }
                    this.mensajesService.mensajesToast("success", `Solicitud ${accion} con éxito`);
                    if (data.estado == 6) {
                        this.enviarEmailSD('SECR_DECANATO', 'Solicitud de vehículo pendiente de revisión', `Tiene una solicitud vehículo pendiente de revisión. ${data.observaciones}.`);
                    }
                    else if (data.estado == 15) {
                        this.enviarEmailAnulacion(data.solicitante.codigoUsuario, data.observaciones);
                    }
                    this.modalService.dismissAll();
                    resolve();
                },
                error: (error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    this.mensajesService.mensajesSweet('error', 'Ups... Algo salió mal', error.error.message);
                    reject(error);
                },
            });
        });
    }
    revisionSolicitud() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formularioSoliVe.get('observaciones').value == '') {
                this.formularioSoliVe.get('observaciones').setErrors({ required: true });
                this.formularioSoliVe.get('observaciones').markAsTouched();
                this.mensajesService.mensajesToast("warning", "Se requiere campo observaciones");
                return;
            }
            if ((yield this.mensajesService.mensajeRevision()) == true) {
                this.soliVeOd.estado = 6;
                this.soliVeOd.observaciones = this.formularioSoliVe.get('observaciones').value;
                yield this.actualizarSolicitud(this.soliVeOd, 'enviada a revisión');
            }
        });
    }
    aprobarSolicitud() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.soliVeOd.tieneVale) {
                if ((yield this.mensajesService.mensajeAprobar()) == true) {
                    yield this.actualizarSolicitudDec(this.soliVeOd);
                }
            }
            else {
                if ((yield this.mensajesService.mensajeAprobar()) == true) {
                    this.soliVeOd.estado = 5;
                    yield this.actualizarSolicitudSinVa(this.soliVeOd);
                }
            }
        });
    }
    actualizarSolicitudDec(data) {
        return new Promise((resolve, reject) => {
            this.soliVeService.updateSolciitudVehiculo(data).subscribe({
                next: (resp) => {
                    // resp: any
                    this.solicitudVale = {
                        idSolicitudVale: null,
                        cantidadVale: 0,
                        estadoEntrada: 1,
                        estado: 8,
                        solicitudVehiculo: data.codigoSolicitudVehiculo
                    };
                    this.enviarEmailAprobacionASolicitante(data.solicitante.codigoUsuario, data.observaciones);
                    this.soliVeService.registrarSolicitudVale(this.solicitudVale).subscribe({
                        next: () => {
                            // valeResp: any
                            if (this.usuarioActivo.role == 'ADMIN') {
                                this.soliVeService.getSolicitudesVehiculo(3);
                            }
                            else {
                                this.soliVeService.getSolicitudesRol(this.usuarioActivo.role);
                            }
                            this.mensajesService.mensajesToast("success", "Solicitud aprobada con éxito");
                            this.modalService.dismissAll();
                            resolve();
                        },
                        error: (errorSoli) => {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                            this.mensajesService.mensajesSweet('error', 'Ups... Algo salió mal al aprobar la solicitud', errorSoli.error.message);
                            reject(errorSoli);
                        },
                    });
                },
                error: (error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    this.mensajesService.mensajesSweet('error', 'Ups... Algo salió mal', error.error.message);
                    reject(error);
                },
            });
        });
    }
    actualizarSolicitudSinVa(data) {
        return new Promise((resolve, reject) => {
            this.soliVeService.updateSolciitudVehiculoSinVale(data).subscribe({
                next: () => {
                    // resp: any
                    this.soliVeService.getSolicitudesRol(this.usuarioActivo.role);
                    this.mensajesService.mensajesToast("success", "Solicitud aprobada con éxito");
                    this.enviarEmailAprobacionASolicitante(data.solicitante.codigoUsuario, data.observaciones);
                    this.modalService.dismissAll();
                    resolve();
                },
                error: (error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    this.mensajesService.mensajesSweet('error', 'Ups... Algo salió mal', error.error.message);
                    reject(error);
                },
            });
        });
    }
    /** correos */
    enviarEmailSD(rol, titulo, mensaje) {
        this.emailService.getEmailNameRol(rol).subscribe((datos) => {
            const email = {
                asunto: titulo,
                titulo: titulo,
                email: datos.correo,
                receptor: "Estimad@ " + datos.nombreCompleto + ".",
                mensaje: mensaje,
                centro: 'Por favor ingrese al sistema para ver más detalles',
                abajo: 'Gracias por su atención a este importante mensaje.\nFeliz día!',
            };
            this.emailService.notificarEmail(email);
        }, (error) => {
            console.error('Error al obtener el correo:', error);
        });
    }
    enviarEmailAnulacion(id, obsevacion) {
        if (obsevacion == null) {
            obsevacion = 'SIN NINGUNA OBSERVACIÓN';
        }
        this.emailService.getSolicitante(id).subscribe((datos) => {
            const nombreUserAccion = this.usuarioActivo.empleado.nombre + " " +
                this.usuarioActivo.empleado.apellido;
            const email = {
                asunto: 'Solicitud de vehículo ANULADA',
                titulo: 'Solicitud de vehículo ANULADA',
                email: datos.correo,
                receptor: "Estimad@ " + datos.nombreCompleto + ".",
                mensaje: "Su solicitud ha sido anulada por " + nombreUserAccion + ". " + obsevacion,
                centro: 'Por favor ingrese al sistema para ver más detalles',
                abajo: 'Gracias por su atención a este importante mensaje.\nFeliz día!',
            };
            this.emailService.notificarEmail(email);
        }, (error) => {
            console.error('Error al obtener el correo:', error);
        });
    }
    enviarEmailAprobacionASolicitante(id, obsevacion) {
        if (obsevacion == null) {
            obsevacion = 'SIN NINGUNA OBSERVACIÓN';
        }
        this.emailService.getSolicitante(id).subscribe((datos) => {
            const nombreUserAccion = this.usuarioActivo.empleado.nombre + " " +
                this.usuarioActivo.empleado.apellido;
            const email = {
                asunto: 'Solicitud de vehículo APROBADA',
                titulo: 'Solicitud de vehículo APROBADA',
                email: datos.correo,
                receptor: "Estimad@ " + datos.nombreCompleto + ".",
                mensaje: "Su solicitud ha sido aprobada por el Dencano: " + nombreUserAccion + ". " + obsevacion + ". Y está a la espera de asignación de vales",
                centro: '',
                abajo: 'Gracias por su atención a este importante mensaje.\nFeliz día!',
            };
            this.emailService.notificarEmail(email);
        }, (error) => {
            console.error('Error al obtener el correo:', error);
        });
    }
}
ModalSecretariaComponent.ɵfac = function ModalSecretariaComponent_Factory(t) { return new (t || ModalSecretariaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__.SolicitudVehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__.MensajesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_email_service__WEBPACK_IMPORTED_MODULE_4__.EmailService)); };
ModalSecretariaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModalSecretariaComponent, selectors: [["app-modal-secretaria"]], inputs: { leyenda: "leyenda", estadoSelecionado: "estadoSelecionado", soliVeOd: "soliVeOd", usuarioActivo: "usuarioActivo" }, decls: 167, vars: 88, consts: [[1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], [1, "row", "mb-4"], [1, "col-md-5"], [1, "row"], [1, "col-md-6"], ["for", "fecha-solicitud"], ["class", "text-danger", 4, "ngIf"], ["type", "date", "id", "fecha-solicitud", "formControlName", "fechaSolicitud", "readonly", "", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "fecha-mision"], ["type", "date", "id", "fecha-mision", "formControlName", "fechaSalida", 1, "form-control", 3, "readonly", "change"], [1, "mt-2"], [1, "form-group"], ["for", "unidad-solicitante"], ["type", "text", "id", "unidad-solicitante", "formControlName", "unidadSolicitante", "readonly", "", 1, "form-control"], ["for", "lugar-visitar"], ["type", "text", "id", "lugar-visitar", "placeholder", "Ingrese el lugar o insituci\u00F3n que visitar\u00E1", "formControlName", "lugarMision", 1, "form-control", 3, "readonly"], [3, "ngSwitch"], ["class", "col-md-12", 4, "ngSwitchCase"], ["class", "col-md-6", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "col-md-6", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["for", "observa-id"], ["cols", "30", "rows", "2", "id", "observa-id", "formControlName", "observaciones", 1, "form-control", 3, "placeholder", "readonly"], [1, "col-md-3"], [1, "col-md-12"], ["for", "fecha-regreso"], ["type", "date", "id", "fecha-regreso", "formControlName", "fechaEntrada", 1, "form-control", 3, "readOnly", "change"], [1, "mt-2", "ngselect-ve"], ["for", "tipo-vehiculo"], ["formControlName", "tipoVehiculo", "placeholder", "Escriba o seleccione", "labelForId", "tipoVehiculo", 3, "selectOnTab", "class", "change", 4, "ngIf"], ["type", "text", "class", "form-control", "id", "tipo-vehiculo", "formControlName", "tipoVehiculo", "readonly", "", 3, "value", 4, "ngIf"], ["for", "vehiculo"], ["selectTemplate", ""], ["inputTemplate", ""], [3, "ngTemplateOutlet"], ["class", "row", 4, "ngIf"], ["for", "hora-regreso"], ["type", "time", "id", "hora-regreso", "formControlName", "horaEntrada", 1, "form-control", 3, "readOnly"], ["for", "hora-salida"], ["type", "time", "id", "hora-salida", "formControlName", "horaSalida", 1, "form-control", 3, "readonly"], [1, "ms-3"], [1, "form-check", "mb-3"], ["type", "radio", "id", "formRadios1", "value", "true", "formControlName", "tieneVale", 1, "form-check-input"], ["for", "formRadios1", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "id", "formRadios2", "value", "false", "formControlName", "tieneVale", 1, "form-check-input"], ["for", "formRadios2", 1, "form-check-label"], [1, "col-md-4"], ["for", "objetivo-mision"], ["id", "objetivo-mision", "cols", "30", "rows", "3", "placeholder", "Ingrese el objetivo de la misi\u00F3n", "formControlName", "objetivoMision", 1, "form-control", 3, "readonly"], ["for", "cantidad-pasajeros"], ["type", "number", "id", "cantidad-pasajeros", "formControlName", "cantidadPersonas", "min", "1", 1, "form-control", 3, "value", "readonly", "change"], [1, "d-flex", "justify-content-end", "mt-4"], ["type", "submit", "class", "btn btn-primary w-sm me-2", "id", "btn-save", "name", "btn-save", 4, "ngIf"], ["type", "button", "class", "btn btn-primary w-sm me-2", "id", "btn-detalle-save", "name", "btn-save", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info w-sm me-2", "id", "btn-detalle_save", "name", "btn-save", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning w-sm me-2", "id", "btn-detalle-de", "name", "btn-save", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning w-sm me-2", "id", "btn-detalle-ave", "name", "btn-save", 3, "click", 4, "ngIf"], ["type", "button", "id", "btn-cancel", "name", "btn-cancel", "aria-hidden", "true", 1, "btn", "btn-dark", "w-sm", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "text-danger"], ["for", "direccion"], ["cols", "30", "rows", "2", "formControlName", "direccion", "readonly", "", 1, "form-control"], ["for", "detpto"], ["formControlName", "depto", "placeholder", "Escriba o seleccione", "labelForId", "depto", 3, "selectOnTab", "notFoundText", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "municipio"], ["formControlName", "municipio", "placeholder", "Escriba o seleccione", "labelForId", "municipio", 3, "selectOnTab", "ngModelChange"], ["for", "canton"], ["formControlName", "canton", "placeholder", "Escriba o seleccione", "labelForId", "canton", 3, "selectOnTab"], ["for", "motoristaid"], ["formControlName", "motorista", "placeholder", "Escriba o seleccione", "labelForId", "tipoVehiculo", 3, "selectOnTab", "notFoundText"], ["type", "text", "id", "motoristaid", "formControlName", "motorista", "readonly", "", 1, "form-control"], ["formControlName", "tipoVehiculo", "placeholder", "Escriba o seleccione", "labelForId", "tipoVehiculo", 3, "selectOnTab", "change"], ["type", "text", "id", "tipo-vehiculo", "formControlName", "tipoVehiculo", "readonly", "", 1, "form-control", 3, "value"], ["formControlName", "vehiculo", "placeholder", "Escriba o seleccione", "labelForId", "vehiculo", 3, "selectOnTab", "class", "notFoundText", 4, "ngIf"], ["formControlName", "vehiculo", "placeholder", "Escriba o seleccione", "labelForId", "vehiculo", 3, "selectOnTab", "notFoundText"], ["type", "text", "class", "form-control", "id", "vehiculo", "formControlName", "vehiculo", "readonly", "", 3, "value", 4, "ngIf"], ["type", "text", "id", "vehiculo", "formControlName", "vehiculo", "readonly", "", 1, "form-control", 3, "value"], ["for", "distrito"], ["formControlName", "distrito", "placeholder", "Escriba o seleccione", "labelForId", "distrito", 3, "selectOnTab", "ngModelChange"], ["for", "solicitante"], ["type", "text", "formControlName", "solicitante", "readonly", "", 1, "form-control"], [4, "ngIf", "ngIfElse"], ["archivoAdjunto", ""], ["class", "alert alert-warning", 3, "click", 4, "ngIf"], ["for", "tablaPasajeros"], ["class", "table excel-table table-responsive", "id", "tablaPasajeros", 4, "ngIf"], ["id", "tablaPasajeros", 1, "table", "excel-table", "table-responsive"], ["type", "text", 2, "width", "100%", 3, "formControl", "readonly"], ["type", "button", "ngbTooltip", "Quitar", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", "mx-1", 3, "click"], [1, "bx", "bx-trash"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert", "alert-warning"], ["type", "file", "id", "file", "accept", ".pdf", "formControlName", "file", 3, "change"], [1, "alert", "alert-warning", 3, "click"], ["type", "button", 1, "btn", "btn-primary"], ["type", "submit", "id", "btn-save", "name", "btn-save", 1, "btn", "btn-primary", "w-sm", "me-2"], ["type", "button", "id", "btn-detalle-save", "name", "btn-save", 1, "btn", "btn-primary", "w-sm", "me-2", 3, "click"], ["type", "button", "id", "btn-detalle_save", "name", "btn-save", 1, "btn", "btn-info", "w-sm", "me-2", 3, "click"], ["type", "button", "id", "btn-detalle-de", "name", "btn-save", 1, "btn", "btn-warning", "w-sm", "me-2", 3, "click"], ["type", "button", "id", "btn-detalle-ave", "name", "btn-save", 1, "btn", "btn-warning", "w-sm", "me-2", 3, "click"]], template: function ModalSecretariaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalSecretariaComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalSecretariaComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ModalSecretariaComponent_Template_form_ngSubmit_7_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Fecha de solicitud: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ModalSecretariaComponent_span_14_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ModalSecretariaComponent_span_17_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ModalSecretariaComponent_span_18_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Fecha de misi\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, ModalSecretariaComponent_span_22_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalSecretariaComponent_Template_input_change_23_listener() { return ctx.cargarPlacas(ctx.formularioSoliVe.get("tipoVehiculo").value, ctx.formularioSoliVe.get("fechaSalida").value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, ModalSecretariaComponent_span_25_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ModalSecretariaComponent_span_26_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Unidad solicitante: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ModalSecretariaComponent_span_32_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ModalSecretariaComponent_span_35_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Lugar que visitar\u00E1: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ModalSecretariaComponent_span_40_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, ModalSecretariaComponent_span_43_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ModalSecretariaComponent_span_44_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](46, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, ModalSecretariaComponent_div_47_Template, 5, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ModalSecretariaComponent_div_48_Template, 5, 0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ModalSecretariaComponent_div_49_Template, 9, 7, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, ModalSecretariaComponent_div_50_Template, 9, 6, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ModalSecretariaComponent_div_51_Template, 1, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, ModalSecretariaComponent_div_53_Template, 9, 6, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, ModalSecretariaComponent_div_56_Template, 8, 7, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, ModalSecretariaComponent_div_59_Template, 4, 0, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Observaciones:");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "textarea", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "              ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, ModalSecretariaComponent_span_68_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Fecha de regreso: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](74, ModalSecretariaComponent_span_74_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalSecretariaComponent_Template_input_change_75_listener() { return ctx.cargarPlacas(ctx.formularioSoliVe.get("tipoVehiculo").value, ctx.formularioSoliVe.get("fechaSalida").value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](77, ModalSecretariaComponent_span_77_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, ModalSecretariaComponent_span_78_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "label", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Tipo de veh\u00EDculo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](84, ModalSecretariaComponent_span_84_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, ModalSecretariaComponent_ng_select_85_Template, 2, 4, "ng-select", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](87, ModalSecretariaComponent_span_87_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, ModalSecretariaComponent_input_88_Template, 1, 1, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Placa: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](94, ModalSecretariaComponent_span_94_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](95, ModalSecretariaComponent_ng_template_95_Template, 3, 2, "ng-template", null, 41, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, ModalSecretariaComponent_ng_template_97_Template, 1, 1, "ng-template", null, 42, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](99, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, ModalSecretariaComponent_div_100_Template, 10, 6, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Hora de regreso: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, ModalSecretariaComponent_span_106_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](107, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](108, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](109, ModalSecretariaComponent_span_109_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](110, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](111, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "label", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](114, "Hora de salida: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](115, ModalSecretariaComponent_span_115_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](116, "input", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](118, ModalSecretariaComponent_span_118_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](120, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](122, "Utilizar\u00E1 Vales de Combustible? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, ModalSecretariaComponent_span_123_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](124, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](126, "input", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](127, "label", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](128, " SI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](129, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](130, "input", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](131, "label", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](132, " NO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](133, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](134, ModalSecretariaComponent_span_134_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](135, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](136, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](138, "label", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](139, "Objetivo de la misi\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](140, ModalSecretariaComponent_span_140_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](141, "textarea", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](142, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](143, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](144, ModalSecretariaComponent_span_144_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](145, ModalSecretariaComponent_span_145_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](146, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](147, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](148, "label", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](149, "No. de personas que viajar\u00E1n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](150, ModalSecretariaComponent_span_150_Template, 2, 0, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](151, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](152, "input", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalSecretariaComponent_Template_input_change_152_listener() { return ctx.actualizarPasajeros(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](153, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](154, ModalSecretariaComponent_span_154_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](155, ModalSecretariaComponent_span_155_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](156, ModalSecretariaComponent_span_156_Template, 2, 0, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](157, ModalSecretariaComponent_div_157_Template, 6, 0, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](158, ModalSecretariaComponent_div_158_Template, 6, 3, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](159, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](160, ModalSecretariaComponent_button_160_Template, 2, 0, "button", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](161, ModalSecretariaComponent_button_161_Template, 2, 0, "button", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](162, ModalSecretariaComponent_button_162_Template, 2, 0, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](163, ModalSecretariaComponent_button_163_Template, 2, 0, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](164, ModalSecretariaComponent_button_164_Template, 2, 0, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](165, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalSecretariaComponent_Template_button_click_165_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](166, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](96);
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](98);
        let tmp_6_0;
        let tmp_7_0;
        let tmp_11_0;
        let tmp_12_0;
        let tmp_15_0;
        let tmp_19_0;
        let tmp_20_0;
        let tmp_32_0;
        let tmp_36_0;
        let tmp_37_0;
        let tmp_40_0;
        let tmp_48_0;
        let tmp_52_0;
        let tmp_56_0;
        let tmp_60_0;
        let tmp_61_0;
        let tmp_66_0;
        let tmp_67_0;
        let tmp_68_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.leyenda, " Solicitud de Veh\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.alerts && ctx.leyenda != "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formularioSoliVe);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("fechaSolicitud"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.formularioSoliVe.get("fechaSolicitud")) == null ? null : tmp_6_0.errors == null ? null : tmp_6_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.formularioSoliVe.get("fechaSolicitud")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("fechaSalida"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.soliVeOd != null && ctx.leyenda === "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.formularioSoliVe.get("fechaSalida")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.formularioSoliVe.get("fechaSalida")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("unidadSolicitante"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx.formularioSoliVe.get("unidadSolicitante")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("lugarMision"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.soliVeOd != null && ctx.leyenda === "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx.formularioSoliVe.get("lugarMision")) == null ? null : tmp_19_0.errors == null ? null : tmp_19_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_20_0 = ctx.formularioSoliVe.get("lugarMision")) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx.leyenda);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Nueva" && ctx.soliVeOd == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Edicion" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Detalle" && ctx.soliVeOd.motorista != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("observaciones"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx.leyenda === "Detalle" && ctx.soliVeOd.observaciones === "" ? "" : "Ingrese observaciones")("readonly", ctx.soliVeOd != null && (ctx.leyenda == "Detalle" && ctx.usuarioActivo.role == "SECR_DECANATO" || ctx.leyenda == "Detalle" && ctx.usuarioActivo.role == "ADMIN" && ctx.soliVeOd.estado != 3));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_32_0 = ctx.formularioSoliVe.get("observaciones")) == null ? null : tmp_32_0.errors == null ? null : tmp_32_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("fechaEntrada"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_36_0 = ctx.formularioSoliVe.get("fechaEntrada")) == null ? null : tmp_36_0.errors == null ? null : tmp_36_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_37_0 = ctx.formularioSoliVe.get("fechaEntrada")) == null ? null : tmp_37_0.errors == null ? null : tmp_37_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Edicion" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_40_0 = ctx.formularioSoliVe.get("tipoVehiculo")) == null ? null : tmp_40_0.errors == null ? null : tmp_40_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.leyenda == "Edicion" ? _r30 : _r32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Nueva" && ctx.soliVeOd == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("horaEntrada"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_48_0 = ctx.formularioSoliVe.get("horaEntrada")) == null ? null : tmp_48_0.errors == null ? null : tmp_48_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("horaSalida"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_52_0 = ctx.formularioSoliVe.get("horaSalida")) == null ? null : tmp_52_0.errors == null ? null : tmp_52_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda == "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("tieneVale"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("tieneVale"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_56_0 = ctx.formularioSoliVe.get("tieneVale")) == null ? null : tmp_56_0.errors == null ? null : tmp_56_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda === "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("objetivoMision"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_60_0 = ctx.formularioSoliVe.get("objetivoMision")) == null ? null : tmp_60_0.errors == null ? null : tmp_60_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_61_0 = ctx.formularioSoliVe.get("objetivoMision")) == null ? null : tmp_61_0.errors == null ? null : tmp_61_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd != null && ctx.leyenda == "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("cantidadPersonas"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.formularioSoliVe.get("cantidadPersonas").value)("readonly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_66_0 = ctx.formularioSoliVe.get("cantidadPersonas")) == null ? null : tmp_66_0.errors == null ? null : tmp_66_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_67_0 = ctx.formularioSoliVe.get("cantidadPersonas")) == null ? null : tmp_67_0.errors == null ? null : tmp_67_0.errors["min"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_68_0 = ctx.formularioSoliVe.get("cantidadPersonas")) == null ? null : tmp_68_0.errors == null ? null : tmp_68_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.leyenda == "Edicion" || ctx.leyenda == "Detalle") && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cantidadPersonas >= 2 || ctx.leyenda == "Detalle" || ctx.leyenda == "Edicion" && ctx.soliVeOd != null && ctx.soliVeOd.cantidadPersonas >= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Edicion");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.usuarioActivo.role == "DECANO" || ctx.usuarioActivo.role == "ADMIN" && ctx.soliVeOd.estado == 3) && ctx.leyenda == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.usuarioActivo.role == "DECANO" || ctx.usuarioActivo.role == "ADMIN" && ctx.soliVeOd.estado == 3) && ctx.leyenda == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.usuarioActivo.role == "DECANO" || ctx.usuarioActivo.role == "ADMIN" && ctx.soliVeOd.estado == 3) && ctx.leyenda == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.usuarioActivo.role == "SECR_DECANATO" || ctx.usuarioActivo.role == "ADMIN") && ctx.leyenda == "Edicion");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchDefault, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective], styles: ["@charset \"UTF-8\";\n\n.select-readonly[_ngcontent-%COMP%] {\n  background-color: #eff2f7;\n  \n  pointer-events: none;\n  \n}\n.excel-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.excel-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .excel-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 4px;\n  text-align: left;\n}\n.excel-cell[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n}\nng-select.is-invalid[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px #f46a6a;\n  border-radius: 0.25rem;\n}\nng-select.is-valid[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px #34c38f;\n  border-radius: 0.25rem;\n}\nbutton.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLXNlY3JldGFyaWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLHdFQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLDBFQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQ0FBQTtBQUVGO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUFFRjtBQUNBOztFQUVFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFRjtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQUVGO0FBQ0E7RUFDRSw2QkFBQTtFQUNBLHNCQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUYiLCJmaWxlIjoibW9kYWwtc2VjcmV0YXJpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIEFncmVnYSB1bmEgY2xhc2UgcGFyYSBhcGxpY2FyIGVsIGVzdGlsbyBkZSBcInNvbG8gbGVjdHVyYVwiIGFsIHNlbGVjdCAqL1xuLnNlbGVjdC1yZWFkb25seSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYyZjc7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyBwYXJhIGluZGljYXIgcXVlIGVzdMOhIGVuIG1vZG8gXCJzb2xvIGxlY3R1cmFcIiAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogRXZpdGEgcXVlIHNlIGNhcHR1cmVuIGV2ZW50b3MgZW4gZWwgc2VsZWN0ICovXG59XG5cbi5leGNlbC10YWJsZSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhjZWwtdGFibGUgdGgsXG4uZXhjZWwtdGFibGUgdGQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5leGNlbC1jZWxsIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xufVxuXG5uZy1zZWxlY3QuaXMtaW52YWxpZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjZjQ2YTZhO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5uZy1zZWxlY3QuaXMtdmFsaWQge1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggIzM0YzM4ZjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cblxuYnV0dG9uLmJ0bi1jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */"] });


/***/ }),

/***/ 27261:
/*!**********************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/services/email.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailService": () => (/* binding */ EmailService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var _account_auth_models_usuario_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../account/auth/models/usuario.models */ 18545);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);







class EmailService {
    constructor() {
        this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
    }
    get codUsuario() {
        return localStorage.getItem("codUsuario" || 0);
    }
    getUsuarioSV() {
        return this.http
            .get(`${this.url}/usuario/${this.codUsuario}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)((usuario) => {
            const { codigoUsuario, nombre, nuevo, role, token, empleado } = usuario;
            return new _account_auth_models_usuario_models__WEBPACK_IMPORTED_MODULE_0__.Usuario(codigoUsuario, nombre, "", nuevo, role, token, empleado);
        }));
    }
    obtenerUsuarioActivo() {
        // Suscríbete al Observable para obtener el usuario
        this.getUsuarioSV().subscribe((usuario) => {
            this.usuario = usuario;
        });
    }
    /*correo*/
    notificarEmail(email) {
        this.enviarNotificacionCorreo(email).subscribe((resp) => {
        }, (err) => {
            console.log("Error al enviar el correo de notificación" + err);
        });
    }
    enviarNotificacionCorreo(body) {
        return this.http.post(`${this.url}/correo/enviarmail`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((resp) => {
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.throwError)(err.error.message);
        }));
    }
    getCorreoJefeDepto(depto) {
        return this.http.get(`${this.url}/solicitudvehiculo/obtenerjefe/${depto}`);
    }
    getSolicitante(id) {
        return this.http.get(`${this.url}/solicitudvehiculo/obtenersolicitante/${id}`);
    }
    getEmailNameRol(rol) {
        return this.http.get(`${this.url}/solicitudvehiculo/obtenercrol/${rol}`);
    }
}
EmailService.ɵfac = function EmailService_Factory(t) { return new (t || EmailService)(); };
EmailService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: EmailService, factory: EmailService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_solicitud-vehiculo_components_modal-secretaria_modal-secretaria_compo-7f6fd9.js.map