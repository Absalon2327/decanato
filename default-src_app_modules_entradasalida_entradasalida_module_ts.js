"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["default-src_app_modules_entradasalida_entradasalida_module_ts"],{

/***/ 6851:
/*!*************************************************************************!*\
  !*** ./src/app/modules/entradasalida/components/card/card.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardComponent": () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/listaentradasalida.service */ 65337);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _pages_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/modal/modal.component */ 74929);




function CardComponent_app_modal_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-modal", 10);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leyenda", "Salida")("titulo", "Salida")("leyendas", "Salida")("objetivoMision", ctx_r0.obje);
} }
function CardComponent_app_modal_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-modal", 11);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("leyenda", "Entrada")("titulo", "Entrada")("leyendas", "Entrada")("objetivoMision", ctx_r1.obje)("controllerdata", ctx_r1.controllerdata);
} }
class CardComponent {
    constructor(listaentradasalidaservice) {
        this.listaentradasalidaservice = listaentradasalidaservice;
    }
    ngOnInit() {
        if (this.obje.estado == 5) {
            this.controlador1 = true;
            this.controlador2 = false;
        }
        this.listaentradasalidaservice.listarEstado('1', this.obje.codigoSolicitudVehiculo).subscribe({
            next: (value) => {
                this.entradaSalida = value;
                this.controllerdata = true;
                if (this.entradaSalida != null) {
                    if (this.entradaSalida.estado == 1) {
                        this.controlador1 = false;
                        this.controlador2 = true;
                    }
                }
                else {
                    this.controllerdata = false;
                }
            }
        });
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_0__.ListaentradasalidaService)); };
CardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { obje: "obje", queryString: "queryString", entraoOd: "entraoOd" }, decls: 25, vars: 10, consts: [[1, "card"], [1, "bg"], [1, "card2"], [1, "card-img-top", "col-img", 3, "src"], [1, "card-body"], [1, "card3"], [1, "d-flex", "justify-content-center"], [3, "leyenda", "titulo", "leyendas", "objetivoMision", 4, "ngIf"], [3, "leyenda", "titulo", "leyendas", "objetivoMision", "controllerdata", 4, "ngIf"], [1, "blob"], [3, "leyenda", "titulo", "leyendas", "objetivoMision"], [3, "leyenda", "titulo", "leyendas", "objetivoMision", "controllerdata"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Fecha de uso:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Motorista: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Placa: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, CardComponent_app_modal_22_Template, 1, 4, "app-modal", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CardComponent_app_modal_23_Template, 1, 5, "app-modal", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.obje.vehiculo.nombrefoto, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 7, ctx.obje.fechaSalida, "dd/MM/yyyy"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx.obje.motorista.nombre, " ", ctx.obje.motorista.apellido, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.obje.vehiculo.placa);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlador1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.controlador2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _pages_modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe], styles: ["@charset \"UTF-8\";\n\n.d-flex.justify-content-between[_ngcontent-%COMP%] {\n  grid-gap: 12px;\n  gap: 12px;\n  \n}\n\n.btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  \n}\n.bordered-card[_ngcontent-%COMP%] {\n  border: 4px solid #ccc;\n  \n  border-radius: 10px;\n  \n  padding: 15px;\n  \n}\n.image-margin[_ngcontent-%COMP%] {\n  margin-right: 30px;\n  \n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n.card[_ngcontent-%COMP%] {\n  position: center;\n  width: 205px;\n  height: 360px;\n  border-radius: 14px;\n  z-index: 11;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;\n}\n.card2[_ngcontent-%COMP%] {\n  position: center;\n  width: 200px;\n  height: 140px;\n}\n.card3[_ngcontent-%COMP%] {\n  position: center;\n  width: 180px;\n  height: 130px;\n}\n.bg[_ngcontent-%COMP%] {\n  position: center;\n  top: 5px;\n  left: 5px;\n  width: 195px;\n  height: 600px;\n  z-index: 2;\n  background: rgba(255, 255, 255, 0.95);\n  -webkit-backdrop-filter: blur(24px);\n          backdrop-filter: blur(24px);\n  border-radius: 10px;\n  overflow: hidden;\n  outline: 2px solid white;\n}\n.blob[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: 150px;\n  height: 250px;\n  border-radius: 50%;\n  background-color: #972727;\n  opacity: 1;\n  filter: blur(12px);\n  animation: blob-bounce 5s infinite ease;\n}\n@keyframes blob-bounce {\n  0% {\n    transform: translate(-100%, -100%) translate3d(0, 0, 0);\n  }\n  25% {\n    transform: translate(-100%, -100%) translate3d(100%, 0, 0);\n  }\n  50% {\n    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);\n  }\n  75% {\n    transform: translate(-100%, -100%) translate3d(0, 100%, 0);\n  }\n  100% {\n    transform: translate(-100%, -100%) translate3d(0, 0, 0);\n  }\n}\n.modal[_ngcontent-%COMP%] {\n  z-index: 9999;\n  \n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBQWhCLDZDQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQUEsU0FBQTtFQUFXLG1EQUFBO0FBR2Y7QUFBRSxxQ0FBQTtBQUNBO0VBQ0UsbUJBQUE7RUFBcUIsNERBQUE7QUFJekI7QUFBRTtFQUNFLHNCQUFBO0VBQXdCLG1FQUFBO0VBQ3hCLG1CQUFBO0VBQXFCLGdDQUFBO0VBQ3JCLGFBQUE7RUFBZSxpRUFBQTtBQU1uQjtBQUpFO0VBQ0Usa0JBQUE7RUFBb0IsdUNBQUE7QUFReEI7QUFKRTtFQUNFLGFBQUE7QUFPSjtBQUpFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDREQUFBO0FBT0o7QUFIRTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFNSjtBQUpFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU9KO0FBSkU7RUFDRSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EscUNBQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBT0o7QUFKRTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUNBQUE7QUFPSjtBQUpFO0VBQ0U7SUFDRSx1REFBQTtFQU9KO0VBSkU7SUFDRSwwREFBQTtFQU1KO0VBSEU7SUFDRSw2REFBQTtFQUtKO0VBRkU7SUFDRSwwREFBQTtFQUlKO0VBREU7SUFDRSx1REFBQTtFQUdKO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFBZSxtRUFBQTtFQUNmLDhDQUFBO0FBRUoiLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIEVzdGlsbyBwYXJhIGVsIGNvbnRlbmVkb3IgZGUgbG9zIGJvdG9uZXMgKi9cbi5kLWZsZXguanVzdGlmeS1jb250ZW50LWJldHdlZW4ge1xuICBnYXA6IDEycHg7XG4gIC8qIEFqdXN0YSBlbCBlc3BhY2lvIGhvcml6b250YWwgZW50cmUgbG9zIGJvdG9uZXMgKi9cbn1cblxuLyogRXN0aWxvIG9wY2lvbmFsIHBhcmEgbG9zIGJvdG9uZXMgKi9cbi5idG4ge1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAvKiBFdml0YSBxdWUgbG9zIGJvdG9uZXMgc2UgZW52dWVsdmFuIGFsIHNpZ3VpZW50ZSByZW5nbMOzbiAqL1xufVxuXG4uYm9yZGVyZWQtY2FyZCB7XG4gIGJvcmRlcjogNHB4IHNvbGlkICNjY2M7XG4gIC8qIEVzdGFibGVjZSBlbCBhbmNobyB5IGVsIGNvbG9yIGRlbCBib3JkZSBzZWfDum4gdHVzIHByZWZlcmVuY2lhcyAqL1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAvKiBBZ3JlZ2EgZXNxdWluYXMgcmVkb25kZWFkYXMgKi9cbiAgcGFkZGluZzogMTVweDtcbiAgLyogQWdyZWdhIGVzcGFjaW8gaW50ZXJubyBhbHJlZGVkb3IgZGVsIGNvbnRlbmlkbyBkZSBsYSB0YXJqZXRhICovXG59XG5cbi5pbWFnZS1tYXJnaW4ge1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIC8qIEFqdXN0YSBlbCB2YWxvciBzZWfDum4gbG8gbmVjZXNpdGVzICovXG59XG5cbi5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAyMDVweDtcbiAgaGVpZ2h0OiAzNjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgei1pbmRleDogMTE7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAyMHB4IDIwcHggNjBweCAjYmViZWJlLCAtMjBweCAtMjBweCA2MHB4ICNmZmZmZmY7XG59XG5cbi5jYXJkMiB7XG4gIHBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAxNDBweDtcbn1cblxuLmNhcmQzIHtcbiAgcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IDEzMHB4O1xufVxuXG4uYmcge1xuICBwb3NpdGlvbjogY2VudGVyO1xuICB0b3A6IDVweDtcbiAgbGVmdDogNXB4O1xuICB3aWR0aDogMTk1cHg7XG4gIGhlaWdodDogNjAwcHg7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyNHB4KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3V0bGluZTogMnB4IHNvbGlkIHdoaXRlO1xufVxuXG4uYmxvYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogMTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5NzI3Mjc7XG4gIG9wYWNpdHk6IDE7XG4gIGZpbHRlcjogYmx1cigxMnB4KTtcbiAgYW5pbWF0aW9uOiBibG9iLWJvdW5jZSA1cyBpbmZpbml0ZSBlYXNlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsb2ItYm91bmNlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtMTAwJSkgdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbiAgMjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTEwMCUpIHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC0xMDAlKSB0cmFuc2xhdGUzZCgxMDAlLCAxMDAlLCAwKTtcbiAgfVxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMDAlLCAtMTAwJSkgdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC0xMDAlKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuLm1vZGFsIHtcbiAgei1pbmRleDogOTk5OTtcbiAgLyogVW4gdmFsb3IgYWx0byBwYXJhIGFzZWd1cmFyc2UgZGUgcXVlIGVzdMOpIGVuIGxhIHBhcnRlIHN1cGVyaW9yICovXG4gIC8qIE90cmFzIHByb3BpZWRhZGVzIGRlIGVzdGlsbyBwYXJhIGxhIG1vZGFsICovXG59Il19 */", "p[_ngcontent-%COMP%] {\n        margin: 0; \n    }"] });


