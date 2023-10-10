"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_modules_solicitud-vehiculo_solicitud-vehiculo_module_ts"],{

/***/ 54059:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/components/modal-log/modal-log.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalLogComponent": () => (/* binding */ ModalLogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);



function ModalLogComponent_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLogComponent_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ModalLogComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalLogComponent_div_3_i_1_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.siMuestraAlertas());
} }
function ModalLogComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLogComponent_div_6_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const alert_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.CambiarAlert(alert_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r8.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](alert_r8.type === "info" ? "Importante!" : "Precauci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", alert_r8.message, " ");
} }
function ModalLogComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalLogComponent_div_6_div_1_Template, 5, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", alert_r8.show);
} }
function ModalLogComponent_ng_container_24_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    const i_r16 = ctx.index;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r14.calcularNumeroCorrelativo(i_r16));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15.actividad);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 9, data_r15.fechaLogSoliVe, "dd/MM/yyyy HH:mm:ss"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15.usuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r15.cargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](data_r15.estadoLogSolive === 1 ? "badge rounded-pill bg-warning" : data_r15.estadoLogSolive === 2 ? "badge rounded-pill bg-info" : data_r15.estadoLogSolive === 3 ? "badge rounded-pill bg-esdec" : data_r15.estadoLogSolive === 4 ? "badge rounded-pill bg-success" : data_r15.estadoLogSolive === 5 ? "badge rounded-pill bg-purple" : data_r15.estadoLogSolive === 6 ? "badge rounded-pill bg-revision" : data_r15.estadoLogSolive === 7 ? "badge rounded-pill bg-prima" : data_r15.estadoLogSolive === 15 ? "badge rounded-pill bg-danger" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r15.estadoString, " ");
} }
function ModalLogComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalLogComponent_ng_container_24_tr_1_Template, 16, 12, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.log);
} }
function ModalLogComponent_ng_template_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " No hay datos disponibles. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ModalLogComponent {
    constructor(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: "Estos son los diferentes moviemientos que ha tenido la solicitud.",
                show: false,
            },
        ];
    }
    ngOnInit() {
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
    calcularNumeroCorrelativo(index) {
        if (typeof this.p === 'number') {
            return (this.p - 1) * 10 + index + 1;
        }
        else {
            return index + 1; // Si no es numérico, solo regresamos el índice + 1
        }
    }
}
ModalLogComponent.ɵfac = function ModalLogComponent_Factory(t) { return new (t || ModalLogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
ModalLogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalLogComponent, selectors: [["app-modal-log"]], inputs: { log: "log" }, decls: 30, vars: 4, consts: [[1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle"], [1, "align-middle", 2, "text-align", "center"], [4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], [1, "d-flex", "justify-content-end"], ["type", "button", "id", "btn-cancel", "name", "btn-cancel", "aria-hidden", "true", 1, "btn", "btn-dark", "w-sm", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [2, "text-align", "center"], ["colspan", "6", 2, "text-align", "center"]], template: function ModalLogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Movimientos de la solicitud");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalLogComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLogComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalLogComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "thead", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Actividad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Usuario que la realiz\u00F3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ModalLogComponent_ng_container_24_Template, 2, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ModalLogComponent_ng_template_25_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalLogComponent_Template_button_click_28_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.log.length > 0)("ngIfElse", _r3);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbTooltip], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: [".bg-purple[_ngcontent-%COMP%] {\n  background-color: #B79CED;\n  color: white;\n}\n\n.bg-revision[_ngcontent-%COMP%] {\n  background-color: #A6ACAF;\n  color: white;\n}\n\n.bg-prima[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n}\n\n.bg-esdec[_ngcontent-%COMP%] {\n  background-color: #873600;\n  color: white;\n}\n\n.bg-asignado[_ngcontent-%COMP%] {\n  background-color: #48C9B0;\n  color: white;\n}\n\nbutton.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGIiwiZmlsZSI6Im1vZGFsLWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wdXJwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCNzlDRUQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctcmV2aXNpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNkFDQUY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctcHJpbWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctZXNkZWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzM2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctYXNpZ25hZG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OEM5QjA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmJ1dHRvbi5idG4tY2xvc2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 37579:
/*!********************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/components/modal/modal.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
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














function ModalComponent_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r51); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r50.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_div_3_i_1_Template, 1, 0, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.siMuestraAlertas());
} }
function ModalComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_6_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56); const alert_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r54.CambiarAlert(alert_r52); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r52.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](alert_r52.type === "info" ? "Importante!" : "Precauci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", alert_r52.message, " ");
} }
function ModalComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_div_6_div_1_Template, 5, 5, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r52 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", alert_r52.show);
} }
function ModalComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Marque la casilla si la misi\u00F3n es internacional: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_div_8_Template_input_change_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r58.actualizarEstadoCheckbox(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de solicitud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha no valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de misi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha no valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de solicitud ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere el lugar o institucci\u00F3n que visitar\u00E1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Digite m\u00E1s de 3 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_46_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_46_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere el obejetivo de la misi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_46_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Digite m\u00E1s de 6 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Direcci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_div_46_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "textarea", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalComponent_div_46_span_7_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_div_46_span_8_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_3_0;
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.soliVeOd == null && ctx_r14.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r14.esCampoValido("direccion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r14.leyenda == "Detalle" && ctx_r14.soliVeOd != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r14.formularioSoliVe.get("direccion")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r14.formularioSoliVe.get("direccion")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["minlength"]);
} }
function ModalComponent_div_47_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Direcci\u00F3n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "textarea", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_47_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_47_div_3_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dpt_r70 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dpt_r70.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dpt_r70.na2, " ");
} }
function ModalComponent_div_47_div_3_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un departamento ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_47_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Departamento: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_div_47_div_3_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ModalComponent_div_47_div_3_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72); const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r71.deptoChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalComponent_div_47_div_3_ng_option_6_Template, 2, 2, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_div_47_div_3_span_8_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r64.soliVeOd == null && ctx_r64.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r64.esCampoValido("depto"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true)("notFoundText", "Datos no econtrados");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r64.departamentos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r64.formularioSoliVe.get("depto")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
} }
function ModalComponent_div_47_div_4_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_47_div_4_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const muni_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", muni_r76.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", muni_r76.nam, " ");
} }
function ModalComponent_div_47_div_4_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un municipio ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_47_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Municipio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_div_47_div_4_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ModalComponent_div_47_div_4_Template_ng_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r78); const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r77.distChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalComponent_div_47_div_4_ng_option_6_Template, 2, 2, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_div_47_div_4_span_8_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r65.soliVeOd == null && ctx_r65.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r65.esCampoValido("municipio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r65.municipios);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r65.formularioSoliVe.get("municipio")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
} }
function ModalComponent_div_47_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div");
} }
function ModalComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](1, 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_div_47_div_2_Template, 5, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_div_47_div_3_Template, 9, 7, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_div_47_div_4_Template, 9, 6, "div", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalComponent_div_47_div_5_Template, 1, 0, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitch", ctx_r15.leyenda);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "Detalle");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngSwitchCase", "Nueva");
} }
function ModalComponent_div_49_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_49_ng_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cton_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", cton_r82.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", cton_r82.nam, " ");
} }
function ModalComponent_div_49_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un cant\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Cant\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_div_49_span_4_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "ng-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalComponent_div_49_ng_option_6_Template, 2, 2, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_div_49_span_8_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r16.soliVeOd == null && ctx_r16.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r16.esCampoValido("canton"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r16.cantones);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r16.formularioSoliVe.get("canton")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
} }
function ModalComponent_span_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere la hora de salida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Motorista:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_59_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una observaci\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Observaciones:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "textarea", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "              ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_div_59_span_8_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r20.esCampoValido("observaciones"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", ctx_r20.leyenda === "Detalle" && ctx_r20.soliVeOd.observaciones === "" ? "" : "Ingrese observaciones")("readonly", ctx_r20.leyenda == "Detalle" && (ctx_r20.usuarioActivo.role != "JEFE_DEPTO" && ctx_r20.usuarioActivo.role == "JEFE_FINANACIERO") || ctx_r20.leyenda == "Detalle" && ctx_r20.vista == "mis-solicitudes");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r20.formularioSoliVe.get("observaciones")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
} }
function ModalComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de regreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha no valida ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_select_76_ng_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const car_r85 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", car_r85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](car_r85);
} }
function ModalComponent_ng_select_76_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_ng_select_76_Template_ng_select_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r86.cargarPlacas(ctx_r86.formularioSoliVe.get("tipoVehiculo").value, ctx_r86.formularioSoliVe.get("fechaSalida").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_select_76_ng_option_1_Template, 2, 2, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r25.esCampoValido("tipoVehiculo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r25.listVehiculos);
} }
function ModalComponent_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un tipo de veh\u00EDculo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_input_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 81);
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r27.soliVeOd != null ? ctx_r27.soliVeOd.vehiculo.clase : "");
} }
function ModalComponent_span_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_86_ng_select_0_ng_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const vehiculo_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", vehiculo_r91.codigoVehiculo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](vehiculo_r91.placa);
} }
function ModalComponent_ng_template_86_ng_select_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_86_ng_select_0_ng_option_1_Template, 2, 2, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r88.esCampoValido("vehiculo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r88.placas);
} }
function ModalComponent_ng_template_86_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un veh\u00EDculo ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalComponent_ng_template_86_ng_select_0_Template, 2, 4, "ng-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_ng_template_86_span_2_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r30.leyenda == "Nueva" && ctx_r30.soliVeOd == null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r30.formularioSoliVe.get("vehiculo")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["required"]);
} }
function ModalComponent_ng_template_88_input_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 85);
} if (rf & 2) {
    const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r92.soliVeOd != null ? ctx_r92.soliVeOd.vehiculo.placa : "");
} }
function ModalComponent_ng_template_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalComponent_ng_template_88_input_0_Template, 1, 1, "input", 84);
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r32.leyenda == "Detalle" && ctx_r32.soliVeOd != null);
} }
function ModalComponent_div_91_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_91_ng_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const dist_r96 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", dist_r96.codigo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", dist_r96.nam, " ");
} }
function ModalComponent_div_91_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere seleccionar un distrito ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_91_Template(rf, ctx) { if (rf & 1) {
    const _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Distrito: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalComponent_div_91_span_5_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "ng-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ModalComponent_div_91_Template_ng_select_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r98); const ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r97.muniChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalComponent_div_91_ng_option_7_Template, 2, 2, "ng-option", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ModalComponent_div_91_span_9_Template, 2, 0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_4_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r33.soliVeOd == null && ctx_r33.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r33.esCampoValido("distrito"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r33.distritos);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r33.formularioSoliVe.get("distrito")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["required"]);
} }
function ModalComponent_span_97_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_100_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere la hora de regreso ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_106_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere el obejetivo de la misi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Digite m\u00E1s de 6 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere la cantidad de pasajeros en la misi\u00F3n ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " La cantidad de personas debe ser al menos 1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_span_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Solamente se permiten n\u00FAmeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_123_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "label", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Responsable:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_124_div_2_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_124_div_2_table_4_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 97);
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
function ModalComponent_div_124_div_2_table_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 96);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_div_124_div_2_table_4_tr_8_Template, 5, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r104.pasajeros);
} }
function ModalComponent_div_124_div_2_table_5_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 97);
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
function ModalComponent_div_124_div_2_table_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "table", 98);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_div_124_div_2_table_5_tr_8_Template, 5, 3, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r105.pasajeroFormControls);
} }
function ModalComponent_div_124_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ingrese los nombres de los pasajeros: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_div_124_div_2_span_3_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_div_124_div_2_table_4_Template, 9, 1, "table", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalComponent_div_124_div_2_table_5_Template, 9, 1, "table", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.soliVeOd == null && ctx_r99.leyenda === "Nueva");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.leyenda === "Detalle" && ctx_r99.soliVeOd != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r99.leyenda !== "Detalle" || ctx_r99.soliVeOd === null);
} }
function ModalComponent_div_124_ng_template_3_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_124_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Por favor, adjunta la lista de pasajeros: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_div_124_ng_template_3_div_0_span_2_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_div_124_ng_template_3_div_0_Template_input_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r114.cambioDeArchivo($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r112.soliVeOd == null && ctx_r112.leyenda === "Nueva");
} }
function ModalComponent_div_124_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalComponent_div_124_ng_template_3_div_0_Template, 4, 1, "div", 92);
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r101.mostrarArchivoAdjunto && ctx_r101.leyenda === "Nueva");
} }
function ModalComponent_div_124_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Lista de pasajeros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_124_div_5_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r116.descargaPdf(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Descargar pdf ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_124_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_div_124_div_2_Template, 6, 3, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_div_124_ng_template_3_Template, 1, 1, "ng-template", null, 91, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalComponent_div_124_div_5_Template, 5, 0, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](4);
    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r44.mostrarTabla)("ngIfElse", _r100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r44.btnVerPdf);
} }
function ModalComponent_div_126_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_126_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r118.aprobarSolicitudAdministrador(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Aprobar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_126_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r119); const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r120.anularSolicitud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " Anular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_button_127_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Enviar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_button_128_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_button_128_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r121.aprobarSolicitud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Aprobar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_button_129_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_button_129_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r123.anularSolicitud(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Anular ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
class ModalComponent {
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
        this.pasajeroFormControls = [];
        this.soliSave = [];
        this.isChecked = false;
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
        this.solicitudVale = {
            idSolicitudVale: '',
            cantidadVale: 0,
            estadoEntrada: 1,
            estado: 8,
            solicitudVehiculo: '' // Otra inicialización si es necesario
        };
    }
    ngOnInit() {
        this.iniciarFormulario();
        this.llenarSelectDepartamentos();
        this.soliVeService.obtenerVehiculos();
        this.detalle(this.leyenda);
    }
    get listVehiculos() {
        return this.soliVeService.listVehiculos;
    }
    detalle(leyenda) {
        if (leyenda == 'Detalle') {
            const solicitudVehiculo = this.soliVeOd;
            this.formularioSoliVe.get('fechaSolicitud')
                .setValue(this.soliVeOd != null ? this.soliVeOd.fechaSolicitud : '');
            this.formularioSoliVe.get('fechaSalida')
                .setValue(this.soliVeOd != null ? this.soliVeOd.fechaSalida : '');
            this.formularioSoliVe.get('unidadSolicitante')
                .setValue(this.soliVeOd != null ? this.soliVeOd.unidadSolicitante : '');
            this.formularioSoliVe.get('lugarMision')
                .setValue(this.soliVeOd != null ? this.soliVeOd.lugarMision : '');
            this.formularioSoliVe.get('depto')
                .setValue(this.soliVeOd != null ? this.soliVeOd.unidadSolicitante : '');
            this.formularioSoliVe.get('direccionD')
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
            if (this.soliVeOd.observaciones != null) {
                this.formularioSoliVe.get('observaciones')
                    .setValue(this.soliVeOd != null ? this.soliVeOd.observaciones : '');
            }
            if (this.soliVeOd.motorista != null) {
                this.formularioSoliVe.get('motorista')
                    .setValue(this.soliVeOd != null ? this.soliVeOd.motorista.nombre + ' '
                    + this.soliVeOd.motorista.apellido : '');
            }
            if (solicitudVehiculo.cantidadPersonas > 5) {
                this.mostrarTabla = false;
                this.btnVerPdf = true;
            }
            for (const persona of this.soliVeOd.listaPasajeros) {
                this.pasajeros.push({ id: persona.id, nombrePasajero: persona.nombrePasajero });
                const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.soliVeOd != null ? persona.nombrePasajero : '');
                this.pasajeroFormControls.push(control);
            }
        }
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.formularioSoliVe.value.unidadSolicitante = this.usuarioActivo.empleado.departamento.nombre;
            const solicitudVehiculo = this.formularioSoliVe.value;
            if (this.formularioSoliVe.valid) {
                if (this.soliVeOd != null) {
                    this.editarSoliVe();
                }
                else {
                    if (this.validarfecha(solicitudVehiculo.fechaSolicitud)) {
                        if (this.validarfecha(solicitudVehiculo.fechaSalida)) {
                            if (this.validarfecha(solicitudVehiculo.fechaEntrada)) {
                                if (solicitudVehiculo.fechaEntrada >= solicitudVehiculo.fechaSalida) {
                                    if (solicitudVehiculo.horaEntrada <= solicitudVehiculo.horaSalida &&
                                        solicitudVehiculo.fechaSalida == solicitudVehiculo.fechaEntrada) {
                                        this.mensajesService.mensajesToast("warning", "La hora de regreso debe ser mayor a la hora de salida en una misión de un día");
                                    }
                                    else {
                                        if (this.file != null
                                            || solicitudVehiculo.cantidadPersonas < 6) {
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
                                                return typeof value === 'string' && value.trim() !== '';
                                            });
                                            if (!todosLlenos) {
                                                this.mensajesService.mensajesToast("warning", "Por favor, completa todos los nombres de los pasajeros.");
                                                // fin validacion de lista de pasajeros
                                            }
                                            else {
                                                // Todos los nombres de los pasajeros están llenos, continuar con el envío de la solicitud.
                                                if ((yield this.mensajesService.mensajesConfirmar()) == true) {
                                                    yield this.registrarSoliVe();
                                                }
                                            }
                                        }
                                        else {
                                            this.mensajesService.mensajesToast("warning", "Debe subir pdf de la lista de pasajeros");
                                        }
                                    }
                                }
                                else {
                                    this.mensajesService.mensajesToast("warning", "La fecha de misión  debe ser mayor o igual a la fecha de salida");
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
        if (this.isChecked != true) {
            solicitudVehiculo.direccion = nombreDepartamento + ', ' + nombreMunicipio + ', ' +
                nombreDistrito + ', ' + nombreCanton;
        }
        /* fin de la direccion */
        // Mostrar SweetAlert de carga
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Espere",
            text: "Realizando la acción...",
            icon: "info",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
        });
        return new Promise((resolve, reject) => {
            this.soliVeService.registrarSoliVe(solicitudVehiculo).subscribe({
                next: (resp) => {
                    this.soliSave = resp;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    if (solicitudVehiculo.file != null && solicitudVehiculo.cantidadPersonas > 5) {
                        // enviar pdf
                        const formData = new FormData();
                        let obj = {
                            nombreDocumento: '',
                            urlDocumento: '',
                            tipoDocumento: 'Lista de pasajeros',
                            fecha: this.obtenerFechaActual(new Date()),
                            codigoSolicitudVehiculo: {
                                codigoSolicitudVehiculo: resp.codigoSolicitudVehiculo,
                            }
                        };
                        formData.append('archivo', this.file);
                        formData.append('entidad', new Blob([JSON.stringify(obj)], { type: 'application/json' }));
                        this.soliVeService.enviarPdfPasajeros(formData).subscribe({
                            next: () => {
                                //console.log(pdfResp:any);
                                this.soliVeService.getSolicitudesVehiculo(this.estadoSelecionado);
                                /*Correo*/
                                if (this.usuarioActivo.role != ("JEFE_DEPTO" || 0 || 0)) {
                                    this.enviarEmail(this.usuarioActivo.empleado.departamento.nombre);
                                }
                                /*Fin correo*/
                                this.mensajesService.mensajesToast("success", "Registro agregado");
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
                        this.soliVeService.getSolicitudesVehiculo(this.estadoSelecionado);
                        /*Correo*/
                        if (this.usuarioActivo.role != ("JEFE_DEPTO" || 0 || 0)) {
                            this.enviarEmail(this.usuarioActivo.empleado.departamento.nombre);
                        }
                        /*Fin correo*/
                        this.mensajesService.mensajesToast("success", "Registro agregado");
                        this.modalService.dismissAll();
                        this.formularioSoliVe.reset();
                        resolve();
                    }
                },
                error: (err) => {
                    // Cerrar SweetAlert de carga
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
                    this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal al registrar la solicitud", err.error.message);
                    reject(err); // Rechaza la promesa con el error
                },
            });
        });
    }
    editarSoliVe() { }
    cargarPlacas(tipoVehiculo, fechaSalida) {
        this.soliVeService.filtroPlacasVehiculo(tipoVehiculo, fechaSalida).subscribe((vehiculosData) => {
            if (vehiculosData && vehiculosData.length > 0) {
                this.placas = vehiculosData;
            }
            else if (tipoVehiculo != '') {
                this.placas = [];
                this.formularioSoliVe.get('vehiculo').setValue('');
                this.mensajesService.mensajesToast("warning", "En estas fechas, no hay vehiculos disponibles del tipo seleccionado.");
            }
        }, (error) => {
            // console.error('Error al obtener opciones de vehículos desde el backend:', error);
        });
    }
    iniciarFormulario() {
        var _a, _b, _c, _d;
        const unidadSolicitante = ((_c = (_b = (_a = this.usuarioActivo) === null || _a === void 0 ? void 0 : _a.empleado) === null || _b === void 0 ? void 0 : _b.departamento) === null || _c === void 0 ? void 0 : _c.nombre) || '';
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
            unidadSolicitante: [
                unidadSolicitante,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
            ],
            tipoVehiculo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            vehiculo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            objetivoMision: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            lugarMision: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            direccion: [null, []],
            direccionD: [''],
            depto: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            municipio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            distrito: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            canton: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            horaSalida: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            horaEntrada: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            cantidadPersonas: [
                1,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isInteger)]
            ],
            solicitante: [((_d = this.usuarioActivo) === null || _d === void 0 ? void 0 : _d.codigoUsuario) || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            listaPasajeros: this.fb.array([]),
            file: ['',],
            isChecked: [false],
            observaciones: ['', []],
            motorista: ['', []]
        });
        this.formularioSoliVe.get('isChecked').valueChanges.subscribe((isChecked) => {
            const depto = this.formularioSoliVe.get('depto');
            const municipio = this.formularioSoliVe.get('municipio');
            const distrito = this.formularioSoliVe.get('distrito');
            const canton = this.formularioSoliVe.get('canton');
            const direccion = this.formularioSoliVe.get('direccion');
            if (isChecked == true) {
                direccion.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                depto.clearValidators();
                municipio.clearValidators();
                distrito.clearValidators();
                canton.clearValidators();
            }
            else {
                depto.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                municipio.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                distrito.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                canton.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]);
                direccion.clearValidators();
            }
            depto.updateValueAndValidity();
            municipio.updateValueAndValidity();
            distrito.updateValueAndValidity();
            canton.updateValueAndValidity();
            direccion.updateValueAndValidity();
        });
    }
    validarfecha(fecha) {
        const inputDate = new Date(fecha);
        return inputDate.getFullYear() > 999 && inputDate.getFullYear() < 10000;
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
    actualizarFilas() {
        this.cantidadPersonas = this.formularioSoliVe.get('cantidadPersonas').value;
        const pasajerosArray = this.formularioSoliVe.get('listaPasajeros');
        // Calcula cuántas filas deberías tener
        const filasAAgregar = this.cantidadPersonas >= 2 && this.cantidadPersonas <= 5 ? this.cantidadPersonas - 1 : 0;
        if (this.cantidadPersonas <= 5) {
            // Si la cantidad actual es menor o igual a 5, elimina el último input si existe
            if (pasajerosArray.length > filasAAgregar) {
                pasajerosArray.removeAt(pasajerosArray.length - 1);
                this.pasajeroFormControls.pop();
            }
            // Agrega filas adicionales según la cantidad deseada
            while (pasajerosArray.length < filasAAgregar) {
                pasajerosArray.push(this.fb.group({
                    id: [''],
                    nombrePasajero: ['']
                }));
                // Agrega un nuevo FormControl al arreglo pasajeroFormControls
                this.pasajeroFormControls.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(''));
            }
        }
        else {
            // Si la cantidad de personas es mayor a 5, detén la generación de filas
            pasajerosArray.clear();
            this.pasajeroFormControls = [];
        }
        if (this.cantidadPersonas > 5) {
            this.mostrarTabla = false; // Ocultar la tabla
            this.mostrarArchivoAdjunto = true; // Mostrar el campo de entrada de archivo
        }
        else if (this.cantidadPersonas <= 5 && this.cantidadPersonas >= 2) {
            this.mostrarTabla = true; // Mostrar la tabla
            this.mostrarArchivoAdjunto = false; // Ocultar el campo de entrada de archivo
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
    aprobarSolicitud() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if ((yield this.mensajesService.mensajeAprobar()) == true) {
                //await this.actualizarSolicitud(data);
                this.soliVeOd.observaciones = this.formularioSoliVe.get('observaciones').value;
                if (this.usuarioActivo.role == "JEFE_DEPTO") {
                    yield this.actualizarSolicitud(this.soliVeOd, 'aprobada');
                }
                else {
                    yield this.actualizarSolicitudDec(this.soliVeOd);
                }
            }
        });
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
                    this.soliVeOd.observaciones = this.formularioSoliVe.get('observaciones').value;
                    this.soliVeOd.estado = 15;
                    if (this.usuarioActivo.role == 'ADMIN') {
                        yield this.actualizarSolicitudAdmin(this.soliVeOd, 'anulada');
                    }
                    else {
                        yield this.actualizarSolicitud(this.soliVeOd, 'anulada');
                    }
                }
            }
        });
    }
    actualizarSolicitud(data, accion) {
        return new Promise((resolve, reject) => {
            this.soliVeService.updateSolciitudVehiculo(data).subscribe({
                next: () => {
                    //resp:any
                    this.mensajesService.mensajesToast("success", `Solicitud ${accion} con éxito`);
                    this.modalService.dismissAll();
                    if (accion == 'anulada') {
                        this.enviarEmailAnulacion(data.solicitante.codigoUsuario, data.observaciones);
                    }
                    else if (accion == 'aprobada') {
                        this.enviarEmailSecre('SECR_DECANATO', 'Nueva solicitud de vehículo pendiente', 'Tiene una nueva solicitud de vehículo pendiente de asignar motorista o verificación de la información.');
                    }
                    setTimeout(() => {
                        this.soliVeService.getSolicitudesRol(this.usuarioActivo.role);
                    }, 3025);
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
    actualizarSolicitudDec(data) {
        return new Promise((resolve, reject) => {
            this.soliVeService.updateSolciitudVehiculo(data).subscribe({
                next: () => {
                    // resp: any
                    this.solicitudVale.cantidadVale = 0;
                    this.solicitudVale.estadoEntrada = 1;
                    this.solicitudVale.estado = 8;
                    this.solicitudVale.solicitudVehiculo = data.codigoSolicitudVehiculo;
                    this.soliVeService.registrarSolicitudVale(this.solicitudVale).subscribe({
                        next: () => {
                            // valeResp: any
                            this.mensajesService.mensajesToast("success", "Solicitud aprobada con éxito");
                            this.modalService.dismissAll();
                            setTimeout(() => {
                                this.soliVeService.getSolicitudesRol(this.usuarioActivo.role);
                            }, 3025);
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
    actualizarEstadoCheckbox() {
        this.isChecked = this.isChecked == false;
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
    /* administrador */
    aprobarSolicitudAdministrador() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if ((yield this.mensajesService.mensajeAprobar()) == true) {
                //await this.actualizarSolicitud(data);
                this.soliVeOd.observaciones = this.formularioSoliVe.get('observaciones').value;
                if (this.soliVeOd.estado == 1 && this.usuarioActivo.role == 'ADMIN') {
                    yield this.actualizarSolicitudAdmin(this.soliVeOd, 'aprobada');
                }
            }
        });
    }
    actualizarSolicitudAdmin(data, accion) {
        return new Promise((resolve, reject) => {
            this.soliVeService.updateSolciitudVehiculo(data).subscribe({
                next: () => {
                    //resp:any
                    this.mensajesService.mensajesToast("success", `Solicitud ${accion} con éxito`);
                    this.modalService.dismissAll();
                    if (accion == 'aprobada') {
                        this.enviarEmailSecre('SECR_DECANATO', 'Nueva solicitud de vehículo pendiente', 'Tiene una nueva solicitud de vehículo pendiente de asignar motorista o verificación de la información.');
                    }
                    else if (accion == 'anulada') {
                        this.enviarEmailAnulacion(data.solicitante.codigoUsuario, data.observaciones);
                    }
                    setTimeout(() => {
                        this.soliVeService.getSolicitudesVehiculo(1);
                    }, 3025);
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
    /*fin administrador*/
    /*Correo*/
    enviarEmail(departamento) {
        this.emailService.getCorreoJefeDepto(departamento).subscribe((datos) => {
            const nombreCompletoSolicitante = this.usuarioActivo.empleado.nombre + " " +
                this.usuarioActivo.empleado.apellido;
            const email = {
                asunto: 'Solicitud de vehículo pendiente de aprobación',
                titulo: 'Solicitud de vehículo pendiente de aprobación',
                email: datos.correo,
                receptor: "Estimad@ " + datos.nombreCompleto + ".",
                mensaje: nombreCompletoSolicitante + " ha realizado una solicitud de vehículo para una misión y esta a la espera de su aprobación.",
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
    enviarEmailSecre(rol, titulo, mensaje) {
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
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_2__.SolicitudVehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__.MensajesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_email_service__WEBPACK_IMPORTED_MODULE_4__.EmailService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { leyenda: "leyenda", estadoSelecionado: "estadoSelecionado", soliVeOd: "soliVeOd", usuarioActivo: "usuarioActivo", vista: "vista" }, decls: 132, vars: 75, consts: [[1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [3, "formGroup", "ngSubmit"], ["class", "row", 4, "ngIf"], [1, "row", "mb-4"], [1, "col-md-5"], [1, "row"], [1, "col-md-6"], ["for", "fecha-solicitud"], ["class", "text-danger", 4, "ngIf"], ["type", "date", "id", "fecha-solicitud", "formControlName", "fechaSolicitud", "readonly", "", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], ["for", "fecha-mision"], ["type", "date", "id", "fecha-mision", "formControlName", "fechaSalida", 1, "form-control", 3, "readonly", "change"], [1, "mt-2"], [1, "form-group"], ["for", "unidad-solicitante"], ["type", "text", "id", "unidad-solicitante", "formControlName", "unidadSolicitante", "readonly", "", 1, "form-control"], ["for", "lugar-visitar"], ["type", "text", "id", "lugar-visitar", "placeholder", "Ingrese el lugar o insituci\u00F3n que visitar\u00E1", "formControlName", "lugarMision", 1, "form-control", 3, "value", "readonly"], ["class", "col-md-6", 4, "ngIf"], ["for", "hora-salida"], ["type", "time", "id", "hora-salida", "formControlName", "horaSalida", 1, "form-control", 3, "readonly"], [1, "col-md-3"], [1, "col-md-12"], ["for", "fecha-regreso"], ["type", "date", "id", "fecha-regreso", "formControlName", "fechaEntrada", 1, "form-control", 3, "readOnly", "change"], [1, "mt-2", "ngselect-ve"], ["for", "tipo-vehiculo"], ["formControlName", "tipoVehiculo", "placeholder", "Escriba o seleccione", "labelForId", "tipoVehiculo", 3, "selectOnTab", "class", "change", 4, "ngIf"], ["type", "text", "class", "form-control", "id", "tipo-vehiculo", "formControlName", "tipoVehiculo", "readonly", "", 3, "value", 4, "ngIf"], ["for", "vehiculo"], ["selectTemplate", ""], ["inputTemplate", ""], [3, "ngTemplateOutlet"], ["for", "hora-regreso"], ["type", "time", "id", "hora-regreso", "formControlName", "horaEntrada", 1, "form-control", 3, "readOnly"], [1, "col-md-4"], ["for", "objetivo-mision"], ["id", "objetivo-mision", "cols", "30", "rows", "3", "placeholder", "Ingrese el objetivo de la misi\u00F3n", "formControlName", "objetivoMision", 1, "form-control", 3, "readonly"], ["for", "cantidad-pasajeros"], ["type", "number", "id", "cantidad-pasajeros", "formControlName", "cantidadPersonas", "min", "1", 1, "form-control", 3, "value", "readonly", "change", "input"], [1, "d-flex", "justify-content-end", "mt-4"], ["type", "submit", "class", "btn btn-primary w-sm me-2", "id", "btn-save", "name", "btn-save", 4, "ngIf"], ["type", "button", "class", "btn btn-primary w-sm me-2", "id", "btn-detalle-save", "name", "btn-save", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-warning w-sm me-2", "id", "btn-detalle-ave", "name", "btn-save", 3, "click", 4, "ngIf"], ["type", "button", "id", "btn-cancel", "name", "btn-cancel", "aria-hidden", "true", 1, "btn", "btn-dark", "w-sm", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["for", "misionInt", 1, "alert-info", "form-control", "text-center"], ["type", "checkbox", "id", "misionInt", "formControlName", "isChecked", 1, "form-check-input", 3, "change"], [1, "text-danger"], ["for", "direccion"], ["cols", "30", "rows", "2", "id", "direccion", "formControlName", "direccion", 1, "form-control", 3, "readonly"], [3, "ngSwitch"], ["class", "col-md-12", 4, "ngSwitchCase"], ["class", "col-md-6", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["cols", "30", "rows", "2", "formControlName", "direccionD", "readonly", "", 1, "form-control"], ["for", "detpto"], ["id", "detpto", "formControlName", "depto", "placeholder", "Escriba o seleccione", "labelForId", "depto", 3, "selectOnTab", "notFoundText", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["for", "municipio"], ["id", "municipio", "formControlName", "municipio", "placeholder", "Escriba o seleccione", "labelForId", "municipio", 3, "selectOnTab", "ngModelChange"], ["for", "canton"], ["id", "canton", "formControlName", "canton", "placeholder", "Escriba o seleccione", "labelForId", "canton", 3, "selectOnTab"], ["for", "motoristaid"], ["type", "text", "id", "motoristaid", "formControlName", "motorista", "readonly", "", 1, "form-control"], ["for", "observa-id"], ["cols", "30", "rows", "2", "id", "observa-id", "formControlName", "observaciones", 1, "form-control", 3, "placeholder", "readonly"], ["formControlName", "tipoVehiculo", "placeholder", "Escriba o seleccione", "labelForId", "tipoVehiculo", 3, "selectOnTab", "change"], ["type", "text", "id", "tipo-vehiculo", "formControlName", "tipoVehiculo", "readonly", "", 1, "form-control", 3, "value"], ["formControlName", "vehiculo", "placeholder", "Escriba o seleccione", "labelForId", "vehiculo", 3, "selectOnTab", "class", 4, "ngIf"], ["formControlName", "vehiculo", "placeholder", "Escriba o seleccione", "labelForId", "vehiculo", 3, "selectOnTab"], ["type", "text", "class", "form-control", "id", "vehiculo", "formControlName", "vehiculo", "readonly", "", 3, "value", 4, "ngIf"], ["type", "text", "id", "vehiculo", "formControlName", "vehiculo", "readonly", "", 1, "form-control", 3, "value"], ["for", "distrito"], ["id", "distrito", "formControlName", "distrito", "placeholder", "Escriba o seleccione", "labelForId", "distrito", 3, "selectOnTab", "ngModelChange"], ["for", "solicitante"], ["type", "text", "id", "solicitante", "formControlName", "solicitante", "readonly", "", 1, "form-control"], [4, "ngIf", "ngIfElse"], ["archivoAdjunto", ""], ["class", "alert alert-warning", 4, "ngIf"], ["for", "tablaPasajeros"], ["class", "table excel-table table-responsive", "id", "tablaPasajeros", 4, "ngIf"], ["class", "table excel-table table-responsive", "id", "tablaPasajerosDetalle", 4, "ngIf"], ["id", "tablaPasajeros", 1, "table", "excel-table", "table-responsive"], ["type", "text", 2, "width", "100%", 3, "formControl", "readonly"], ["id", "tablaPasajerosDetalle", 1, "table", "excel-table", "table-responsive"], [1, "alert", "alert-warning"], ["type", "file", "id", "file", "accept", ".pdf", "formControlName", "file", 3, "change"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "id", "btn-detalle-save-admin", "name", "btn-save", 1, "btn", "btn-primary", "w-sm", "me-2", 3, "click"], ["type", "button", "id", "btn-detalle-anu", "name", "btn-save", 1, "btn", "btn-warning", "w-sm", "me-2", 3, "click"], ["type", "submit", "id", "btn-save", "name", "btn-save", 1, "btn", "btn-primary", "w-sm", "me-2"], ["type", "button", "id", "btn-detalle-save", "name", "btn-save", 1, "btn", "btn-primary", "w-sm", "me-2", 3, "click"], ["type", "button", "id", "btn-detalle-ave", "name", "btn-save", 1, "btn", "btn-warning", "w-sm", "me-2", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ModalComponent_Template_form_ngSubmit_7_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_div_8_Template, 4, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Fecha de solicitud: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ModalComponent_span_15_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ModalComponent_span_18_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ModalComponent_span_19_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "Fecha de misi\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, ModalComponent_span_23_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_Template_input_change_24_listener() { return ctx.cargarPlacas(ctx.formularioSoliVe.get("tipoVehiculo").value, ctx.formularioSoliVe.get("fechaSalida").value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ModalComponent_span_26_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, ModalComponent_span_27_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Unidad solicitante: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ModalComponent_span_33_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](34, "input", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ModalComponent_span_36_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Lugar que visitar\u00E1: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, ModalComponent_span_41_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ModalComponent_span_44_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, ModalComponent_span_45_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, ModalComponent_div_46_Template, 9, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, ModalComponent_div_47_Template, 6, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, ModalComponent_div_49_Template, 9, 6, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Hora de salida: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, ModalComponent_span_54_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](55, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](57, ModalComponent_span_57_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, ModalComponent_div_58_Template, 6, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](59, ModalComponent_div_59_Template, 9, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Fecha de regreso: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](65, ModalComponent_span_65_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_Template_input_change_66_listener() { return ctx.cargarPlacas(ctx.formularioSoliVe.get("tipoVehiculo").value, ctx.formularioSoliVe.get("fechaSalida").value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](68, ModalComponent_span_68_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, ModalComponent_span_69_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "Tipo de veh\u00EDculo: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, ModalComponent_span_75_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](76, ModalComponent_ng_select_76_Template, 2, 4, "ng-select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, ModalComponent_span_78_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, ModalComponent_input_79_Template, 1, 1, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "label", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Placa: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](85, ModalComponent_span_85_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](86, ModalComponent_ng_template_86_Template, 3, 2, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, ModalComponent_ng_template_88_Template, 1, 1, "ng-template", null, 38, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](90, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](91, ModalComponent_div_91_Template, 10, 6, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](93, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "Hora de regreso: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](97, ModalComponent_span_97_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](98, "input", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](99, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](100, ModalComponent_span_100_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](104, "label", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](105, "Objetivo de la misi\u00F3n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](106, ModalComponent_span_106_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](107, "textarea", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](110, ModalComponent_span_110_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](111, ModalComponent_span_111_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](113, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "label", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "No. de personas que viajar\u00E1n: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](116, ModalComponent_span_116_Template, 2, 0, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](117, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "input", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_Template_input_change_118_listener() { return ctx.actualizarFilas(); })("input", function ModalComponent_Template_input_input_118_listener() { return ctx.actualizarFilas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](119, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](120, ModalComponent_span_120_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](121, ModalComponent_span_121_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](122, ModalComponent_span_122_Template, 2, 0, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](123, ModalComponent_div_123_Template, 6, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](124, ModalComponent_div_124_Template, 6, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](125, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](126, ModalComponent_div_126_Template, 5, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](127, ModalComponent_button_127_Template, 2, 0, "button", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](128, ModalComponent_button_128_Template, 2, 0, "button", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](129, ModalComponent_button_129_Template, 2, 0, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "button", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_130_listener() { return ctx.activeModal.close("Close click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](131, "Cancelar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](87);
        const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](89);
        let tmp_7_0;
        let tmp_8_0;
        let tmp_12_0;
        let tmp_13_0;
        let tmp_16_0;
        let tmp_21_0;
        let tmp_22_0;
        let tmp_29_0;
        let tmp_35_0;
        let tmp_36_0;
        let tmp_39_0;
        let tmp_47_0;
        let tmp_51_0;
        let tmp_52_0;
        let tmp_57_0;
        let tmp_58_0;
        let tmp_59_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx.leyenda, " Solicitud de Veh\u00EDculo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.alerts && ctx.leyenda != "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formularioSoliVe);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda === "Nueva" && ctx.soliVeOd == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("fechaSolicitud"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx.formularioSoliVe.get("fechaSolicitud")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.formularioSoliVe.get("fechaSolicitud")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("fechaSalida"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.soliVeOd != null && ctx.leyenda === "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx.formularioSoliVe.get("fechaSalida")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx.formularioSoliVe.get("fechaSalida")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("unidadSolicitante"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx.formularioSoliVe.get("unidadSolicitante")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("lugarMision"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.soliVeOd != null ? ctx.soliVeOd.lugarMision : "")("readonly", ctx.soliVeOd != null && ctx.leyenda === "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx.formularioSoliVe.get("lugarMision")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_22_0 = ctx.formularioSoliVe.get("lugarMision")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Nueva" && ctx.soliVeOd == null && !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("horaSalida"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_29_0 = ctx.formularioSoliVe.get("horaSalida")) == null ? null : tmp_29_0.errors == null ? null : tmp_29_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Detalle" && ctx.soliVeOd.motorista != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda != "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("fechaEntrada"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_35_0 = ctx.formularioSoliVe.get("fechaEntrada")) == null ? null : tmp_35_0.errors == null ? null : tmp_35_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_36_0 = ctx.formularioSoliVe.get("fechaEntrada")) == null ? null : tmp_36_0.errors == null ? null : tmp_36_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Nueva" && ctx.soliVeOd == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_39_0 = ctx.formularioSoliVe.get("tipoVehiculo")) == null ? null : tmp_39_0.errors == null ? null : tmp_39_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", ctx.leyenda == "Nueva" ? _r29 : _r31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Nueva" && ctx.soliVeOd == null && !ctx.isChecked);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("horaEntrada"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readOnly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_47_0 = ctx.formularioSoliVe.get("horaEntrada")) == null ? null : tmp_47_0.errors == null ? null : tmp_47_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("objetivoMision"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_51_0 = ctx.formularioSoliVe.get("objetivoMision")) == null ? null : tmp_51_0.errors == null ? null : tmp_51_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_52_0 = ctx.formularioSoliVe.get("objetivoMision")) == null ? null : tmp_52_0.errors == null ? null : tmp_52_0.errors["minlength"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.soliVeOd == null && ctx.leyenda === "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.esCampoValido("cantidadPersonas"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx.formularioSoliVe.get("cantidadPersonas").value)("readonly", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_57_0 = ctx.formularioSoliVe.get("cantidadPersonas")) == null ? null : tmp_57_0.errors == null ? null : tmp_57_0.errors["required"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_58_0 = ctx.formularioSoliVe.get("cantidadPersonas")) == null ? null : tmp_58_0.errors == null ? null : tmp_58_0.errors["min"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_59_0 = ctx.formularioSoliVe.get("cantidadPersonas")) == null ? null : tmp_59_0.errors == null ? null : tmp_59_0.errors["pattern"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Detalle" && ctx.soliVeOd != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.cantidadPersonas >= 2 || ctx.leyenda == "Detalle" && ctx.soliVeOd != null && ctx.soliVeOd.cantidadPersonas >= 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.usuarioActivo.role == "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Nueva");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.usuarioActivo.role == "JEFE_DEPTO" || ctx.usuarioActivo.role == "JEFE_FINANACIERO" || ctx.usuarioActivo.role == "DECANO") && ctx.vista === "listado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (ctx.usuarioActivo.role == "DECANO" || ctx.usuarioActivo.role == "JEFE_DEPTO" || ctx.usuarioActivo.role == "JEFE_FINANACIERO") && ctx.vista === "listado");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgTemplateOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgSwitchDefault, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlDirective], styles: ["@charset \"UTF-8\";\n\n.select-readonly[_ngcontent-%COMP%] {\n  background-color: #eff2f7;\n  \n  pointer-events: none;\n  \n}\n.excel-table[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  width: 100%;\n}\n.excel-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .excel-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #ccc;\n  padding: 4px;\n  text-align: left;\n}\n.excel-cell[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n}\nng-select.is-invalid[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px #f46a6a;\n  border-radius: 0.25rem;\n}\nng-select.is-valid[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px #34c38f;\n  border-radius: 0.25rem;\n}\nbutton.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQix3RUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSwwRUFBQTtFQUNBLG9CQUFBO0VBQ0EsK0NBQUE7QUFFRjtBQUNBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FBRUY7QUFDQTs7RUFFRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUVGO0FBQ0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBRUY7QUFDQTtFQUNFLDZCQUFBO0VBQ0Esc0JBQUE7QUFFRjtBQUNBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQUVGO0FBQ0E7RUFDRSxnQkFBQTtBQUVGIiwiZmlsZSI6Im1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogQWdyZWdhIHVuYSBjbGFzZSBwYXJhIGFwbGljYXIgZWwgZXN0aWxvIGRlIFwic29sbyBsZWN0dXJhXCIgYWwgc2VsZWN0ICovXG4uc2VsZWN0LXJlYWRvbmx5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZjJmNztcbiAgLyogQ2FtYmlhIGVsIGNvbG9yIGRlIGZvbmRvIHBhcmEgaW5kaWNhciBxdWUgZXN0w6EgZW4gbW9kbyBcInNvbG8gbGVjdHVyYVwiICovXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAvKiBFdml0YSBxdWUgc2UgY2FwdHVyZW4gZXZlbnRvcyBlbiBlbCBzZWxlY3QgKi9cbn1cblxuLmV4Y2VsLXRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGNlbC10YWJsZSB0aCxcbi5leGNlbC10YWJsZSB0ZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmV4Y2VsLWNlbGwge1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59XG5cbm5nLXNlbGVjdC5pcy1pbnZhbGlkIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMXB4ICNmNDZhNmE7XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG59XG5cbm5nLXNlbGVjdC5pcy12YWxpZCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMzRjMzhmO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xufVxuXG5idXR0b24uYnRuLWNsb3NlIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn0iXX0= */"] });


/***/ }),

/***/ 29397:
/*!********************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/components/tabla/tabla.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaComponent": () => (/* binding */ TablaComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modal/modal.component */ 37579);
/* harmony import */ var _modal_secretaria_modal_secretaria_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal-secretaria/modal-secretaria.component */ 61473);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal_log_modal_log_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal-log/modal-log.component */ 54059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/global/mensajes.service */ 66548);
/* harmony import */ var _services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/solicitud-vehiculo.service */ 88345);
/* harmony import */ var _services_email_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/email.service */ 27261);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-search-filter */ 24352);













function TablaComponent_ng_container_19_tr_1_div_17_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_div_17_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r15.abrirModal("Detalle", data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TablaComponent_ng_container_19_tr_1_div_17_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_div_17_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r18.abrirModalParaAdmin("Detalle", data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TablaComponent_ng_container_19_tr_1_div_17_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_div_17_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r23); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r21.aprobarSolicitudAdmin(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TablaComponent_ng_container_19_tr_1_div_17_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_div_17_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r24.abrirModalSecre("Edicion", data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TablaComponent_ng_container_19_tr_1_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TablaComponent_ng_container_19_tr_1_div_17_button_1_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TablaComponent_ng_container_19_tr_1_div_17_button_2_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TablaComponent_ng_container_19_tr_1_div_17_button_3_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, TablaComponent_ng_container_19_tr_1_div_17_button_4_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_div_17_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r29); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r27.abrirModalLog(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.userAcivo.role == "ADMIN" && ctx_r6.vista == "mis-solicitudes");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.userAcivo.role == "ADMIN" && ctx_r6.vista == "listar");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", data_r4.estado == 1 || data_r4.estado == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.userAcivo.role == "ADMIN" && (ctx_r6.solicitudesVehiculo.length > 0 && ctx_r6.solicitudesVehiculo[0].estado == 2 || ctx_r6.solicitudesVehiculo.length > 0 && ctx_r6.solicitudesVehiculo[0].estado == 6) && ctx_r6.vista == "listar");
} }
function TablaComponent_ng_container_19_tr_1_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r31.abrirModal("Detalle", data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TablaComponent_ng_container_19_tr_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r36); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r34.aprobarSolicitud(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TablaComponent_ng_container_19_tr_1_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r39); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r37.abrirModalSecre("Edicion", data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TablaComponent_ng_container_19_tr_1_button_21_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TablaComponent_ng_container_19_tr_1_button_21_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r42); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r40.abrirModalLog(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function TablaComponent_ng_container_19_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, TablaComponent_ng_container_19_tr_1_div_17_Template, 7, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, TablaComponent_ng_container_19_tr_1_button_18_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, TablaComponent_ng_container_19_tr_1_button_19_Template, 2, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, TablaComponent_ng_container_19_tr_1_button_20_Template, 2, 0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, TablaComponent_ng_container_19_tr_1_button_21_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r3.calcularNumeroCorrelativo(i_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r4.solicitante.empleado.departamento.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r4.lugarMision);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](9, 14, data_r4.fechaSalida, "dd/MM/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](data_r4.cantidadPersonas);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](data_r4.estado === 1 ? "badge rounded-pill bg-warning" : data_r4.estado === 2 ? "badge rounded-pill bg-info" : data_r4.estado === 3 ? "badge rounded-pill bg-esdec" : data_r4.estado === 4 ? "badge rounded-pill bg-success" : data_r4.estado === 5 ? "badge rounded-pill bg-purple" : data_r4.estado === 6 ? "badge rounded-pill bg-revision" : data_r4.estado === 7 ? "badge rounded-pill bg-prima" : data_r4.estado === 15 ? "badge rounded-pill bg-danger" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", data_r4.estadoString, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.userAcivo.role == "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.userAcivo.role != "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", (ctx_r3.userAcivo.role == "DECANO" && ctx_r3.solicitudesVehiculo.length > 0 && ctx_r3.solicitudesVehiculo[0].estado == 3 || ctx_r3.userAcivo.role == "DECANO" && ctx_r3.solicitudesVehiculo.length > 0 && ctx_r3.solicitudesVehiculo[0].estado == 1 || ctx_r3.userAcivo.role == "JEFE_FINANACIERO" && ctx_r3.solicitudesVehiculo.length > 0 && ctx_r3.solicitudesVehiculo[0].estado == 1 || ctx_r3.userAcivo.role == "JEFE_DEPTO" && ctx_r3.solicitudesVehiculo.length > 0 && ctx_r3.solicitudesVehiculo[0].estado == 1) && ctx_r3.vista == "listado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.userAcivo.role == "SECR_DECANATO" && (ctx_r3.solicitudesVehiculo.length > 0 && ctx_r3.solicitudesVehiculo[0].estado == 2 || ctx_r3.solicitudesVehiculo.length > 0 && ctx_r3.solicitudesVehiculo[0].estado == 6) && ctx_r3.vista == "listado");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.vista == "mis-solicitudes");
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
function TablaComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TablaComponent_ng_container_19_tr_1_Template, 22, 17, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](3, 4, ctx_r0.solicitudesVehiculo, ctx_r0.term), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](7, _c0, ctx_r0.p)));
} }
function TablaComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " No hay datos disponibles. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
class TablaComponent {
    constructor(modalService, mensajesService, soliService, emailService) {
        this.modalService = modalService;
        this.mensajesService = mensajesService;
        this.soliService = soliService;
        this.emailService = emailService;
        this.solicitudVale = {
            idSolicitudVale: '',
            cantidadVale: 0,
            estadoEntrada: 1,
            estado: 8,
            solicitudVehiculo: '' // Otra inicialización si es necesario
        };
    }
    ngOnInit() {
    }
    abrirModal(leyenda, data) {
        if (this.userAcivo.role == 'DECANO' && data.estado == 3 && this.vista == 'listado') {
            this.abrirModalSecre(leyenda, data);
        }
        else if (this.userAcivo.role == 'SECR_DECANATO' && (data.estado == 2 || data.estado == 6) && this.vista == 'listado') {
            this.abrirModalSecre(leyenda, data);
        }
        else {
            this.selectedData = data; // Almacena los datos del registro seleccionado
            const modalRef = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, { size: 'xl', backdrop: 'static' });
            modalRef.componentInstance.leyenda = leyenda; // Pasa la leyenda al componente modal
            modalRef.componentInstance.soliVeOd = data;
            modalRef.componentInstance.vista = this.vista;
            modalRef.componentInstance.usuarioActivo = this.userAcivo;
        }
    }
    abrirModalParaAdmin(leyenda, data) {
        if (this.userAcivo.role == 'ADMIN' && data.estado == 1 && this.vista == 'listar') {
            this.selectedData = data; // Almacena los datos del registro seleccionado
            const modalRef = this.modalService.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, { size: 'xl', backdrop: 'static' });
            modalRef.componentInstance.leyenda = leyenda; // Pasa la leyenda al componente modal
            modalRef.componentInstance.soliVeOd = data;
            modalRef.componentInstance.vista = this.vista;
            modalRef.componentInstance.usuarioActivo = this.userAcivo;
        }
        else if (this.userAcivo.role == 'ADMIN' && data.estado != 1) {
            this.abrirModalSecre(leyenda, data);
        }
    }
    abrirModalSecre(leyenda, data) {
        const modalRef = this.modalService.open(_modal_secretaria_modal_secretaria_component__WEBPACK_IMPORTED_MODULE_1__.ModalSecretariaComponent, { size: 'xl', backdrop: 'static' });
        modalRef.componentInstance.leyenda = leyenda;
        modalRef.componentInstance.soliVeOd = data;
        modalRef.componentInstance.usuarioActivo = this.userAcivo;
    }
    abrirModalLog(data) {
        this.obtenerLog(data.codigoSolicitudVehiculo).then(() => {
            const modalRef = this.modalService.open(_modal_log_modal_log_component__WEBPACK_IMPORTED_MODULE_3__.ModalLogComponent, { size: 'xl', backdrop: 'static' });
            modalRef.componentInstance.log = this.logSoli;
        });
    }
    obtenerLog(codigoSoliVe) {
        return this.soliService.getLogSoli(codigoSoliVe)
            .then((log) => {
            this.logSoli = log;
        })
            .catch((error) => {
            console.error('Error al obtener el log de la solicitud', error);
        });
    }
    aprobarSolicitud(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if ((yield this.mensajesService.mensajeAprobar()) == true) {
                //await this.actualizarSolicitud(data);
                if (this.userAcivo.role == "JEFE_DEPTO") {
                    yield this.actualizarSolicitud(data);
                }
                else {
                    yield this.actualizarSolicitudDec(data);
                }
            }
        });
    }
    revisionSolicitud(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if ((yield this.mensajesService.mensajeRevision()) == true) {
                data.estado = 6;
                yield this.actualizarSolicitud(data);
            }
        });
    }
    anularSolicitud(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if ((yield this.mensajesService.mensajeAnular()) == true) {
                data.estado = 15;
                yield this.actualizarSolicitud(data);
            }
        });
    }
    actualizarSolicitud(data) {
        return new Promise((resolve, reject) => {
            this.soliService.updateSolciitudVehiculo(data).subscribe({
                next: () => {
                    //resp: any
                    if (this.userAcivo.role == 'ADMIN') {
                        this.soliService.getSolicitudesVehiculo(1);
                    }
                    else {
                        this.soliService.getSolicitudesRol(this.userAcivo.role);
                    }
                    this.enviarEmailAprob('SECR_DECANATO', 'Nueva solicitud de vehículo pendiente', 'Tiene una nueva solicitud de vehículo pendiente de asignar motorista o verificación de la información.');
                    this.mensajesService.mensajesToast("success", "Solicitud aprobada con éxito");
                    resolve();
                },
                error: (error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
                    this.mensajesService.mensajesSweet('error', 'Ups... Algo salió mal', error.error.message);
                    reject(error);
                },
            });
        });
    }
    actualizarSolicitudDec(data) {
        return new Promise((resolve, reject) => {
            this.soliService.updateSolciitudVehiculo(data).subscribe({
                next: () => {
                    // resp: any
                    this.solicitudVale.cantidadVale = 0;
                    this.solicitudVale.estadoEntrada = 1;
                    this.solicitudVale.estado = 8;
                    this.solicitudVale.solicitudVehiculo = data.codigoSolicitudVehiculo;
                    this.soliService.registrarSolicitudVale(this.solicitudVale).subscribe({
                        next: () => {
                            // valeResp: any
                            if (this.userAcivo.role == 'ADMIN') {
                                this.soliService.getSolicitudesVehiculo(3);
                            }
                            else {
                                this.soliService.getSolicitudesRol(this.userAcivo.role);
                            }
                            this.enviarEmailAprob('SECR_DECANATO', 'Nueva solicitud de vehículo pendiente', 'Tiene una nueva solicitud de vehículo pendiente de asignar motorista o verificación de la información.');
                            this.mensajesService.mensajesToast("success", "Solicitud aprobada con éxito");
                            resolve();
                        },
                        error: (errorSoli) => {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
                            this.mensajesService.mensajesSweet('error', 'Ups... Algo salió mal al aprobar la solicitud', errorSoli.error.message);
                            reject(errorSoli);
                        },
                    });
                },
                error: (error) => {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
                    this.mensajesService.mensajesSweet('error', 'Ups... Algo salió mal', error.error.message);
                    reject(error);
                },
            });
        });
    }
    calcularNumeroCorrelativo(index) {
        if (typeof this.p === 'number') {
            return (this.p - 1) * 10 + index + 1;
        }
        else {
            return index + 1; // Si no es numérico, solo regresamos el índice + 1
        }
    }
    /* Metodos del administrador */
    aprobarSolicitudAdmin(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            if ((yield this.mensajesService.mensajeAprobar()) == true) {
                //await this.actualizarSolicitud(data);
                if (data.estado == 1) {
                    yield this.actualizarSolicitud(data);
                }
                else if (data.estado == 3) {
                    yield this.actualizarSolicitudDec(data);
                }
            }
        });
    }
    /* correo */
    enviarEmailAprob(rol, titulo, mensaje) {
        this.emailService.getEmailNameRol(rol).subscribe((datos) => {
            const email = {
                asunto: titulo,
                titulo: titulo,
                email: datos.correo,
                receptor: "Estimad@ " + datos.nombreCompleto + ".",
                mensaje: mensaje,
                centro: 'Por favor ingrese al sistema para ver más detalles tabla',
                abajo: 'Gracias por su atención a este importante mensaje.\nFeliz día!',
            };
            this.emailService.notificarEmail(email);
        }, (error) => {
            console.error('Error al obtener el correo:', error);
        });
    }
}
TablaComponent.ɵfac = function TablaComponent_Factory(t) { return new (t || TablaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_4__.MensajesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_5__.SolicitudVehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_email_service__WEBPACK_IMPORTED_MODULE_6__.EmailService)); };
TablaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TablaComponent, selectors: [["app-tabla"]], inputs: { solicitudesVehiculo: "solicitudesVehiculo", opc: "opc", term: "term", vista: "vista", userAcivo: "userAcivo" }, decls: 24, vars: 4, consts: [[1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle"], [1, "align-middle", 2, "text-align", "center"], [4, "ngIf", "ngIfElse"], ["noDataTemplate", ""], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "nextLabel", "previousLabel", "pageChange"], [4, "ngFor", "ngForOf"], [2, "text-align", "center"], [4, "ngIf"], ["type", "button", "class", "btn btn-primary btn-sm btn-rounded boton-cuadrado mx-1", "ngbTooltip", "M\u00E1s informaci\u00F3n", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-sm btn-rounded boton-cuadrado mx-1", "ngbTooltip", "Aprobar", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm btn-rounded boton-cuadrado mx-1", "ngbTooltip", "Asignar", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-dark btn-sm btn-rounded boton-cuadrado mx-1", "ngbTooltip", "Movimientos", 3, "click", 4, "ngIf"], ["type", "button", "ngbTooltip", "Movimientos", 1, "btn", "btn-dark", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-clock-check-outline"], ["type", "button", "ngbTooltip", "M\u00E1s informaci\u00F3n", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-eye-outline"], ["type", "button", "ngbTooltip", "Aprobar", 1, "btn", "btn-success", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-check-outline"], ["type", "button", "ngbTooltip", "Asignar", 1, "btn", "btn-info", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-book-edit-outline"], ["colspan", "6", 2, "text-align", "center"]], template: function TablaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "No.");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Departamento");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Lugar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Fecha uso");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Personas");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, " Acciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, TablaComponent_ng_container_19_Template, 4, 9, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, TablaComponent_ng_template_20_Template, 3, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "pagination-controls", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("pageChange", function TablaComponent_Template_pagination_controls_pageChange_23_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.solicitudesVehiculo.length > 0)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("nextLabel", "")("previousLabel", "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_7__.Ng2SearchPipe, _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: [".bg-purple[_ngcontent-%COMP%] {\n  background-color: #B79CED;\n  color: white;\n}\n\n.bg-revision[_ngcontent-%COMP%] {\n  background-color: #A6ACAF;\n  color: white;\n}\n\n.bg-prima[_ngcontent-%COMP%] {\n  background-color: blue;\n  color: white;\n}\n\n.bg-esdec[_ngcontent-%COMP%] {\n  background-color: #873600;\n  color: white;\n}\n\n.bg-asignado[_ngcontent-%COMP%] {\n  background-color: #48C9B0;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJ0YWJsYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1wdXJwbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCNzlDRUQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctcmV2aXNpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNBNkFDQUY7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctcHJpbWEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctZXNkZWMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4NzM2MDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uYmctYXNpZ25hZG8ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0OEM5QjA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 39776:
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/pages/listar-admin/listar-admin.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarAdminComponent": () => (/* binding */ ListarAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/solicitud-vehiculo.service */ 88345);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tabla/tabla.component */ 29397);







function ListarAdminComponent_app_tabla_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-tabla", 26);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("solicitudesVehiculo", ctx_r0.listSoliVeData)("userAcivo", ctx_r0.usuario)("vista", "listar")("term", ctx_r0.term);
} }
class ListarAdminComponent {
    constructor(serviceSoliVe) {
        this.serviceSoliVe = serviceSoliVe;
    }
    ngOnInit() {
        this.obtenerUsuarioActivo();
        this.breadCrumbItems = [{ label: 'Solicitud de Vehículo' }, { label: 'Listar', active: true }];
    }
    filtrar(event) {
        this.estadoSeleccionado = event.target.value ? event.target.value : null;
        this.serviceSoliVe.getSolicitudesVehiculo(this.estadoSeleccionado);
    }
    get listSoliVeData() {
        if (this.serviceSoliVe.listSoliVehiculo) {
            return this.serviceSoliVe.listSoliVehiculo;
        }
        else {
            return [];
        }
    }
    obtenerUsuarioActivo() {
        this.serviceSoliVe.getUsuarioSV().subscribe((usuario) => {
            this.usuario = usuario;
        });
    }
}
ListarAdminComponent.ɵfac = function ListarAdminComponent_Factory(t) { return new (t || ListarAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_0__.SolicitudVehiculoService)); };
ListarAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListarAdminComponent, selectors: [["app-listar-admin"]], decls: 37, vars: 3, consts: [[1, "container-fluid"], ["title", "Solicitudes de Veh\u00EDculos", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2", "align-items-end"], [1, "col-sm-4", "col-md-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-4", "col-md-3"], [1, "form-group", "me-2", "mb-2"], ["for", ""], ["id", "exampleCombobox", "aria-label", "Filtro por estado", 1, "form-control", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], ["value", "4"], ["value", "5"], ["value", "6"], ["value", "7"], ["value", "15"], ["aria-label", "Tabla de solicitudes de veh\u00EDculos", 3, "solicitudesVehiculo", "userAcivo", "vista", "term", 4, "ngIf"], ["aria-label", "Tabla de solicitudes de veh\u00EDculos", 3, "solicitudesVehiculo", "userAcivo", "vista", "term"]], template: function ListarAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListarAdminComponent_Template_input_ngModelChange_11_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Filtro por estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function ListarAdminComponent_Template_select_change_17_listener($event) { return ctx.filtrar($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Seleccione...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "En espera por jefe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Aprobado por jefe");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "En espera por decano");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "Aprobada");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Vales Asignados");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Revisi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Finalizadas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Anuladas");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](36, ListarAdminComponent_app_tabla_36_Template, 1, 4, "app-tabla", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.usuario);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_3__.TablaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItYWRtaW4uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 38214:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/pages/listar/listar.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarComponent": () => (/* binding */ ListarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/solicitud-vehiculo.service */ 88345);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/tabla/tabla.component */ 29397);







