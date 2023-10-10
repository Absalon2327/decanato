"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_modules_empleado_empleado_module_ts"],{

/***/ 48216:
/*!**********************************************************************!*\
  !*** ./src/app/modules/empleado/components/modal/modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/constants */ 24017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_empleado_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/empleado.service */ 54862);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ 97846);












function ModalComponent_span_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_span_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return ctx_r5.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.titulo, " ");
} }
function ModalComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_span_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return ctx_r7.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_span_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return ctx_r9.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_4_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r39.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_4_div_3_i_1_Template, 1, 0, "i", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r12.siMuestraAlertas());
} }
function ModalComponent_ng_template_4_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Importante!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_4_div_6_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45); const alert_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r43.CambiarAlert(alert_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r41.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](alert_r41.message);
} }
function ModalComponent_ng_template_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_4_div_6_div_1_Template, 6, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", alert_r41.show);
} }
function ModalComponent_ng_template_4_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Foto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "input", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_ng_template_4_div_11_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r47.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Foto de Perfil :");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_img_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 53);
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", ctx_r16.empleadOd.nombrefoto, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ModalComponent_ng_template_4_img_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 54);
} }
function ModalComponent_ng_template_4_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 53);
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r18.imgTemp, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ModalComponent_ng_template_4_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r19.empleadOd != null ? ctx_r19.empleadOd.codigoEmpleado : "");
} }
function ModalComponent_ng_template_4_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r20.empleadOd != null ? ctx_r20.empleadOd.estado : 8);
} }
function ModalComponent_ng_template_4_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese un DUI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Debe cumplir con el formato correcto");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese el nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No debe contener numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese el apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No debe contener numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_46_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese un tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_46_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Debe comenzar con 2, 6 o 7 y tener 8 d\u00EDgitos en total. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tel\u00E9fono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalComponent_ng_template_4_div_46_span_7_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_ng_template_4_div_46_span_8_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r27.titulo != "Detalle" ? ctx_r27.esCampoValido("telefono") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r27.empleadOd != null && ctx_r27.titulo == "Detalle")("ngModel", ctx_r27.empleadOd != null ? ctx_r27.empleadOd.telefono : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r27.formBuilder.get("telefono")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.formBuilder.get("telefono").hasError("pattern"));
} }
function ModalComponent_ng_template_4_div_48_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese un tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_48_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Debe comenzar con 2, 6 o 7 y tener 8 d\u00EDgitos en total. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Tel\u00E9fono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalComponent_ng_template_4_div_48_span_7_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_ng_template_4_div_48_span_8_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r28.titulo != "Detalle" ? ctx_r28.esCampoValido("telefono") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r28.empleadOd != null && ctx_r28.titulo == "Detalle")("ngModel", ctx_r28.empleadOd != null ? ctx_r28.empleadOd.telefono : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r28.formBuilder.get("telefono")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r28.formBuilder.get("telefono").hasError("pattern"));
} }
function ModalComponent_ng_template_4_span_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese un correo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Email no v\u00E1lido, debe ser '@ues.edu.sv'");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", x_r53.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", x_r53.nombreCargo, " ");
} }
function ModalComponent_ng_template_4_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Seleccione un cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_69_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese un n\u00FAmero de licencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Licencia: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalComponent_ng_template_4_div_69_span_7_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r33.titulo != "Detalle" ? ctx_r33.esCampoValido("licencia") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r33.empleadOd != null && ctx_r33.titulo == "Detalle")("ngModel", ctx_r33.empleadOd != null ? ctx_r33.empleadOd.licencia : ctx_r33.esMotorista ? ctx_r33.formBuilder.get("dui").value : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r33.formBuilder.get("licencia")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
} }
function ModalComponent_ng_template_4_div_70_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Seleccione un tipo de licencia");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_70_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Seleccione una fecha de expiraci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "select-readonly": a0 }; };
function ModalComponent_ng_template_4_div_70_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Tipo de Licencia: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Seleccione Tipo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Liviana");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Pesada");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Motocicleta");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ModalComponent_ng_template_4_div_70_span_16_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Fecha de expiraci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_ng_template_4_div_70_Template_input_change_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r57.validarfecha(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, ModalComponent_ng_template_4_div_70_span_24_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r34.titulo != "Detalle" ? ctx_r34.esCampoValido("tipolicencia") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c0, ctx_r34.empleadOd != null && ctx_r34.titulo == "Detalle"))("ngModel", ctx_r34.empleadOd != null ? ctx_r34.empleadOd.tipolicencia : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r34.formBuilder.get("tipo_licencia")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r34.titulo != "Detalle" ? ctx_r34.esCampoValido("fechalicencia") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r34.empleadOd != null && ctx_r34.titulo == "Detalle")("ngModel", ctx_r34.empleadOd != null ? ctx_r34.empleadOd.fechalicencia : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r34.formBuilder.get("fechalicencia")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
} }
function ModalComponent_ng_template_4_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", x_r59.codigoDepto);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", x_r59.nombre, " ");
} }
function ModalComponent_ng_template_4_span_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Seleccione un departamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_button_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r37.titulo !== "Editar" ? "Guardar" : "Modificar", " ");
} }
function ModalComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_ng_template_4_div_3_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_4_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const modal_r11 = restoredCtx.$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalComponent_ng_template_4_div_6_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ModalComponent_ng_template_4_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r62.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ModalComponent_ng_template_4_div_11_Template, 5, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ModalComponent_ng_template_4_span_12_Template, 3, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ModalComponent_ng_template_4_img_14_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ModalComponent_ng_template_4_img_15_Template, 1, 0, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ModalComponent_ng_template_4_img_16_Template, 1, 1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ModalComponent_ng_template_4_div_17_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ModalComponent_ng_template_4_div_18_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "DUI: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ModalComponent_ng_template_4_span_26_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ModalComponent_ng_template_4_span_27_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ModalComponent_ng_template_4_span_35_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ModalComponent_ng_template_4_span_36_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Apellido: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ModalComponent_ng_template_4_span_44_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ModalComponent_ng_template_4_span_45_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, ModalComponent_ng_template_4_div_46_Template, 9, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, ModalComponent_ng_template_4_div_48_Template, 9, 6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, "Correo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](56, ModalComponent_ng_template_4_span_56_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, ModalComponent_ng_template_4_span_57_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Cargo: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_ng_template_4_Template_select_change_63_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r63.SelectCargo(ctx_r63.formBuilder.get("telefono").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Seleccione Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](66, ModalComponent_ng_template_4_option_66_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, ModalComponent_ng_template_4_span_68_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, ModalComponent_ng_template_4_div_69_Template, 8, 5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, ModalComponent_ng_template_4_div_70_Template, 25, 12, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Departamento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78, "Seleccione Departamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, ModalComponent_ng_template_4_option_79_Template, 2, 2, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](81, ModalComponent_ng_template_4_span_81_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](83, ModalComponent_ng_template_4_button_83_Template, 2, 1, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_4_Template_button_click_84_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r61); const modal_r11 = restoredCtx.$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_14_0;
    let tmp_15_0;
    let tmp_19_0;
    let tmp_20_0;
    let tmp_24_0;
    let tmp_25_0;
    let tmp_31_0;
    let tmp_32_0;
    let tmp_37_0;
    let tmp_44_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r4.leyenda, " Empleado");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.formBuilder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.titulo !== "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.titulo === "Detalle" && !ctx_r4.imgTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.leyenda === ctx_r4.titulo && !ctx_r4.imgTemp && ctx_r4.empleadOd.urlfoto != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.leyenda === ctx_r4.titulo && !ctx_r4.imgTemp && ctx_r4.empleadOd.urlfoto == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.imgTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.empleadOd == null ? null : ctx_r4.empleadOd.codigoEmpleado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.empleadOd == null ? null : ctx_r4.empleadOd.estado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.titulo != "Detalle" ? ctx_r4.esCampoValido("dui") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.empleadOd != null && ctx_r4.titulo == "Detalle")("ngModel", ctx_r4.empleadOd != null ? ctx_r4.empleadOd.dui : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx_r4.formBuilder.get("dui")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.formBuilder.get("dui").valid && !((tmp_15_0 = ctx_r4.formBuilder.get("dui")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["required"]));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.titulo != "Detalle" ? ctx_r4.esCampoValido("nombre") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.empleadOd != null && ctx_r4.titulo == "Detalle")("ngModel", ctx_r4.empleadOd != null ? ctx_r4.empleadOd.nombre : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx_r4.formBuilder.get("nombre")) == null ? null : tmp_19_0.errors == null ? null : tmp_19_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_20_0 = ctx_r4.formBuilder.get("nombre")) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.titulo != "Detalle" ? ctx_r4.esCampoValido("apellido") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.empleadOd != null && ctx_r4.titulo == "Detalle")("ngModel", ctx_r4.empleadOd != null ? ctx_r4.empleadOd.apellido : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_24_0 = ctx_r4.formBuilder.get("apellido")) == null ? null : tmp_24_0.errors == null ? null : tmp_24_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_25_0 = ctx_r4.formBuilder.get("apellido")) == null ? null : tmp_25_0.errors == null ? null : tmp_25_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.esMotorista || ctx_r4.motoristaOd);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r4.esMotorista && !ctx_r4.motoristaOd);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.titulo != "Detalle" ? ctx_r4.esCampoValido("correo") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r4.empleadOd != null && ctx_r4.titulo == "Detalle")("ngModel", ctx_r4.empleadOd != null ? ctx_r4.empleadOd.correo : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_31_0 = ctx_r4.formBuilder.get("correo")) == null ? null : tmp_31_0.errors == null ? null : tmp_31_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_32_0 = ctx_r4.formBuilder.get("correo")) == null ? null : tmp_32_0.errors == null ? null : tmp_32_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.titulo != "Detalle" ? ctx_r4.esCampoValido("cargo") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](53, _c0, ctx_r4.empleadOd != null && ctx_r4.titulo == "Detalle"))("ngModel", ctx_r4.empleadOd != null ? ctx_r4.empleadOd.cargo.id : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.Cargos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_37_0 = ctx_r4.formBuilder.get("cargo")) == null ? null : tmp_37_0.errors == null ? null : tmp_37_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.esMotorista || ctx_r4.motoristaOd);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.esMotorista || ctx_r4.motoristaOd);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.titulo != "Detalle" ? ctx_r4.esCampoValido("departamento") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](55, _c0, ctx_r4.empleadOd != null && ctx_r4.titulo == "Detalle"))("ngModel", ctx_r4.empleadOd != null ? ctx_r4.empleadOd.departamento.codigoDepto : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.Departamentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_44_0 = ctx_r4.formBuilder.get("departamento")) == null ? null : tmp_44_0.errors == null ? null : tmp_44_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.titulo !== "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.titulo !== "Detalle" ? "Cancelar" : "Cerrar", " ");
} }
class ModalComponent {
    constructor(empleadoService, modalService, fb, router, mensajesService, usuarioService) {
        this.empleadoService = empleadoService;
        this.modalService = modalService;
        this.fb = fb;
        this.router = router;
        this.mensajesService = mensajesService;
        this.usuarioService = usuarioService;
        this.imgTemp = null;
        this.isEmail = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_1__.EMAIL_VALIDATE_UES;
        this.isText = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_1__.NAME_VALIDATE;
        this.cargos = [];
        this.departamentos = [];
        this.esMotorista = false;
        this.imagen = 'no hay';
        this.hovered = false; // Inicializamos hovered como falso
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: " Por favor, asegúrese de completar todos los campos obligatorios (*) y de cumplir con los formatos correspondientes. Además, le recomendamos prestar atención a los mensajes de alerta. En cuanto a la foto del empleado no es obligatoria; Indicar que el empleado sera jefe del área o departamento correspondiente solamente cuando sea acorde a sus responsabilidades laborales. ",
                show: false,
            },
        ];
        this.formBuilder = this.Iniciarformulario();
    }
    ngOnInit() {
        if (this.leyenda == "Editar") {
            this.formBuilder = this.Iniciarformulario();
        }
        this.empleadoService.getCargos();
        this.empleadoService.getDepartamentos();
    }
    Iniciarformulario() {
        return this.fb.group({
            codigoEmpleado: [''],
            dui: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            nombre: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isText)]],
            apellido: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isText)]],
            telefono: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[267]\d{7}$/)]],
            licencia: ['', this.motoristaOd ? [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] : []],
            tipolicencia: ['', this.motoristaOd ? [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] : []],
            fechalicencia: ['', this.motoristaOd ? [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required] : []],
            /*   jefe: [false, [Validators.required]], */
            estado: [8],
            nombrefoto: [''],
            urlfoto: [''],
            correo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isEmail)]],
            cargo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            departamento: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ////////////// >>>>> metodos primarios <<<<<   /////////////
    //// metodo para obtener los cargos /////
    get Cargos() {
        const cargos = [];
        if (this.leyenda == "Editar") {
            cargos.push(this.empleadOd.cargo);
        }
        this.empleadoService.listCargos.forEach((x) => {
            if (this.leyenda == "Editar") {
                if (x.estado == 8 && x.id != this.empleadOd.cargo.id) {
                    cargos.push(x);
                }
            }
            else {
                if (x.estado == 8) {
                    cargos.push(x);
                }
            }
        });
        return cargos;
    }
    //// metodo para obtener los departamentos /////
    get Departamentos() {
        const departamentos = [];
        if (this.leyenda == "Editar") {
            departamentos.push(this.empleadOd.departamento);
        }
        this.empleadoService.listDepartamentos.forEach((x) => {
            if (this.leyenda == "Editar") {
                if (x.estado == 8 && x.codigoDepto != this.empleadOd.departamento.codigoDepto) {
                    departamentos.push(x);
                }
            }
            else {
                if (x.estado == 8) {
                    departamentos.push(x);
                }
            }
        });
        return departamentos;
    }
    ////// metodo para tomar la desicion si es registro o actualizacion /////
    guardar() {
        if (this.formBuilder.valid) {
            this.cargando();
            if (this.empleadOd != null) {
                this.editando();
            }
            else {
                this.registrando();
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: 'center',
                title: 'Faltan datos en el formuario',
                html: 'Complete todos los campos requeridos (<span style="color: red;">*</span>)',
                icon: 'warning',
            });
        }
    }
    /////////// metodo para enviar EMAIL///////////
    Email(correo, nombre) {
        const email = {
            asunto: '!Bienvenid@¡',
            titulo: 'Registro de empleado',
            email: correo,
            receptor: "Estimad@ : " + nombre,
            mensaje: 'Se han registrado sus datos en el sistema de Misiones de la Universidad de El Salvador - Facultad Multidisciplinaria Paracentral. Para iniciar sesión por primera vez, utilice como nombre de usuario el habitual que son los parámetros de su correo electrónico antes de "@", y su clave por defecto será su número de DUI, la cual deberá cambiar una vez haya iniciado sesión.',
            centro: 'Gracias por su atención a este importante mensaje.',
            codigo: '',
            abajo: 'Pagina principal : ' + 'http://localhost:4200/',
        };
        this.usuarioService.SendEmail(email).subscribe((resp) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                //timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'success',
                text: 'Almacenamiento exitoso'
            }).then(() => {
                this.formBuilder.reset();
                this.recargar();
                this.modalService.dismissAll();
            });
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                //timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'success',
                text: 'Almacenamiento exitoso'
            }).then(() => {
                this.formBuilder.reset();
                this.recargar();
                this.modalService.dismissAll();
            });
        });
    }
    registrando() {
        const empleado = this.formBuilder.value;
        if (this.imagen === 'no hay') {
            this.empleadoService.postEmpleado(empleado).subscribe((resp) => {
                if (resp) {
                    this.Email(this.formBuilder.get('correo').value, this.formBuilder.get('nombre').value + ' ' + this.formBuilder.get('apellido').value);
                }
            }, (err) => {
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
            });
        }
        else {
            this.empleadoService.postEmpleadoImagen(empleado, this.file).subscribe((resp) => {
                if (resp) {
                    this.Email(this.formBuilder.get('correo').value, this.formBuilder.get('nombre').value + ' ' + this.formBuilder.get('apellido').value);
                }
            }, (err) => {
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err);
            });
        }
    }
    ///////// metodo para editar empleado con imagen o sin imagen ///////
    editando() {
        const empleado = this.formBuilder.value;
        empleado.nombrefoto = this.empleadOd.nombrefoto;
        empleado.urlfoto = this.empleadOd.urlfoto;
        if (this.imagen === 'no hay') {
            this.empleadoService.putEmpleado(empleado).subscribe((resp) => {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        //timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                            toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                        }
                    });
                    Toast.fire({
                        icon: 'success',
                        text: 'Modificación exitosa'
                    }).then(() => {
                        this.formBuilder.reset();
                        this.recargar();
                        this.modalService.dismissAll();
                    });
                }
            }, (err) => {
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
            });
        }
        else {
            this.empleadoService.putEmpleadoImagen(empleado, this.file).subscribe((resp) => {
                if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        //timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                            toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                        }
                    });
                    Toast.fire({
                        icon: 'success',
                        text: 'Modificación exitosa'
                    }).then(() => {
                        this.formBuilder.reset();
                        this.recargar();
                        this.modalService.dismissAll();
                    });
                    this.formBuilder.reset();
                    this.recargar();
                    this.modalService.dismissAll();
                }
            }, (err) => {
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
            });
        }
    }
    ////////////// >>>>> metodos secundarios de validacion y acciones  <<<<<   /////////////
    //// Metodo para validacion de fecha /////
    validarfecha() {
        const currentDate = new Date();
        const fechaString = this.formBuilder.get('fechalicencia').value; // Debe ser un string en formato 'yyyy-MM-dd'
        const fecha = new Date(fechaString);
        if (!isNaN(fecha.getTime())) {
            if (fecha <= currentDate) {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 3000,
                    didOpen: (toast) => {
                        toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                        toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                    }
                });
                Toast.fire({
                    icon: 'warning',
                    text: 'Fecha invalida'
                });
                this.formBuilder.get('fechalicencia').setValue(null);
            }
        }
    }
    /////// metodo para modificacion de validaciones y estados cambiando el formulario a comveniencia si el empleado es motorista o no //////
    SelectCargo(newValue) {
        // Lógica para determinar si el cargo seleccionado es "Motorista"
        //obtenemos el objeto que tenga como nombreCargo Motorista
        const motoristaOb = this.Cargos.find(cargo => cargo.nombreCargo === "MOTORISTA");
        //Comparamos que el ID sea igual al seleccionado y cambiamos la variable para mostrar los demas campos
        this.esMotorista = (this.formBuilder.get('cargo').value === motoristaOb.id);
        this.motoristaOd = this.esMotorista;
        // Retrasamos la actualización del teléfono en 3 segundos
        setTimeout(() => {
            this.formBuilder.get('telefono').setValue(newValue); // Función para cambiar teléfono
        }, 50); // 1000 milisegundos = 1 segundos
        // Asignar o quitar validadores según el valor de esmotorista
        const licenciaControl = this.formBuilder.get('licencia');
        const tipolicenciaControl = this.formBuilder.get('tipolicencia');
        const fechalicenciaControl = this.formBuilder.get('fechalicencia');
        if (this.esMotorista) {
            licenciaControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            tipolicenciaControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
            fechalicenciaControl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
        }
        else {
            licenciaControl.clearValidators();
            tipolicenciaControl.clearValidators();
            fechalicenciaControl.clearValidators();
            licenciaControl.setValue('');
            tipolicenciaControl.setValue('');
            fechalicenciaControl.setValue('');
            fechalicenciaControl.reset();
            if (this.empleadOd) {
                this.empleadOd.licencia = "";
                this.empleadOd.tipolicencia = "";
                this.empleadOd.fechalicencia = new Date();
            }
        }
        licenciaControl.updateValueAndValidity();
        tipolicenciaControl.updateValueAndValidity();
        fechalicenciaControl.updateValueAndValidity();
    }
    //// metodo par abrir la modal ////
    openModal(content) {
        //hacer que la modal no se cierre al precionar fuera de ella -> backdrop: 'static', keyboard: false
        this.modalService.open(content, { size: 'xl', centered: true, backdrop: 'static', keyboard: false });
    }
    ///// Metodo para recargar la pagina /////
    recargar() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([currentUrl]);
    }
    //// metodo para validar el campo si es valido o no ////
    esCampoValido(campo) {
        const validarCampo = this.formBuilder.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    ///// metodo que extrae la informacion de la imagen /////
    onFileSelected(event) {
        const target = event.target;
        this.file = target.files[0];
        this.imagen = 'seleccioanda';
        this.preVisualizarImagen(event);
    }
    ///// metodo para previsualizar la imagen /////
    preVisualizarImagen(event) {
        this.file = event.target.files[0];
        //cambia a imagen previa
        if (!this.file) {
            this.imgTemp = null;
        }
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = () => {
            this.imgTemp = reader.result;
        };
    }
    //////   metodos para la ayuda ///////
    CambiarAlert(alert) {
        alert.show = !alert.show;
    }
    restaurarAlerts() {
        this.alerts.forEach((alert) => {
            alert.show = true;
        });
    }
    siMuestraAlertas() {
        return this.alerts.every((alert) => alert.show);
    }
    cargando() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la petición...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
            }
        });
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_empleado_service__WEBPACK_IMPORTED_MODULE_2__.EmpleadoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__.MensajesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { empleadOd: "empleadOd", motoristaOd: "motoristaOd", leyenda: "leyenda", titulo: "titulo", queryString: "queryString" }, decls: 6, vars: 3, consts: [[4, "ngIf"], ["id", "modalEmpleado", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "modal-fullscreen-xl-down", "fade"], ["role", "document"], ["content", ""], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], ["type", "button", "ngbTooltip", "Detalle de empleado", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-eye-outline"], ["type", "button", "ngbTooltip", "Modificar empleado", 1, "btn", "btn-info", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-book-edit-outline"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [4, "ngFor", "ngForOf"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-6"], [1, "form-group", "row"], ["class", "col-md-7", 4, "ngIf"], ["class", "align-text-top col-md-4", "style", "display: flex; left: 10%;", 4, "ngIf"], [1, "col-md-4"], ["class", "rounded-circle custom-border", "alt", "", 3, "src", 4, "ngIf"], ["class", "rounded-circle custom-border", "src", "../../../../../assets/images/Default-Avatar.png", "alt", "", 4, "ngIf"], [1, "form-group", "row", "m-4"], [1, "control-label"], [1, "text-danger"], ["type", "text", "formControlName", "dui", "id", "dui", "name", "dui", "placeholder", "Ingrese DUI - ej: 00000000-0", "mask", "00000000-0", 1, "form-control", 3, "readonly", "ngModel"], [1, "invalid-feedback"], ["type", "text", "formControlName", "nombre", "id", "nombre", "name", "nombre", "placeholder", "Ingrese nombre", 1, "form-control", 3, "readonly", "ngModel"], ["type", "text", "formControlName", "apellido", "id", "apellido", "name", "apellido", "placeholder", "Ingrese apellido", 1, "form-control", 3, "readonly", "ngModel"], ["class", "form-group row m-4", 4, "ngIf"], ["type", "text", "formControlName", "correo", "id", "correo", "name", "correo", "placeholder", "Ingrese correo", 1, "form-control", 3, "readonly", "ngModel"], ["id", "selectCargo", "name", "selectCargo", "formControlName", "cargo", 1, "form-control", "form-select", 3, "ngClass", "ngModel", "change"], ["value", ""], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "form-group row m-3", 4, "ngIf"], ["id", "selectDepartamento", "name", "selectDepartamento", "formControlName", "departamento", 1, "form-control", "form-select", 3, "ngClass", "ngModel"], [1, "d-flex", "justify-content-end", "mt-4"], ["type", "submit", "class", "btn btn-primary w-sm me-2", "id", "btn-save", "name", "btn-save", 4, "ngIf"], ["type", "button", "id", "btn-cancel", "name", "btn-cancel", "aria-hidden", "true", 1, "btn", "btn-dark", "w-sm", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], [1, "text-justify"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "col-md-7"], ["for", "file", 1, "control-label"], ["id", "file", "type", "file", "multiple", "", 1, "form-control", 3, "change"], [1, "align-text-top", "col-md-4", 2, "display", "flex", "left", "10%"], ["alt", "", 1, "rounded-circle", "custom-border", 3, "src"], ["src", "../../../../../assets/images/Default-Avatar.png", "alt", "", 1, "rounded-circle", "custom-border"], ["id", "codigoEmpleado", "name", "codigoEmpleado", "type", "hidden", "readonly", "true", "formControlName", "codigoEmpleado", 1, "form-control", 3, "ngModel"], ["id", "estado", "name", "estado", "type", "hidden", "readonly", "true", "formControlName", "estado", 1, "form-control", 3, "ngModel"], ["type", "text", "formControlName", "telefono", "id", "telefono", "name", "telefono", "placeholder", "Ingrese tel\u00E9fono - ej: 0000-0000", "mask", "0000-0000", 1, "form-control", 3, "readonly", "ngModel"], [3, "ngValue"], ["type", "text", "formControlName", "licencia", "id", "licencia", "name", "licencia", "placeholder", "Ingrese licencia", "mask", "00000000-0", 1, "form-control", 3, "readonly", "ngModel"], [1, "form-group", "row", "m-3"], ["id", "selecttipo_licencia", "name", "selecttipo_licencia", "formControlName", "tipolicencia", 1, "form-control", "form-select", 3, "ngClass", "ngModel"], ["value", "Liviana"], ["value", "Pesada"], ["value", "Motocicleta"], ["type", "date", "formControlName", "fechalicencia", "id", "fechalicencia", "name", "fechalicencia", "placeholder", "Ingrese fechalicencia", 1, "form-control", 3, "readonly", "ngModel", "change"], ["type", "submit", "id", "btn-save", "name", "btn-save", 1, "btn", "btn-primary", "w-sm", "me-2"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalComponent_span_0_Template, 4, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_span_1_Template, 3, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_span_2_Template, 3, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_ng_template_4_Template, 86, 57, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda !== ctx.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda === ctx.titulo && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda === ctx.titulo && ctx.titulo == "Editar");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, ngx_mask__WEBPACK_IMPORTED_MODULE_10__.MaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]], styles: ["@charset \"UTF-8\";\nimg[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 155px;\n}\n\n.select-readonly[_ngcontent-%COMP%] {\n  background-color: #eff2f7;\n  \n  pointer-events: none;\n  \n}\n.select-readonly-check[_ngcontent-%COMP%] {\n  pointer-events: none;\n  \n}\n\n.no-interaction[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background-color: lightgray;\n}\n\n.align-content-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.custom-border[_ngcontent-%COMP%] {\n  border: 1.5px solid #550000;\n  padding: 5px;\n}\n.color-top-modal[_ngcontent-%COMP%] {\n  background: #550000;\n}\n.color-top-modal[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.btn-close-color[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n  cursor: pointer;\n  color: white;\n}\n.btn-close-color[_ngcontent-%COMP%]::before, .btn-close-color[_ngcontent-%COMP%]::after {\n  content: \"x\";\n  position: absolute;\n  align-content: end;\n  top: 2.5%;\n  right: 1.5%;\n}\n.myconfig1[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.myconfig2[_ngcontent-%COMP%] {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\nbutton.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRUY7QUFDQSx3RUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSwwRUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7QUFFRjtBQUNBO0VBQ0Usb0JBQUE7RUFDQSwrQ0FBQTtBQUVGO0FBRUEsd0RBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUVBLDZCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBLDZCQUFBO0FBQ0E7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7QUFDRjtBQUVBO0VBQ0UsWUFBQTtBQUNGO0FBRUEsa0RBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNGO0FBRUE7O0VBRUUsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQUNGO0FBR0E7RUFDRSx5QkFBQTtFQUNBLDRCQUFBO0FBQUY7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUFBRjtBQUdBO0VBQ0UsZ0JBQUE7QUFBRiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmltZyB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNTVweDtcbn1cblxuLyogQWdyZWdhIHVuYSBjbGFzZSBwYXJhIGFwbGljYXIgZWwgZXN0aWxvIGRlIFwic29sbyBsZWN0dXJhXCIgYWwgc2VsZWN0ICovXG4uc2VsZWN0LXJlYWRvbmx5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjJmNztcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlIGZvbmRvIHBhcmEgaW5kaWNhciBxdWUgZXN0w6EgZW4gbW9kbyBcInNvbG8gbGVjdHVyYVwiICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBFdml0YSBxdWUgc2UgY2FwdHVyZW4gZXZlbnRvcyBlbiBlbCBzZWxlY3QgKi9cbn1cblxuLnNlbGVjdC1yZWFkb25seS1jaGVjayB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBFdml0YSBxdWUgc2UgY2FwdHVyZW4gZXZlbnRvcyBlbiBlbCBzZWxlY3QgKi9cbn1cblxuLyogcGFyYSBubyBpbnRlcmFjdHVhZSBjdWFuZG8gbm8gc2VhIGVkaXRhYmxlIGVsIGNhbXBvICovXG4ubm8taW50ZXJhY3Rpb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xufVxuXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cbi5hbGlnbi1jb250ZW50LWNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi8qIHN0eWxlcy5jc3MgbyBzdHlsZXMuc2NzcyAqL1xuLmN1c3RvbS1ib3JkZXIge1xuICBib3JkZXI6IDEuNXB4IHNvbGlkICM1NTAwMDA7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvbG9yLXRvcC1tb2RhbCB7XG4gIGJhY2tncm91bmQ6ICM1NTAwMDA7XG59XG5cbi5jb2xvci10b3AtbW9kYWwgaDUge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBlbCBib3TDs24gZGUgY2llcnJlIHBlcnNvbmFsaXphZG8gKi9cbi5idG4tY2xvc2UtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tY2xvc2UtY29sb3I6OmJlZm9yZSxcbi5idG4tY2xvc2UtY29sb3I6OmFmdGVyIHtcbiAgY29udGVudDogXCJ4XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tY29udGVudDogZW5kO1xuICB0b3A6IDIuNSU7XG4gIHJpZ2h0OiAxLjUlO1xufVxuXG4ubXljb25maWcxIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLm15Y29uZmlnMiB7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcbn1cblxuYnV0dG9uLmJ0bi1jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59Il19 */"] });


