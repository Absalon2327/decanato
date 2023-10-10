"use strict";
(self["webpackChunkskote"] = self["webpackChunkskote"] || []).push([["main"],{

/***/ 6665:
/*!*********************************************************!*\
  !*** ./src/app/account/auth/login2/login2.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Login2Component": () => (/* binding */ Login2Component)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 84452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ 67686);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/authfake.service */ 92464);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);










function Login2Component_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Login2Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "p", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Login2Component_div_40_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Login2Component_div_40_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Email must be a valid email address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Login2Component_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Login2Component_div_40_div_1_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, Login2Component_div_40_div_2_Template, 2, 0, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.f.email.errors.email);
} }
function Login2Component_div_51_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function Login2Component_div_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, Login2Component_div_51_span_1_Template, 2, 0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.f.password.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
/**
 * Login-2 component
 */
class Login2Component {
    constructor(formBuilder, route, router, authenticationService, authFackservice) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.authFackservice = authFackservice;
        this.submitted = false;
        this.error = '';
        // set the currenr year
        this.year = new Date().getFullYear();
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
        document.body.classList.add('auth-body-bg');
        this.loginForm = this.formBuilder.group({
            email: ['admin@themesbrand.com', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
            password: ['123456', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        // tslint:disable-next-line: no-string-literal
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    /**
     * Form submit
     */
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        else {
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
                this.authenticationService.login(this.f.email.value, this.f.password.value).then((res) => {
                    this.router.navigate(['/dashboard']);
                })
                    .catch(error => {
                    this.error = error ? error : '';
                });
            }
            else {
                this.authFackservice.login(this.f.email.value, this.f.password.value)
                    .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.first)())
                    .subscribe(data => {
                    this.router.navigate(['/dashboard']);
                }, error => {
                    this.error = error ? error : '';
                });
            }
        }
    }
}
Login2Component.ɵfac = function Login2Component_Factory(t) { return new (t || Login2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService)); };
Login2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: Login2Component, selectors: [["app-login2"]], decls: 82, vars: 11, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], [3, "formGroup", "ngSubmit"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter email", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], [1, "float-end"], ["routerLink", "/account/recoverpwd-2", 1, "text-muted"], ["for", "userpassword"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "password", "placeholder", "Enter password", "aria-label", "Password", "aria-describedby", "password-addon", 1, "form-control", 3, "ngClass"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light"], [1, "mdi", "mdi-eye-outline"], [1, "form-check"], ["type", "checkbox", "id", "remember-check", 1, "form-check-input"], ["for", "remember-check", 1, "form-check-label"], [1, "mt-3", "d-grid"], ["type", "submit", 1, "btn", "btn-primary", "btn-block"], [1, "mt-4", "text-center"], [1, "font-size-14", "mb-3"], [1, "list-inline"], [1, "list-inline-item"], ["href", "javascript::void()", 1, "social-list-item", "bg-primary", "text-white", "border-primary"], [1, "mdi", "mdi-facebook"], ["href", "javascript::void()", 1, "social-list-item", "bg-info", "text-white", "border-info"], [1, "mdi", "mdi-twitter"], ["href", "javascript::void()", 1, "social-list-item", "bg-danger", "text-white", "border-danger"], [1, "mdi", "mdi-google"], [1, "mt-5", "text-center"], ["routerLink", "/account/signup-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"], [1, "invalid-feedback"], [4, "ngIf"]], template: function Login2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, Login2Component_ng_template_18_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, Login2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Welcome Back !");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Sign in to continue to Skote.");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function Login2Component_Template_form_ngSubmit_35_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, Login2Component_div_40_Template, 3, 2, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "a", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Forgot password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](48, "input", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, Login2Component_div_51_Template, 2, 1, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](53, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "h5", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Sign in with");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "i", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "a", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](68, "i", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "li", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "a", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "i", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Don't have an account ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "a", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " Signup now ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "p", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](81, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.email.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_7__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbjIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 18545:
/*!*******************************************************!*\
  !*** ./src/app/account/auth/models/usuario.models.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usuario": () => (/* binding */ Usuario),
/* harmony export */   "DataCards": () => (/* binding */ DataCards),
/* harmony export */   "Empleado": () => (/* binding */ Empleado)
/* harmony export */ });
class Usuario {
    constructor(codigoUsuario, nombre, clave, // no necesariamente se tendra el pss aqui
    nuevo, role, token, empleado) {
        this.codigoUsuario = codigoUsuario;
        this.nombre = nombre;
        this.clave = clave;
        this.nuevo = nuevo;
        this.role = role;
        this.token = token;
        this.empleado = empleado;
    }
}
class DataCards {
    constructor(vales, misiones, misioneshoy, misionesmes) {
        this.vales = vales;
        this.misiones = misiones;
        this.misioneshoy = misioneshoy;
        this.misionesmes = misionesmes;
    }
}
class Empleado {
    constructor(codigoEmpleado, dui, nombre, apellido, telefono, licencia, tipolicencia, fechalicencia, estado, jefe, correo, nombrefoto, urlfoto, cargo, departamento) {
        this.codigoEmpleado = codigoEmpleado;
        this.dui = dui;
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.licencia = licencia;
        this.tipolicencia = tipolicencia;
        this.fechalicencia = fechalicencia;
        this.estado = estado;
        this.jefe = jefe;
        this.correo = correo;
        this.nombrefoto = nombrefoto;
        this.urlfoto = urlfoto;
        this.cargo = cargo;
        this.departamento = departamento;
    }
}


/***/ }),

/***/ 15501:
/*!**********************************************************!*\
  !*** ./src/app/account/auth/services/usuario.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsuarioService": () => (/* binding */ UsuarioService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _models_usuario_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/usuario.models */ 18545);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 10592);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);








