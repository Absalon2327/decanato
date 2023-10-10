"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["src_app_pages_dashboards_dashboards_module_ts"],{

/***/ 17305:
/*!*************************************************!*\
  !*** ./src/app/core/services/config.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);


class ConfigService {
    constructor(http) {
        this.http = http;
        this.URL = 'assets/dashboard.json';
    }
    getConfig() {
        return this.http.get(`${this.URL}`);
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 73514:
/*!*********************************************************************!*\
  !*** ./src/app/modules/homeSolicitudes/home-soli-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSoliRoutingModule": () => (/* binding */ HomeSoliRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);



const routes = [];
class HomeSoliRoutingModule {
}
HomeSoliRoutingModule.ɵfac = function HomeSoliRoutingModule_Factory(t) { return new (t || HomeSoliRoutingModule)(); };
HomeSoliRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeSoliRoutingModule });
HomeSoliRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeSoliRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 33897:
/*!*************************************************************!*\
  !*** ./src/app/modules/homeSolicitudes/home-soli.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSoliModule": () => (/* binding */ HomeSoliModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _home_soli_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-soli-routing.module */ 73514);
/* harmony import */ var _pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-user/home-user.component */ 1995);
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/layouts/layouts.module */ 31472);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-charts */ 10702);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ 51382);
/* harmony import */ var src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/widget/widget.module */ 57337);
/* harmony import */ var _pages_home_jefe_home_jefe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-jefe/home-jefe.component */ 66923);
/* harmony import */ var _pages_home_secre_home_secre_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/home-secre/home-secre.component */ 77101);
/* harmony import */ var _pages_home_decano_home_decano_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home-decano/home-decano.component */ 22384);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var _pages_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/home-admin/home-admin.component */ 35390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 14001);













class HomeSoliModule {
}
HomeSoliModule.ɵfac = function HomeSoliModule_Factory(t) { return new (t || HomeSoliModule)(); };
HomeSoliModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: HomeSoliModule });
HomeSoliModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _home_soli_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeSoliRoutingModule,
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__.WidgetModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__.UIModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](HomeSoliModule, { declarations: [_pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_1__.HomeUserComponent,
        _pages_home_jefe_home_jefe_component__WEBPACK_IMPORTED_MODULE_5__.HomeJefeComponent,
        _pages_home_secre_home_secre_component__WEBPACK_IMPORTED_MODULE_6__.HomeSecreComponent,
        _pages_home_decano_home_decano_component__WEBPACK_IMPORTED_MODULE_7__.HomeDecanoComponent,
        _pages_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__.HomeAdminComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _home_soli_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeSoliRoutingModule,
        src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_2__.LayoutsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_12__.ChartsModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        src_app_shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_4__.WidgetModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_8__.UIModule], exports: [_pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_1__.HomeUserComponent,
        _pages_home_jefe_home_jefe_component__WEBPACK_IMPORTED_MODULE_5__.HomeJefeComponent,
        _pages_home_secre_home_secre_component__WEBPACK_IMPORTED_MODULE_6__.HomeSecreComponent,
        _pages_home_decano_home_decano_component__WEBPACK_IMPORTED_MODULE_7__.HomeDecanoComponent,
        _pages_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__.HomeAdminComponent] }); })();


/***/ }),

/***/ 35390:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/homeSolicitudes/pages/home-admin/home-admin.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeAdminComponent": () => (/* binding */ HomeAdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/widget/stat/stat.component */ 55990);




class HomeAdminComponent {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
        this.storage = window.localStorage;
        this.imagenBlob = null;
    }
    ngOnInit() {
        this.fotoEmpleado = this.usuarioService.empleadofoto;
        this.usuariojson = this.usuarioService.usuarioJSON;
        this.usuarioService.getCards();
        console.log("usuario role:", this.usuariojson.role);
    }
    /* Metodos para optener datos de cards */
    get cards() {
        return this.usuarioService.cards;
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
}
HomeAdminComponent.ɵfac = function HomeAdminComponent_Factory(t) { return new (t || HomeAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService)); };
HomeAdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HomeAdminComponent, selectors: [["app-home-admin"]], decls: 51, vars: 17, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "col-xl-12"], [1, "col-md-3"], [3, "title", "value", "icon"], [1, "card", "overflow-hidden"], [1, "bg-white", "bg-soft"], [1, "text-primary", "text-center", "p-2", "mt-2"], [1, "row", "p-2"], [1, "col-sm-8"], [1, "row", "mt-4"], [1, "col-sm-4"], [1, "text-muted", "mb-0"], [1, "text-black"], [1, "col-sm-4", "mb-2"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"]], template: function HomeAdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " Bienvenid@ al sistema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "BIENVENIDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "Departamento - Unidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](49, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Vales disponibles")("value", ctx.cards == null ? null : ctx.cards.vales)("icon", "mdi mdi-checkbook");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Misiones en proceso")("value", ctx.cards == null ? null : ctx.cards.misiones)("icon", "dripicons-pulse");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Misiones del dia")("value", ctx.cards == null ? null : ctx.cards.misioneshoy)("icon", "mdi mdi-bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", "Misiones del mes")("value", ctx.cards == null ? null : ctx.cards.misionesmes)("icon", "mdi mdi-bus-multiple");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.empleado.cargo.nombreCargo);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", ctx.empleado.nombre, " ", ctx.empleado.apellido, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx.empleado.departamento.nombre, " - ", ctx.empleado.departamento.tipo, "");
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_2__.StatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWFkbWluLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 22384:
/*!************************************************************************************!*\
  !*** ./src/app/modules/homeSolicitudes/pages/home-decano/home-decano.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeDecanoComponent": () => (/* binding */ HomeDecanoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/calendario/servicio/servicio.service */ 51657);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/widget/stat/stat.component */ 55990);





class HomeDecanoComponent {
    constructor(usuarioService, solicitudService) {
        this.usuarioService = usuarioService;
        this.solicitudService = solicitudService;
        this.storage = window.localStorage;
        this.imagenBlob = null;
        this.solicitud = [];
        this.cargaRevision = [];
        this.cargaAprobadas = [];
        this.cargaRealizadas = [];
        this.cargaAprobar = [];
    }
    ngOnInit() {
        this.fotoEmpleado = this.usuarioService.empleadofoto;
        this.usuariojson = this.usuarioService.usuarioJSON;
        this.usuarioService.getCards();
        console.log("usuario role:", this.usuariojson.role);
        this.cargarSolicitudesUSER();
        this.cargaSoliporAprobar();
    }
    get listSoliVeData() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo;
    }
    get listSoliVeData2() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo2;
    }
    get listSoliVeData3() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo3;
    }
    cargarSolicitudesUSER() {
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo1(4).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaAprobadas.push(element);
                }
                console.log("carga", this.cargaAprobadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo3(null).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRealizadas.push(element);
                }
                console.log("carga", this.cargaRealizadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
    }
    cargaSoliporAprobar() {
        //inicio de carga de solicitudes por aprobar
        this.solicitudService.getSolicitudesRol(this.usuariojson.role).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaAprobar.push(element);
                }
                console.log("carga revision", this.cargaAprobar);
            });
        });
        //fin de la carga
        //inicio de carga de solicitudes en revision
        this.solicitudService.getSolicitudesRol(this.usuariojson.role).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRevision.push(element);
                }
                console.log("carga revision", this.cargaRevision);
            });
        }); // carga las solicitudes de vehiculo para el usuario
    }
    /* Metodos para optener datos de cards */
    get cards() {
        return this.usuarioService.cards;
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
}
HomeDecanoComponent.ɵfac = function HomeDecanoComponent_Factory(t) { return new (t || HomeDecanoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__.ServicioService)); };
HomeDecanoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeDecanoComponent, selectors: [["app-home-decano"]], decls: 51, vars: 17, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "col-xl-12"], [1, "col-md-3"], [3, "title", "value", "icon"], [1, "card", "overflow-hidden"], [1, "bg-white", "bg-soft"], [1, "text-primary", "text-center", "p-2", "mt-2"], [1, "row", "p-2"], [1, "col-sm-8"], [1, "row", "mt-4"], [1, "col-sm-4"], [1, "text-muted", "mb-0"], [1, "text-black"], [1, "col-sm-4", "mb-2"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"]], template: function HomeDecanoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Bienvenid@ al sistema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "BIENVENIDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Departamento - Unidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones por aprobar")("value", ctx.cargaAprobar.length)("icon", "bx bx-task");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones en curso")("value", ctx.cards == null ? null : ctx.cards.misiones)("icon", "mdi mdi-bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Mi misiones aprobadas")("value", ctx.cargaAprobadas.length)("icon", "mdi mdi-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Mi misiones del mes")("value", ctx.cargaRealizadas.length)("icon", "mdi mdi-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.empleado.cargo.nombreCargo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.empleado.nombre, " ", ctx.empleado.apellido, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.empleado.departamento.nombre, " - ", ctx.empleado.departamento.tipo, "");
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__.StatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWRlY2Fuby5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 66923:
/*!********************************************************************************!*\
  !*** ./src/app/modules/homeSolicitudes/pages/home-jefe/home-jefe.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeJefeComponent": () => (/* binding */ HomeJefeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/calendario/servicio/servicio.service */ 51657);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/widget/stat/stat.component */ 55990);





class HomeJefeComponent {
    constructor(usuarioService, solicitudService) {
        this.usuarioService = usuarioService;
        this.solicitudService = solicitudService;
        this.storage = window.localStorage;
        this.imagenBlob = null;
        this.solicitud = [];
        this.cargaRevision = [];
        this.cargaAprobadas = [];
        this.cargaRealizadas = [];
        this.cargaAprobar = [];
    }
    ngOnInit() {
        this.fotoEmpleado = this.usuarioService.empleadofoto;
        this.usuariojson = this.usuarioService.usuarioJSON;
        this.usuarioService.getCards();
        console.log("usuario role:", this.usuariojson.role);
        this.cargarSolicitudesUSER();
        this.cargaSoliporAprobar();
        // aqui optengo las cards del admin
    }
    get listSoliVeData() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo;
    }
    get listSoliVeData2() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo2;
    }
    get listSoliVeData3() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo3;
    }
    cargarSolicitudesUSER() {
        //this.listSoliVeData2.forEach(element => {
        //  const fecha = new Date(element.fechaSolicitud);
        //  const fecha2 = new Date();
        //   if(fecha.getMonth()==fecha2.getMonth()){
        //      this.carga.push(element);
        //  }
        // });
        //inicio de carga de solicitudes en revision
        this.solicitudService.getSolicitudesVehiculo2(6).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRevision.push(element);
                }
                console.log("carga1", this.cargaRevision);
            });
        }); // carga las solicitudes de vehiculo para el usuario
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo1(4).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaAprobadas.push(element);
                }
                console.log("carga2", this.cargaAprobadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo3(null).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRealizadas.push(element);
                }
                console.log("carga3", this.cargaRealizadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
    }
    cargaSoliporAprobar() {
        //inicio de carga de solicitudes por aprobar
        this.solicitudService.getSolicitudesRol(this.usuariojson.role).then((data) => {
            this.solicitud = data;
            console.log("dasd123", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaAprobar.push(element);
                }
                console.log("carga revision", this.cargaRevision);
            });
        });
        //fin de la carga
    }
    /* Metodos para optener datos de cards */
    get cards() {
        return this.usuarioService.cards;
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
}
HomeJefeComponent.ɵfac = function HomeJefeComponent_Factory(t) { return new (t || HomeJefeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__.ServicioService)); };
HomeJefeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeJefeComponent, selectors: [["app-home-jefe"]], decls: 51, vars: 17, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "col-xl-12"], [1, "col-md-3"], [3, "title", "value", "icon"], [1, "card", "overflow-hidden"], [1, "bg-white", "bg-soft"], [1, "text-primary", "text-center", "p-2", "mt-2"], [1, "row", "p-2"], [1, "col-sm-8"], [1, "row", "mt-4"], [1, "col-sm-4"], [1, "text-muted", "mb-0"], [1, "text-black"], [1, "col-sm-4", "mb-2"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"]], template: function HomeJefeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Bienvenid@ al sistema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "BIENVENIDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Departamento - Unidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones por aprobar")("value", ctx.cargaAprobar.length)("icon", "mdi mdi-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Mi misiones aprobadas")("value", ctx.cargaAprobadas.length)("icon", "mdi mdi-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Mi misiones en Revisi\u00F3n")("value", ctx.cargaRevision.length)("icon", "mdi mdi-bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Mi misiones del mes")("value", ctx.cargaRealizadas.length)("icon", "mdi mdi-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.empleado.cargo.nombreCargo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.empleado.nombre, " ", ctx.empleado.apellido, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.empleado.departamento.nombre, " - ", ctx.empleado.departamento.tipo, "");
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__.StatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWplZmUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 77101:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/homeSolicitudes/pages/home-secre/home-secre.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeSecreComponent": () => (/* binding */ HomeSecreComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/calendario/servicio/servicio.service */ 51657);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/widget/stat/stat.component */ 55990);





