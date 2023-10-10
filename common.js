"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["common"],{

/***/ 51657:
/*!*****************************************************************!*\
  !*** ./src/app/modules/calendario/servicio/servicio.service.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServicioService": () => (/* binding */ ServicioService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);





class ServicioService {
    constructor(http) {
        this.http = http;
        this.urlbase = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.listSoliVehiculo = [];
        this.listSoliVehiculo2 = [];
        this.listSoliVehiculo3 = [];
        this.listSoliVehiculoRol = [];
    }
    getSolicitudV() {
        return this.http.get(this.urlbase + '/solicitudvehiculo/todas');
    }
    getSolicitudesVehiculo1(estado) {
        // Mostrar la alerta de Swal antes de realizar la solicitud
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la información...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
            }
        });
        let requestUrl = `${this.url}/solicitudvehiculo/lista`;
        if (estado != null) {
            requestUrl = `${this.url}/solicitudvehiculo/lista/${estado}`;
        }
        return this.http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp))
            .toPromise() // Convertir el observable en una Promesa
            .then((soliVe) => {
            // Cierra la alerta de Swal cuando se obtienen las solicitudes
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            this.listSoliVehiculo = soliVe;
            return this.listSoliVehiculo; // Devuelve las solicitudes como resultado de la Promesa
        })
            .catch((error) => {
            // Cierra la alerta de Swal en caso de error y lanza el error
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            console.error('Error al obtener las solicitudes de vehículo', error);
            throw error; // Lanza el error para que el componente lo maneje
        });
    }
    getSolicitudesVehiculo2(estado) {
        // Mostrar la alerta de Swal antes de realizar la solicitud
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la información...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
            }
        });
        let requestUrl = `${this.url}/solicitudvehiculo/lista`;
        if (estado != null) {
            requestUrl = `${this.url}/solicitudvehiculo/lista/${estado}`;
        }
        return this.http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp))
            .toPromise() // Convertir el observable en una Promesa
            .then((soliVe) => {
            // Cierra la alerta de Swal cuando se obtienen las solicitudes
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            this.listSoliVehiculo2 = soliVe;
            return this.listSoliVehiculo2; // Devuelve las solicitudes como resultado de la Promesa
        })
            .catch((error) => {
            // Cierra la alerta de Swal en caso de error y lanza el error
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            console.error('Error al obtener las solicitudes de vehículo', error);
            throw error; // Lanza el error para que el componente lo maneje
        });
    }
    getSolicitudesVehiculo3(estado) {
        // Mostrar la alerta de Swal antes de realizar la solicitud
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la información...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
            }
        });
        let requestUrl = `${this.url}/solicitudvehiculo/lista`;
        if (estado != null) {
            requestUrl = `${this.url}/solicitudvehiculo/lista/${estado}`;
        }
        return this.http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp))
            .toPromise() // Convertir el observable en una Promesa
            .then((soliVe) => {
            // Cierra la alerta de Swal cuando se obtienen las solicitudes
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            this.listSoliVehiculo3 = soliVe;
            return this.listSoliVehiculo3; // Devuelve las solicitudes como resultado de la Promesa
        })
            .catch((error) => {
            // Cierra la alerta de Swal en caso de error y lanza el error
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            console.error('Error al obtener las solicitudes de vehículo', error);
            throw error; // Lanza el error para que el componente lo maneje
        });
    }
    getSolicitudesRol(rol) {
        // Mostrar la alerta de Swal antes de realizar la solicitud
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la información...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().showLoading();
            }
        });
        return this.http
            .get(`${this.url}/solicitudvehiculo/listado/${rol}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp))
            .toPromise() // Convertir el observable en una Promesa
            .then((soliVe) => {
            // Cierra la alerta de Swal cuando se obtienen las solicitudes
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            this.listSoliVehiculoRol = soliVe;
            return this.listSoliVehiculoRol; // Devuelve las solicitudes como resultado de la Promesa
        })
            .catch((error) => {
            // Cierra la alerta de Swal en caso de error y lanza el error
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
            console.error('Error al obtener las solicitudes de vehículo', error);
            throw error; // Lanza el error para que el componente lo maneje
        });
    }
}
ServicioService.ɵfac = function ServicioService_Factory(t) { return new (t || ServicioService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
ServicioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ServicioService, factory: ServicioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 18798:
/*!***********************************************************!*\
  !*** ./src/app/modules/compra/services/compra.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompraService": () => (/* binding */ CompraService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);




class CompraService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.listCompra = [];
        this.listProveedor = [];
    }
    getComprasConPaginacion() {
        this.http
            .get(`${this.baseUrl}/compra/lista`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((resp) => resp.content))
            .subscribe((compras) => {
            this.listCompra = compras; // Actualiza la propiedad listCompra
        });
    }
    getValesPorCompra(idCompra) {
        return this.http
            .get(`${this.baseUrl}/vale/valesporcompra/${idCompra}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((resp) => resp));
    }
    getCompras() {
        this.http
            .get(`${this.baseUrl}/compra/listasinpagina`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((resp) => resp))
            .subscribe((compras) => {
            this.listCompra = compras;
        });
    }
    getProveedor() {
        this.http
            .get(`${this.baseUrl}/proveedor/listasinpagina`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)((resp) => resp))
            .subscribe((proveedor) => {
            this.listProveedor = proveedor;
        });
    }
    guardar(compra, idusuariologueado) {
        const data = {
            compra: compra,
            idusuariologueado: idusuariologueado,
        };
        return this.http.post(`${this.baseUrl}/compra/insertar`, data);
    }
    modificar(compra) {
        return this.http.put(`${this.baseUrl}/compra/editar/${compra.id}`, compra);
    }
    borrar(dat) {
        return this.http.delete(`${this.baseUrl}/compra/eliminar/${dat.id}`);
    }
}
CompraService.ɵfac = function CompraService_Factory(t) { return new (t || CompraService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
CompraService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CompraService, factory: CompraService.ɵfac, providedIn: "root" });


/***/ })

}]);
//# sourceMappingURL=common.js.map