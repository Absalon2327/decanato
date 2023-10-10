"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["default-src_app_modules_asignacion-vales_services_detalle_service_ts"],{

/***/ 37818:
/*!**********************************************************************!*\
  !*** ./src/app/modules/asignacion-vales/services/detalle.service.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetalleService": () => (/* binding */ DetalleService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 29026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);








function compare(v1, v2) {
    return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
}
/**
 * Sort the table data
 * @param vales Table field value
 * @param column Fetch the column
 * @param direction Sort direction Ascending or Descending
 */
function sort(vales, column, direction) {
    if (direction === "") {
        return vales;
    }
    else {
        return [...vales].sort((a, b) => {
            const res = compare(a[column], b[column]);
            return direction === "asc" ? res : -res;
        });
    }
}
/**
 * Table Data Match with Search input
 * @param vales Table field value fetch
 * @param term Search the value
 */
function matches(vales, term) {
    return (vales.correlativoVale ||
        vales.fechaVencimiento ||
        vales.idVale ||
        vales.valorVale);
}
class DetalleService {
    constructor(http) {
        /* // Recupera el token de acceso desde el local storage
        const token = localStorage.getItem("token");
    
        // Crea un objeto HttpHeaders para agregar el token de acceso en el encabezado 'Authorization'
        const headers = new HttpHeaders({
          Authorization: `Bearer ${token}`,
        });
    
        // Configura las opciones de la solicitud HTTP con los encabezados personalizados
        this.requestOptions = {
          headers: headers,
        }; */
        this.http = http;
        // tslint:disable-next-line: variable-name
        this._loading$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(true);
        // tslint:disable-next-line: variable-name
        this._search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        // tslint:disable-next-line: variable-name
        this._vales$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        // tslint:disable-next-line: variable-name
        this._total$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(0);
        // tslint:disable-next-line: variable-name
        this._state = {
            page: 1,
            pageSize: 10,
            searchTerm: "",
            sortColumn: "",
            sortDirection: "",
            startIndex: 1,
            endIndex: 10,
            totalRecords: 0,
        };
        this.listDeMisiones = [];
        this.valesAsignar = [];
        this.burl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        /*************************************************************** */
        this._search$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(true)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(() => this._search()), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.delay)(200), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(() => this._loading$.next(false)))
            .subscribe((result) => {
            this._vales$.next(result.vales);
            this._total$.next(result.total);
        });
        this._search$.next();
    }
    /**
     * Returns the value
     */
    get vales$() {
        return this._vales$.asObservable();
    }
    get total$() {
        return this._total$.asObservable();
    }
    get loading$() {
        return this._loading$.asObservable();
    }
    get page() {
        return this._state.page;
    }
    get pageSize() {
        return this._state.pageSize;
    }
    get searchTerm() {
        return this._state.searchTerm;
    }
    get startIndex() {
        return this._state.startIndex;
    }
    get endIndex() {
        return this._state.endIndex;
    }
    get totalRecords() {
        return this._state.totalRecords;
    }
    /**
     * set the value
     */
    // tslint:disable-next-line: adjacent-overload-signatures
    set page(page) {
        this._set({ page });
    }
    // tslint:disable-next-line: adjacent-overload-signatures
    set pageSize(pageSize) {
        this._set({ pageSize });
    }
    // tslint:disable-next-line: adjacent-overload-signatures
    // tslint:disable-next-line: adjacent-overload-signatures
    set startIndex(startIndex) {
        this._set({ startIndex });
    }
    // tslint:disable-next-line: adjacent-overload-signatures
    set endIndex(endIndex) {
        this._set({ endIndex });
    }
    // tslint:disable-next-line: adjacent-overload-signatures
    set totalRecords(totalRecords) {
        this._set({ totalRecords });
    }
    // tslint:disable-next-line: adjacent-overload-signatures
    set searchTerm(searchTerm) {
        this._set({ searchTerm });
    }
    set sortColumn(sortColumn) {
        this._set({ sortColumn });
    }
    set sortDirection(sortDirection) {
        this._set({ sortDirection });
    }
    _set(patch) {
        Object.assign(this._state, patch);
        this._search$.next();
    }
    _search() {
        const { sortColumn, sortDirection, pageSize, page, searchTerm } = this._state;
        // 1. sort
        let vales = sort(this.valesAsignar, sortColumn, sortDirection);
        // 2. filter
        vales = vales.filter((table) => matches(table, searchTerm));
        const total = vales.length;
        // 3. paginate
        this.totalRecords = vales.length;
        this._state.startIndex = (page - 1) * this.pageSize;
        this._state.endIndex = (page - 1) * this.pageSize + this.pageSize;
        if (this.endIndex > this.totalRecords) {
            this.endIndex = this.totalRecords;
        }
        vales = vales.slice(this._state.startIndex, this._state.endIndex);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)({ vales, total });
    }
    getValesAsignar(cantVales) {
        return this.http
            .get(`${this.baseUrl}/asignacionvale/listarvalesasignar/${cantVales}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((resp) => resp))
            .subscribe((valesA) => {
            this.valesAsignar = valesA;
        });
    }
    getVales(cantVales) {
        return this.http.get(`${this.baseUrl}/asignacionvale/listarvalesasignar/${cantVales}`);
    }
    getMisiones() {
        const token = localStorage.getItem("token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        const requestOptions = {
            headers: headers,
        };
        this.http
            .get(`${this.baseUrl}/solicitudvale/listasinpagina`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)((resp) => resp))
            .subscribe((lista) => {
            console.log(lista);
            this.listDeMisiones = lista;
            console.log(lista);
        }, (error) => {
            console.error("Error al obtener las misiones:", error);
        });
    }
    ObtenerLista(id) {
        return this.http.get(`${this.baseUrl}/document/${id}`);
    }
    NuevosDatos(document, file) {
        const token = localStorage.getItem("token");
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpHeaders({
            Authorization: `Bearer ${token}`,
        });
        const requestOptions = {
            headers: headers,
        };
        const formData = new FormData();
        formData.append("imagen", file);
        formData.append("document", JSON.stringify(document));
        return this.http.post(`${this.burl}/document/insertar`, formData, requestOptions);
    }
    getDetalleAsignacionVale(codigoAsignacion) {
        return this.http.get(`${this.baseUrl}/asignacionvale/listar/${codigoAsignacion}`);
    }
    getAsignacionValeSolicitudVale(codigoAsignacion) {
        return this.http.get(`${this.baseUrl}/asignacionvale/ver/${codigoAsignacion}`);
    }
    devolverVales(valesParaDevolucion, usuario) {
        console.log("interfaz: ", valesParaDevolucion);
        const data = {
            valeDevuelto: valesParaDevolucion,
            usuario: usuario,
        };
        return this.http.post(`${this.baseUrl}/asignacionvale/devolver`, data);
    }
    liquidarVales(valesParaLiquidar, usuario, empleado, cargo) {
        const data = {
            valesLiquidados: valesParaLiquidar,
            usuario: usuario,
            empleado: empleado,
            cargo: cargo
        };
        return this.http.post(`${this.baseUrl}/asignacionvale/liquidar`, data);
    }
    //anula la mision
    anularMision(misionAnulada, usuario, empleado, cargo) {
        const data = {
            misionAnulada: misionAnulada,
            usuario: usuario,
            empleado: empleado,
            cargo: cargo
        };
        return this.http.post(`${this.baseUrl}/asignacionvale/anular`, data);
    }
    getSolicitudVale(codigo) {
        return this.http.get(`${this.baseUrl}/asignacionvale/listarsolicitudvalecodigo/${codigo}`);
    }
    mensajesConfirmarDevolucion(icono = "warning", title = "¿Está seguro de devolver?", label = "Algunos datos no se podrán revertir, digite: ", palabraClave = "devolver") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            const { value: valorPalabra } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: icono,
                title: title,
                input: "text",
                inputLabel: label + palabraClave,
                inputValue: "",
                showCancelButton: true,
                confirmButtonColor: "#972727",
                confirmButtonText: "Aceptar",
                cancelButtonColor: "#2c3136",
                cancelButtonText: "Cancelar",
                inputValidator: (value) => {
                    if (!value) {
                        return "¡Tiene que escribir algo!";
                    }
                    if (value != palabra) {
                        return "¡No coincide!";
                    }
                },
            });
            if (valorPalabra) {
                estado = true;
            }
            return estado;
        });
    }
    mensajesConfirmarLiquidacion(icono = "warning", title = "¿Está seguro de liquidar?", label = "Algunos datos no se podrán revertir, digite: ", palabraClave = "liquidar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            const { value: valorPalabra } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: icono,
                title: title,
                input: "text",
                inputLabel: label + palabraClave,
                inputValue: "",
                showCancelButton: true,
                confirmButtonColor: "#972727",
                confirmButtonText: "Aceptar",
                cancelButtonColor: "#2c3136",
                cancelButtonText: "Cancelar",
                inputValidator: (value) => {
                    if (!value) {
                        return "¡Tiene que escribir algo!";
                    }
                    if (value != palabra) {
                        return "¡No coincide!";
                    }
                },
            });
            if (valorPalabra) {
                estado = true;
            }
            return estado;
        });
    }
    mensajesConfirmarAnular(icono = "warning", title = "¿Está seguro de Anular?", label = "Algunos datos no se podrán revertir, digite: ", palabraClave = "anular") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            const { value: valorPalabra } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: icono,
                title: title,
                input: "text",
                inputLabel: label + palabraClave,
                inputValue: "",
                showCancelButton: true,
                confirmButtonColor: "#972727",
                confirmButtonText: "Aceptar",
                cancelButtonColor: "#2c3136",
                cancelButtonText: "Cancelar",
                inputValidator: (value) => {
                    if (!value) {
                        return "¡Tiene que escribir algo!";
                    }
                    if (value != palabra) {
                        return "¡No coincide!";
                    }
                },
            });
            if (valorPalabra) {
                estado = true;
            }
            return estado;
        });
    }
}
DetalleService.ɵfac = function DetalleService_Factory(t) { return new (t || DetalleService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient)); };
DetalleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: DetalleService, factory: DetalleService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_asignacion-vales_services_detalle_service_ts.js.map