class HomeSecreComponent {
    constructor(usuarioService, solicitudService) {
        this.usuarioService = usuarioService;
        this.solicitudService = solicitudService;
        this.storage = window.localStorage;
        this.imagenBlob = null;
        this.solicitud = [];
        this.cargaRevision = [];
        this.cargaAprobadas = [];
        this.cargaRealizadas = [];
        this.cargaAsignar = [];
    }
    ngOnInit() {
        this.fotoEmpleado = this.usuarioService.empleadofoto;
        this.usuariojson = this.usuarioService.usuarioJSON;
        this.usuarioService.getCards();
        console.log("usuario role:", this.usuariojson.role);
        this.cargarSolicitudesUSER();
        this.cargaSoliporAprobar();
    }
    get listSoliVeData() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo;
    }
    get listSoliVeData2() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo2;
    }
    get listSoliVeData3() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo3;
    }
    cargarSolicitudesUSER() {
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo1(4).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSalida);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaAprobadas.push(element);
                }
                console.log("carga", this.cargaAprobadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo3(null).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSalida);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRealizadas.push(element);
                }
                console.log("carga", this.cargaRealizadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
    }
    cargaSoliporAprobar() {
        //inicio de carga de solicitudes por aprobar
        this.solicitudService.getSolicitudesRol(this.usuariojson.role).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSalida);
                if (date.getMonth() == new Date().getMonth()) {
                    if (element.estado == 2) {
                        this.cargaAsignar.push(element);
                    }
                }
                console.log("carga asignar", this.cargaAsignar);
            });
        });
        //fin de la carga
        //inicio de carga de solicitudes en revision
        this.solicitudService.getSolicitudesRol(this.usuariojson.role).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSalida);
                if (date.getMonth() == new Date().getMonth()) {
                    if (element.estado == 6) {
                        this.cargaRevision.push(element);
                    }
                }
                console.log("carga", this.cargaRevision);
            });
        }); // carga las solicitudes de vehiculo para el usuario
    }
    /* Metodos para optener datos de cards */
    get cards() {
        return this.usuarioService.cards;
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
}
HomeSecreComponent.ɵfac = function HomeSecreComponent_Factory(t) { return new (t || HomeSecreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__.ServicioService)); };
HomeSecreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeSecreComponent, selectors: [["app-home-secre"]], decls: 51, vars: 17, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "col-xl-12"], [1, "col-md-3"], [3, "title", "value", "icon"], [1, "card", "overflow-hidden"], [1, "bg-white", "bg-soft"], [1, "text-primary", "text-center", "p-2", "mt-2"], [1, "row", "p-2"], [1, "col-sm-8"], [1, "row", "mt-4"], [1, "col-sm-4"], [1, "text-muted", "mb-0"], [1, "text-black"], [1, "col-sm-4", "mb-2"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"]], template: function HomeSecreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Bienvenid@ al sistema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "BIENVENIDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Departamento - Unidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones por asignar")("value", ctx.cargaAsignar.length)("icon", "bx bx-task");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones en Revisi\u00F3n")("value", ctx.cargaRevision.length)("icon", "bx bx-history");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Mi misiones aprobadas")("value", ctx.cargaAprobadas.length)("icon", "mdi mdi-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones en curso")("value", ctx.cards == null ? null : ctx.cards.misiones)("icon", "mdi mdi-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.empleado.cargo.nombreCargo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.empleado.nombre, " ", ctx.empleado.apellido, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.empleado.departamento.nombre, " - ", ctx.empleado.departamento.tipo, "");
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__.StatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXNlY3JlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 1995:
/*!********************************************************************************!*\
  !*** ./src/app/modules/homeSolicitudes/pages/home-user/home-user.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeUserComponent": () => (/* binding */ HomeUserComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/calendario/servicio/servicio.service */ 51657);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/widget/stat/stat.component */ 55990);





class HomeUserComponent {
    constructor(usuarioService, solicitudService) {
        this.usuarioService = usuarioService;
        this.solicitudService = solicitudService;
        this.storage = window.localStorage;
        this.imagenBlob = null;
        this.solicitud = [];
        this.cargaRevision = [];
        this.cargaAprobadas = [];
        this.cargaRealizadas = [];
    }
    ngOnInit() {
        this.fotoEmpleado = this.usuarioService.empleadofoto;
        this.usuariojson = this.usuarioService.usuarioJSON;
        this.usuarioService.getCards();
        console.log("usuario role:", this.usuariojson.role);
        this.cargarSolicitudesUSER();
        // aqui optengo las cards del admin
    }
    get listSoliVeData() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo;
    }
    get listSoliVeData2() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo2;
    }
    get listSoliVeData3() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo3;
    }
    cargarSolicitudesUSER() {
        //this.listSoliVeData2.forEach(element => {
        //  const fecha = new Date(element.fechaSolicitud);
        //  const fecha2 = new Date();
        //   if(fecha.getMonth()==fecha2.getMonth()){
        //      this.carga.push(element);
        //  }
        // });
        //inicio de carga de solicitudes en revision
        this.solicitudService.getSolicitudesVehiculo2(6).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSalida);
                if (date.getMonth() == new Date().getMonth()) {
                    console.log("fecha", new Date().getMonth());
                    this.cargaRevision.push(element);
                }
                console.log("carga", this.cargaRevision);
            });
        }); // carga las solicitudes de vehiculo para el usuario
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo1(4).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSalida);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaAprobadas.push(element);
                }
                console.log("carga", this.cargaAprobadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo3(null).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSalida);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRealizadas.push(element);
                }
                console.log("carga", this.cargaRealizadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
    }
    cargaSoliporAprobar() {
        //inicio de carga de solicitudes por aprobar
        this.solicitudService.getSolicitudesRol(this.usuariojson.role).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRevision.push(element);
                }
                console.log("carga revision", this.cargaRevision);
            });
        });
        //fin de la carga
    }
    /* Metodos para optener datos de cards */
    get cards() {
        return this.usuarioService.cards;
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
}
HomeUserComponent.ɵfac = function HomeUserComponent_Factory(t) { return new (t || HomeUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__.ServicioService)); };
HomeUserComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeUserComponent, selectors: [["app-home-user"]], decls: 49, vars: 14, consts: [[1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "col-xl-12"], [1, "col-md-4"], [3, "title", "value", "icon"], [1, "card", "overflow-hidden"], [1, "bg-white", "bg-soft"], [1, "text-primary", "text-center", "p-2", "mt-2"], [1, "row", "p-2"], [1, "col-sm-8"], [1, "row", "mt-4"], [1, "col-sm-4"], [1, "text-muted", "mb-0"], [1, "text-black"], [1, "col-sm-4", "mb-2"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"]], template: function HomeUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "ol", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " Bienvenid@ al sistema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "app-stat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "BIENVENIDO");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Cargo");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Usuario");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Departamento - Unidad");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones aprobadas")("value", ctx.cargaAprobadas.length)("icon", "mdi mdi-check");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones en Revisi\u00F3n")("value", ctx.cargaRevision.length)("icon", "mdi mdi-bus");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", "Misiones del mes")("value", ctx.cargaRealizadas.length)("icon", "mdi mdi-calendar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.empleado.cargo.nombreCargo);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", ctx.empleado.nombre, " ", ctx.empleado.apellido, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.empleado.departamento.nombre, " - ", ctx.empleado.departamento.tipo, "");
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_3__.StatComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 473:
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboards/blog/blog.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 78660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 28267);







const _c0 = ["chart"];
function BlogComponent_ng_template_182_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-simplebar", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Beautiful Day with Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "10 Nov, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h5", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Drawing a sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "02 Nov, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h5", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Project discussion with team");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "24 Oct, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Riding bike on road");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "20 Oct, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BlogComponent_ng_template_186_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ngx-simplebar", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h5", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Drawing a sketch");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "02 Nov, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "h5", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Beautiful Day with Friends");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "10 Nov, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "h5", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Riding bike on road");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "20 Oct, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "li", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "h5", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Project discussion with team");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "24 Oct, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function BlogComponent_tr_459_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Separated link");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7.likes, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", item_r7.commets, "");
} }
function BlogComponent_ng_template_460_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Another action");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Something else here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
/**
 * Blog-dashboard component
 */