/***/ }),

/***/ 85239:
/*!***********************************************************************!*\
  !*** ./src/app/modules/entradasalida/entradasalida-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntradasalidaRoutingModule": () => (/* binding */ EntradasalidaRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/listar/listar.component */ 8740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);




const routes = [
    { path: 'listar', component: _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_0__.ListarComponent }
];
class EntradasalidaRoutingModule {
}
EntradasalidaRoutingModule.ɵfac = function EntradasalidaRoutingModule_Factory(t) { return new (t || EntradasalidaRoutingModule)(); };
EntradasalidaRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: EntradasalidaRoutingModule });
EntradasalidaRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EntradasalidaRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 61711:
/*!***************************************************************!*\
  !*** ./src/app/modules/entradasalida/entradasalida.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntradasalidaModule": () => (/* binding */ EntradasalidaModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _entradasalida_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entradasalida-routing.module */ 85239);
/* harmony import */ var _pages_vistaentradasalida_vistaentradasalida_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/vistaentradasalida/vistaentradasalida.component */ 51065);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-infinite-scroll */ 70296);
/* harmony import */ var src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/ui/ui.module */ 63091);
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-apexcharts */ 86571);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-charts */ 10702);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-search-filter */ 24352);
/* harmony import */ var _service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/listaentradasalida.service */ 65337);
/* harmony import */ var _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/listar/listar.component */ 8740);
/* harmony import */ var _pages_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/tabla/tabla.component */ 64236);
/* harmony import */ var _pages_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/modal/modal.component */ 74929);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/card/card.component */ 6851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 14001);


















class EntradasalidaModule {
}
EntradasalidaModule.ɵfac = function EntradasalidaModule_Factory(t) { return new (t || EntradasalidaModule)(); };
EntradasalidaModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: EntradasalidaModule });
EntradasalidaModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [
        _service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_4__.ListaentradasalidaService,
        //DatePipe
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _entradasalida_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntradasalidaRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__.InfiniteScrollModule,
            src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_14__.NgApexchartsModule,
            ng2_charts__WEBPACK_IMPORTED_MODULE_15__.ChartsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModalModule,
            ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule,
            //BrowserModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](EntradasalidaModule, { declarations: [_pages_vistaentradasalida_vistaentradasalida_component__WEBPACK_IMPORTED_MODULE_1__.VistaentradasalidaComponent,
        _pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_5__.ListarComponent,
        _pages_tabla_tabla_component__WEBPACK_IMPORTED_MODULE_6__.TablaComponent,
        _pages_modal_modal_component__WEBPACK_IMPORTED_MODULE_7__.ModalComponent,
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__.CardComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _entradasalida_routing_module__WEBPACK_IMPORTED_MODULE_0__.EntradasalidaRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__.InfiniteScrollModule,
        src_app_shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__.UIModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule,
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_14__.NgApexchartsModule,
        ng2_charts__WEBPACK_IMPORTED_MODULE_15__.ChartsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModalModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_17__.NgxPaginationModule,
        ng2_search_filter__WEBPACK_IMPORTED_MODULE_3__.Ng2SearchPipeModule], exports: [_pages_listar_listar_component__WEBPACK_IMPORTED_MODULE_5__.ListarComponent] }); })();


/***/ }),

