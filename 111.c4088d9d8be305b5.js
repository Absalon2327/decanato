"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[111],{94111:(x,_,s)=>{s.r(_),s.d(_,{ProveedorModule:()=>pe});var n=s(86019),u=s(56225),e=s(83668),g=s(38053),f=s(18260),v=s(44522);let l=(()=>{class o{constructor(t){this.http=t,this.baseUrl=f.N.baseUrl,this.listProveedor=[]}getProveedorsPaginacion(){this.http.get(`${this.baseUrl}/proveedor/lista`).pipe((0,g.U)(t=>t.content)).subscribe(t=>{this.listProveedor=t})}getProveedors(){this.http.get(`${this.baseUrl}/proveedor/listasinpagina`).pipe((0,g.U)(t=>t)).subscribe(t=>{this.listProveedor=t})}getProveedorsById(t){return""!=t?this.http.get(`${this.baseUrl}/proveedor/lista/${t}`).pipe((0,g.U)(r=>r)):this.http.get(`${this.baseUrl}/proveedor/lista`).pipe((0,g.U)(r=>r))}guardar(t){return this.http.post(`${this.baseUrl}/proveedor/insertar`,t)}modificar(t){return this.http.put(`${this.baseUrl}/proveedor/editar/${t.id}`,t)}borrar(t){return this.http.delete(`${this.baseUrl}/proveedor/eliminar/${t.id}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(v.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var m=s(34576),d=s(11950),i=s(49133),I=s(64762),T=s(24017),M=s(1659),Z=s.n(M),h=s(20154),A=s(66548),C=s(48045);function N(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"i",36),e.NdJ("click",function(){return e.CHM(t),e.oxw(3).restaurarAlerts()}),e.qZA()}}function E(o,a){if(1&o&&(e.TgZ(0,"div",34),e.YNc(1,N,1,0,"i",35),e.qZA()),2&o){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.siMuestraAlertas())}}function J(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",38),e.TgZ(1,"strong"),e._uU(2,"Importante!"),e.qZA(),e._uU(3),e.TgZ(4,"button",39),e.NdJ("click",function(){e.CHM(t);const c=e.oxw().$implicit;return e.oxw(2).CambiarAlert(c)}),e.qZA(),e.qZA()}if(2&o){const t=e.oxw().$implicit;e.Gre("alert alert-",t.type," alert-dismissible fade show"),e.xp6(3),e.hij(" ",t.message," ")}}function S(o,a){if(1&o&&(e.TgZ(0,"div"),e.YNc(1,J,5,4,"div",37),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngIf",t.show)}}function P(o,a){1&o&&(e.TgZ(0,"div"),e._UZ(1,"input",40),e.qZA())}function O(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1,"Requiere un tipo de proveedor"),e.qZA())}function Q(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Requiere un nombre "),e.qZA())}function Y(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Digite m\xe1s de 2 caracteres "),e.qZA())}function k(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Limite 200 caracteres "),e.qZA())}function L(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1,"Solamente letras, numeros y respecte los espacios "),e.qZA())}function w(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Limite 200 caracteres "),e.qZA())}function F(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1,"Solamente nombres o apellidos correctos y respecte los espacios "),e.qZA())}function G(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Requiere un tel\xe9fono "),e.qZA())}function j(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Solamente se permiten numeros enteros "),e.qZA())}function B(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," El tel\xe9fono debe comenzar con 7, 6 o 2 y tener 8 digitos "),e.qZA())}function $(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Requiere un email "),e.qZA())}function D(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Digite m\xe1s de 2 caracteres "),e.qZA())}function R(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Limite 100 caracteres "),e.qZA())}function V(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1,"Email no valido "),e.qZA())}function H(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Requiere una direcci\xf3n "),e.qZA())}function z(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Digite m\xe1s de 2 caracteres "),e.qZA())}function X(o,a){1&o&&(e.TgZ(0,"span"),e._uU(1," Limite 750 caracteres "),e.qZA())}function W(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div",3),e.TgZ(1,"h5",4),e._uU(2),e.qZA(),e.YNc(3,E,2,1,"div",5),e.TgZ(4,"button",6),e.NdJ("click",function(){return e.CHM(t).$implicit.dismiss("Cross click")}),e.qZA(),e.qZA(),e.TgZ(5,"div",7),e.YNc(6,S,2,1,"div",8),e.TgZ(7,"form",9),e.NdJ("ngSubmit",function(){return e.CHM(t),e.oxw().guardar()}),e.TgZ(8,"div",10),e.YNc(9,P,2,0,"div",11),e.TgZ(10,"div",12),e._UZ(11,"input",13),e.TgZ(12,"label",14),e._uU(13,"Gasolinera"),e.qZA(),e._UZ(14,"input",15),e.TgZ(15,"label",16),e._uU(16,"UES"),e.qZA(),e.TgZ(17,"div",17),e.YNc(18,O,2,0,"span",11),e.qZA(),e.qZA(),e.TgZ(19,"div",18),e.TgZ(20,"label",19),e._uU(21,"Nombre: "),e.TgZ(22,"span",20),e._uU(23,"*"),e.qZA(),e.qZA(),e._UZ(24,"input",21),e.TgZ(25,"div",17),e.YNc(26,Q,2,0,"span",11),e.YNc(27,Y,2,0,"span",11),e.YNc(28,k,2,0,"span",11),e.YNc(29,L,2,0,"span",11),e.qZA(),e.qZA(),e.TgZ(30,"div",18),e.TgZ(31,"label",22),e._uU(32,"Persona encargada:"),e.qZA(),e._UZ(33,"input",23),e.TgZ(34,"div",17),e.YNc(35,w,2,0,"span",11),e.YNc(36,F,2,0,"span",11),e.qZA(),e.qZA(),e.TgZ(37,"div",18),e.TgZ(38,"label",24),e._uU(39,"Tel\xe9fono: "),e.TgZ(40,"span",20),e._uU(41,"*"),e.qZA(),e.qZA(),e._UZ(42,"input",25),e.TgZ(43,"div",17),e.YNc(44,G,2,0,"span",11),e.YNc(45,j,2,0,"span",11),e.YNc(46,B,2,0,"span",11),e.qZA(),e.qZA(),e.TgZ(47,"div",18),e.TgZ(48,"label",26),e._uU(49,"Email: "),e.TgZ(50,"span",20),e._uU(51,"*"),e.qZA(),e.qZA(),e._UZ(52,"input",27),e.TgZ(53,"div",17),e.YNc(54,$,2,0,"span",11),e.YNc(55,D,2,0,"span",11),e.YNc(56,R,2,0,"span",11),e.YNc(57,V,2,0,"span",11),e.qZA(),e.qZA(),e.TgZ(58,"div",28),e.TgZ(59,"label",29),e._uU(60,"Direcci\xf3n: "),e.TgZ(61,"span",20),e._uU(62,"*"),e.qZA(),e.qZA(),e._UZ(63,"textarea",30),e.TgZ(64,"div",17),e.YNc(65,H,2,0,"span",11),e.YNc(66,z,2,0,"span",11),e.YNc(67,X,2,0,"span",11),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(68,"div",31),e.TgZ(69,"button",32),e._uU(70),e.qZA(),e.TgZ(71,"button",33),e.NdJ("click",function(){return e.CHM(t).$implicit.close("Close click")}),e._uU(72),e.qZA(),e.qZA()}if(2&o){const t=e.oxw();let r,c;e.xp6(2),e.hij("",t.leyenda," Proveedor"),e.xp6(1),e.Q6J("ngIf",t.alerts),e.xp6(3),e.Q6J("ngForOf",t.alerts),e.xp6(1),e.Q6J("formGroup",t.formularioGeneral),e.xp6(2),e.Q6J("ngIf",null==t.proveedor?null:t.proveedor.id),e.xp6(2),e.Tol(t.esCampoValido("tipo")),e.Q6J("value",13),e.xp6(3),e.Tol(t.esCampoValido("tipo")),e.Q6J("value",14),e.xp6(4),e.Q6J("ngIf",null==(r=t.formularioGeneral.get("tipo"))||null==r.errors?null:r.errors.required),e.xp6(6),e.Tol(t.esCampoValido("nombre")),e.xp6(2),e.Q6J("ngIf",t.formularioGeneral.get("nombre").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("nombre").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("nombre").hasError("maxlength")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("nombre").hasError("pattern")),e.xp6(4),e.Tol(t.esCampoValido("encargado")),e.xp6(2),e.Q6J("ngIf",t.formularioGeneral.get("encargado").hasError("maxlength")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("encargado").hasError("pattern")),e.xp6(6),e.Tol(t.esCampoValido("telefono")),e.xp6(2),e.Q6J("ngIf",t.formularioGeneral.get("telefono").hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(c=t.formularioGeneral.get("telefono"))||null==c.errors?null:c.errors.pattern),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("telefono").hasError("invalidPhoneNumber")),e.xp6(6),e.Tol(t.esCampoValido("email")),e.xp6(2),e.Q6J("ngIf",t.formularioGeneral.get("email").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("email").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("email").hasError("maxlength")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("email").hasError("pattern")),e.xp6(6),e.Tol(t.esCampoValido("direccion")),e.xp6(2),e.Q6J("ngIf",t.formularioGeneral.get("direccion").hasError("required")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("direccion").hasError("minlength")),e.xp6(1),e.Q6J("ngIf",t.formularioGeneral.get("direccion").hasError("maxlength")),e.xp6(3),e.hij(" ","Editar"!==t.leyenda?"Guardar":"Modificar"," "),e.xp6(2),e.hij(" ","Editar"!==t.leyenda?"Cerrar":"Cancelar"," ")}}let q=(()=>{class o{constructor(t,r,c,p){this.modalService=t,this.fb=r,this.proveedorService=c,this.mensajesService=p,this.isEmail=T.Eo,this.isNombre=T.BD,this.isProveedor=T.Df,this.alerts=[{id:1,type:"info",message:" Seleccione un tipo de proveedor y complete los campos obligatorios (*).",show:!1}],this.formularioGeneral=this.iniciarFormulario()}ngOnInit(){"Editar"==this.leyenda&&this.formularioGeneral.patchValue(this.proveedor)}iniciarFormulario(){return this.fb.group({id:[""],tipo:["1",[i.kI.required]],nombre:["",[i.kI.required,i.kI.pattern(this.isProveedor),i.kI.minLength(2),i.kI.maxLength(200)]],encargado:["",[i.kI.maxLength(200),i.kI.pattern(this.isNombre)]],telefono:["",[i.kI.required,this.validatePhoneNumber]],email:["",[i.kI.required,i.kI.minLength(2),i.kI.maxLength(100),i.kI.pattern(this.isEmail)]],direccion:["",[i.kI.required,i.kI.minLength(2),i.kI.maxLength(750)]]})}guardar(){var t;return(0,I.mG)(this,void 0,void 0,function*(){if(!this.formularioGeneral.valid)return this.mensajesService.mensajesToast("warning","Complete los que se indican"),Object.values(this.formularioGeneral.controls).forEach(r=>r.markAsTouched());(null===(t=this.proveedor)||void 0===t?void 0:t.id)?this.editando():this.registrando()})}registrando(){const t=this.formularioGeneral.value;let r;t.estado=8,r=Z().fire({title:"Espere un momento!",html:"Se est\xe1 procesando la informaci\xf3n...",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!1,showConfirmButton:!1,didOpen:()=>{Z().showLoading()}}),this.proveedorService.guardar(t).subscribe({next:c=>{r.close(),this.proveedorService.getProveedors(),this.mensajesService.mensajesToast("success","Registro agregado"),this.modalService.dismissAll(),this.limpiarCampos()},error:c=>{r.close(),this.mensajesService.mensajesSweet("error","Ups... Algo sali\xf3 mal",c.error.message)}})}editando(){const t=this.formularioGeneral.value;let r;t.estado=this.proveedor.estado,r=Z().fire({title:"Espere un momento!",html:"Se est\xe1 procesando la informaci\xf3n...",allowOutsideClick:!1,allowEscapeKey:!1,showCancelButton:!1,showConfirmButton:!1,didOpen:()=>{Z().showLoading()}}),this.proveedorService.modificar(t).subscribe({next:c=>{r.close(),this.proveedorService.getProveedors(),this.mensajesService.mensajesToast("success","Registro modificado"),this.modalService.dismissAll(),this.limpiarCampos()},error:c=>{r.close(),this.mensajesService.mensajesSweet("error","Ups... Algo sali\xf3 mal",c.error.message)}})}esCampoValido(t){const r=this.formularioGeneral.get(t);return!(null==r?void 0:r.valid)&&(null==r?void 0:r.touched)?"is-invalid":(null==r?void 0:r.touched)?"is-valid":""}limpiarCampos(){this.formularioGeneral.reset()}getClassOf(){return"Editar"==this.leyenda?"btn btn-info btn-sm btn-rounded boton-cuadrado mx-1":"btn-primary"}getIconsOf(){return"Editar"==this.leyenda?"<i class='mdi mdi-18px mdi-book-edit-outline'></i>":"Agregar"}CambiarAlert(t){t.show=!t.show}restaurarAlerts(){this.alerts.forEach(t=>{t.show=!0})}siMuestraAlertas(){return this.alerts.every(t=>t.show)}validatePhoneNumber(t){return/^[726][0-9]{7}$/.test(t.value)?null:{invalidPhoneNumber:!0}}openModal(t,r){this.proveedor=r,"Editar"!=this.leyenda&&this.limpiarCampos(),this.modalService.open(t,{centered:!0,size:"",backdrop:"static",keyboard:!1})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.FF),e.Y36(i.qu),e.Y36(l),e.Y36(A.O))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-modal"]],inputs:{proveedor:"proveedor",leyenda:"leyenda"},decls:4,vars:3,consts:[["type","button",1,"btn","btn-rounded",3,"ngClass","innerHTML","click"],["role","document"],["content",""],[1,"modal-header"],[1,"modal-title","mt-0"],["class","btn-alerta",4,"ngIf"],["type","button","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[4,"ngFor","ngForOf"],["id","formProveedor","name","formProveedor",3,"formGroup","ngSubmit"],[1,"row"],[4,"ngIf"],[1,"mb-4","mx-auto","text-center"],["type","radio","name","tipo","id","tipo1","autocomplete","off","formControlName","tipo","checked","",1,"btn-check",3,"value"],["for","tipo1",1,"btn","btn-outline-dark","myconfig2"],["type","radio","name","tipo","id","tipo2","autocomplete","off","formControlName","tipo",1,"btn-check",3,"value"],["for","tipo2",1,"btn","btn-outline-primary","myconfig1"],[1,"invalid-feedback"],[1,"mb-4","col-md-6"],["for","nombre"],[1,"text-danger"],["id","nombre","name","nombre","maxlength","200","minlength","2","type","text","placeholder","Nombre","formControlName","nombre",1,"form-control"],["for","encargado"],["id","encargado","name","encargado","maxlength","200","minlength","2","type","text","placeholder","Encargado","formControlName","encargado",1,"form-control"],["for","telefono"],["id","telefono","name","telefono","maxlength","9","mask","0000-0000","type","text","placeholder","Telefono","formControlName","telefono",1,"form-control"],["for","email"],["id","email","name","email","maxlength","100","type","text","placeholder","Email","formControlName","email",1,"form-control"],[1,"mb-4","col-md-12"],["for","direccion"],["row","3","maxlength","750","placeholder","Direcci\xf3n","formControlName","direccion",1,"form-control"],[1,"modal-footer"],["type","submit","form","formProveedor",1,"btn","btn-primary","w-sm","me-2"],[1,"btn","btn-dark","w-sm",3,"click"],[1,"btn-alerta"],["class","mdi mdi-18px mdi-lightbulb-on-outline custom-cursor","ngbTooltip","Mostrar Ayuda",3,"click",4,"ngIf"],["ngbTooltip","Mostrar Ayuda",1,"mdi","mdi-18px","mdi-lightbulb-on-outline","custom-cursor",3,"click"],["role","alert",3,"class",4,"ngIf"],["role","alert"],["type","button","aria-label","Close",1,"btn-close",3,"click"],["id","id","name","id","type","hidden","readonly","true","formControlName","id",1,"form-control"]],template:function(t,r){if(1&t){const c=e.EpF();e.TgZ(0,"button",0),e.NdJ("click",function(){e.CHM(c);const y=e.MAs(3);return r.openModal(y,r.proveedor)}),e._uU(1),e.qZA(),e.YNc(2,W,73,40,"ng-template",1,2,e.W1O)}2&t&&(e.Q6J("ngClass",r.getClassOf())("innerHTML",r.getIconsOf(),e.oJD),e.xp6(1),e.hij(" ",r.leyenda,"\n"))},directives:[n.mk,n.O5,n.sg,i._Y,i.JL,i.sg,i._,i.Fj,i.JJ,i.u,i.nD,i.wO,C.hx,h._L],styles:[".myconfig1[_ngcontent-%COMP%]{border-top-left-radius:0;border-bottom-left-radius:0;width:100px}.myconfig2[_ngcontent-%COMP%]{border-top-right-radius:0;border-bottom-right-radius:0;width:100px}button.btn-close[_ngcontent-%COMP%]{margin-left:5px}"]}),o})();var b=s(60841),U=s(98816);function K(o,a){1&o&&(e.ynx(0),e.TgZ(1,"td"),e._uU(2,"N/A"),e.qZA(),e.BQk())}function ee(o,a){if(1&o&&(e.TgZ(0,"td"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.xp6(1),e.Oqu(t.encargado)}}function te(o,a){1&o&&(e.ynx(0),e.TgZ(1,"td"),e._uU(2,"Gasolinera"),e.qZA(),e.BQk())}function oe(o,a){1&o&&(e.TgZ(0,"td"),e._uU(1,"UES"),e.qZA())}function ne(o,a){1&o&&(e.ynx(0),e.TgZ(1,"td"),e.TgZ(2,"h5"),e.TgZ(3,"span",18),e._uU(4,"Activo"),e.qZA(),e.qZA(),e.qZA(),e.BQk())}function re(o,a){1&o&&(e.TgZ(0,"td"),e.TgZ(1,"h5"),e.TgZ(2,"span",19),e._uU(3,"Inactivo"),e.qZA(),e.qZA(),e.qZA())}function ae(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"a",9),e._uU(3),e.qZA(),e.qZA(),e.YNc(4,K,3,0,"ng-container",10),e.YNc(5,ee,2,1,"ng-template",null,11,e.W1O),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"slice"),e.ALo(10,"slice"),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.YNc(15,te,3,0,"ng-container",10),e.YNc(16,oe,2,0,"ng-template",null,12,e.W1O),e.YNc(18,ne,5,0,"ng-container",10),e.YNc(19,re,4,0,"ng-template",null,13,e.W1O),e.TgZ(21,"td",14),e._UZ(22,"app-modal",15),e.TgZ(23,"button",16),e.NdJ("click",function(){const p=e.CHM(t).$implicit;return e.oxw().cambiarEstado(p)}),e._UZ(24,"i",17),e.qZA(),e.qZA(),e.qZA()}if(2&o){const t=a.$implicit,r=e.MAs(6),c=e.MAs(17),p=e.MAs(20);e.xp6(3),e.hij(" ",t.nombre," "),e.xp6(1),e.Q6J("ngIf",null==t.encargado||""==t.encargado)("ngIfElse",r),e.xp6(4),e.AsE(" ",e.Dn7(9,15,t.telefono,0,4),"-",e.xi3(10,19,t.telefono,4)," "),e.xp6(4),e.Oqu(t.email),e.xp6(2),e.Oqu(t.direccion),e.xp6(1),e.Q6J("ngIf",13==t.tipo)("ngIfElse",c),e.xp6(3),e.Q6J("ngIf",8==t.estado)("ngIfElse",p),e.xp6(4),e.Q6J("proveedor",t)("leyenda","Editar"),e.xp6(1),e.MGl("ngbTooltip","Cambiar a ",9===t.estado?"Activo":"Inactivo",""),e.xp6(1),e.Q6J("ngClass",8===t.estado?"mdi mdi-18px mdi-lock-outline":"mdi mdi-18px mdi-key-outline")}}function ie(o,a){1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"td",20),e._uU(2," No hay datos para mostrar "),e.qZA(),e.qZA())}const le=function(o){return{itemsPerPage:10,currentPage:o}};let se=(()=>{class o{constructor(t,r){this.proveedorService=t,this.mensajesService=r}ngOnInit(){}cambiarEstado(t){this.cambio=8==t.estado?"Inactivo":"Activo",Z().fire({icon:"question",title:"\xbfCambiar el estado a "+this.cambio+"?",showDenyButton:!0,denyButtonColor:"#2c3136",denyButtonText:"No cambiar",confirmButtonColor:"#972727",confirmButtonText:"Cambiar"}).then(r=>{r.isConfirmed?(this.proveedor=t,8==t.estado?(this.proveedor.estado=9,this.cambio="Inactivo"):(this.proveedor.estado=8,this.cambio="Activo"),this.proveedorService.modificar(this.proveedor).subscribe(()=>{this.proveedorService.getProveedors(),this.mensajesService.mensajesToast("success","Registro modificado")})):r.isDenied&&this.mensajesService.mensajesToast("info","Acci\xf3n Cancelada!")})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l),e.Y36(A.O))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tabla"]],inputs:{proveedores:"proveedores",queryString:"queryString"},decls:27,vars:12,consts:[[1,"table-responsive","mb-0"],[1,"table","table-centered","table-nowrap"],[1,"table-light"],[1,"align-middle"],[1,"align-middle","text-center"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pagination","pagination-rounded","justify-content-end","mb-2"],[3,"nextLabel","previousLabel","pageChange"],[1,"text-body","fw-bold"],[4,"ngIf","ngIfElse"],["encargado",""],["tipo",""],["estado",""],[1,"d-flex","justify-content-center","gap-1"],[3,"proveedor","leyenda"],["type","button",1,"btn","btn-warning","btn-sm","btn-rounded","mx-1",3,"ngbTooltip","click"],[3,"ngClass"],[1,"badge","rounded-pill","bg-success"],[1,"badge","rounded-pill","bg-danger"],["colspan","8",2,"text-align","center"]],template:function(t,r){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"table",1),e.TgZ(2,"thead",2),e.TgZ(3,"tr"),e.TgZ(4,"th",3),e._uU(5,"Nombre"),e.qZA(),e.TgZ(6,"th",3),e._uU(7,"Encargado"),e.qZA(),e.TgZ(8,"th",3),e._uU(9,"Tel\xe9fono"),e.qZA(),e.TgZ(10,"th",3),e._uU(11,"Email"),e.qZA(),e.TgZ(12,"th",3),e._uU(13,"Direcci\xf3n"),e.qZA(),e.TgZ(14,"th",3),e._uU(15,"Tipo"),e.qZA(),e.TgZ(16,"th",3),e._uU(17,"Estado"),e.qZA(),e.TgZ(18,"th",4),e._uU(19,"Acciones"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(20,"tbody"),e.YNc(21,ae,25,22,"tr",5),e.ALo(22,"paginate"),e.ALo(23,"filter"),e.YNc(24,ie,3,0,"tr",6),e.qZA(),e.qZA(),e.TgZ(25,"div",7),e.TgZ(26,"pagination-controls",8),e.NdJ("pageChange",function(p){return r.p=p}),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(21),e.Q6J("ngForOf",e.xi3(22,4,e.xi3(23,7,r.proveedores,r.queryString),e.VKq(10,le,r.p))),e.xp6(3),e.Q6J("ngIf",0==r.proveedores.length),e.xp6(2),e.Q6J("nextLabel","")("previousLabel",""))},directives:[n.sg,n.O5,b.LS,q,h._L,n.mk],pipes:[b._s,U.Z,n.OU],styles:['@charset "UTF-8";td[_ngcontent-%COMP%]{white-space:normal;max-width:300px}']}),o})();const ce=[{path:"",component:(()=>{class o{constructor(t){this.proveedorService=t,this.offset=0,this.term=""}ngOnInit(){this.breadCrumbItems=[{label:"Proveedor"},{label:"Mostrar",active:!0}],this.proveedorService.getProveedors()}get listDatos(){return this.proveedorService.listProveedor}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-mostrar"]],decls:17,vars:5,consts:[[1,"container-fluid"],["title","Proveedores",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],[1,"col-sm-4"],[1,"search-box","me-2","mb-2","d-inline-block"],[1,"position-relative"],["type","text","placeholder","Buscar...",1,"form-control",3,"ngModel","ngModelChange"],[1,"bx","bx-search-alt","search-icon"],[1,"col-sm-8"],[1,"text-sm-end"],[3,"leyenda"],[3,"proveedores","queryString"]],template:function(t,r){1&t&&(e._UZ(0,"app-loader"),e.TgZ(1,"div",0),e._UZ(2,"app-page-title",1),e.TgZ(3,"div",2),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"div",7),e.TgZ(9,"div",8),e.TgZ(10,"div",9),e.TgZ(11,"input",10),e.NdJ("ngModelChange",function(p){return r.term=p}),e.qZA(),e._UZ(12,"i",11),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",12),e.TgZ(14,"div",13),e._UZ(15,"app-modal",14),e.qZA(),e.qZA(),e.qZA(),e._UZ(16,"app-tabla",15),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(2),e.Q6J("breadcrumbItems",r.breadCrumbItems),e.xp6(9),e.Q6J("ngModel",r.term),e.xp6(4),e.Q6J("leyenda","Agregar"),e.xp6(1),e.Q6J("proveedores",r.listDatos)("queryString",r.term))},directives:[m.R,d.V,i.Fj,i.JJ,i.On,q,se],styles:[""]}),o})()}];let de=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[u.Bz.forChild(ce)],u.Bz]}),o})();var me=s(63091);let pe=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[n.ez,de,i.u5,me.v,U.h,i.UX,b.JX,h.IJ,C.yI.forRoot()]]}),o})()},34576:(x,_,s)=>{s.d(_,{R:()=>v});var n=s(83668),u=s(34099);let e=(()=>{class l{constructor(){this.isLoading=new u.X(!1)}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})();var g=s(86019);function f(l,m){1&l&&(n.TgZ(0,"div",1),n.TgZ(1,"div",2),n.TgZ(2,"div",3),n._UZ(3,"div",4),n._UZ(4,"div",4),n._UZ(5,"div",4),n._UZ(6,"div",4),n._UZ(7,"div",4),n._UZ(8,"div",4),n.qZA(),n.qZA(),n.qZA())}let v=(()=>{class l{constructor(d){this.loaderService=d,this.loading=!0,this.loaderService.isLoading.subscribe(i=>{setTimeout(()=>{this.loading=i},1500)})}ngOnInit(){}}return l.\u0275fac=function(d){return new(d||l)(n.Y36(e))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-loader"]],decls:1,vars:1,consts:[["id","preloader",4,"ngIf"],["id","preloader"],["id","status"],[1,"spinner-chase"],[1,"chase-dot"]],template:function(d,i){1&d&&n.YNc(0,f,9,0,"div",0),2&d&&n.Q6J("ngIf",i.loading)},directives:[g.O5],styles:[""]}),l})()},11950:(x,_,s)=>{s.d(_,{V:()=>v});var n=s(83668),u=s(86019);function e(l,m){if(1&l&&(n.TgZ(0,"li",9),n.TgZ(1,"a",10),n._uU(2),n.qZA(),n.qZA()),2&l){const d=n.oxw().$implicit;n.xp6(2),n.Oqu(d.label)}}function g(l,m){if(1&l&&(n.TgZ(0,"li",11),n._uU(1),n.qZA()),2&l){const d=n.oxw().$implicit;n.xp6(1),n.hij("",d.label," ")}}function f(l,m){if(1&l&&(n.ynx(0),n.YNc(1,e,3,1,"li",7),n.YNc(2,g,2,1,"li",8),n.BQk()),2&l){const d=m.$implicit;n.xp6(1),n.Q6J("ngIf",!d.active),n.xp6(1),n.Q6J("ngIf",d.active)}}let v=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:8,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box","d-flex","align-items-center","justify-content-between"],[1,"mb-0","font-size-18"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[4,"ngFor","ngForOf"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[1,"breadcrumb-item","active"]],template:function(d,i){1&d&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"div",2),n.TgZ(3,"h4",3),n._uU(4),n.qZA(),n.TgZ(5,"div",4),n.TgZ(6,"ol",5),n.YNc(7,f,3,2,"ng-container",6),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&d&&(n.xp6(4),n.Oqu(i.title),n.xp6(3),n.Q6J("ngForOf",i.breadcrumbItems))},directives:[u.sg,u.O5],styles:[""]}),l})()}}]);