class BlogComponent {
    constructor() {
        this.activeOptionButton = "all";
        this.updateOptionsData = {
            "1m": {
                series: [{
                        name: 'Current',
                        data: [12, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
                    }, {
                        name: 'Previous',
                        data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
                    }]
            },
            "6m": {
                series: [{
                        name: 'Current',
                        data: [31, 40, 28, 51, 42, 40, 51, 36, 40, 39, 31, 36],
                    }, {
                        name: 'Previous',
                        data: [11, 32, 45, 32, 34, 22, 51, 60, 51, 52, 40, 31],
                    }]
            },
            "1y": {
                series: [{
                        name: 'Current',
                        data: [28, 22, 38, 42, 32, 40, 51, 36, 51, 29, 38, 36],
                    }, {
                        name: 'Previous',
                        data: [22, 31, 36, 26, 47, 56, 42, 64, 61, 52, 42, 31],
                    }]
            },
            all: {
                series: [{
                        name: 'Current',
                        data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26]
                    }, {
                        name: 'Previous',
                        data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34]
                    }]
            }
        };
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Blog', active: true }];
        /**
         * Fetches the data
         */
        this._fetchData();
    }
    updateOptions(option) {
        this.activeOptionButton = option;
        this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
    }
    _fetchData() {
        this.visitorsOptions = _data__WEBPACK_IMPORTED_MODULE_0__.visitorsOptions;
        this.popularPostData = _data__WEBPACK_IMPORTED_MODULE_0__.popularPostData;
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], viewQuery: function BlogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 462, vars: 22, consts: [[1, "container-fluid"], ["title", "Blog", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-8"], [1, "col-lg-4"], [1, "card", "mini-stats-wid"], [1, "card-body"], [1, "d-flex", "flex-wrap"], [1, "mr-3"], [1, "text-muted", "mb-2"], [1, "mb-0"], [1, "avatar-sm", "ms-auto"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary", "font-size-20"], [1, "bx", "bxs-book-bookmark"], [1, "card", "blog-stats-wid"], [1, "me-3"], [1, "bx", "bxs-note"], [1, "bx", "bxs-message-square-dots"], [1, "card"], [1, "card-title", "me-2"], [1, "ms-auto"], [1, "toolbar", "button-items", "text-end"], ["type", "button", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "button", 1, "btn", "btn-light", "btn-sm", "active", 3, "click"], [1, "row", "text-center"], [1, "mt-4"], [1, "text-muted", "mb-1"], [1, "text-success", "font-size-13"], [1, "mdi", "mdi-arrow-up", "ms-1"], [1, "mb-4"], ["dir", "ltr", 1, "apex-charts", 3, "chart", "series", "legend", "colors", "fill", "dataLabels", "xaxis", "stroke"], ["chart", ""], [1, "col-xl-4"], [1, "media"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "avatar-sm", "rounded-circle", "img-thumbnail"], [1, "media-body"], [1, "text-muted"], [1, "mb-1"], ["ngbDropdown", "", 1, "dropdown", "ms-2"], ["ngbDropdownToggle", "", "type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-light", "btn-sm", "dropdown-toggle"], [1, "bx", "bxs-cog", "align-middle", "me-1"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["ngbDropdownItem", "", "href", "javascript: void(0);"], [1, "col-4"], [1, "text-muted", "text-truncate", "mb-2"], [1, "card-title", "mb-3", "me-2"], ["ngbDropdown", "", 1, "dropdown", "ms-auto"], ["ngbDropdownToggle", "", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", 1, "text-muted", "dropdown-toggle", "font-size-16"], [1, "mdi", "mdi-dots-horizontal"], [1, "dropdown-divider"], [1, "mb-3"], [1, "text-success", "mb-0"], [1, "mdi", "mdi-arrow-top-right", "ms-1"], [1, "ms-auto", "align-self-end"], [1, "bx", "bx-group", "display-4", "text-light"], [1, "card-body", "p-4"], [1, "text-center"], [1, "avatar-md", "mx-auto", "mb-4"], [1, "avatar-title", "bg-light", "rounded-circle", "text-primary", "h1"], [1, "mdi", "mdi-email-open"], [1, "row", "justify-content-center"], [1, "col-xl-10"], [1, "text-primary"], [1, "text-muted", "font-size-14", "mb-4"], [1, "input-group", "bg-light", "rounded"], ["type", "email", "placeholder", "Enter Email address", "aria-label", "Recipient's username", "aria-describedby", "button-addon2", 1, "form-control", "bg-transparent", "border-0"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-primary"], [1, "bx", "bxs-paper-plane"], [1, "col-xl-4", "col-lg-6"], [1, "card-header", "bg-transparent", "border-bottom"], [1, "me-2"], [1, "card-title", "mt-1", "mb-0"], ["ngbNav", "", 1, "nav-tabs", "nav-tabs-custom", "card-header-tabs", "ms-auto", 3, "activeId"], ["nav", "ngbNav"], [1, "nav-item", 3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-2", "w-100", 3, "ngbNavOutlet"], [1, "mr-2"], [1, "card-title", "mb-3"], [2, "height", "310px"], [1, "list-group", "list-group-flush"], [1, "list-group-item", "py-3"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "rounded-circle", "bg-light", "text-primary"], [1, "bx", "bxs-user"], [1, "font-size-14", "mb-1"], [1, "text-muted", "float-end"], ["href", "javascript: void(0);", 1, "text-success"], [1, "mdi", "mdi-reply", "mr-1"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "img-fluid", "d-block", "rounded-circle"], [1, "mdi", "mdi-reply"], [1, "media", "pt-3"], [1, "col-6"], [1, "mt-3"], [1, "list-group-item"], [1, "py-2"], [1, "font-size-14"], [1, "float-end"], [1, "progress", "animated-progess", "progress-sm"], ["role", "progressbar", "aria-valuenow", "78", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 2, "width", "78%"], ["role", "progressbar", "aria-valuenow", "69", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "69%"], ["role", "progressbar", "aria-valuenow", "61", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "61%"], [1, "d-flex"], [1, "card-title", "mb-4"], [2, "height", "280px"], [1, "verti-timeline", "list-unstyled"], [1, "event-list", "active"], [1, "event-timeline-dot"], [1, "bx", "bxs-right-arrow-circle", "font-size-18", "bx-fade-right"], [1, "bx", "bx-right-arrow-alt", "font-size-16", "text-primary", "align-middle", "ms-2"], [1, "fw-semibold"], ["href", "javascript: void(0);"], [1, "event-list"], [1, "bx", "bx-right-arrow-circle", "font-size-18"], [1, "text-center", "mt-4"], ["href", "", 1, "btn", "btn-primary", "waves-effect", "waves-light", "btn-sm"], [1, "mdi", "mdi-arrow-right", "ms-1"], [1, "table-responsive"], [1, "table", "align-middle", "table-nowrap", "mb-0"], ["scope", "col", "colspan", "2"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["dropdown", ""], [2, "height", "295px"], ["src", "assets/images/small/img-2.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], [1, "align-self-center", "overflow-hidden", "me-auto"], [1, "font-size-14", "text-truncate"], ["href", "javascript: void(0);", 1, "text-dark"], [1, "text-muted", "mb-0"], ["src", "assets/images/small/img-6.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], [1, "align-self-center", "overflow-hidden", "mr-auto"], ["src", "assets/images/small/img-1.jpg", "alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded"], [2, "width", "100px"], ["alt", "", 1, "avatar-md", "h-auto", "d-block", "rounded", 3, "src"], [1, "font-size-13", "text-truncate", "mb-1"], [1, "bx", "bx-like", "align-middle", "me-1"], [1, "bx", "bx-comment-dots", "align-middle", "me-1"], ["ngbDropdown", "", 1, "dropdown"], ["ngbDropdownToggle", "", "href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "text-muted", "dropdown-toggle", "font-size-14"], ["ngbDropdownItem", "", "href", "javascript::void(0);"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Total Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "120");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Pages");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "86");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "4,235");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "h5", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_48_listener() { return ctx.updateOptions("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, " ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_50_listener() { return ctx.updateOptions("1m"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " 1M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_52_listener() { return ctx.updateOptions("6m"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, " 6M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BlogComponent_Template_button_click_54_listener() { return ctx.updateOptions("1y"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, " 1Y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "1024");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](66, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "12356 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "0.2 % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](71, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "This Year");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "102354 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, "0.1 % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](80, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](81, "hr", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](82, "apx-chart", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](88, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](89, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](91, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](93, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](95, "Henry wells");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](96, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, "UI / UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "button", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](100, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, " Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "Something else");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](110, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](113, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "Total Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](116, "32");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](119, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "Subscribes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](122, "10k");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](124, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](125, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "h5", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127, "Subscribes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](128, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](130, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](131, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](132, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](133, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](134, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](135, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](136, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](138, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](139, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](140, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](141, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](142, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](143, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](144, "Total Subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](145, "h4", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](146, "10,512");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "p", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](148, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](149, "0.6 % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](150, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](151, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](152, "i", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](153, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](154, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](155, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](156, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](157, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](158, "i", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](159, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](161, "h4", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](162, "Subscribe !");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](163, "p", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](164, "Subscribe our newletter and get notification to stay update.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](165, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](166, "input", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](167, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](168, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](169, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](170, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](171, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](173, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](174, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](175, "h5", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](176, "Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](177, "ul", 72, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](179, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](180, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](181, "Recent");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](182, BlogComponent_ng_template_182_Template, 47, 0, "ng-template", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](183, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](184, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](185, "Popular");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](186, BlogComponent_ng_template_186_Template, 47, 0, "ng-template", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](187, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](188, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](189, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](190, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](191, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](192, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](193, "h5", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](194, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](195, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](196, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](197, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](198, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](199, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](200, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](201, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](202, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](203, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](204, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](205, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](206, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](207, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](208, "ngx-simplebar", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](209, "ul", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](210, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](211, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](212, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](213, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](214, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](215, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](216, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](217, "Delores Williams ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](218, "small", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](219, "1 hr Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](220, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](221, "If several languages coalesce, the grammar of the resulting of the individual");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](222, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](223, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](224, "i", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](225, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](226, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](227, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](228, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](229, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](230, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](231, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](232, "Clarence Smith ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](233, "small", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](234, "2 hrs Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](235, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](236, "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](237, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](238, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](239, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](240, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](241, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](242, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](243, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](244, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](245, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](246, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](247, "Silvia Martinez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](248, "small", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](249, "2 hrs Ago");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](250, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](251, "To take a trivial example, which of us ever undertakes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](252, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](253, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](254, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](255, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](256, "li", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](257, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](258, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](259, "div", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](260, "i", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](261, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](262, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](263, "Keith McCoy ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](264, "small", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](265, "12 Aug");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](266, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](267, "Donec posuere vulputate arcu. phasellus accumsan cursus velit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](268, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](269, "a", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](270, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](271, " Reply");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](272, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](273, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](274, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](275, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](276, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](277, "h5", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](278, "Top Visitors");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](279, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](280, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](281, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](282, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](283, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](284, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](285, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](286, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](287, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](288, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](289, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](290, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](291, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](292, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](293, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](294, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](295, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](296, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](297, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](298, "1024");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](299, "div", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](300, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](301, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](302, "This Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](303, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](304, "12356 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](305, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](306, "0.2 % ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](307, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](308, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](309, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](310, "ul", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](311, "li", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](312, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](313, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](314, "California ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](315, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](316, "78%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](317, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](318, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](319, "li", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](320, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](321, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](322, "Nevada ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](323, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](324, "69%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](325, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](326, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](327, "li", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](328, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](329, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](330, "Texas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](331, "span", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](332, "61%");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](333, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](334, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](335, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](336, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](337, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](338, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](339, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](340, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](341, "h5", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](342, "Activity");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](343, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](344, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](345, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](346, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](347, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](348, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](349, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](350, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](351, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](352, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](353, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](354, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](355, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](356, "ngx-simplebar", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](357, "ul", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](358, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](359, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](360, "i", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](361, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](362, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](363, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](364, "10 Nov ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](365, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](366, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](367, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](368, " Posted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](369, "span", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](370, "Beautiful Day with Friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](371, " blog... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](372, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](373, "View");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](374, "li", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](375, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](376, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](377, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](378, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](379, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](380, "08 Nov ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](381, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](382, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](383, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](384, " If several languages coalesce, the grammar of the resulting... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](385, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](386, "Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](387, "li", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](388, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](389, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](390, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](391, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](392, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](393, "02 Nov ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](394, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](395, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](396, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](397, " Create ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](398, "span", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](399, "Drawing a sketch blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](400, "li", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](401, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](402, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](403, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](404, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](405, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](406, "24 Oct ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](407, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](408, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](409, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](410, " In enim justo, rhoncus ut, imperdiet a venenatis vitae ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](411, "li", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](412, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](413, "i", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](414, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](415, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](416, "h5", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](417, "21 Oct ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](418, "i", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](419, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](420, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](421, " Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](422, "div", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](423, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](424, "View More ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](425, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](426, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](427, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](428, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](429, "div", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](430, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](431, "h5", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](432, "Popular post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](433, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](434, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](435, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](436, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](437, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](438, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](439, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](440, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](441, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](442, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](443, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](444, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](445, "Separated link");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](446, "div", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](447, "table", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](448, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](449, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](450, "th", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](451, "Post");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](452, "th", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](453, "Likes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](454, "th", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](455, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](456, "th", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](457, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](458, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](459, BlogComponent_tr_459_Template, 29, 5, "tr", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](460, BlogComponent_ng_template_460_Template, 10, 0, "ng-template", null, 123, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](178);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeOptionButton == "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeOptionButton == "1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeOptionButton == "6m");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx.activeOptionButton == "1y");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("chart", ctx.visitorsOptions.chart)("series", ctx.visitorsOptions.series)("legend", ctx.visitorsOptions.legend)("colors", ctx.visitorsOptions.colors)("fill", ctx.visitorsOptions.fill)("dataLabels", ctx.visitorsOptions.dataLabels)("xaxis", ctx.visitorsOptions.xaxis)("stroke", ctx.visitorsOptions.stroke);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](272);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.popularPostData);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent, ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.ChartComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbDropdownItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavOutlet, simplebar_angular__WEBPACK_IMPORTED_MODULE_5__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [".blog-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 1.25rem 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxvQkFBQTtBQUFSIiwiZmlsZSI6ImJsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmxvZy1jYXJkIHtcbiAgICAuY2FyZC1ib2R5IHtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbSAwIDA7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 78660:
/*!***********************************************!*\
  !*** ./src/app/pages/dashboards/blog/data.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "visitorsOptions": () => (/* binding */ visitorsOptions),
/* harmony export */   "popularPostData": () => (/* binding */ popularPostData)
/* harmony export */ });
var visitorsOptions = {
    series: [{
            name: 'Current',
            data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26]
        }, {
            name: 'Previous',
            data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34]
        }],
    chart: {
        height: 330,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    colors: ['#556ee6', '#f1b44c'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    markers: {
        size: 3,
        strokeWidth: 3,
        hover: {
            size: 4,
            sizeOffset: 2
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
    },
};
const popularPostData = [
    {
        image: 'assets/images/small/img-2.jpg',
        title: 'Beautiful Day with Friends',
        date: '10 Nov, 2020',
        likes: 125,
        comments: 68
    },
    {
        image: 'assets/images/small/img-6.jpg',
        title: 'Drawing a sketch',
        date: '02 Nov, 2020',
        likes: 102,
        comments: 48
    },
    {
        image: 'assets/images/small/img-1.jpg',
        title: 'Riding bike on road',
        date: '24 Oct, 2020',
        likes: 98,
        comments: 35
    },
    {
        image: 'assets/images/small/img-2.jpg',
        title: 'Project discussion with team',
        date: '15 Oct, 2020',
        likes: 92,
        comments: 22
    },
];



/***/ }),

/***/ 7249:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboards/crypto/crypto.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CryptoComponent": () => (/* binding */ CryptoComponent)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 2605);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/config.service */ 17305);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! simplebar-angular */ 6878);