/***/ }),

/***/ 39306:
/*!*************************************************************!*\
  !*** ./src/app/modules/empleado/empleado-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoRoutingModule": () => (/* binding */ EmpleadoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/listar/listar.component */ 9759);
/* harmony import */ var src_app_core_guards_has_role_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/guards/has-role.guard */ 79805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);





const routes = [
    { path: "listar",
        component: _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__.ListarComponent,
        canActivate: [src_app_core_guards_has_role_guard__WEBPACK_IMPORTED_MODULE_1__.HasRoleGuard],
        canLoad: [src_app_core_guards_has_role_guard__WEBPACK_IMPORTED_MODULE_1__.HasRoleGuard],
        data: { allowedRoles: ['SECR_DECANATO', 'ADMIN'] } }
];
class EmpleadoRoutingModule {
}
EmpleadoRoutingModule.ɵfac = function EmpleadoRoutingModule_Factory(t) { return new (t || EmpleadoRoutingModule)(); };
EmpleadoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: EmpleadoRoutingModule });
EmpleadoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmpleadoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 63021:
/*!*****************************************************!*\
  !*** ./src/app/modules/empleado/empleado.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoModule": () => (/* binding */ EmpleadoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _empleado_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleado-routing.module */ 39306);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal/modal.component */ 48216);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 63091);
/* harmony import */ var _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/widget/widget.module */ 57337);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var ng5_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng5-slider */ 38391);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/listar/listar.component */ 9759);
/* harmony import */ var _pages_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/tabla/tabla.component */ 44373);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
