function ListarComponent_app_tabla_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-tabla", 15);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("solicitudesVehiculo", ctx_r0.listSoliVeData)("userAcivo", ctx_r0.usuario)("vista", "listado")("term", ctx_r0.term);
} }
class ListarComponent {
    constructor(soliVeService, userService) {
        this.soliVeService = soliVeService;
        this.userService = userService;
        this.solicitudesVehiculo = [];
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Solicitud de Vehículo' }, { label: 'Lista', active: true }]; // miga de pan
        this.userService.getUsuario();
        this.obtenerUsuarioActivo();
    }
    obtenerUsuarioActivo() {
        this.soliVeService.getUsuarioSV().subscribe((usuario) => {
            this.usuario = usuario;
            this.soliVeService.getSolicitudesRol(this.usuario.role);
        });
    }
    get usuarioActivo() {
        return this.userService.usuario;
    }
    get listSoliVeData() {
        return this.soliVeService.listSoliVehiculoRol;
    }
    calcularNumeroCorrelativo(index) {
        if (typeof this.p === 'number') {
            return (this.p - 1) * 10 + index + 1;
        }
        else {
            return index + 1; // Si no es numérico, solo regresamos el índice + 1
        }
    }
}
ListarComponent.ɵfac = function ListarComponent_Factory(t) { return new (t || ListarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_0__.SolicitudVehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_1__.UsuarioService)); };
ListarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ListarComponent, selectors: [["app-listar"]], decls: 15, vars: 3, consts: [[1, "container-fluid"], ["title", "Solicitudes de Veh\u00EDculos", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-5"], [1, "text-sm-end"], [3, "solicitudesVehiculo", "userAcivo", "vista", "term", 4, "ngIf"], [3, "solicitudesVehiculo", "userAcivo", "vista", "term"]], template: function ListarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ListarComponent_Template_input_ngModelChange_10_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ListarComponent_app_tabla_14_Template, 1, 4, "app-tabla", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.usuario);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_3__.TablaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6985:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/pages/mis-solicitudes/mis-solicitudes.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MisSolicitudesComponent": () => (/* binding */ MisSolicitudesComponent)
/* harmony export */ });
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal/modal.component */ 37579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/solicitud-vehiculo.service */ 88345);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tabla/tabla.component */ 29397);









function MisSolicitudesComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const estado_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", estado_r2.codigoEstado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](estado_r2.nombreEstado);
} }
function MisSolicitudesComponent_app_tabla_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-tabla", 23);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("solicitudesVehiculo", ctx_r1.listSoliVeData)("userAcivo", ctx_r1.usuario)("vista", "mis-solicitudes")("term", ctx_r1.term);
} }
class MisSolicitudesComponent {
    constructor(soliVeService, modalService, userService) {
        this.soliVeService = soliVeService;
        this.modalService = modalService;
        this.userService = userService;
        this.page = 0;
        this.size = 10;
        this.estadosSoliVe = [];
        this.textSizeClass = '';
    }
    ngOnInit() {
        this.obtenerUsuarioActivo();
        this.breadCrumbItems = [{ label: 'Solicitud de Vehículo' }, { label: 'Mis Solicitudes', active: true }]; // miga de pan
        this.soliVeService.getSolicitudesVehiculo(this.estadoSeleccionado);
        this.getEstados();
        this.setInitialTextSize();
    }
    abrirModal(leyenda) {
        const modalRef = this.modalService.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent, { size: 'xl', backdrop: 'static' });
        modalRef.componentInstance.leyenda = leyenda;
        modalRef.componentInstance.estadoSeleccionado = this.estadoSeleccionado;
        modalRef.componentInstance.usuarioActivo = this.usuarioActivo;
    }
    obtenerUsuarioActivo() {
        // Suscríbete al Observable para obtener el usuario
        this.soliVeService.getUsuarioSV().subscribe((usuario) => {
            this.usuario = usuario;
        });
    }
    get usuarioActivo() {
        return this.userService.usuario;
    }
    get listSoliVeData() {
        return this.soliVeService.listSoliVehiculo;
    }
    onEstadoSeleccionado(event) {
        this.estadoSeleccionado = event.target.value;
        if (this.estadoSeleccionado == 0) {
            this.soliVeService.getSolicitudesVehiculo(null);
        }
        else {
            this.soliVeService.getSolicitudesVehiculo(this.estadoSeleccionado);
        }
    }
    getEstados() {
        this.soliVeService.obtenerEstados().subscribe((resp) => {
            this.estadosSoliVe = resp;
        });
    }
    setInitialTextSize() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 576) { // Extra pequeña
            this.textSizeClass = 'text-xs';
        }
        else if (screenWidth >= 576 && screenWidth < 768) { // Pequeña
            this.textSizeClass = 'text-sm';
        }
        else { // Extra grande
            this.textSizeClass = 'text-xl';
        }
    }
    // Función que se ejecuta cuando cambia el tamaño de la pantalla
    onResize(event) {
        // Llamamos a la función para actualizar el tamaño de texto
        this.setInitialTextSize();
    }
}
MisSolicitudesComponent.ɵfac = function MisSolicitudesComponent_Factory(t) { return new (t || MisSolicitudesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_1__.SolicitudVehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService)); };
MisSolicitudesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MisSolicitudesComponent, selectors: [["app-mis-solicitudes"]], hostBindings: function MisSolicitudesComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("resize", function MisSolicitudesComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresolveWindow"]);
    } }, decls: 25, vars: 8, consts: [[1, "container-fluid"], ["title", "Solicitudes de Veh\u00EDculos", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2", "align-items-end"], [1, "col-sm-4", "col-md-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-4", "col-md-3"], [1, "form-group", "me-2", "mb-2"], ["for", "estadoSeleccionado"], ["id", "estadoSeleccionado", 1, "form-control", "custom-select", "smaller-text", 3, "ngModel", "ngModelChange", "change"], ["disabled", "", "selected", "", 3, "ngValue"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-4", "col-md-5"], [1, "text-sm-end", "me-2", "mb-2"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], [3, "solicitudesVehiculo", "userAcivo", "vista", "term", 4, "ngIf"], [3, "value"], [3, "solicitudesVehiculo", "userAcivo", "vista", "term"]], template: function MisSolicitudesComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MisSolicitudesComponent_Template_input_ngModelChange_10_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Filtro por estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MisSolicitudesComponent_Template_select_ngModelChange_16_listener($event) { return ctx.estadoSeleccionado = $event; })("change", function MisSolicitudesComponent_Template_select_change_16_listener($event) { return ctx.onEstadoSeleccionado($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Seleccione...");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, MisSolicitudesComponent_option_19_Template, 2, 2, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MisSolicitudesComponent_Template_button_click_22_listener() { return ctx.abrirModal("Nueva"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, MisSolicitudesComponent_app_tabla_24_Template, 1, 4, "app-tabla", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx.textSizeClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.estadoSeleccionado);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.estadosSoliVe);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.usuario);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_4__.TablaComponent], styles: [".custom-select[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.custom-select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.65;\n  pointer-events: none;\n}\n.smaller-text[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.text-xs[_ngcontent-%COMP%] {\n  font-size: 10.5px;\n}\n.text-sm[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n}\n.text-xl[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1pcy1zb2xpY2l0dWRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2Q0FBQTtBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdFQUFBO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxvQkFBQTtBQUNGO0FBRUE7RUFDRSxlQUFBO0FBQ0Y7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFDQTtFQUNFLGlCQUFBO0FBRUY7QUFDQTtFQUNFLGVBQUE7QUFFRiIsImZpbGUiOiJtaXMtc29saWNpdHVkZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFamVtcGxvIGRlIGVzdGlsb3MgcGFyYSBlbCBjdXN0b20tc2VsZWN0ICovXHJcbi5jdXN0b20tc2VsZWN0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGNvbG9yOiAjNDk1MDU3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IDAuMTVzIGVhc2UtaW4tb3V0O1xyXG59XHJcblxyXG4uY3VzdG9tLXNlbGVjdDpkaXNhYmxlZCB7XHJcbiAgb3BhY2l0eTogMC42NTtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLnNtYWxsZXItdGV4dCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbi50ZXh0LXhzIHtcclxuICBmb250LXNpemU6IDEwLjVweDtcclxufVxyXG5cclxuLnRleHQtc20ge1xyXG4gIGZvbnQtc2l6ZTogMTEuNXB4O1xyXG59XHJcblxyXG4udGV4dC14bCB7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 98319:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/solicitud-vehiculo-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudVehiculoRoutingModule": () => (/* binding */ SolicitudVehiculoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/listar/listar.component */ 38214);
/* harmony import */ var _pages_mis_solicitudes_mis_solicitudes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mis-solicitudes/mis-solicitudes.component */ 6985);
/* harmony import */ var _pages_listar_admin_listar_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/listar-admin/listar-admin.component */ 39776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);






const routes = [
    {
        path: 'listado',
        component: _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__.ListarComponent,
    },
    {
        path: 'mis-solicitudes',
        component: _pages_mis_solicitudes_mis_solicitudes_component__WEBPACK_IMPORTED_MODULE_1__.MisSolicitudesComponent,
    },
    {
        path: 'listar',
        component: _pages_listar_admin_listar_admin_component__WEBPACK_IMPORTED_MODULE_2__.ListarAdminComponent,
    },
];
class SolicitudVehiculoRoutingModule {
}
SolicitudVehiculoRoutingModule.ɵfac = function SolicitudVehiculoRoutingModule_Factory(t) { return new (t || SolicitudVehiculoRoutingModule)(); };
SolicitudVehiculoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SolicitudVehiculoRoutingModule });
SolicitudVehiculoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SolicitudVehiculoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 36962:
/*!*************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/solicitud-vehiculo.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudVehiculoModule": () => (/* binding */ SolicitudVehiculoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _solicitud_vehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./solicitud-vehiculo-routing.module */ 98319);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/listar/listar.component */ 38214);
/* harmony import */ var _pages_mis_solicitudes_mis_solicitudes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mis-solicitudes/mis-solicitudes.component */ 6985);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 63091);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal/modal.component */ 37579);
/* harmony import */ var _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tabla/tabla.component */ 29397);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _components_modal_secretaria_modal_secretaria_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/modal-secretaria/modal-secretaria.component */ 61473);
/* harmony import */ var _components_modal_log_modal_log_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/modal-log/modal-log.component */ 54059);
/* harmony import */ var _pages_listar_admin_listar_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/listar-admin/listar-admin.component */ 39776);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);
















