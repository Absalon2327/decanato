"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_modules_compra_compra_module_ts"],{

/***/ 77301:
/*!******************************************************************************!*\
  !*** ./src/app/modules/compra/components/modal-vale/modal-vale.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalValeComponent": () => (/* binding */ ModalValeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../services/compra.service */ 18798);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-search-filter */ 24352);







function ModalValeComponent_ng_template_2_ng_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ng-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", x_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r3.estadoNombre(x_r5));
} }
function ModalValeComponent_ng_template_2_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", data_r6.correlativo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r4.getClassOf(data_r6.estado));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.estadoNombre(data_r6.estado), "");
} }
function ModalValeComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalValeComponent_ng_template_2_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "ng-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalValeComponent_ng_template_2_Template_ng_select_ngModelChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r10.valorSeleccionado = $event; })("ngModelChange", function ModalValeComponent_ng_template_2_Template_ng_select_ngModelChange_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.getValesSelect(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ModalValeComponent_ng_template_2_ng_option_16_Template, 2, 2, "ng-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ModalValeComponent_ng_template_2_Template_input_ngModelChange_21_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r12.queryVale = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, ModalValeComponent_ng_template_2_div_27_Template, 8, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalValeComponent_ng_template_2_Template_button_click_30_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9); const modal_r2 = restoredCtx.$implicit; return modal_r2.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Detalle de Compra de Vales ", ctx_r1.compra.factura == "" || ctx_r1.compra.factura == null ? "Sin Factura" : ctx_r1.compra.factura, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" C\u00F3digo inicio ", ctx_r1.compra.codInicio, " | C\u00F3digo fin ", ctx_r1.compra.codFin, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.compra.proveedor.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r1.compra.descripcion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectOnTab", true)("ngModel", ctx_r1.valorSeleccionado);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.listEstado);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.queryVale);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Fecha de vencimiento ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](25, 11, ctx_r1.compra.fechaVencimiento, "dd/MM/yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](28, 14, ctx_r1.listValeAux, ctx_r1.queryVale));
} }
class ModalValeComponent {
    constructor(modalService, compraService) {
        this.modalService = modalService;
        this.compraService = compraService;
        this.listVale = [];
        this.listValeAux = [];
        this.listEstado = [8, 5, 9, 10, 11, 12];
    }
    ngOnInit() {
        this.getValesPorCompra(this.compra);
    }
    getValesPorCompra(compra) {
        this.compraService
            .getValesPorCompra(compra.id)
            .subscribe((vales) => {
            this.listVale = vales;
            this.listValeAux = vales;
        });
    }
    getValesSelect() {
        console.log(this.valorSeleccionado);
        this.listValeAux = [];
        if (this.valorSeleccionado != null) {
            this.listVale.forEach((x) => {
                if (this.valorSeleccionado == x.estado) {
                    this.listValeAux.push(x);
                }
            });
        }
        else {
            this.listValeAux = this.listVale;
        }
    }
    estadoNombre(estado) {
        if (estado == 5) {
            return "Asignado";
        }
        else if (estado == 7) {
            return "Finalizada";
        }
        else if (estado == 8) {
            return "Activo";
        }
        else if (estado == 9) {
            return "Inactivo";
        }
        else if (estado == 10) {
            return "Caducado";
        }
        else if (estado == 11) {
            return "Consumido";
        }
        else if (estado == 12) {
            return "Devuelto";
        }
        else if (estado == 15) {
            return "Anulada";
        }
    }
    getClassOf(estado) {
        if (estado == 5) {
            return "badge rounded-pill bg-info";
        }
        else if (estado == 7) {
            return "badge rounded-pill bg-primary";
        }
        else if (estado == 8) {
            return "badge rounded-pill bg-success";
        }
        else if (estado == 9) {
            return "badge rounded-pill bg-danger";
        }
        else if (estado == 10) {
            return "badge rounded-pill bg-light";
        }
        else if (estado == 11) {
            return "badge rounded-pill bg-dark";
        }
        else if (estado == 12) {
            return "badge rounded-pill bg-warning";
        }
        else if (estado == 15) {
            return "badge rounded-pill bg-secondary";
        }
    }
    openModal(content, compra) {
        this.compra = compra;
        this.queryVale = "";
        this.valorSeleccionado = null;
        this.listValeAux = this.listVale;
        const modalOptions = {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false,
            scrollable: true,
        };
        this.modalService.open(content, modalOptions);
    }
}
ModalValeComponent.ɵfac = function ModalValeComponent_Factory(t) { return new (t || ModalValeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_compra_service__WEBPACK_IMPORTED_MODULE_0__.CompraService)); };
ModalValeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalValeComponent, selectors: [["app-modal-vale"]], inputs: { compra: "compra" }, decls: 4, vars: 0, consts: [["type", "button", "ngbTooltip", "Ver Detalle", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-eye-outline"], ["role", "document"], ["content", ""], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "card", "text-center"], [1, "card-header"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "row"], [1, "col-sm-8"], ["placeholder", "Escriba o seleccione un estado de vale", "labelForId", "estado", 3, "selectOnTab", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "text-sm-end"], [1, "search-box", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar Vale...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "card-footer", "text-muted"], ["class", "col-sm-3", 4, "ngFor", "ngForOf"], [1, "modal-footer", "custom-modal"], [1, "btn", "btn-dark", "w-sm", 3, "click"], [3, "value"], [1, "col-sm-3"], [1, "card"], [3, "ngClass"]], template: function ModalValeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalValeComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3); return ctx.openModal(_r0, ctx.compra); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, ModalValeComponent_ng_template_2_Template, 32, 17, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbTooltip, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_4__.NgOptionComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_1__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC12YWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 85124:
/*!********************************************************************!*\
  !*** ./src/app/modules/compra/components/modal/modal.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/constants/constants */ 24017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/compra.service */ 18798);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);