/***/ 5225:
/*!********************************************************************!*\
  !*** ./src/app/modules/entradasalida/interface/EntSalinterface.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntradaSalidaI": () => (/* binding */ EntradaSalidaI),
/* harmony export */   "SolitudVehiculoI": () => (/* binding */ SolitudVehiculoI)
/* harmony export */ });
class EntradaSalidaI {
    constructor(tipo, fecha, hora, combustible, kilometraje, estado, solicitudvehiculo) {
        this.tipo = tipo;
        this.fecha = fecha;
        this.hora = hora;
        this.combustible = combustible;
        this.kilometraje = kilometraje;
        this.estado = estado;
        this.solicitudvehiculo = solicitudvehiculo;
    }
}
class SolitudVehiculoI {
    constructor(codigoSolicitudVehiculo, fechaEntrada) {
        this.codigoSolicitudVehiculo = codigoSolicitudVehiculo;
        this.fechaEntrada = fechaEntrada;
    }
}


/***/ }),

/***/ 8740:
/*!************************************************************************!*\
  !*** ./src/app/modules/entradasalida/pages/listar/listar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarComponent": () => (/* binding */ ListarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/listaentradasalida.service */ 65337);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/card/card.component */ 6851);





function ListarComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const obj_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("obje", obj_r1);
} }
class ListarComponent {
    constructor(listavehiculos) {
        this.listavehiculos = listavehiculos;
        // bread crumb items
        //vehiculos:IVehiculoentradaSalida[]=[];//array de vehiculos
        this.vehiculos = []; //array de vehiculos
        this.entradasalidas = [];
        this.term = '';
        this.parametroBuscar = ''; //parametro de busqueda.
    }
    ngOnInit() {
        this.breadCrumbItems = [{ label: 'Entradas' }, { label: 'Salidas', active: true }];
        this.transactions = [
            {
                id: '#SK2540',
                name: 'Neal Matthews',
                date: '07 Oct, 2019',
                total: '$400',
                status: 'Paid',
                payment: ['fab fa-cc-mastercard', 'Mastercard'],
                index: 1,
            },
            {
                id: '#SK2541',
                name: 'Jamal Burnett',
                date: '07 Oct, 2019',
                total: '$380',
                status: 'Chargeback',
                payment: ['fab fa-cc-visa', 'Visa'],
                index: 2,
            },
            {
                id: '#SK2542',
                name: 'Juan Mitchell',
                date: '06 Oct, 2019',
                total: '$384',
                status: 'Paid',
                payment: ['fab fa-cc-paypal', 'Paypal'],
                index: 3,
            },
            {
                id: '#SK2543',
                name: 'Barry Dick',
                date: '05 Oct, 2019',
                total: '$412',
                status: 'Paid',
                payment: ['fab fa-cc-mastercard', 'Mastercard'],
                index: 4,
            },
            {
                id: '#SK2544',
                name: 'Ronald Taylor',
                date: '04 Oct, 2019',
                total: '$404',
                status: 'Refund',
                payment: ['fab fa-cc-visa', 'Visa'],
                index: 5,
            },
            {
                id: '#SK2545',
                name: 'Jacob Hunter',
                date: '04 Oct, 2019',
                total: '$392',
                status: 'Paid',
                payment: ['fab fa-cc-paypal', 'Paypal'],
                index: 6,
            },
            {
                id: '#SK2546',
                name: 'William Cruz',
                date: '03 Oct, 2019',
                total: '$374',
                status: 'Paid',
                payment: ['fas fa-money-bill-alt', 'COD'],
                index: 7,
            },
            {
                id: '#SK2547',
                name: 'Dustin Moser',
                date: '02 Oct, 2019',
                total: '$350',
                status: 'Paid',
                payment: ['fab fa-cc-mastercard', 'Mastercard'],
                index: 8,
            },
            {
                id: '#SK2548',
                name: 'Clark Benson',
                date: '01 Oct, 2019',
                total: '$345',
                status: 'Refund',
                payment: ['fab fa-cc-visa', 'Visa'],
                index: 9,
            },
        ];
        this.buscar();
    }
    buscar() {
        //metodo para buscar
        this.parametroBuscar = this.parametroBuscar.toLocaleLowerCase();
        this.listavehiculos.buscarVehiculo(this.parametroBuscar).subscribe((resp) => {
            this.vehiculos = resp;
        });
    }
}
ListarComponent.ɵfac = function ListarComponent_Factory(t) { return new (t || ListarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_0__.ListaentradasalidaService)); };
ListarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ListarComponent, selectors: [["app-listar"]], decls: 8, vars: 2, consts: [[1, "container-fluid"], ["title", "ENTRADAS Y SALIDAS DE VEHICULOS", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "row-cols-1", "row-cols-md-3", "row-cols-xl-5", "justify-content-center"], [4, "ngFor", "ngForOf"], [3, "obje"]], template: function ListarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ListarComponent_ng_container_7_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.vehiculos);
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_1__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _components_card_card_component__WEBPACK_IMPORTED_MODULE_2__.CardComponent], styles: ["@charset \"UTF-8\";\n.btn-separado[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3Rhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDSSxtQkFBQTtFQUFxQixxRUFBQTtBQUd6QiIsImZpbGUiOiJsaXN0YXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uYnRuLXNlcGFyYWRvIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgLyogQWp1c3RhIGxhIGNhbnRpZGFkIGRlIHNlcGFyYWNpw7NuIHZlcnRpY2FsIHNlZ8O6biB0dXMgcHJlZmVyZW5jaWFzICovXG59Il19 */"] });


/***/ }),