const _c0 = ["chart"];
function CryptoComponent_div_149_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r11.text, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r11.coin, " = ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r11.amount);
} }
function CryptoComponent_div_149_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Income");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Expense");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "a", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "View more ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "i", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "apx-chart", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](31, CryptoComponent_div_149_div_31_Template, 8, 3, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r9.subamount, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.income);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.expense);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", data_r9.chartSeries)("chart", ctx_r0.walletRadialChart.chart)("colors", ctx_r0.walletRadialChart.colors)("stroke", ctx_r0.walletRadialChart.stroke)("plotOptions", ctx_r0.walletRadialChart.plotOptions)("legend", ctx_r0.walletRadialChart.legend);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", data_r9.balancelist);
} }
function CryptoComponent_ng_template_180_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h5", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h5", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h5", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("font-size-22 text-", data_r13.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bx ", data_r13.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r13.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r13.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r13.price);
} }
function CryptoComponent_ng_template_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CryptoComponent_ng_template_180_tr_3_Template, 18, 10, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.transactionsData);
} }
function CryptoComponent_ng_template_184_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h5", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h5", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h5", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("font-size-22 text-", data_r15.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bx ", data_r15.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r15.price);
} }
function CryptoComponent_ng_template_184_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CryptoComponent_ng_template_184_tr_3_Template, 18, 10, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.transactionsData);
} }
function CryptoComponent_ng_template_188_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h5", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h5", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h5", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("font-size-22 text-", data_r17.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bx ", data_r17.icon, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r17.date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r17.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r17.price);
} }
function CryptoComponent_ng_template_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "table", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, CryptoComponent_ng_template_188_tr_3_Template, 18, 10, "tr", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.transactionsData);
} }
function CryptoComponent_ng_template_271_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " $4235.23");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Buy Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Payment method :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Credit / Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Paypal");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Add Amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "select", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "ETH");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "LTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](33, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "button", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42, "Buy Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function CryptoComponent_ng_template_275_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h5", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " $4235.23");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h5", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Sell Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Email :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "input", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Add Amount :");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "select", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "option", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "BTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "option", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "ETH");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "option", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "LTC");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](29, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "$");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](35, "input", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Sell Coin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class CryptoComponent {
    constructor(configService) {
        this.configService = configService;
        this.activeOptionButton = "all";
        this.updateOptionsData = {
            "1m": {
                xaxis: {
                    min: new Date("28 Jan 2013").getTime(),
                    max: new Date("27 Feb 2013").getTime()
                }
            },
            "6m": {
                xaxis: {
                    min: new Date("27 Sep 2012").getTime(),
                    max: new Date("27 Feb 2013").getTime()
                }
            },
            "1y": {
                xaxis: {
                    min: new Date("27 Feb 2012").getTime(),
                    max: new Date("27 Feb 2013").getTime()
                }
            },
            "1yd": {
                xaxis: {
                    min: new Date("01 Jan 2013").getTime(),
                    max: new Date("27 Feb 2013").getTime()
                }
            },
            all: {
                xaxis: {
                    min: undefined,
                    max: undefined
                }
            }
        };
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Crypto', active: true }];
        this.configService.getConfig().subscribe(response => {
            this.walletBalanceData = response.cryptoWalletBalance;
        });
        this._fetchData();
    }
    updateOptions(option) {
        this.activeOptionButton = option;
        this.chart.updateOptions(this.updateOptionsData[option], false, true, true);
    }
    getBalanceData(data) {
        let month = data.target.value;
        switch (month) {
            case "january":
                this.walletBalanceData = [
                    {
                        text: "Available Balance",
                        amount: "$ 1211.39",
                        subamount: "+ 0.0014.23 ( 0.2 % )",
                        income: "$ 468.46",
                        expense: "$ 127.38",
                        chartSeries: [47, 68, 49],
                        balancelist: [
                            {
                                text: "Ethereum",
                                coin: "2.5701 ETH",
                                amount: "$ 723.64",
                            },
                            {
                                text: "Bitcoin",
                                coin: "0.8552 BTC",
                                amount: "$ 1225.32",
                            },
                            {
                                text: "Litecoin",
                                coin: "35.7411 LTC",
                                amount: "$ 4563.09",
                            },
                        ],
                    },
                ];
                break;
            case "february":
                this.walletBalanceData = [
                    {
                        text: "Available Balance",
                        amount: "$ 2111.39",
                        subamount: "+ 0.0014.23 ( 0.2 % )",
                        income: "$ 2168.46",
                        expense: "$ 927.38",
                        chartSeries: [38, 78, 48],
                        balancelist: [
                            {
                                text: "Ethereum",
                                coin: "2.5701 ETH",
                                amount: "$ 1123.64",
                            },
                            {
                                text: "Bitcoin",
                                coin: "0.8552 BTC",
                                amount: "$ 4025.32",
                            },
                            {
                                text: "Litecoin",
                                coin: "35.7411 LTC",
                                amount: "$ 2263.09",
                            },
                        ],
                    },
                ];
                break;
            case "march":
                this.walletBalanceData = [
                    {
                        text: "Available Balance",
                        amount: "$ 1011.39",
                        subamount: "+ 0.0014.23 ( 0.2 % )",
                        income: "$ 668.46",
                        expense: "$ 427.38",
                        chartSeries: [36, 58, 78],
                        balancelist: [
                            {
                                text: "Ethereum",
                                coin: "2.5701 ETH",
                                amount: "$ 523.64",
                            },
                            {
                                text: "Bitcoin",
                                coin: "0.8552 BTC",
                                amount: "$ 1025.32",
                            },
                            {
                                text: "Litecoin",
                                coin: "14.7411 LTC",
                                amount: "$ 6563.09",
                            },
                        ],
                    }
                ];
                break;
            case "december":
                this.walletBalanceData = [
                    {
                        text: "Available Balance",
                        amount: "$ 1011.39",
                        subamount: "+ 0.0014.23 ( 0.2 % )",
                        income: "$ 668.46",
                        expense: "$ 427.38",
                        chartSeries: [25, 58, 47],
                        balancelist: [
                            {
                                text: "Ethereum",
                                coin: "2.5701 ETH",
                                amount: "$ 523.64",
                            },
                            {
                                text: "Bitcoin",
                                coin: "0.8552 BTC",
                                amount: "$ 1025.32",
                            },
                            {
                                text: "Litecoin",
                                coin: "14.7411 LTC",
                                amount: "$ 6563.09",
                            },
                        ],
                    },
                ];
                break;
        }
    }
    _fetchData() {
        this.walletRadialChart = _data__WEBPACK_IMPORTED_MODULE_0__.walletRadialChart;
        this.overviewChart = _data__WEBPACK_IMPORTED_MODULE_0__.overviewChart;
        this.transactionsData = _data__WEBPACK_IMPORTED_MODULE_0__.transactionsData;
        this.bitconinChart = _data__WEBPACK_IMPORTED_MODULE_0__.bitconinChart;
        this.ethereumChart = _data__WEBPACK_IMPORTED_MODULE_0__.ethereumChart;
        this.litecoinChart = _data__WEBPACK_IMPORTED_MODULE_0__.litecoinChart;
    }
}
CryptoComponent.ɵfac = function CryptoComponent_Factory(t) { return new (t || CryptoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService)); };
CryptoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CryptoComponent, selectors: [["app-crypto"]], viewQuery: function CryptoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, decls: 277, vars: 46, consts: [[1, "container-fluid"], ["title", "Crypto", 3, "breadcrumbItems"], [1, "row"], [1, "col-xl-4"], [1, "card"], [1, "card-body"], ["ngbDropdown", "", 1, "float-end", "dropdown", "ms-2"], ["href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "text-muted", "dropdown-toggle"], [1, "mdi", "mdi-dots-horizontal", "font-size-18"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "mb-4", "me-3"], [1, "mdi", "mdi-account-circle", "text-primary", "h1"], [1, "text-muted", "mb-1"], [1, "text-muted", "mb-0"], [1, "card-body", "border-top"], [1, "col-sm-6"], [1, "fw-medium", "mb-2"], [1, "mt-4", "mt-sm-0"], [1, "d-inline-flex", "align-items-center", "mt-1"], ["href", "javascript: void(0);", "data-placement", "top", "ngbTooltip", "Bitcoin", 1, "m-1"], [1, "avatar-xs"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-warning", "text-warning", "font-size-18"], [1, "mdi", "mdi-bitcoin"], ["href", "javascript: void(0);", "data-placement", "top", "ngbTooltip", "Ethereum", 1, "m-1"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-primary", "text-primary", "font-size-18"], [1, "mdi", "mdi-ethereum"], ["href", "javascript: void(0);", "data-placement", "top", "ngbTooltip", "Litecoin", 1, "m-1"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-info", "text-info", "font-size-18"], [1, "mdi", "mdi-litecoin"], [1, "card-footer", "bg-transparent", "border-top"], [1, "text-center"], ["href", "javascript: void(0);", 1, "btn", "btn-outline-light", "me-2", "w-md"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "me-2", "w-md"], [1, "col-xl-8"], [1, "col-lg-9", "col-sm-8"], [1, "p-4"], [1, "text-primary"], [1, "text-muted"], [1, "mb-1"], [1, "mdi", "mdi-circle-medium", "align-middle", "text-primary", "me-1"], [1, "mb-0"], [1, "col-lg-3", "col-sm-4", "align-self-center"], ["src", "assets/images/crypto/features-img/img-1.png", "alt", "", 1, "img-fluid", "d-block"], [1, "col-sm-4"], [1, "text-muted", "mb-4"], [1, "mdi", "mdi-bitcoin", "h2", "text-warning", "align-middle", "mb-0", "me-3"], [1, "col-6"], [1, "text-muted", "text-truncate", "mb-0"], [1, "mdi", "mdi-arrow-up", "ms-1", "text-success"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "stroke", "colors", "fill", "tooltip"], [1, "mdi", "mdi-ethereum", "h2", "text-primary", "align-middle", "mb-0", "me-3"], [1, "mdi", "mdi-arrow-down", "ms-1", "text-danger"], [1, "mdi", "mdi-litecoin", "h2", "text-info", "align-middle", "mb-0", "me-3"], [1, "float-end"], [1, "form-select", "form-select-sm", "ms-2", 3, "change"], ["value", "march", "selected", ""], ["value", "february"], ["value", "january"], ["value", "december"], [1, "card-title", "mb-3"], ["class", "row", 4, "ngFor", "ngForOf"], ["id", "overview-chart", "dir", "ltr", 1, "apex-charts"], [1, "toolbar", "button-items", "text-center"], ["type", "button", "id", "one_month", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "button", "id", "six_months", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["type", "button", "id", "one_year", 1, "btn", "btn-light", "btn-sm", "active", 3, "click"], ["type", "button", "id", "all", 1, "btn", "btn-light", "btn-sm", 3, "click"], ["id", "overview-chart-timeline"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "dataLabels", "stroke", "markers", "xaxis", "tooltip", "colors", "fill"], ["chart", ""], [1, "card-title", "mb-4"], ["ngbNav", "", 1, "nav-pills", "bg-light", "rounded", 3, "activeId"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-4", 3, "ngbNavOutlet"], [1, "list-group"], [2, "height", "390px"], [1, "list-group-item"], [1, "media"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/companies/img-1.png", "alt", "", "height", "18"], [1, "media-body"], [1, "font-size-14"], [1, "mdi", "mdi-account", "me-1"], [1, "avatar-xs", "mr-3"], ["src", "assets/images/companies/img-2.png", "alt", "", "height", "18"], ["src", "assets/images/companies/img-3.png", "alt", "", "height", "18"], ["nav1", "ngbNav"], [1, "col-lg-4"], [1, "mt-4"], [1, "mb-2"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm"], [1, "mdi", "mdi-arrow-right", "ms-1"], [1, "col-lg-4", "col-sm-6"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "stroke", "plotOptions", "legend"], [1, "col-lg-4", "col-sm-6", "align-self-center"], ["class", "mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "mt-4", "pt-2"], [1, "mdi", "mdi-circle", "align-middle", "font-size-10", "me-2", "text-primary"], [1, "text-muted", "font-size-14"], [2, "height", "330px"], [1, "table", "table-centered", "table-nowrap"], [4, "ngFor", "ngForOf"], [2, "width", "50px"], [1, "font-size-14", "mb-1"], [1, "text-end"], [1, "font-size-14", "mb-0"], [1, "font-size-14", "text-muted", "mb-0"], [1, "float-end", "ms-2"], [1, "bx", "bx-wallet", "text-primary", "font-size-16", "align-middle", "me-1"], [1, "font-size-14", "mb-4"], [1, "mb-3"], [1, "form-select"], [1, "input-group", "mb-3"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "form-select", 2, "max-width", "90px"], ["value", "BT", "selected", ""], ["value", "ET"], ["value", "LT"], ["type", "text", 1, "form-control"], ["type", "button", 1, "btn", "btn-success", "w-md"], ["type", "email", 1, "form-control"], ["type", "button", 1, "btn", "btn-danger", "w-md"]], template: function CryptoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Henry Wells");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "henrywells@abc.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Id no: #SK0234");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "Balance :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "$ 6134.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "Coin :");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "span", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](51, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Deposit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Buy / Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "h5", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Welcome Back !");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Skote Crypto Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, " If several languages coalesce");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "p", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](73, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, " Sed ut perspiciatis unde");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "p", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](76, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, " It would be necessary");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](86, "i", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, " Bitcoin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "$ 9134.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "+ 0.0012 ( 0.2 % ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](95, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](98, "apx-chart", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, " Ethereum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109, "$ 245.44");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "- 4.102 ( 0.1 % ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](112, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "apx-chart", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "p", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "i", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](121, " litecoin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "$ 63.61");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "p", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](128, "+ 1.792 ( 0.1 % ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "i", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](132, "apx-chart", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "select", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function CryptoComponent_Template_select_change_138_listener($event) { return ctx.getBalanceData($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "March");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "February");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "option", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "January");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "option", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "December");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](147, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](148, "Wallet Balance");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](149, CryptoComponent_div_149_Template, 32, 12, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](152, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "h4", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](154, "Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CryptoComponent_Template_button_click_158_listener() { return ctx.updateOptions("1m"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](159, " 1M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](160, "button", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CryptoComponent_Template_button_click_160_listener() { return ctx.updateOptions("6m"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, " 6M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CryptoComponent_Template_button_click_162_listener() { return ctx.updateOptions("1y"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, " 1Y ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "button", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CryptoComponent_Template_button_click_164_listener() { return ctx.updateOptions("all"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](165, " ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](166, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "apx-chart", 69, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "h4", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](174, "Transactions");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](175, "ul", 72, 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](177, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](179, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](180, CryptoComponent_ng_template_180_Template, 4, 1, "ng-template", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](183, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](184, CryptoComponent_ng_template_184_Template, 4, 1, "ng-template", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](188, CryptoComponent_ng_template_188_Template, 4, 1, "ng-template", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](189, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](191, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](193, "h4", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](194, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](195, "ul", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "ngx-simplebar", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](197, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](198, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "div", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](201, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](203, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](204, "Donec vitae sapien ut");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](205, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](206, "If several languages coalesce, the grammar of the resulting language");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](208, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](209, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](210, " Joseph");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "12 Mar, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](213, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](214, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](217, "img", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](218, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](220, "Cras ultricies mi eu turpis");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](222, "To an English person, it will seem like simplified English, as a skeptical cambridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](225, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](226, " Jerry");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](227, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228, "13 Mar, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](233, "img", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](234, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](236, "Duis arcu tortor suscipit");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](238, "It va esser tam simplic quam occidental in fact, it va esser occidental.");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](239, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](241, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](242, " Calvin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](244, "14 Mar, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "li", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](246, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "span", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](249, "img", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](251, "h5", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](252, "Donec vitae sapien ut");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](253, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](254, "If several languages coalesce, the grammar of the resulting language");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](255, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](257, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](258, " Joseph");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](259, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](260, "12 Mar, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](262, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](264, "h4", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](265, "Buy / Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](266, "ul", 72, 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](270, "Buy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](271, CryptoComponent_ng_template_271_Template, 43, 0, "ng-template", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](272, "li", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "a", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](274, "Sell");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](275, CryptoComponent_ng_template_275_Template, 39, 0, "ng-template", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](276, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](176);
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](267);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", ctx.bitconinChart.series)("chart", ctx.bitconinChart.chart)("stroke", ctx.bitconinChart.stroke)("colors", ctx.bitconinChart.colors)("fill", ctx.bitconinChart.fill)("tooltip", ctx.bitconinChart.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", ctx.ethereumChart.series)("chart", ctx.ethereumChart.chart)("stroke", ctx.ethereumChart.stroke)("colors", ctx.ethereumChart.colors)("fill", ctx.ethereumChart.fill)("tooltip", ctx.ethereumChart.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", ctx.litecoinChart.series)("chart", ctx.litecoinChart.chart)("stroke", ctx.litecoinChart.stroke)("colors", ctx.litecoinChart.colors)("fill", ctx.litecoinChart.fill)("tooltip", ctx.litecoinChart.tooltip);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.walletBalanceData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeOptionButton == "1m");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeOptionButton == "6m");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeOptionButton == "1y");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("active", ctx.activeOptionButton == "all");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", ctx.overviewChart.series)("chart", ctx.overviewChart.chart)("dataLabels", ctx.overviewChart.dataLabels)("stroke", ctx.overviewChart.stroke)("markers", ctx.overviewChart.markers)("xaxis", ctx.overviewChart.xaxis)("tooltip", ctx.overviewChart.tooltip)("colors", ctx.overviewChart.colors)("fill", ctx.overviewChart.fill);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r6);
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_3__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownMenu, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTooltip, ng_apexcharts__WEBPACK_IMPORTED_MODULE_6__.ChartComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbNavOutlet, simplebar_angular__WEBPACK_IMPORTED_MODULE_9__.SimplebarAngularComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcnlwdG8uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 2605:
/*!*************************************************!*\
  !*** ./src/app/pages/dashboards/crypto/data.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "walletRadialChart": () => (/* binding */ walletRadialChart),