class UsuarioService {
    constructor(router, ngZone) {
        this.router = router;
        this.ngZone = ngZone;
        this.storage = window.localStorage;
        this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient);
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.baseUrl;
    }
    /* Creacion de usuario */
    /*   crearUsuario(forData: IRegistroUsuario) {
        console.log();
        return this.http.post(`${this.baseUrl}/usuarios`, forData).pipe(
          tap((resp: any) => {
            this.guardarLocalSotrage('token', resp.token);
            this.usuario = resp.usuario;
          })
        );
      } */
    /* Para autentificar la entrada */
    login(forData) {
        const body = {
            nombre: forData.nombre,
            clave: forData.clave
        };
        return this.http.post(`${this.baseUrl}/usuario/auth/login`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((resp) => {
            const { codigoUsuario, nombre, nuevo, role, token, empleado } = resp.usuario;
            this.usuario = new _models_usuario_models__WEBPACK_IMPORTED_MODULE_0__.Usuario(codigoUsuario, nombre, "", nuevo, role, token, empleado);
            this.guardarLocalSotrage('token', resp.token);
            this.guardarLocalSotrage('codEmpleado', resp.usuario.empleado.codigoEmpleado);
            this.guardarLocalSotrage('empleadoFoto', resp.usuario.empleado.nombrefoto);
            this.guardarLocalSotrage('codUsuario', resp.usuario.codigoUsuario);
            let usuarioJSON = { "role": resp.usuario.role, "codigoUsuario": resp.usuario.codigoUsuario, "empleado": resp.usuario.empleado };
            this.guardarLocalSotrage('usuario', JSON.stringify(usuarioJSON));
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err.error.message);
        }));
    }
    getCards() {
        this.http
            .get(`${this.baseUrl}/usuario/datacards`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((resp) => resp))
            .subscribe((datacards) => {
            this.cards = datacards; // guarda cards
            const { vales, misiones, misioneshoy, misionesmes } = datacards;
            this.cards = new _models_usuario_models__WEBPACK_IMPORTED_MODULE_0__.DataCards(vales, misiones, misioneshoy, misionesmes);
        }, (error) => {
            console.error("Error al obtener las cards:", error);
        });
    }
    resetpass(rest) {
        return this.http.post(`${this.baseUrl}/usuario/resetpass`, rest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((resp) => {
            const { codigoUsuario } = resp;
            this.guardarLocalSotrage('codUsuario', codigoUsuario);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err.error.message);
        }));
    }
    resetpassEmail(rest) {
        return this.http.post(`${this.baseUrl}/usuario/resetpassEmail`, rest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((resp) => {
            const { codigoUsuario, codigo, empleado } = resp;
            this.guardarLocalSotrage('codUsuario', codigoUsuario);
            this.guardarLocalSotrage('restcodigo', codigo);
            this.guardarLocalSotrage('correo', empleado.correo);
            this.guardarLocalSotrage('nombre', empleado.nombre + empleado.apellido);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err.error.message);
        }));
    }
    confirmarcode(code) {
        return this.http.get(`${this.baseUrl}/usuario/resetpass/confirmarcode/${code}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((resp) => {
            const { codigoUsuario } = resp;
            this.guardarLocalSotrage('codUsuario', codigoUsuario);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err.error.message);
        }));
    }
    /* Para guardar en el local storage del navegador */
    guardarLocalSotrage(tipo, contenido) {
        this.storage.setItem(tipo, contenido);
    }
    /* Para obtener el token del localstorage */
    get token() {
        return this.storage.getItem("token" || 0);
    }
    get codUsuario() {
        return this.storage.getItem("codUsuario" || 0);
    }
    get codEmpleado() {
        return this.storage.getItem("codEmpleado" || 0);
    }
    get usuarioJSON() {
        return JSON.parse(this.storage.getItem("usuario" || 0));
    }
    get restcodigo() {
        return this.storage.getItem("restcodigo" || 0);
    }
    get correo() {
        return this.storage.getItem("correo" || 0);
    }
    get nombre() {
        return this.storage.getItem("nombre" || 0);
    }
    get empleadofoto() {
        return this.storage.getItem("empleadoFoto" || 0);
    }
    getUsuario() {
        this.http
            .get(`${this.baseUrl}/usuario/${this.codUsuario}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((resp) => resp))
            .subscribe((usuario) => {
            const { codigoUsuario, nombre, clave, nuevo, role, token, empleado } = usuario;
            this.usuario = new _models_usuario_models__WEBPACK_IMPORTED_MODULE_0__.Usuario(codigoUsuario, nombre, "", nuevo, role, token, empleado);
        }, (error) => {
            console.error("Error al obtener los usuario:", error);
        });
    }
    getEmpleado() {
        this.http
            .get(`${this.baseUrl}/empleado/${this.codEmpleado}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((resp) => resp))
            .subscribe((empleado) => {
            this.empleado = empleado; // guarda Empleado
            const { codigoEmpleado, dui, nombre, apellido, telefono, licencia, tipolicencia, fechalicencia, estado, jefe, correo, nombrefoto, urlfoto, cargo, departamento } = empleado;
            this.empleado = new _models_usuario_models__WEBPACK_IMPORTED_MODULE_0__.Empleado(codigoEmpleado, dui, nombre, apellido, telefono, licencia, tipolicencia, fechalicencia, estado, jefe, correo, nombrefoto, urlfoto, cargo, departamento);
        }, (error) => {
            console.error("Error al obtener los empleado:", error);
        });
    }
    Credenciales(usuario) {
        return this.http.put(`${this.baseUrl}/usuario/credenciales`, usuario);
    }
    logout() {
        this.storage.clear();
        this.ngZone.run(() => {
            this.router.navigateByUrl('/account/login');
        });
    }
    SendEmail(body) {
        return this.http.post(`${this.baseUrl}/correo/enviarmail`, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)((resp) => {
            console.log(resp);
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err.error.message);
        }));
    }
    validarToken() {
        return this.http.get(`${this.baseUrl}/usuario/auth/renew`, {
            headers: {
                'x-token': this.token,
            },
        }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((resp) => {
            this.guardarLocalSotrage('token', resp.token);
            this.guardarLocalSotrage('codEmpleado', resp.empleado.codigoEmpleado);
            this.guardarLocalSotrage('empleadoFoto', resp.empleado.nombrefoto);
            this.guardarLocalSotrage('codUsuario', resp.codigoUsuario);
            return true;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)((err) => {
            // Token caducado, muestra un mensaje de error en la consola
            this.logout();
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(false);
        }));
    }
    /* get rol(): "ADMIN_ROLE" | "USER_ROLE" | string {
      //return this.usuario.role;
    } */
    logoutAcercaDe() {
        this.ngZone.run(() => {
            this.router.navigateByUrl('/AcercaDeAyuda/acercade');
        });
    }
}
UsuarioService.ɵfac = function UsuarioService_Factory(t) { return new (t || UsuarioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
UsuarioService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsuarioService, factory: UsuarioService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 83696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/guards/auth.guard */ 85298);
/* harmony import */ var _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/layout.component */ 72140);
/* harmony import */ var _cyptolanding_cyptolanding_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cyptolanding/cyptolanding.component */ 53959);
/* harmony import */ var _extrapages_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extrapages/page404/page404.component */ 85132);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);







const routes = [
    { path: 'solicitudes', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("default-node_modules_ng-select_ng-select_fesm2020_ng-select-ng-select_mjs"), __webpack_require__.e("default-src_app_modules_asignacion-vales_services_detalle_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_solicitudes_solicitudes_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/solicitudes/solicitudes.module */ 84961)).then(m => m.SolicitudesModule) },
    { path: 'AcercaDeAyuda', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ng2-search-filter___ivy_ngcc___ng2-search-filter_js-node_modules_ngx-pag-8075e9"), __webpack_require__.e("src_app_modules_acerca-de-ayuda_acerca-de-ayuda_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./modules/acerca-de-ayuda/acerca-de-ayuda.module */ 10204)).then(m => m.AcercaDeAyudaModule) },
    { path: 'account', loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./account/account.module */ 87942)).then(m => m.AccountModule) },
    // tslint:disable-next-line: max-line-length
    // Ruta hacia los modulos
    { path: '', component: _layouts_layout_component__WEBPACK_IMPORTED_MODULE_1__.LayoutComponent, loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_modules_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./modules/modules.module */ 12818)).then(m => m.ModulesModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard], canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'pages', loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./extrapages/extrapages.module */ 17358)).then(m => m.ExtrapagesModule), canActivate: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard], canLoad: [_core_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard] },
    { path: 'crypto-ico-landing', component: _cyptolanding_cyptolanding_component__WEBPACK_IMPORTED_MODULE_2__.CyptolandingComponent },
    { path: '**', component: _extrapages_page404_page404_component__WEBPACK_IMPORTED_MODULE_3__.Page404Component },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);


class AppComponent {
    ngOnInit() {
        // document.getElementsByTagName("html")[0].setAttribute("dir", "rtl");
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@charset \"UTF-8\";\n\n  .ngx-pagination .current {\n  background: #972727 !important;\n  \n}\n  .ngx-pagination {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-gap: 4px;\n  gap: 4px;\n}\n  .ngx-pagination li {\n  width: 27px;\n  height: 27px;\n  border-radius: 50% !important;\n  background: #f8f8f8;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n  .ngx-pagination li.small-screen {\n  display: none !important;\n}\n  .ngx-pagination li.pagination-previous a,   .ngx-pagination li.pagination-previous span,   .ngx-pagination li.pagination-next a,   .ngx-pagination li.pagination-next span {\n  width: 50%;\n  height: 50%;\n  border-radius: 50%;\n  overflow: hidden;\n  color: #f8f8f8;\n}\n  .ngx-pagination .pagination-previous a:before,   .ngx-pagination .pagination-previous.disabled:before,   .ngx-pagination .pagination-next::before {\n  margin-right: 0px !important;\n  font-size: 30px;\n  margin-top: -8px;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: flex !important;\n  justify-content: center;\n  align-items: center;\n  color: #000;\n  left: 0;\n  top: 7px;\n  pointer-events: none;\n}\n  .ngx-pagination .pagination-next::before {\n  content: \"\u00BB\";\n}\n  .ngx-pagination .pagination-next::after {\n  display: none !important;\n}\n  .ngx-pagination .pagination-previous.disabled:before,   .ngx-pagination .pagination-next.disabled:before {\n  opacity: 0.4;\n}\n  .ngx-pagination .pagination-previous.disabled:hover {\n  background: #f8f8f8 !important;\n}\n  .ngx-pagination a:hover,   .ngx-pagination button:hover {\n  background: transparent none repeat 0 0 / auto auto padding-box border-box scroll !important;\n  background: initial !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsInNoYXJlZFxcc2Nzc1xccGFnaW5hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEIsaURBQUE7QUFHSTtFQUNJLDhCQUFBO0VBQ0Esb0NBQUE7QUREUjtBQ0tJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQUEsUUFBQTtBREhSO0FDTUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREpSO0FDTVE7RUFDSSx3QkFBQTtBREpaO0FDU1k7OztFQUVJLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUROaEI7QUNZSTs7O0VBR0ksNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtBRFZSO0FDYUk7RUFDSSxZQUFBO0FEWFI7QUNjSTtFQUNJLHdCQUFBO0FEWlI7QUNlSTs7RUFFSSxZQUFBO0FEYlI7QUNnQkk7RUFDSSw4QkFBQTtBRGRSO0FDaUJJOztFQUVJLDRGQUFBO0VBQUEsOEJBQUE7QURmUiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBDb2xvY2FyIGRpc2XDsW8gYSBsYSBwYWdpbmFjaW9uIG5neC1wYWdpbnRhdGlvKi9cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xuICBiYWNrZ3JvdW5kOiAjOTcyNzI3ICFpbXBvcnRhbnQ7XG4gIC8qIENhbWJpYSBlc3RlIGNvbG9yIGFsIHF1ZSBkZXNlZXMgKi9cbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG59XG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpIHtcbiAgd2lkdGg6IDI3cHg7XG4gIGhlaWdodDogMjdweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkuc21hbGwtc2NyZWVuIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaS5wYWdpbmF0aW9uLXByZXZpb3VzIGEsXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGxpLnBhZ2luYXRpb24tcHJldmlvdXMgc3BhbiwgOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiBsaS5wYWdpbmF0aW9uLW5leHQgYSxcbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gbGkucGFnaW5hdGlvbi1uZXh0IHNwYW4ge1xuICB3aWR0aDogNTAlO1xuICBoZWlnaHQ6IDUwJTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogI2Y4ZjhmODtcbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMgYTpiZWZvcmUsXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOmJlZm9yZSxcbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dDo6YmVmb3JlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAtOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICMwMDA7XG4gIGxlZnQ6IDA7XG4gIHRvcDogN3B4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dDo6YmVmb3JlIHtcbiAgY29udGVudDogXCLCu1wiO1xufVxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0OjphZnRlciB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6YmVmb3JlLFxuOjpuZy1kZWVwIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1uZXh0LmRpc2FibGVkOmJlZm9yZSB7XG4gIG9wYWNpdHk6IDAuNDtcbn1cbjo6bmctZGVlcCAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGE6aG92ZXIsXG46Om5nLWRlZXAgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IGluaXRpYWwgIWltcG9ydGFudDtcbn0iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vIEVzdGlsb3MgZGUgbGEgcGFnaW5hY2lvbiwgbW9kaWZpY2FkYSAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vKiBDb2xvY2FyIGRpc2XDsW8gYSBsYSBwYWdpbmFjaW9uIG5neC1wYWdpbnRhdGlvKi9cclxuOjpuZy1kZWVwIHtcclxuXHJcbiAgICAubmd4LXBhZ2luYXRpb24gLmN1cnJlbnQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICM5NzI3MjcgIWltcG9ydGFudDtcclxuICAgICAgICAvKiBDYW1iaWEgZXN0ZSBjb2xvciBhbCBxdWUgZGVzZWVzICovXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDI3cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAmLnNtYWxsLXNjcmVlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYucGFnaW5hdGlvbi1wcmV2aW91cyxcclxuICAgICAgICAmLnBhZ2luYXRpb24tbmV4dCB7XHJcbiAgICAgICAgICAgIGEsXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cyBhOmJlZm9yZSxcclxuICAgIC5uZ3gtcGFnaW5hdGlvbiAucGFnaW5hdGlvbi1wcmV2aW91cy5kaXNhYmxlZDpiZWZvcmUsXHJcbiAgICAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dDo6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwOyAvL2NvbG9yIGRlIGxvcyBib3RvbmVzIGRlIGxvcyBsYWRvc1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQ6OmJlZm9yZXtcclxuICAgICAgICBjb250ZW50OiAnXFxiYic7IC8vcGFyYSBjb2xvY2FybGEgaWNvbm9cclxuICAgIH1cclxuXHJcbiAgICAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tbmV4dDo6YWZ0ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAubmd4LXBhZ2luYXRpb24gLnBhZ2luYXRpb24tcHJldmlvdXMuZGlzYWJsZWQ6YmVmb3JlLFxyXG4gICAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLW5leHQuZGlzYWJsZWQ6YmVmb3JlIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5neC1wYWdpbmF0aW9uIC5wYWdpbmF0aW9uLXByZXZpb3VzLmRpc2FibGVkOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjhmOGY4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5neC1wYWdpbmF0aW9uIGE6aG92ZXIsXHJcbiAgICAubmd4LXBhZ2luYXRpb24gYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG59Il19 */"] });


/***/ }),

/***/ 34750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTranslateLoader": () => (/* binding */ createTranslateLoader),
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ 52650);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 18260);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 68974);
/* harmony import */ var _cyptolanding_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cyptolanding/shared/shared.module */ 58678);
/* harmony import */ var _extrapages_extrapages_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extrapages/extrapages.module */ 17358);
/* harmony import */ var _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/layouts.module */ 31472);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 83696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./authUtils */ 72004);
/* harmony import */ var _cyptolanding_cyptolanding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cyptolanding/cyptolanding.component */ 53959);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/http-loader */ 48017);
/* harmony import */ var _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/helpers/fake-backend */ 94095);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/ui/ui.module */ 63091);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./helpers/auth.interceptor */ 57022);
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @auth0/angular-jwt */ 86800);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);

























if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.defaultauth === 'firebase') {
    (0,_authUtils__WEBPACK_IMPORTED_MODULE_6__.initFirebaseBackend)(_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.firebaseConfig);
}
else {
    // tslint:disable-next-line: no-unused-expression
    _core_helpers_fake_backend__WEBPACK_IMPORTED_MODULE_8__.FakeBackendInterceptor;
}
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_11__.TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HTTP_INTERCEPTORS, useClass: _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__.AuthInterceptor, multi: true },], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
                    useFactory: createTranslateLoader,
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient]
                }
            }),
            _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__.LayoutsModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            _extrapages_extrapages_module__WEBPACK_IMPORTED_MODULE_2__.ExtrapagesModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__.CarouselModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAccordionModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTooltipModule,
            _cyptolanding_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPaginationModule,
            _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_19__.ScrollToModule.forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__.UIModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule,
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__.JwtModule.forRoot({
                config: {
                    tokenGetter: () => {
                        return localStorage.getItem("token" || 0);
                    },
                    allowedDomains: ['*'],
                    disallowedRoutes: ['*'] // Rutas excluidas de la inserción automática del token (opcional)
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent,
        _cyptolanding_cyptolanding_component__WEBPACK_IMPORTED_MODULE_7__.CyptolandingComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule, _layouts_layouts_module__WEBPACK_IMPORTED_MODULE_3__.LayoutsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
        _extrapages_extrapages_module__WEBPACK_IMPORTED_MODULE_2__.ExtrapagesModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_17__.CarouselModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbAccordionModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbNavModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTooltipModule,
        _cyptolanding_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbPaginationModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_19__.ScrollToModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__.UIModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_20__.ReactiveFormsModule, _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__.JwtModule] }); })();


/***/ }),

/***/ 72004:
/*!******************************!*\
  !*** ./src/app/authUtils.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initFirebaseBackend": () => (/* binding */ initFirebaseBackend),
/* harmony export */   "getFirebaseBackend": () => (/* binding */ getFirebaseBackend)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ 86559);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ 51070);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ 24401);

// Add the Firebase products that you want to use


class FirebaseAuthBackend {
    constructor(firebaseConfig) {
        /**
         * Registers the user with given details
         */
        this.registerUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().createUserWithEmailAndPassword(email, password).then((user) => {
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Login user with given details
         */
        this.loginUser = (email, password) => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signInWithEmailAndPassword(email, password).then((user) => {
                    // eslint-disable-next-line no-redeclare
                    var user = firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().currentUser;
                    resolve(user);
                }, (error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * forget Password user with given details
         */
        this.forgetPassword = (email) => {
            return new Promise((resolve, reject) => {
                // tslint:disable-next-line: max-line-length
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().sendPasswordResetEmail(email, { url: window.location.protocol + '//' + window.location.host + '/login' }).then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        /**
         * Logout the user
         */
        this.logout = () => {
            return new Promise((resolve, reject) => {
                firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().signOut().then(() => {
                    resolve(true);
                }).catch((error) => {
                    reject(this._handleError(error));
                });
            });
        };
        this.setLoggeedInUser = (user) => {
            sessionStorage.setItem('authUser', JSON.stringify(user));
        };
        /**
         * Returns the authenticated user
         */
        this.getAuthenticatedUser = () => {
            if (!sessionStorage.getItem('authUser')) {
                return null;
            }
            return JSON.parse(sessionStorage.getItem('authUser'));
        };
        if (firebaseConfig) {
            // Initialize Firebase
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(firebaseConfig);
            firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].auth().onAuthStateChanged((user) => {
                if (user) {
                    sessionStorage.setItem('authUser', JSON.stringify(user));
                }
                else {
                    sessionStorage.removeItem('authUser');
                }
            });
        }
    }
    /**
     * Handle the error
     * @param {*} error
     */
    _handleError(error) {
        // tslint:disable-next-line: prefer-const
        var errorMessage = error.message;
        return errorMessage;
    }
}
// tslint:disable-next-line: variable-name
let _fireBaseBackend = null;
/**
 * Initilize the backend
 * @param {*} config
 */
const initFirebaseBackend = (config) => {
    if (!_fireBaseBackend) {
        _fireBaseBackend = new FirebaseAuthBackend(config);
    }
    return _fireBaseBackend;
};
/**
 * Returns the firebase backend
 */
const getFirebaseBackend = () => {
    return _fireBaseBackend;
};



/***/ }),

/***/ 24017:
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EMAIL_VALIDATE": () => (/* binding */ EMAIL_VALIDATE),
/* harmony export */   "EMAIL_VALIDATE_UES": () => (/* binding */ EMAIL_VALIDATE_UES),
/* harmony export */   "NAME_VALIDATE": () => (/* binding */ NAME_VALIDATE),
/* harmony export */   "NUMBER_VALIDATE": () => (/* binding */ NUMBER_VALIDATE),
/* harmony export */   "STRING_VALIDATE": () => (/* binding */ STRING_VALIDATE),
/* harmony export */   "INTEGER_VALIDATE": () => (/* binding */ INTEGER_VALIDATE),
/* harmony export */   "DECIMAL_VALIDATE": () => (/* binding */ DECIMAL_VALIDATE),
/* harmony export */   "DATETIME_VALIDATE": () => (/* binding */ DATETIME_VALIDATE),
/* harmony export */   "TEXT_VALIDATE": () => (/* binding */ TEXT_VALIDATE),
/* harmony export */   "EMAIL_VALIDATE_GENERAL": () => (/* binding */ EMAIL_VALIDATE_GENERAL),
/* harmony export */   "TEXTO_CARACTER_ESPECIAL": () => (/* binding */ TEXTO_CARACTER_ESPECIAL),
/* harmony export */   "TEXTO_PLACA": () => (/* binding */ TEXTO_PLACA),
/* harmony export */   "NAME_TILDES_VALIDATE": () => (/* binding */ NAME_TILDES_VALIDATE),
/* harmony export */   "NAME_STRING_NUMBER_VALIDATE": () => (/* binding */ NAME_STRING_NUMBER_VALIDATE)
/* harmony export */ });
// Para email
const EMAIL_VALIDATE = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
// Para email de la UES
const EMAIL_VALIDATE_UES = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@ues.edu.sv';
// Para nombres
const NAME_VALIDATE = '^([A-Za-z]+[ ]?){1,3}$';
// Para números
const NUMBER_VALIDATE = '^[0-9]+([\\.,][0-9]+)?$';
// Para string
const STRING_VALIDATE = '^([A-Za-z]+[ ]?){1,2}$';
// Para entero
const INTEGER_VALIDATE = '^[0-9]+$';
// Para decimal .00
const DECIMAL_VALIDATE = '^[0-9]+(\\.[0-9]{1,2})?$';
// Para fecha
const DATETIME_VALIDATE = '^(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[0-2])/(\\d{4}) (20|21|22|23|[01]\\d|\\d)(([:][0-5]\\d){1,2})$';
// Para Texto
const TEXT_VALIDATE = '^([A-Za-z]+[ ]?){1,2}$';
// Para email
const EMAIL_VALIDATE_GENERAL = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
const TEXTO_CARACTER_ESPECIAL = '^([A-Za-z/-_*.]+[ ]?){1,5}$';
const TEXTO_PLACA = '[a-zA-Z]{1,2}[a-zA-Z0-9]{0,3}[a-zA-Z0-9]{3}';
// Validar Nombre reales
const NAME_TILDES_VALIDATE = '^(?!\\s)(?!.*\\s$)[A-Za-zÁáÉéÍíÓóÚúÜüÑñÀàÈèÌìÒòÙùÂâÊêÎîÔôÛûÄäËëÏïÖöŸÿ]+( [A-Za-zÁáÉéÍíÓóÚúÜüÑñÀàÈèÌìÒòÙùÂâÊêÎîÔôÛûÄäËëÏïÖöŸÿ]+)*$';
const NAME_STRING_NUMBER_VALIDATE = '^(?!\\s)(?!.*\\s$)[A-Za-zÁáÉéÍíÓóÚúÜüÑñÀàÈèÌìÒòÙùÂâÊêÎîÔôÛûÄäËëÏïÖöŸÿ0-9]+( [A-Za-zÁáÉéÍíÓóÚúÜüÑñÀàÈèÌìÒòÙùÂâÊêÎîÔôÛûÄäËëÏïÖöŸÿ0-9]+)*$';


/***/ }),

/***/ 85298:
/*!*******************************************!*\
  !*** ./src/app/core/guards/auth.guard.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);




class AuthGuard {
    constructor(router, usuarioService) {
        this.router = router;
        this.usuarioService = usuarioService;
    }
    canActivate() {
        return this.usuarioService.validarToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(isAuth => {
            if (!isAuth) {
                this.router.navigateByUrl('/account/login');
            }
            return true;
        }));
    }
    canLoad() {
        return this.usuarioService.validarToken().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(isAuth => {
            if (!isAuth) {
                this.router.navigateByUrl('/account/login');
            }
            return true;
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 94095:
/*!**********************************************!*\
  !*** ./src/app/core/helpers/fake-backend.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FakeBackendInterceptor": () => (/* binding */ FakeBackendInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 18252);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 90758);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 21513);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 78068);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 46700);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);




class FakeBackendInterceptor {
    constructor() { }
    intercept(request, next) {
        // array in local storage for registered users
        // tslint:disable-next-line: max-line-length
        const users = JSON.parse(localStorage.getItem('users')) || [{ username: 'admin', email: 'admin@themesbrand.com', password: '123456' }];
        // wrap in delayed observable to simulate server api call
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(null).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.mergeMap)(() => {
            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                const filteredUsers = users.filter(user => {
                    return user.email === request.body.email && user.password === request.body.password;
                });
                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    const body = {
                        id: user.id,
                        email: user.email,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body }));
                }
                else {
                    // else return 400 bad request
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message: 'Username or password is incorrect' } });
                }
            }
            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body: users }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    // tslint:disable-next-line: no-shadowed-variable
                    const matchedUsers = users.filter(user => user.id === id);
                    const user = matchedUsers.length ? matchedUsers[0] : null;
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200, body: user }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                const newUser = request.body;
                // validation
                const duplicateUser = users.filter(user => user.username === newUser.username).length;
                if (duplicateUser) {
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }
                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));
                // respond 200 OK
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 }));
            }
            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // tslint:disable-next-line: max-line-length
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    // tslint:disable-next-line: radix
                    const id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }
                    // respond 200 OK
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({ status: 200 }));
                }
                else {
                    // return 401 not authorised if token is null or invalid
                    return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)({ status: 401, error: { message: 'Unauthorised' } });
                }
            }
            // pass through any requests not handled above
            return next.handle(request);
        }))
            // tslint:disable-next-line: max-line-length
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.materialize)())
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.delay)(500))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.dematerialize)());
    }
}
FakeBackendInterceptor.ɵfac = function FakeBackendInterceptor_Factory(t) { return new (t || FakeBackendInterceptor)(); };
FakeBackendInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ token: FakeBackendInterceptor, factory: FakeBackendInterceptor.ɵfac });


/***/ }),

/***/ 67686:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _authUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../authUtils */ 72004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class AuthenticationService {
    constructor() {
    }
    /**
     * Returns the current user
     */
    currentUser() {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().getAuthenticatedUser();
    }
    /**
     * Performs the auth
     * @param email email of user
     * @param password password of user
     */
    login(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().loginUser(email, password).then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Performs the register
     * @param email email
     * @param password password
     */
    register(email, password) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().registerUser(email, password).then((response) => {
            const user = response;
            return user;
        });
    }
    /**
     * Reset password
     * @param email email
     */
    resetPassword(email) {
        return (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().forgetPassword(email).then((response) => {
            const message = response.data;
            return message;
        });
    }
    /**
     * Logout the user
     */
    logout() {
        // logout the user
        (0,_authUtils__WEBPACK_IMPORTED_MODULE_0__.getFirebaseBackend)().logout();
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 92464:
/*!***************************************************!*\
  !*** ./src/app/core/services/authfake.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthfakeauthenticationService": () => (/* binding */ AuthfakeauthenticationService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);




class AuthfakeauthenticationService {
    constructor(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(email, password) {
        return this.http.post(`/users/authenticate`, { email, password })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(user => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                this.currentUserSubject.next(user);
            }
            return user;
        }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}
AuthfakeauthenticationService.ɵfac = function AuthfakeauthenticationService_Factory(t) { return new (t || AuthfakeauthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AuthfakeauthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthfakeauthenticationService, factory: AuthfakeauthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 63997:
/*!************************************************!*\
  !*** ./src/app/core/services/event.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventService": () => (/* binding */ EventService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 64008);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 48027);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);





class EventService {
    constructor(http) {
        this.http = http;
        this.handler = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
    }
    /**
     * Broadcast the event
     * @param type type of event
     * @param payload payload
     */
    broadcast(type, payload = {}) {
        this.handler.next({ type, payload });
    }
    /**
     * Subscribe to event
     * @param type type of event
     * @param callback call back function
     */
    subscribe(type, callback) {
        return this.handler.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event.type === type)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(event => event.payload))
            .subscribe(callback);
    }
    //Obtener empleados para la tabla
    getEmpleado(name) {
        return this.http.get(`${this.baseUrl}/empleado/lista/${name}`);
    }
}
EventService.ɵfac = function EventService_Factory(t) { return new (t || EventService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
EventService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: EventService, factory: EventService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 58463:
/*!***************************************************!*\
  !*** ./src/app/core/services/language.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageService": () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ 32071);



class LanguageService {
    constructor(translate, cookieService) {
        this.translate = translate;
        this.cookieService = cookieService;
        this.languages = ['en', 'es', 'de', 'it', 'ru'];
        let browserLang;
        this.translate.addLangs(this.languages);
        if (this.cookieService.check('lang')) {
            browserLang = this.cookieService.get('lang');
        }
        else {
            this.setLanguage('en');
            browserLang = translate.getBrowserLang();
        }
        translate.use(browserLang.match(/en|es|de|it|ru/) ? browserLang : 'en');
    }
    setLanguage(lang) {
        this.translate.use(lang);
        this.cookieService.set('lang', lang);
    }
}
LanguageService.ɵfac = function LanguageService_Factory(t) { return new (t || LanguageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__.CookieService)); };
LanguageService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LanguageService, factory: LanguageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 97422:
/*!*************************************************!*\
  !*** ./src/app/core/services/loader.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 41119);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);


class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53959:
/*!********************************************************!*\
  !*** ./src/app/cyptolanding/cyptolanding.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CyptolandingComponent": () => (/* binding */ CyptolandingComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 91384);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ 91414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 68974);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/scrollspy.directive */ 75701);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);









function CyptolandingComponent_ng_template_208_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_209_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_210_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_211_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_212_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_213_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_276_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "December, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "ICO Platform Idea");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "It will be as simple as occidental in fact it will be Cambridge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_277_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "January, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Research on project");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "To an English person, it will seem like simplified English existence.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_278_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "February, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "ICO & Token Design");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "For science, music, sport, etc, Europe uses the same vocabulary.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_279_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "March, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "ICO Launch Platform");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "New common language will be more simple than existing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_280_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "April, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Token sale round 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "It will be as simple as occidental in fact it will be Cambridge");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_281_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "May, 2020");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Token sale round 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "To an English person, it will seem like simplified English existence.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_293_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Mark Hurley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "P", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "CEO & Lead");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_294_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Calvin Smith");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "P", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Blockchain developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_295_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Vickie Sample");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "P", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_296_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Alma Farley");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "P", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "App developer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_297_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Amy Hood ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "P", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Designer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "i", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "i", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "What is Lorem Ipsum ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Why do we use it ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Where does it come from ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Where can I get some ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_380_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "General Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-accordion", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-panel", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CyptolandingComponent_ng_template_380_ng_template_6_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CyptolandingComponent_ng_template_380_ng_template_7_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngb-panel", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CyptolandingComponent_ng_template_380_ng_template_9_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CyptolandingComponent_ng_template_380_ng_template_10_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngb-panel", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CyptolandingComponent_ng_template_380_ng_template_12_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CyptolandingComponent_ng_template_380_ng_template_13_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngb-panel", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CyptolandingComponent_ng_template_380_ng_template_15_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CyptolandingComponent_ng_template_380_ng_template_16_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
} }
function CyptolandingComponent_ng_template_386_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Why do we use it ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_386_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_386_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "What is Lorem Ipsum ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_386_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_386_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Where can I get some ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_386_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_386_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Where does it come from ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_386_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_386_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Token sale");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-accordion", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-panel", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CyptolandingComponent_ng_template_386_ng_template_6_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CyptolandingComponent_ng_template_386_ng_template_7_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngb-panel", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CyptolandingComponent_ng_template_386_ng_template_9_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CyptolandingComponent_ng_template_386_ng_template_10_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngb-panel", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CyptolandingComponent_ng_template_386_ng_template_12_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CyptolandingComponent_ng_template_386_ng_template_13_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngb-panel", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CyptolandingComponent_ng_template_386_ng_template_15_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CyptolandingComponent_ng_template_386_ng_template_16_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
} }
function CyptolandingComponent_ng_template_392_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Where can I get some ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_392_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is. The European languages are members of the same family. Their separate existence is a myth.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_392_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "What is Lorem Ipsum ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_392_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_392_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Why do we use it ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_392_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual languages. The new common language will be more simple and regular than the existing European languages.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_392_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Where does it come from ?");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_392_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function CyptolandingComponent_ng_template_392_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Roadmap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "ngb-accordion", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ngb-panel", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CyptolandingComponent_ng_template_392_ng_template_6_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CyptolandingComponent_ng_template_392_ng_template_7_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ngb-panel", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, CyptolandingComponent_ng_template_392_ng_template_9_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, CyptolandingComponent_ng_template_392_ng_template_10_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "ngb-panel", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CyptolandingComponent_ng_template_392_ng_template_12_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, CyptolandingComponent_ng_template_392_ng_template_13_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "ngb-panel", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, CyptolandingComponent_ng_template_392_ng_template_15_Template, 3, 0, "ng-template", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, CyptolandingComponent_ng_template_392_ng_template_16_Template, 2, 0, "ng-template", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("closeOthers", true);
} }
const _c0 = function (a0) { return { "active": a0 }; };
const _c1 = function () { return ["SECTION"]; };
/**
 * Crypto landing page
 */
class CyptolandingComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
        this.currentSection = 'home';
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 24,
            nav: false,
            dots: false,
            responsive: {
                672: {
                    items: 3
                },
                912: {
                    items: 4
                },
            }
        };
        this.timelineCarousel = {
            items: 1,
            loop: false,
            margin: 0,
            nav: true,
            navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
            dots: false,
            responsive: {
                672: {
                    items: 3
                },
                576: {
                    items: 2
                },
                936: {
                    items: 4
                },
            }
        };
    }
    ngOnInit() {
        this._trialEndsAt = "2021-12-31";
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.interval)(3000).pipe((0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__.map)((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        })).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
    }
    getDays(t) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    }
    getHours(t) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    }
    getMinutes(t) {
        return Math.floor((t / 1000 / 60) % 60);
    }
    getSeconds(t) {
        return Math.floor((t / 1000) % 60);
    }
    ngOnDestroy() {
        // this.subscription.unsubscribe();
    }
    /**
     * Window scroll method
     */
    windowScroll() {
        const navbar = document.getElementById('navbar');
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
            navbar.classList.add('nav-sticky');
        }
        else {
            navbar.classList.remove('nav-sticky');
        }
    }
    /**
     * Toggle navbar
     */
    toggleMenu() {
        document.getElementById('topnav-menu-content').classList.toggle('show');
    }
    /**
     * Section changed method
     * @param sectionId specify the current sectionID
     */
    onSectionChange(sectionId) {
        this.currentSection = sectionId;
    }
}
CyptolandingComponent.ɵfac = function CyptolandingComponent_Factory(t) { return new (t || CyptolandingComponent)(); };
CyptolandingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CyptolandingComponent, selectors: [["app-cyptolanding"]], decls: 479, vars: 47, consts: [["id", "navbar", 1, "navbar", "navbar-expand-lg", "navigation", "fixed-top", "sticky", 3, "scroll"], [1, "container"], ["routerLink", "/", 1, "navbar-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "19", 1, "logo", "logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19", 1, "logo", "logo-light"], ["type", "button", "data-toggle", "collapse", "data-target", "#topnav-menu-content", 1, "btn", "btn-sm", "px-3", "font-size-16", "d-lg-none", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], ["id", "topnav-menu-content", 1, "collapse", "navbar-collapse"], ["id", "topnav-menu", 1, "navbar-nav", "ms-auto"], [1, "nav-item"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo", "ngClass"], ["href", "javascript: void(0);", 1, "nav-link", 3, "ngxScrollTo", "ngxScrollToOffset", "ngClass"], [1, "my-2", "ms-lg-2"], ["href", "javascript: void(0);", 1, "btn", "btn-outline-success", "w-xs"], ["appScrollspy", "", 3, "spiedTags", "sectionChange"], ["id", "home", 1, "section", "hero-section", "bg-ico-hero"], [1, "bg-overlay", "bg-primary"], [1, "row", "align-items-center"], [1, "col-lg-5"], [1, "text-white-50"], [1, "text-white", "fw-semibold", "mb-3", "hero-title"], [1, "font-size-14"], [1, "button-items", "mt-4"], ["href", "javascript: void(0);", 1, "btn", "btn-success"], ["href", "javascript: void(0);", 1, "btn", "btn-light"], [1, "col-lg-5", "col-md-8", "col-sm-10", "ms-lg-auto"], [1, "card", "overflow-hidden", "mb-0", "mt-5", "mt-lg-0"], [1, "card-header", "text-center"], [1, "mb-0"], [1, "card-body"], [1, "text-center"], [1, "mt-4"], ["inputDate", "December 31, 2021", 1, "counter-number", "ico-countdown"], [1, "coming-box"], ["type", "button", 1, "btn", "btn-success", "w-md"], [1, "mt-5"], [1, "fw-semibold"], [1, "clearfix", "mt-4"], [1, "float-end", "font-size-14"], [1, "progress", "p-1", "progress-xl", "softcap-progress"], ["role", "progressbar", "aria-valuenow", "15", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "15%"], [1, "progress-label"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "progress-bar-striped", "progress-bar-animated", 2, "width", "30%"], [1, "section", "bg-white", "p-0"], [1, "currency-price"], [1, "row"], [1, "col-md-4"], [1, "card"], [1, "media"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-warning", "text-warning", "font-size-18"], [1, "mdi", "mdi-bitcoin"], [1, "media-body"], [1, "text-muted"], [1, "text-muted", "text-truncate", "mb-0"], [1, "mdi", "mdi-arrow-up", "ms-1", "text-success"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-primary", "text-primary", "font-size-18"], [1, "mdi", "mdi-ethereum"], [1, "mdi", "mdi-arrow-down", "ms-1", "text-danger"], [1, "avatar-title", "rounded-circle", "bg-soft", "bg-info", "text-info", "font-size-18"], [1, "mdi", "mdi-litecoin"], ["id", "about", 1, "section", "pt-4", "bg-white"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "small-title"], [1, "mb-4"], [1, "button-items"], ["href", "javascript: void(0);", 1, "btn", "btn-outline-primary"], [1, "row", "mt-4"], [1, "col-lg-4", "col-6"], [1, "col-lg-6", "ms-auto"], [1, "mt-4", "mt-lg-0"], [1, "col-sm-6"], [1, "card", "border"], [1, "mb-3"], [1, "mdi", "mdi-bitcoin", "h2", "text-success"], [1, "text-muted", "mb-0"], [1, "card-footer", "bg-transparent", "border-top", "text-center"], ["href", "javascript: void(0);", 1, "text-primary"], [1, "card", "border", "mt-lg-5"], [1, "mdi", "mdi-wallet-outline", "h2", "text-success"], [1, "my-5"], [1, "events", "navs-carousel", 3, "options"], ["carouselSlide", ""], ["id", "features", 1, "section"], [1, "row", "align-items-center", "pt-4"], [1, "col-md-6", "col-sm-8"], ["src", "assets/images/crypto/features-img/img-1.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "col-md-5", "ms-auto"], [1, "mt-4", "mt-md-auto"], [1, "d-flex", "align-items-center", "mb-2"], [1, "features-number", "fw-semibold", "display-4", "me-3"], [1, "text-muted", "mt-4"], [1, "mb-2"], [1, "mdi", "mdi-circle-medium", "text-success", "me-1"], [1, "row", "align-items-center", "mt-5", "pt-md-5"], [1, "col-md-5"], [1, "mt-4", "mt-md-0"], [1, "col-md-6", "col-sm-8", "ms-md-auto"], [1, "mt-4", "me-md-0"], ["src", "assets/images/crypto/features-img/img-2.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["id", "roadmap", 1, "section", "bg-white"], [1, "hori-timeline"], ["id", "team", 1, "section"], ["id", "news", 1, "section", "bg-white"], [1, "col-xl-4", "col-sm-6"], [1, "blog-box", "mb-4", "mb-xl-0"], [1, "position-relative"], ["src", "assets/images/crypto/blog/img-1.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], [1, "badge", "bg-success", "blog-badge", "font-size-11"], [1, "mt-4", "text-muted"], [1, "bx", "bx-calendar", "me-1"], ["href", "javascript: void(0);"], ["src", "assets/images/crypto/blog/img-2.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], ["src", "assets/images/crypto/blog/img-3.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], ["id", "faqs", 1, "section"], [1, "vertical-nav"], [1, "col-lg-2", "col-sm-4"], ["ngbNav", "", 1, "nav-pills", "flex-column", 3, "activeId"], ["nav", "ngbNav"], [3, "ngbNavItem"], ["ngbNavLink", ""], [1, "bx", "bx-help-circle", "nav-icon", "d-block", "mb-2"], [1, "fw-bold", "mb-0"], ["ngbNavContent", ""], [1, "bx", "bx-receipt", "nav-icon", "d-block", "mb-2"], [1, "bx", "bx-timer", "d-block", "nav-icon", "mb-2"], [1, "col-lg-10"], [3, "ngbNavOutlet"], [1, "landing-footer"], [1, "col-lg-3", "col-sm-6"], [1, "mb-4", "mb-lg-0"], [1, "mb-3", "footer-list-title"], [1, "list-unstyled", "footer-list-menu"], [1, "blog-post"], ["href", "javascript: void(0);", 1, "post"], [1, "badge", "badge-soft-success", "font-size-11", "mb-3"], [1, "post-title"], [1, "footer-border", "my-5"], [1, "col-lg-6"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20"], [1, "item"], [1, "client-images"], ["src", "assets/images/clients/1.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/2.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/3.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/4.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/5.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], ["src", "assets/images/clients/6.png", "alt", "client-img", 1, "mx-auto", "img-fluid", "d-block"], [1, "item", "event-list"], [1, "event-date"], [1, "text-primary", "mb-1"], [1, "event-down-icon"], [1, "bx", "bx-down-arrow-circle", "h1", "text-primary", "down-arrow-icon"], [1, "mt-3", "px-3"], [1, "item", "event-list", "active"], [1, "card", "text-center", "team-box"], ["src", "assets/images/users/avatar-2.jpg", "alt", "", 1, "rounded"], [1, "mt-3"], [1, "card-footer", "bg-transparent", "border-top"], [1, "d-flex", "mb-0", "team-social-links"], [1, "flex-fill"], ["href", "javascript: void(0);", "ngbTooltip", "Facebook"], [1, "mdi", "mdi-facebook"], ["href", "javascript: void(0);", "ngbTooltip", "Linkedin"], [1, "mdi", "mdi-linkedin"], ["href", "javascript: void(0);", "ngbTooltip", "Google"], [1, "mdi", "mdi-google"], ["src", "assets/images/users/avatar-3.jpg", "alt", "", 1, "rounded"], ["src", "assets/images/users/avatar-8.jpg", "alt", "", 1, "rounded"], ["src", "assets/images/users/avatar-5.jpg", "alt", "", 1, "rounded"], ["src", "assets/images/users/avatar-1.jpg", "alt", "", 1, "rounded"], [1, "card-title", "mb-4"], ["activeIds", "static-1", 1, "custom-accordion", 3, "closeOthers"], ["id", "static-1"], ["ngbPanelTitle", ""], ["ngbPanelContent", ""], ["id", "static-2"], ["id", "static-3"], ["id", "static-4"], ["href", "javascript: void(0);", 1, "accordion-list"], ["activeIds", "static-2", 1, "custom-accordion", 3, "closeOthers"]], template: function CyptolandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scroll", function CyptolandingComponent_Template_nav_scroll_0_listener() { return ctx.windowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CyptolandingComponent_Template_button_click_5_listener() { return ctx.toggleMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("sectionChange", function CyptolandingComponent_Template_div_sectionChange_33_listener($event) { return ctx.onSectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "section", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "h1", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Skote - Ico Landing for a cryptocurrency business");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "It will be as simple as occidental in fact to an English person, it will seem like simplified as a skeptical Cambridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Get Whitepaper");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "How it work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "h5", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "ICO Countdown time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Time left to Ico :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "Seconds");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Get Token");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "h4", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "1 ETH = 2235 SKT");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "h5", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "5234.43");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "15 %");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "30 %");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "section", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](99, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "span", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](102, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](107, "$ 9134.39");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](108, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](109, "+ 0.0012.23 ( 0.2 % ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](116, "span", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "Ethereum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "$ 245.44");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "- 004.12 ( 0.1 % ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](125, "i", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "span", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Litecoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](137, "$ 63.61");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "p", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](139, "+ 0.0001.12 ( 0.1 % ) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](140, "i", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "section", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "About us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "What is ICO Token?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](154, "Best ICO for your cryptocurrency business");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "If several languages coalesce, the grammar of the resulting that of the individual new common language will be more simple and regular than the existing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "p", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](158, "It would be necessary to have uniform pronunciation.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "div", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "a", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "How It work");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "$ 6.2 M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Invest amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "16245");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "Users");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](184, "i", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "Lending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "At vero eos et accusamus et iusto blanditiis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](192, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "i", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](198, "Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Quis autem vel eum iure reprehenderit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "div", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](202, "a", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](204, "hr", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "owl-carousel-o", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](208, CyptolandingComponent_ng_template_208_Template, 3, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](209, CyptolandingComponent_ng_template_209_Template, 3, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](210, CyptolandingComponent_ng_template_210_Template, 3, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](211, CyptolandingComponent_ng_template_211_Template, 3, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](212, CyptolandingComponent_ng_template_212_Template, 3, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](213, CyptolandingComponent_ng_template_213_Template, 3, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "section", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](215, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](218, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](220, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](221, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Key features of the product");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](223, "div", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "img", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](228, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](230, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "01");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Lending");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](234, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](235, "If several languages coalesce, the grammar of the resulting language is more simple and regular than of the individual will be more simple and regular than the existing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](236, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](238, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Donec pede justo vel aliquet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](241, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "Aenean et nisl sagittis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "div", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](244, "div", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](246, "div", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](247, "div", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "02");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "h4", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](250, "Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](251, "p", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, "It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](254, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](255, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](256, "Donec pede justo vel aliquet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](257, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](258, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](259, "Aenean et nisl sagittis");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](260, "div", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](261, "div", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](262, "img", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](263, "section", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](264, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](265, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](267, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](268, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](269, "Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](270, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](271, "Our Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](272, "div", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](273, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](275, "owl-carousel-o", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](276, CyptolandingComponent_ng_template_276_Template, 12, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](277, CyptolandingComponent_ng_template_277_Template, 12, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](278, CyptolandingComponent_ng_template_278_Template, 12, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](279, CyptolandingComponent_ng_template_279_Template, 12, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](280, CyptolandingComponent_ng_template_280_Template, 12, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](281, CyptolandingComponent_ng_template_281_Template, 12, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](282, "section", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](283, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](284, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](286, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](288, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](290, "Meet our team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](292, "owl-carousel-o", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](293, CyptolandingComponent_ng_template_293_Template, 21, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](294, CyptolandingComponent_ng_template_294_Template, 21, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](295, CyptolandingComponent_ng_template_295_Template, 21, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](296, CyptolandingComponent_ng_template_296_Template, 21, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](297, CyptolandingComponent_ng_template_297_Template, 21, 0, "ng-template", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](298, "section", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](299, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](300, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](301, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](303, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](306, "Latest News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](307, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](308, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](310, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](311, "img", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](312, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](313, "Cryptocurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](315, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](316, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](317, " 04 Mar, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](318, "h5", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Donec pede justo, fringilla vele");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "If several languages coalesce, the grammar of the resulting language");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](323, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](326, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "img", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](330, "Cryptocurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](331, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](332, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](333, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](334, " 12 Feb, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](335, "h5", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](336, "Aenean ut eros et nisl");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](337, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](338, "Everyone realizes why a new common language would be desirable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](339, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](340, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](341, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](342, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](343, "div", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](344, "div", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](345, "img", 114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](346, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, "Cryptocurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "div", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](349, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](350, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](351, " 06 Jan, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](352, "h5", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](353, "In turpis, pellentesque posuere");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](354, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](355, "To an English person, it will seem like simplified English, as a skeptical Cambridge");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](356, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](357, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Read more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "section", 115);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](360, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](362, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](363, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](364, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](365, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](366, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](367, "Frequently asked questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](368, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](369, "div", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](370, "div", 116);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](372, "div", 117);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](373, "ul", 118, 119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](375, "li", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](376, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](377, "i", 122);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](378, "p", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](379, "General Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](380, CyptolandingComponent_ng_template_380_Template, 17, 1, "ng-template", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "li", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](382, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](383, "i", 125);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "p", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](385, "Token sale");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](386, CyptolandingComponent_ng_template_386_Template, 17, 1, "ng-template", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](387, "li", 120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](388, "a", 121);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](389, "i", 126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](390, "p", 123);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](391, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](392, CyptolandingComponent_ng_template_392_Template, 17, 1, "ng-template", 124);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](393, "div", 127);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](394, "div", 128);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "footer", 129);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](396, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](397, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](399, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](400, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](401, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](402, "ul", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](403, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](405, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](407, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](408, "Features");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](409, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](411, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](412, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](414, "News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](415, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](417, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](418, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](420, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "Resources");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "ul", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](423, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](425, "Whitepaper");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](426, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](428, "Token sales");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](430, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](431, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](432, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](434, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](436, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](437, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](438, "Links");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](439, "ul", 133);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](441, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](442, "Tokens");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](443, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](444, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](445, "Roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](446, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](447, "a", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "div", 130);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](450, "div", 131);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "h5", 132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](452, "Latest News");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](453, "div", 134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](454, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](455, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](456, "Cryptocurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](457, "h5", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](458, "Donec pede justo aliquet nec");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](459, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](460, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, " 04 Mar, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "a", 135);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](463, "div", 136);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](464, "Cryptocurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](465, "h5", 137);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](466, "In turpis, Pellentesque");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](468, "i", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, " 12 Mar, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](470, "hr", 138);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](471, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "div", 139);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](473, "div", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](474, "img", 140);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](475, "p", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](476);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](477, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, "It will be as simple as occidental in fact, it will be to an english person, it will seem like simplified English, as a skeptical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](374);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "home")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](32, _c0, ctx.currentSection === "home"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "about")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](34, _c0, ctx.currentSection === "about"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "features")("ngxScrollToOffset", 5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](36, _c0, ctx.currentSection === "features"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "roadmap")("ngxScrollToOffset", 5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](38, _c0, ctx.currentSection === "roadmap"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "team")("ngxScrollToOffset", 5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](40, _c0, ctx.currentSection === "team"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "news")("ngxScrollToOffset", 5)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](42, _c0, ctx.currentSection === "news"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "faqs")("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](44, _c0, ctx.currentSection === "faqs"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](46, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._days);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx._seconds);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.timelineCarousel);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("activeId", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavItem", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbNavOutlet", _r17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.year, " \u00A9 Skote. Design & Develop by Themesbrand");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavbar, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _shared_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__.CarouselSlideDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbNavOutlet, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbTooltip, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbAccordion, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPanel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPanelTitle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbPanelContent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjeXB0b2xhbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 75701:
/*!************************************************************!*\
  !*** ./src/app/cyptolanding/shared/scrollspy.directive.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollspyDirective": () => (/* binding */ ScrollspyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 28267);



class ScrollspyDirective {
    // tslint:disable-next-line: variable-name
    constructor(_el, document) {
        this._el = _el;
        this.document = document;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    /**
     * Window scroll method
     */
    onScroll(event) {
        let currentSection;
        const children = this._el.nativeElement.querySelectorAll('section');
        const scrollTop = this.document.documentElement.scrollTop;
        const parentOffset = this.document.documentElement.offsetTop;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < children.length; i++) {
            const element = children[i];
            if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
                if ((element.offsetTop - parentOffset) <= scrollTop) {
                    currentSection = element.id;
                }
            }
        }
        if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
        }
    }
}
ScrollspyDirective.ɵfac = function ScrollspyDirective_Factory(t) { return new (t || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT)); };
ScrollspyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollspyDirective, selectors: [["", "appScrollspy", ""]], hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { spiedTags: "spiedTags" }, outputs: { sectionChange: "sectionChange" } });


/***/ }),

/***/ 58678:
/*!******************************************************!*\
  !*** ./src/app/cyptolanding/shared/shared.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollspy.directive */ 75701);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective] }); })();


/***/ }),

/***/ 26190:
/*!***************************************************************!*\
  !*** ./src/app/extrapages/comingsoon/comingsoon.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComingsoonComponent": () => (/* binding */ ComingsoonComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 91384);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ 91414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);




/**
 * Coming-soon component
 */
class ComingsoonComponent {
    constructor() { }
    ngOnInit() {
        this._trialEndsAt = "2021-12-31";
        (0,rxjs__WEBPACK_IMPORTED_MODULE_0__.interval)(1000).pipe((0,rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__.map)((x) => {
            this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
        })).subscribe((x) => {
            this._days = this.getDays(this._diff);
            this._hours = this.getHours(this._diff);
            this._minutes = this.getMinutes(this._diff);
            this._seconds = this.getSeconds(this._diff);
        });
    }
    getDays(t) {
        return Math.floor(t / (1000 * 60 * 60 * 24));
    }
    getHours(t) {
        return Math.floor((t / (1000 * 60 * 60)) % 24);
    }
    getMinutes(t) {
        return Math.floor((t / 1000 / 60) % 60);
    }
    getSeconds(t) {
        return Math.floor((t / 1000) % 60);
    }
}
ComingsoonComponent.ɵfac = function ComingsoonComponent_Factory(t) { return new (t || ComingsoonComponent)(); };
ComingsoonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ComingsoonComponent, selectors: [["app-comingsoon"]], decls: 38, vars: 4, consts: [[1, "home-btn", "d-none", "d-sm-block"], ["routerLink", "/", 1, "text-white"], [1, "fas", "fa-home", "h2"], [1, "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "row", "justify-content-center", "mt-5"], [1, "col-sm-4"], [1, "maintenance-img"], ["src", "assets/images/coming-soon.svg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "mt-5"], [1, "text-muted"], [1, "col-md-8"], ["inputDate", "December 31, 2021", 1, "counter-number", "ico-countdown"], [1, "coming-box"]], template: function ComingsoonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "h4", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Let's get started with Skote");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "It will be as simple as Occidental in fact it will be Occidental.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "Minutes");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Seconds");
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._days);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._hours);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._minutes);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx._seconds);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21pbmdzb29uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 28649:
/*!*******************************************************************!*\
  !*** ./src/app/extrapages/confirmmail2/confirmmail2.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Confirmmail2Component": () => (/* binding */ Confirmmail2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



function Confirmmail2Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Confirmmail2Component_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Confirmmail2Component {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
    }
}
Confirmmail2Component.ɵfac = function Confirmmail2Component_Factory(t) { return new (t || Confirmmail2Component)(); };
Confirmmail2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Confirmmail2Component, selectors: [["app-confirmmail2"]], decls: 47, vars: 2, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bx-mail-send", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "text-muted"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"]], template: function Confirmmail2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Confirmmail2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Confirmmail2Component_ng_template_20_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Success !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtbWFpbDIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 14777:
/*!*****************************************************************!*\
  !*** ./src/app/extrapages/confirmmail/confirmmail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmmailComponent": () => (/* binding */ ConfirmmailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);


class ConfirmmailComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        document.body.classList.remove('auth-body-bg');
    }
}
ConfirmmailComponent.ɵfac = function ConfirmmailComponent_Factory(t) { return new (t || ConfirmmailComponent)(); };
ConfirmmailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmmailComponent, selectors: [["app-confirmmail"]], decls: 32, vars: 1, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bx-mail-send", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "text-muted"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success"], [1, "mt-5", "text-center"], [1, "mdi", "mdi-heart", "text-danger"]], template: function ConfirmmailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Responsive Bootstrap 5 Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Success !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Back to Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maXJtbWFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 55661:
/*!*********************************************************!*\
  !*** ./src/app/extrapages/extrapages-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrapagesRoutingModule": () => (/* binding */ ExtrapagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 39965);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404/page404.component */ 85132);
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page500/page500.component */ 76257);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 44655);
/* harmony import */ var _account_auth_login2_login2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../account/auth/login2/login2.component */ 6665);
/* harmony import */ var _lockscreen2_lockscreen2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lockscreen2/lockscreen2.component */ 90063);
/* harmony import */ var _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmmail/confirmmail.component */ 14777);
/* harmony import */ var _confirmmail2_confirmmail2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirmmail2/confirmmail2.component */ 28649);
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verification/verification.component */ 52801);
/* harmony import */ var _verification2_verification2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verification2/verification2.component */ 19691);
/* harmony import */ var _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./steptwoverification/steptwoverification.component */ 40202);
/* harmony import */ var _steptwoverification2_steptwoverification2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./steptwoverification2/steptwoverification2.component */ 73430);
/* harmony import */ var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comingsoon/comingsoon.component */ 26190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);
















const routes = [
    {
        path: 'maintenance',
        component: _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_0__.MaintenanceComponent
    },
    {
        path: 'coming-soon',
        component: _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_12__.ComingsoonComponent
    },
    {
        path: '404',
        component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component
    },
    {
        path: '500',
        component: _page500_page500_component__WEBPACK_IMPORTED_MODULE_2__.Page500Component
    },
    {
        path: 'login-2',
        component: _account_auth_login2_login2_component__WEBPACK_IMPORTED_MODULE_4__.Login2Component
    },
    {
        path: 'lock-screen-1',
        component: _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_3__.LockscreenComponent
    },
    {
        path: 'lock-screen-2',
        component: _lockscreen2_lockscreen2_component__WEBPACK_IMPORTED_MODULE_5__.Lockscreen2Component
    },
    {
        path: 'confirm-mail',
        component: _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmmailComponent
    },
    {
        path: 'confirm-mail-2',
        component: _confirmmail2_confirmmail2_component__WEBPACK_IMPORTED_MODULE_7__.Confirmmail2Component
    },
    {
        path: 'email-verification',
        component: _verification_verification_component__WEBPACK_IMPORTED_MODULE_8__.VerificationComponent
    },
    {
        path: 'email-verification-2',
        component: _verification2_verification2_component__WEBPACK_IMPORTED_MODULE_9__.Verification2Component
    },
    {
        path: 'two-step-verification',
        component: _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_10__.SteptwoverificationComponent
    },
    {
        path: 'two-step-verification-2',
        component: _steptwoverification2_steptwoverification2_component__WEBPACK_IMPORTED_MODULE_11__.Steptwoverification2Component
    },
];
class ExtrapagesRoutingModule {
}
ExtrapagesRoutingModule.ɵfac = function ExtrapagesRoutingModule_Factory(t) { return new (t || ExtrapagesRoutingModule)(); };
ExtrapagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ExtrapagesRoutingModule });
ExtrapagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ExtrapagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule] }); })();


/***/ }),

/***/ 17358:
/*!*************************************************!*\
  !*** ./src/app/extrapages/extrapages.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExtrapagesModule": () => (/* binding */ ExtrapagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-otp-input */ 29708);
/* harmony import */ var _extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extrapages-routing.module */ 55661);
/* harmony import */ var _maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintenance/maintenance.component */ 39965);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page404/page404.component */ 85132);
/* harmony import */ var _page500_page500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page500/page500.component */ 76257);
/* harmony import */ var _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lockscreen/lockscreen.component */ 44655);
/* harmony import */ var _lockscreen2_lockscreen2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lockscreen2/lockscreen2.component */ 90063);
/* harmony import */ var _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirmmail/confirmmail.component */ 14777);
/* harmony import */ var _confirmmail2_confirmmail2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirmmail2/confirmmail2.component */ 28649);
/* harmony import */ var _verification_verification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./verification/verification.component */ 52801);
/* harmony import */ var _verification2_verification2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./verification2/verification2.component */ 19691);
/* harmony import */ var _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./steptwoverification/steptwoverification.component */ 40202);
/* harmony import */ var _steptwoverification2_steptwoverification2_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./steptwoverification2/steptwoverification2.component */ 73430);
/* harmony import */ var _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./comingsoon/comingsoon.component */ 26190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 14001);

















class ExtrapagesModule {
}
ExtrapagesModule.ɵfac = function ExtrapagesModule_Factory(t) { return new (t || ExtrapagesModule)(); };
ExtrapagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: ExtrapagesModule });
ExtrapagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule,
            _extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtrapagesRoutingModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_16__.NgOtpInputModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](ExtrapagesModule, { declarations: [_maintenance_maintenance_component__WEBPACK_IMPORTED_MODULE_1__.MaintenanceComponent, _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component, _page500_page500_component__WEBPACK_IMPORTED_MODULE_3__.Page500Component, _lockscreen_lockscreen_component__WEBPACK_IMPORTED_MODULE_4__.LockscreenComponent, _lockscreen2_lockscreen2_component__WEBPACK_IMPORTED_MODULE_5__.Lockscreen2Component, _confirmmail_confirmmail_component__WEBPACK_IMPORTED_MODULE_6__.ConfirmmailComponent, _confirmmail2_confirmmail2_component__WEBPACK_IMPORTED_MODULE_7__.Confirmmail2Component, _verification_verification_component__WEBPACK_IMPORTED_MODULE_8__.VerificationComponent, _verification2_verification2_component__WEBPACK_IMPORTED_MODULE_9__.Verification2Component, _steptwoverification_steptwoverification_component__WEBPACK_IMPORTED_MODULE_10__.SteptwoverificationComponent, _steptwoverification2_steptwoverification2_component__WEBPACK_IMPORTED_MODULE_11__.Steptwoverification2Component, _comingsoon_comingsoon_component__WEBPACK_IMPORTED_MODULE_12__.ComingsoonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_15__.CarouselModule,
        _extrapages_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExtrapagesRoutingModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_16__.NgOtpInputModule] }); })();


/***/ }),

/***/ 90063:
/*!*****************************************************************!*\
  !*** ./src/app/extrapages/lockscreen2/lockscreen2.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lockscreen2Component": () => (/* binding */ Lockscreen2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



function Lockscreen2Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Lockscreen2Component_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Lockscreen2Component {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
        document.body.classList.add('auth-body-bg');
    }
}
Lockscreen2Component.ɵfac = function Lockscreen2Component_Factory(t) { return new (t || Lockscreen2Component)(); };
Lockscreen2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Lockscreen2Component, selectors: [["app-lockscreen2"]], decls: 58, vars: 2, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "text-muted"], [1, "mt-4"], [1, "form-horizontal"], [1, "user-thumb", "text-center", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "thumbnail", 1, "rounded-circle", "img-thumbnail", "avatar-md"], [1, "font-size-15", "mt-3"], ["for", "userpassword"], ["type", "password", "id", "userpassword", "placeholder", "Enter password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md", "waves-effect", "waves-light"], [1, "mt-5", "text-center"], ["routerLink", "/account/login-2", 1, "fw-medium", "text-primary"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"]], template: function Lockscreen2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Lockscreen2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Lockscreen2Component_ng_template_20_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Lock screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Enter your password to unlock the screen!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "form", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Maria Laird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Not you ? return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9", ctx.year, "Skote. Crafted with ");
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Nrc2NyZWVuMi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 44655:
/*!***************************************************************!*\
  !*** ./src/app/extrapages/lockscreen/lockscreen.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LockscreenComponent": () => (/* binding */ LockscreenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);


/**
 * Lock-screen component
 */
class LockscreenComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
LockscreenComponent.ɵfac = function LockscreenComponent_Factory(t) { return new (t || LockscreenComponent)(); };
LockscreenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LockscreenComponent, selectors: [["app-lockscreen"]], decls: 43, vars: 1, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card", "overflow-hidden"], [1, "bg-primary", "bg-soft"], [1, "row"], [1, "col-7"], [1, "text-primary", "p-4"], [1, "text-primary"], [1, "col-5", "align-self-end"], ["src", "assets/images/profile-img.png", "alt", "", 1, "img-fluid"], [1, "card-body", "pt-0"], ["routerLink", "/dashboard"], [1, "avatar-md", "profile-user-wid", "mb-4"], [1, "avatar-title", "rounded-circle", "bg-light"], ["src", "assets/images/logo.svg", "alt", "", "height", "34", 1, "rounded-circle"], [1, "p-2"], [1, "user-thumb", "text-center", "mb-4"], ["src", "assets/images/users/avatar-1.jpg", "alt", "thumbnail", 1, "rounded-circle", "img-thumbnail", "avatar-md"], [1, "font-size-15", "mt-3"], [1, "mb-3"], ["for", "userpassword"], ["type", "password", "id", "userpassword", "placeholder", "Enter password", 1, "form-control"], [1, "text-end"], ["type", "submit", 1, "btn", "btn-primary", "w-md"], [1, "mt-5", "text-center"], ["routerLink", "/account/login-1", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function LockscreenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lock screen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enter your password to unlock the screen!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Maria Laird");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Unlock");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Not you ? return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Sign In ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Nrc2NyZWVuLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 39965:
/*!*****************************************************************!*\
  !*** ./src/app/extrapages/maintenance/maintenance.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintenanceComponent": () => (/* binding */ MaintenanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);


/**
 * Maintenance page component
 */
class MaintenanceComponent {
    constructor() { }
    ngOnInit() {
    }
}
MaintenanceComponent.ɵfac = function MaintenanceComponent_Factory(t) { return new (t || MaintenanceComponent)(); };
MaintenanceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintenanceComponent, selectors: [["app-maintenance"]], decls: 47, vars: 0, consts: [[1, "home-btn", "d-none", "d-sm-block"], ["routerLink", "/", 1, "text-dark"], [1, "fas", "fa-home", "h2"], [1, "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], [1, "home-wrapper"], [1, "mb-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "row", "justify-content-center"], [1, "col-sm-4"], [1, "maintenance-img"], ["src", "assets/images/maintenance.svg", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], [1, "mt-5"], [1, "col-md-4"], [1, "card", "mt-4", "maintenance-box"], [1, "card-body"], [1, "bx", "bx-broadcast", "mb-4", "h1", "text-primary"], [1, "font-size-15", "text-uppercase"], [1, "text-muted", "mb-0"], [1, "bx", "bx-time-five", "mb-4", "h1", "text-primary"], [1, "bx", "bx-envelope", "mb-4", "h1", "text-primary"], ["href", "mailto:no-reply@domain.com", 1, "text-decoration-underline"]], template: function MaintenanceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Site is Under Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Please check back in sometime.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Why is the Site Down?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " What is the Downtime?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Do you need Support?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embar.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "no-reply@domain.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 85132:
/*!*********************************************************!*\
  !*** ./src/app/extrapages/page404/page404.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404Component": () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);


/**
 * PAges-404 component
 */
class Page404Component {
    constructor() { }
    ngOnInit() {
    }
}
Page404Component.ɵfac = function Page404Component_Factory(t) { return new (t || Page404Component)(); };
Page404Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page404Component, selectors: [["app-page404"]], decls: 18, vars: 0, consts: [[1, "account-pages", "my-5", "pt-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "mt-5", "text-center"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/images/error-img.png", "alt", "", 1, "img-fluid"]], template: function Page404Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sorry, page not found");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNDA0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 76257:
/*!*********************************************************!*\
  !*** ./src/app/extrapages/page500/page500.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page500Component": () => (/* binding */ Page500Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);


/**
 * Pages-500 component
 */
class Page500Component {
    constructor() { }
    ngOnInit() {
    }
}
Page500Component.ɵfac = function Page500Component_Factory(t) { return new (t || Page500Component)(); };
Page500Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Page500Component, selectors: [["app-page500"]], decls: 18, vars: 0, consts: [[1, "account-pages", "my-5", "pt-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5"], [1, "display-2", "fw-medium"], [1, "bx", "bx-buoy", "bx-spin", "text-primary", "display-3"], [1, "text-uppercase"], [1, "mt-5", "text-center"], ["routerLink", "/", 1, "btn", "btn-primary"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-xl-6"], ["src", "assets/images/error-img.png", "alt", "", 1, "img-fluid"]], template: function Page500Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Internal Server Error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Back to Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlNTAwLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 73430:
/*!***********************************************************************************!*\
  !*** ./src/app/extrapages/steptwoverification2/steptwoverification2.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Steptwoverification2Component": () => (/* binding */ Steptwoverification2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-otp-input */ 29708);




function Steptwoverification2Component_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Steptwoverification2Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Steptwoverification2Component {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '80px',
                'height': '50px'
            }
        };
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
    }
}
Steptwoverification2Component.ɵfac = function Steptwoverification2Component_Factory(t) { return new (t || Steptwoverification2Component)(); };
Steptwoverification2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Steptwoverification2Component, selectors: [["app-steptwoverification2"]], decls: 50, vars: 3, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "mb-5"], [1, "fw-semibold"], [3, "config"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"]], template: function Steptwoverification2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, Steptwoverification2Component_ng_template_18_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Steptwoverification2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Verify your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Please enter the 4 digit code sent to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "example@abc.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "ng-otp-input", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, ng_otp_input__WEBPACK_IMPORTED_MODULE_3__["ɵa"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwdHdvdmVyaWZpY2F0aW9uMi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 40202:
/*!*********************************************************************************!*\
  !*** ./src/app/extrapages/steptwoverification/steptwoverification.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SteptwoverificationComponent": () => (/* binding */ SteptwoverificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-otp-input */ 29708);



class SteptwoverificationComponent {
    constructor() {
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '80px',
                'height': '50px'
            }
        };
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        document.body.classList.remove('auth-body-bg');
    }
}
SteptwoverificationComponent.ɵfac = function SteptwoverificationComponent_Factory(t) { return new (t || SteptwoverificationComponent)(); };
SteptwoverificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SteptwoverificationComponent, selectors: [["app-steptwoverification"]], decls: 40, vars: 2, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "mb-5"], [1, "fw-semibold"], [3, "config"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-5", "text-center"], ["href", "javascript: void(0);", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function SteptwoverificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Responsive Bootstrap 4 Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Verify your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Please enter the 4 digit code sent to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "example@abc.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "ng-otp-input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Did't receive a code ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Resend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, ng_otp_input__WEBPACK_IMPORTED_MODULE_2__["ɵa"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGVwdHdvdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 19691:
/*!*********************************************************************!*\
  !*** ./src/app/extrapages/verification2/verification2.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Verification2Component": () => (/* binding */ Verification2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ 24008);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);



function Verification2Component_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\" Fantastic theme with a ton of options. If you just want the HTML to integrate with your project, then this is the package. You can find the files in the 'dist' folder...no need to install git and all the other stuff the documentation talks about. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Abs1981");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function Verification2Component_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\" If Every Vendor on Envato are as supportive as Themesbrand, Development with be a nice experience. You guys are Wonderful. Keep us the good work. \"");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "nezerious");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "- Skote User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class Verification2Component {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
        this.carouselOption = {
            items: 1,
            loop: false,
            margin: 0,
            nav: false,
            dots: true,
            responsive: {
                680: {
                    items: 1
                },
            }
        };
    }
    ngOnInit() {
    }
}
Verification2Component.ɵfac = function Verification2Component_Factory(t) { return new (t || Verification2Component)(); };
Verification2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Verification2Component, selectors: [["app-verification2"]], decls: 50, vars: 2, consts: [[1, "container-fluid", "p-0"], [1, "row", "g-0"], [1, "col-xl-9"], [1, "auth-full-bg", "pt-lg-5", "p-4"], [1, "w-100"], [1, "bg-overlay"], [1, "d-flex", "h-100", "flex-column"], [1, "p-4", "mt-auto"], [1, "row", "justify-content-center"], [1, "col-lg-7"], [1, "text-center"], [1, "mb-3"], [1, "bx", "bxs-quote-alt-left", "text-primary", "h1", "align-middle", "me-3"], [1, "text-primary"], ["dir", "ltr"], [1, "owl-theme", "auth-review-carousel", 3, "options"], ["carouselSlide", ""], [1, "col-xl-3"], [1, "auth-full-page-content", "p-md-5", "p-4"], [1, "d-flex", "flex-column", "h-100"], [1, "mb-4", "mb-md-5"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "18", 1, "auth-logo-dark"], ["src", "assets/images/logo-light.png", "alt", "", "height", "18", 1, "auth-logo-light"], [1, "my-auto"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "fw-semibold"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-4", "mt-md-5", "text-center"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], [1, "item"], [1, "py-3"], [1, "font-size-16", "mb-4"], [1, "font-size-16", "text-primary"], [1, "font-size-14", "mb-0"]], template: function Verification2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "5k");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "+ Satisfied clients");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, Verification2Component_ng_template_19_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, Verification2Component_ng_template_20_Template, 9, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Verify your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "We have sent you verification email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "example@abc.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, ", Please check it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Verify email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.carouselOption);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__.CarouselSlideDirective, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZmljYXRpb24yLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 52801:
/*!*******************************************************************!*\
  !*** ./src/app/extrapages/verification/verification.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerificationComponent": () => (/* binding */ VerificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);


class VerificationComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
        document.body.classList.remove('auth-body-bg');
    }
}
VerificationComponent.ɵfac = function VerificationComponent_Factory(t) { return new (t || VerificationComponent)(); };
VerificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VerificationComponent, selectors: [["app-verification"]], decls: 39, vars: 1, consts: [[1, "account-pages", "my-5", "pt-sm-5"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "text-center", "mb-5", "text-muted"], ["routerLink", "/", 1, "d-block", "auth-logo"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "20", 1, "auth-logo-dark", "mx-auto"], ["src", "assets/images/logo-light.png", "alt", "", "height", "20", 1, "auth-logo-light", "mx-auto"], [1, "mt-3"], [1, "row", "justify-content-center"], [1, "col-md-8", "col-lg-6", "col-xl-5"], [1, "card"], [1, "card-body"], [1, "p-2"], [1, "text-center"], [1, "avatar-md", "mx-auto"], [1, "avatar-title", "rounded-circle", "bg-light"], [1, "bx", "bxs-envelope", "h1", "mb-0", "text-primary"], [1, "p-2", "mt-4"], [1, "fw-semibold"], [1, "mt-4"], ["routerLink", "/", 1, "btn", "btn-success", "w-md"], [1, "mt-5", "text-center"], ["href", "javascript: void(0);", 1, "fw-medium", "text-primary"], [1, "mdi", "mdi-heart", "text-danger"]], template: function VerificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Responsive Bootstrap 4 Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Verify your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "We have sent you verification email ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "example@abc.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ", Please check it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Verify email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Did't receive an email ? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Resend ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " by Themesbrand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u00A9 ", ctx.year, " Skote. Crafted with ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJpZmljYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 57022:
/*!*********************************************!*\
  !*** ./src/app/helpers/auth.interceptor.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../account/auth/services/usuario.service */ 15501);


class AuthInterceptor {
    constructor(apiService) {
        this.apiService = apiService;
    }
    intercept(request, next) {
        const tokend = this.apiService.token;
        if (tokend) {
            const cloned = request.clone({
                headers: request.headers.set('Authorization', `Bearer ${tokend}`)
            });
            return next.handle(cloned);
        }
        return next.handle(request);
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_0__.UsuarioService)); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 42234:
/*!****************************************************!*\
  !*** ./src/app/layouts/footer/footer.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);

/**
 * Footer component
 */
class FooterComponent {
    constructor() {
        // set the currenr year
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 8, vars: 0, consts: [[1, "footer"], [1, "container"], [1, "row"], [1, "col-md-12", "text-white-50", "text-center"], ["href", "https://www.ues.edu.sv/", 1, "text-white"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " 2023 \u00A9 Facultad Multidisciplinaria Paracentral - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Universidad de El Salvador");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ". Todos los derechos reservados. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n\n.footer[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  \n  width: 100%;\n  \n  background: #972727;\n}\n\n@media (max-width: 500px) {\n  .footer[_ngcontent-%COMP%] {\n    font-size: 12px;\n    \n  }\n}\n@media (max-width: 380px) {\n  .footer[_ngcontent-%COMP%] {\n    font-size: 10px;\n    \n  }\n}\n@media (max-width: 320px) {\n  .footer[_ngcontent-%COMP%] {\n    font-size: 9.5px;\n    \n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEIsMkJBQUE7QUFDQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQVcscUJBQUE7RUFDWCxXQUFBO0VBQWEsbUJBQUE7RUFDYixtQkFBQTtBQUlKO0FBREEseURBQUE7QUFDQTtFQUNJO0lBQ0ksZUFBQTtJQUFpQixpQ0FBQTtFQUt2QjtBQUNGO0FBRkE7RUFDSTtJQUNJLGVBQUE7SUFBaUIsaUNBQUE7RUFLdkI7QUFDRjtBQUZBO0VBQ0k7SUFDSSxnQkFBQTtJQUFrQixpQ0FBQTtFQUt4QjtBQUNGIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qIEVzdGlsb3MgcGFyYSBlbCBmb290ZXIgKi9cbi5mb290ZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMDtcbiAgLyogQWxpbmVhciBhbCBmb25kbyAqL1xuICB3aWR0aDogMTAwJTtcbiAgLyogQW5jaG8gY29tcGxldG8gKi9cbiAgYmFja2dyb3VuZDogIzk3MjcyNztcbn1cblxuLyogTWVkaWEgcXVlcnkgcGFyYSBwYW50YWxsYXMgY29uIGFuY2hvIG3DoXhpbW8gZGUgNTAwcHggKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xuICAuZm9vdGVyIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLyogVGFtYcOxbyBkZSBmdWVudGUgbcOhcyBwZXF1ZcOxbyAqL1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzgwcHgpIHtcbiAgLmZvb3RlciB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIC8qIFRhbWHDsW8gZGUgZnVlbnRlIG3DoXMgcGVxdWXDsW8gKi9cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDMyMHB4KSB7XG4gIC5mb290ZXIge1xuICAgIGZvbnQtc2l6ZTogOS41cHg7XG4gICAgLyogVGFtYcOxbyBkZSBmdWVudGUgbcOhcyBwZXF1ZcOxbyAqL1xuICB9XG59Il19 */"] });


/***/ }),

/***/ 36010:
/*!************************************************************!*\
  !*** ./src/app/layouts/horizontal/horizontal.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalComponent": () => (/* binding */ HorizontalComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 12908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 63997);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../horizontaltopbar/horizontaltopbar.component */ 66602);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 42234);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 83161);







/**
 * Horizontal-layout component
 */
class HorizontalComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        this.eventService.subscribe('changeTopbar', (topbar) => {
            this.topbar = topbar;
            this.changeTopbar(this.topbar);
        });
        document.body.setAttribute('data-layout', 'horizontal');
        document.body.removeAttribute('data-sidebar');
        document.body.removeAttribute('data-layout-size');
        document.body.removeAttribute('data-keep-enlarged');
        document.body.removeAttribute('data-sidebar-small');
        this.changeTopbar(this.topbar);
    }
    ngAfterViewInit() {
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    changeTopbar(topbar) {
        switch (topbar) {
            case "light":
                document.body.setAttribute("data-topbar", "light");
                break;
            case "dark":
                document.body.setAttribute("data-topbar", "dark");
                break;
            case "colored":
                document.body.setAttribute("data-topbar", "colored");
                break;
            default:
                document.body.setAttribute("data-topbar", "dark");
                break;
        }
    }
}
HorizontalComponent.ɵfac = function HorizontalComponent_Factory(t) { return new (t || HorizontalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
HorizontalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HorizontalComponent, selectors: [["app-horizontal"]], decls: 7, vars: 0, consts: [["id", "layout-wrapper"], [1, "main-content"], [1, "page-content"]], template: function HorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-horizontaltopbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "app-rightsidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } }, directives: [_horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_2__.HorizontaltopbarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_4__.RightsidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 66602:
/*!************************************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/horizontaltopbar.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontaltopbarComponent": () => (/* binding */ HorizontaltopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ 70936);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 63997);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/auth.service */ 67686);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/services/authfake.service */ 92464);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../core/services/language.service */ 58463);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie-service */ 32071);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
















function HorizontaltopbarComponent_img_177_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 114);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r0.flagvalue, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function HorizontaltopbarComponent_img_180_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 114);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", ctx_r1.valueset, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
} }
function HorizontaltopbarComponent_span_181_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "English");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "active": a0 }; };
function HorizontaltopbarComponent_a_183_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_a_183_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const item_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.setLanguage(item_r5.text, item_r5.lang, item_r5.flag); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r3.cookieValue === item_r5.lang));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("src", item_r5.flag, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r5.text);
} }
function HorizontaltopbarComponent_ng_container_348_a_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 124);
} }
function HorizontaltopbarComponent_ng_container_348_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontaltopbarComponent_ng_container_348_a_2_div_4_Template, 1, 0, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r8.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bx ", item_r8.icon, " me-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 6, item_r8.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r8));
} }
function HorizontaltopbarComponent_ng_container_348_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_348_a_3_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r14.onMenuClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bx ", item_r8.icon, " me-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 4, item_r8.label), " ");
} }
const _c1 = function () { return { exact: true }; };
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subitem_r19.link)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 3, subitem_r19.label), " ");
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "a", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const subitem_r19 = ctx_r25.$implicit;
    const i_r18 = ctx_r25.index;
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subitem_r19.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 6, item_r8.subItems[i_r18].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r8.subItems[i_r18 + 1] == null ? null : item_r8.subItems[i_r18 + 1].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 8, item_r8.subItems[i_r18 + 1] == null ? null : item_r8.subItems[i_r18 + 1].label));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", item_r8.subItems[i_r18 + 2] == null ? null : item_r8.subItems[i_r18 + 2].link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 10, item_r8.subItems[i_r18 + 2] == null ? null : item_r8.subItems[i_r18 + 2].label));
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_1_div_1_Template, 13, 12, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", i_r18 % 3 == 0);
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subSubitem_r29.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, subSubitem_r29.label));
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubSubitem_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", subSubSubitem_r34.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 2, subSubSubitem_r34.label));
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](6); return ctx_r35.onMenuClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_ng_template_6_Template, 3, 4, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, subSubitem_r29.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", subSubitem_r29.subItems);
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_a_0_Template, 3, 4, "a", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_div_1_Template, 7, 4, "div", 130);
} if (rf & 2) {
    const subSubitem_r29 = ctx.$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r28.hasItems(subSubitem_r29));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r28.hasItems(subSubitem_r29));
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r38.onMenuClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_ng_template_6_Template, 2, 2, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, subitem_r19.label), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", subitem_r19.subItems);
} }
function HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_a_0_Template, 3, 6, "a", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_1_Template, 2, 1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_div_2_Template, 7, 4, "div", 130);
} if (rf & 2) {
    const subitem_r19 = ctx.$implicit;
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r8.subItems.length < 11 && !ctx_r17.hasItems(subitem_r19));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r8.subItems.length > 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r17.hasItems(subitem_r19));
} }
const _c2 = function (a0) { return { "dropdown-mega-menu-xl px-2": a0 }; };
function HorizontaltopbarComponent_ng_container_348_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HorizontaltopbarComponent_ng_container_348_div_4_ng_template_1_Template, 3, 3, "ng-template", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c2, item_r8.subItems.length > 11));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r8.subItems);
} }
function HorizontaltopbarComponent_ng_container_348_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "li", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, HorizontaltopbarComponent_ng_container_348_a_2_Template, 5, 8, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HorizontaltopbarComponent_ng_container_348_a_3_Template, 5, 6, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HorizontaltopbarComponent_ng_container_348_div_4_Template, 2, 4, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !item_r8.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r8.subItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.hasItems(item_r8));
} }
/**
 * Horizontal Topbar and navbar specified
 */
class HorizontaltopbarComponent {
    // tslint:disable-next-line: max-line-length
    constructor(document, router, eventService, authService, authFackservice, languageService, 
    // tslint:disable-next-line: variable-name
    _cookiesService) {
        this.document = document;
        this.router = router;
        this.eventService = eventService;
        this.authService = authService;
        this.authFackservice = authFackservice;
        this.languageService = languageService;
        this._cookiesService = _cookiesService;
        this.menuItems = [];
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
            { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
            { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
        ];
        router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd) {
                this.activateMenu();
            }
        });
    }
    ngOnInit() {
        this.element = document.documentElement;
        this.initialize();
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.listLang.filter(x => x.lang === this.cookieValue);
        this.countryName = val.map(element => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map(element => element.flag);
        }
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
    }
    /**
     * Logout the user
     */
    logout() {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.defaultauth === 'firebase') {
            this.authService.logout();
        }
        else {
            this.authFackservice.logout();
        }
        this.router.navigate(['/account/login']);
    }
    /**
     * On menu click
     */
    onMenuClick(event) {
        const nextEl = event.target.nextElementSibling;
        if (nextEl) {
            const parentEl = event.target.parentNode;
            if (parentEl) {
                parentEl.classList.remove("show");
            }
            nextEl.classList.toggle("show");
        }
        return false;
    }
    ngAfterViewInit() {
        this.activateMenu();
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Togglemenu bar
     */
    toggleMenubar() {
        const element = document.getElementById('topnav-menu-content');
        element.classList.toggle('show');
    }
    /**
     * Activates the menu
     */
    activateMenu() {
        const resetParent = (el) => {
            const parent = el.parentElement;
            if (parent) {
                parent.classList.remove('active');
                const parent2 = parent.parentElement;
                this._removeAllClass('mm-active');
                this._removeAllClass('mm-show');
                if (parent2) {
                    parent2.classList.remove('active');
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.remove('active');
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.remove('active');
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.remove('active');
                                const menuelement = document.getElementById("topnav-menu-content");
                                if (menuelement !== null) {
                                    if (menuelement.classList.contains('show'))
                                        document
                                            .getElementById("topnav-menu-content")
                                            .classList.remove("show");
                                }
                            }
                        }
                    }
                }
            }
        };
        // activate menu item based on location
        const links = document.getElementsByClassName('side-nav-link-ref');
        let matchingMenuItem = null;
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // reset menu
            resetParent(links[i]);
        }
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < links.length; i++) {
            // tslint:disable-next-line: no-string-literal
            if (location.pathname === links[i]['pathname']) {
                matchingMenuItem = links[i];
                break;
            }
        }
        if (matchingMenuItem) {
            const parent = matchingMenuItem.parentElement;
            /**
             * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
             * We should come up with non hard coded approach
             */
            if (parent) {
                parent.classList.add('active');
                const parent2 = parent.parentElement;
                if (parent2) {
                    parent2.classList.add('active');
                    const parent3 = parent2.parentElement;
                    if (parent3) {
                        parent3.classList.add('active');
                        const parent4 = parent3.parentElement;
                        if (parent4) {
                            parent4.classList.add('active');
                            const parent5 = parent4.parentElement;
                            if (parent5) {
                                parent5.classList.add('active');
                                const parent6 = parent5.parentElement;
                                if (parent6) {
                                    parent6.classList.add('active');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
    /**
     * Initialize
     */
    initialize() {
        this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_0__.MENU;
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
}
HorizontaltopbarComponent.ɵfac = function HorizontaltopbarComponent_Factory(t) { return new (t || HorizontaltopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_4__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_9__.CookieService)); };
HorizontaltopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HorizontaltopbarComponent, selectors: [["app-horizontaltopbar"]], decls: 349, vars: 165, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo.svg", "alt", "", "height", "22"], [1, "logo-lg"], ["src", "assets/images/logo-dark.png", "alt", "", "height", "17"], ["routerLink", "/", 1, "logo", "logo-light"], ["src", "assets/images/logo-light.svg", "alt", "", "height", "22"], ["src", "assets/images/logo-light.png", "alt", "", "height", "19"], ["type", "button", 1, "btn", "btn-sm", "px-3", "font-size-16", "d-lg-none", "header-item", 3, "click"], [1, "fa", "fa-fw", "fa-bars"], [1, "app-search", "d-none", "d-xl-block"], [1, "position-relative"], ["type", "text", 1, "form-control", 3, "placeholder"], [1, "bx", "bx-search-alt"], ["ngbDropdown", "", 1, "dropdown", "dropdown-mega", "d-none", "d-lg-block", "me-2"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item"], [1, "mdi", "mdi-chevron-down"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-megamenu"], [1, "row"], [1, "col-sm-8"], [1, "col-md-4"], [1, "font-size-14", "mt-0"], [1, "list-unstyled", "megamenu-list"], ["href", "javascript:void(0);"], [1, "col-sm-4"], [1, "col-sm-6"], [1, "col-sm-5"], ["src", "assets/images/megamenu-img.png", "alt", "", 1, "img-fluid", "mx-auto", "d-block"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "me-2"], ["type", "button", "id", "page-header-search-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], ["type", "button", "id", "page-header-user-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item"], ["alt", "Header Language", "height", "16", 3, "src", 4, "ngIf"], [1, "ms-1"], ["class", "ms-1", 4, "ngIf"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], ["href", "javascript:void(0);", "class", "dropdown-item notify-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], ["ngbDropdown", "", 1, "dropdown", "d-none", "d-lg-inline-block", "me-1"], ["type", "button", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-customize"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end"], [1, "px-lg-2"], [1, "row", "no-gutters"], [1, "col"], ["href", "javascript: void(0);", 1, "dropdown-icon-item"], ["src", "assets/images/brands/github.png", "alt", "Github"], ["src", "assets/images/brands/bitbucket.png", "alt", "bitbucket"], ["src", "assets/images/brands/dribbble.png", "alt", "dribbble"], ["src", "assets/images/brands/dropbox.png", "alt", "dropbox"], ["src", "assets/images/brands/mail_chimp.png", "alt", "mail_chimp"], ["src", "assets/images/brands/slack.png", "alt", "slack"], [1, "dropdown", "d-none", "d-lg-inline-block", "me-1"], ["type", "button", "data-toggle", "fullscreen", 1, "btn", "header-item", "noti-icon", 3, "click"], [1, "bx", "bx-fullscreen"], ["type", "button", "id", "page-header-notifications-dropdown", "ngbDropdownToggle", "", 1, "btn", "header-item", "noti-icon"], [1, "bx", "bx-bell", "bx-tada"], [1, "badge", "bg-danger", "rounded-pill"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-notifications-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "row", "align-items-center"], [1, "col-auto"], ["href", "javascript: void(0);", 1, "small"], [2, "position", "relative", "height", "230px"], ["href", "javascript: void(0);", 1, "text-reset", "notification-item"], [1, "media"], [1, "avatar-xs", "me-3"], [1, "avatar-title", "bg-primary", "rounded-circle", "font-size-16"], [1, "bx", "bx-cart"], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "font-size-12", "text-muted"], [1, "mb-1"], [1, "mb-0"], [1, "mdi", "mdi-clock-outline"], ["src", "assets/images/users/avatar-3.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "avatar-title", "bg-success", "rounded-circle", "font-size-16"], [1, "bx", "bx-badge-check"], ["src", "assets/images/users/avatar-4.jpg", "alt", "user-pic", 1, "me-3", "rounded-circle", "avatar-xs"], [1, "p-2", "border-top", "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-link", "font-size-14", "text-center"], [1, "mdi", "mdi-arrow-right-circle", "me-1"], ["src", "assets/images/users/avatar-1.jpg", "alt", "Header Avatar", 1, "rounded-circle", "header-profile-user"], [1, "d-none", "d-xl-inline-block", "ms-1"], [1, "mdi", "mdi-chevron-down", "d-none", "d-xl-inline-block"], ["href", "javascript: void(0);", 1, "dropdown-item"], [1, "bx", "bx-user", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx-wallet", "font-size-16", "align-middle", "me-1"], ["href", "javascript: void(0);", 1, "dropdown-item", "d-block"], [1, "badge", "bg-success", "float-end"], [1, "bx", "bx-wrench", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx-lock-open", "font-size-16", "align-middle", "me-1"], [1, "dropdown-divider"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"], [1, "dropdown", "d-inline-block"], ["type", "button", 1, "btn", "header-item", "noti-icon", "right-bar-toggle", 3, "click"], [1, "bx", "bx-cog", "bx-spin"], [1, "topnav"], [1, "container-fluid"], [1, "navbar", "navbar-light", "navbar-expand-lg", "topnav-menu", "active"], ["id", "topnav-menu-content", 1, "collapse", "navbar-collapse", "active"], [1, "navbar-nav"], [4, "ngFor", "ngForOf"], ["alt", "Header Language", "height", "16", 3, "src"], ["href", "javascript:void(0);", 1, "dropdown-item", "notify-item", 3, "ngClass", "click"], ["alt", "user-image", "height", "12", 1, "ms-1", 3, "src"], [1, "align-middle"], [1, "nav-item", "dropdown"], ["class", "nav-link dropdown-toggle arrow-none", "href", "javascript: void(0);", "id", "topnav-components", "role", "button", 3, "routerLink", 4, "ngIf"], ["class", "nav-link dropdown-toggle arrow-none", "href", "javascript: void(0);", "id", "topnav-components", "role", "button", 3, "click", 4, "ngIf"], ["class", "dropdown-menu", "aria-labelledby", "topnav-dashboard", 3, "ngClass", 4, "ngIf"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "routerLink"], ["class", "arrow-down", 4, "ngIf"], [1, "arrow-down"], ["href", "javascript: void(0);", "id", "topnav-components", "role", "button", 1, "nav-link", "dropdown-toggle", "arrow-none", 3, "click"], ["aria-labelledby", "topnav-dashboard", 1, "dropdown-menu", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], ["class", "col dropdown-item side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", "routerLinkActiveOptions", 4, "ngIf"], [4, "ngIf"], ["class", "dropdown", 4, "ngIf"], ["routerLinkActive", "active", 1, "col", "dropdown-item", "side-nav-link-ref", 3, "routerLink", "routerLinkActiveOptions"], ["class", "row", 4, "ngIf"], [1, "col-lg-4"], ["routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"], [1, "dropdown"], ["href", "javascript: void(0);", 1, "dropdown-item", "dropdown-toggle", 3, "click"], [1, "dropdown-menu"], ["class", "dropdown-item side-nav-link-ref", "href", "javascript: void(0);", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["href", "javascript: void(0);", "routerLinkActive", "active", 1, "dropdown-item", "side-nav-link-ref", 3, "routerLink"]], template: function HorizontaltopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_14_listener() { return ctx.toggleMenubar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "form", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](46, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](50, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](54, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](58, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](62, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](66, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](71, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](75, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](79, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](83, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](87, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](91, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](94);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](95, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](100, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](104, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](108, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](110, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](112, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](116, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](120, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](121, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](122, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](123);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](124, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](125, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](126, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](127, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](128, "h5", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](129);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](130, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](131, "ul", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](132, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](133, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](134);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](135, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](136, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](137, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](138);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](139, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](140, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](142);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](143, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](145, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](146);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](147, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](148, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](149, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](150);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](151, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](152, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](153, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](154);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](155, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](156, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](157, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](158);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](159, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](160, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](161, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](162, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](164, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](165, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](166, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](167, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "form", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](169, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](170, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](171, "input", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](172, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](173, "button", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](174, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](175, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](176, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](177, HorizontaltopbarComponent_img_177_Template, 1, 1, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](178, "span", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](179);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](180, HorizontaltopbarComponent_img_180_Template, 1, 1, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](181, HorizontaltopbarComponent_span_181_Template, 2, 0, "span", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](182, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](183, HorizontaltopbarComponent_a_183_Template, 4, 5, "a", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](184, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](185, "button", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](186, "i", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](187, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](188, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](189, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](190, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](191, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](192, "img", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](193, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](194, "GitHub");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](195, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](196, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](197, "img", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](198, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](199, "Bitbucket");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](200, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](201, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](202, "img", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](203, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](204, "Dribbble");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](205, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](206, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](207, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](208, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](209, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](210, "Dropbox");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](211, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](212, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](213, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](214, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](215, "Mail Chimp");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](216, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](217, "a", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](218, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](219, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](220, "Slack");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](221, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](222, "button", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_222_listener() { return ctx.fullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](223, "i", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](224, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](225, "button", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](226, "i", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](227, "span", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](228, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](229, "div", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](230, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](231, "div", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](232, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](233, "h6", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](234);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](235, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](236, "div", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](237, "a", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](238);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](239, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](240, "ngx-simplebar", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](241, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](242, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](243, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](244, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](245, "i", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](246, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](247, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](248);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](249, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](250, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](251, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](252);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](253, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](254, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](255, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](256);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](257, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](258, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](259, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](260, "img", 85);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](261, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](262, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](263);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](264, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](265, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](266, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](267);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](268, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](269, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](270, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](271);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](272, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](273, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](274, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](275, "div", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](276, "span", 86);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](277, "i", 87);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](278, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](279, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](280);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](281, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](282, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](283, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](284);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](285, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](286, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](287, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](289, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](290, "a", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](291, "div", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](292, "img", 88);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](293, "div", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](294, "h6", 80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](295);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](296, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](297, "div", 81);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](298, "p", 82);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](299);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](300, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](301, "p", 83);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](302, "i", 84);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](303);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](304, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](305, "div", 89);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](306, "a", 90);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](307, "i", 91);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](308);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](309, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](310, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](311, "button", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](312, "img", 92);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](313, "span", 93);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](314, "Henry");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](315, "i", 94);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](316, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](317, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](318, "i", 96);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](319);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](320, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](321, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](322, "i", 97);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](323);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](324, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](325, "a", 98);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](326, "span", 99);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](327, "11");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](328, "i", 100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](329);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](330, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](331, "a", 95);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](332, "i", 101);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](333);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](334, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](335, "div", 102);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](336, "a", 103);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_a_click_336_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](337, "i", 104);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](338);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](339, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](340, "div", 105);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](341, "button", 106);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function HorizontaltopbarComponent_Template_button_click_341_listener() { return ctx.onSettingsButtonClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](342, "i", 107);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](343, "div", 108);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](344, "div", 109);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](345, "nav", 110);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](346, "div", 111);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](347, "ul", 112);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](348, HorizontaltopbarComponent_ng_container_348_Template, 5, 3, "ng-container", 113);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](19, 59, "HEADER.SEARCH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](24, 61, "HEADER.MEGA_MENU"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](33, 63, "HEADER.UI.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](38, 65, "HEADER.UI.LIGHTBOX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](42, 67, "HEADER.UI.RANGE_SLIDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](46, 69, "HEADER.UI.SWEET_ALERT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](50, 71, "HEADER.UI.RATING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](54, 73, "HEADER.UI.FORMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](58, 75, "HEADER.UI.TABLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](62, 77, "HEADER.UI.CHARTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](66, 79, "HEADER.APPLICATIONS.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](71, 81, "HEADER.APPLICATIONS.ECOMMERCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](75, 83, "HEADER.APPLICATIONS.CALENDAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](79, 85, "HEADER.APPLICATIONS.EMAIL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](83, 87, "HEADER.APPLICATIONS.PROJECTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](87, 89, "HEADER.APPLICATIONS.TASKS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](91, 91, "HEADER.APPLICATIONS.CONTACTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](95, 93, "HEADER.EXTRA_PAGES.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](100, 95, "HEADER.EXTRA_PAGES.LIGHT_SIDEBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](104, 97, "HEADER.EXTRA_PAGES.COMPACT_SIDEBAR"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](108, 99, "HEADER.EXTRA_PAGES.HORIZONTAL_LAYOUT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](112, 101, "HEADER.EXTRA_PAGES.MAINTENANCE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](116, 103, "HEADER.EXTRA_PAGES.COMING SOON"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](120, 105, "HEADER.EXTRA_PAGES.TIMELINE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](124, 107, "HEADER.EXTRA_PAGES.FAQ"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](130, 109, "HEADER.UI.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](135, 111, "HEADER.UI.LIGHTBOX"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](139, 113, "HEADER.UI.RANGE_SLIDER"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](143, 115, "HEADER.UI.SWEET_ALERT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](147, 117, "HEADER.UI.RATING"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](151, 119, "HEADER.UI.FORMS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](155, 121, "HEADER.UI.TABLES"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](159, 123, "HEADER.UI.CHARTS"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.flagvalue !== undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.countryName);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.flagvalue === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.listLang);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](235, 125, "HEADER.NOTIFICATIONS.TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](239, 127, "HEADER.NOTIFICATIONS.VIEW_ALL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](249, 129, "HEADER.NOTIFICATIONS.FIRST.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](253, 131, "HEADER.NOTIFICATIONS.FIRST.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](257, 133, "HEADER.NOTIFICATIONS.FIRST.TIME"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](264, 135, "HEADER.NOTIFICATIONS.SECOND.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](268, 137, "HEADER.NOTIFICATIONS.SECOND.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](272, 139, "HEADER.NOTIFICATIONS.SECOND.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](281, 141, "HEADER.NOTIFICATIONS.THIRD.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](285, 143, "HEADER.NOTIFICATIONS.THIRD.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](289, 145, "HEADER.NOTIFICATIONS.THIRD.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](296, 147, "HEADER.NOTIFICATIONS.FOUR.TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](300, 149, "HEADER.NOTIFICATIONS.FOUR.TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](304, 151, "HEADER.NOTIFICATIONS.FOUR.TIME"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](309, 153, "HEADER.NOTIFICATIONS.LOAD_MORE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](320, 155, "HEADER.LOGIN.PROFILE"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](324, 157, "HEADER.LOGIN.MY_WALLET"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](330, 159, "HEADER.LOGIN.SETTINGS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](334, 161, "HEADER.LOGIN.LOCK_SCREEN"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](339, 163, "HEADER.LOGIN.LOGOUT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.menuItems);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgForm, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, simplebar_angular__WEBPACK_IMPORTED_MODULE_12__.SimplebarAngularComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbNavbar, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob3Jpem9udGFsdG9wYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 70936:
/*!**************************************************!*\
  !*** ./src/app/layouts/horizontaltopbar/menu.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'bx-home-circle',
        subItems: [
            {
                id: 2,
                label: 'MENUITEMS.DASHBOARDS.LIST.DEFAULT',
                link: '/dashboard',
                parentId: 1
            },
            {
                id: 3,
                label: 'MENUITEMS.DASHBOARDS.LIST.SAAS',
                link: '/dashboards/saas',
                parentId: 1
            },
            {
                id: 4,
                label: 'MENUITEMS.DASHBOARDS.LIST.CRYPTO',
                link: '/dashboards/crypto',
                parentId: 1
            },
            {
                id: 5,
                label: 'MENUITEMS.DASHBOARDS.LIST.BLOG',
                link: '/dashboards/blog',
                parentId: 1
            },
        ]
    },
    {
        id: 6,
        label: 'MENUITEMS.UIELEMENTS.TEXT',
        icon: 'bx-tone',
        isUiElement: true,
        subItems: [
            {
                id: 7,
                label: 'MENUITEMS.UIELEMENTS.LIST.ALERTS',
                link: '/ui/alerts',
                parentId: 6
            },
            {
                id: 8,
                label: 'MENUITEMS.UIELEMENTS.LIST.BUTTONS',
                link: '/ui/buttons',
                parentId: 6
            },
            {
                id: 9,
                label: 'MENUITEMS.UIELEMENTS.LIST.CARDS',
                link: '/ui/cards',
                parentId: 6
            },
            {
                id: 10,
                label: 'MENUITEMS.UIELEMENTS.LIST.CAROUSEL',
                link: '/ui/carousel',
                parentId: 6
            },
            {
                id: 11,
                label: 'MENUITEMS.UIELEMENTS.LIST.DROPDOWNS',
                link: '/ui/dropdowns',
                parentId: 6
            },
            {
                id: 12,
                label: 'MENUITEMS.UIELEMENTS.LIST.GRID',
                link: '/ui/grid',
                parentId: 6
            },
            {
                id: 13,
                label: 'MENUITEMS.UIELEMENTS.LIST.IMAGES',
                link: '/ui/images',
                parentId: 6
            },
            {
                id: 14,
                label: 'MENUITEMS.UIELEMENTS.LIST.MODALS',
                link: '/ui/modals',
                parentId: 6
            },
            {
                id: 15,
                label: 'MENUITEMS.UIELEMENTS.LIST.RANGESLIDER',
                link: '/ui/rangeslider',
                parentId: 6
            },
            {
                id: 16,
                label: 'MENUITEMS.UIELEMENTS.LIST.PROGRESSBAR',
                link: '/ui/progressbar',
                parentId: 6
            },
            {
                id: 18,
                label: 'MENUITEMS.UIELEMENTS.LIST.PLACEHOLDER',
                link: '/ui/placeholder',
                parentId: 6
            },
            {
                id: 19,
                label: 'MENUITEMS.UIELEMENTS.LIST.SWEETALERT',
                link: '/ui/sweet-alert',
                parentId: 6
            },
            {
                id: 20,
                label: 'MENUITEMS.UIELEMENTS.LIST.TABS',
                link: '/ui/tabs-accordions',
                parentId: 6
            },
            {
                id: 21,
                label: 'MENUITEMS.UIELEMENTS.LIST.TYPOGRAPHY',
                link: '/ui/typography',
                parentId: 6
            },
            {
                id: 22,
                label: 'MENUITEMS.UIELEMENTS.LIST.VIDEO',
                link: '/ui/video',
                parentId: 6
            },
            {
                id: 23,
                label: 'MENUITEMS.UIELEMENTS.LIST.GENERAL',
                link: '/ui/general',
                parentId: 6
            },
            {
                id: 24,
                label: 'MENUITEMS.UIELEMENTS.LIST.COLORS',
                link: '/ui/colors',
                parentId: 6
            },
            {
                id: 25,
                label: 'MENUITEMS.UIELEMENTS.LIST.CROPPER',
                link: '/ui/image-crop',
                parentId: 6
            },
        ]
    },
    {
        id: 26,
        label: 'MENUITEMS.APPS.TEXT',
        icon: 'bx-customize',
        subItems: [
            {
                id: 27,
                label: 'MENUITEMS.CALENDAR.TEXT',
                link: '/calendar',
                parentId: 26
            },
            {
                id: 28,
                label: 'MENUITEMS.CHAT.TEXT',
                link: '/chat',
                parentId: 26
            },
            {
                id: 29,
                label: 'MENUITEMS.FILEMANAGER.TEXT',
                link: '/filemanager',
                parentId: 26
            },
            {
                id: 30,
                label: 'MENUITEMS.EMAIL.TEXT',
                subItems: [
                    {
                        id: 31,
                        label: 'MENUITEMS.EMAIL.LIST.INBOX',
                        link: '/email/inbox',
                        parentId: 30
                    },
                    {
                        id: 32,
                        label: 'MENUITEMS.EMAIL.LIST.READEMAIL',
                        link: '/email/read',
                        parentId: 30
                    },
                    {
                        id: 33,
                        label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.TEXT',
                        parentId: 30,
                        subItems: [
                            {
                                id: 34,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BASIC',
                                link: '/email/basic',
                                parentId: 33
                            },
                            {
                                id: 35,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.ALERT',
                                link: '/email/alert',
                                parentId: 33
                            },
                            {
                                id: 36,
                                label: 'MENUITEMS.EMAIL.LIST.TEMPLATE.LIST.BILLING',
                                link: '/email/billing',
                                parentId: 33
                            }
                        ]
                    }
                ]
            },
            {
                id: 37,
                label: 'MENUITEMS.ECOMMERCE.TEXT',
                subItems: [
                    {
                        id: 38,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTS',
                        link: '/ecommerce/products',
                        parentId: 37
                    },
                    {
                        id: 39,
                        label: 'MENUITEMS.ECOMMERCE.LIST.PRODUCTDETAIL',
                        link: '/ecommerce/product-detail/1',
                        parentId: 37
                    },
                    {
                        id: 40,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ORDERS',
                        link: '/ecommerce/orders',
                        parentId: 37
                    },
                    {
                        id: 41,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CUSTOMERS',
                        link: '/ecommerce/customers',
                        parentId: 37
                    },
                    {
                        id: 42,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CART',
                        link: '/ecommerce/cart',
                        parentId: 37
                    },
                    {
                        id: 43,
                        label: 'MENUITEMS.ECOMMERCE.LIST.CHECKOUT',
                        link: '/ecommerce/checkout',
                        parentId: 37
                    },
                    {
                        id: 44,
                        label: 'MENUITEMS.ECOMMERCE.LIST.SHOPS',
                        link: '/ecommerce/shops',
                        parentId: 37
                    },
                    {
                        id: 45,
                        label: 'MENUITEMS.ECOMMERCE.LIST.ADDPRODUCT',
                        link: '/ecommerce/add-product',
                        parentId: 37
                    },
                ]
            },
            {
                id: 46,
                label: 'MENUITEMS.CRYPTO.TEXT',
                icon: 'bx-bitcoin',
                subItems: [
                    {
                        id: 47,
                        label: 'MENUITEMS.CRYPTO.LIST.WALLET',
                        link: '/crypto/wallet',
                        parentId: 46
                    },
                    {
                        id: 48,
                        label: 'MENUITEMS.CRYPTO.LIST.BUY/SELL',
                        link: '/crypto/buy-sell',
                        parentId: 46
                    },
                    {
                        id: 49,
                        label: 'MENUITEMS.CRYPTO.LIST.EXCHANGE',
                        link: '/crypto/exchange',
                        parentId: 46
                    },
                    {
                        id: 50,
                        label: 'MENUITEMS.CRYPTO.LIST.LENDING',
                        link: '/crypto/lending',
                        parentId: 46
                    },
                    {
                        id: 51,
                        label: 'MENUITEMS.CRYPTO.LIST.ORDERS',
                        link: '/crypto/orders',
                        parentId: 46
                    },
                    {
                        id: 52,
                        label: 'MENUITEMS.CRYPTO.LIST.KYCAPPLICATION',
                        link: '/crypto/kyc-application',
                        parentId: 46
                    },
                    {
                        id: 53,
                        label: 'MENUITEMS.CRYPTO.LIST.ICOLANDING',
                        link: '/crypto-ico-landing',
                        parentId: 46
                    }
                ]
            },
            {
                id: 54,
                label: 'MENUITEMS.PROJECTS.TEXT',
                subItems: [
                    {
                        id: 55,
                        label: 'MENUITEMS.PROJECTS.LIST.GRID',
                        link: '/projects/grid',
                        parentId: 54
                    },
                    {
                        id: 56,
                        label: 'MENUITEMS.PROJECTS.LIST.PROJECTLIST',
                        link: '/projects/list',
                        parentId: 54
                    },
                    {
                        id: 57,
                        label: 'MENUITEMS.PROJECTS.LIST.OVERVIEW',
                        link: '/projects/overview',
                        parentId: 54
                    },
                    {
                        id: 58,
                        label: 'MENUITEMS.PROJECTS.LIST.CREATE',
                        link: '/projects/create',
                        parentId: 54
                    }
                ]
            },
            {
                id: 59,
                label: 'MENUITEMS.TASKS.TEXT',
                subItems: [
                    {
                        id: 60,
                        label: 'MENUITEMS.TASKS.LIST.TASKLIST',
                        link: '/tasks/list',
                        parentId: 59
                    },
                    {
                        id: 61,
                        label: 'MENUITEMS.TASKS.LIST.KANBAN',
                        link: '/tasks/kanban',
                        parentId: 59
                    },
                    {
                        id: 62,
                        label: 'MENUITEMS.TASKS.LIST.CREATETASK',
                        link: '/tasks/create',
                        parentId: 59
                    }
                ]
            },
            {
                id: 63,
                label: 'MENUITEMS.CONTACTS.TEXT',
                icon: 'bxs-user-detail',
                subItems: [
                    {
                        id: 64,
                        label: 'MENUITEMS.CONTACTS.LIST.USERGRID',
                        link: '/contacts/grid',
                        parentId: 63
                    },
                    {
                        id: 65,
                        label: 'MENUITEMS.CONTACTS.LIST.USERLIST',
                        link: '/contacts/list',
                        parentId: 63
                    },
                    {
                        id: 66,
                        label: 'MENUITEMS.CONTACTS.LIST.PROFILE',
                        link: '/contacts/profile',
                        parentId: 63
                    }
                ]
            },
            {
                id: 67,
                label: 'MENUITEMS.BLOG.TEXT',
                subItems: [
                    {
                        id: 68,
                        label: 'MENUITEMS.BLOG.LIST.BLOGLIST',
                        link: '/blog/list',
                        parentId: 67
                    },
                    {
                        id: 69,
                        label: 'MENUITEMS.BLOG.LIST.BLOGGRID',
                        link: '/blog/grid',
                        parentId: 67
                    },
                    {
                        id: 70,
                        label: 'MENUITEMS.BLOG.LIST.DETAIL',
                        link: '/blog/detail',
                        parentId: 67
                    },
                ]
            },
        ]
    },
    {
        id: 71,
        icon: 'bx-collection',
        label: 'MENUITEMS.COMPONENTS.TEXT',
        subItems: [
            {
                id: 72,
                label: 'MENUITEMS.FORMS.TEXT',
                subItems: [
                    {
                        id: 73,
                        label: 'MENUITEMS.FORMS.LIST.ELEMENTS',
                        link: '/form/elements',
                        parentId: 72
                    },
                    {
                        id: 74,
                        label: 'MENUITEMS.FORMS.LIST.VALIDATION',
                        link: '/form/validation',
                        parentId: 72
                    },
                    {
                        id: 75,
                        label: 'MENUITEMS.FORMS.LIST.ADVANCED',
                        link: '/form/advanced',
                        parentId: 72
                    },
                    {
                        id: 76,
                        label: 'MENUITEMS.FORMS.LIST.EDITOR',
                        link: '/form/editor',
                        parentId: 72
                    },
                    {
                        id: 77,
                        label: 'MENUITEMS.FORMS.LIST.FILEUPLOAD',
                        link: '/form/uploads',
                        parentId: 72
                    },
                    {
                        id: 78,
                        label: 'MENUITEMS.FORMS.LIST.REPEATER',
                        link: '/form/repeater',
                        parentId: 72
                    },
                    {
                        id: 79,
                        label: 'MENUITEMS.FORMS.LIST.WIZARD',
                        link: '/form/wizard',
                        parentId: 72
                    },
                    {
                        id: 80,
                        label: 'MENUITEMS.FORMS.LIST.MASK',
                        link: '/form/mask',
                        parentId: 72
                    }
                ]
            },
            {
                id: 81,
                label: 'MENUITEMS.TABLES.TEXT',
                subItems: [
                    {
                        id: 82,
                        label: 'MENUITEMS.TABLES.LIST.BASIC',
                        link: '/tables/basic',
                        parentId: 81
                    },
                    {
                        id: 83,
                        label: 'MENUITEMS.TABLES.LIST.ADVANCED',
                        link: '/tables/advanced',
                        parentId: 81
                    }
                ]
            },
            {
                id: 84,
                label: 'MENUITEMS.CHARTS.TEXT',
                subItems: [
                    {
                        id: 85,
                        label: 'MENUITEMS.CHARTS.LIST.APEX',
                        link: '/charts/apex',
                        parentId: 84
                    },
                    {
                        id: 86,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTJS',
                        link: '/charts/chartjs',
                        parentId: 84
                    },
                    {
                        id: 87,
                        label: 'MENUITEMS.CHARTS.LIST.CHARTIST',
                        link: '/charts/chartist',
                        parentId: 84
                    },
                    {
                        id: 88,
                        label: 'MENUITEMS.CHARTS.LIST.ECHART',
                        link: '/charts/echart',
                        parentId: 84
                    }
                ]
            },
            {
                id: 89,
                label: 'MENUITEMS.ICONS.TEXT',
                subItems: [
                    {
                        id: 90,
                        label: 'MENUITEMS.ICONS.LIST.BOXICONS',
                        link: '/icons/boxicons',
                        parentId: 89
                    },
                    {
                        id: 91,
                        label: 'MENUITEMS.ICONS.LIST.MATERIALDESIGN',
                        link: '/icons/materialdesign',
                        parentId: 89
                    },
                    {
                        id: 92,
                        label: 'MENUITEMS.ICONS.LIST.DRIPICONS',
                        link: '/icons/dripicons',
                        parentId: 89
                    },
                    {
                        id: 93,
                        label: 'MENUITEMS.ICONS.LIST.FONTAWESOME',
                        link: '/icons/fontawesome',
                        parentId: 89
                    },
                ]
            },
            {
                id: 94,
                label: 'MENUITEMS.MAPS.TEXT',
                subItems: [
                    {
                        id: 95,
                        label: 'MENUITEMS.MAPS.LIST.GOOGLEMAP',
                        link: '/maps/google',
                        parentId: 94
                    }
                ]
            }
        ]
    },
    {
        id: 96,
        label: 'HEADER.EXTRA_PAGES.TITLE',
        icon: 'bx-file',
        subItems: [
            {
                id: 97,
                label: 'MENUITEMS.INVOICES.TEXT',
                subItems: [
                    {
                        id: 98,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICELIST',
                        link: '/invoices/list',
                        parentId: 97
                    },
                    {
                        id: 99,
                        label: 'MENUITEMS.INVOICES.LIST.INVOICEDETAIL',
                        link: '/invoices/detail',
                        parentId: 97
                    },
                ]
            },
            {
                id: 100,
                label: 'MENUITEMS.AUTHENTICATION.TEXT',
                subItems: [
                    {
                        id: 101,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN',
                        link: '/pages/login-1',
                        parentId: 100
                    },
                    {
                        id: 102,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOGIN2',
                        link: '/pages/login-2',
                        parentId: 100
                    },
                    {
                        id: 103,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER',
                        link: '/pages/register-1',
                        parentId: 100
                    },
                    {
                        id: 103,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.REGISTER2',
                        link: '/pages/register-2',
                        parentId: 100
                    },
                    {
                        id: 104,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD',
                        link: '/pages/recoverpwd-1',
                        parentId: 100
                    },
                    {
                        id: 105,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.RECOVERPWD2',
                        link: '/pages/recoverpwd-2',
                        parentId: 100
                    },
                    {
                        id: 106,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN',
                        link: '/pages/lock-screen-1',
                        parentId: 100
                    },
                    {
                        id: 107,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.LOCKSCREEN2',
                        link: '/pages/lock-screen-2',
                        parentId: 100
                    },
                    {
                        id: 108,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL',
                        link: '/pages/confirm-mail',
                        parentId: 100
                    },
                    {
                        id: 109,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.CONFIRMMAIL2',
                        link: '/pages/confirm-mail-2',
                        parentId: 100
                    },
                    {
                        id: 110,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION',
                        link: '/pages/email-verification',
                        parentId: 100
                    },
                    {
                        id: 111,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.EMAILVERIFICATION2',
                        link: '/pages/email-verification-2',
                        parentId: 100
                    },
                    {
                        id: 112,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION',
                        link: '/pages/two-step-verification',
                        parentId: 100
                    },
                    {
                        id: 113,
                        label: 'MENUITEMS.AUTHENTICATION.LIST.TWOSTEPVERIFICATION2',
                        link: '/pages/two-step-verification-2',
                        parentId: 100
                    }
                ]
            },
            {
                id: 114,
                label: 'MENUITEMS.UTILITY.TEXT',
                icon: 'bx-file',
                subItems: [
                    {
                        id: 115,
                        label: 'MENUITEMS.UTILITY.LIST.STARTER',
                        link: '/pages/starter',
                        parentId: 114
                    },
                    {
                        id: 116,
                        label: 'MENUITEMS.UTILITY.LIST.MAINTENANCE',
                        link: '/pages/maintenance',
                        parentId: 114
                    },
                    {
                        id: 117,
                        label: 'Coming Soon',
                        link: '/pages/coming-soon',
                        parentId: 114
                    },
                    {
                        id: 118,
                        label: 'MENUITEMS.UTILITY.LIST.TIMELINE',
                        link: '/pages/timeline',
                        parentId: 114
                    },
                    {
                        id: 119,
                        label: 'MENUITEMS.UTILITY.LIST.FAQS',
                        link: '/pages/faqs',
                        parentId: 114
                    },
                    {
                        id: 120,
                        label: 'MENUITEMS.UTILITY.LIST.PRICING',
                        link: '/pages/pricing',
                        parentId: 114
                    },
                    {
                        id: 121,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR404',
                        link: '/pages/404',
                        parentId: 114
                    },
                    {
                        id: 122,
                        label: 'MENUITEMS.UTILITY.LIST.ERROR500',
                        link: '/pages/500',
                        parentId: 114
                    },
                ]
            }
        ]
    }
];


/***/ }),

/***/ 72140:
/*!*********************************************!*\
  !*** ./src/app/layouts/layout.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts.model */ 12908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core/services/event.service */ 63997);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vertical/vertical.component */ 40125);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 36010);






function LayoutComponent_app_vertical_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-vertical");
} }
function LayoutComponent_app_horizontal_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-horizontal");
} }
class LayoutComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        // default settings
        this.layoutType = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
        this.layoutwidth = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_WIDTH;
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeLayout', (layout) => {
            this.layoutType = layout;
        });
        this.LayoutWidth(this.layoutwidth);
        this.eventService.subscribe('changeWidth', (width) => {
            this.layoutwidth = width;
            this.LayoutWidth(this.layoutwidth);
        });
    }
    ngAfterViewInit() {
    }
    LayoutWidth(width) {
        switch (width) {
            case "fluid":
                document.body.setAttribute("data-layout-size", "fluid");
                document.body.classList.remove("vertical-collpsed");
                document.body.removeAttribute("data-layout-scrollable");
                break;
            case "boxed":
                document.body.setAttribute("data-layout-size", "boxed");
                document.body.classList.add("vertical-collpsed");
                document.body.removeAttribute("data-layout-scrollable");
                break;
            case "scrollable":
                document.body.removeAttribute("data-layout-size");
                document.body.setAttribute("data-layout-scrollable", "true");
                document.body.setAttribute("data-layout-size", "fluid");
                document.body.classList.remove("right-bar-enabled", "vertical-collpsed");
            default:
                document.body.setAttribute("data-layout-size", "fluid");
                break;
        }
    }
    /**
     * Check if the vertical layout is requested
     */
    isVerticalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_VERTICAL;
    }
    /**
     * Check if the horizontal layout is requested
     */
    isHorizontalLayoutRequested() {
        return this.layoutType === _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_HORIZONTAL;
    }
}
LayoutComponent.ɵfac = function LayoutComponent_Factory(t) { return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
LayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: LayoutComponent, selectors: [["app-layout"]], decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function LayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, LayoutComponent_app_vertical_0_Template, 1, 0, "app-vertical", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LayoutComponent_app_horizontal_1_Template, 1, 0, "app-horizontal", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isVerticalLayoutRequested());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isHorizontalLayoutRequested());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_2__.VerticalComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_3__.HorizontalComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 12908:
/*!******************************************!*\
  !*** ./src/app/layouts/layouts.model.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_VERTICAL": () => (/* binding */ LAYOUT_VERTICAL),
/* harmony export */   "LAYOUT_HORIZONTAL": () => (/* binding */ LAYOUT_HORIZONTAL),
/* harmony export */   "LAYOUT_WIDTH": () => (/* binding */ LAYOUT_WIDTH),
/* harmony export */   "SIDEBAR_TYPE": () => (/* binding */ SIDEBAR_TYPE),
/* harmony export */   "TOPBAR": () => (/* binding */ TOPBAR)
/* harmony export */ });
// export layout related constants
const LAYOUT_VERTICAL = 'vertical';
const LAYOUT_HORIZONTAL = 'horizontal';
const LAYOUT_WIDTH = 'fluid';
const SIDEBAR_TYPE = 'dark';
const TOPBAR = 'dark';


/***/ }),

/***/ 31472:
/*!*******************************************!*\
  !*** ./src/app/layouts/layouts.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutsModule": () => (/* binding */ LayoutsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-click-outside */ 60216);
/* harmony import */ var _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/ui/ui.module */ 63091);
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ 72140);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 8062);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./topbar/topbar.component */ 69514);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ 42234);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rightsidebar/rightsidebar.component */ 83161);
/* harmony import */ var _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./horizontal/horizontal.component */ 36010);
/* harmony import */ var _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vertical/vertical.component */ 40125);
/* harmony import */ var _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./horizontaltopbar/horizontaltopbar.component */ 66602);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../core/services/language.service */ 58463);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _topbar_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./topbar/modal/modal.component */ 28975);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-mask */ 97846);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 14001);





















class LayoutsModule {
}
LayoutsModule.ɵfac = function LayoutsModule_Factory(t) { return new (t || LayoutsModule)(); };
LayoutsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: LayoutsModule });
LayoutsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [_core_services_language_service__WEBPACK_IMPORTED_MODULE_10__.LanguageService], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownModule,
            ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModalModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
            simplebar_angular__WEBPACK_IMPORTED_MODULE_18__.SimplebarAngularModule,
            ngx_mask__WEBPACK_IMPORTED_MODULE_19__.NgxMaskModule.forRoot(), //para las mascaras
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](LayoutsModule, { declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_4__.TopbarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_6__.RightsidebarComponent, _horizontal_horizontal_component__WEBPACK_IMPORTED_MODULE_7__.HorizontalComponent, _vertical_vertical_component__WEBPACK_IMPORTED_MODULE_8__.VerticalComponent, _horizontaltopbar_horizontaltopbar_component__WEBPACK_IMPORTED_MODULE_9__.HorizontaltopbarComponent, _topbar_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__.ModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownModule,
        ng_click_outside__WEBPACK_IMPORTED_MODULE_0__.ClickOutsideModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModalModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        _shared_ui_ui_module__WEBPACK_IMPORTED_MODULE_1__.UIModule,
        simplebar_angular__WEBPACK_IMPORTED_MODULE_18__.SimplebarAngularModule, ngx_mask__WEBPACK_IMPORTED_MODULE_19__.NgxMaskModule], exports: [_topbar_modal_modal_component__WEBPACK_IMPORTED_MODULE_11__.ModalComponent] }); })();


/***/ }),

/***/ 83161:
/*!****************************************************************!*\
  !*** ./src/app/layouts/rightsidebar/rightsidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RightsidebarComponent": () => (/* binding */ RightsidebarComponent)
/* harmony export */ });
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 12908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 63997);
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-click-outside */ 60216);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 28267);






function RightsidebarComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Sidebar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.changeSidebartype("light"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r4.changeSidebartype("dark"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.changeSidebartype("compact"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r6.changeSidebartype("icon"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_div_29_Template_input_change_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.changeSidebartype("colored"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Colored");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "compact");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r0.sidebartype === "colored");
} }
function RightsidebarComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h6", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Topbar Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_div_30_Template_input_change_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.changeTopbar("light"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_div_30_Template_input_change_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.changeTopbar("dark"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_div_30_Template_input_change_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r11.changeTopbar("colored"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Colored");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.topbar === "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.topbar === "dark");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx_r1.topbar === "colored");
} }
/**
 * Rightsidebar component
 */
class RightsidebarComponent {
    constructor(eventService) {
        this.eventService = eventService;
    }
    ngOnInit() {
        this.width = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.LAYOUT_WIDTH;
        this.sidebartype = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_TYPE;
        this.topbar = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.TOPBAR;
        /**
         * horizontal-vertical layput set
         */
        this.attribute = document.body.getAttribute('data-layout');
        const vertical = document.getElementById('is-layout');
        if (vertical != null) {
            vertical.setAttribute('checked', 'true');
        }
        if (this.attribute == 'horizontal') {
            vertical.removeAttribute('checked');
        }
    }
    /**
     * Hide the sidebar
     */
    hide() {
        document.body.classList.remove('right-bar-enabled');
    }
    /**
     * Change Topbar
     */
    changeTopbar(topbar) {
        this.topbar = topbar;
        this.eventService.broadcast('changeTopbar', topbar);
    }
    /**
     * Change the layout onclick
     * @param layout Change the layout
     */
    changeLayout(layout) {
        if (layout.target.checked == true)
            this.eventService.broadcast('changeLayout', 'vertical');
        else
            this.eventService.broadcast('changeLayout', 'horizontal');
    }
    changeWidth(width) {
        this.width = width;
        this.eventService.broadcast('changeWidth', width);
    }
    changeSidebartype(sidebar) {
        this.sidebartype = sidebar;
        this.eventService.broadcast('changeSidebartype', sidebar);
    }
}
RightsidebarComponent.ɵfac = function RightsidebarComponent_Factory(t) { return new (t || RightsidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
RightsidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: RightsidebarComponent, selectors: [["app-rightsidebar"]], decls: 44, vars: 7, consts: [[1, "right-bar", 3, "exclude", "clickOutside"], [1, "h-100"], [1, "rightbar-title", "px-3", "py-4"], ["href", "javascript:void(0);", 1, "right-bar-toggle", "float-end", 3, "click"], [1, "mdi", "mdi-close", "noti-icon"], [1, "m-0"], [1, "mt-4", "mb-3"], [1, "form-check", "form-switch"], ["type", "checkbox", "id", "is-layout", 1, "form-check-input", 3, "click"], ["for", "is-layout", 1, "form-check-label"], [1, "form-check"], ["type", "radio", "name", "layout-width", "id", "layout-width-fuild", "value", "fluid", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-fuild", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "layout-width-boxed", "value", "boxed", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-boxed", 1, "form-check-label"], ["type", "radio", "name", "layout-width", "id", "layout-width-scrollable", "value", "scrollable", 1, "form-check-input", 3, "checked", "change"], ["for", "layout-width-scrollable", 1, "form-check-label"], [4, "ngIf"], [1, "text-center", "mb-0", "mt-4"], [1, "p-4"], [1, "mb-2"], ["href", "//skote-v-light.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-1.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-dark.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-2.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], ["href", "//skote-v-rtl.angular.themesbrand.com/", "target", "_blank"], ["src", "assets/images/layouts/layout-3.jpg", "alt", "", 1, "img-fluid", "img-thumbnail"], [1, "rightbar-overlay"], [1, "form-check", "sidebar-setting"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-light", "value", "light", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-light", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-dark", "value", "dark", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-dark", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-brand", "value", "compact", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-brand", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color-icon", "value", "icon", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color-icon", 1, "form-check-label"], ["type", "radio", "name", "sidebar-color", "id", "sidebar-color", "value", "colored", 1, "form-check-input", 3, "checked", "change"], ["for", "sidebar-color", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-light", "value", "light", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-light", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-dark", "value", "dark", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-dark", 1, "form-check-label"], ["type", "radio", "name", "topbar-color", "id", "topbar-color-colored", "value", "colored", 1, "form-check-input", 3, "checked", "change"], ["for", "topbar-color-colored", 1, "form-check-label"]], template: function RightsidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("clickOutside", function RightsidebarComponent_Template_div_clickOutside_0_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ngx-simplebar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightsidebarComponent_Template_a_click_3_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function RightsidebarComponent_Template_input_click_11_listener($event) { return ctx.changeLayout($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_18_listener() { return ctx.changeWidth("fluid"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_22_listener() { return ctx.changeWidth("boxed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function RightsidebarComponent_Template_input_change_26_listener() { return ctx.changeWidth("scrollable"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Scrolable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, RightsidebarComponent_div_29_Template, 24, 5, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, RightsidebarComponent_div_30_Template, 16, 3, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "h6", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Choose Layouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](39, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](43, "div", 27);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("exclude", ".right-bar-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.attribute == "vertical" ? "vertical" : "horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.width === "fluid");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.width === "boxed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", ctx.width === "scrollable");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attribute == "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.attribute !== "vertical");
    } }, directives: [ng_click_outside__WEBPACK_IMPORTED_MODULE_2__.ClickOutsideDirective, simplebar_angular__WEBPACK_IMPORTED_MODULE_4__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyaWdodHNpZGViYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 84242:
/*!*****************************************!*\
  !*** ./src/app/layouts/sidebar/menu.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MENU": () => (/* binding */ MENU),
/* harmony export */   "MENU_USER": () => (/* binding */ MENU_USER),
/* harmony export */   "MENU_JEFE_DEPTO": () => (/* binding */ MENU_JEFE_DEPTO),
/* harmony export */   "MENU_SECRE_DECA": () => (/* binding */ MENU_SECRE_DECA),
/* harmony export */   "MENU_ASIS_FINAN": () => (/* binding */ MENU_ASIS_FINAN),
/* harmony export */   "MENU_JEFE_FINAN": () => (/* binding */ MENU_JEFE_FINAN),
/* harmony export */   "MENU_VIGILANTE": () => (/* binding */ MENU_VIGILANTE)
/* harmony export */ });
const MENU = [
    {
        id: 1,
        label: 'MENU PRINCIPAL',
        isTitle: true,
    },
    {
        id: 2,
        label: 'Inicio',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 3,
        label: 'MODULOS',
        isTitle: true
    },
    {
        id: 6,
        label: "Empleados",
        icon: "bx-user-circle",
        role: ["ADMIN"],
        subItems: [
            {
                id: 7,
                label: "Listado",
                link: "/empleados/listar",
                role: ["ADMIN"],
                parentId: 6,
            },
            {
                id: 8,
                label: "Departamentos",
                link: "/depto/listar",
                role: ["ADMIN"],
                parentId: 6,
            },
        ],
    },
    {
        id: 9,
        label: "Solicitud Vehículo",
        icon: "mdi mdi-file-document-multiple-outline",
        role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 10,
                label: "Listado",
                link: "/solicitud-vehiculo/listar",
                role: ["ADMIN", "JEFE_DEPTO", "SECR_DECANATO", "DECANO"],
                parentId: 9,
            },
        ],
    },
    {
        id: 12,
        label: "Solcitudes de Vales",
        icon: "mdi mdi-clipboard-text-multiple-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 13,
                label: "Por Aprobar",
                link: "/solicitudes/solictud-aprobar",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 12,
            },
            {
                id: 14,
                label: "Listado",
                link: "/solicitudes/solicitudvale",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 12,
            },
        ],
    },
    {
        id: 15,
        label: "Vales",
        icon: "mdi mdi-gas-station",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 16,
                label: "Proveedor",
                link: "/proveedor",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 15,
            },
            {
                id: 17,
                label: "Compras",
                link: "/compra",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 15,
            },
            {
                id: 18,
                label: "Ajustes de Vales",
                link: "/devolucion-vale",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 15,
            },
        ],
    },
    {
        id: 19,
        label: "Entradas y Salidas",
        icon: "dripicons-document-edit",
        link: "/entrasalida/listar",
        role: ["ADMIN", "VIGILANTE"],
        /*subItems: [
          {
            id: 20,
            label: "Listado",
            link: "/entrasalida/listar",
            role: ["ADMIN","VIGILANTE"],
            parent: 19,
          },
        ],*/
    },
    {
        id: 21,
        label: "Reportes",
        icon: "mdi mdi-file-document-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 22,
                label: "Consumo de Vales",
                link: "/solicitudes/solicitudv",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 21,
            },
            {
                id: 23,
                label: "Solicitud de Transporte",
                link: "/solicitudes/solicitante",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 21,
            },
        ],
    },
    {
        id: 24,
        label: "Calendario",
        icon: "mdi mdi-calendar-blank",
        role: ["ADMIN", "SECR_DECANATO"],
        link: "/calendario/calendario"
    },
    {
        id: 25,
        label: "Movimientos de vales",
        icon: "mdi mdi-checkbox-multiple-blank-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        link: "/solicitudes/movimientosvales"
    },
    {
        id: 26,
        label: "Vehiculos",
        icon: "mdi mdi-car-outline",
        role: ["ADMIN", "ASIS_FINANCIERO"],
        link: "/vehiculo/listar"
    }
];
const MENU_USER = [
    {
        id: 1,
        label: 'MENU PRINCIPAL',
        isTitle: true,
    },
    {
        id: 2,
        label: 'Inicio',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 3,
        label: 'MODULOS',
        isTitle: true
    },
    {
        id: 7,
        label: "Solicitud Vehículo",
        icon: "mdi mdi-file-document-multiple-outline",
        role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 10,
                label: "Mis solicitudes",
                link: "/solicitud-vehiculo/mis-solicitudes",
                role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 7,
            },
        ],
    },
];
const MENU_JEFE_DEPTO = [
    {
        id: 1,
        label: 'MENU PRINCIPAL',
        isTitle: true,
    },
    {
        id: 2,
        label: 'Inicio',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 3,
        label: 'MODULOS',
        isTitle: true
    },
    {
        id: 7,
        label: "Solicitud Vehículo",
        icon: "mdi mdi-file-document-multiple-outline",
        role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 8,
                label: "Listado",
                link: "/solicitud-vehiculo/listado",
                role: ["ADMIN", "JEFE_DEPTO", "SECR_DECANATO", "DECANO"],
                parentId: 7,
            },
            {
                id: 10,
                label: "Mis solicitudes",
                link: "/solicitud-vehiculo/mis-solicitudes",
                role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 7,
            },
        ],
    },
];
const MENU_SECRE_DECA = [
    {
        id: 1,
        label: 'MENU PRINCIPAL',
        isTitle: true,
    },
    {
        id: 2,
        label: 'Inicio',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 3,
        label: 'MODULOS',
        isTitle: true
    },
    {
        id: 6,
        label: "Empleados",
        icon: "bx-user-circle",
        role: ["ADMIN"],
        subItems: [
            {
                id: 7,
                label: "Listado",
                link: "/empleados/listar",
                role: ["ADMIN"],
                parentId: 6,
            },
        ],
    },
    {
        id: 7,
        label: "Calendario",
        icon: "mdi mdi-calendar-blank",
        role: ["ADMIN", "SECR_DECANATO"],
        link: "/calendario/calendario"
    },
    {
        id: 7,
        label: "Solicitud Vehículo",
        icon: "mdi mdi-file-document-multiple-outline",
        role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 8,
                label: "Listado",
                link: "/solicitud-vehiculo/listado",
                role: ["ADMIN", "JEFE_DEPTO", "SECR_DECANATO", "DECANO"],
                parentId: 7,
            },
            {
                id: 10,
                label: "Mis solicitudes",
                link: "/solicitud-vehiculo/mis-solicitudes",
                role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 7,
            },
        ],
    },
];
const MENU_ASIS_FINAN = [
    {
        id: 1,
        label: 'MENU PRINCIPAL',
        isTitle: true,
    },
    {
        id: 2,
        label: 'Inicio',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 3,
        label: 'MODULOS',
        isTitle: true
    },
    {
        id: 7,
        label: "Solicitud Vehículo",
        icon: "mdi mdi-file-document-multiple-outline",
        role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 10,
                label: "Mis solicitudes",
                link: "/solicitud-vehiculo/mis-solicitudes",
                role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 7,
            },
        ],
    },
    {
        id: 9,
        label: "Solcitudes de Vales",
        icon: "mdi mdi-clipboard-text-multiple-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 11,
                label: "Listado",
                link: "/solicitudes/solicitudvale",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 9,
            },
        ],
    },
    {
        id: 8,
        label: "Vales",
        icon: "mdi mdi-gas-station",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 9,
                label: "Proveedor",
                link: "/proveedor",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 8,
            },
            {
                id: 10,
                label: "Compras",
                link: "/compra",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 8,
            },
            {
                id: 11,
                label: "Ajustes de Vales",
                link: "/devolucion-vale",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 8,
            },
        ],
    },
    {
        id: 11,
        label: "Reportes",
        icon: "mdi mdi-file-document-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 12,
                label: "Consumo de Vales",
                link: "/solicitudes/solicitudv",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 11,
            },
            {
                id: 13,
                label: "Solicitud de Transporte",
                link: "/solicitudes/solicitante",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 11,
            },
        ],
    },
    {
        id: 14,
        label: "Movimientos de vales",
        icon: "mdi mdi-checkbox-multiple-blank-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        link: "/solicitudes/movimientosvales"
    },
];
const MENU_JEFE_FINAN = [
    {
        id: 1,
        label: 'MENU PRINCIPAL',
        isTitle: true,
    },
    {
        id: 2,
        label: 'Inicio',
        icon: 'bx-home-circle',
        link: '/dashboard',
    },
    {
        id: 3,
        label: 'MODULOS',
        isTitle: true
    },
    {
        id: 7,
        label: "Solicitud Vehículo",
        icon: "mdi mdi-file-document-multiple-outline",
        role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 8,
                label: "Listado",
                link: "/solicitud-vehiculo/listado",
                role: ["ADMIN", "JEFE_DEPTO", "SECR_DECANATO", "DECANO"],
                parentId: 7,
            },
            {
                id: 9,
                label: "Mis solicitudes",
                link: "/solicitud-vehiculo/mis-solicitudes",
                role: ["ADMIN", "USER", "JEFE_DEPTO", "SECR_DECANATO", "DECANO", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 7,
            },
        ],
    },
    {
        id: 10,
        label: "Solcitudes de Vales",
        icon: "mdi mdi-clipboard-text-multiple-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 11,
                label: "Por Aprobar",
                link: "/solicitudes/solictud-aprobar",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 10,
            },
        ],
    },
    {
        id: 12,
        label: "Vales",
        icon: "mdi mdi-gas-station",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 13,
                label: "Proveedor",
                link: "/proveedor",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 12,
            },
            {
                id: 14,
                label: "Compras",
                link: "/compra",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 12,
            },
            {
                id: 15,
                label: "Ajustes de Vales",
                link: "/devolucion-vale",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 12,
            },
        ],
    },
    {
        id: 16,
        label: "Reportes",
        icon: "mdi mdi-file-document-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        subItems: [
            {
                id: 17,
                label: "Consumo de Vales",
                link: "/solicitudes/solicitudv",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 16,
            },
            {
                id: 18,
                label: "Solicitud de Transporte",
                link: "/solicitudes/solicitante",
                role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
                parentId: 16,
            },
        ],
    },
    {
        id: 19,
        label: "Movimientos de vales",
        icon: "mdi mdi-checkbox-multiple-blank-outline",
        role: ["ADMIN", "ASIS_FINANCIERO", "JEFE_FINANACIERO"],
        link: "/solicitudes/movimientosvales"
    },
];
const MENU_VIGILANTE = [
    {
        id: 1,
        label: 'MENU PRINCIPAL',
        isTitle: true,
    },
    {
        id: 2,
        label: 'MODULOS',
        isTitle: true
    },
    {
        id: 10,
        label: "Entradas y Salidas",
        icon: "dripicons-document-edit",
        link: "/entrasalida/listar",
        role: ["ADMIN", "VIGILANTE"],
        /*subItems: [
          {
            id: 11,
            label: "Listado",
            link: "/entrasalida/listar",
            role: ["ADMIN","VIGILANTE"],
            parent: 10,
          },
        ],*/
    },
];


/***/ }),

/***/ 8062:
/*!******************************************************!*\
  !*** ./src/app/layouts/sidebar/sidebar.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SidebarComponent": () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! metismenujs/dist/metismenujs */ 43592);
/* harmony import */ var metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ 84242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/event.service */ 63997);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 83981);
/* harmony import */ var src_app_modules_solicitud_vehiculo_services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/solicitud-vehiculo/services/solicitud-vehiculo.service */ 88345);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var simplebar_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! simplebar-angular */ 6878);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);












const _c0 = ["componentRef"];
const _c1 = ["sideMenu"];
function SidebarComponent_ng_template_0_ng_container_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, item_r7.label));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r7.icon, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill float-end bg-", item_r7.badge.variant, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, item_r7.badge.text));
} }
const _c2 = function (a0, a1) { return { "has-arrow": a0, "has-dropdown": a1 }; };
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_i_1_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_span_5_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c2, !item_r7.badge, item_r7.badge));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, item_r7.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bx ", item_r7.icon, "");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_span_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("badge rounded-pill bg-", item_r7.badge.variant, " float-end");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 4, item_r7.badge.text));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_i_1_Template, 1, 3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_span_5_Template, 3, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", item_r7.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, item_r7.label), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.badge);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subitem_r25.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subitem_r25.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 3, subitem_r25.label), " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subitem_r25.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 2, subitem_r25.label), " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subSubitem_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", subSubitem_r32.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("data-parent", subSubitem_r32.parentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 3, subSubitem_r32.label), " ");
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_li_1_Template, 4, 5, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", subitem_r25.subItems);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_1_Template, 3, 5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_a_2_Template, 3, 4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_ul_3_Template, 2, 1, "ul", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const subitem_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r24.hasItems(subitem_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.hasItems(subitem_r25));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r24.hasItems(subitem_r25));
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_li_1_Template, 4, 3, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", item_r7.subItems);
} }
function SidebarComponent_ng_template_0_ng_container_3_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_2_a_1_Template, 6, 9, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_a_2_Template, 6, 6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_li_2_ul_3_Template, 2, 1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.hasItems(item_r7));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.hasItems(item_r7));
} }
function SidebarComponent_ng_template_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_ng_template_0_ng_container_3_li_1_Template, 3, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, SidebarComponent_ng_template_0_ng_container_3_li_2_Template, 4, 3, "li", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", item_r7.isTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !item_r7.isTitle && !item_r7.isLayout);
} }
function SidebarComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ul", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SidebarComponent_ng_template_0_ng_container_3_Template, 3, 2, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.menuItems);
} }
function SidebarComponent_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function SidebarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_div_5_ng_container_1_Template, 1, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
function SidebarComponent_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainer"](0);
} }
function SidebarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SidebarComponent_div_6_ng_container_1_Template, 1, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngTemplateOutlet", _r0);
} }
/**
 * Sidebar component
 */
class SidebarComponent {
    constructor(eventService, router, translate, http, solicituVService, userService) {
        this.eventService = eventService;
        this.router = router;
        this.translate = translate;
        this.http = http;
        this.solicituVService = solicituVService;
        this.userService = userService;
        this.isCondensed = false;
        this.menuItems = [];
        this.rol = "ADMIN";
        this.usuariojson = this.userService.usuarioJSON;
        //this.lstusuario = this.userService.usuario;
        router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
                this._activateMenuDropdown();
                this._scrollElement();
            }
        });
    }
    ngOnInit() {
        this.userService.getUsuario();
        console.log(this.usuariojson);
        this.initialize();
        this._scrollElement();
    }
    ngAfterViewInit() {
        this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
        this._activateMenuDropdown();
    }
    toggleMenu(event) {
        event.currentTarget.nextElementSibling.classList.toggle('mm-show');
    }
    ngOnChanges() {
        if (!this.isCondensed && this.sideMenu || this.isCondensed) {
            setTimeout(() => {
                this.menu = new (metismenujs_dist_metismenujs__WEBPACK_IMPORTED_MODULE_0___default())(this.sideMenu.nativeElement);
            });
        }
        else if (this.menu) {
            this.menu.dispose();
        }
    }
    _scrollElement() {
        setTimeout(() => {
            if (document.getElementsByClassName("mm-active").length > 0) {
                const currentPosition = document.getElementsByClassName("mm-active")[0]['offsetTop'];
                if (currentPosition > 500)
                    if (this.scrollRef.SimpleBar !== null)
                        this.scrollRef.SimpleBar.getScrollElement().scrollTop =
                            currentPosition + 300;
            }
        }, 300);
    }
    /**
     * remove active and mm-active class
     */
    _removeAllClass(className) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }
    /**
     * Activate the parent dropdown
     */
    _activateMenuDropdown() {
        this._removeAllClass('mm-active');
        this._removeAllClass('mm-show');
        const links = document.getElementsByClassName('side-nav-link-ref');
        let menuItemEl = null;
        // tslint:disable-next-line: prefer-for-of
        const paths = [];
        for (let i = 0; i < links.length; i++) {
            paths.push(links[i]['pathname']);
        }
        var itemIndex = paths.indexOf(window.location.pathname);
        if (itemIndex === -1) {
            const strIndex = window.location.pathname.lastIndexOf('/');
            const item = window.location.pathname.substr(0, strIndex).toString();
            menuItemEl = links[paths.indexOf(item)];
        }
        else {
            menuItemEl = links[itemIndex];
        }
        if (menuItemEl) {
            menuItemEl.classList.add('active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.add('mm-active');
                const parent2El = parentEl.parentElement.closest('ul');
                if (parent2El && parent2El.id !== 'side-menu') {
                    parent2El.classList.add('mm-show');
                    const parent3El = parent2El.parentElement;
                    if (parent3El && parent3El.id !== 'side-menu') {
                        parent3El.classList.add('mm-active');
                        const childAnchor = parent3El.querySelector('.has-arrow');
                        const childDropdown = parent3El.querySelector('.has-dropdown');
                        if (childAnchor) {
                            childAnchor.classList.add('mm-active');
                        }
                        if (childDropdown) {
                            childDropdown.classList.add('mm-active');
                        }
                        const parent4El = parent3El.parentElement;
                        if (parent4El && parent4El.id !== 'side-menu') {
                            parent4El.classList.add('mm-show');
                            const parent5El = parent4El.parentElement;
                            if (parent5El && parent5El.id !== 'side-menu') {
                                parent5El.classList.add('mm-active');
                                const childanchor = parent5El.querySelector('.is-parent');
                                if (childanchor && parent5El.id !== 'side-menu') {
                                    childanchor.classList.add('mm-active');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * Initialize
     */
    initialize() {
        switch (this.usuariojson.role) {
            case "JEFE_DEPTO": {
                this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU_JEFE_DEPTO;
                break;
            }
            case "SECR_DECANATO": {
                this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU_SECRE_DECA;
                break;
            }
            case "DECANO": {
                this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU_JEFE_DEPTO;
                break;
            }
            case "ASIS_FINANCIERO": {
                this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU_ASIS_FINAN;
                break;
            }
            case "JEFE_FINANACIERO": {
                this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU_JEFE_FINAN;
                break;
            }
            case "VIGILANTE": {
                this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU_VIGILANTE;
                break;
            }
            case "ADMIN": {
                this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU;
                break;
            }
            default: {
                this.menuItems = _menu__WEBPACK_IMPORTED_MODULE_1__.MENU_USER;
                break;
            }
        }
        // this.menuItems = this.filterMenuByRole(MENU, this.usuariojson.role);
    }
    /*
      filterMenuByRole(menu: MenuItem[], userRole: string): MenuItem[] {
        // Filtrar el menú según el rol del usuario
        return menu.filter((item) => {
          if (item.role) {
            return item.role.includes(userRole);
          }
          // Si el elemento no tiene roles definidos, se muestra para todos los roles.
          return true;
        });
      }
    */
    //this.usuariojson.codigoUsario
    obtenerUsuarioActivo() {
        // Suscríbete al Observable para obtener el usuario
        let resp;
        this.solicituVService.getUsuarioSV().subscribe((user) => {
            resp = user.role;
        });
        console.log("rol en el metodo:", resp);
    }
    /**
     * Returns true or false if given menu item has child or not
     * @param item menuItem
     */
    hasItems(item) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_2__.EventService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_modules_solicitud_vehiculo_services_solicitud_vehiculo_service__WEBPACK_IMPORTED_MODULE_3__.SolicitudVehiculoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService)); };
SidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], viewQuery: function SidebarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.scrollRef = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sideMenu = _t.first);
    } }, inputs: { isCondensed: "isCondensed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 7, vars: 2, consts: [["contentTemplate", ""], [1, "vertical-menu"], [1, "h-100"], ["componentRef", ""], [4, "ngIf"], ["id", "sidebar-menu"], ["id", "side-menu", 1, "metismenu", "list-unstyled"], ["sideMenu", ""], [4, "ngFor", "ngForOf"], ["class", "menu-title", 4, "ngIf"], [1, "menu-title"], ["href", "javascript:void(0);", "class", "is-parent", 3, "ngClass", 4, "ngIf"], ["class", "side-nav-link-ref active", 3, "routerLink", 4, "ngIf"], ["class", "sub-menu", "aria-expanded", "false", 4, "ngIf"], ["href", "javascript:void(0);", 1, "is-parent", 3, "ngClass"], [3, "class", 4, "ngIf"], [1, "side-nav-link-ref", "active", 3, "routerLink"], ["aria-expanded", "false", 1, "sub-menu"], ["class", "side-nav-link-ref", "routerLinkActive", "active", 3, "routerLink", 4, "ngIf"], ["class", "side-nav-link-a-ref has-arrow", "href", "javascript:void(0);", 4, "ngIf"], ["class", "sub-menu mm-collapse", "aria-expanded", "false", 4, "ngIf"], ["routerLinkActive", "active", 1, "side-nav-link-ref", 3, "routerLink"], ["href", "javascript:void(0);", 1, "side-nav-link-a-ref", "has-arrow"], ["aria-expanded", "false", 1, "sub-menu", "mm-collapse"], [4, "ngTemplateOutlet"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SidebarComponent_ng_template_0_Template, 4, 1, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "ngx-simplebar", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, SidebarComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, SidebarComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isCondensed);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isCondensed);
    } }, directives: [simplebar_angular__WEBPACK_IMPORTED_MODULE_9__.SimplebarAngularComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgTemplateOutlet], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 28975:
/*!*********************************************************!*\
  !*** ./src/app/layouts/topbar/modal/modal.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalComponent": () => (/* binding */ ModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/constants/constants */ 24017);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var src_app_modules_empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/empleado/service/empleado.service */ 54862);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mask */ 97846);












const _c0 = ["content"];
function ModalComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_0_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); return ctx_r8.openModal(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); return ctx_r10.openModal(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Credenciales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r12.AcercaDe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Acerca De ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); return ctx_r14.openModal(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Ver Perfil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](8); return ctx_r16.openModal(_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Credenciales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r18.AcercaDe(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Acerca De ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Perfil de Usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Modificar Credenciales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_3_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_7_div_3_i_1_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r29.leyenda == "Datos" ? ctx_r29.restaurarAlerts() : ctx_r29.restaurarAlerts2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_7_div_3_i_1_Template, 1, 0, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r23.leyenda == "Datos" ? !ctx_r23.siMuestraAlertas() : !ctx_r23.siMuestraAlertas2());
} }
function ModalComponent_ng_template_7_div_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Importante!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_7_div_6_div_1_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r36); const alert_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r34.CambiarAlert(alert_r32); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r32.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](alert_r32.message);
} }
function ModalComponent_ng_template_7_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_7_div_6_div_1_div_1_Template, 6, 4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", alert_r32.show);
} }
function ModalComponent_ng_template_7_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_7_div_6_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r24.alerts);
} }
function ModalComponent_ng_template_7_div_7_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Importante!");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_7_div_7_div_1_div_1_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const alert_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r41.CambiarAlert2(alert_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("alert alert-", alert_r39.type, " alert-dismissible fade show");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r40.nuevo ? "!Debe cambiar clave \"por defecto\", por la original\u00A1" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](alert_r39.message);
} }
function ModalComponent_ng_template_7_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_7_div_7_div_1_div_1_Template, 9, 5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const alert_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", alert_r39.show);
} }
function ModalComponent_ng_template_7_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_7_div_7_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r25.alerts2);
} }
function ModalComponent_ng_template_7_div_8_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese el clave");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_8_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese la confirmacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ModalComponent_ng_template_7_div_8_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r47.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Clave : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function ModalComponent_ng_template_7_div_8_Template_input_input_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r49.SeguridadClave($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_7_div_8_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r50.togglePasswordVisibility(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ModalComponent_ng_template_7_div_8_span_16_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Confirmar Clave : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("input", function ModalComponent_ng_template_7_div_8_Template_input_input_25_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r51.VerificarClaves($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_7_div_8_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r52.togglePasswordVisibility2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ModalComponent_ng_template_7_div_8_span_29_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_7_div_8_Template_button_click_33_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r48); const modal_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return modal_r20.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_5_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r26.formUsuario);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r26.seguridad);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r26.msjclave);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r26.esCampoValidoU("clave"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r26.showPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx_r26.formUsuario.get("clave")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", ctx_r26.confirma);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r26.msjclaveconfir);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx_r26.showPassword2 ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_9_0 = ctx_r26.formEmpleado.get("confirclave")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors["required"]);
} }
function ModalComponent_ng_template_7_div_9_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese el nombre");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_9_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No debe contener numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_9_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese el apellido");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_9_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " No debe contener numeros");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_9_span_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Ingrese un tel\u00E9fono");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_9_span_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Debe comenzar con 2, 6 o 7 y tener 8 d\u00EDgitos en total. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function ModalComponent_ng_template_7_div_9_img_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r61.fotoEmpleado !== "" ? ctx_r61.fotoEmpleado : "./../../../../assets/images/Default-Avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ModalComponent_ng_template_7_div_9_img_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 48);
} if (rf & 2) {
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", ctx_r62.imgTemp, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
} }
function ModalComponent_ng_template_7_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function ModalComponent_ng_template_7_div_9_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r63.guardar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Nombre: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ModalComponent_ng_template_7_div_9_span_11_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, ModalComponent_ng_template_7_div_9_span_12_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Apellido: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, ModalComponent_ng_template_7_div_9_span_20_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, ModalComponent_ng_template_7_div_9_span_21_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Tel\u00E9fono: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](27, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, ModalComponent_ng_template_7_div_9_span_29_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, ModalComponent_ng_template_7_div_9_span_30_Template, 2, 0, "span", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Foto: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function ModalComponent_ng_template_7_div_9_Template_input_change_36_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r65.onFileSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](38, ModalComponent_ng_template_7_div_9_img_38_Template, 1, 1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, ModalComponent_ng_template_7_div_9_img_39_Template, 1, 1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Modificar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_7_div_9_Template_button_click_43_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64); const modal_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; return modal_r20.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Cancelar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_4_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_11_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r27.formEmpleado);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r27.esCampoValido("nombre"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r27.empleado.nombre);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r27.formEmpleado.get("nombre")) == null ? null : tmp_3_0.errors == null ? null : tmp_3_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx_r27.formEmpleado.get("nombre")) == null ? null : tmp_4_0.errors == null ? null : tmp_4_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r27.esCampoValido("apellido"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r27.empleado.apellido);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_7_0 = ctx_r27.formEmpleado.get("apellido")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx_r27.formEmpleado.get("apellido")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors["pattern"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMap"](ctx_r27.esCampoValido("telefono"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r27.empleado.telefono);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (tmp_11_0 = ctx_r27.formEmpleado.get("telefono")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.formEmpleado.get("telefono").hasError("pattern"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r27.imgTemp);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r27.imgTemp);
} }
function ModalComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_ng_template_7_div_1_Template, 3, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_ng_template_7_div_2_Template, 3, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_ng_template_7_div_3_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ModalComponent_ng_template_7_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r69); const modal_r20 = restoredCtx.$implicit; return modal_r20.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, ModalComponent_ng_template_7_div_6_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalComponent_ng_template_7_div_7_Template, 2, 1, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ModalComponent_ng_template_7_div_8_Template, 35, 11, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ModalComponent_ng_template_7_div_9_Template, 45, 18, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.leyenda == "Datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.leyenda == "Credenciales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.alerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.leyenda == "Datos");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.leyenda == "Credenciales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.leyenda == "Credenciales");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.leyenda == "Datos");
} }
class ModalComponent {
    constructor(usuarioService, modalService, fb, router, empleadoService, mensajesService) {
        this.usuarioService = usuarioService;
        this.modalService = modalService;
        this.fb = fb;
        this.router = router;
        this.empleadoService = empleadoService;
        this.mensajesService = mensajesService;
        this.home = false;
        this.imgTemp = null;
        this.imagen = "no hay";
        this.isText = src_app_constants_constants__WEBPACK_IMPORTED_MODULE_0__.NAME_VALIDATE;
        this.showPassword = false;
        this.password = "";
        this.showPassword2 = false;
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: "Complete los campos obligatorios (*); la imagen no es obligatoria",
                show: false,
            },
        ];
        this.alerts2 = [
            {
                id: 1,
                type: "info",
                message: "Por favor, complete todos los campos obligatorios (*). Asegúrese de que las claves coincidan y tengan un nivel de seguridad medio. La clave debe incluir letras mayúsculas y minúsculas, tener más de 5 caracteres y contener caracteres especiales como '!@#$%^&'",
                show: false,
            },
        ];
        this.formEmpleado = this.iniciarFormularioE();
        this.formUsuario = this.iniciarFormularioU();
    }
    ngOnInit() {
        this.fotoEmpleado = this.usuarioService.empleadofoto;
        this.usuarioService.getEmpleado();
        this.usuarioService.getUsuario();
        if (this.leyenda == "Credenciales") {
            this.restaurarAlerts2();
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.nuevo) {
                this.leyenda = "Credenciales";
                this.openModalN();
            }
        }, 2000);
    }
    iniciarFormularioE() {
        return this.fb.group({
            codigoEmpleado: [""],
            dui: [""],
            nombre: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isText)]],
            apellido: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.isText)]],
            telefono: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(/^[267]\d{7}$/)]],
            licencia: [""],
            tipolicencia: [""],
            fechalicencia: [""],
            jefe: [""],
            estado: [""],
            nombrefoto: [""],
            urlfoto: [""],
            correo: [""],
            cargo: [""],
            departamento: [""],
        });
    }
    iniciarFormularioU() {
        return this.fb.group({
            codigoUsuario: [""],
            empleado: [""],
            nombre: [""],
            nuevo: [""],
            token: [""],
            clave: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ///// metodo que extrae la informacion de la imagen /////
    onFileSelected(event) {
        const target = event.target;
        this.file = target.files[0];
        this.imagen = "seleccioanda";
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
    get empleado() {
        return this.usuarioService.empleado;
    }
    guardar() {
        if (this.formEmpleado.valid || this.formUsuario.valid) {
            if (this.leyenda == "Datos") {
                this.registrandoE();
            }
            else {
                if (this.confirma == "confirmada" && this.media) {
                    this.registrandoU();
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                        position: "center",
                        title: "Faltan parametros de seguridad",
                        html: "Las claves deben coincidir y tener seguridad media como minimo",
                        icon: "warning",
                    });
                }
            }
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                position: "center",
                title: "Faltan datos en el formuario",
                html: 'Complete todos los campos requeridos (<span style="color: red;">*</span>)',
                icon: "warning",
            });
        }
    }
    registrandoE() {
        this.EstructurandoFormE();
        const empleado = this.formEmpleado.value;
        if (this.imagen === "no hay") {
            this.empleadoService.putEmpleado(empleado).subscribe((resp) => {
                if (resp) {
                    if (this.usuarioService.validarToken()) {
                        const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
                            toast: true,
                            position: "top-end",
                            showConfirmButton: false,
                            timer: 2000,
                            //timerProgressBar: true,
                            didOpen: (toast) => {
                                toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
                                toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
                            },
                        });
                        Toast.fire({
                            icon: "success",
                            text: "Modificacion exitosa",
                        }).then(() => {
                            // Aquí se realiza la redirección
                            this.formEmpleado.reset();
                            this.recargar();
                            this.modalService.dismissAll();
                            window.location.reload();
                        });
                    }
                }
            }, (err) => {
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
            });
        }
        else {
            this.empleadoService.putEmpleadoImagen(empleado, this.file).subscribe((resp) => {
                if (resp) {
                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        //timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
                            toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        text: "Modificacion exitosa",
                    }).then(() => {
                        // Aquí se realiza la redirección
                        this.formEmpleado.reset();
                        this.recargar();
                        this.modalService.dismissAll();
                        window.location.reload();
                    });
                }
            }, (err) => {
                this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err);
            });
        }
    }
    EstructurandoFormE() {
        const nombre = this.formEmpleado.get("nombre").value;
        const apellido = this.formEmpleado.get("apellido").value;
        const telefono = this.formEmpleado.get("telefono").value;
        const objeto = this.usuarioService.empleado;
        objeto.nombre = nombre;
        objeto.telefono = telefono;
        objeto.apellido = apellido;
        this.formEmpleado.patchValue(objeto);
        this.formEmpleado.patchValue({
            cargo: objeto.cargo.id,
        });
        this.formEmpleado.patchValue({
            departamento: objeto.departamento.codigoDepto,
        });
    }
    registrandoU() {
        this.EstructurandoFormU();
        const usuario = this.formUsuario.value;
        console.log(usuario);
        this.usuarioService.Credenciales(usuario).subscribe((resp) => {
            if (resp) {
                if (this.usuarioService.validarToken()) {
                    const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 2000,
                        //timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().stopTimer));
                            toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().resumeTimer));
                        },
                    });
                    Toast.fire({
                        icon: "success",
                        text: "Modificacion exitosa",
                    }).then(() => {
                        this.formEmpleado.reset();
                        this.recargar();
                        this.modalService.dismissAll();
                    });
                }
            }
        }, (err) => {
            this.mensajesService.mensajesSweet("error", "Ups... Algo salió mal", err.error.message);
        });
    }
    EstructurandoFormU() {
        const clave = this.formUsuario.get("clave").value;
        const objeto = this.usuarioService.usuario;
        objeto.clave = clave;
        this.formUsuario.patchValue(objeto);
    }
    esCampoValido(campo) {
        const validarCampo = this.formEmpleado.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    esCampoValidoU(campo) {
        const validarCampo = this.formUsuario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? "is-invalid"
            : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
                ? "is-valid"
                : "";
    }
    ///// Metodo para recargar la pagina /////
    recargar() {
        let currentUrl = this.router.url;
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = "reload";
        this.router.navigate([currentUrl]);
    }
    openModalN() {
        this.modalService.open(this.content, { size: "", backdrop: "static" });
    }
    openModal(content) {
        console.log(content);
        this.modalService.open(content, { size: "", backdrop: "static" });
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
    CambiarAlert2(alert2) {
        alert2.show = !alert2.show;
    }
    restaurarAlerts2() {
        this.alerts2.forEach((alert2) => {
            alert2.show = true;
        });
    }
    siMuestraAlertas2() {
        return this.alerts2.every((alert2) => alert2.show);
    }
    SeguridadClave(event) {
        const clave = event.target.value;
        this.seguridad = this.evaluarSeguridadClave(clave);
        if (this.seguridad === "alta") {
            this.msjclave = "Seguridad alta";
        }
        else if (this.seguridad === "media") {
            this.msjclave = "Seguridad media";
        }
        else {
            this.msjclave = "La clave es poco segura";
        }
    }
    VerificarClaves(event) {
        const clave = this.formUsuario.get("clave").value;
        const valorConfirClave = event.target.value;
        if (clave === valorConfirClave) {
            this.msjclaveconfir = "Clave confirmada";
            this.confirma = "confirmada";
        }
        else {
            this.msjclaveconfir = "Las claves no coinciden";
            this.confirma = "errorclave";
        }
    }
    evaluarSeguridadClave(clave) {
        if (clave.length < 5) {
            this.media = false;
            return "baja";
        }
        if (/^[a-zA-Z]+$/.test(clave)) {
            this.media = true;
            return "media";
        }
        if (/[0-9]/.test(clave) &&
            /[A-Z]/.test(clave) &&
            /[!@#$%^&*]/.test(clave)) {
            this.media = true;
            return "alta";
        }
        this.media = true;
        return "media";
    }
    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    togglePasswordVisibility2() {
        this.showPassword2 = !this.showPassword2;
    }
    AcercaDe() {
        this.usuarioService.logoutAcercaDe();
    }
}
ModalComponent.ɵfac = function ModalComponent_Factory(t) { return new (t || ModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_2__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_modules_empleado_service_empleado_service__WEBPACK_IMPORTED_MODULE_3__.EmpleadoService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_4__.MensajesService)); };
ModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ModalComponent, selectors: [["app-modal"]], viewQuery: function ModalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
    } }, inputs: { nuevo: "nuevo", leyenda: "leyenda", home: "home" }, decls: 9, vars: 6, consts: [[4, "ngIf"], ["id", "modalEmpleado", "name", "modalEmpleado", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "modal-fullscreen-xl-down", "fade"], ["role", "document"], ["content", ""], [1, "dropdown-item", 2, "cursor", "pointer", 3, "click"], [1, "bx", "bx-user", "font-size-16", "align-middle", "me-1"], [1, "bx", "bx", "bx-lock", "font-size-16", "align-middle", "me-1"], [1, "dripicons-information", "font-size-13", "align-middle", "me-1"], [1, "btn", "btn-primary", "btn-sm", 2, "cursor", "pointer", 3, "click"], [1, "mdi", "mdi-arrow-right", "ms-1"], [1, "modal-header"], ["class", "btn-alerta", 4, "ngIf"], ["type", "button", "aria-hidden", "true", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "modal-title", "mt-0"], [1, "btn-alerta"], ["class", "mdi mdi-18px mdi-lightbulb-on-outline custom-cursor", "ngbTooltip", "Mostrar Ayuda", 3, "click", 4, "ngIf"], ["ngbTooltip", "Mostrar Ayuda", 1, "mdi", "mdi-18px", "mdi-lightbulb-on-outline", "custom-cursor", 3, "click"], [4, "ngFor", "ngForOf"], ["role", "alert", 3, "class", 4, "ngIf"], ["role", "alert"], [1, "text-justify"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], ["enctype", "multipart/form-data", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-md"], [1, "form-group", "row", "m-4"], [1, "control-label"], [1, "text-danger"], [1, "msjclave", 3, "ngClass"], [1, "input-group", "auth-pass-inputgroup"], ["type", "password", "formControlName", "clave", "id", "clave", "name", "clave", "placeholder", "Ingrese clave", 1, "form-control", 3, "type", "input"], ["type", "button", "id", "password-addon", 1, "btn", "btn-light", "ms-0", 3, "click"], [1, "mdi", "mdi-eye-outline"], [1, "invalid-feedback"], ["type", "password", "id", "confirclave", "name", "confirclave", "placeholder", "Confirme la Clave", 1, "form-control", 3, "type", "input"], [1, "d-flex", "justify-content-end", "mt-4"], ["type", "submit", "id", "btn-save", "name", "btn-save", 1, "btn", "btn-primary", "w-sm", "me-2"], ["type", "button", "id", "btn-cancel", "name", "btn-cancel", "aria-hidden", "true", 1, "btn", "btn-dark", "w-sm", 3, "click"], ["type", "text", "formControlName", "nombre", "id", "nombre", "name", "nombre", "placeholder", "Ingrese nombre", 1, "form-control", 3, "ngModel"], ["type", "text", "formControlName", "apellido", "id", "apellido", "name", "apellido", "placeholder", "Ingrese apellido", 1, "form-control", 3, "ngModel"], ["type", "text", "formControlName", "telefono", "id", "telefono", "name", "telefono", "placeholder", "Ingrese tel\u00E9fono - ej: 0000-0000", "mask", "0000-0000", 1, "form-control", 3, "ngModel"], [1, "form-group", "row"], [1, "col-md-7"], [1, "form-group", "row", "m-2"], ["for", "file", 1, "control-label"], ["id", "file", "type", "file", "multiple", "", 1, "form-control", 3, "change"], ["class", "rounded-circle custom-border", "alt", "", 3, "src", 4, "ngIf"], ["alt", "", 1, "rounded-circle", "custom-border", 3, "src"]], template: function ModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ModalComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ModalComponent_div_1_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ModalComponent_div_2_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, ModalComponent_div_3_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, ModalComponent_div_4_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ModalComponent_div_5_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, ModalComponent_ng_template_7_Template, 10, 7, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Datos" && ctx.home == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Credenciales" && ctx.home == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "AcercaDe" && ctx.home == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Datos" && ctx.home == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "Credenciales" && ctx.home == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.leyenda == "AcercaDe" && ctx.home == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ngx_mask__WEBPACK_IMPORTED_MODULE_10__.MaskDirective], styles: ["button.btn-close[_ngcontent-%COMP%] {\n  margin-left: 5px;\n}\n\n\n\n.custom-border[_ngcontent-%COMP%] {\n  border: 1.5px solid #550000;\n  padding: 5px;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 180px;\n  height: 175px;\n}\n\n.msjclave[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-left: 5px;\n  font-size: 12px;\n}\n\n.alta[_ngcontent-%COMP%] {\n  color: green;\n}\n\n.media[_ngcontent-%COMP%] {\n  color: orange;\n}\n\n.baja[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.confirmada[_ngcontent-%COMP%] {\n  color: #0a0ac0;\n}\n\n.errorclave[_ngcontent-%COMP%] {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQSw2QkFBQTs7QUFDQTtFQUNFLDJCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0YiLCJmaWxlIjoibW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24uYnRuLWNsb3NlIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4vKiBzdHlsZXMuY3NzIG8gc3R5bGVzLnNjc3MgKi9cclxuLmN1c3RvbS1ib3JkZXIge1xyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzU1MDAwMDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDogMTc1cHg7XHJcbn1cclxuXHJcbi5tc2pjbGF2ZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYWx0YSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4ubWVkaWEge1xyXG4gIGNvbG9yOiBvcmFuZ2U7XHJcbn1cclxuXHJcbi5iYWphIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uY29uZmlybWFkYSB7XHJcbiAgY29sb3I6IHJnYigxMCwgMTAsIDE5Mik7XHJcbn1cclxuXHJcbi5lcnJvcmNsYXZlIHtcclxuICBjb2xvcjogcmVkO1xyXG59Il19 */"] });


/***/ }),

/***/ 69514:
/*!****************************************************!*\
  !*** ./src/app/layouts/topbar/topbar.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlicePipe": () => (/* binding */ SlicePipe),
/* harmony export */   "TopbarComponent": () => (/* binding */ TopbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/auth.service */ 67686);
/* harmony import */ var _core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/services/authfake.service */ 92464);
/* harmony import */ var _core_services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/services/language.service */ 58463);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 79686);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ 32071);
/* harmony import */ var src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/account/auth/services/usuario.service */ 15501);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/global/mensajes.service */ 66548);
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal/modal.component */ 28975);
















class SlicePipe {
    transform(value, start, end) {
        return value.slice(start, end) + '...';
    }
}
SlicePipe.ɵfac = function SlicePipe_Factory(t) { return new (t || SlicePipe)(); };
SlicePipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({ name: "slice", type: SlicePipe, pure: true });
/**
 * Topbar component
 */
class TopbarComponent {
    constructor(document, router, authService, authFackservice, languageService, translate, _cookiesService, usuarioService, modalService, fb, mensajesService) {
        this.document = document;
        this.router = router;
        this.authService = authService;
        this.authFackservice = authFackservice;
        this.languageService = languageService;
        this.translate = translate;
        this._cookiesService = _cookiesService;
        this.usuarioService = usuarioService;
        this.modalService = modalService;
        this.fb = fb;
        this.mensajesService = mensajesService;
        this.icono = 'fa fa-fw fa-bars';
        this.alerts = [
            {
                id: 1,
                type: "info",
                message: "Complete los campos obligatorios (*)",
                show: false,
            },
        ];
        this.listLang = [
            { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
            { text: 'Spanish', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
            { text: 'German', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
            { text: 'Italian', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
            { text: 'Russian', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
        ];
        this.settingsButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        this.mobileMenuButtonClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        //this.usuarioJSON =  this.usuarioService.usuarioJSON;
    }
    ngOnInit() {
        this.fotoEmpleado = this.usuarioService.empleadofoto;
        this.usuarioService.getEmpleado();
        this.usuarioService.getUsuario();
        //this.usuarioJSON =  this.usuarioService.usuarioJSON;
        //console.log(this.usuarioJSON);
        this.openMobileMenu = false;
        this.element = document.documentElement;
        this.cookieValue = this._cookiesService.get('lang');
        const val = this.listLang.filter(x => x.lang === this.cookieValue);
        this.countryName = val.map(element => element.text);
        if (val.length === 0) {
            if (this.flagvalue === undefined) {
                this.valueset = 'assets/images/flags/us.jpg';
            }
        }
        else {
            this.flagvalue = val.map(element => element.flag);
        }
    }
    get empleado() {
        return this.usuarioService.empleado;
    }
    get usuario() {
        return this.usuarioService.usuario;
    }
    setLanguage(text, lang, flag) {
        this.countryName = text;
        this.flagvalue = flag;
        this.cookieValue = lang;
        this.languageService.setLanguage(lang);
    }
    /**
     * Toggles the right sidebar
     */
    toggleRightSidebar() {
        this.settingsButtonClicked.emit();
    }
    /**
     * Toggle the menu bar when having mobile screen
     */
    toggleMobileMenu(event) {
        event.preventDefault();
        this.mobileMenuButtonClicked.emit();
        if (this.icono == 'fa fa-fw fa-bars') {
            this.icono = 'fas fa-arrow-right';
        }
        else if (this.icono == 'fas fa-arrow-right') {
            this.icono = 'fa fa-fw fa-bars';
        }
    }
    /**
     * Logout the user
     */
    logout() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: 'question',
            title: "¿Deseas cerrar la sesión?",
            showDenyButton: true,
            confirmButtonText: "Cerrar la sesión",
            confirmButtonColor: "#972727",
            denyButtonText: `Cancelar`,
            denyButtonColor: "#2c3136",
        }).then((result) => {
            if (result.isConfirmed) {
                this.usuarioService.logout();
            }
        });
    }
    /* Enviar email */
    Email() {
        const email = {
            asunto: 'Cambio de credenciales',
            titulo: 'Cambio de credenciales',
            email: 'kevineliasmejia@gmail.com',
            receptor: "Estimad@ : " + 'Kevin Elias Mejia Martinez',
            mensaje: 'Para mejorar la seguridad de nuestros sistemas, estamos implementando un cambio obligatorio de contraseñas. A continuación, te proporciono las instrucciones para completar este proceso de manera sencilla y segura',
            centro: 'Utilice este codigo para continuar con el proceso :',
            codigo: '99023992',
            abajo: 'Gracias por tu atención a este importante asunto.',
        };
        this.usuarioService.SendEmail(email).subscribe((resp) => {
            const Toast = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2500,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                    toast.addEventListener('mouseleave', (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
                }
            });
            Toast.fire({
                icon: 'success',
                text: '¡Email enviado!'
            });
        }, (err) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: 'error',
                title: 'Error',
                text: err,
            });
        });
    }
    //// metodo par abrir la modal ////
    openModal(content) {
        //hacer que la modal no se cierre al precionar fuera de ella -> backdrop: 'static', keyboard: false
        this.modalService.open(content, { size: 'xl', centered: true, backdrop: 'static', keyboard: false });
    }
    guardar() {
        if (this.formUsuario.valid) {
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
        /*
            this.cargoService.saveCargos(data).subscribe({
              next: (resp) => {
                this.modalService.dismissAll();
                this.formUsuario.reset();
                this.mostrar();
              },
              error: (error) => {
    
                this.mensajesService.mensajesSweet(
                  'error',
                  "Ups... Algo salió mal",
                  error
                )
              },
              complete: () => {
    
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                });
                Toast.fire({
                  icon: 'success',
                  text: 'Datos Guardados con exito'
                });
    
              }
            }); */
    }
    editando() {
        /*
            this.cargoService.editCargo(data.id, data).subscribe({
              next: (resp) => {
                this.formUsuario.reset();
                this.modalService.dismissAll();
                this.mostrar();
              },
              error: (error) => {
                this.mensajesService.mensajesSweet(
                  'error',
                  "Ups... Algo salió mal",
                  error
                )
    
              },
              complete: () => {
                const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                });
                Toast.fire({
                  icon: 'success',
                  text: 'Datos Guardados con exito'
                });
              }
            }); */
    }
    esCampoValido(campo) {
        const validarCampo = this.formUsuario.get(campo);
        return !(validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.valid) && (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched)
            ? 'is-invalid' : (validarCampo === null || validarCampo === void 0 ? void 0 : validarCampo.touched) ? 'is-valid' : '';
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
    /**
     * Fullscreen method
     */
    fullscreen() {
        document.body.classList.toggle('fullscreen-enable');
        if (!document.fullscreenElement && !this.element.mozFullScreenElement &&
            !this.element.webkitFullscreenElement) {
            if (this.element.requestFullscreen) {
                this.element.requestFullscreen();
            }
            else if (this.element.mozRequestFullScreen) {
                /* Firefox */
                this.element.mozRequestFullScreen();
            }
            else if (this.element.webkitRequestFullscreen) {
                /* Chrome, Safari and Opera */
                this.element.webkitRequestFullscreen();
            }
            else if (this.element.msRequestFullscreen) {
                /* IE/Edge */
                this.element.msRequestFullscreen();
            }
        }
        else {
            if (this.document.exitFullscreen) {
                this.document.exitFullscreen();
            }
            else if (this.document.mozCancelFullScreen) {
                /* Firefox */
                this.document.mozCancelFullScreen();
            }
            else if (this.document.webkitExitFullscreen) {
                /* Chrome, Safari and Opera */
                this.document.webkitExitFullscreen();
            }
            else if (this.document.msExitFullscreen) {
                /* IE/Edge */
                this.document.msExitFullscreen();
            }
        }
    }
}
TopbarComponent.ɵfac = function TopbarComponent_Factory(t) { return new (t || TopbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_authfake_service__WEBPACK_IMPORTED_MODULE_2__.AuthfakeauthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__.CookieService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_account_auth_services_usuario_service__WEBPACK_IMPORTED_MODULE_4__.UsuarioService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_global_mensajes_service__WEBPACK_IMPORTED_MODULE_5__.MensajesService)); };
TopbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: TopbarComponent, selectors: [["app-topbar"]], outputs: { settingsButtonClicked: "settingsButtonClicked", mobileMenuButtonClicked: "mobileMenuButtonClicked" }, decls: 48, vars: 23, consts: [["id", "page-topbar"], [1, "navbar-header"], [1, "d-flex"], [1, "navbar-brand-box"], ["routerLink", "/", 1, "logo", "logo-dark"], [1, "logo-sm"], ["src", "assets/images/logo-sm.png", "alt", "", "height", "45"], [1, "logo-lg"], ["src", "assets/images/logo-lg.png", "alt", "", "height", "40", 1, "logo-top"], ["routerLink", "/", 1, "logo", "logo-light"], ["type", "button", "id", "vertical-menu-btn", 1, "btn", "btn-sm", "px-3", "font-size-16", "header-item", 3, "click"], [1, "constainer", "d-flex"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block", "d-lg-none", "ms-2", "search"], ["type", "button", "id", "page-header-search-dropdown", "data-toggle", "dropdown", "aria-haspopup", "true", "ngbDropdownToggle", "", "aria-expanded", "false", 1, "btn", "header-item", "noti-icon"], [1, "mdi", "mdi-magnify"], ["ngbDropdownMenu", "", "aria-labelledby", "page-header-search-dropdown", 1, "dropdown-menu", "dropdown-menu-lg", "dropdown-menu-end", "p-0"], [1, "p-3"], [1, "m-0"], [1, "input-group"], ["type", "text", "placeholder", "Search ...", "aria-label", "Recipient's username", 1, "form-control"], [1, "input-group-append"], ["type", "submit", 1, "btn", "btn-primary"], ["ngbDropdown", "", 1, "dropdown", "d-inline-block"], [1, "content"], ["alt", "Header Avatar", 1, "rounded-circle", "header-profile-user", 3, "src"], [1, "vertical-line"], ["type", "button", "ngbDropdownToggle", "", "id", "page-header-user-dropdown", 1, "btn", "header-item", "header-profile-name"], [1, "user-text-name"], [1, "mdi", "mdi-chevron-down", "ms-1"], [1, "user-text"], ["ngbDropdownMenu", "", 1, "dropdown-menu", "dropdown-menu-end"], [3, "leyenda"], [3, "leyenda", "nuevo"], ["href", "javascript: void(0);", 1, "dropdown-item", "text-danger", 3, "click"], [1, "bx", "bx-power-off", "font-size-16", "align-middle", "me-1", "text-danger"]], template: function TopbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopbarComponent_Template_button_click_14_listener($event) { return ctx.toggleMobileMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "form", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](27, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](30, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](35, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](36, "i", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](39, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](41, "app-modal", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](42, "app-modal", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "app-modal", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "a", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function TopbarComponent_Template_a_click_44_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](45, "i", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](ctx.icono);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("src", ctx.fotoEmpleado !== "" ? ctx.fotoEmpleado : "./../../../assets/images/Default-Avatar.png", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](35, 13, ctx.empleado == null ? null : ctx.empleado.nombre, 0, 10), "", (ctx.empleado == null ? null : ctx.empleado.nombre.length) > 10 ? "..." : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](39, 17, ctx.empleado == null ? null : ctx.empleado.cargo.nombreCargo, 0, 15), "", (ctx.empleado == null ? null : ctx.empleado.cargo.nombreCargo.length) > 15 ? "..." : "", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("leyenda", "Datos");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("leyenda", "Credenciales")("nuevo", ctx.usuario == null ? null : ctx.usuario.nuevo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("leyenda", "AcercaDe");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 21, "Cerrar Sesi\u00F3n"), "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgForm, _modal_modal_component__WEBPACK_IMPORTED_MODULE_6__.ModalComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0b3BiYXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 40125:
/*!********************************************************!*\
  !*** ./src/app/layouts/vertical/vertical.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalComponent": () => (/* binding */ VerticalComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _layouts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts.model */ 12908);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/event.service */ 63997);
/* harmony import */ var _topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../topbar/topbar.component */ 69514);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 8062);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer/footer.component */ 42234);
/* harmony import */ var _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../rightsidebar/rightsidebar.component */ 83161);









/**
 * Vertical component
 */
class VerticalComponent {
    constructor(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.isCondensed = false;
        this.router.events.forEach((event) => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd) {
                document.body.classList.remove('sidebar-enable');
            }
        });
    }
    ngOnInit() {
        this.sidebartype = _layouts_model__WEBPACK_IMPORTED_MODULE_0__.SIDEBAR_TYPE;
        // listen to event and change the layout, theme, etc
        this.eventService.subscribe('changeSidebartype', (layout) => {
            this.sidebartype = layout;
            this.changeSidebar(this.sidebartype);
        });
        this.changeSidebar(this.sidebartype);
        document.body.setAttribute('data-layout', 'vertical');
    }
    isMobile() {
        const ua = navigator.userAgent;
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua);
    }
    ngAfterViewInit() {
    }
    /**
     * on settings button clicked from topbar
     */
    onSettingsButtonClicked() {
        document.body.classList.toggle('right-bar-enabled');
    }
    changeSidebar(value) {
        switch (value) {
            case "light":
                document.body.setAttribute('data-sidebar', 'light');
                document.body.setAttribute('data-topbar', 'dark');
                document.body.removeAttribute('data-sidebar-size');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "compact":
                document.body.setAttribute('data-sidebar-size', 'small');
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "dark":
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.removeAttribute('data-sidebar-size');
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "icon":
                document.body.classList.add('vertical-collpsed');
                document.body.setAttribute('data-sidebar', 'dark');
                document.body.removeAttribute('data-layout-size');
                document.body.setAttribute('data-keep-enlarged', "true");
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-scrollable');
                break;
            case "colored":
                document.body.classList.remove('sidebar-enable');
                document.body.classList.remove('vertical-collpsed');
                document.body.setAttribute('data-sidebar', 'colored');
                document.body.removeAttribute('data-layout-size');
                document.body.removeAttribute('data-keep-enlarged');
                document.body.removeAttribute('data-topbar');
                document.body.removeAttribute('data-layout-scrollable');
                document.body.removeAttribute('data-sidebar-size');
                break;
            default:
                document.body.setAttribute('data-sidebar', 'dark');
                break;
        }
    }
    /**
     * On mobile toggle button clicked
     */
    onToggleMobileMenu() {
        this.isCondensed = !this.isCondensed;
        document.body.classList.toggle('sidebar-enable');
        document.body.classList.toggle('vertical-collpsed');
        if (window.screen.width <= 768) {
            document.body.classList.remove('vertical-collpsed');
        }
    }
}
VerticalComponent.ɵfac = function VerticalComponent_Factory(t) { return new (t || VerticalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_core_services_event_service__WEBPACK_IMPORTED_MODULE_1__.EventService)); };
VerticalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VerticalComponent, selectors: [["app-vertical"]], decls: 8, vars: 1, consts: [["id", "layout-wrapper"], [3, "settingsButtonClicked", "mobileMenuButtonClicked"], [3, "isCondensed"], [1, "main-content"], [1, "page-content"]], template: function VerticalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "app-topbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("settingsButtonClicked", function VerticalComponent_Template_app_topbar_settingsButtonClicked_1_listener() { return ctx.onSettingsButtonClicked(); })("mobileMenuButtonClicked", function VerticalComponent_Template_app_topbar_mobileMenuButtonClicked_1_listener() { return ctx.onToggleMobileMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "app-sidebar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "app-rightsidebar");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isCondensed", ctx.isCondensed);
    } }, directives: [_topbar_topbar_component__WEBPACK_IMPORTED_MODULE_2__.TopbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__.SidebarComponent, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _rightsidebar_rightsidebar_component__WEBPACK_IMPORTED_MODULE_5__.RightsidebarComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXJ0aWNhbC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 54862:
/*!**************************************************************!*\
  !*** ./src/app/modules/empleado/service/empleado.service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoService": () => (/* binding */ EmpleadoService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 83981);





class EmpleadoService {
    constructor(http) {
        this.http = http;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.listDepartamentos = [];
        this.listEmpleados = [];
        this.listCargos = [];
    }
    //Obtener empleados para la tabla
    getEmpleados() {
        this.http
            .get(`${this.baseUrl}/empleado/lista`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp.content))
            .subscribe((empleados) => {
            this.listEmpleados = empleados; // Actualiza la propiedad listEmpleados
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
        }, (error) => {
            console.error("Error al obtener los empleados:", error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().close();
        });
    }
    getCargos() {
        this.http
            .get(`${this.baseUrl}/cargo`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp))
            .subscribe((cargos) => {
            this.listCargos = cargos;
        }, (error) => {
            console.error("Error al obtener los cargos:", error);
        });
    }
    getDepartamentos() {
        this.http
            .get(`${this.baseUrl}/depto`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)((resp) => resp))
            .subscribe((departamentos) => {
            this.listDepartamentos = departamentos;
        }, (error) => {
            console.error("Error al obtener los departamentos:", error);
        });
    }
    /*   getEstadoNombre(nombre: string): Observable<Object> {
        return this.http.get(`${this.baseUrl}/estados/PorID/${nombre}`);
      } */
    postEmpleado(empleado) {
        return this.http.post(`${this.baseUrl}/empleado/insertar`, empleado);
    }
    postEmpleadoImagen(empleado, file) {
        const formData = new FormData();
        formData.append('imagen', file);
        formData.append('empleado', JSON.stringify(empleado));
        return this.http.post(`${this.baseUrl}/empleado/insertarconImagen`, formData);
    }
    putEmpleado(empleado) {
        return this.http.put(`${this.baseUrl}/empleado/editar/${empleado.codigoEmpleado}`, empleado);
    }
    putEmpleadoImagen(empleado, file) {
        const formData = new FormData();
        formData.append('imagen', file);
        formData.append('empleado', JSON.stringify(empleado));
        return this.http.put(`${this.baseUrl}/empleado/editarconImagen/${empleado.codigoEmpleado}`, formData);
    }
}
EmpleadoService.ɵfac = function EmpleadoService_Factory(t) { return new (t || EmpleadoService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient)); };
EmpleadoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: EmpleadoService, factory: EmpleadoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 88345:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/solicitud-vehiculo/services/solicitud-vehiculo.service.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SolicitudVehiculoService": () => (/* binding */ SolicitudVehiculoService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88377);
/* harmony import */ var _account_auth_models_usuario_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../account/auth/models/usuario.models */ 18545);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 83981);






class SolicitudVehiculoService {
    constructor(http) {
        this.http = http;
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.baseUrl;
        this.listSoliVehiculo = [];
        this.listSoliVehiculoRol = [];
        this.listVehiculos = [];
        this.listMotorista = [];
        this.listLogSoliVe = [];
    }
    get codUsuario() {
        return localStorage.getItem("codUsuario" || 0);
    }
    getUsuarioSV() {
        return this.http
            .get(`${this.url}/usuario/${this.codUsuario}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((usuario) => {
            const { codigoUsuario, nombre, nuevo, role, token, empleado } = usuario;
            return new _account_auth_models_usuario_models__WEBPACK_IMPORTED_MODULE_1__.Usuario(codigoUsuario, nombre, "", nuevo, role, token, empleado);
        }));
    }
    // Servicio para obtener todas las solicitudes de vehiculo
    /*getSolicitudesVehiculo(estado: number) {
      if (estado != null){
        this.http
          .get(`${this.url}/solicitudvehiculo/lista/${estado}`)
          .pipe(map((resp: any) => resp as ISolicitudVehiculo[]))
          .subscribe(
            (soliVe: ISolicitudVehiculo[]) => {
              this.listSoliVehiculo = soliVe;
            },
            (error) => {
              console.log("Error al obtener las solicitudes de vehiculo", error);
            }
          );
      }else {
        this.http
          .get(`${this.url}/solicitudvehiculo/lista`)
          .pipe(map((resp: any) => resp as ISolicitudVehiculo[]))
          .subscribe(
            (soliVe: ISolicitudVehiculo[]) => {
              this.listSoliVehiculo = soliVe;
            },
            (error) => {
              console.log("Error al obtener las solicitudes de vehiculo", error);
            }
          );
      }
    }*/
    getSolicitudesVehiculo(estado) {
        // Mostrar la alerta de Swal antes de realizar la solicitud
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la información...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().showLoading();
            }
        });
        let requestUrl = `${this.url}/solicitudvehiculo/lista`;
        if (estado != null) {
            requestUrl = `${this.url}/solicitudvehiculo/lista/${estado}`;
        }
        return this.http
            .get(requestUrl)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp))
            .toPromise() // Convertir el observable en una Promesa
            .then((soliVe) => {
            // Cierra la alerta de Swal cuando se obtienen las solicitudes
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
            this.listSoliVehiculo = soliVe;
            return this.listSoliVehiculo; // Devuelve las solicitudes como resultado de la Promesa
        })
            .catch((error) => {
            // Cierra la alerta de Swal en caso de error y lanza el error
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
            console.error('Error al obtener las solicitudes de vehículo', error);
            throw error; // Lanza el error para que el componente lo maneje
        });
    }
    // Servicio para obtener los estados
    obtenerEstados() {
        return this.http.get((this.url) + '/solicitudvehiculo/estados');
    }
    obtenerVehiculos() {
        this.http
            .get(`${this.url}/vehiculo/clase`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp))
            .subscribe((vehiculo) => {
            this.listVehiculos = vehiculo;
        }, (error) => {
            console.log("Error al obtener los vehiculos", error);
        });
    }
    obtenerMotoristas() {
        this.http
            .get(`${this.url}/empleado/motoristas`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp))
            .subscribe((empleados) => {
            this.listMotorista = empleados; // Actualiza la propiedad listEmpleados
        }, (error) => {
            console.error("Error al obtener los empleados:", error);
        });
    }
    filtroPlacasVehiculo(clase, fechaSalida) {
        return this.http
            .get(`${this.url}/vehiculo/disponibilidad?claseName=${clase}&fechaSalida=${fechaSalida}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp));
    }
    getDepa() {
        return this.http.get("assets/pais/ubicacionPaisSV2023.json");
    }
    registrarSoliVe(solicitudVehiculo) {
        return this.http.post(`${this.url}/solicitudvehiculo/insert`, solicitudVehiculo);
    }
    enviarPdfPasajeros(multiPart) {
        return this.http.post(`${this.url}/documentosoli/upload`, multiPart);
    }
    updateSolicitudVehiculo(data) {
        return this.http.put(`${this.url}/solicitudvehiculo/edit/${data.codigoSolicitudVehiculo}`, data);
    }
    /*getSolicitudesRol(rol: string){
      this.http
          .get(`${this.url}/solicitudvehiculo/listado/${rol}`)
          .pipe(map((resp: any) => resp as ISolicitudVehiculo[]))
          .subscribe(
            (soliVe: ISolicitudVehiculo[]) => {
              this.listSoliVehiculoRol = soliVe;
            },
            (error) => {
              console.log("Error al obtener las solicitudes de vehiculo", error);
            }
          );
    }*/
    getSolicitudesRol(rol) {
        // Mostrar la alerta de Swal antes de realizar la solicitud
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la información...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().showLoading();
            }
        });
        return this.http
            .get(`${this.url}/solicitudvehiculo/listado/${rol}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp))
            .toPromise() // Convertir el observable en una Promesa
            .then((soliVe) => {
            // Cierra la alerta de Swal cuando se obtienen las solicitudes
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
            this.listSoliVehiculoRol = soliVe;
            return this.listSoliVehiculoRol; // Devuelve las solicitudes como resultado de la Promesa
        })
            .catch((error) => {
            // Cierra la alerta de Swal en caso de error y lanza el error
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
            console.error('Error al obtener las solicitudes de vehículo', error);
            throw error; // Lanza el error para que el componente lo maneje
        });
    }
    updateSolciitudVehiculo(data) {
        return this.http.put(`${this.url}/solicitudvehiculo/estadoupdate`, data);
    }
    updateSolciitudVehiculoSinVale(data) {
        return this.http.put(`${this.url}/solicitudvehiculo/updatesinvale`, data);
    }
    registrarSolicitudVale(solicitudVale) {
        return this.http.post(`${this.url}/solicitudvale/insertar`, solicitudVale);
    }
    obtenerDocumentPdf(nameDocu) {
        return this.http.get(`${this.url}/documentosoli/document/${nameDocu}`, { responseType: 'blob' });
    }
    modificarPdfPasajeros(multiPart) {
        return this.http.post(`${this.url}/documentosoli/edit`, multiPart);
    }
    getLogSoli(codigoSoliVe) {
        // Mostrar la alerta de Swal antes de realizar la solicitud
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            title: 'Espere un momento!',
            html: 'Se está procesando la información...',
            didOpen: () => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().showLoading();
            }
        });
        return this.http
            .get(`${this.url}/solicitudvehiculo/log/${codigoSoliVe}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((resp) => resp))
            .toPromise() // Convertir el observable en una Promesa
            .then((log) => {
            // Cierra la alerta de Swal cuando se obtienen las solicitudes
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
            this.listLogSoliVe = log;
            return this.listLogSoliVe; // Devuelve las solicitudes como resultado de la Promesa
        })
            .catch((error) => {
            // Cierra la alerta de Swal en caso de error y lanza el error
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().close();
            console.error('Error al obtener el log de la solicitud', error);
            throw error; // Lanza el error para que el componente lo maneje
        });
    }
}
SolicitudVehiculoService.ɵfac = function SolicitudVehiculoService_Factory(t) { return new (t || SolicitudVehiculoService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
SolicitudVehiculoService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: SolicitudVehiculoService, factory: SolicitudVehiculoService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 66548:
/*!***************************************************!*\
  !*** ./src/app/shared/global/mensajes.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MensajesService": () => (/* binding */ MensajesService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 98806);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ 11149);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);



class MensajesService {
    constructor() { }
    mensajesToast(icono = "info", title = "Registrado con éxito!") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: icono,
            title: title,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            width: 400,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().stopTimer));
                toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().resumeTimer));
            },
        });
    }
    mensajesSweet(icono = "info", title = "Registrado con éxito!", text = "Datos almacenados exitosamente", boton = "Ok") {
        sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
            icon: icono,
            title: title,
            text: text,
            confirmButtonText: boton,
            confirmButtonColor: "#972727",
        });
    }
    mensajesConfirmar(icono = "warning", title = "¿Está seguro de guardar?", label = "Algunos datos no se podrán revertir, digite: ", palabraClave = "guardar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            const { value: valorPalabra } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
    mensajeAsignacionAnular(icono = "warning", title = "¿Está seguro de anular la solicitud?", label = "La acción no se podrá deshacer, digite: ", palabraClave = "anular") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            const { value: valorPalabra } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
    mensajeAsignar(icono = "warning", title = "¿Esta seguro de asignar los vales?", label = "La acción no se podrá deshacer, digite: ", palabraClave = "confirmar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
            }).then((result) => {
                if (result.isConfirmed) {
                    estado = true;
                }
                else {
                    estado = false;
                }
            });
            return estado;
        });
    }
    mensajeSolicitarAprobacion(icono = "warning", title = "¿Está seguro de enviar para Aprobar?", label = "La acción no se podrá deshacer, digite: ", palabraClave = "confirmar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
            }).then((result) => {
                if (result.isConfirmed) {
                    estado = true;
                }
                else {
                    estado = false;
                }
            });
            return estado;
        });
    }
    mensajeSolicitudAprobada(cantVales, icono = "warning", title = "Aprobará la solicutd con " + cantVales + " Vales", label = "La acción no se podrá deshacer, digite: ", palabraClave = "confirmar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
            }).then((result) => {
                if (result.isConfirmed) {
                    estado = true;
                }
                else {
                    estado = false;
                }
            });
            return estado;
        });
    }
    mensajeSolicitudRevision(icono = "warning", title = "¿Está seguro de enviar para Revisar?", label = "La acción no se podrá deshacer, digite: ", palabraClave = "confirmar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
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
            }).then((result) => {
                if (result.isConfirmed) {
                    estado = true;
                }
                else {
                    estado = false;
                }
            });
            return estado;
        });
    }
    mensajeAprobar(icono = "warning", title = "¿Está seguro de aprobar la solicitud?", label = "La acción no se podrá deshacer, digite: ", palabraClave = "confirmar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            const { value: valorPalabra } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: icono,
                title: title,
                input: "text",
                inputLabel: label + palabraClave,
                inputValue: "",
                showCancelButton: true,
                confirmButtonColor: '#972727',
                confirmButtonText: "Aceptar",
                cancelButtonColor: '#2c3136',
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
    mensajeRevision(icono = "warning", title = "¿Está seguro de mandar la solicitud a la secretaria para revisión?", label = "La acción no se podrá deshacer, digite: ", palabraClave = "confirmar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            const { value: valorPalabra } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: icono,
                title: title,
                input: "text",
                inputLabel: label + palabraClave,
                inputValue: "",
                showCancelButton: true,
                confirmButtonColor: '#972727',
                confirmButtonText: "Aceptar",
                cancelButtonColor: '#2c3136',
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
    mensajeAnular(icono = "warning", title = "¿Está seguro de anular la solicitud?", label = "La acción no se podrá deshacer, digite: ", palabraClave = "confirmar") {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let estado = false;
            const palabra = palabraClave;
            const { value: valorPalabra } = yield sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                icon: icono,
                title: title,
                input: "text",
                inputLabel: label + palabraClave,
                inputValue: "",
                showCancelButton: true,
                confirmButtonColor: '#972727',
                confirmButtonText: "Aceptar",
                cancelButtonColor: '#2c3136',
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
MensajesService.ɵfac = function MensajesService_Factory(t) { return new (t || MensajesService)(); };
MensajesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: MensajesService, factory: MensajesService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 33005:
/*!******************************************************!*\
  !*** ./src/app/shared/ui/loader/loader.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/loader.service */ 97422);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);



function LoaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.loading = true;
        this.loaderService.isLoading.subscribe((v) => {
            setTimeout(() => {
                this.loading = v;
            }, 1500);
        });
    }
    ngOnInit() {
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 1, vars: 1, consts: [["id", "preloader", 4, "ngIf"], ["id", "preloader"], ["id", "status"], [1, "spinner-chase"], [1, "chase-dot"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 9, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 11950:
/*!************************************************************!*\
  !*** ./src/app/shared/ui/pagetitle/pagetitle.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagetitleComponent": () => (/* binding */ PagetitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 28267);


function PagetitleComponent_ng_container_7_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.label);
} }
function PagetitleComponent_ng_container_7_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", item_r1.label, " ");
} }
function PagetitleComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PagetitleComponent_ng_container_7_li_1_Template, 3, 1, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PagetitleComponent_ng_container_7_li_2_Template, 2, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.active);
} }
class PagetitleComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagetitleComponent.ɵfac = function PagetitleComponent_Factory(t) { return new (t || PagetitleComponent)(); };
PagetitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagetitleComponent, selectors: [["app-page-title"]], inputs: { breadcrumbItems: "breadcrumbItems", title: "title" }, decls: 8, vars: 2, consts: [[1, "row"], [1, "col-12"], [1, "page-title-box", "d-flex", "align-items-center", "justify-content-between"], [1, "mb-0", "font-size-18"], [1, "page-title-right"], [1, "breadcrumb", "m-0"], [4, "ngFor", "ngForOf"], ["class", "breadcrumb-item", 4, "ngIf"], ["class", "breadcrumb-item active", 4, "ngIf"], [1, "breadcrumb-item"], ["href", "javascript: void(0);"], [1, "breadcrumb-item", "active"]], template: function PagetitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PagetitleComponent_ng_container_7_Template, 3, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.breadcrumbItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdldGl0bGUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 63091:
/*!****************************************!*\
  !*** ./src/app/shared/ui/ui.module.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UIModule": () => (/* binding */ UIModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 44070);
/* harmony import */ var _pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagetitle/pagetitle.component */ 11950);
/* harmony import */ var _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader/loader.component */ 33005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);






class UIModule {
}
UIModule.ɵfac = function UIModule_Factory(t) { return new (t || UIModule)(); };
UIModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UIModule });
UIModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDatepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTimepickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UIModule, { declarations: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbCollapseModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDatepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbTimepickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbDropdownModule], exports: [_pagetitle_pagetitle_component__WEBPACK_IMPORTED_MODULE_0__.PagetitleComponent, _loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent] }); })();


/***/ }),

/***/ 18260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'http://localhost:8080/api',
    defaultauth: 'fackbackend',
    firebaseConfig: {
        apiKey: '',
        authDomain: '',
        databaseURL: '',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: ''
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 90271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 34750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(90271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map