class SolicitudVehiculoModule {
}
SolicitudVehiculoModule.ɵfac = function SolicitudVehiculoModule_Factory(t) { return new (t || SolicitudVehiculoModule)(); };
SolicitudVehiculoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: SolicitudVehiculoModule });
SolicitudVehiculoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbActiveModal], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _solicitud_vehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__.SolicitudVehiculoRoutingModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](SolicitudVehiculoModule, { declarations: [_pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_1__.ListarComponent,
        _pages_mis_solicitudes_mis_solicitudes_component__WEBPACK_IMPORTED_MODULE_2__.MisSolicitudesComponent,
        _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_5__.ModalComponent,
        _components_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_6__.TablaComponent,
        _components_modal_secretaria_modal_secretaria_component__WEBPACK_IMPORTED_MODULE_7__.ModalSecretariaComponent,
        _components_modal_log_modal_log_component__WEBPACK_IMPORTED_MODULE_8__.ModalLogComponent,
        _pages_listar_admin_listar_admin_component__WEBPACK_IMPORTED_MODULE_9__.ListarAdminComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _solicitud_vehiculo_routing_module__WEBPACK_IMPORTED_MODULE_0__.SolicitudVehiculoRoutingModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_14__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_15__.NgSelectModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_solicitud-vehiculo_solicitud-vehiculo_module_ts.js.map