"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_modules_vehiculo_vehiculo_module_ts"],{

/***/ 98500:
/*!**********************************************************************!*\
  !*** ./src/app/modules/vehiculo/components/modal/modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/constants */ 24017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _service_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/vehiculo.service */ 55621);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-mask */ 97846);









function ModalComponent_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalComponent_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r32.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModalComponent_div_3_i_1_Template, 1, 0, "i", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.siMuestraAlertas());
} }
function ModalComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalComponent_div_6_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r38); const alert_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r36.cambiarAlert(alert_r34); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r34.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](alert_r34.type === "info" ? "Importante!" : "Precauci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", alert_r34.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", alert_r34.messageTwo, " ");
} }
function ModalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModalComponent_div_6_div_1_Template, 8, 6, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alert_r34.show);
} }
function ModalComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Foto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ModalComponent_div_13_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r40.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Foto Vehiclo:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_img_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 64);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r4.objVehiculo.nombrefoto, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ModalComponent_img_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 64);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", ctx_r5.imgTemp, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
} }
function ModalComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere Placa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Formato no aceptado ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere Fecha Tarjeta ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Fecha vencimiento debe ser mayor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No cumple formato ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere un Modelo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere Marca ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ingreso solo texto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_74_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere Motor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Tamano minimo ", (tmp_0_0 = ctx_r15.formVehiculo.get("n_motor")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["minlength"] == null ? null : tmp_0_0.errors["minlength"].requiredLength, " ");
} }
function ModalComponent_span_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Tamano maximo ", (tmp_0_0 = ctx_r16.formVehiculo.get("n_motor")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["maxlength"] == null ? null : tmp_0_0.errors["maxlength"].requiredLength, " ");
} }
function ModalComponent_span_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere Chasis ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No cumple formato 17 numeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere una Clase ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ingreso solo texto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_108_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere un Color ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_109_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Ingreso solo texto ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere Capacidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_118_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Tamano minimo >= ", (tmp_0_0 = ctx_r24.formVehiculo.get("capacidad")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["min"] == null ? null : tmp_0_0.errors["min"].min, " ");
} }
function ModalComponent_span_126_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere Capacidad ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Tamano minimo >= ", (tmp_0_0 = ctx_r26.formVehiculo.get("capacidadTanque")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["min"] == null ? null : tmp_0_0.errors["min"].min, " ");
} }
function ModalComponent_span_139_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere un Tipo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Requiere un modelo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_span_148_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " A\u00F1o fuera de rango ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_button_150_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Guardar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "select-readonly": a0 }; };
class ModalComponent {
    constructor(activeModal, modalService, fb, vehiService, mensajeService) {
        this.activeModal = activeModal;
        this.modalService = modalService;
        this.fb = fb;
        this.vehiService = vehiService;
        this.mensajeService = mensajeService;
        //mascara
        this.customPatterns = {
            'S': { pattern: new RegExp('[A-Za-z]') },
            'A': { pattern: new RegExp('[A-Za-z0-9]') }
        };
        this.isInteger = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.INTEGER_VALIDATE;
        this.isTexto = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.TEXTO_CARACTER_ESPECIAL;
        this.isPalabra = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.STRING_VALIDATE;
        this.isPlaca = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.TEXTO_PLACA;
        //var para img
        this.imgTemp = null;
        this.imagen = "no hay";
        //para alertas
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: "Complete los campos obligatorios (*)",
                messageTwo: "Ingrese el número de placa sin guiones",
                show: false,
            }
        ];
        this.formVehiculo = this.iniciarFormulario();
    }
    ngOnInit() {
        this.formVehiculo.patchValue(this.objVehiculo);
    }
    iniciarFormulario() {
        return this.fb.group({
            placa: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.isPlaca)]],
            modelo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            marca: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.isPalabra)]],
            clase: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.isPalabra)]],
            color: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.isTexto)]],
            fecha_tarjeta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, this.fechaVencimientoFormat, this.fechaVencimientoValidator]],
            year: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.isInteger), this.yearValidator]],
            capacidad: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1)]],
            capacidadTanque: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1)]],
            n_chasis: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            n_motor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(10)]],
            tipo_gas: ['Diesel', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            file: ['',]
        });
    }
    yearValidator(control) {
        const currentYear = new Date().getFullYear();
        const enteredYear = parseInt(control.value, 10);
        if (isNaN(enteredYear) || enteredYear > currentYear || enteredYear < currentYear - 50) {
            return { invalidYear: true };
        }
        return null;
    }
    fechaVencimientoValidator(control) {
        const fechaVencimiento = new Date(control.value);
        const fechaActual = new Date();
        if (fechaVencimiento <= fechaActual) {
            return { fechaVencimientoInvalida: true };
        }
        return null;
    }
    fechaVencimientoFormat(control) {
        const fechaVencimiento = new Date(control.value);
        if (fechaVencimiento.getFullYear() > 9999) {
            return { fechaVencimientoformat: true };
        }
        return null;
    }
    openModal(content) {
        this.modalService.open(content, { size: "xl", centered: true });
    }
    guardar() {
        if (this.formVehiculo.valid) {
            if (this.objVehiculo != null) {
                this.editando();
            }
            else {
                this.registrando();
            }
        }
        else {
            return Object.values(this.formVehiculo.controls)
                .forEach((control) => control.markAsTouched());
        }
    }
    onFileSelected(event) {
        const target = event.target;
        this.file = target.files[0];
        this.imagen = "seleccioanda";
        this.preVisualizarImagen(event);
    }
    esCampoValido(campo) {
        const validarCampo = this.formVehiculo.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    registrando() {
        const formData = new FormData();
        let envObj = this.formVehiculo.value;
        envObj.estado = 8;
        formData.append('vehiculo', new Blob([JSON.stringify(envObj)], { type: 'application/json' }));
        formData.append('imagen', this.file);
        this.vehiService.guardarVehiculo(formData).subscribe(reps => {
            this.mensajeService.mensajesToast("success", "Registro agregado");
            this.vehiService.getVehiculos();
            //cerrar el modal
            this.modalService.dismissAll();
        }, (err) => {
            this.mensajeService.mensajesSweet("error", "Algo salió mal", err.error.message);
        });
    }
    editando() {
        const formData = new FormData();
        let envObj = this.formVehiculo.value;
        envObj.codigoVehiculo = this.objVehiculo.codigoVehiculo;
        envObj.estado = this.objVehiculo.estado;
        envObj.nombrefoto = this.objVehiculo.nombrefoto;
        envObj.urlfoto = this.objVehiculo.urlfoto;
        formData.append('vehiculo', new Blob([JSON.stringify(envObj)], { type: 'application/json' }));
        formData.append('imagen', this.file);
        this.vehiService.editarVehiculo(formData).subscribe(reps => {
            this.mensajeService.mensajesToast("success", "Registro editado");
            this.vehiService.getVehiculos();
            //cerrar el modal
            this.modalService.dismissAll();
        }, (err) => {
            this.mensajeService.mensajesSweet("error", "Algo salió mal", err.error.message);
        });
    }
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
    siMuestraAlertas() {
        return this.alerts.every((alert) => alert.show);
    }
    restaurarAlerts() {
        this.alerts.forEach((alert) => {
            alert.show = true;
        });
    }
    cambiarAlert(alert) {
        alert.show = !alert.show;
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__.VehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__.MensajesService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { leyenda: "leyenda", titulo: "titulo", objVehiculo: "objVehiculo" }, decls: 153, vars: 72, consts: [[1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [4, "ngFor", "ngForOf"], ["enctype", "multipart/form-data", "autocomplete", "off", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "form-group", "row", "m-3"], [1, "col-md-6"], [1, "form-group", "row"], ["class", "col-md-7", 4, "ngIf"], ["class", "align-text-top col-md-4", "style", "display: flex; left: 10%;", 4, "ngIf"], [1, "col-md-5", "imgcontent"], ["class", "rounded-circle custom-border", "alt", "", 3, "src", 4, "ngIf"], [1, "control-label"], [1, "text-danger"], ["type", "text", "formControlName", "placa", "id", "placa", "name", "placa", "placeholder", "Ingrese placa", 1, "form-control", 3, "readonly"], [1, "invalid-feedback"], [4, "ngIf"], [1, "mt-4"], ["type", "date", "formControlName", "fecha_tarjeta", "id", "fecha_tarjeta", "name", "fecha_tarjeta", "placeholder", "Ingrese fecha vencimiento", 1, "form-control", 3, "readonly"], ["type", "text", "formControlName", "modelo", "id", "modelo", "name", "modelo", "placeholder", "Ingrese modelo", 1, "form-control", 3, "readonly"], ["type", "text", "list", "datalistOptions", "formControlName", "marca", "id", "marca", "name", "marca", "placeholder", "Ingrese marca", 1, "form-control", 3, "readonly"], ["id", "datalistOptions"], ["value", "Toyota"], ["value", "Nissan"], ["value", "Jeep"], ["value", "Isuzu"], ["value", "Mazda"], ["value", "Mitsubishi"], ["value", "Honda"], ["value", "Kia"], [1, "col-md-3"], ["type", "text", "formControlName", "n_motor", "id", "n_motor", "name", "n_motor", "placeholder", "Ingrese motor", 1, "form-control", 3, "readonly"], ["type", "text", "formControlName", "n_chasis", "id", "n_chasis", "name", "n_chasis", "placeholder", "Ingrese chasis", "mask", "AAAAAAAAAAAAAAAAA", 1, "form-control", 3, "readonly"], ["type", "text", "list", "datalistClase", "formControlName", "clase", "id", "clase", "name", "clase", "placeholder", "Ingrese clase", 1, "form-control", 3, "readonly"], ["id", "datalistClase"], ["value", "Automovil"], ["value", "Camion Pesado"], ["value", "Camion Liviano"], ["value", "Microbus"], ["value", "Pick up"], ["type", "text", "formControlName", "color", "id", "color", "name", "color", "placeholder", "Ingrese color", 1, "form-control", 3, "readonly"], ["type", "number", "formControlName", "capacidad", "id", "capacidad", "name", "capacidad", "placeholder", "Ingrese capacidad", 1, "form-control", 3, "readonly"], ["type", "number", "formControlName", "capacidadTanque", "id", "capacidadTanque", "name", "capacidadTanque", "placeholder", "Ingrese capacidad", 1, "form-control", 3, "readonly"], ["type", "text", "formControlName", "tipo_gas", "id", "tipo_gas", "name", "tipo_gas", 1, "form-select", 3, "disabled", "ngClass"], ["value", "Diesel"], ["value", "Gasolina"], ["type", "number", "formControlName", "year", "id", "year", "name", "year", "placeholder", "Ingrese A\u00F1o", 1, "form-control", 3, "readonly"], [1, "d-flex", "justify-content-end", "mt-4"], ["type", "submit", "class", "btn btn-primary me-2", "id", "btn-save", "name", "btn-save", 4, "ngIf"], ["type", "button", "id", "btn-cancel", "name", "btn-cancel", "aria-hidden", "true", 1, "btn", "btn-dark", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "col-md-7"], ["for", "file", 1, "control-label"], ["formControlName", "file", "id", "file", "type", "file", "multiple", "", 1, "form-control", 3, "change"], [1, "align-text-top", "col-md-4", 2, "display", "flex", "left", "10%"], ["alt", "", 1, "rounded-circle", "custom-border", 3, "src"], ["type", "submit", "id", "btn-save", "name", "btn-save", 1, "btn", "btn-primary", "me-2"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ModalComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ModalComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ModalComponent_Template_form_ngSubmit_7_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ModalComponent_div_13_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ModalComponent_span_14_Template, 3, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ModalComponent_img_16_Template, 1, 1, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ModalComponent_img_17_Template, 1, 1, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "N\u00FAmero Placa: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ModalComponent_span_25_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ModalComponent_span_26_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Fecha Vencimiento Tarjeta: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ModalComponent_span_34_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ModalComponent_span_35_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ModalComponent_span_36_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Modelo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ModalComponent_span_46_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "Marca: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](51, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](52, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "datalist", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](54, "option", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](55, "option", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "option", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "option", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "option", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](59, "option", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](60, "option", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](61, "option", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ModalComponent_span_63_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, ModalComponent_span_64_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "N\u00FAmero Motor: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, ModalComponent_span_74_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ModalComponent_span_75_Template, 2, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, ModalComponent_span_76_Template, 2, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "N\u00FAmero Chasis: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, ModalComponent_span_84_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](85, ModalComponent_span_85_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88, "Clase: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "datalist", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "option", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](95, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](96, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](97, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](99, ModalComponent_span_99_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](100, ModalComponent_span_100_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "Color: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](106, "input", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](108, ModalComponent_span_108_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, ModalComponent_span_109_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](113, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114, "Capacidad Personas:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](115, "input", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](117, ModalComponent_span_117_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](118, ModalComponent_span_118_Template, 2, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](121, "Capacidad Tanque (Gal\u00F3n): ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](124, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](126, ModalComponent_span_126_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](127, ModalComponent_span_127_Template, 2, 1, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Tipo de Combustible: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](131, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](132, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](133, "select", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](135, "Diesel");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](136, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](137, "Gasolina");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](138, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](139, ModalComponent_span_139_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](140, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "A\u00F1o Vehiculo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](143, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](144, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](145, "input", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](146, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](147, ModalComponent_span_147_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](148, ModalComponent_span_148_Template, 2, 0, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](150, ModalComponent_button_150_Template, 2, 0, "button", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_151_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](152, " Cancelar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_10_0;
        let tmp_11_0;
        let tmp_14_0;
        let tmp_15_0;
        let tmp_16_0;
        let tmp_19_0;
        let tmp_22_0;
        let tmp_23_0;
        let tmp_26_0;
        let tmp_27_0;
        let tmp_28_0;
        let tmp_31_0;
        let tmp_32_0;
        let tmp_35_0;
        let tmp_36_0;
        let tmp_39_0;
        let tmp_40_0;
        let tmp_43_0;
        let tmp_44_0;
        let tmp_47_0;
        let tmp_48_0;
        let tmp_52_0;
        let tmp_55_0;
        let tmp_56_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.titulo, " Vehiculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formVehiculo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.titulo !== "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.titulo === "Detalle" && !ctx.imgTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", "Detalle" == ctx.titulo || ctx.titulo == "Editar" && !ctx.imgTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.imgTemp);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("placa") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx.formVehiculo.get("placa")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx.formVehiculo.get("placa")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("fecha_tarjeta") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_14_0 = ctx.formVehiculo.get("fecha_tarjeta")) == null ? null : tmp_14_0.errors == null ? null : tmp_14_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx.formVehiculo.get("fecha_tarjeta")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["fechaVencimientoInvalida"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx.formVehiculo.get("fecha_tarjeta")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["fechaVencimientoformat"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("modelo") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_19_0 = ctx.formVehiculo.get("modelo")) == null ? null : tmp_19_0.errors == null ? null : tmp_19_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("marca") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_22_0 = ctx.formVehiculo.get("marca")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_23_0 = ctx.formVehiculo.get("marca")) == null ? null : tmp_23_0.errors == null ? null : tmp_23_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("n_motor") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_26_0 = ctx.formVehiculo.get("n_motor")) == null ? null : tmp_26_0.errors == null ? null : tmp_26_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_27_0 = ctx.formVehiculo.get("n_motor")) == null ? null : tmp_27_0.errors == null ? null : tmp_27_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_28_0 = ctx.formVehiculo.get("n_motor")) == null ? null : tmp_28_0.errors == null ? null : tmp_28_0.errors["maxlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("n_chasis") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_31_0 = ctx.formVehiculo.get("n_chasis")) == null ? null : tmp_31_0.errors == null ? null : tmp_31_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_32_0 = ctx.formVehiculo.get("n_chasis")) == null ? null : tmp_32_0.errors == null ? null : tmp_32_0.errors["mask"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("clase") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_35_0 = ctx.formVehiculo.get("clase")) == null ? null : tmp_35_0.errors == null ? null : tmp_35_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_36_0 = ctx.formVehiculo.get("clase")) == null ? null : tmp_36_0.errors == null ? null : tmp_36_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("color") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_39_0 = ctx.formVehiculo.get("color")) == null ? null : tmp_39_0.errors == null ? null : tmp_39_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_40_0 = ctx.formVehiculo.get("color")) == null ? null : tmp_40_0.errors == null ? null : tmp_40_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("capacidad") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_43_0 = ctx.formVehiculo.get("capacidad")) == null ? null : tmp_43_0.errors == null ? null : tmp_43_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_44_0 = ctx.formVehiculo.get("capacidad")) == null ? null : tmp_44_0.errors == null ? null : tmp_44_0.errors["min"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("capacidadTanque") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_47_0 = ctx.formVehiculo.get("capacidadTanque")) == null ? null : tmp_47_0.errors == null ? null : tmp_47_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_48_0 = ctx.formVehiculo.get("capacidadTanque")) == null ? null : tmp_48_0.errors == null ? null : tmp_48_0.errors["min"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("tipo_gas") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.objVehiculo != null && ctx.titulo == "Detalle")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](70, _c0, ctx.objVehiculo != null && ctx.titulo == "Detalle"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_52_0 = ctx.formVehiculo.get("tipo_gas")) == null ? null : tmp_52_0.errors == null ? null : tmp_52_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.titulo != "Detalle" ? ctx.esCampoValido("year") : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.objVehiculo != null && ctx.titulo == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_55_0 = ctx.formVehiculo.get("year")) == null ? null : tmp_55_0.errors == null ? null : tmp_55_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_56_0 = ctx.formVehiculo.get("year")) == null ? null : tmp_56_0.errors == null ? null : tmp_56_0.errors["invalidYear"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.titulo != "Detalle");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], ngx_mask__WEBPACK_IMPORTED_MODULE_7__.MaskDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip], styles: ["@charset \"UTF-8\";\nimg[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 155px;\n}\nbutton.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n.select-readonly[_ngcontent-%COMP%] {\n  background-color: #eff2f7;\n  \n  pointer-events: none;\n  \n}\n.select-readonly-check[_ngcontent-%COMP%] {\n  pointer-events: none;\n  \n}\n\n.no-interaction[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background-color: lightgray;\n}\n\n.align-content-center[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.custom-border[_ngcontent-%COMP%] {\n  border: 1.5px solid #550000;\n  padding: 5px;\n}\n\n.btn-close-color[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  padding: 0;\n  font-size: 1.5rem;\n  line-height: 1;\n  cursor: pointer;\n  color: white;\n}\n.btn-close-color[_ngcontent-%COMP%]::before, .btn-close-color[_ngcontent-%COMP%]::after {\n  content: \"x\";\n  position: absolute;\n  align-content: end;\n  top: 2.5%;\n  right: 1.5%;\n}\n.imgcontent[_ngcontent-%COMP%] {\n  width: 160px;\n  height: 155px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLFlBQUE7RUFDQSxhQUFBO0FBRUY7QUFDQTtFQUNFLGdCQUFBO0FBRUY7QUFDQSx3RUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSwwRUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7QUFFRjtBQUNBO0VBQ0Usb0JBQUE7RUFDQSwrQ0FBQTtBQUVGO0FBRUEsd0RBQUE7QUFDQTtFQUNFLG9CQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUVBLDZCQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDRjtBQUVBLDZCQUFBO0FBQ0E7RUFDRSwyQkFBQTtFQUNBLFlBQUE7QUFDRjtBQVVBLGtEQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFQRjtBQVVBOztFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFQRjtBQVVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFQRiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbmltZyB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNTVweDtcbn1cblxuYnV0dG9uLmJ0bi1jbG9zZSB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi8qIEFncmVnYSB1bmEgY2xhc2UgcGFyYSBhcGxpY2FyIGVsIGVzdGlsbyBkZSBcInNvbG8gbGVjdHVyYVwiIGFsIHNlbGVjdCAqL1xuLnNlbGVjdC1yZWFkb25seSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmYyZjc7XG4gIC8qIENhbWJpYSBlbCBjb2xvciBkZSBmb25kbyBwYXJhIGluZGljYXIgcXVlIGVzdMOhIGVuIG1vZG8gXCJzb2xvIGxlY3R1cmFcIiAqL1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogRXZpdGEgcXVlIHNlIGNhcHR1cmVuIGV2ZW50b3MgZW4gZWwgc2VsZWN0ICovXG59XG5cbi5zZWxlY3QtcmVhZG9ubHktY2hlY2sge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogRXZpdGEgcXVlIHNlIGNhcHR1cmVuIGV2ZW50b3MgZW4gZWwgc2VsZWN0ICovXG59XG5cbi8qIHBhcmEgbm8gaW50ZXJhY3R1YWUgY3VhbmRvIG5vIHNlYSBlZGl0YWJsZSBlbCBjYW1wbyAqL1xuLm5vLWludGVyYWN0aW9uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbn1cblxuLyogc3R5bGVzLmNzcyBvIHN0eWxlcy5zY3NzICovXG4uYWxpZ24tY29udGVudC1jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cbi5jdXN0b20tYm9yZGVyIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjNTUwMDAwO1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi8qIEVzdGlsb3MgcGFyYSBlbCBib3TDs24gZGUgY2llcnJlIHBlcnNvbmFsaXphZG8gKi9cbi5idG4tY2xvc2UtY29sb3Ige1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBsaW5lLWhlaWdodDogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tY2xvc2UtY29sb3I6OmJlZm9yZSxcbi5idG4tY2xvc2UtY29sb3I6OmFmdGVyIHtcbiAgY29udGVudDogXCJ4XCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYWxpZ24tY29udGVudDogZW5kO1xuICB0b3A6IDIuNSU7XG4gIHJpZ2h0OiAxLjUlO1xufVxuXG4uaW1nY29udGVudCB7XG4gIHdpZHRoOiAxNjBweDtcbiAgaGVpZ2h0OiAxNTVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 55774:
/*!**********************************************************************!*\
  !*** ./src/app/modules/vehiculo/components/tabla/tabla.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaComponent": () => (/* binding */ TablaComponent)
