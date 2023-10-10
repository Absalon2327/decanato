"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_modules_cargo_cargo_module_ts"],{

/***/ 74270:
/*!*******************************************************!*\
  !*** ./src/app/modules/cargo/cargo-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargoRoutingModule": () => (/* binding */ CargoRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/listar/listar.component */ 35773);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [{ path: 'listar', component: _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__.ListarComponent }];
class CargoRoutingModule {
}
CargoRoutingModule.ɵfac = function CargoRoutingModule_Factory(t) { return new (t || CargoRoutingModule)(); };
CargoRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CargoRoutingModule });
CargoRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CargoRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 59615:
/*!***********************************************!*\
  !*** ./src/app/modules/cargo/cargo.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargoModule": () => (/* binding */ CargoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _cargo_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cargo-routing.module */ 74270);
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/modal/modal.component */ 51831);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/listar/listar.component */ 35773);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);











class CargoModule {
}
CargoModule.ɵfac = function CargoModule_Factory(t) { return new (t || CargoModule)(); };
CargoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: CargoModule });
CargoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _cargo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CargoRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](CargoModule, { declarations: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent,
        _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_2__.ListarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _cargo_routing_module__WEBPACK_IMPORTED_MODULE_0__.CargoRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_3__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipeModule] }); })();


/***/ }),

/***/ 51831:
/*!*******************************************************************!*\
  !*** ./src/app/modules/cargo/components/modal/modal.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_cargoservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/cargoservice */ 97966);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);