function ModalComponent_ng_template_2_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r30.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_2_div_3_i_1_Template, 1, 0, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r3.siMuestraAlertas());
} }
function ModalComponent_ng_template_2_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_div_6_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const alert_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r34.CambiarAlert(alert_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r32.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](alert_r32.type === "info" ? "Importante!" : "Precauci\u00F3n!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", alert_r32.message, " ");
} }
function ModalComponent_ng_template_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_2_div_6_div_1_Template, 5, 5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", alert_r32.show);
} }
function ModalComponent_ng_template_2_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_ng_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", x_r38.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](x_r38.nombre);
} }
function ModalComponent_ng_template_2_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere un proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere un c\u00F3digo de inicio");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " C\u00F3digo de inicio no puede ser negativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Solamente se permiten numeros enteros ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere un c\u00F3digo de fin");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " C\u00F3digo de fin no puede ser negativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Solamente se permiten numeros enteros");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una cantidad");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Cantidad no puede ser negativa");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Solamente se permiten numeros enteros");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha no valida");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una fecha de vencimiento");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_70_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Fecha no valida");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Precio unitario requerido.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Precio unitario no puede ser negativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Solamente se permiten numeros con dos decimales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_88_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere un total de compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_89_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Total compra no puede ser negativo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Solamente se permiten numeros con dos decimales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Requiere una descripci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_span_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Digite m\u00E1s de 2 caracteres ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_ng_template_2_div_3_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalComponent_ng_template_2_div_6_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ModalComponent_ng_template_2_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r41.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ModalComponent_ng_template_2_div_9_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Proveedor: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "ng-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ModalComponent_ng_template_2_ng_option_16_Template, 2, 2, "ng-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ModalComponent_ng_template_2_span_18_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Factura:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "C\u00F3digo de inicio: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ModalComponent_ng_template_2_Template_input_keyup_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r42.getcantidad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ModalComponent_ng_template_2_span_30_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, ModalComponent_ng_template_2_span_31_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, ModalComponent_ng_template_2_span_32_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "C\u00F3digo de fin: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ModalComponent_ng_template_2_Template_input_keyup_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r43.getcantidad(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, ModalComponent_ng_template_2_span_40_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](41, ModalComponent_ng_template_2_span_41_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, ModalComponent_ng_template_2_span_42_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](45, "Cantidad de vales: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](48, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, ModalComponent_ng_template_2_span_50_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ModalComponent_ng_template_2_span_51_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ModalComponent_ng_template_2_span_52_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Fecha de compra: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](58, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, ModalComponent_ng_template_2_span_60_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, ModalComponent_ng_template_2_span_61_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "label", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Fecha de vencimiento de vales: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](67, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](69, ModalComponent_ng_template_2_span_69_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](70, ModalComponent_ng_template_2_span_70_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Precio unitario ($): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function ModalComponent_ng_template_2_Template_input_keyup_76_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r44.getTotalCompra(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](78, ModalComponent_ng_template_2_span_78_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](79, ModalComponent_ng_template_2_span_79_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](80, ModalComponent_ng_template_2_span_80_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](83, "Total compra ($): ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](86, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](87, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](88, ModalComponent_ng_template_2_span_88_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](89, ModalComponent_ng_template_2_span_89_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](90, ModalComponent_ng_template_2_span_90_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](93, "Descripci\u00F3n: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](95, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](96, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](97, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](98, ModalComponent_ng_template_2_span_98_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](99, ModalComponent_ng_template_2_span_99_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](100, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](101, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](103, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_2_Template_button_click_103_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const modal_r2 = restoredCtx.$implicit; return modal_r2.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_8_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_16_0;
    let tmp_17_0;
    let tmp_18_0;
    let tmp_20_0;
    let tmp_21_0;
    let tmp_22_0;
    let tmp_25_0;
    let tmp_26_0;
    let tmp_29_0;
    let tmp_30_0;
    let tmp_33_0;
    let tmp_34_0;
    let tmp_35_0;
    let tmp_37_0;
    let tmp_38_0;
    let tmp_39_0;
    let tmp_41_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r1.leyenda, " compra de vales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r1.formularioGeneral);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.compra == null ? null : ctx_r1.compra.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("proveedor"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectOnTab", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.listProveedor);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r1.formularioGeneral.get("proveedor")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("codInicio"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r1.aplicarReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r1.formularioGeneral.get("codInicio")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_12_0 = ctx_r1.formularioGeneral.get("codInicio")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx_r1.formularioGeneral.get("codInicio")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("codFin"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r1.aplicarReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_16_0 = ctx_r1.formularioGeneral.get("codFin")) == null ? null : tmp_16_0.errors == null ? null : tmp_16_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_17_0 = ctx_r1.formularioGeneral.get("codFin")) == null ? null : tmp_17_0.errors == null ? null : tmp_17_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx_r1.formularioGeneral.get("codFin")) == null ? null : tmp_18_0.errors == null ? null : tmp_18_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("cantidad"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_20_0 = ctx_r1.formularioGeneral.get("cantidad")) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_21_0 = ctx_r1.formularioGeneral.get("cantidad")) == null ? null : tmp_21_0.errors == null ? null : tmp_21_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_22_0 = ctx_r1.formularioGeneral.get("cantidad")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("fechaCompra"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r1.aplicarReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_25_0 = ctx_r1.formularioGeneral.get("fechaCompra")) == null ? null : tmp_25_0.errors == null ? null : tmp_25_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_26_0 = ctx_r1.formularioGeneral.get("fechaCompra")) == null ? null : tmp_26_0.errors == null ? null : tmp_26_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("fechaVencimiento"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r1.aplicarReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_29_0 = ctx_r1.formularioGeneral.get("fechaVencimiento")) == null ? null : tmp_29_0.errors == null ? null : tmp_29_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_30_0 = ctx_r1.formularioGeneral.get("fechaVencimiento")) == null ? null : tmp_30_0.errors == null ? null : tmp_30_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("precioUnitario"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx_r1.aplicarReadOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_33_0 = ctx_r1.formularioGeneral.get("precioUnitario")) == null ? null : tmp_33_0.errors == null ? null : tmp_33_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_34_0 = ctx_r1.formularioGeneral.get("precioUnitario")) == null ? null : tmp_34_0.errors == null ? null : tmp_34_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_35_0 = ctx_r1.formularioGeneral.get("precioUnitario")) == null ? null : tmp_35_0.errors == null ? null : tmp_35_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("totalCompra"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_37_0 = ctx_r1.formularioGeneral.get("totalCompra")) == null ? null : tmp_37_0.errors == null ? null : tmp_37_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_38_0 = ctx_r1.formularioGeneral.get("totalCompra")) == null ? null : tmp_38_0.errors == null ? null : tmp_38_0.errors["min"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_39_0 = ctx_r1.formularioGeneral.get("totalCompra")) == null ? null : tmp_39_0.errors == null ? null : tmp_39_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r1.esCampoValido("descripcion"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_41_0 = ctx_r1.formularioGeneral.get("descripcion")) == null ? null : tmp_41_0.errors == null ? null : tmp_41_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.formularioGeneral.get("descripcion").hasError("minlength"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.leyenda !== "Editar" ? "Guardar" : "Modificar", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r1.leyenda !== "Editar" ? "Cerrar" : "Cancelar", " ");
} }
class ModalComponent {
    constructor(modalService, fb, compraService, mensajesService, usuarioService) {
        this.modalService = modalService;
        this.fb = fb;
        this.compraService = compraService;
        this.mensajesService = mensajesService;
        this.usuarioService = usuarioService;
        this.isNumber = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_1__.DECIMAL_VALIDATE;
        this.isInteger = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_1__.INTEGER_VALIDATE;
        this.isDate = "";
        this.cantidad = 0;
        this.totalCompra = 0;
        this.aplicarReadOnly = false;
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: " Complete los campos obligatorios (*).",
                show: false,
            },
            {
                id: 2,
                type: "warning",
                message: " Tenga en cuenta que una vez almacenada la información algunas opciones no las podrá modificar y serán datos permanentes.",
                show: false,
            },
        ];
        this.formularioGeneral = this.iniciarFormulario();
    }
    ngOnInit() {
        if (this.leyenda == "Editar") {
            this.codInicio = this.compra.codInicio;
            this.codFin = this.compra.codFin;
            this.precioUnitario = this.compra.precioUnitario;
            this.cantidad = this.compra.cantidad;
            this.totalCompra = this.compra.totalCompra;
            this.aplicarReadOnly = true;
            this.formularioGeneral.patchValue(this.compra);
            this.formularioGeneral.patchValue({
                proveedor: this.compra.proveedor.id,
            });
        }
        this.compraService.getProveedor();
        this.usuarioService.getUsuario();
    }
    iniciarFormulario() {
        return this.fb.group({
            id: [""],
            factura: [""],
            proveedor: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            descripcion: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)]],
            cantidad: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isInteger),
                ],
            ],
            codInicio: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isInteger),
                ],
            ],
            codFin: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isInteger),
                ],
            ],
            fechaCompra: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isDate)]],
            fechaVencimiento: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isDate)],
            ],
            precioUnitario: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isNumber),
                ],
            ],
            totalCompra: [
                "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isNumber),
                ],
            ],
        });
    }
    get listProveedor() {
        const proveedores = [];
        if (this.leyenda == "Editar") {
            proveedores.push(this.compra.proveedor);
        }
        this.compraService.listProveedor.forEach((x) => {
            if (this.leyenda == "Editar") {
                if (x.estado == 8 && x.id != this.compra.proveedor.id) {
                    proveedores.push(x);
                }
            }
            else {
                if (x.estado == 8) {
                    proveedores.push(x);
                }
            }
        });
        return proveedores;
    }
    getcantidad() {
        this.codInicio = this.formularioGeneral.get("codInicio").value;
        this.codFin = this.formularioGeneral.get("codFin").value;
        if (isNaN(this.codInicio) || isNaN(this.codFin)) {
            this.cantidad = null;
        }
        else if (this.codInicio == null || this.codFin == null) {
            this.cantidad = null;
        }
        else {
            this.cantidad = this.codFin + 1 - this.codInicio;
        }
        this.formularioGeneral.controls["cantidad"].setValue(this.cantidad);
        this.getTotalCompra();
    }
    getTotalCompra() {
        this.precioUnitario = this.formularioGeneral.get("precioUnitario").value;
        if (isNaN(this.precioUnitario)) {
            this.totalCompra = null;
        }
        else if (this.precioUnitario == null) {
            this.totalCompra = null;
        }
        else {
            this.totalCompra = this.precioUnitario * this.cantidad;
        }
        this.formularioGeneral.controls["totalCompra"].setValue(this.totalCompra);
    }
    validarfecha(fecha) {
        const inputDate = new Date(fecha);
        if (inputDate.getFullYear() > 999 && inputDate.getFullYear() < 10000) {
            // La fecha es válida y el año tiene 4 dígitos, puedes continuar
            return true;
        }
        else {
            return false;
        }
    }
    validarCodigos() {
        const codInicio = this.formularioGeneral.get("codInicio").value;
        const codFin = this.formularioGeneral.get("codFin").value;
        if (codInicio > codFin) {
            // Error
            return false;
        }
        else {
            return true;
        }
    }
    guardar() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.formularioGeneral.valid) {
                if (this.validarCodigos()) {
                    if (this.validarfecha(this.formularioGeneral.get("fechaCompra").value)) {
                        if (this.validarfecha(this.formularioGeneral.get("fechaVencimiento").value)) {
                            if ((_a = this.compra) === null || _a === void 0 ? void 0 : _a.id) {
                                //Modificar
                                this.editando();
                            }
                            else {
                                if ((yield this.mensajesService.mensajesConfirmar()) == true) {
                                    // Guardar
                                    this.registrando();
                                }
                            }
                        }
                        else {
                            this.mensajesService.mensajesToast("warning", "Año de fecha de vencimiento incorrecto");
                        }
                    }
                    else {
                        this.mensajesService.mensajesToast("warning", "Año de fecha de compra incorrecto");
                    }
                }
                else {
                    this.mensajesService.mensajesToast("warning", "El código de inicio debe ser inferior al código de fin");
                }
            }
            else {
                this.mensajesService.mensajesToast("warning", "Complete los que se indican");
                return Object.values(this.formularioGeneral.controls).forEach((control) => control.markAsTouched());
            }
        });
    }
    registrando() {
        const compra = this.formularioGeneral.value;
        const idusuariologueado = this.usuarioService.usuario.codigoUsuario;
        // Crear una variable para la alerta de carga
        let loadingAlert;
        // Mostrar SweetAlert de carga
        loadingAlert = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Espere un momento!",
            html: "Se está procesando la información...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
            },
        });
        return new Promise((resolve, reject) => {
            this.compraService.guardar(compra, idusuariologueado).subscribe({
                next: (resp) => {
                    // Cerrar SweetAlert de carga
                    loadingAlert.close();
                    this.compraService.getCompras();
                    this.modalService.dismissAll();
                    this.limpiarCampos();
                    this.mensajesService.mensajesToast("success", "Registro agregado");
                    resolve(); // Resuelve la promesa sin argumentos
                },
                error: (err) => {
                    // Cerrar SweetAlert de carga
                    loadingAlert.close();
                    this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
                    reject(err); // Rechaza la promesa con el error
                },
            });
        });
    }
    editando() {
        const compra = this.formularioGeneral.value;
        // Crear una variable para la alerta de carga
        let loadingAlert;
        // Mostrar SweetAlert de carga
        loadingAlert = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            title: "Espere un momento!",
            html: "Se está procesando la información...",
            allowOutsideClick: false,
            allowEscapeKey: false,
            showCancelButton: false,
            showConfirmButton: false,
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().showLoading();
            },
        });
        this.compraService.modificar(compra).subscribe({
            next: (resp) => {
                // Cerrar SweetAlert de carga
                loadingAlert.close();
                this.compraService.getCompras();
                this.modalService.dismissAll();
                this.limpiarCampos();
                this.mensajesService.mensajesToast("success", "Registro modificado");
            },
            error: (err) => {
                // Cerrar SweetAlert de carga
                loadingAlert.close();
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
            },
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formularioGeneral.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    limpiarCampos() {
        this.codInicio = null;
        this.codFin = null;
        this.cantidad = null;
        this.precioUnitario = null;
        this.totalCompra = null;
        this.formularioGeneral.reset();
    }
    getClassOf() {
        if (this.leyenda == "Editar") {
            return "btn btn-info btn-sm btn-rounded boton-cuadrado mx-1";
        }
        else {
            return "btn-primary";
        }
    }
    getIconsOf() {
        if (this.leyenda == "Editar") {
            return "<i class='mdi mdi-18px mdi-book-edit-outline'></i>";
        }
        else {
            return "Agregar";
        }
    }
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
    openModal(content, compra) {
        this.compra = compra;
        if (this.leyenda != "Editar") {
            this.limpiarCampos();
        }
        const modalOptions = {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false, // Configura backdrop como 'static'
        };
        this.modalService.open(content, modalOptions);
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_compra_service__WEBPACK_IMPORTED_MODULE_2__.CompraService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_3__.MensajesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { compra: "compra", leyenda: "leyenda" }, decls: 4, vars: 3, consts: [["type", "button", 1, "btn", "btn-rounded", 3, "ngClass", "innerHTML", "click"], ["role", "document"], ["content", ""], [1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [4, "ngFor", "ngForOf"], ["id", "formCompra", "name", "formCompra", 3, "formGroup", "ngSubmit"], [1, "row"], [4, "ngIf"], [1, "mb-4", "col-md-6"], ["for", "proveedor"], [1, "text-danger"], ["formControlName", "proveedor", "placeholder", "Escriba o seleccione", "labelForId", "proveedor", 3, "selectOnTab"], [3, "value", 4, "ngFor", "ngForOf"], [1, "invalid-feedback"], ["for", "factura"], ["id", "factura", "name", "factura", "maxlength", "100", "type", "text", "placeholder", "Factura", "formControlName", "factura", 1, "form-control"], ["for", "codInicio"], ["id", "codInicio", "name", "codInicio", "type", "number", "min", "0", "formControlName", "codInicio", "placeholder", "C\u00F3digo inicio", 1, "form-control", 3, "readonly", "keyup"], ["for", "codFin"], ["id", "codFin", "name", "codInicio", "type", "number", "formControlName", "codFin", "min", "0", "placeholder", "C\u00F3digo de fin", 1, "form-control", 3, "readonly", "keyup"], ["for", "cantidad"], ["id", "cantidad", "name", "cantidad", "type", "text", "readonly", "true", "formControlName", "cantidad", "placeholder", "Cantidad", 1, "form-control"], ["for", "fechaCompra"], ["id", "fechaCompra", "name", "fechaCompra", "type", "datetime-local", "placeholder", "dd/MM/yyyy HH:mm", "formControlName", "fechaCompra", 1, "form-control", 3, "readonly"], ["for", "fechaVencimiento"], ["id", "fechaVencimiento", "name", "fechaVencimiento", "type", "date", "placeholder", "dd/MM/yyyy", "formControlName", "fechaVencimiento", 1, "form-control", 3, "readonly"], ["for", "precioUnitario"], ["id", "precioUnitario", "name", "precioUnitario", "type", "number", "min", "0", "placeholder", "Precio unitario", "formControlName", "precioUnitario", 1, "form-control", 3, "readonly", "keyup"], ["for", "totalCompra"], ["id", "totalCompra", "name", "totalCompra", "type", "text", "readonly", "true", "formControlName", "totalCompra", "placeholder", "Total compra", 1, "form-control"], ["for", "descripcion"], ["row", "3", "maxlength", "750", "placeholder", "Descripci\u00F3n", "formControlName", "descripcion", 1, "form-control"], [1, "modal-footer", "custom-modal"], ["type", "submit", "form", "formCompra", 1, "btn", "btn-primary", "w-sm", "me-2"], [1, "btn", "btn-dark", "w-sm", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["id", "id", "name", "id", "type", "hidden", "readonly", "true", "formControlName", "id", 1, "form-control"], [3, "value"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r46); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](3); return ctx.openModal(_r0, ctx.compra); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_ng_template_2_Template, 105, 54, "ng-template", 1, 2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx.getClassOf())("innerHTML", ctx.getIconsOf(), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.leyenda, "\n");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbTooltip, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__.NgOptionComponent], styles: ["ng-select.is-invalid[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px #f46a6a;\n  border-radius: 0.25rem;\n}\n\nng-select.is-valid[_ngcontent-%COMP%] {\n  box-shadow: 0 0 0 1px #34c38f;\n  border-radius: 0.25rem;\n}\n\nbutton.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5nLXNlbGVjdC5pcy1pbnZhbGlkIHtcclxuICBib3gtc2hhZG93OiAwIDAgMCAxcHggI2Y0NmE2YTtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG5uZy1zZWxlY3QuaXMtdmFsaWQge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDFweCAjMzRjMzhmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbn1cclxuXHJcbmJ1dHRvbi5idG4tY2xvc2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDVweDtcclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 71758:
/*!*********************************************************!*\
  !*** ./src/app/modules/compra/compra-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompraRoutingModule": () => (/* binding */ CompraRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/mostrar/mostrar.component */ 49883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    {
        path: '',
        component: _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_0__.MostrarComponent
    }
];
class CompraRoutingModule {
}
CompraRoutingModule.ɵfac = function CompraRoutingModule_Factory(t) { return new (t || CompraRoutingModule)(); };
CompraRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CompraRoutingModule });
CompraRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CompraRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 67270:
/*!*************************************************!*\
  !*** ./src/app/modules/compra/compra.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompraModule": () => (/* binding */ CompraModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _compra_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compra-routing.module */ 71758);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal/modal.component */ 85124);
