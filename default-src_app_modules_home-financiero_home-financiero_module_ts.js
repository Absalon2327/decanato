"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["default-src_app_modules_home-financiero_home-financiero_module_ts"],{

/***/ 45183:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/home-financiero/components/grafica-compra/grafica-compra.component.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GraficaCompraComponent": () => (/* binding */ GraficaCompraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ 10702);


class GraficaCompraComponent {
    constructor() {
        this.chartData = [];
        this.chartLabels = ["Total Compra ($)"];
        this.chartLegend = true;
        this.chartPlugins = [];
        this.chartOptions = {
            responsive: true,
            title: {
                display: false,
                //text: "Título de la Gráfica",
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                            callback: function (value, index, values) {
                                // Formatear el valor como moneda
                                return "$" + value.toFixed(2);
                            },
                        },
                    },
                ],
            },
        };
    }
    ngOnInit() { }
}
GraficaCompraComponent.ɵfac = function GraficaCompraComponent_Factory(t) { return new (t || GraficaCompraComponent)(); };
GraficaCompraComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GraficaCompraComponent, selectors: [["app-grafica-compra"]], inputs: { chartData: "chartData" }, decls: 2, vars: 5, consts: [[2, "display", "block"], ["baseChart", "", "chartType", "bar", 3, "datasets", "labels", "options", "plugins", "legend"]], template: function GraficaCompraComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.chartData)("labels", ctx.chartLabels)("options", ctx.chartOptions)("plugins", ctx.chartPlugins)("legend", ctx.chartLegend);
    } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__.BaseChartDirective], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFmaWNhLWNvbXByYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 11584:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/home-financiero/components/modal-compra/modal-compra.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalCompraComponent": () => (/* binding */ ModalCompraComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-search-filter */ 24352);





function ModalCompraComponent_ng_template_3_tr_22_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " N/A ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function ModalCompraComponent_ng_template_3_tr_22_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", data_r5.factura, " ");
} }
function ModalCompraComponent_ng_template_3_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ModalCompraComponent_ng_template_3_tr_22_ng_container_1_Template, 4, 0, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ModalCompraComponent_ng_template_3_tr_22_ng_template_2_Template, 3, 1, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](16, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", data_r5.factura == null || data_r5.factura == "")("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.proveedor.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 7, data_r5.fechaCompra, "dd/MM/yyyy h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r5.cantidad);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](13, 10, data_r5.precioUnitario, "USD", "symbol", "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind4"](16, 15, data_r5.totalCompra, "USD", "symbol", "1.2-2"), " ");
} }
function ModalCompraComponent_ng_template_3_tr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " No hay datos para mostrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
function ModalCompraComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCompraComponent_ng_template_3_Template_button_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const modal_r2 = restoredCtx.$implicit; return modal_r2.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "thead", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Factura");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Proveedor");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Fecha de compra");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Cant. de vales");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Prec. Unit.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, ModalCompraComponent_ng_template_3_tr_22_Template, 17, 20, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](23, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ModalCompraComponent_ng_template_3_tr_25_Template, 3, 0, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "pagination-controls", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ModalCompraComponent_ng_template_3_Template_pagination_controls_pageChange_27_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.p = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCompraComponent_ng_template_3_Template_button_click_29_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const modal_r2 = restoredCtx.$implicit; return modal_r2.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Cerrar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Compra de Vales en ", ctx_r1.texto, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](23, 5, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](24, 8, ctx_r1.compras, ctx_r1.queryString), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c0, ctx_r1.p)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.compras.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("nextLabel", "")("previousLabel", "");
} }
class ModalCompraComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
    openModal(content, compras) {
        this.compras = compras;
        const modalOptions = {
            centered: true,
            size: "lg",
            backdrop: "static",
            keyboard: false, // Configura backdrop como 'static'
        };
        this.modalService.open(content, modalOptions);
    }
}
ModalCompraComponent.ɵfac = function ModalCompraComponent_Factory(t) { return new (t || ModalCompraComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
ModalCompraComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ModalCompraComponent, selectors: [["app-modal-compra"]], inputs: { compras: "compras", texto: "texto", queryString: "queryString" }, decls: 5, vars: 0, consts: [["type", "button", 1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "mdi", "mdi-arrow-right", "ms-1"], ["role", "document"], ["content", ""], [1, "modal-header"], [1, "modal-title", "mt-0"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "nextLabel", "previousLabel", "pageChange"], [1, "modal-footer", "custom-modal"], [1, "btn", "btn-dark", "w-sm", 3, "click"], [4, "ngIf", "ngIfElse"], ["factura", ""], [1, "text-body", "fw-bold"], ["colspan", "11", 2, "text-align", "center"]], template: function ModalCompraComponent_Template(rf, ctx) { if (rf & 1) {
        const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ModalCompraComponent_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); return ctx.openModal(_r0, ctx.compras); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Ver Detalle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ModalCompraComponent_ng_template_3_Template, 31, 13, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_0__.Ng2SearchPipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CurrencyPipe], styles: ["@charset \"UTF-8\";\ntd[_ngcontent-%COMP%] {\n  white-space: normal;\n  \n  max-width: 300px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWNvbXByYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxtQkFBQTtFQUFxQix1Q0FBQTtFQUNyQixnQkFBQTtFQUFrQiwrQ0FBQTtBQUlwQiIsImZpbGUiOiJtb2RhbC1jb21wcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG50ZCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIC8qIEZvcnphciBzYWx0b3MgZGUgbMOtbmVhIGVuIGVsIHRleHRvICovXG4gIG1heC13aWR0aDogMzAwcHg7XG4gIC8qIEVzdGFibGVjZXIgdW4gYW5jaG8gbcOheGltbyBwYXJhIGxhIGNvbHVtbmEgKi9cbn0iXX0= */"] });