/* harmony export */   "overviewChart": () => (/* binding */ overviewChart),
/* harmony export */   "transactionsData": () => (/* binding */ transactionsData),
/* harmony export */   "bitconinChart": () => (/* binding */ bitconinChart),
/* harmony export */   "ethereumChart": () => (/* binding */ ethereumChart),
/* harmony export */   "litecoinChart": () => (/* binding */ litecoinChart)
/* harmony export */ });
const walletRadialChart = {
    series: [76, 67, 61],
    chart: {
        height: 280,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '35%',
                background: 'transparent',
                image: undefined,
            },
            track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: '#f2f2f2',
                strokeWidth: '97%',
                opacity: 1,
                margin: 12,
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    blur: 3,
                    opacity: 0.5
                }
            },
            dataLabels: {
                name: {
                    show: true,
                    fontSize: '16px',
                    fontWeight: 600,
                    offsetY: -10
                },
                value: {
                    show: true,
                    fontSize: '14px',
                    offsetY: 4,
                    formatter: function (val) {
                        return val + '%';
                    }
                },
                total: {
                    show: true,
                    label: 'Total',
                    color: '#999',
                    fontSize: '16px',
                    fontFamily: undefined,
                    fontWeight: 600,
                    formatter: function (w) {
                        return w.globals.seriesTotals.reduce(function (a, b) {
                            return a + b;
                        }, 0) + '%';
                    }
                }
            }
        }
    },
    stroke: {
        lineCap: 'round'
    },
    colors: ['#3452e1', '#f1b44c', '#50a5f1'],
    labels: ['Ethereum', 'Bitcoin', 'Ethereum'],
    legend: {
        show: false,
    },
};
const overviewChart = {
    series: [{
            name: 'BTC',
            data: [
                [1327359600000, 30.95],
                [1327446000000, 31.34],
                [1327532400000, 31.18],
                [1327618800000, 31.05],
                [1327878000000, 31.00],
                [1327964400000, 30.95],
                [1328050800000, 31.24],
                [1328137200000, 31.29],
                [1328223600000, 31.85],
                [1328482800000, 31.86],
                [1328569200000, 32.28],
                [1328655600000, 32.10],
                [1328742000000, 32.65],
                [1328828400000, 32.21],
                [1329087600000, 32.35],
                [1329174000000, 32.44],
                [1329260400000, 32.46],
                [1329346800000, 32.86],
                [1329433200000, 32.75],
                [1329778800000, 32.54],
                [1329865200000, 32.33],
                [1329951600000, 32.97],
                [1330038000000, 33.41],
                [1330297200000, 33.27],
                [1330383600000, 33.27],
                [1330470000000, 32.89],
                [1330556400000, 33.10],
                [1330642800000, 33.73],
                [1330902000000, 33.22],
                [1330988400000, 31.99],
                [1331074800000, 32.41],
                [1331161200000, 33.05],
                [1331247600000, 33.64],
                [1331506800000, 33.56],
                [1331593200000, 34.22],
                [1331679600000, 33.77],
                [1331766000000, 34.17],
                [1331852400000, 33.82],
                [1332111600000, 34.51],
                [1332198000000, 33.16],
                [1332284400000, 33.56],
                [1332370800000, 33.71],
                [1332457200000, 33.81],
                [1332712800000, 34.40],
                [1332799200000, 34.63],
                [1332885600000, 34.46],
                [1332972000000, 34.48],
                [1333058400000, 34.31],
                [1333317600000, 34.70],
                [1333404000000, 34.31],
                [1333490400000, 33.46],
                [1333576800000, 33.59],
                [1333922400000, 33.22],
                [1334008800000, 32.61],
                [1334095200000, 33.01],
                [1334181600000, 33.55],
                [1334268000000, 33.18],
                [1334527200000, 32.84],
                [1334613600000, 33.84],
                [1334700000000, 33.39],
                [1334786400000, 32.91],
                [1334872800000, 33.06],
                [1335132000000, 32.62],
                [1335218400000, 32.40],
                [1335304800000, 33.13],
                [1335391200000, 33.26],
                [1335477600000, 33.58],
                [1335736800000, 33.55],
                [1335823200000, 33.77],
                [1335909600000, 33.76],
                [1335996000000, 33.32],
                [1336082400000, 32.61],
                [1336341600000, 32.52],
                [1336428000000, 32.67],
                [1336514400000, 32.52],
                [1336600800000, 31.92],
                [1336687200000, 32.20],
                [1336946400000, 32.23],
                [1337032800000, 32.33],
                [1337119200000, 32.36],
                [1337205600000, 32.01],
                [1337292000000, 31.31],
                [1337551200000, 32.01],
                [1337637600000, 32.01],
                [1337724000000, 32.18],
                [1337810400000, 31.54],
                [1337896800000, 31.60],
                [1338242400000, 32.05],
                [1338328800000, 31.29],
                [1338415200000, 31.05],
                [1338501600000, 29.82],
                [1338760800000, 30.31],
                [1338847200000, 30.70],
                [1338933600000, 31.69],
                [1339020000000, 31.32],
                [1339106400000, 31.65],
                [1339365600000, 31.13],
                [1339452000000, 31.77],
                [1339538400000, 31.79],
                [1339624800000, 31.67],
                [1339711200000, 32.39],
                [1339970400000, 32.63],
                [1340056800000, 32.89],
                [1340143200000, 31.99],
                [1340229600000, 31.23],
                [1340316000000, 31.57],
                [1340575200000, 30.84],
                [1340661600000, 31.07],
                [1340748000000, 31.41],
                [1340834400000, 31.17],
                [1340920800000, 32.37],
                [1341180000000, 32.19],
                [1341266400000, 32.51],
                [1341439200000, 32.53],
                [1341525600000, 31.37],
                [1341784800000, 30.43],
                [1341871200000, 30.44],
                [1341957600000, 30.20],
                [1342044000000, 30.14],
                [1342130400000, 30.65],
                [1342389600000, 30.40],
                [1342476000000, 30.65],
                [1342562400000, 31.43],
                [1342648800000, 31.89],
                [1342735200000, 31.38],
                [1342994400000, 30.64],
                [1343080800000, 30.02],
                [1343167200000, 30.33],
                [1343253600000, 30.95],
                [1343340000000, 31.89],
                [1343599200000, 31.01],
                [1343685600000, 30.88],
                [1343772000000, 30.69],
                [1343858400000, 30.58],
                [1343944800000, 32.02],
                [1344204000000, 32.14],
                [1344290400000, 32.37],
                [1344376800000, 32.51],
                [1344463200000, 32.65],
                [1344549600000, 32.64],
                [1344808800000, 32.27],
                [1344895200000, 32.10],
                [1344981600000, 32.91],
                [1345068000000, 33.65],
                [1345154400000, 33.80],
                [1345413600000, 33.92],
                [1345500000000, 33.75],
                [1345586400000, 33.84],
                [1345672800000, 33.50],
                [1345759200000, 32.26],
                [1346018400000, 32.32],
                [1346104800000, 32.06],
                [1346191200000, 31.96],
                [1346277600000, 31.46],
                [1346364000000, 31.27],
                [1346709600000, 31.43],
                [1346796000000, 32.26],
                [1346882400000, 32.79],
                [1346968800000, 32.46],
                [1347228000000, 32.13],
                [1347314400000, 32.43],
                [1347400800000, 32.42],
                [1347487200000, 32.81],
                [1347573600000, 33.34],
                [1347832800000, 33.41],
                [1347919200000, 32.57],
                [1348005600000, 33.12],
                [1348092000000, 34.53],
                [1348178400000, 33.83],
                [1348437600000, 33.41],
                [1348524000000, 32.90],
                [1348610400000, 32.53],
                [1348696800000, 32.80],
                [1348783200000, 32.44],
                [1349042400000, 32.62],
                [1349128800000, 32.57],
                [1349215200000, 32.60],
                [1349301600000, 32.68],
                [1349388000000, 32.47],
                [1349647200000, 32.23],
                [1349733600000, 31.68],
                [1349820000000, 31.51],
                [1349906400000, 31.78],
                [1349992800000, 31.94],
                [1350252000000, 32.33],
                [1350338400000, 33.24],
                [1350424800000, 33.44],
                [1350511200000, 33.48],
                [1350597600000, 33.24],
                [1350856800000, 33.49],
                [1350943200000, 33.31],
                [1351029600000, 33.36],
                [1351116000000, 33.40],
                [1351202400000, 34.01],
                [1351638000000, 34.02],
                [1351724400000, 34.36],
                [1351810800000, 34.39],
                [1352070000000, 34.24],
                [1352156400000, 34.39],
                [1352242800000, 33.47],
                [1352329200000, 32.98],
                [1352415600000, 32.90],
                [1352674800000, 32.70],
                [1352761200000, 32.54],
                [1352847600000, 32.23],
                [1352934000000, 32.64],
                [1353020400000, 32.65],
                [1353279600000, 32.92],
                [1353366000000, 32.64],
                [1353452400000, 32.84],
                [1353625200000, 33.40],
                [1353884400000, 33.30],
                [1353970800000, 33.18],
                [1354057200000, 33.88],
                [1354143600000, 34.09],
                [1354230000000, 34.61],
                [1354489200000, 34.70],
                [1354575600000, 35.30],
                [1354662000000, 35.40],
                [1354748400000, 35.14],
                [1354834800000, 35.48],
                [1355094000000, 35.75],
                [1355180400000, 35.54],
                [1355266800000, 35.96],
                [1355353200000, 35.53],
                [1355439600000, 37.56],
                [1355698800000, 37.42],
                [1355785200000, 37.49],
                [1355871600000, 38.09],
                [1355958000000, 37.87],
                [1356044400000, 37.71],
                [1356303600000, 37.53],
                [1356476400000, 37.55],
                [1356562800000, 37.30],
                [1356649200000, 36.90],
                [1356908400000, 37.68],
                [1357081200000, 38.34],
                [1357167600000, 37.75],
                [1357254000000, 38.13],
                [1357513200000, 37.94],
                [1357599600000, 38.14],
                [1357686000000, 38.66],
                [1357772400000, 38.62],
                [1357858800000, 38.09],
                [1358118000000, 38.16],
                [1358204400000, 38.15],
                [1358290800000, 37.88],
                [1358377200000, 37.73],
                [1358463600000, 37.98],
                [1358809200000, 37.95],
                [1358895600000, 38.25],
                [1358982000000, 38.10],
                [1359068400000, 38.32],
                [1359327600000, 38.24],
                [1359414000000, 38.52],
                [1359500400000, 37.94],
                [1359586800000, 37.83],
                [1359673200000, 38.34],
                [1359932400000, 38.10],
                [1360018800000, 38.51],
                [1360105200000, 38.40],
                [1360191600000, 38.07],
                [1360278000000, 39.12],
                [1360537200000, 38.64],
                [1360623600000, 38.89],
                [1360710000000, 38.81],
                [1360796400000, 38.61],
                [1360882800000, 38.63],
                [1361228400000, 38.99],
                [1361314800000, 38.77],
                [1361401200000, 38.34],
                [1361487600000, 38.55],
                [1361746800000, 38.11],
                [1361833200000, 38.59],
                [1361919600000, 39.60],
            ]
        }],
    chart: {
        type: 'area',
        height: 220,
        toolbar: 'false'
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    markers: {
        size: 0,
        style: 'hollow',
    },
    xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
        }
    },
    colors: ['#f1b44c'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.05,
            stops: [42, 100, 100, 100]
        }
    },
};
const bitconinChart = {
    series: [{
            name: 'BTC',
            data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
        }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#f1b44c'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};
const ethereumChart = {
    series: [{
            name: 'ETH',
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#3452e1'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};
const litecoinChart = {
    series: [{
            name: 'LTC',
            data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14]
        }],
    chart: {
        type: 'area',
        height: 40,
        sparkline: {
            enabled: true
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    colors: ['#50a5f1'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [25, 100, 100, 100]
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};
const transactionsData = [
    {
        icon: 'bx-down-arrow-circle',
        color: 'primary',
        name: 'Buy BTC',
        date: '14 Mar, 2020',
        text: '0.016 BTC',
        price: '$125.20',
    },
    {
        icon: 'bx-up-arrow-circle',
        color: 'danger',
        name: 'Sell ETH',
        date: '15 Mar, 2020',
        text: '0.56 ETH',
        price: '$112.34',
    },
    {
        icon: 'bx-down-arrow-circle',
        color: 'primary',
        name: 'Buy LTC',
        date: '16 Mar, 2020',
        text: '1.88 LTC',
        price: '$94.22',
    },
    {
        icon: 'bx-down-arrow-circle',
        color: 'primary',
        name: 'Buy ETH',
        date: '17 Mar, 2020',
        text: '0.42 ETH',
        price: '$84.32',
    },
    {
        icon: 'bx-up-arrow-circle',
        color: 'danger',
        name: 'Sell BTC',
        date: '18 Mar, 2020',
        text: '0.018 BTC',
        price: '$145.80',
    },
    {
        icon: 'bx-down-arrow-circle',
        color: 'primary',
        name: 'Buy BTC',
        date: '14 Mar, 2020',
        text: '0.016 BTC',
        price: '$125.20',
    },
    {
        icon: 'bx-up-arrow-circle',
        color: 'danger',
        name: 'Sell ETH',
        date: '14 Mar, 2020',
        text: '0.56 ETH',
        price: '$112.34',
    },
];



/***/ }),

/***/ 35857:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboards/dashboards-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardsRoutingModule": () => (/* binding */ DashboardsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default/default.component */ 15881);
/* harmony import */ var _saas_saas_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./saas/saas.component */ 36303);
/* harmony import */ var _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crypto/crypto.component */ 7249);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ 473);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);







const routes = [
    {
        path: '',
        component: _default_default_component__WEBPACK_IMPORTED_MODULE_0__.DefaultComponent
    },
    {
        path: 'saas',
        component: _saas_saas_component__WEBPACK_IMPORTED_MODULE_1__.SaasComponent
    },
    {
        path: 'crypto',
        component: _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_2__.CryptoComponent
    },
    {
        path: 'blog',
        component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent
    }
];
class DashboardsRoutingModule {
}
DashboardsRoutingModule.ɵfac = function DashboardsRoutingModule_Factory(t) { return new (t || DashboardsRoutingModule)(); };
DashboardsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DashboardsRoutingModule });
DashboardsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 77480:
/*!*******************************************************!*\
  !*** ./src/app/pages/dashboards/dashboards.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardsModule": () => (/* binding */ DashboardsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboards-routing.module */ 35857);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/ui/ui.module */ 63091);