class EmpleadoModule {
}
EmpleadoModule.ɵfac = function EmpleadoModule_Factory(t) { return new (t || EmpleadoModule)(); };
EmpleadoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: EmpleadoModule });
EmpleadoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _empleado_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmpleadoRoutingModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule,
            _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__.WidgetModule,
            ng5_slider__WEBPACK_IMPORTED_MODULE_5__.Ng5SliderModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_14__.NgxMaskModule.forRoot(), //para las mascaras
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](EmpleadoModule, { declarations: [_pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_6__.ListarComponent,
        _pages_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_7__.TablaComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _empleado_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmpleadoRoutingModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModalModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule,
        _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_3__.WidgetModule,
        ng5_slider__WEBPACK_IMPORTED_MODULE_5__.Ng5SliderModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_13__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbPaginationModule, ngx_mask__WEBPACK_IMPORTED_MODULE_14__.NgxMaskModule] }); })();


/***/ }),

/***/ 9759:
/*!*******************************************************************!*\
  !*** ./src/app/modules/empleado/pages/listar/listar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarComponent": () => (/* binding */ ListarComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_empleado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/empleado.service */ 54862);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal/modal.component */ 48216);
/* harmony import */ var _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabla/tabla.component */ 44373);







class ListarComponent {
    constructor(empleadoService) {
        this.empleadoService = empleadoService;
        this.term = '';
    }
    ngOnInit() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la información...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
            }
        });
        this.breadCrumbItems = [{ label: 'Empleado' }, { label: 'Listar', active: true }];
        this.empleadoService.getEmpleados();
    }
    get listaEmpleados() {
        return this.empleadoService.listEmpleados;
    }
}
ListarComponent.ɵfac = function ListarComponent_Factory(t) { return new (t || ListarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_empleado_service__WEBPACK_IMPORTED_MODULE_1__.EmpleadoService)); };
ListarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListarComponent, selectors: [["app-listar"]], decls: 16, vars: 6, consts: [[1, "container-fluid"], ["title", "Empleados", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-8"], [1, "text-sm-end"], [3, "leyenda", "titulo"], [3, "empleados", "queryString"]], template: function ListarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ListarComponent_Template_input_ngModelChange_10_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "app-modal", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-tabla", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("leyenda", "Nuevo")("titulo", "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("empleados", ctx.listaEmpleados)("queryString", ctx.term);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_4__.TablaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 44373:
/*!*****************************************************************!*\
  !*** ./src/app/modules/empleado/pages/tabla/tabla.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaComponent": () => (/* binding */ TablaComponent)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_empleado_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/empleado.service */ 54862);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/modal/modal.component */ 48216);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 24352);