/***/ }),

/***/ 33180:
/*!***************************************************************************!*\
  !*** ./src/app/modules/home-financiero/home-financiero-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeFinancieroRoutingModule": () => (/* binding */ HomeFinancieroRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/mostrar/mostrar.component */ 9056);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    {
        path: '',
        component: _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_0__.MostrarComponent
    }
];
class HomeFinancieroRoutingModule {
}
HomeFinancieroRoutingModule.ɵfac = function HomeFinancieroRoutingModule_Factory(t) { return new (t || HomeFinancieroRoutingModule)(); };
HomeFinancieroRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeFinancieroRoutingModule });
HomeFinancieroRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeFinancieroRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 63303:
/*!*******************************************************************!*\
  !*** ./src/app/modules/home-financiero/home-financiero.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeFinancieroModule": () => (/* binding */ HomeFinancieroModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _home_financiero_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-financiero-routing.module */ 33180);
/* harmony import */ var _pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/mostrar/mostrar.component */ 9056);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/widget/widget.module */ 57337);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/layouts/layouts.module */ 31472);
/* harmony import */ var _components_modal_compra_modal_compra_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal-compra/modal-compra.component */ 11584);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _components_grafica_compra_grafica_compra_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/grafica-compra/grafica-compra.component */ 45183);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ 10702);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);














class HomeFinancieroModule {
}
HomeFinancieroModule.ɵfac = function HomeFinancieroModule_Factory(t) { return new (t || HomeFinancieroModule)(); };
HomeFinancieroModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: HomeFinancieroModule });
HomeFinancieroModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
            _home_financiero_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeFinancieroRoutingModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_2__.WidgetModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__.Ng2SearchPipeModule,
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__.LayoutsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_13__.ChartsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](HomeFinancieroModule, { declarations: [_pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_1__.MostrarComponent,
        _components_modal_compra_modal_compra_component__WEBPACK_IMPORTED_MODULE_5__.ModalCompraComponent,
        _components_grafica_compra_grafica_compra_component__WEBPACK_IMPORTED_MODULE_7__.GraficaCompraComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule,
        _home_financiero_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeFinancieroRoutingModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_2__.WidgetModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__.NgApexchartsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_12__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__.Ng2SearchPipeModule,
        src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_4__.LayoutsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_13__.ChartsModule], exports: [_pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_1__.MostrarComponent] }); })();


/***/ }),

/***/ 9056:
/*!****************************************************************************!*\
  !*** ./src/app/modules/home-financiero/pages/mostrar/mostrar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MostrarComponent": () => (/* binding */ MostrarComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _services_home_financiero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/home-financiero.service */ 19135);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/widget/stat/stat.component */ 55990);
/* harmony import */ var _components_modal_compra_modal_compra_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/modal-compra/modal-compra.component */ 11584);
/* harmony import */ var _components_grafica_compra_grafica_compra_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/grafica-compra/grafica-compra.component */ 45183);