/* harmony import */ var _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/widget/widget.module */ 57337);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _saas_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saas/shared/shared.module */ 30361);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _default_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./default/default.component */ 15881);
/* harmony import */ var _saas_saas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./saas/saas.component */ 36303);
/* harmony import */ var _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crypto/crypto.component */ 7249);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blog/blog.component */ 473);
/* harmony import */ var src_app_modules_entradasalida_entradasalida_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/modules/entradasalida/entradasalida.module */ 61711);
/* harmony import */ var src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/layouts/layouts.module */ 31472);
/* harmony import */ var src_app_modules_home_financiero_home_financiero_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/modules/home-financiero/home-financiero.module */ 63303);
/* harmony import */ var src_app_modules_homeSolicitudes_home_soli_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/modules/homeSolicitudes/home-soli.module */ 33897);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);


















class DashboardsModule {
}
DashboardsModule.ɵfac = function DashboardsModule_Factory(t) { return new (t || DashboardsModule)(); };
DashboardsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: DashboardsModule });
DashboardsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
            _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardsRoutingModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbTooltipModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavModule,
            _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_2__.WidgetModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule,
            _saas_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_17__.SimplebarAngularModule,
            src_app_modules_entradasalida_entradasalida_module__WEBPACK_IMPORTED_MODULE_8__.EntradasalidaModule,
            src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__.LayoutsModule,
            src_app_modules_home_financiero_home_financiero_module__WEBPACK_IMPORTED_MODULE_10__.HomeFinancieroModule,
            src_app_modules_homeSolicitudes_home_soli_module__WEBPACK_IMPORTED_MODULE_11__.HomeSoliModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](DashboardsModule, { declarations: [_default_default_component__WEBPACK_IMPORTED_MODULE_4__.DefaultComponent, _saas_saas_component__WEBPACK_IMPORTED_MODULE_5__.SaasComponent, _crypto_crypto_component__WEBPACK_IMPORTED_MODULE_6__.CryptoComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_7__.BlogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.ReactiveFormsModule,
        _dashboards_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardsRoutingModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbDropdownModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbTooltipModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__.NgbNavModule,
        _shared_widget_widget_module__WEBPACK_IMPORTED_MODULE_2__.WidgetModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_16__.NgApexchartsModule,
        _saas_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_17__.SimplebarAngularModule,
        src_app_modules_entradasalida_entradasalida_module__WEBPACK_IMPORTED_MODULE_8__.EntradasalidaModule,
        src_app_layouts_layouts_module__WEBPACK_IMPORTED_MODULE_9__.LayoutsModule,
        src_app_modules_home_financiero_home_financiero_module__WEBPACK_IMPORTED_MODULE_10__.HomeFinancieroModule,
        src_app_modules_homeSolicitudes_home_soli_module__WEBPACK_IMPORTED_MODULE_11__.HomeSoliModule] }); })();


/***/ }),

/***/ 15881:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboards/default/default.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultComponent": () => (/* binding */ DefaultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/modules/calendario/servicio/servicio.service */ 51657);
/* harmony import */ var _shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/loader/loader.component */ 33005);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _modules_home_financiero_pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../modules/home-financiero/pages/mostrar/mostrar.component */ 9056);
/* harmony import */ var _modules_homeSolicitudes_pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/homeSolicitudes/pages/home-user/home-user.component */ 1995);
/* harmony import */ var _modules_homeSolicitudes_pages_home_jefe_home_jefe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/homeSolicitudes/pages/home-jefe/home-jefe.component */ 66923);
/* harmony import */ var _modules_entradasalida_pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/entradasalida/pages/listar/listar.component */ 8740);
/* harmony import */ var _modules_homeSolicitudes_pages_home_secre_home_secre_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/homeSolicitudes/pages/home-secre/home-secre.component */ 77101);
/* harmony import */ var _modules_homeSolicitudes_pages_home_decano_home_decano_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/homeSolicitudes/pages/home-decano/home-decano.component */ 22384);
/* harmony import */ var _modules_homeSolicitudes_pages_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../modules/homeSolicitudes/pages/home-admin/home-admin.component */ 35390);
/* harmony import */ var _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/widget/stat/stat.component */ 55990);
/* harmony import */ var _layouts_topbar_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layouts/topbar/modal/modal.component */ 28975);














function DefaultComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-mostrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function DefaultComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-home-user");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function DefaultComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-home-jefe");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function DefaultComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-listar");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function DefaultComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-home-secre");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function DefaultComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-home-decano");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function DefaultComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "app-home-admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} }
function DefaultComponent_ng_container_8_div_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("ROL: ", ctx_r8.usuariojson == null ? null : ctx_r8.usuariojson.role, "");
} }
function DefaultComponent_ng_container_8_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("ROL ADMIN: ", ctx_r9.usuariojson == null ? null : ctx_r9.usuariojson.role, "");
} }
function DefaultComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "Panel de Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Bienvenid@ al panel de control ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](15, "app-stat", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](17, "app-stat", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "app-stat", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](21, "app-stat", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "h5", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "Bienvenid@ de nuevo!");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](37, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "h5", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "Cargo");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "Departamento");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "h5", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](57, "app-modal", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](59, "app-modal", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](60, DefaultComponent_ng_container_8_div_60_Template, 5, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, DefaultComponent_ng_container_8_div_61_Template, 5, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", "Vales disponibles")("value", ctx_r7.cards == null ? null : ctx_r7.cards.vales)("icon", "mdi mdi-checkbook");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", "Misiones en proceso")("value", ctx_r7.cards == null ? null : ctx_r7.cards.misiones)("icon", "dripicons-pulse");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", "Misiones del dia")("value", ctx_r7.cards == null ? null : ctx_r7.cards.misioneshoy)("icon", "mdi mdi-bus");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("title", "Misiones del mes")("value", ctx_r7.cards == null ? null : ctx_r7.cards.misionesmes)("icon", "mdi mdi-bus-multiple");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r7.fotoempleado, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r7.empleado.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r7.empleado.apellido, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r7.empleado.cargo.nombreCargo, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r7.empleado.departamento.nombre, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("leyenda", "Datos")("home", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("leyenda", "Credenciales")("home", true)("nuevo", ctx_r7.usuariojson == null ? null : ctx_r7.usuariojson.nuevo);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r7.usuariojson == null ? null : ctx_r7.usuariojson.role) != "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r7.usuariojson == null ? null : ctx_r7.usuariojson.role) == "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("ROL: ", ctx_r7.usuariojson == null ? null : ctx_r7.usuariojson.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("ROL: ", ctx_r7.usuariojson == null ? null : ctx_r7.usuariojson.role, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("ROL: ", ctx_r7.usuariojson == null ? null : ctx_r7.usuariojson.role, "");
} }
class DefaultComponent {
    constructor(usuarioService, solicitudService) {
        this.usuarioService = usuarioService;
        this.solicitudService = solicitudService;
        this.storage = window.localStorage;
        this.imagenBlob = null;
        this.solicitud = [];
        this.cargaRevision = [];
        this.cargaAprobadas = [];
        this.cargaRealizadas = [];
    }
    ngOnInit() {
        this.fotoEmpleado = this.usuarioService.empleadofoto;
        this.usuariojson = this.usuarioService.usuarioJSON;
        this.usuarioService.getCards();
        console.log("usuario role:", this.usuariojson.role);
        // aqui optengo las cards del admin
    }
    get listSoliVeData() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo;
    }
    get listSoliVeData2() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo2;
    }
    get listSoliVeData3() {
        // this.solicitudService.getSolicitudesVehiculo(2);
        return this.solicitudService.listSoliVehiculo3;
    }
    cargarSolicitudesUSER() {
        //this.listSoliVeData2.forEach(element => {
        //  const fecha = new Date(element.fechaSolicitud);
        //  const fecha2 = new Date();
        //   if(fecha.getMonth()==fecha2.getMonth()){
        //      this.carga.push(element);
        //  }
        // });
        //inicio de carga de solicitudes en revision
        this.solicitudService.getSolicitudesVehiculo2(6).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRevision.push(element);
                }
                console.log("carga", this.cargaRevision);
            });
        }); // carga las solicitudes de vehiculo para el usuario
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo1(4).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaAprobadas.push(element);
                }
                console.log("carga", this.cargaAprobadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
        //inicio de carga de solicitudes
        this.solicitudService.getSolicitudesVehiculo3(null).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRealizadas.push(element);
                }
                console.log("carga", this.cargaRealizadas);
            });
        }); // carga las solicitudes de vehiculo para el usuario
    }
    cargaSoliporAprobar() {
        //inicio de carga de solicitudes por aprobar
        this.solicitudService.getSolicitudesRol(this.usuariojson.role).then((data) => {
            this.solicitud = data;
            console.log("dasd", this.solicitud);
            this.solicitud.forEach(element => {
                const date = new Date(element.fechaSolicitud);
                if (date.getMonth() == new Date().getMonth()) {
                    this.cargaRevision.push(element);
                }
                console.log("carga revision", this.cargaRevision);
            });
        });
        //fin de la carga
    }
    /* Metodos para optener datos de cards */
    get cards() {
        return this.usuarioService.cards;
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
}
DefaultComponent.ɵfac = function DefaultComponent_Factory(t) { return new (t || DefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_modules_calendario_servicio_servicio_service__WEBPACK_IMPORTED_MODULE_1__.ServicioService)); };
DefaultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: DefaultComponent, selectors: [["app-default"]], decls: 9, vars: 8, consts: [[4, "ngIf"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [1, "breadcrumb-item", "active"], [1, "col-xl-12"], [1, "col-md-3"], [3, "title", "value", "icon"], [1, "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary", "bg-soft"], [1, "col-8"], [1, "text-primary", "p-2"], [1, "text-primary"], [1, "col-4", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], [1, "col-sm-4"], [1, "image-container", "mb-4"], ["alt", "Header Avatar", 1, "rounded-circle", "header-profile-user", 3, "src"], [1, "font-size-12", "text-truncate"], [1, "text-muted", "mb-0", "text-truncate"], [1, "col-sm-8"], [1, "pt-4"], [1, "col-6"], [1, "text-muted", "mb-0"], [1, "font-size-12"], [1, "button-container"], [1, "mt-2"], [3, "leyenda", "home"], [3, "leyenda", "home", "nuevo"], ["class", "col-xl-7", 4, "ngIf"], [1, "card"], [1, "card-body"], [1, "col-md-6"], [1, "col-xl-7"]], template: function DefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "app-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, DefaultComponent_ng_container_1_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, DefaultComponent_ng_container_2_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, DefaultComponent_ng_container_3_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, DefaultComponent_ng_container_4_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, DefaultComponent_ng_container_5_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, DefaultComponent_ng_container_6_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, DefaultComponent_ng_container_7_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, DefaultComponent_ng_container_8_Template, 77, 27, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "ASIS_FINANCIERO" || (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "JEFE_FINANACIERO");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "USER");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "JEFE_DEPTO");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "VIGILANTE");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "SECR_DECANATO");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "DECANO");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.usuariojson == null ? null : ctx.usuariojson.role) == "OTRO");
    } }, directives: [_shared_ui_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _modules_home_financiero_pages_mostrar_mostrar_component__WEBPACK_IMPORTED_MODULE_3__.MostrarComponent, _modules_homeSolicitudes_pages_home_user_home_user_component__WEBPACK_IMPORTED_MODULE_4__.HomeUserComponent, _modules_homeSolicitudes_pages_home_jefe_home_jefe_component__WEBPACK_IMPORTED_MODULE_5__.HomeJefeComponent, _modules_entradasalida_pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_6__.ListarComponent, _modules_homeSolicitudes_pages_home_secre_home_secre_component__WEBPACK_IMPORTED_MODULE_7__.HomeSecreComponent, _modules_homeSolicitudes_pages_home_decano_home_decano_component__WEBPACK_IMPORTED_MODULE_8__.HomeDecanoComponent, _modules_homeSolicitudes_pages_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_9__.HomeAdminComponent, _shared_widget_stat_stat_component__WEBPACK_IMPORTED_MODULE_10__.StatComponent, _layouts_topbar_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__.ModalComponent], styles: ["@charset \"UTF-8\";\n.image-container[_ngcontent-%COMP%] {\n  width: 90px;\n  height: 90px;\n  overflow: hidden;\n  border-radius: 50%;\n  margin: 0 auto;\n  position: relative;\n  margin-top: -46px;\n  border: 4px solid white;\n  z-index: 1;\n}\n.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: block;\n}\n.button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  \n  align-items: center;\n  \n}\n.mt-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7QUFFRjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBRUo7QUFHQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVEQUFBO0VBQ0EsbUJBQUE7RUFDQSx5REFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLDZDQUFBO0FBQUYiLCJmaWxlIjoiZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5pbWFnZS1jb250YWluZXIge1xuICB3aWR0aDogOTBweDtcbiAgaGVpZ2h0OiA5MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC00NnB4O1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbiAgei1pbmRleDogMTtcbn1cbi5pbWFnZS1jb250YWluZXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idXR0b24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAvKiBFc3RvIGRpc3RyaWJ1aXLDoSBsb3MgZWxlbWVudG9zIGRlIGZvcm1hIGVxdWl0YXRpdmEgKi9cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLyogRXN0byBhbGluZWEgbG9zIGVsZW1lbnRvcyB2ZXJ0aWNhbG1lbnRlIGVuIGVsIGNlbnRybyAqL1xufVxuXG4ubXQtMiB7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgLyogQWp1c3RhIGVzdGUgdmFsb3Igc2Vnw7puIHR1cyBwcmVmZXJlbmNpYXMgKi9cbn0iXX0= */"] });