/***/ 74929:
/*!**********************************************************************!*\
  !*** ./src/app/modules/entradasalida/pages/modal/modal.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interface_EntSalinterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../interface/EntSalinterface */ 5225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/listaentradasalida.service */ 65337);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);











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
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.titulo);
} }
function ModalComponent_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_span_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return ctx_r7.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.titulo);
} }
function ModalComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_span_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5); return ctx_r9.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_4_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r19.restaurarAlerts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_4_div_3_i_1_Template, 1, 0, "i", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_4_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r23); const modal_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r12.siMuestraAlertas());
} }
function ModalComponent_ng_template_4_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Importante!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_4_div_5_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28); const alert_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r26.CambiarAlert(alert_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r24.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](alert_r24.message);
} }
function ModalComponent_ng_template_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_4_div_5_div_1_Template, 6, 4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", alert_r24.show);
} }
function ModalComponent_ng_template_4_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Requiere un fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Requiere una hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Requiere datos en el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Requiere datos en el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_ng_template_4_div_3_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalComponent_ng_template_4_div_5_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ModalComponent_ng_template_4_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r30.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Misi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ModalComponent_ng_template_4_Template_input_ngModelChange_24_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r32.fechaActual = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, ModalComponent_ng_template_4_span_26_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function ModalComponent_ng_template_4_Template_input_ngModelChange_33_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r33.horaActual = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ModalComponent_ng_template_4_span_35_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, "Kilometraje");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function ModalComponent_ng_template_4_Template_input_keypress_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r34.OnlyNumbersAllowed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](44, ModalComponent_ng_template_4_span_44_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Combustible");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "Seleccione la opci\u00F3n correspondiente");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](55, "Un tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Mas de tres cuarto de tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Tres cuarto de tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "Menos de tres cuarto de tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](63, "Mas de medio tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Medio tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](67, "Menos de medio tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](69, "Mas de un cuarto de tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](71, "Un cuarto de tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "Menos de un cuarto de tanque");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](75, ModalComponent_ng_template_4_span_75_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_4_Template_button_click_79_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r31); const modal_r11 = restoredCtx.$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, " Cancelar ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_10_0;
    let tmp_13_0;
    let tmp_15_0;
    let tmp_18_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Registro de ", ctx_r4.leyendas, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.formBuilder);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.esCampoValido("solicitudvehiculo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.objetivoMision.codigoSolicitudVehiculo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", ctx_r4.objetivoMision.codigoSolicitudVehiculo);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r4.objetivoMision.objetivoMision);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.esCampoValido("fecha"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.fechaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_10_0 = ctx_r4.formBuilder.get("fecha")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.esCampoValido("hora"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.horaActual);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_13_0 = ctx_r4.formBuilder.get("hora")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.esCampoValido("kilometraje"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx_r4.formBuilder.get("kilometraje")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r4.esCampoValido("combustible"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r4.entradasalidaOd != null ? ctx_r4.entradasalidaOd.combustible : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_18_0 = ctx_r4.formBuilder.get("combustible")) == null ? null : tmp_18_0.errors == null ? null : tmp_18_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r4.titulo !== "Editar" ? "Guardar" : "Modificar", " ");
} }
class ModalComponent {
    constructor(modalService, mensajesService, fb, router, listaentradasalidaservice, usuarios) {
        this.modalService = modalService;
        this.mensajesService = mensajesService;
        this.fb = fb;
        this.router = router;
        this.listaentradasalidaservice = listaentradasalidaservice;
        this.usuarios = usuarios;
        //objetivoMision="";
        this.fechaSalida = "";
        this.entradasalidas = []; //para almacenar los resultados
        this.modoEdicion = false;
        /////esto para enviar el objetivo a la modal
        //objetivoMision: IsolicitudVehiculo;
        this.kilometrajeAnterior = 0;
        this.alerts = [
            {
                id: 9,
                type: "info",
                message: " Por favor, asegúrese de completar todos los campos obligatorios (*) y de cumplir con los formatos correspondientes. Además, le recomendamos prestar atención a los mensajes de alerta",
                show: false,
            },
        ];
    }
    ngOnInit() {
        this.formBuilder = this.Iniciarformulario();
        if (!this.fechaActual) {
            this.fechaActual = this.getCurrentDate();
        }
        if (!this.horaActual) {
            this.horaActual = this.getCurrentTime();
        }
        this.listaentradasalidaservice.getMisiones();
    }
    // Función para obtener la fecha actual en formato "yyyy-MM-dd"
    getCurrentDate() {
        const now = new Date();
        const year = now.getFullYear();
        const month = (now.getMonth() + 1).toString().padStart(2, "0");
        const day = now.getDate().toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
    }
    // Función para obtener la hora actual en formato "hh:mm"
    getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, "0");
        const minutes = now.getMinutes().toString().padStart(2, "0");
        return `${hours}:${minutes}`;
    }
    Iniciarformulario() {
        return this.fb.group({
            id: [''],
            fecha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            hora: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            kilometraje: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            combustible: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            solicitudvehiculo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
        });
    }
    //funcion para obtener la fecha actual.
    getToday() {
        return new Date();
    }
    // Validador personalizado para la fecha
    maxDateValidator() {
        return (control) => {
            const selectedDate = new Date(control.value);
            const today = this.getToday();
            if (selectedDate <= today) {
                return { max: true };
            }
            return null;
        };
    }
    OnlyNumbersAllowed(event) {
        const charCode = event.which ? event.which : event.keyCode;
        const inputValue = event.target.value;
        const dotIndex = inputValue.indexOf(".");
        // Permitir números del 0 al 9
        if (charCode >= 48 && charCode <= 57) {
            // Verificar si ya existe un punto decimal en el campo
            if (dotIndex !== -1) {
                // Obtener la parte decimal después del punto
                const decimalPart = inputValue.substr(dotIndex + 1);
                // Permitir máximo dos decimales
                if (decimalPart.length >= 2) {
                    console.log("Máximo dos decimales permitidos");
                    return false;
                }
            }
            return true;
        }
        else if (charCode === 46 && dotIndex === -1) {
            // Permitir un único punto decimal si no existe uno ya en el campo
            return true;
        }
        else {
            console.log("charCode restricted is " + charCode);
            return false;
        }
    }
    openModal(content) {
        this.modalService.open(content, { size: "lx", centered: true });
    }
    editando() {
        const ent = this.formBuilder.value;
        this.listaentradasalidaservice.putEmpleado(ent).subscribe((resp) => {
            if (resp) {
                const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    //timerProgressBar: true,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                    },
                });
                Toast.fire({
                    icon: "success",
                    text: "Modificación exitosa",
                });
                this.formBuilder.reset();
                this.recargar();
                this.modalService.dismissAll();
            }
        }, (err) => {
            this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err);
            this.obtenerLista();
            this.recargar();
        });
    }
    guardar() {
        if (this.formBuilder.valid) {
            if (this.entradasalidaOd != null) {
                //this.editando();
            }
            else {
                console.log("antes de registrar");
                this.registrando();
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                position: "center",
                title: "Faltan datos en el formuario",
                text: "submit disparado, formulario no valido",
                icon: "warning",
            });
        }
    }
    registrando() {
        const listando = this.formBuilder.value;
        if (!this.controllerdata) {
            const entsali = new _interface_EntSalinterface__WEBPACK_IMPORTED_MODULE_1__.EntradaSalidaI(listando.tipo, listando.fecha, listando.hora, listando.combustible, listando.kilometraje, 1, listando.solicitudvehiculo);
            this.listaentradasalidaservice.NuevosDatos(entsali).subscribe((resp) => {
                if (resp) {
                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        //timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                            toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        text: "Almacenamiento exitoso",
                    });
                    this.formBuilder.reset();
                    this.recargar();
                    this.modalService.dismissAll();
                }
            }, (err) => {
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err);
                this.obtenerLista();
                this.recargar();
            });
        }
        else {
            const entsali = new _interface_EntSalinterface__WEBPACK_IMPORTED_MODULE_1__.EntradaSalidaI(listando.tipo, listando.fecha, listando.hora, listando.combustible, listando.kilometraje, 2, listando.solicitudvehiculo);
            const modificando = new _interface_EntSalinterface__WEBPACK_IMPORTED_MODULE_1__.SolitudVehiculoI(listando.solicitudvehiculo, listando.fecha);
            this.listaentradasalidaservice.extrayendokilometraje(listando.solicitudvehiculo).subscribe({
                next: (value) => {
                    this.kilomet = value;
                    var kilometrajeString1 = this.kilomet.kilometraje;
                    var kilometrajeEntero = parseInt(kilometrajeString1, 10);
                    var kilometrajeString2 = listando.kilometraje;
                    var kilometrajeEntero2 = parseInt(kilometrajeString2, 10);
                    if (kilometrajeEntero2 > kilometrajeEntero) {
                        this.listaentradasalidaservice.NuevosDatos(entsali).subscribe((resp) => {
                            this.listaentradasalidaservice.modificandoFecha(modificando).subscribe((res) => {
                                if (res) {
                                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                                        toast: true,
                                        position: "top-end",
                                        showConfirmButton: false,
                                        timer: 3000,
                                        //timerProgressBar: true,
                                        didOpen: (toast) => {
                                            toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                                            toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                                        },
                                    });
                                    Toast.fire({
                                        icon: "success",
                                        text: "Almacenamiento exito",
                                    });
                                    this.formBuilder.reset();
                                    this.recargar();
                                    this.modalService.dismissAll();
                                }
                            }, (err) => {
                                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err);
                                this.obtenerLista();
                                this.recargar();
                                // Inicia mensaje dirigido hacia el correo institucional
                                this.EmailE("!Aviso importante!", "Se ha detectado un registro de entrada", "EL Auto detectado ha completado con su mision: " + this.objetivoMision.objetivoMision, "Se solicita continuar con los procesos para poder liquidar"); // Termina mensaje dirigido hacia el correo institucional
                            });
                        });
                    }
                    else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                            position: "center",
                            title: "Error",
                            text: "El kilometraje debe ser mayor al de salida",
                            icon: "warning",
                        });
                    }
                }
            });
        }
    }
    recargar() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([currentUrl]);
    }
    obtenerLista() {
        //para poder mostrar e la tabla
        this.listaentradasalidaservice.ObtenerLista.subscribe((resp) => {
            this.entradasalidas = resp;
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formBuilder.get(campo);
        /*if(campo=="solicitudvehiculo"){
          return 'is-valid';
        }*/
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    get Listamisiones() {
        return this.listaentradasalidaservice.listDeMisiones;
    }
    //metodos para la alerta
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
    EmailE(asunto, titulo, mensaje, centro) {
        const nombre = this.correos[1].nombre;
        const correo = this.correos[1].correo;
        const email = {
            asunto: asunto,
            titulo: titulo,
            email: correo,
            receptor: "Estimad@ : " + nombre,
            mensaje: mensaje,
            centro: centro,
            codigo: '',
            abajo: "Gracias por su atención a este importante mensaje.",
        };
        this.usuarios.SendEmail(email).subscribe((resp) => {
            console.log("resp: ", resp);
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().close();
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 2500,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                    toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                },
            });
            Toast.fire({
                icon: "success",
                text: "¡Se ha enviando un mensaje al correo institucional!",
            }).then(() => { });
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: "error",
                title: "Algo salió mal",
                text: err,
            });
        });
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_2__.MensajesService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_3__.ListaentradasalidaService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], inputs: { leyenda: "leyenda", leyendas: "leyendas", titulo: "titulo", entradasalidaOd: "entradasalidaOd", objetivoMision: "objetivoMision", controllerdata: "controllerdata" }, decls: 6, vars: 3, consts: [[4, "ngIf"], ["id", "modalEmpleado", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "modal-fullscreen-xl-down", "fade"], ["role", "document"], ["content", ""], [1, "text-sm-end"], ["type", "button", 1, "btn", "btn-salida", "btn-separado", 3, "click"], ["type", "button", 1, "btn", "btn-entrada", 3, "click"], ["type", "button", 1, "btn", "btn-info", "btn-sm", "btn-rounded", "boton-cuadrado", "mx-1", 3, "click"], [1, "mdi", "mdi-account-edit-outline"], [1, "modal-header"], [1, "modal-title", "mt-0"], ["class", "btn-alerta", 4, "ngIf"], [1, "modal-body"], [4, "ngFor", "ngForOf"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md-12"], [1, "mb-3"], [1, "text-danger"], ["id", "Selectsolicitudvehiculo", "name", "Selectsolicitudvehiculo", "formControlName", "solicitudvehiculo", "autocomplete", "off", "disabled", "", 1, "form-control", 3, "ngModel"], ["selected", "", 3, "value"], [1, "col-md-6"], ["type", "date", "id", "fecha", "name", "fecha", "formControlName", "fecha", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "invalid-feedback"], ["type", "time", "id", "hora", "name", "hora", "formControlName", "hora", "autocomplete", "off", "disabled", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "kilometraje", "name", "kilometraje", "formControlName", "kilometraje", "autocomplete", "off", "pattern", "", "placeholder", "Escribe el kilometraje", 1, "form-control", 3, "keypress"], ["id", "combustible", "name", "combustible", "formControlName", "combustible", "autocomplete", "off", "placeholder", "Escribe el tipo de combustible", 1, "form-control", "form-select", 3, "ngModel"], ["value", ""], ["value", "Un tanque"], ["value", "Mas de tres cuarto de tanque"], ["value", "Tres cuarto de tanque"], ["value", "Menos de tres cuarto de tanque"], ["value", "Mas de medio tanque"], ["value", "Medio tanque"], ["value", "Menos de medio tanque"], ["value", "Mas de un cuarto de tanque"], ["value", "Un cuarto de tanque"], ["value", "Menos de un cuarto de tanque"], [1, "d-flex", "justify-content-end", "mt-4"], ["type", "submit", "id", "btn-save", "name", "btn-save", 1, "btn", "btn-primary", "me-2"], ["type", "button", "id", "btn-cancel", "name", "btn-cancel", "aria-hidden", "true", 1, "btn", "btn-dark", 3, "click"], [1, "btn-alerta"], ["class", "mdi mdi-20px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-20px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], [1, "text-justify"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalComponent_span_0_Template, 4, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_span_1_Template, 4, 1, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_span_2_Template, 3, 0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_ng_template_4_Template, 81, 25, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda !== "Entrada");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda !== "Salida");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda === ctx.titulo && ctx.titulo == "Editar");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator], styles: ["@charset \"UTF-8\";\n\n.btn-entrada[_ngcontent-%COMP%] {\n  background-color: #df3636;\n  \n  color: #ffffff;\n  \n}\n\n.btn-salida[_ngcontent-%COMP%] {\n  background-color: #3c4cdaad;\n  \n  color: #ffffff;\n  \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFkLG1DQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUEyQix3QkFBQTtFQUMzQixjQUFBO0VBQWdCLDBCQUFBO0FBSXBCO0FBREUsa0NBQUE7QUFDQTtFQUNFLDJCQUFBO0VBQTZCLHdCQUFBO0VBQzdCLGNBQUE7RUFBZ0IsMEJBQUE7QUFNcEIiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBFc3RpbG8gcGFyYSBlbCBib3TDs24gXCJFbnRyYWRhXCIgKi9cbi5idG4tZW50cmFkYSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZjM2MzY7XG4gIC8qIENvbG9yIGRlIGZvbmRvIGF6dWwgKi9cbiAgY29sb3I6ICNmZmZmZmY7XG4gIC8qIENvbG9yIGRlIHRleHRvIGJsYW5jbyAqL1xufVxuXG4vKiBFc3RpbG8gcGFyYSBlbCBib3TDs24gXCJTYWxpZGFcIiAqL1xuLmJ0bi1zYWxpZGEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0Y2RhYWQ7XG4gIC8qIENvbG9yIGRlIGZvbmRvIHJvam8gKi9cbiAgY29sb3I6ICNmZmZmZmY7XG4gIC8qIENvbG9yIGRlIHRleHRvIGJsYW5jbyAqL1xufSJdfQ== */"] });