function TablaComponent_tr_19_app_modal_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-modal", 11);
} if (rf & 2) {
    const empleado_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("leyenda", "Detalle")("titulo", "Detalle")("empleadOd", empleado_r1)("motoristaOd", false);
} }
function TablaComponent_tr_19_app_modal_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-modal", 11);
} if (rf & 2) {
    const empleado_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("leyenda", "Detalle")("titulo", "Detalle")("empleadOd", empleado_r1)("motoristaOd", true);
} }
function TablaComponent_tr_19_app_modal_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-modal", 11);
} if (rf & 2) {
    const empleado_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("leyenda", "Editar")("titulo", "Editar")("empleadOd", empleado_r1)("motoristaOd", false);
} }
function TablaComponent_tr_19_app_modal_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-modal", 11);
} if (rf & 2) {
    const empleado_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("leyenda", "Editar")("titulo", "Editar")("empleadOd", empleado_r1)("motoristaOd", true);
} }
function TablaComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, TablaComponent_tr_19_app_modal_16_Template, 1, 4, "app-modal", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, TablaComponent_tr_19_app_modal_17_Template, 1, 4, "app-modal", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, TablaComponent_tr_19_app_modal_18_Template, 1, 4, "app-modal", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, TablaComponent_tr_19_app_modal_19_Template, 1, 4, "app-modal", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TablaComponent_tr_19_Template_button_click_20_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const empleado_r1 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r10.cambiarEstado(empleado_r1, empleado_r1.estado); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const empleado_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.InsertarGuion(empleado_r1.dui));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](empleado_r1.nombre + " " + empleado_r1.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](empleado_r1.cargo.nombreCargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](empleado_r1.departamento.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](empleado_r1.cargo.nombreCargo == "JEFE DEPARTAMENTO" ? "SI" : "NO");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](empleado_r1.estado === 8 ? "badge rounded-pill bg-success" : "badge rounded-pill bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", empleado_r1.estado === 8 ? "Activo" : "Inactivo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", empleado_r1.cargo.nombreCargo != "Motorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", empleado_r1.cargo.nombreCargo == "Motorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", empleado_r1.cargo.nombreCargo != "Motorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", empleado_r1.cargo.nombreCargo == "Motorista");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("ngbTooltip", "Cambiar a ", empleado_r1.estado === 9 ? "Activo" : "Inactivo", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", empleado_r1.estado === 8 ? "mdi mdi-18px mdi-lock-outline" : "mdi mdi-18px mdi-key-outline");
} }
const _c0 = function (a1) { return { itemsPerPage: 7, currentPage: a1 }; };
class TablaComponent {
    constructor(empleadosService, router, fb) {
        this.empleadosService = empleadosService;
        this.router = router;
        this.fb = fb;
        this.formularioEmpleado = this.Iniciarformulario();
    }
    ngOnInit() { }
    Iniciarformulario() {
        return this.fb.group({
            codigoEmpleado: [''],
            dui: [''],
            nombre: [''],
            apellido: [''],
            telefono: [''],
            licencia: [''],
            tipolicencia: [''],
            fechalicencia: [''],
            jefe: [],
            estado: [],
            nombrefoto: [''],
            urlfoto: [''],
            correo: [''],
            cargo: [''],
            departamento: [''],
        });
    }
    cambiarEstado(empleadoED, estado) {
        this.formularioEmpleado.patchValue(empleadoED);
        this.formularioEmpleado.patchValue({
            cargo: empleadoED.cargo.id,
        });
        this.formularioEmpleado.patchValue({
            departamento: empleadoED.departamento.codigoDepto,
        });
        if (estado == 8) {
            this.formularioEmpleado.patchValue({
                estado: 9,
            });
            this.cambio = 'Inactivo';
        }
        else {
            this.formularioEmpleado.patchValue({
                estado: 8,
            });
            this.cambio = 'Activo';
        }
        const empleado = this.formularioEmpleado.value;
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'question',
            title: "¿Cambiar el estado a " + this.cambio + "?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Cambiar",
            denyButtonText: `No cambiar`,
        }).then((result) => {
            if (result.isConfirmed) {
                this.empleadosService.putEmpleado(empleado).subscribe((resp) => {
                    if (resp) {
                        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            //timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                                toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                            }
                        });
                        Toast.fire({
                            icon: 'success',
                            text: 'Modificación exitosa'
                        });
                        this.recargar();
                    }
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Algo paso, hable con el administrador',
                    });
                });
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire("Cambios no aplicados", "", "info");
            }
        });
    }
    recargar() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([currentUrl]);
    }
    // Método para agregar guion al número del DUI
    InsertarGuion(dui) {
        return dui.slice(0, -1) + '-' + dui.slice(-1);
    }
}
TablaComponent.ɵfac = function TablaComponent_Factory(t) { return new (t || TablaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_empleado_service__WEBPACK_IMPORTED_MODULE_1__.EmpleadoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder)); };
TablaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TablaComponent, selectors: [["app-tabla"]], inputs: { empleados: "empleados", queryString: "queryString" }, decls: 24, vars: 11, consts: [[1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle", "text-center"], [4, "ngFor", "ngForOf"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "nextLabel", "previousLabel", "pageChange"], [1, "align-middle", "text-center", "text-center"], [3, "leyenda", "titulo", "empleadOd", "motoristaOd", 4, "ngIf"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "btn-rounded", "mx-1", 3, "ngbTooltip", "click"], [3, "ngClass"], [3, "leyenda", "titulo", "empleadOd", "motoristaOd"]], template: function TablaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "DUI");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Nombre");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Departamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Jefe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, TablaComponent_tr_19_Template, 22, 15, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "pagination-controls", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function TablaComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](20, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](21, 6, ctx.empleados, ctx.queryString), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](9, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nextLabel", "")("previousLabel", "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__.ModalComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_empleado_empleado_module_ts.js.map