/***/ }),

/***/ 89381:
/*!***********************************************!*\
  !*** ./src/app/pages/dashboards/saas/data.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "earningLineChart": () => (/* binding */ earningLineChart),
/* harmony export */   "salesAnalyticsDonutChart": () => (/* binding */ salesAnalyticsDonutChart),
/* harmony export */   "ChatData": () => (/* binding */ ChatData)
/* harmony export */ });
const earningLineChart = {
    series: [{
            name: 'series1',
            data: [31, 40, 36, 51, 49, 72, 69, 56, 68, 82, 68, 76]
        }],
    chart: {
        height: 288,
        type: 'line',
        toolbar: 'false',
        dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 8,
            opacity: 0.2
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#556ee6'],
    stroke: {
        curve: 'smooth',
        width: 3,
    },
};
const salesAnalyticsDonutChart = {
    series: [56, 38, 26],
    chart: {
        type: 'donut',
        height: 240,
    },
    labels: ['Series A', 'Series B', 'Series C'],
    colors: ['#556ee6', '#34c38f', '#f46a6a'],
    legend: {
        show: false,
    },
    plotOptions: {
        pie: {
            donut: {
                size: '70%',
            }
        }
    }
};
const ChatData = [
    {
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00',
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        name: 'Henry Wells',
        message: 'Wow that\'s great',
        time: '10:02'
    },
];



/***/ }),

/***/ 36303:
/*!*********************************************************!*\
  !*** ./src/app/pages/dashboards/saas/saas.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaasComponent": () => (/* binding */ SaasComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ 89381);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/config.service */ 17305);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _shared_sellingchart_sellingchart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/sellingchart/sellingchart.component */ 76245);











const _c0 = ["scrollRef"];
function SaasComponent_div_147_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "span", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "View Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "i", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "apx-chart", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" + ", item_r8.revenue, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", item_r8.time, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.month);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r8.previousamount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", item_r8.series)("chart", ctx_r0.earningLineChart.chart)("colors", ctx_r0.earningLineChart.colors)("stroke", ctx_r0.earningLineChart.stroke)("dataLabels", ctx_r0.earningLineChart.dataLabels);
} }
function SaasComponent_div_198_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h5", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-sellingchart", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Sales");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r11.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r11.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("value", item_r11.sales);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("Chartcolor", item_r11.chartVariant);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r11.sales, " %");
} }
function SaasComponent_div_198_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "i", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, " From previous period");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "table", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, SaasComponent_div_198_tr_14_Template, 13, 5, "tr", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r9.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r9.revenue, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", data_r9.list);
} }
function SaasComponent_ng_template_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Skote Saas Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Assigned to Mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "New Landing UI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Assigned to Team A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Brand logo design");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Assigned to Janis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Blog Template UI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Assigned to Dianna");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Multipurpose Landing");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Assigned to Team B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Redesign - Landing page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Assigned to Jerry");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "label", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "Skote Crypto Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Assigned to Eric");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](143, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SaasComponent_ng_template_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-simplebar", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "table", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "label", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Skote Saas Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Assigned to Mark");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "td", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32, "New Landing UI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Assigned to Team A");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](43, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](48, "label", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Brand logo design");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](54, "Assigned to Janis");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](60, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](63, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "input", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](68, "label", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](72, "Blog Template UI");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Assigned to Dianna");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](80, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](83, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](87, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](88, "label", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, "Multipurpose Landing");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "Assigned to Team B");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](99, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](100, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](107, "input", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](108, "label", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](112, "Redesign - Landing page");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Assigned to Jerry");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](115, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](117, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](123, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](124, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](126, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](127, "input", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](128, "label", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "h5", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "a", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](132, "Skote Crypto Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "p", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](134, "Assigned to Eric");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](136, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "ul", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](140, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "li", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](142, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](143, "i", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "right": a0 }; };
function SaasComponent_li_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "i", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Copy");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Forward");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c1, data_r12.align === "right"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r12.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", data_r12.time, "");
} }
function SaasComponent_div_283_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Message is required.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function SaasComponent_div_283_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SaasComponent_div_283_span_1_Template, 2, 0, "span", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.form.message.errors.required);
} }
const _c2 = function (a0) { return { "is-invalid": a0 }; };
/**
 * Saas-dashboard component
 */