/***/ }),

/***/ 64236:
/*!**********************************************************************!*\
  !*** ./src/app/modules/entradasalida/pages/tabla/tabla.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablaComponent": () => (/* binding */ TablaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/listaentradasalida.service */ 65337);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/modal.component */ 74929);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 24352);






function TablaComponent_tr_17_app_modal_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-modal", 9);
} if (rf & 2) {
    const data_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("leyenda", "Editar")("titulo", "Editar")("leyendas", "entrada y salida")("entradasalidaOd", data_r1);
} }
function TablaComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, TablaComponent_tr_17_app_modal_12_Template, 1, 4, "app-modal", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.hora);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r1.combustible);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", data_r1.kilometraje, "Km");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", data_r1.tipo != "Motorista");
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class TablaComponent {
    constructor(listaentradasalidaservice) {
        this.listaentradasalidaservice = listaentradasalidaservice;
        this.entradasalidas = []; //para almacenar los resultados
    }
    ngOnInit() {
        this.obtenerLista();
    }
    obtenerLista() {
        this.listaentradasalidaservice.ObtenerLista.subscribe((resp) => {
            this.entradasalidas = resp;
            console.log(resp);
        });
    }
}
TablaComponent.ɵfac = function TablaComponent_Factory(t) { return new (t || TablaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_0__.ListaentradasalidaService)); };
TablaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TablaComponent, selectors: [["app-tabla"]], inputs: { entraoOd: "entraoOd", queryString: "queryString" }, decls: 22, vars: 9, consts: [[1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table-light"], [1, "align-middle"], [4, "ngFor", "ngForOf"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], ["nextLabel", "Siguiente", "previousLabel", "Anterior", 3, "pageChange"], [1, "align-middle", "text-center", "text-center"], [3, "leyenda", "titulo", "leyendas", "entradasalidaOd", 4, "ngIf"], [3, "leyenda", "titulo", "leyendas", "entradasalidaOd"]], template: function TablaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "thead", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Tipo");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Combustible");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Kilometraje");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, TablaComponent_tr_17_Template, 13, 6, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "pagination-controls", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function TablaComponent_Template_pagination_controls_pageChange_21_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 4, ctx.entradasalidas, ctx.queryString), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.p)));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _modal_modal_component__WEBPACK_IMPORTED_MODULE_1__.ModalComponent], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWJsYS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 51065:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/entradasalida/pages/vistaentradasalida/vistaentradasalida.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VistaentradasalidaComponent": () => (/* binding */ VistaentradasalidaComponent)
/* harmony export */ });
/* harmony import */ var _interface_EntSalinterface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../interface/EntSalinterface */ 5225);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/constants/constants */ 24017);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/listaentradasalida.service */ 65337);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/ui/pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ 19746);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-search-filter */ 24352);













function VistaentradasalidaComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VistaentradasalidaComponent_tr_29_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](35); return ctx_r6.openModal(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "+Salida");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VistaentradasalidaComponent_tr_29_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](37); return ctx_r8.openModal(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "+Entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.tipo);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.fecha);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.hora);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r5.combustible);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", data_r5.kilometraje, "Km");
} }
function VistaentradasalidaComponent_ng_template_34_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere un nombre para el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_34_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "nombre no valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_34_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere un fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_34_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere una hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_34_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere datos en el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_34_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere datos en el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "REGISTRO DE SALIDAS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VistaentradasalidaComponent_ng_template_34_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const modal_r9 = restoredCtx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function VistaentradasalidaComponent_ng_template_34_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Misi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, VistaentradasalidaComponent_ng_template_34_span_19_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, VistaentradasalidaComponent_ng_template_34_span_20_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, VistaentradasalidaComponent_ng_template_34_span_30_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, VistaentradasalidaComponent_ng_template_34_span_39_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Kilometraje");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function VistaentradasalidaComponent_ng_template_34_Template_input_keypress_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.OnlyNumbersAllowed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, VistaentradasalidaComponent_ng_template_34_span_48_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Combustible");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, VistaentradasalidaComponent_ng_template_34_span_57_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VistaentradasalidaComponent_ng_template_34_Template_button_click_59_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const modal_r9 = restoredCtx.$implicit; return modal_r9.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.formBuilder);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.esCampoValido("tipo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.formBuilder.get("tipo")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r2.formBuilder.get("tipo")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.esCampoValido("fecha"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r2.formBuilder.get("tipo")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.esCampoValido("hora"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r2.formBuilder.get("hora")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.esCampoValido("kilometraje"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r2.formBuilder.get("kilometraje")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r2.esCampoValido("combustible"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r2.formBuilder.get("combustible")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
} }
function VistaentradasalidaComponent_ng_template_36_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere un nombre para el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_36_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "nombre no valido");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_36_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere un fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_36_span_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere una hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_36_span_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere datos en el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_36_span_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Requiere datos en el campo");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function VistaentradasalidaComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "REGISTRO DE ENTRADAS");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VistaentradasalidaComponent_ng_template_36_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const modal_r21 = restoredCtx.$implicit; return modal_r21.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function VistaentradasalidaComponent_ng_template_36_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " * Campo obligatorio");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "Misi\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, VistaentradasalidaComponent_ng_template_36_span_19_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, VistaentradasalidaComponent_ng_template_36_span_20_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Fecha");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, VistaentradasalidaComponent_ng_template_36_span_30_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "Hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, VistaentradasalidaComponent_ng_template_36_span_39_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Kilometraje");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("keypress", function VistaentradasalidaComponent_ng_template_36_Template_input_keypress_46_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r31.OnlyNumbersAllowed($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, VistaentradasalidaComponent_ng_template_36_span_48_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Combustible");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, " *");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](55, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](57, VistaentradasalidaComponent_ng_template_36_span_57_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VistaentradasalidaComponent_ng_template_36_Template_button_click_59_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29); const modal_r21 = restoredCtx.$implicit; return modal_r21.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Cerrar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Guardar");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_2_0;
    let tmp_3_0;
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r4.formBuilder);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r4.esCampoValido("tipo"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r4.formBuilder.get("tipo")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r4.formBuilder.get("tipo")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r4.esCampoValido("fecha"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r4.formBuilder.get("tipo")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r4.esCampoValido("hora"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r4.formBuilder.get("hora")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r4.esCampoValido("kilometraje"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r4.formBuilder.get("kilometraje")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMap"](ctx_r4.esCampoValido("combustible"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r4.formBuilder.get("combustible")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
} }
const _c0 = function (a1) { return { itemsPerPage: 5, currentPage: a1 }; };
class VistaentradasalidaComponent {
    //public myForm: FormGroup;
    constructor(modalService, fb, listaentradasalidaservice, router) {
        this.modalService = modalService;
        this.fb = fb;
        this.listaentradasalidaservice = listaentradasalidaservice;
        this.router = router;
        //formularioGeneral!: FormGroup;//formularioGeneral= new FormGroup({});
        this.entradasalidas = []; //para almacenar los resultados
        this.isName = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_2__.NAME_VALIDATE;
        this.page = 0;
        this.size = 5;
        this.isFirst = false;
        this.isLast = false;
        this.totalPages = [];
        this.totalElement = 0;
        this.term = '';
        this.breadCrumbItems = [{ label: 'Entradas y Salidas' }, { label: 'Vista', active: true }]; //Migas de pan
    }
    ngOnInit() {
        this.obtenerLista();
        this.formBuilder = this.Iniciarformulario();
        //validacion del campo de fecha
        //this.myForm= this.createform();
        //this.fechaminima= new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()-1)
        //this.fechaStrMinima=this.pd.transform(this.fechaminima, "yyyy-MM-dd", 'UTC');
        //this.fechamaxima= new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()+1)
        //this.fechaStrMaxima=this.pd.transform(this.fechamaxima, "yyyy-MM-dd", 'UTC');
    }
    OnlyNumbersAllowed(event) {
        const charCode = (event.wich) ? event.wich : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 75)) {
            console.log('charCode restricted is' + charCode);
            return false;
        }
        return true;
    }
    guardar() {
        if (this.formBuilder.valid) {
            if (this.entradasalidaOd != null) {
                //this.editando();
            }
            else {
                console.log("antes de registrar");
                this.registrando();
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                position: 'center',
                title: 'Faltan datos en el formuario',
                text: 'submit disparado, formulario no valido',
                icon: 'warning',
            });
        }
    }
    registrando() {
        const listando = this.formBuilder.value;
        const entsali = new _interface_EntSalinterface__WEBPACK_IMPORTED_MODULE_0__.EntradaSalidaI(listando.tipo, listando.fecha, listando.hora, listando.combustible, listando.kilometraje);
        console.log(entsali);
        this.listaentradasalidaservice.NuevosDatos(entsali).subscribe((resp) => {
            if (resp) {
                /* console.log(resp); */
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    position: 'center',
                    title: 'Buen trabajo',
                    text: 'Datos guardados con exito',
                    icon: 'info',
                });
                this.formBuilder.reset();
                this.recargar();
                this.modalService.dismissAll();
            }
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                icon: 'error',
                title: 'Error',
                text: 'Algo paso, hable con el administrador',
            });
            this.obtenerLista();
            this.recargar();
        });
    }
    recargar() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([currentUrl]);
    }
    Iniciarformulario() {
        1;
        return this.fb.group({
            tipo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(this.isName)]],
            fecha: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            hora: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            kilometraje: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            combustible: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
    }
    obtenerLista() {
        this.listaentradasalidaservice.ObtenerLista.subscribe((resp) => {
            this.entradasalidas = resp;
            console.log(resp);
        });
    }
    esCampoValido(campo) {
        const validarCampo = this.formBuilder.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
    }
    /**
         * Open modal
         * @param content modal content
         */
    openModal(content) {
        this.modalService.open(content);
    }
    /**********************PAGINACION************************* */
    setSize(num) {
        this.size = num;
        //this.cargarDatos();
    }
    setPage(page) {
        this.page = page;
        //this.cargarDatos();
    }
    retroceder() {
        if (!this.isFirst) {
            this.page--;
            //  this.cargarDatos();
        }
        return this.page;
    }
    adelante() {
        if (!this.isLast) {
            this.page++;
            //this.cargarDatos();
        }
        return this.page;
    }
    ////probando
    get form() {
        return this.validationform.controls;
    }
}
VistaentradasalidaComponent.ɵfac = function VistaentradasalidaComponent_Factory(t) { return new (t || VistaentradasalidaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_listaentradasalida_service__WEBPACK_IMPORTED_MODULE_3__.ListaentradasalidaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router)); };
VistaentradasalidaComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: VistaentradasalidaComponent, selectors: [["app-vistaentradasalida"]], inputs: { queryString: "queryString", entradasalidaOd: "entradasalidaOd" }, decls: 38, vars: 10, consts: [[1, "container-fluid"], ["title", "LISTA DE MISIONES", 3, "breadcrumbItems"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-body"], [1, "row", "mb-2"], [1, "col-sm-8"], [1, "search-box", "col-sm-4", "mb-2", "d-inline-block"], [1, "position-relative"], ["type", "text", "placeholder", "Buscar", 1, "form-control"], [1, "bx", "bx-search-alt", "search-icon"], ["id", "htmlData", 1, "table-responsive", "mb-0"], [1, "table", "table-centered", "table-nowrap"], [1, "table"], [1, "align-middle"], [4, "ngFor", "ngForOf"], [1, "pagination", "pagination-rounded", "justify-content-end", "mb-2"], ["nextLabel", "Siguiente", "previousLabel", "Anterior", 3, "pageChange"], ["role", "document"], ["contentA", ""], ["contentB", ""], [1, "btn", "btn-outline-info", "btn-sm", 3, "click"], [1, "btn", "btn-outline-danger", "btn-sm", 3, "click"], ["id", "", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "text-danger", "mb-4"], [1, "col-md-12"], [1, "mb-3"], [1, "text-danger"], ["type", "text", "id", "tipo", "name", "tipo", "placeholder", "Escribe tipo de misi\u00F3n", "formControlName", "tipo", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], [1, "col-md-6"], ["type", "date", "id", "fecha", "name", "fecha", "formControlName", "fecha", "autocomplete", "off", 1, "form-control"], ["type", "time", "id", "hora", "name", "hora", "formControlName", "hora", "autocomplete", "off", 1, "form-control"], ["type", "text", "id", "kilometraje", "name", "kilometraje", "formControlName", "kilometraje", "autocomplete", "off", "pattern", "", 1, "form-control", 3, "keypress"], ["type", "text", "id", "combustible", "name", "combustible", "formControlName", "combustible", "autocomplete", "off", 1, "form-control"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-dark", 3, "click"], ["type", "submit", "id", "btn-save-event", 1, "btn", "btn-info"]], template: function VistaentradasalidaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "app-page-title", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "thead", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Misi\u00F3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Fecha");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Hora");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Combustible");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Kilometraje");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Acciones");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, VistaentradasalidaComponent_tr_29_Template, 16, 5, "tr", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](30, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](31, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "pagination-controls", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function VistaentradasalidaComponent_Template_pagination_controls_pageChange_33_listener($event) { return ctx.p = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](34, VistaentradasalidaComponent_ng_template_34_Template, 63, 17, "ng-template", 19, 20, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, VistaentradasalidaComponent_ng_template_36_Template, 63, 17, "ng-template", 19, 21, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("breadcrumbItems", ctx.breadCrumbItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](30, 2, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](31, 5, ctx.entradasalidas, ctx.queryString), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c0, ctx.p)));
    } }, directives: [_shared_ui_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_4__.PagetitleComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_11__.PaginatePipe, ng2_search_filter__WEBPACK_IMPORTED_MODULE_5__.Ng2SearchPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aXN0YWVudHJhZGFzYWxpZGEuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 65337:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/entradasalida/service/listaentradasalida.service.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListaentradasalidaService": () => (/* binding */ ListaentradasalidaService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);





class ListaentradasalidaService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl; ///base url
        this.listDeMisiones = [];
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        this.requestOptions = {
            headers: headers
        };
    }
    getMisiones() {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        const requestOptions = {
            headers: headers
        };
        this.http.get(`${this.baseUrl}/solicitudvehiculo/lista`, requestOptions)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp))
            .subscribe((lista) => {
            console.log(lista);
            this.listDeMisiones = lista;
            console.log(lista);
        }, (error) => {
            console.error("Error al obtener las misiones:", error);
        });
    }
    get ObtenerLista() {
        // Recupera el token de acceso desde el local storage
        const token = localStorage.getItem('token');
        // Crea un objeto HttpHeaders para agregar el token de acceso en el encabezado 'Authorization'
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        // Configura las opciones de la solicitud HTTP con los encabezados personalizados
        const requestOptions = {
            headers: headers
        };
        return this.http.get(`${this.baseUrl}/entradasalida`, requestOptions);
    }
    NuevosDatos(entrasali) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        this.requestOptions = {
            headers: headers
        };
        return this.http.post(`${this.baseUrl}/entradasalida/insertar`, entrasali, this.requestOptions);
    }
    modificandoFecha(modi) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        this.requestOptions = {
            headers: headers
        };
        return this.http.put(`${this.baseUrl}/solicitudvehiculo/fecharegreso`, modi, this.requestOptions);
    }
    putEntradasalida(entrasali) {
        return this.http.put(`${this.baseUrl}/entradasalida/{{id}}`, entrasali, this.requestOptions);
    }
    putEmpleado(ent) {
        return this.http.put(`${this.baseUrl}/entradasalida/editar/${ent.id}`, ent, this.requestOptions);
    }
    buscarVehiculo(termino) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        const requestOptions = {
            headers: headers
        };
        if (termino.length > 1) {
            return this.http.get(`${this.baseUrl}/solicitudvehiculo/listasinpagina/${termino}`, requestOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(vehiculos => vehiculos.filter(vehiculos => vehiculos.estado === 5)));
        }
        else {
            return this.http.get(`${this.baseUrl}/entradasalida/todas`, requestOptions);
        }
    }
    // Función para comparar fechas
    compararFechasSalida(fechaSalida) {
        const fechaActual = new Date();
        // Convierte ambas fechas a cadenas en formato de fecha (sin hora)
        const fechaSalidaStr = fechaSalida.toString().split('T')[0];
        const fechaActualStr = fechaActual.toISOString().split('T')[0];
        console.log("Salida sistema: " + fechaSalidaStr);
        console.log("Actual: " + fechaActualStr);
        // Compara si las fechas son iguales
        return fechaSalidaStr === fechaActualStr;
    }
    // Función para comparar fechas
    compararFechasEntrada(fechaEntrada) {
        const fechaActual = new Date();
        // Convierte ambas fechas a cadenas en formato de fecha (sin hora)
        const fechaEntradaStr = fechaEntrada.toString().split('T')[0];
        const fechaActualStr = fechaActual.toISOString().split('T')[0];
        // Compara si las fechas son iguales
        return fechaEntradaStr === fechaActualStr;
    }
    /*obtenerImagenes(): Observable<IVehiculoentradaSalida[]> {
   
       const token = localStorage.getItem('token');
       const headers = new HttpHeaders({
         Authorization: `Bearer ${token}`
       });
       const requestOptions = {
         headers: headers
       };
       return this.http.get<IVehiculoentradaSalida[]>(`${this.baseUrl}/vehiculo/listasinpagina`, requestOptions);
     }*/
    listarEstado(estado, id) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        const requestOptions = {
            headers: headers
        };
        return this.http.get(`${this.baseUrl}/entradasalida/buscarentradasalida?filtro=${estado}&tipo=${id}`, requestOptions);
    }
    extrayendokilometraje(id) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        const requestOptions = {
            headers: headers
        };
        return this.http.get(`${this.baseUrl}/entradasalida/list?filtro=${id}`, requestOptions);
    }
    obtenercodigosolicitudvale(id) {
        const token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
            Authorization: `Bearer ${token}`
        });
        const requestOptions = {
            headers: headers
        };
        return this.http.get(`${this.baseUrl}/solicitudvale/buscarcodigosolicitudvale?codigo=${id}`, requestOptions);
    }
}
ListaentradasalidaService.ɵfac = function ListaentradasalidaService_Factory(t) { return new (t || ListaentradasalidaService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ListaentradasalidaService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ListaentradasalidaService, factory: ListaentradasalidaService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_entradasalida_entradasalida_module_ts.js.map