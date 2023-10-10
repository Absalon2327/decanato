"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[585],{98816:(T,m,a)=>{a.d(m,{h:()=>e,Z:()=>p});var t=a(83668);let p=(()=>{class l{transform(s,n){return n&&s?l.filter(s,n):s}static filter(s,n){const d=n.toLowerCase();function r(c,b){for(let Z in c)if(null!==c[Z]&&null!=c[Z]&&("object"==typeof c[Z]&&r(c[Z],b)||c[Z].toString().toLowerCase().includes(d)))return!0;return!1}return s.filter(function(c){return r(c,n)})}}return l.\u0275fac=function(s){return new(s||l)},l.\u0275pipe=t.Yjl({name:"filter",type:l,pure:!1}),l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac}),l})(),e=(()=>{class l{}return l.\u0275fac=function(s){return new(s||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({}),l})()},89585:(T,m,a)=>{a.r(m),a.d(m,{SolicitudValePaginacionModule:()=>P});var t=a(86019),p=a(56225),e=a(83668),l=a(34576),f=a(11950),s=a(49133),n=a(18260),d=a(44522);let r=(()=>{class o{constructor(i){this.http=i,this.baseUrl=n.N.baseUrl,this.listSolcitudes={content:[],pageable:{offset:0,paged:!0,pageNumber:0,pageSize:0,sort:{empty:!0,sorted:!0,unsorted:!0},unpaged:!0},empty:!0,first:!0,last:!0,number:0,numberOfElements:0,size:0,sort:{empty:!0,sorted:!0,unsorted:!0},totalElements:0,totalPages:0}}getSolicitudes(i=0,g=10){this.http.get(`${this.baseUrl}/asignacionvale/listarsolicitudvale`,{params:{page:i.toString(),size:g.toString()}}).subscribe(v=>{this.listSolcitudes=v},v=>{console.error("Error al obtener las Solicitudes:",v)})}}return o.\u0275fac=function(i){return new(i||o)(e.LFG(d.eN))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var c=a(20154),b=a(98816);function Z(o,u){1&o&&(e.TgZ(0,"td"),e.TgZ(1,"h5"),e.TgZ(2,"span",12),e._uU(3,"Inactivo"),e.qZA(),e.qZA(),e.qZA())}function S(o,u){if(1&o&&(e.TgZ(0,"tr"),e.TgZ(1,"td"),e.TgZ(2,"a",7),e._uU(3),e.qZA(),e.qZA(),e.TgZ(4,"td"),e._uU(5),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.YNc(8,Z,4,0,"ng-template",null,8,e.W1O),e.TgZ(10,"td",9),e.TgZ(11,"button",10),e._UZ(12,"i",11),e.qZA(),e.qZA(),e.qZA()),2&o){const i=u.$implicit;e.xp6(3),e.hij(" ",i.idSolicitudVale," "),e.xp6(2),e.hij(" ",i.cantidadVale," "),e.xp6(2),e.Oqu(i.estadoEntrada),e.xp6(4),e.MGl("ngbTooltip","Cambiar a ",9===i.estado?"Activo":"Inactivo",""),e.xp6(1),e.Q6J("ngClass",8===i.estado?"mdi mdi-18px mdi-lock-outline":"mdi mdi-18px mdi-key-outline")}}let _=(()=>{class o{constructor(i){this.solicitudesServices=i,this.currentPage=1,this.offset=0,this.term=""}ngOnInit(){this.solicitudesServices.getSolicitudes()}get listDatos(){return console.log(this.solicitudesServices.listSolcitudes),this.solicitudes=this.solicitudesServices.listSolcitudes,this.solicitudes}onPageChange(i){this.solicitudesServices.getSolicitudes(i-1)}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(r))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-tabla"]],decls:16,vars:6,consts:[[1,"table-responsive","mb-0"],[1,"table","table-centered","table-nowrap"],[1,"table-light"],[1,"align-middle"],[1,"align-middle","text-center"],[4,"ngFor","ngForOf"],[3,"pageSize","collectionSize","pageChange","page"],[1,"text-body","fw-bold"],["estado",""],[1,"d-flex","justify-content-center","gap-1"],["type","button",1,"btn","btn-warning","btn-sm","btn-rounded","mx-1",3,"ngbTooltip"],[3,"ngClass"],[1,"badge","rounded-pill","bg-danger"]],template:function(i,g){1&i&&(e.TgZ(0,"div",0),e.TgZ(1,"table",1),e.TgZ(2,"thead",2),e.TgZ(3,"tr"),e.TgZ(4,"th",3),e._uU(5,"ID"),e.qZA(),e.TgZ(6,"th",3),e._uU(7,"Cantidad Vale"),e.qZA(),e.TgZ(8,"th",3),e._uU(9,"Estado Entrada"),e.qZA(),e.TgZ(10,"th",4),e._uU(11,"Acciones"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"tbody"),e.YNc(13,S,13,5,"tr",5),e.ALo(14,"filter"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(15,"ngb-pagination",6),e.NdJ("pageChange",function(h){return g.onPageChange(h)})("page",function(){return g.currentPage}),e.qZA()),2&i&&(e.xp6(13),e.Q6J("ngForOf",e.xi3(14,3,g.listDatos.content,g.queryString)),e.xp6(2),e.Q6J("pageSize",g.solicitudes.pageable.pageSize)("collectionSize",g.solicitudes.totalElements))},directives:[t.sg,c.N9,c._L,t.mk],pipes:[b.Z],styles:[""]}),o})();const C=[{path:"paginado",component:(()=>{class o{constructor(){this.term=""}ngOnInit(){this.breadCrumbItems=[{label:"Solictud Vale"},{label:"Paginaci\xf3n",active:!0}]}}return o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-mostrar"]],decls:16,vars:2,consts:[[1,"container-fluid"],["title","Solicitudes",3,"breadcrumbItems"],[1,"row"],[1,"col-12"],[1,"card"],[1,"card-body"],[1,"row","mb-2"],[1,"col-sm-4"],[1,"search-box","me-2","mb-2","d-inline-block"],[1,"position-relative"],["type","text","placeholder","Buscar...",1,"form-control",3,"ngModel","ngModelChange"],[1,"bx","bx-search-alt","search-icon"],[1,"col-sm-8"],[1,"text-sm-end"]],template:function(i,g){1&i&&(e._UZ(0,"app-loader"),e.TgZ(1,"div",0),e._UZ(2,"app-page-title",1),e.TgZ(3,"div",2),e.TgZ(4,"div",3),e.TgZ(5,"div",4),e.TgZ(6,"div",5),e.TgZ(7,"div",6),e.TgZ(8,"div",7),e.TgZ(9,"div",8),e.TgZ(10,"div",9),e.TgZ(11,"input",10),e.NdJ("ngModelChange",function(h){return g.term=h}),e.qZA(),e._UZ(12,"i",11),e.qZA(),e.qZA(),e.qZA(),e.TgZ(13,"div",12),e._UZ(14,"div",13),e.qZA(),e.qZA(),e._UZ(15,"app-tabla"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(2),e.Q6J("breadcrumbItems",g.breadCrumbItems),e.xp6(9),e.Q6J("ngModel",g.term))},directives:[l.R,f.V,s.Fj,s.JJ,s.On,_],styles:[""]}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[p.Bz.forChild(C)],p.Bz]}),o})();var M=a(63091);let P=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[t.ez,y,s.u5,M.v,b.h,s.UX,c.IJ]]}),o})()},34576:(T,m,a)=>{a.d(m,{R:()=>s});var t=a(83668),p=a(34099);let e=(()=>{class n{constructor(){this.isLoading=new p.X(!1)}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var l=a(86019);function f(n,d){1&n&&(t.TgZ(0,"div",1),t.TgZ(1,"div",2),t.TgZ(2,"div",3),t._UZ(3,"div",4),t._UZ(4,"div",4),t._UZ(5,"div",4),t._UZ(6,"div",4),t._UZ(7,"div",4),t._UZ(8,"div",4),t.qZA(),t.qZA(),t.qZA())}let s=(()=>{class n{constructor(r){this.loaderService=r,this.loading=!0,this.loaderService.isLoading.subscribe(c=>{setTimeout(()=>{this.loading=c},1500)})}ngOnInit(){}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-loader"]],decls:1,vars:1,consts:[["id","preloader",4,"ngIf"],["id","preloader"],["id","status"],[1,"spinner-chase"],[1,"chase-dot"]],template:function(r,c){1&r&&t.YNc(0,f,9,0,"div",0),2&r&&t.Q6J("ngIf",c.loading)},directives:[l.O5],styles:[""]}),n})()},11950:(T,m,a)=>{a.d(m,{V:()=>s});var t=a(83668),p=a(86019);function e(n,d){if(1&n&&(t.TgZ(0,"li",9),t.TgZ(1,"a",10),t._uU(2),t.qZA(),t.qZA()),2&n){const r=t.oxw().$implicit;t.xp6(2),t.Oqu(r.label)}}function l(n,d){if(1&n&&(t.TgZ(0,"li",11),t._uU(1),t.qZA()),2&n){const r=t.oxw().$implicit;t.xp6(1),t.hij("",r.label," ")}}function f(n,d){if(1&n&&(t.ynx(0),t.YNc(1,e,3,1,"li",7),t.YNc(2,l,2,1,"li",8),t.BQk()),2&n){const r=d.$implicit;t.xp6(1),t.Q6J("ngIf",!r.active),t.xp6(1),t.Q6J("ngIf",r.active)}}let s=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-page-title"]],inputs:{breadcrumbItems:"breadcrumbItems",title:"title"},decls:8,vars:2,consts:[[1,"row"],[1,"col-12"],[1,"page-title-box","d-flex","align-items-center","justify-content-between"],[1,"mb-0","font-size-18"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[4,"ngFor","ngForOf"],["class","breadcrumb-item",4,"ngIf"],["class","breadcrumb-item active",4,"ngIf"],[1,"breadcrumb-item"],["href","javascript: void(0);"],[1,"breadcrumb-item","active"]],template:function(r,c){1&r&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"h4",3),t._uU(4),t.qZA(),t.TgZ(5,"div",4),t.TgZ(6,"ol",5),t.YNc(7,f,3,2,"ng-container",6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r&&(t.xp6(4),t.Oqu(c.title),t.xp6(3),t.Q6J("ngForOf",c.breadcrumbItems))},directives:[p.sg,p.O5],styles:[""]}),n})()}}]);