/* harmony import */ var _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/mostrar/mostrar.component */ 49883);
/* harmony import */ var _pages_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/tabla/tabla.component */ 56456);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ 50011);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var _components_modal_vale_modal_vale_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/modal-vale/modal-vale.component */ 77301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);













class CompraModule {
}
CompraModule.ɵfac = function CompraModule_Factory(t) { return new (t || CompraModule)(); };
CompraModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CompraModule });
CompraModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _compra_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompraRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UIModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CompraModule, { declarations: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent,
        _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_2__.MostrarComponent,
        _pages_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_3__.TablaComponent,
        _components_modal_vale_modal_vale_component__WEBPACK_IMPORTED_MODULE_6__.ModalValeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _compra_routing_module__WEBPACK_IMPORTED_MODULE_0__.CompraRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_4__.UIModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipeModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__.NgSelectModule] }); })();


/***/ }),

/***/ 49883:
/*!*******************************************************************!*\
  !*** ./src/app/modules/compra/pages/mostrar/mostrar.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarComponent": () => (/* binding */ MostrarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_compra_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/compra.service */ 18798);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/modal/modal.component */ 85124);
/* harmony import */ var _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tabla/tabla.component */ 56456);







class MostrarComponent {
    constructor(compraService) {
        this.compraService = compraService;
        this.offset = 0;
        this.term = '';
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Compra' }, { label: 'Mostrar', active: true }];
        this.compraService.getCompras();
    }
    get listDatos() {
        return this.compraService.listCompra;
    }
}
MostrarComponent.ɵfac = function MostrarComponent_Factory(t) { return new (t || MostrarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_compra_service__WEBPACK_IMPORTED_MODULE_0__.CompraService)); };
MostrarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MostrarComponent, selectors: [["app-mostrar"]], decls: 17, vars: 5, consts: [[1, "container-fluid"], ["title", "Compras", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-4"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "col-sm-8"], [1, "text-sm-end"], [3, "leyenda"], [3, "compras", "queryString"]], template: function MostrarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function MostrarComponent_Template_input_ngModelChange_11_listener($event) { return ctx.term = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "app-modal", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](16, "app-tabla", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.term);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("leyenda", "Agregar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("compras", ctx.listDatos)("queryString", ctx.term);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _tabla_tabla_component__WEBPACK_IMPORTED_MODULE_4__.TablaComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3N0cmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 56456:
/*!***************************************************************!*\
  !*** ./src/app/modules/compra/pages/tabla/tabla.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaComponent": () => (/* binding */ TablaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var _components_modal_vale_modal_vale_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal-vale/modal-vale.component */ 77301);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/modal/modal.component */ 85124);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);