function ModalComponent_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalComponent_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r8.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function ModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModalComponent_div_3_i_1_Template, 1, 0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.siMuestraAlertas());
} }
function ModalComponent_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Importante!");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalComponent_div_7_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const alert_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.CambiarAlert(alert_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r10.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", alert_r10.message, " ");
} }
function ModalComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ModalComponent_div_7_div_1_Template, 5, 4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", alert_r10.show);
} }
const _c0 = function () { return { color: "tomato", "font-size": "12" }; };
function ModalComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "*El campo Nombre es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
function ModalComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "*Solo letras y espacios");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
function ModalComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "*El campo Descripcion es obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
function ModalComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "*Solo letras y espacio");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](1, _c0));
} }
function ModalComponent_button_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r6.leyenda !== "Editar" ? "Guardar" : "Modificar", " ");
} }
class ModalComponent {
    constructor(cargoService, fb, router, mensajesService, modalService, activeModal) {
        this.cargoService = cargoService;
        this.fb = fb;
        this.router = router;
        this.mensajesService = mensajesService;
        this.modalService = modalService;
        this.activeModal = activeModal;
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: " Ingrese un Cargo en mayusculas y complete los campos obligatorios (*)",
                show: false,
            },
        ];
        this.formCargo = this.iniciarFormulario();
    }
    ngOnInit() {
        if (typeof this.cargos != 'undefined') {
            console.log("trae algo:" + this.cargos);
            this.formCargo.patchValue(this.cargos);
        }
        console.log("no trae nada" + this.cargos);
    }
    iniciarFormulario() {
        return this.fb.group({
            nombreCargo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-zA-Z ]*')])],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('[a-zA-Z ]*')])],
        });
    }
    //prueba de push
    guardar() {
        if (this.formCargo.valid) {
            if (this.cargos != null) {
                this.editando();
                console.log("editando");
            }
            else {
                console.log("registrando");
                this.registrando();
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: 'center',
                title: 'Faltan datos en el formuario',
                text: 'Complete todos los campos requeridos',
                icon: 'warning',
            });
        }
    }
    registrando() {
        const data = {
            nombreCargo: this.formCargo.controls['nombreCargo'].value,
            descripcion: this.formCargo.controls['descripcion'].value,
            estado: 8
        };
        data.nombreCargo = data.nombreCargo.toUpperCase();
        console.log(data);
        console.log(this.formCargo.value);
        this.cargoService.saveCargos(data).subscribe({
            next: (resp) => {
                this.modalService.dismissAll();
                this.formCargo.reset();
                this.mostrar();
            },
            error: (error) => {
                this.mensajesService.mensajesSweet('error', "Ups... Algo salió mal", error);
            },
            complete: () => {
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
                    icon: 'success',
                    text: 'Datos Guardados con exito'
                });
            }
        });
    }
    editando() {
        const data = {
            id: this.cargos.id,
            nombreCargo: this.formCargo.controls['nombreCargo'].value,
            descripcion: this.formCargo.controls['descripcion'].value,
            estado: 8
        };
        data.nombreCargo = data.nombreCargo.toUpperCase();
        this.cargoService.editCargo(data.id, data).subscribe({
            next: (resp) => {
                this.formCargo.reset();
                this.modalService.dismissAll();
                this.mostrar();
            },
            error: (error) => {
                this.mensajesService.mensajesSweet('error', "Ups... Algo salió mal", error);
            },
            complete: () => {
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
                    icon: 'success',
                    text: 'Datos Guardados con exito'
                });
            }
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formCargo.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    mostrar() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
    /*
      openModal(content: any) {
        this.modalService.open(content);
      }
    */
    openModal(content) {
        this.modalService.open(content, { size: 'lg', backdrop: 'static' });
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
    get nombreCargo() {
        return this.formCargo.get('nombreCargo');
    }
    get descripcion() {
        return this.formCargo.get('descripcion');
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_cargoservice__WEBPACK_IMPORTED_MODULE_1__.CargoService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__.MensajesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbActiveModal)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { cargos: "cargos", leyenda: "leyenda" }, decls: 30, vars: 15, consts: [[1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [3, "formGroup", "ngSubmit"], [1, "modal-body"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-12"], [1, "form-group", "row", "m-4"], [1, "control-label"], [1, "text-danger"], ["type", "text", "formControlName", "nombreCargo", "placeholder", "Nombre", 1, "form-control", 3, "readonly"], [4, "ngIf"], ["type", "text", "formControlName", "descripcion", "placeholder", "Descripcion", 1, "form-control", 3, "readonly"], [1, "modal-footer"], ["type", "submit", "class", "btn btn-primary", 4, "ngIf"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [3, "ngStyle"], ["type", "submit", 1, "btn", "btn-primary"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ModalComponent_div_3_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_4_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ModalComponent_Template_form_ngSubmit_5_listener() { return ctx.guardar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ModalComponent_div_7_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Nombre:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ModalComponent_div_16_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ModalComponent_div_17_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Descripci\u00F3n:");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, " *");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "textarea", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ModalComponent_div_24_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ModalComponent_div_25_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ModalComponent_button_27_Template, 2, 1, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ModalComponent_Template_button_click_28_listener() { return ctx.activeModal.dismiss("Cross click"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Cerrar");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx.leyenda, " Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.formCargo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.alerts);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.esCampoValido("nombreCargo"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.leyenda == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.nombreCargo == null ? null : ctx.nombreCargo.errors == null ? null : ctx.nombreCargo.errors["required"]) && (ctx.nombreCargo == null ? null : ctx.nombreCargo.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.nombreCargo == null ? null : ctx.nombreCargo.errors == null ? null : ctx.nombreCargo.errors["pattern"]) && (ctx.nombreCargo == null ? null : ctx.nombreCargo.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.esCampoValido("descripcion"));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.leyenda == "Detalle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.descripcion == null ? null : ctx.descripcion.errors == null ? null : ctx.descripcion.errors["required"]) && (ctx.descripcion == null ? null : ctx.descripcion.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.descripcion == null ? null : ctx.descripcion.errors == null ? null : ctx.descripcion.errors["pattern"]) && (ctx.descripcion == null ? null : ctx.descripcion.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.leyenda !== "Detalle");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgStyle], styles: ["i[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n\nbutton.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJtb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIml7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5idXR0b24uYnRuLWNsb3Nle1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 35773:
/*!****************************************************************!*\
  !*** ./src/app/modules/cargo/pages/listar/listar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarComponent": () => (/* binding */ ListarComponent)
/* harmony export */ });
/* harmony import */ var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modal/modal.component */ 51831);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_cargoservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/cargoservice */ 97966);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-search-filter */ 24352);











function ListarComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListarComponent_tr_29_Template_button_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const data_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r3.abrirModal2("Detalle", data_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListarComponent_tr_29_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const data_r1 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r5.abrirModal2("Edirtar", data_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](13, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListarComponent_tr_29_Template_button_click_14_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4); const data_r1 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.cambiarEstado(data_r1, data_r1.estado); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r1.nombreCargo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](data_r1.estado === 8 ? "badge rounded-pill bg-success" : "badge rounded-pill bg-danger");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r1.estado === 8 ? "Activo" : "Inactivo", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("ngbTooltip", "Cambiar a ", data_r1.estado === 9 ? "Activo" : "Inactivo", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", data_r1.estado === 8 ? "mdi mdi-18px mdi-lock-outline" : "mdi mdi-18px mdi-key-outline");
} }
const _c0 = function (a1) { return { itemsPerPage: 10, currentPage: a1 }; };
class ListarComponent {
    constructor(cargoService, modalService, router) {
        this.cargoService = cargoService;
        this.modalService = modalService;
        this.router = router;
        this.lstCargos = [];
        this.term = '';
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Cargo' }, { label: 'Listar', active: true }];
        this.getCargoAll();
    }
    cargaCargos(event) {
        const estado = event.target.value;
        //this.getCargos(Number(estado));
        this.getCargoAll();
    }
    getCargos(estado) {
        console.log(estado);
        this.cargoService.getCargos(estado).subscribe((data) => {
            this.lstCargos = data;
        });
    }
    getCargoAll() {
        this.cargoService.getCargosAll().subscribe((data) => {
            this.lstCargos = data;
        });
    }
    cambiarEstado(data, estado) {
        if (estado == 8) {
            this.cambio = 'Inactivo';
        }
        else {
            this.cambio = 'Activo';
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
                if (estado == 8) {
                    data.estado = 9;
                }
                else {
                    data.estado = 8;
                }
                this.cargoService.editCargo(data.id, data).subscribe({
                    next: (resp) => {
                        this.mostrar();
                    },
                    error: (error) => {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                            icon: 'error',
                            title: 'Error',
                            text: 'Algo paso, hable con el administrador',
                        });
                    },
                    complete: () => {
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
                    },
                });
            }
            else if (result.isDenied) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("Cambios no aplicados", "", "info");
            }
        });
        // this.cargoService.editCargo(data.id, { estado: estado }).subscribe((data: ICargo) => {
        //   this.getCargos(8);
        // });
    }
    abrirModal(leyenda) {
        const modalRef = this.modalService.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent);
        modalRef.componentInstance.leyenda = leyenda;
    }
    abrirModal2(leyenda, data) {
        this.selectedData = data; // Almacena los datos del registro seleccionado
        const modalRef = this.modalService.open(_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_0__.ModalComponent);
        modalRef.componentInstance.leyenda = leyenda; // Pasa la leyenda al componente modal
        modalRef.componentInstance.cargos = this.selectedData; // Pasa la data al componente modal
    }
    mostrar() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
        this.router.navigate([currentUrl]);
    }
}
ListarComponent.ɵfac = function ListarComponent_Factory(t) { return new (t || ListarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_cargoservice__WEBPACK_IMPORTED_MODULE_2__.CargoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
ListarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ListarComponent, selectors: [["app-listar"]], decls: 34, vars: 13, consts: [[1, "container-fluid"], ["title", "Listado de cargos disponibles", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-6"], [1, "search-box", "me-2", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar...", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "bx", "bx-search-alt", "search-icon"], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-primary", "btn-rounded", 3, "click"], [1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle", "text-center"], [4, "ngFor", "ngForOf"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], [3, "nextLabel", "previousLabel", "pageChange"], [1, "align-middle", "text-center", "text-center"], ["type", "button", "ngbTooltip", "Modificar Cargo", 1, "btn", "btn-primary", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-eye-outline"], ["type", "button", "ngbTooltip", "Modificar Cargo", 1, "btn", "btn-info", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-18px", "mdi-book-edit-outline"], ["type", "button", 1, "btn", "btn-warning", "btn-sm", "btn-rounded", "mx-1", 3, "ngbTooltip", "click"], [3, "ngClass"]], template: function ListarComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ListarComponent_Template_button_click_14_listener() { return ctx.abrirModal("Nuevo"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Agregar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "table", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "thead", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "#");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Estado");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ListarComponent_tr_29_Template, 16, 8, "tr", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](30, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](31, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "pagination-controls", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function ListarComponent_Template_pagination_controls_pageChange_33_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](30, 5, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](31, 8, ctx.lstCargos, ctx.term), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](11, _c0, ctx.p)));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nextLabel", "")("previousLabel", "");
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.PaginationControlsComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_10__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_4__.Ng2SearchPipe], styles: ["@charset \"UTF-8\";\n\n  .ngx-pagination .current {\n  background: #972727 !important;\n  \n}\n  .ngx-pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-gap: 4px;\n  gap: 4px;\n}\n  .ngx-pagination li {\n  width: 27px;\n  height: 27px;\n  border-radius: 50% !important;\n  background: #f8f8f8;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n  .ngx-pagination li.small-screen {\n  display: none !important;\n}\n  .ngx-pagination li.pagination-previous a,   .ngx-pagination li.pagination-previous span,   .ngx-pagination li.pagination-next a,   .ngx-pagination li.pagination-next span {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  overflow: hidden;\n  color: #f8f8f8;\n}\n  .ngx-pagination .pagination-previous a:before,   .ngx-pagination .pagination-previous.disabled:before,   .ngx-pagination .pagination-next::before {\n  margin-right: 0px !important;\n  font-size: 30px;\n  margin-top: -8px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  left: 0;\n  top: 7px;\n  pointer-events: none;\n}\n  .ngx-pagination .pagination-next::before {\n  content: \"\u00BB\";\n}\n  .ngx-pagination .pagination-next::after {\n  display: none !important;\n}\n  .ngx-pagination .pagination-previous.disabled:before,   .ngx-pagination .pagination-next.disabled:before {\n  opacity: 0.4;\n}\n  .ngx-pagination .pagination-previous.disabled:hover {\n  background: #f8f8f8 !important;\n}\n  .ngx-pagination a:hover,   .ngx-pagination button:hover {\n  background: transparent none repeat 0 0 / auto auto padding-box border-box scroll !important;\n  background: initial !important;\n}\ni[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rhci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxzaGFyZWRcXHNjc3NcXHBhZ2luYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCLGlEQUFBO0FBR0k7RUFDSSw4QkFBQTtFQUNBLG9DQUFBO0FERFI7QUNLSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUFBLFFBQUE7QURIUjtBQ01JO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURKUjtBQ01RO0VBQ0ksd0JBQUE7QURKWjtBQ1NZOzs7RUFFSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FETmhCO0FDWUk7OztFQUdJLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0Esb0JBQUE7QURWUjtBQ2FJO0VBQ0ksWUFBQTtBRFhSO0FDY0k7RUFDSSx3QkFBQTtBRFpSO0FDZUk7O0VBRUksWUFBQTtBRGJSO0FDZ0JJO0VBQ0ksOEJBQUE7QURkUjtBQ2lCSTs7RUFFSSw0RkFBQTtFQUFBLDhCQUFBO0FEZlI7QUFuRUE7RUFDRSxlQUFBO0FBc0VGIiwiZmlsZSI6Imxpc3Rhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIENvbG9jYXIgZGlzZcOxbyBhIGxhIHBhZ2luYWNpb24gbmd4LXBhZ2ludGF0aW8qL1xuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XG4gIGJhY2tncm91bmQ6ICM5NzI3MjcgIWltcG9ydGFudDtcbiAgLyogQ2FtYmlhIGVzdGUgY29sb3IgYWwgcXVlIGRlc2VlcyAqL1xufVxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkge1xuICB3aWR0aDogMjdweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBib3JkZXItcmFkaXVzOiA1MCUgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZDogI2Y4ZjhmODtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaS5zbWFsbC1zY3JlZW4ge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpLnBhZ2luYXRpb24tcHJldmlvdXMgYSxcbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkucGFnaW5hdGlvbi1wcmV2aW91cyBzcGFuLCA6Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpLnBhZ2luYXRpb24tbmV4dCBhLFxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaS5wYWdpbmF0aW9uLW5leHQgc3BhbiB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiAjZjhmOGY4O1xufVxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOmJlZm9yZSxcbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6YmVmb3JlLFxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0OjpiZWZvcmUge1xuICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDMwcHg7XG4gIG1hcmdpbi10b3A6IC04cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbiAgbGVmdDogMDtcbiAgdG9wOiA3cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0OjpiZWZvcmUge1xuICBjb250ZW50OiBcIsK7XCI7XG59XG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQ6OmFmdGVyIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDpiZWZvcmUsXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6YmVmb3JlIHtcbiAgb3BhY2l0eTogMC40O1xufVxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmOGY4ZjggIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gYTpob3Zlcixcbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogaW5pdGlhbCAhaW1wb3J0YW50O1xufVxuXG5pIHtcbiAgZm9udC1zaXplOiAxN3B4O1xufSIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gRXN0aWxvcyBkZSBsYSBwYWdpbmFjaW9uLCBtb2RpZmljYWRhIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8qIENvbG9jYXIgZGlzZcOxbyBhIGxhIHBhZ2luYWNpb24gbmd4LXBhZ2ludGF0aW8qL1xyXG46Om5nLWRlZXAge1xyXG5cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiAuY3VycmVudCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzk3MjcyNyAhaW1wb3J0YW50O1xyXG4gICAgICAgIC8qIENhbWJpYSBlc3RlIGNvbG9yIGFsIHF1ZSBkZXNlZXMgKi9cclxuICAgIH1cclxuXHJcblxyXG4gICAgLm5neC1wYWdpbmF0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5neC1wYWdpbmF0aW9uIGxpIHtcclxuICAgICAgICB3aWR0aDogMjdweDtcclxuICAgICAgICBoZWlnaHQ6IDI3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y4ZjhmODtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICYuc21hbGwtc2NyZWVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5wYWdpbmF0aW9uLXByZXZpb3VzLFxyXG4gICAgICAgICYucGFnaW5hdGlvbi1uZXh0IHtcclxuICAgICAgICAgICAgYSxcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2Y4ZjhmODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzIGE6YmVmb3JlLFxyXG4gICAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOmJlZm9yZSxcclxuICAgIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0OjpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC04cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7IC8vY29sb3IgZGUgbG9zIGJvdG9uZXMgZGUgbG9zIGxhZG9zXHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDdweDtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dDo6YmVmb3Jle1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcXGJiJzsgLy9wYXJhIGNvbG9jYXJsYSBpY29ub1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0OjphZnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDpiZWZvcmUsXHJcbiAgICAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dC5kaXNhYmxlZDpiZWZvcmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4ZjggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubmd4LXBhZ2luYXRpb24gYTpob3ZlcixcclxuICAgIC5uZ3gtcGFnaW5hdGlvbiBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGluaXRpYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbn0iXX0= */"] });


/***/ }),

/***/ 97966:
/*!*******************************************************!*\
  !*** ./src/app/modules/cargo/service/cargoservice.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CargoService": () => (/* binding */ CargoService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);



class CargoService {
    // url = 'http://localhost:8080/api/cargo';
    constructor(http) {
        this.http = http;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    getCargos(estado) {
        return this.http.get(`${this.url}/cargo/listar/${estado}`);
    }
    getCargosAll() {
        return this.http.get(`${this.url}/cargo`);
    }
    saveCargos(data) {
        //console.log(data.type)
        return this.http.post(`${this.url}/cargo`, data);
    }
    getCargobyId(code) {
        return this.http.get(`${this.url}/cargo/${code}`);
    }
    editCargo(id, data) {
        return this.http.put(`${this.url}/cargo/${id}`, data);
    }
    deleteCargo(code) {
        return this.http.delete(`${this.url}/cargo/${code}`);
    }
}
CargoService.ɵfac = function CargoService_Factory(t) { return new (t || CargoService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
CargoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CargoService, factory: CargoService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_cargo_cargo_module_ts.js.map