class SaasComponent {
    constructor(formBuilder, configService) {
        this.formBuilder = formBuilder;
        this.configService = configService;
    }
    /**
     * Returns form
     */
    get form() {
        return this.formData.controls;
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Dashboards' }, { label: 'Saas', active: true }];
        this._fetchData();
        this.formData = this.formBuilder.group({
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.configService.getConfig().subscribe(response => {
            this.sassEarning = response.sassEarning;
            this.sassTopSelling = response.sassTopSelling;
        });
    }
    /**
     * Save the message in chat
     */
    messageSave() {
        const message = this.formData.get('message').value;
        const currentDate = new Date();
        if (this.formData.valid && message) {
            // Message Push in Chat
            this.ChatData.push({
                align: 'right',
                name: 'Henry Wells',
                message,
                time: currentDate.getHours() + ':' + currentDate.getMinutes()
            });
            this.onListScroll();
            // Set Form Data Reset
            this.formData = this.formBuilder.group({
                message: null
            });
        }
        this.chatSubmit = true;
    }
    _fetchData() {
        this.earningLineChart = _data__WEBPACK_IMPORTED_MODULE_0__.earningLineChart;
        this.salesAnalyticsDonutChart = _data__WEBPACK_IMPORTED_MODULE_0__.salesAnalyticsDonutChart;
        this.ChatData = _data__WEBPACK_IMPORTED_MODULE_0__.ChatData;
    }
    ngAfterViewInit() {
        this.scrollRef.SimpleBar.getScrollElement().scrollTop = 500;
    }
    onListScroll() {
        if (this.scrollRef !== undefined) {
            setTimeout(() => {
                this.scrollRef.SimpleBar.getScrollElement().scrollTop =
                    this.scrollRef.SimpleBar.getScrollElement().scrollHeight + 1500;
            }, 500);
        }
    }
    selectMonth(value) {
        switch (value) {
            case "january":
                this.sassEarning = [
                    {
                        name: "This month",
                        amount: "$2007.35",
                        revenue: "0.2",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "$784.04",
                        series: [
                            {
                                name: "series1",
                                data: [22, 35, 20, 41, 51, 42, 49, 45, 58, 42, 75, 48],
                            },
                        ],
                    },
                ];
                break;
            case "december":
                this.sassEarning = [
                    {
                        name: "This month",
                        amount: "$2007.35",
                        revenue: "0.2",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "$784.04",
                        series: [
                            {
                                name: "series1",
                                data: [22, 28, 31, 34, 40, 52, 29, 45, 68, 60, 47, 12],
                            },
                        ],
                    },
                ];
                break;
            case "november":
                this.sassEarning = [
                    {
                        name: "This month",
                        amount: "$2887.35",
                        revenue: "0.4",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "$684.04",
                        series: [
                            {
                                name: "series1",
                                data: [28, 30, 48, 50, 47, 40, 35, 48, 56, 42, 65, 41],
                            },
                        ],
                    },
                ];
                break;
            case "october":
                this.sassEarning = [
                    {
                        name: "This month",
                        amount: "$2100.35",
                        revenue: "0.4",
                        time: "From previous period",
                        month: "Last month",
                        previousamount: "$674.04",
                        series: [
                            {
                                name: "series1",
                                data: [28, 48, 39, 47, 48, 41, 28, 46, 25, 32, 24, 28],
                            },
                        ],
                    },
                ];
                break;
        }
    }
    sellingProduct(event) {
        let month = event.target.value;
        switch (month) {
            case "january":
                this.sassTopSelling = [
                    {
                        title: "Product B",
                        amount: "$ 7842",
                        revenue: "0.4",
                        list: [
                            {
                                name: "Product D",
                                text: "Neque quis est",
                                sales: 41,
                                chartVariant: "#34c38f"
                            },
                            {
                                name: "Product E",
                                text: "Quis autem iure",
                                sales: 14,
                                chartVariant: "#556ee6"
                            },
                            {
                                name: "Product F",
                                text: "Sed aliquam mauris.",
                                sales: 85,
                                chartVariant: "#f46a6a"
                            },
                        ],
                    },
                ];
                break;
            case "december":
                this.sassTopSelling = [
                    {
                        title: "Product A",
                        amount: "$ 6385",
                        revenue: "0.6",
                        list: [
                            {
                                name: "Product A",
                                text: "Neque quis est",
                                sales: 37,
                                chartVariant: "#556ee6"
                            },
                            {
                                name: "Product B",
                                text: "Quis autem iure",
                                sales: 72,
                                chartVariant: "#f46a6a"
                            },
                            {
                                name: "Product C",
                                text: "Sed aliquam mauris.",
                                sales: 54,
                                chartVariant: "#34c38f"
                            },
                        ],
                    },
                ];
                break;
            case "november":
                this.sassTopSelling = [
                    {
                        title: "Product C",
                        amount: "$ 4745",
                        revenue: "0.8",
                        list: [
                            {
                                name: "Product G",
                                text: "Neque quis est",
                                sales: 37,
                                chartVariant: "#34c38f"
                            },
                            {
                                name: "Product H",
                                text: "Quis autem iure",
                                sales: 42,
                                chartVariant: "#556ee6"
                            },
                            {
                                name: "Product I",
                                text: "Sed aliquam mauris.",
                                sales: 63,
                                chartVariant: "#f46a6a"
                            },
                        ],
                    },
                ];
                break;
            case "october":
                this.sassTopSelling = [
                    {
                        title: "Product A",
                        amount: "$ 6385",
                        revenue: "0.6",
                        list: [
                            {
                                name: "Product A",
                                text: "Neque quis est",
                                sales: 37,
                                chartVariant: "#f46a6a"
                            },
                            {
                                name: "Product B",
                                text: "Quis autem iure",
                                sales: 72,
                                chartVariant: "#556ee6"
                            },
                            {
                                name: "Product C",
                                text: "Sed aliquam mauris.",
                                sales: 54,
                                chartVariant: "#34c38f"
                            },
                        ],
                    },
                ];
                break;
            default:
                this.sassTopSelling = [
                    {
                        title: "Product A",
                        amount: "$ 6385",
                        revenue: "0.6",
                        list: [
                            {
                                name: "Product A",
                                text: "Neque quis est",
                                sales: 37,
                                chartVariant: "#556ee6"
                            },
                            {
                                name: "Product B",
                                text: "Quis autem iure",
                                sales: 72,
                                chartVariant: "#34c38f"
                            },
                            {
                                name: "Product C",
                                text: "Sed aliquam mauris.",
                                sales: 54,
                                chartVariant: "#f46a6a"
                            }
                        ]
                    }
                ];
                break;
        }
    }
}
SaasComponent.ɵfac = function SaasComponent_Factory(t) { return new (t || SaasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService)); };
SaasComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: SaasComponent, selectors: [["app-saas"]], viewQuery: function SaasComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
    } }, decls: 300, vars: 19, consts: [[1, "container-fluid"], ["title", "Saas", 3, "breadcrumbItems"], [1, "row"], [1, "col-lg-12"], [1, "card"], [1, "card-body"], [1, "col-lg-4"], [1, "media"], [1, "me-3"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "avatar-md", "rounded-circle", "img-thumbnail"], [1, "media-body", "align-self-center"], [1, "text-muted"], [1, "mb-2"], [1, "mb-1"], [1, "mb-0"], [1, "col-lg-4", "align-self-center"], [1, "text-lg-center", "mt-4", "mt-lg-0"], [1, "col-4"], [1, "text-muted", "text-truncate", "mb-2"], [1, "col-lg-4", "d-none", "d-lg-block"], [1, "clearfix", "mt-4", "mt-lg-0"], ["ngbDropdown", "", 1, "dropdown", "float-end"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "btn-primary", "dropdown-toggle"], [1, "bx", "bxs-cog", "align-middle", "mr-1"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "col-xl-4"], [1, "card", "bg-primary", "bg-soft"], [1, "col-7"], [1, "text-primary", "p-3"], [1, "text-primary"], [1, "ps-3", "mb-0"], [1, "py-1"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "col-xl-8"], [1, "col-sm-4"], [1, "d-flex", "align-items-center", "mb-3"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "rounded-circle", "bg-primary", "bg-soft", "text-primary", "font-size-18"], [1, "bx", "bx-copy-alt"], [1, "font-size-14", "mb-0"], [1, "text-muted", "mt-4"], [1, "mdi", "mdi-chevron-up", "ms-1", "text-success"], [1, "d-flex"], [1, "badge", "badge-soft-success", "font-size-12"], [1, "ms-2", "text-truncate"], [1, "bx", "bx-archive-in"], [1, "bx", "bx-purchase-tag-alt"], [1, "badge", "badge-soft-warning", "font-size-12"], [1, "clearfix"], [1, "float-end"], [1, "input-group", "input-group-sm"], [1, "form-select", "form-select-sm", 3, "change"], ["value", "january", "selected", ""], ["value", "december"], ["value", "november"], ["value", "october"], [1, "input-group-text"], [1, "card-title", "mb-4"], ["class", "row", 4, "ngFor", "ngForOf"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "plotOptions", "legend", "labels"], [1, "text-center", "text-muted"], [1, "mt-4"], [1, "mb-2", "text-truncate"], [1, "mdi", "mdi-circle", "text-primary", "me-1"], [1, "mdi", "mdi-circle", "text-success", "me-1"], [1, "mdi", "mdi-circle", "text-danger", "me-1"], [4, "ngFor", "ngForOf"], ["ngbNav", "", 1, "nav-pills", "bg-light", "rounded", 3, "activeId"], ["nav1", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], ["ngbNavContent", ""], [1, "mt-4", 3, "ngbNavOutlet"], [1, "card-footer", "bg-transparent", "border-top"], [1, "text-center"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"], [1, "card-body", "border-bottom"], [1, "col-md-4", "col-9"], [1, "font-size-15", "mb-1"], [1, "text-muted", "mb-0"], [1, "mdi", "mdi-circle", "text-success", "align-middle", "me-1"], [1, "col-md-8", "col-3"], [1, "list-inline", "user-chat-nav", "text-end", "mb-0"], [1, "list-inline-item", "d-none", "d-sm-inline-block"], ["ngbDropdown", "", 1, "dropdown"], ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "btn", "nav-btn", "dropdown-toggle"], [1, "bx", "bx-search-alt-2"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end", "dropdown-menu-md"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], [1, "mdi", "mdi-magnify"], [1, "bx", "bx-cog"], [1, "list-inline-item"], [1, "bx", "bx-dots-horizontal-rounded"], [1, "card-body", "pb-0"], [1, "chat-conversation"], [1, "list-unstyled"], [2, "height", "260px"], ["scrollRef", ""], [1, "chat-day-title"], [1, "title"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "p-3", "chat-input-section"], [1, "row", 3, "formGroup", "ngSubmit"], [1, "col"], [1, "position-relative"], ["type", "text", "placeholder", "Enter Message...", "formControlName", "message", 1, "form-control", "rounded", "chat-input", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "chat-input-links"], [1, "list-inline", "mb-0"], ["href", "javascript: void(0);", "data-placement", "top", "ngbTooltip", "Emoji"], [1, "mdi", "mdi-emoticon-happy-outline"], ["href", "javascript: void(0);", "data-placement", "top", "ngbTooltip", "Images"], [1, "mdi", "mdi-file-image-outline"], ["href", "javascript: void(0);", "data-placement", "top", "ngbTooltip", "Add Files"], [1, "mdi", "mdi-file-document-outline"], [1, "col-auto"], ["type", "submit", 1, "btn", "btn-primary", "chat-send", "w-md"], [1, "d-none", "d-sm-inline-block", "me-2"], [1, "mdi", "mdi-send"], [1, "mb-4"], [1, "badge", "badge-soft-success", "font-size-12", "me-1"], ["href", "javascript: void(0);", 1, "btn", "btn-primary", "btn-sm"], [1, "mdi", "mdi-chevron-right", "ms-1"], [1, "col-lg-8"], ["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "stroke", "dataLabels"], [1, "text-muted", "text-center"], [1, "mt-4", "mb-0"], [1, "badge", "badge-soft-success", "font-size-11", "me-2"], [1, "mdi", "mdi-arrow-up"], [1, "table-responsive", "mt-4"], [1, "table", "table-centered", "mb-0"], [1, "font-size-14", "mb-1"], [3, "value", "Chartcolor"], [1, "text-muted", "mb-1"], [2, "height", "250px"], [1, "table-responsive", "mb-0"], [1, "table", "table-nowrap", "table-centered", "table-hover"], [2, "width", "50px"], [1, "form-check"], ["type", "checkbox", "id", "tasklistCheck01", 1, "form-check-input"], ["for", "tasklistCheck01", 1, "form-check-label"], [1, "text-truncate", "font-size-14", "mb-1"], ["href", "javascript: void(0);", 1, "text-dark"], [2, "width", "90px"], [1, "list-inline", "mb-0", "font-size-16"], ["href", "javascript: void(0);", 1, "text-success", "p-1"], [1, "bx", "bxs-edit-alt"], ["href", "javascript: void(0);", 1, "text-danger", "p-1"], [1, "bx", "bxs-trash"], ["type", "checkbox", "id", "tasklistCheck02", 1, "form-check-input"], ["for", "tasklistCheck02", 1, "form-check-label"], ["type", "checkbox", "id", "tasklistCheck04", 1, "form-check-input"], ["for", "tasklistCheck04", 1, "form-check-label"], ["type", "checkbox", "id", "tasklistCheck05", 1, "form-check-input"], ["for", "tasklistCheck05", 1, "form-check-label"], ["type", "checkbox", "id", "tasklistCheck06", 1, "form-check-input"], ["for", "tasklistCheck06", 1, "form-check-label"], ["type", "checkbox", "id", "tasklistCheck07", 1, "form-check-input"], ["for", "tasklistCheck07", 1, "form-check-label"], [3, "ngClass"], [1, "conversation-list"], ["href", "javascript: void(0);", "role", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", "ngbDropdownToggle", "", 1, "dropdown-toggle"], [1, "bx", "bx-dots-vertical-rounded"], ["ngbDropdownMenu", "", 1, "dropdown-menu"], [1, "ctext-wrap"], [1, "conversation-name"], [1, "chat-time", "mb-0"], [1, "bx", "bx-time-five", "align-middle", "mr-1"], [1, "invalid-feedback"], [4, "ngIf"]], template: function SaasComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Welcome to skote dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Henry wells");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "UI / UX Designer");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Total Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27, "48");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "Projects");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "40");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "h5", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "18");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " Setting ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Something else");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "h5", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Welcome Back !");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Skote Saas Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "ul", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66, "7 + Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](67, "li", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68, "Multiple apps");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](70, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "i", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81, "Orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "1,452 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](85, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, " + 0.2% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "From previous period");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](95, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](97, "i", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99, "Revenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](101, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, "$ 28,452 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](103, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](104, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](106, " + 0.2% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](107, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, "From previous period");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](111, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](113, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](114, "span", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](115, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "h5", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](117, "Average Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](118, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120, "$ 16.2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](121, "i", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](122, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "span", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](124, " 0% ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](125, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "From previous period");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](128, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](129, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](131, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](133, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SaasComponent_Template_select_change_134_listener($event) { return ctx.selectMonth($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](135, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](136, "Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](137, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](138, "Dec");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](139, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Nov");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142, "Oct");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](146, "Earning");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](147, SaasComponent_div_147_Template, 23, 11, "div", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](148, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](149, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](150, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](151, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](152, "Sales Analytics");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](153, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](154, "apx-chart", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](155, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](156, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](157, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](158, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](159, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](160, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](161, " Product A");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](162, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](163, "$ 2,132");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](164, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](165, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](166, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](167, "i", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](168, " Product B");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](169, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](170, "$ 1,763");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](171, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](172, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](173, "p", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](174, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](175, " Product C");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](176, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](177, "$ 973");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](178, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](179, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](180, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](181, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](182, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](183, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](184, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](185, "select", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function SaasComponent_Template_select_change_185_listener($event) { return ctx.sellingProduct($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](186, "option", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](187, "Jan");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](188, "option", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](189, "Dec");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](190, "option", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](191, "Nov");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](192, "option", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](193, "Oct");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](194, "label", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](195, "Month");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](196, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](197, "Top Selling product");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](198, SaasComponent_div_198_Template, 15, 4, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](199, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](200, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](201, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](202, "h4", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](203, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](204, "ul", 69, 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](206, "li", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](207, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](208, "In Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](209, SaasComponent_ng_template_209_Template, 144, 0, "ng-template", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](210, "li", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](211, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](212, "Upcoming");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](213, SaasComponent_ng_template_213_Template, 144, 0, "ng-template", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](214, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](215, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](216, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](217, "a", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](218, " Add new Task");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](219, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](220, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](221, "div", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](222, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](223, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](224, "h5", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](225, "Steven Franklin");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](226, "p", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](227, "i", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](228, " Active now");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](229, "div", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](230, "ul", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](231, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](232, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](233, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](234, "i", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](235, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](236, "form", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](237, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](238, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](239, "input", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](240, "div", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](241, "button", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](242, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](243, "li", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](244, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](245, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](246, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](247, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](248, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](249, "View Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](250, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](251, "Clear chat");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](252, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](253, "Muted");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](254, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](255, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](256, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](257, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](258, "button", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](259, "i", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](260, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](261, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](262, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](263, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](264, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](265, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](266, "Something else");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](267, "div", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](268, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](269, "div", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](270, "ul", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](271, "ngx-simplebar", 103, 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](273, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](274, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](275, "span", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](276, "Today");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](277, SaasComponent_li_277_Template, 22, 6, "li", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](278, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](279, "form", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function SaasComponent_Template_form_ngSubmit_279_listener() { return ctx.messageSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](280, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](281, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](282, "input", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](283, SaasComponent_div_283_Template, 2, 1, "div", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](284, "div", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](285, "ul", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](286, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](287, "a", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](288, "i", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](289, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](290, "a", 118);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](291, "i", 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](292, "li", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](293, "a", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](294, "i", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](295, "div", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](296, "button", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](297, "span", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](298, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](299, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](205);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sassEarning);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("series", ctx.salesAnalyticsDonutChart.series)("chart", ctx.salesAnalyticsDonutChart.chart)("colors", ctx.salesAnalyticsDonutChart.colors)("plotOptions", ctx.salesAnalyticsDonutChart.plotOptions)("legend", ctx.salesAnalyticsDonutChart.legend)("labels", ctx.salesAnalyticsDonutChart.labels);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sassTopSelling);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngbNavOutlet", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.ChatData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formData);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](17, _c2, ctx.chatSubmit && ctx.form.message.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.chatSubmit && ctx.form.message.errors);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_2__.PagetitleComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, ng_apexcharts__WEBPACK_IMPORTED_MODULE_8__.ChartComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbNavOutlet, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, simplebar_angular__WEBPACK_IMPORTED_MODULE_9__.SimplebarAngularComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbTooltip, _shared_sellingchart_sellingchart_component__WEBPACK_IMPORTED_MODULE_3__.SellingchartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYWFzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 76245:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/dashboards/saas/shared/sellingchart/sellingchart.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SellingchartComponent": () => (/* binding */ SellingchartComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ 86571);


class SellingchartComponent {
    constructor() { }
    ngOnInit() {
        this.chartData = {
            series: [this.value],
            chart: {
                type: 'radialBar',
                width: 60,
                height: 60,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            colors: [this.Chartcolor],
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: '60%'
                    },
                    track: {
                        margin: 0
                    },
                    dataLabels: {
                        show: false
                    }
                }
            }
        };
    }
}
SellingchartComponent.ɵfac = function SellingchartComponent_Factory(t) { return new (t || SellingchartComponent)(); };
SellingchartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SellingchartComponent, selectors: [["app-sellingchart"]], inputs: { Chartcolor: "Chartcolor", value: "value" }, decls: 1, vars: 5, consts: [["dir", "ltr", 1, "apex-charts", 3, "series", "chart", "colors", "plotOptions", "dataLabels"]], template: function SellingchartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "apx-chart", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartData.series)("chart", ctx.chartData.chart)("colors", ctx.chartData.colors)("plotOptions", ctx.chartData.plotOptions)("dataLabels", ctx.chartData.dataLabels);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__.ChartComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZWxsaW5nY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 30361:
/*!***************************************************************!*\
  !*** ./src/app/pages/dashboards/saas/shared/shared.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var _sellingchart_sellingchart_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sellingchart/sellingchart.component */ 76245);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.NgApexchartsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_sellingchart_sellingchart_component__WEBPACK_IMPORTED_MODULE_0__.SellingchartComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__.NgApexchartsModule], exports: [_sellingchart_sellingchart_component__WEBPACK_IMPORTED_MODULE_0__.SellingchartComponent] }); })();


/***/ }),

/***/ 51382:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/ui.module */ 63091);
/* harmony import */ var _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widget/widget.module */ 57337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
            _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_0__.UIModule,
        _widget_widget_module__WEBPACK_IMPORTED_MODULE_1__.WidgetModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboards_dashboards_module_ts.js.map