/* harmony export */ });
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal.component */ 98500);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/vehiculo.service */ 55621);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 24352);








function TablaComponent_ng_container_19_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_Template_button_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const obj_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r5.abrirModal("Detalle", obj_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_Template_button_click_19_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const obj_r4 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r7.abrirModal("Editar", obj_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_Template_button_click_21_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const obj_r4 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.cambiarEstado(obj_r4, obj_r4.estado); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const obj_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](obj_r4.placa);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](obj_r4.clase);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](obj_r4.modelo);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](obj_r4.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 11, obj_r4.fecha_tarjeta, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](obj_r4.estado === 8 ? "badge rounded-pill bg-success" : "badge rounded-pill bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", obj_r4.estado === 8 ? "Activo" : "Inactivo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("ngbTooltip", "Cambiar a ", obj_r4.estado === 9 ? "Activo" : "Inactivo", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", obj_r4.estado === 8 ? "mdi mdi-18px mdi-lock-outline" : "mdi mdi-18px mdi-key-outline");
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
function TablaComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TablaComponent_ng_container_19_tr_1_Template, 23, 14, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 4, ctx_r0.vehiculos, ctx_r0.busqueda), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx_r0.p)));
} }
function TablaComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " No hay datos disponibles. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class TablaComponent {
    constructor(vehiService, serviModal) {
        this.vehiService = vehiService;
        this.serviModal = serviModal;
        this.vehiculos = [];
        this.busqueda = '';
        this.cambio = '';
        this.estado = 8;
    }
    ngOnInit() {
    }
    abrirModal(leyenda, objVehiculo) {
        const modalRef = this.serviModal.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
            size: "xl",
            centered: true,
            backdrop: "static",
        });
        modalRef.componentInstance.titulo = leyenda;
        modalRef.componentInstance.objVehiculo = objVehiculo;
    }
    cambiarEstado(vehiculoED, estado) {
        const envObj = vehiculoED;
        const formData = new FormData();
        if (envObj.estado == 8) {
            this.cambio = 'Inactivo';
            this.estado = 9;
            //envObj.estado = 9;
        }
        else {
            this.cambio = 'Activo';
            this.estado = 8;
            //envObj.estado = 8;
        }
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            icon: 'question',
            title: "¿Cambiar el estado a " + this.cambio + "?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Cambiar",
            denyButtonText: `No cambiar`,
        }).then((result) => {
            if (result.isConfirmed) {
                envObj.estado = this.estado;
                formData.append('vehiculo', new Blob([JSON.stringify(envObj)], { type: 'application/json' }));
                this.vehiService.editarVehiculo(formData).subscribe((resp) => {
                    if (resp) {
                        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
                            toast: true,
                            position: 'top-end',
                            showConfirmButton: false,
                            timer: 3000,
                            //timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
                                toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
                            }
                        });
                        Toast.fire({
                            icon: 'success',
                            text: 'Modificación exitosa'
                        });
                        this.vehiService.getVehiculos();
                    }
                }, (err) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        icon: 'error',
                        title: 'Error',
                        text: err,
                    });
                });
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Cambios no aplicados", "", "info");
            }
        });
    }
}
TablaComponent.ɵfac = function TablaComponent_Factory(t) { return new (t || TablaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_service_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__.VehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal)); };
TablaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TablaComponent, selectors: [["app-tabla"]], inputs: { vehiculos: "vehiculos", busqueda: "busqueda" }, decls: 24, vars: 4, consts: [[1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle", "text-center"], [4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "nextLabel", "previousLabel", "pageChange"], [4, "ngFor", "ngForOf"], [1, "align-middle", "text-center", "text-center"], ["type", "button", "ngbTooltip", "Detalle vehiculo", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-eye-outline"], ["type", "button", "ngbTooltip", "Modificar vehiculo", 1, "btn", "btn-info", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-book-edit-outline"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "btn-rounded", "mx-1", 3, "ngbTooltip", "click"], [3, "ngClass"], ["colspan", "6", 2, "text-align", "center"]], template: function TablaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Placa");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Clase");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Modelo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "A\u00F1o");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Fecha Vence Tarjeta");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, TablaComponent_ng_container_19_Template, 4, 9, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, TablaComponent_ng_template_20_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "pagination-controls", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function TablaComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.vehiculos.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("nextLabel", "")("previousLabel", "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_7__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipe, _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 94155:
/*!*******************************************************************!*\
  !*** ./src/app/modules/vehiculo/pages/listar/listar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarComponent": () => (/* binding */ ListarComponent)