class MostrarComponent {
    constructor(homeFinancieroService, datePipe, mensajesService) {
        this.homeFinancieroService = homeFinancieroService;
        this.datePipe = datePipe;
        this.mensajesService = mensajesService;
        this.storage = window.localStorage;
        this.listCompra = [];
        this.logVales = [];
        //grafica Compra
        this.chartData = [];
    }
    ngOnInit() {
        this.cargarComprasPorRangoDeFechas();
        this.getcatidadValesPorEstado();
        this.getcatidadSolicitudesPorEstado();
        this.obtenerLogValesPorEstado(5);
        this.texto = "Este Mes";
    }
    formatDate(date) {
        const fecha = new Date(date);
        return this.datePipe.transform(fecha, "dd/MM/yyyy") || "";
    }
    formatDateCompleto(date) {
        const fecha = new Date(date);
        return this.datePipe.transform(fecha, "dd/MM/yy HH:mm") || "";
    }
    get empleado() {
        const usuarioString = this.storage.getItem("usuario");
        if (usuarioString) {
            const usuarioObj = JSON.parse(usuarioString);
            return usuarioObj.empleado;
        }
        return null;
    }
    get fotoempleado() {
        const foto = this.storage.getItem("empleadoFoto");
        if (foto) {
            return foto;
        }
        return "./../../../assets/images/Default-Avatar.png";
    }
    mostrarEsteMes() {
        this.cargarComprasPorRangoDeFechas();
        this.texto = "Este Mes";
    }
    cargarComprasPorRangoDeFechas(fechaInicial = "", fechaFinal = "") {
        // Define las fechas que deseas consultar
        this.homeFinancieroService
            .getListarPorRangoDeFechas(fechaInicial, fechaFinal)
            .subscribe((compras) => {
            this.listCompra = compras;
            this.graficar();
            this.montoGenerado = this.cantidaGenerada = 0;
            this.listCompra.forEach((x) => {
                this.montoGenerado += x.totalCompra;
            });
            this.cantidaGenerada = this.listCompra.length;
        });
    }
    mostrarIntervaloFechas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const { value: formValues, dismiss } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: "Selecciona un intervalo de fechas",
                confirmButtonColor: "#972727",
                confirmButtonText: "Generar",
                html: '<input type="date" id="swal-input1" class="swal2-input">' +
                    '<input type="date" id="swal-input2" class="swal2-input">',
                focusConfirm: false,
                preConfirm: () => {
                    const fechaInicio = (document.querySelector("#swal-input1")).value;
                    const fechaFin = (document.querySelector("#swal-input2")).value;
                    return [fechaInicio, fechaFin];
                },
            });
            if (dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.esc) ||
                dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.close) ||
                dismiss === (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().DismissReason.backdrop)) {
                // El usuario cerró la ventana modal sin confirmar los valores
                return;
            }
            if (formValues &&
                formValues[0] &&
                formValues[1] &&
                formValues[0] < formValues[1]) {
                this.fechaInicio = formValues[0];
                this.fechaFin = formValues[1];
                this.cargarComprasPorRangoDeFechas(this.fechaInicio, this.fechaFin);
                this.texto =
                    "Intervalo del " +
                        this.formatDate(this.fechaInicio) +
                        " Al " +
                        this.formatDate(this.fechaFin);
            }
            else if (formValues[0] > formValues[1]) {
                this.mensajesService.mensajesToast("warning", "Fecha inicio superior a la fecha fin.");
            }
            else {
                this.mensajesService.mensajesToast("warning", "Debe seleccionar ambas fechas.");
            }
        });
    }
    graficar() {
        this.chartData = this.listCompra.map((compra) => ({
            data: [compra.totalCompra],
            label: this.formatDateCompleto(compra.fechaCompra),
        }));
    }
    getcatidadValesPorEstado() {
        this.homeFinancieroService
            .getCantidadValesPorEstado(8)
            .subscribe((cantidad) => {
            this.valesActivos = cantidad;
        });
        this.homeFinancieroService
            .getCantidadValesPorEstado(5)
            .subscribe((cantidad) => {
            this.ValesAsignados = cantidad;
        });
    }
    obtenerLogValesPorEstado(estado) {
        this.homeFinancieroService
            .obtenerLogValesPorEstadoYMes(estado)
            .subscribe((logvales) => {
            this.logVales = logvales;
            this.cantidadLogVale = this.logVales.length;
        });
    }
    getcatidadSolicitudesPorEstado() {
        this.homeFinancieroService
            .getCantidadSolicitudesPorEstado(8)
            .subscribe((cantidad) => {
            this.soliNuevas = cantidad;
        });
        this.homeFinancieroService
            .getCantidadSolicitudesPorEstado(1)
            .subscribe((cantidad) => {
            this.soliPorAprobar = cantidad;
        });
    }
}
MostrarComponent.ɵfac = function MostrarComponent_Factory(t) { return new (t || MostrarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_home_financiero_service__WEBPACK_IMPORTED_MODULE_1__.HomeFinancieroService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__.MensajesService)); };
MostrarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MostrarComponent, selectors: [["app-mostrar"]], decls: 60, vars: 30, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "col-xl-12"], [1, "col-md-3"], [3, "title", "value", "icon"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], [1, "card-title", "mb-4"], [1, "col-sm-7"], [1, "text-muted"], [1, "text-success", "mr-2"], [1, "mdi", "mdi-arrow-up"], [1, "mt-4"], ["role", "group", "aria-label", "Basic mixed styles example", 1, "btn-group", "btn-group-sm"], ["type", "radio", "name", "tipo", "id", "tipo1", "autocomplete", "off", "checked", "", 1, "btn-check", 3, "value", "click"], ["for", "tipo1", 1, "btn", "btn-outline-dark"], ["type", "radio", "name", "tipo", "id", "tipo2", "autocomplete", "off", 1, "btn-check", 3, "value", "click"], ["for", "tipo2", 1, "btn", "btn-outline-primary"], [3, "compras", "texto"], [1, "col-sm-5"], ["src", "assets/images/financiero/Money income-pana.png", "alt", "", 1, "img-fluid"], [1, "col-xl-8"], [1, "d-sm-flex", "flex-wrap"], [3, "chartData"]], template: function MostrarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Bienvenid@ al sistema");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Compras");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](34, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_Template_input_click_42_listener() { return ctx.mostrarEsteMes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](43, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](44, "Este Mes");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MostrarComponent_Template_input_click_45_listener() { return ctx.mostrarIntervaloFechas(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](47, "Intervalo");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](49, "app-modal-compra", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](52, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "h4", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](59, "app-grafica-compra", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Vales disponibles")("value", ctx.valesActivos)("icon", "mdi mdi-checkbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Vales asignados")("value", ctx.ValesAsignados)("icon", "dripicons-pulse");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Solicitudes nuevas")("value", ctx.soliNuevas)("icon", "mdi mdi-plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Solicitudes por aprobar")("value", ctx.soliPorAprobar)("icon", "mdi mdi-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.texto);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind4"](34, 25, ctx.montoGenerado, "USD", "symbol", "1.2-2"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.cantidaGenerada, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.cantidaGenerada == 1 ? "Compra" : "Compras", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("compras", ctx.listCompra)("texto", ctx.texto);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", "Vales consumidos este mes")("value", ctx.cantidadLogVale)("icon", "mdi mdi-card-bulleted-off");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Total de Compras en ", ctx.texto, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("chartData", ctx.chartData);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_4__.StatComponent, _components_modal_compra_modal_compra_component__WEBPACK_IMPORTED_MODULE_5__.ModalCompraComponent, _components_grafica_compra_grafica_compra_component__WEBPACK_IMPORTED_MODULE_6__.GraficaCompraComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CurrencyPipe], styles: [".image-container[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto;\n  position: relative;\n  margin-top: -46px;\n  border: 4px solid white;\n  z-index: 1;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vc3RyYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFDSiIsImZpbGUiOiJtb3N0cmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDkwcHg7IC8vIEFuY2hvIGRlc2VhZG8gcGFyYSBsYSBpbWFnZW5cclxuICBoZWlnaHQ6IDkwcHg7IC8vIEFsdG8gZGVzZWFkbyBwYXJhIGxhIGltYWdlblxyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlOyAvLyBIYWNlIHF1ZSBsYSBpbWFnZW4gc2VhIHJlZG9uZGFcclxuICBtYXJnaW46IDAgYXV0bzsgLy8gQ2VudHJhIGxhIGltYWdlbiBob3Jpem9udGFsbWVudGVcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogLTQ2cHg7XHJcbiAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ 19135:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/home-financiero/services/home-financiero.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeFinancieroService": () => (/* binding */ HomeFinancieroService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);





class HomeFinancieroService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    getListarPorRangoDeFechas(fechaInicial, fechaFinal) {
        // Crear un objeto HttpParams para agregar los parámetros en la solicitud
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams()
            .set("fechaInicial", fechaInicial)
            .set("fechaFinal", fechaFinal);
        return this.http
            .get(`${this.baseUrl}/compra/listarPorRangoDeFechas`, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp));
    }
    getCantidadValesPorEstado(estado) {
        return this.http
            .get(`${this.baseUrl}/vale/cantidadvalesporestado/${estado}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp));
    }
    getCantidadSolicitudesPorEstado(estado) {
        return this.http
            .get(`${this.baseUrl}/asignacionvale/solicivaleEstado/${estado}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp));
    }
    obtenerLogValesPorEstadoYMes(estado) {
        return this.http.get(`${this.baseUrl}/logVale/montovalesconsumidosporestado/${estado}`);
    }
}
HomeFinancieroService.ɵfac = function HomeFinancieroService_Factory(t) { return new (t || HomeFinancieroService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
HomeFinancieroService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: HomeFinancieroService, factory: HomeFinancieroService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_home-financiero_home-financiero_module_ts.js.map