function TablaComponent_tr_19_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " N/A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function TablaComponent_tr_19_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", data_r2.factura, " ");
} }
function TablaComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TablaComponent_tr_19_ng_container_1_Template, 4, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, TablaComponent_tr_19_ng_template_2_Template, 3, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "app-modal-vale", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r2.factura == null || data_r2.factura == "")("ngIfElse", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r2.proveedor.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 10, data_r2.fechaCompra, "dd/MM/yyyy h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r2.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](13, 13, data_r2.precioUnitario, "USD", "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind4"](16, 18, data_r2.totalCompra, "USD", "symbol", "1.2-2"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("compra", data_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("compra", data_r2)("leyenda", "Editar");
} }
function TablaComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " No hay datos para mostrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class TablaComponent {
    constructor() { }
    ngOnInit() {
    }
}
TablaComponent.ɵfac = function TablaComponent_Factory(t) { return new (t || TablaComponent)(); };
TablaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TablaComponent, selectors: [["app-tabla"]], inputs: { compras: "compras", queryString: "queryString" }, decls: 25, vars: 12, consts: [[1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle"], [1, "align-middle", "text-center"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "nextLabel", "previousLabel", "pageChange"], [4, "ngIf", "ngIfElse"], ["factura", ""], [1, "align-middle", "text-center", "text-center"], [3, "compra"], [3, "compra", "leyenda"], [1, "text-body", "fw-bold"], ["colspan", "11", 2, "text-align", "center"]], template: function TablaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Factura");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Proveedor");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Fecha de compra");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Cantidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Prec. Unit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, TablaComponent_tr_19_Template, 20, 23, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](21, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, TablaComponent_tr_22_Template, 3, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "pagination-controls", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function TablaComponent_Template_pagination_controls_pageChange_24_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](20, 4, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](21, 7, ctx.compras, ctx.queryString), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.compras.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("nextLabel", "")("previousLabel", "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent, _components_modal_vale_modal_vale_component__WEBPACK_IMPORTED_MODULE_0__.ModalValeComponent, _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CurrencyPipe], styles: ["@charset \"UTF-8\";\ntd[_ngcontent-%COMP%] {\n  white-space: normal;\n  \n  max-width: 300px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLG1CQUFBO0VBQXFCLHVDQUFBO0VBQ3JCLGdCQUFBO0VBQWtCLCtDQUFBO0FBSXBCIiwiZmlsZSI6InRhYmxhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xudGQge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAvKiBGb3J6YXIgc2FsdG9zIGRlIGzDrW5lYSBlbiBlbCB0ZXh0byAqL1xuICBtYXgtd2lkdGg6IDMwMHB4O1xuICAvKiBFc3RhYmxlY2VyIHVuIGFuY2hvIG3DoXhpbW8gcGFyYSBsYSBjb2x1bW5hICovXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_compra_compra_module_ts.js.map