/* harmony export */ });
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal/modal.component */ 98500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/vehiculo.service */ 55621);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);




class ListarComponent {
    constructor(vehiService, serviModal) {
        this.vehiService = vehiService;
        this.serviModal = serviModal;
    }
    ngOnInit() {
        this.breadCrumbItems = [
            { label: "Vehiculo" },
            { label: "Listar", active: true },
        ];
        this.vehiService.getVehiculos();
    }
    get obtenerVehiculos() {
        return this.vehiService.listVehiclos;
    }
    abrirModal(leyenda) {
        const modalRef = this.serviModal.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, {
            size: "xl",
            centered: true,
            backdrop: "static",
        });
        modalRef.componentInstance.titulo = leyenda;
    }
}
ListarComponent.ɵfac = function ListarComponent_Factory(t) { return new (t || ListarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__.VehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal)); };
ListarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListarComponent, selectors: [["app-listar"]], decls: 18, vars: 4, consts: [[1, "container-fluid"], ["title", "Vehiculos", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-8"], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], [3, "vehiculos", "busqueda"]], template: function ListarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ListarComponent_Template_input_ngModelChange_11_listener($event) { return ctx.termBusca = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ListarComponent_Template_button_click_15_listener() { return ctx.abrirModal("Nuevo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-tabla", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.termBusca);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("vehiculos", ctx.obtenerVehiculos)("busqueda", ctx.termBusca);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 55621:
/*!**************************************************************!*\
  !*** ./src/app/modules/vehiculo/service/vehiculo.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiculoService": () => (/* binding */ VehiculoService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);




class VehiculoService {
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.listVehiclos = [];
    }
    gyetVehi() {
        return this.http
            .get(this.url + "/vehiculo/lista")
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((resp) => resp.content));
    }
    getVehiculos() {
        this.http
            .get(`${this.url}/vehiculo/lista`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((resp) => resp.content))
            .subscribe((automovil) => {
            this.listVehiclos = automovil; // Actualiza la propiedad listEmpleados
        }, (error) => {
            console.error("Error al obtener las vehiculos:", error);
        });
    }
    guardarVehiculo(part) {
        return this.http.post(`${this.url}/vehiculo/insertar`, part);
    }
    editarVehiculo(part) {
        return this.http.put(`${this.url}/vehiculo/editar`, part);
    }
}
VehiculoService.ɵfac = function VehiculoService_Factory(t) { return new (t || VehiculoService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
VehiculoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: VehiculoService, factory: VehiculoService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 62581:
/*!*************************************************************!*\
  !*** ./src/app/modules/vehiculo/vehiculo-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiculoRoutingModule": () => (/* binding */ VehiculoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/listar/listar.component */ 94155);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'listar', component: _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__.ListarComponent }
];
class VehiculoRoutingModule {
}
VehiculoRoutingModule.ɵfac = function VehiculoRoutingModule_Factory(t) { return new (t || VehiculoRoutingModule)(); };
VehiculoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VehiculoRoutingModule });
VehiculoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VehiculoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 72386:
/*!*****************************************************!*\
  !*** ./src/app/modules/vehiculo/vehiculo.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehiculoModule": () => (/* binding */ VehiculoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _vehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vehiculo-routing.module */ 62581);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/listar/listar.component */ 94155);
/* harmony import */ var _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabla/tabla.component */ 55774);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal/modal.component */ 98500);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/pagetitle/pagetitle.component */ 11950);
















class VehiculoModule {
}
VehiculoModule.ɵfac = function VehiculoModule_Factory(t) { return new (t || VehiculoModule)(); };
VehiculoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: VehiculoModule });
VehiculoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _vehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehiculoRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule.forRoot(),
            ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](VehiculoModule, { declarations: [_pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_1__.ListarComponent,
        _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_2__.TablaComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _vehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__.VehiculoRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule, ngx_mask__WEBPACK_IMPORTED_MODULE_12__.NgxMaskModule, ngx_pagination__WEBPACK_IMPORTED_MODULE_13__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetComponentScope"](_pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_1__.ListarComponent, [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_6__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_7__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgModel, _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_2__.TablaComponent], []);


/***/ })

}]);
//# sourceMappingURL=src_app_modules_vehiculo_vehiculo_module_ts.js.map