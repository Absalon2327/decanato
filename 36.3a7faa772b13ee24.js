"use strict";(self.webpackChunkskote=self.webpackChunkskote||[]).push([[36],{14036:(C,g,n)=>{n.r(g),n.d(g,{HomeFinancieroModule:()=>M});var o=n(86019),h=n(56225),l=n(13956),t=n(83668);const d=[{path:"",component:l.N}];let u=(()=>{class p{}return p.\u0275fac=function(A){return new(A||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({imports:[[h.Bz.forChild(d)],h.Bz]}),p})();var s=n(75396),v=n(57337),r=n(49133),f=n(63091),y=n(31472),U=n(60841),x=n(98816),b=n(36528);let M=(()=>{class p{}return p.\u0275fac=function(A){return new(A||p)},p.\u0275mod=t.oAB({type:p}),p.\u0275inj=t.cJS({providers:[o.uU],imports:[[o.ez,r.u5,r.UX,u,f.v,v.y,s.X,U.JX,x.h,y.E,b.m9]]}),p})()},13956:(C,g,n)=>{n.d(g,{N:()=>E});var o=n(64762),h=n(1659),l=n.n(h),t=n(83668),d=n(18260),u=n(44522),s=n(38053);let v=(()=>{class i{constructor(e){this.http=e,this.baseUrl=d.N.baseUrl}getListarPorRangoDeFechas(e,a){const c=(new u.LE).set("fechaInicial",e).set("fechaFinal",a);return this.http.get(`${this.baseUrl}/compra/listarPorRangoDeFechas`,{params:c}).pipe((0,s.U)(Z=>Z))}getCantidadValesPorEstado(e){return this.http.get(`${this.baseUrl}/vale/cantidadvalesporestado/${e}`).pipe((0,s.U)(a=>a))}getCantidadSolicitudesPorEstado(e){return this.http.get(`${this.baseUrl}/asignacionvale/solicivaleEstado/${e}`).pipe((0,s.U)(a=>a))}obtenerLogValesPorEstadoYMes(e){return this.http.get(`${this.baseUrl}/logVale/montovalesconsumidosporestado/${e}`)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(u.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();var r=n(86019),f=n(66548),y=n(34576),U=n(55990),x=n(20154),b=n(60841),M=n(98816);function p(i,m){1&i&&(t.ynx(0),t.TgZ(1,"td"),t.TgZ(2,"a",20),t._uU(3," N/A "),t.qZA(),t.qZA(),t.BQk())}function T(i,m){if(1&i&&(t.TgZ(0,"td"),t.TgZ(1,"a",20),t._uU(2),t.qZA(),t.qZA()),2&i){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.factura," ")}}function A(i,m){if(1&i&&(t.TgZ(0,"tr"),t.YNc(1,p,4,0,"ng-container",18),t.YNc(2,T,3,1,"ng-template",null,19,t.W1O),t.TgZ(4,"td"),t._uU(5),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"currency"),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.ALo(16,"currency"),t.qZA(),t.qZA()),2&i){const e=m.$implicit,a=t.MAs(3);t.xp6(1),t.Q6J("ngIf",null==e.factura||""==e.factura)("ngIfElse",a),t.xp6(4),t.Oqu(e.proveedor.nombre),t.xp6(2),t.Oqu(t.xi3(8,7,e.fechaCompra,"dd/MM/yyyy h:mm a")),t.xp6(3),t.Oqu(e.cantidad),t.xp6(2),t.hij(" ",t.gM2(13,10,e.precioUnitario,"USD","symbol","1.2-2")," "),t.xp6(3),t.hij(" ",t.gM2(16,15,e.totalCompra,"USD","symbol","1.2-2")," ")}}function q(i,m){1&i&&(t.TgZ(0,"tr"),t.TgZ(1,"td",21),t._uU(2," No hay datos para mostrar "),t.qZA(),t.qZA())}const _=function(i){return{itemsPerPage:10,currentPage:i}};function F(i,m){if(1&i){const e=t.EpF();t.TgZ(0,"div",4),t.TgZ(1,"h5",5),t._uU(2),t.qZA(),t.TgZ(3,"button",6),t.NdJ("click",function(){return t.CHM(e).$implicit.dismiss("Cross click")}),t.qZA(),t.qZA(),t.TgZ(4,"div",7),t.TgZ(5,"div",8),t.TgZ(6,"table",9),t.TgZ(7,"thead",10),t.TgZ(8,"tr"),t.TgZ(9,"th",11),t._uU(10,"Factura"),t.qZA(),t.TgZ(11,"th",11),t._uU(12,"Proveedor"),t.qZA(),t.TgZ(13,"th",11),t._uU(14,"Fecha de compra"),t.qZA(),t.TgZ(15,"th",11),t._uU(16,"Cant. de vales"),t.qZA(),t.TgZ(17,"th",11),t._uU(18,"Prec. Unit."),t.qZA(),t.TgZ(19,"th",11),t._uU(20,"Total"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(21,"tbody"),t.YNc(22,A,17,20,"tr",12),t.ALo(23,"paginate"),t.ALo(24,"filter"),t.YNc(25,q,3,0,"tr",13),t.qZA(),t.qZA(),t.TgZ(26,"div",14),t.TgZ(27,"pagination-controls",15),t.NdJ("pageChange",function(c){return t.CHM(e),t.oxw().p=c}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(28,"div",16),t.TgZ(29,"button",17),t.NdJ("click",function(){return t.CHM(e).$implicit.close("Close click")}),t._uU(30," Cerrar "),t.qZA(),t.qZA()}if(2&i){const e=t.oxw();t.xp6(2),t.hij("Compra de Vales en ",e.texto,""),t.xp6(20),t.Q6J("ngForOf",t.xi3(23,5,t.xi3(24,8,e.compras,e.queryString),t.VKq(11,_,e.p))),t.xp6(3),t.Q6J("ngIf",0==e.compras.length),t.xp6(2),t.Q6J("nextLabel","")("previousLabel","")}}let S=(()=>{class i{constructor(e){this.modalService=e}ngOnInit(){}openModal(e,a){this.compras=a,this.modalService.open(e,{centered:!0,size:"lg",backdrop:"static",keyboard:!1})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(x.FF))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-modal-compra"]],inputs:{compras:"compras",texto:"texto",queryString:"queryString"},decls:5,vars:0,consts:[["type","button",1,"btn","btn-primary","btn-sm",3,"click"],[1,"mdi","mdi-arrow-right","ms-1"],["role","document"],["content",""],[1,"modal-header"],[1,"modal-title","mt-0"],["type","button","aria-hidden","true",1,"btn-close",3,"click"],[1,"modal-body"],[1,"table-responsive","mb-0"],[1,"table","table-centered","table-nowrap"],[1,"table-light"],[1,"align-middle"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"pagination","pagination-rounded","justify-content-end","mb-2"],[3,"nextLabel","previousLabel","pageChange"],[1,"modal-footer","custom-modal"],[1,"btn","btn-dark","w-sm",3,"click"],[4,"ngIf","ngIfElse"],["factura",""],[1,"text-body","fw-bold"],["colspan","11",2,"text-align","center"]],template:function(e,a){if(1&e){const c=t.EpF();t.TgZ(0,"button",0),t.NdJ("click",function(){t.CHM(c);const L=t.MAs(4);return a.openModal(L,a.compras)}),t._uU(1," Ver Detalle "),t._UZ(2,"i",1),t.qZA(),t.YNc(3,F,31,13,"ng-template",2,3,t.W1O)}},directives:[r.sg,r.O5,b.LS],pipes:[b._s,M.Z,r.uU,r.H9],styles:['@charset "UTF-8";td[_ngcontent-%COMP%]{white-space:normal;max-width:300px}']}),i})();var P=n(36528);let D=(()=>{class i{constructor(){this.chartData=[],this.chartLabels=["Total Compra ($)"],this.chartLegend=!0,this.chartPlugins=[],this.chartOptions={responsive:!0,title:{display:!1},scales:{yAxes:[{ticks:{beginAtZero:!0,callback:function(e,a,c){return"$"+e.toFixed(2)}}}]}}}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-grafica-compra"]],inputs:{chartData:"chartData"},decls:2,vars:5,consts:[[2,"display","block"],["baseChart","","chartType","bar",3,"datasets","labels","options","plugins","legend"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"canvas",1),t.qZA()),2&e&&(t.xp6(1),t.Q6J("datasets",a.chartData)("labels",a.chartLabels)("options",a.chartOptions)("plugins",a.chartPlugins)("legend",a.chartLegend))},directives:[P.jh],styles:[""]}),i})(),E=(()=>{class i{constructor(e,a,c){this.homeFinancieroService=e,this.datePipe=a,this.mensajesService=c,this.storage=window.localStorage,this.listCompra=[],this.logVales=[],this.chartData=[]}ngOnInit(){this.cargarComprasPorRangoDeFechas(),this.getcatidadValesPorEstado(),this.getcatidadSolicitudesPorEstado(),this.obtenerLogValesPorEstado(5),this.texto="Este Mes"}formatDate(e){const a=new Date(e);return this.datePipe.transform(a,"dd/MM/yyyy")||""}formatDateCompleto(e){const a=new Date(e);return this.datePipe.transform(a,"dd/MM/yy HH:mm")||""}get empleado(){const e=this.storage.getItem("usuario");return e?JSON.parse(e).empleado:null}get fotoempleado(){return this.storage.getItem("empleadoFoto")||"./../../../assets/images/Default-Avatar.png"}mostrarEsteMes(){this.cargarComprasPorRangoDeFechas(),this.texto="Este Mes"}cargarComprasPorRangoDeFechas(e="",a=""){this.homeFinancieroService.getListarPorRangoDeFechas(e,a).subscribe(c=>{this.listCompra=c,this.graficar(),this.montoGenerado=this.cantidaGenerada=0,this.listCompra.forEach(Z=>{this.montoGenerado+=Z.totalCompra}),this.cantidaGenerada=this.listCompra.length})}mostrarIntervaloFechas(){return(0,o.mG)(this,void 0,void 0,function*(){const{value:e,dismiss:a}=yield l().fire({title:"Selecciona un intervalo de fechas",confirmButtonColor:"#972727",confirmButtonText:"Generar",html:'<input type="date" id="swal-input1" class="swal2-input"><input type="date" id="swal-input2" class="swal2-input">',focusConfirm:!1,preConfirm:()=>[document.querySelector("#swal-input1").value,document.querySelector("#swal-input2").value]});a===l().DismissReason.esc||a===l().DismissReason.close||a===l().DismissReason.backdrop||(e&&e[0]&&e[1]&&e[0]<e[1]?(this.fechaInicio=e[0],this.fechaFin=e[1],this.cargarComprasPorRangoDeFechas(this.fechaInicio,this.fechaFin),this.texto="Intervalo del "+this.formatDate(this.fechaInicio)+" Al "+this.formatDate(this.fechaFin)):this.mensajesService.mensajesToast("warning",e[0]>e[1]?"Fecha inicio superior a la fecha fin.":"Debe seleccionar ambas fechas."))})}graficar(){this.chartData=this.listCompra.map(e=>({data:[e.totalCompra],label:this.formatDateCompleto(e.fechaCompra)}))}getcatidadValesPorEstado(){this.homeFinancieroService.getCantidadValesPorEstado(8).subscribe(e=>{this.valesActivos=e}),this.homeFinancieroService.getCantidadValesPorEstado(5).subscribe(e=>{this.ValesAsignados=e})}obtenerLogValesPorEstado(e){this.homeFinancieroService.obtenerLogValesPorEstadoYMes(e).subscribe(a=>{this.logVales=a,this.cantidadLogVale=this.logVales.length})}getcatidadSolicitudesPorEstado(){this.homeFinancieroService.getCantidadSolicitudesPorEstado(8).subscribe(e=>{this.soliNuevas=e}),this.homeFinancieroService.getCantidadSolicitudesPorEstado(1).subscribe(e=>{this.soliPorAprobar=e})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v),t.Y36(r.uU),t.Y36(f.O))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-mostrar"]],decls:60,vars:30,consts:[[1,"container-fluid"],[1,"row"],[1,"col-12"],[1,"page-title-box","d-flex","align-items-center","justify-content-between"],[1,"mb-0","font-size-18"],[1,"page-title-right"],[1,"breadcrumb","m-0"],[1,"breadcrumb-item","active"],[1,"col-xl-12"],[1,"col-md-3"],[3,"title","value","icon"],[1,"col-xl-4"],[1,"card"],[1,"card-body"],[1,"card-title","mb-4"],[1,"col-sm-7"],[1,"text-muted"],[1,"text-success","mr-2"],[1,"mdi","mdi-arrow-up"],[1,"mt-4"],["role","group","aria-label","Basic mixed styles example",1,"btn-group","btn-group-sm"],["type","radio","name","tipo","id","tipo1","autocomplete","off","checked","",1,"btn-check",3,"value","click"],["for","tipo1",1,"btn","btn-outline-dark"],["type","radio","name","tipo","id","tipo2","autocomplete","off",1,"btn-check",3,"value","click"],["for","tipo2",1,"btn","btn-outline-primary"],[3,"compras","texto"],[1,"col-sm-5"],["src","assets/images/financiero/Money income-pana.png","alt","",1,"img-fluid"],[1,"col-xl-8"],[1,"d-sm-flex","flex-wrap"],[3,"chartData"]],template:function(e,a){1&e&&(t._UZ(0,"app-loader"),t.TgZ(1,"div",0),t.TgZ(2,"div",1),t.TgZ(3,"div",2),t.TgZ(4,"div",3),t.TgZ(5,"h4",4),t._uU(6,"Inicio"),t.qZA(),t.TgZ(7,"div",5),t.TgZ(8,"ol",6),t.TgZ(9,"li",7),t._uU(10,"Bienvenid@ al sistema"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(11,"div",1),t.TgZ(12,"div",8),t.TgZ(13,"div",1),t.TgZ(14,"div",9),t._UZ(15,"app-stat",10),t.qZA(),t.TgZ(16,"div",9),t._UZ(17,"app-stat",10),t.qZA(),t.TgZ(18,"div",9),t._UZ(19,"app-stat",10),t.qZA(),t.TgZ(20,"div",9),t._UZ(21,"app-stat",10),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(22,"div",1),t.TgZ(23,"div",11),t.TgZ(24,"div",12),t.TgZ(25,"div",13),t.TgZ(26,"h4",14),t._uU(27,"Compras"),t.qZA(),t.TgZ(28,"div",1),t.TgZ(29,"div",15),t.TgZ(30,"p",16),t._uU(31),t.qZA(),t.TgZ(32,"h3"),t._uU(33),t.ALo(34,"currency"),t.qZA(),t.TgZ(35,"p",16),t.TgZ(36,"span",17),t._uU(37),t._UZ(38,"i",18),t.qZA(),t._uU(39),t.qZA(),t.TgZ(40,"div",19),t.TgZ(41,"div",20),t.TgZ(42,"input",21),t.NdJ("click",function(){return a.mostrarEsteMes()}),t.qZA(),t.TgZ(43,"label",22),t._uU(44,"Este Mes"),t.qZA(),t.TgZ(45,"input",23),t.NdJ("click",function(){return a.mostrarIntervaloFechas()}),t.qZA(),t.TgZ(46,"label",24),t._uU(47,"Intervalo"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(48,"div",19),t._UZ(49,"app-modal-compra",25),t.qZA(),t.qZA(),t.TgZ(50,"div",26),t._UZ(51,"img",27),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t._UZ(52,"app-stat",10),t.qZA(),t.TgZ(53,"div",28),t.TgZ(54,"div",12),t.TgZ(55,"div",13),t.TgZ(56,"div",29),t.TgZ(57,"h4",14),t._uU(58),t.qZA(),t.qZA(),t._UZ(59,"app-grafica-compra",30),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&e&&(t.xp6(15),t.Q6J("title","Vales disponibles")("value",a.valesActivos)("icon","mdi mdi-checkbook"),t.xp6(2),t.Q6J("title","Vales asignados")("value",a.ValesAsignados)("icon","dripicons-pulse"),t.xp6(2),t.Q6J("title","Solicitudes nuevas")("value",a.soliNuevas)("icon","mdi mdi-plus"),t.xp6(2),t.Q6J("title","Solicitudes por aprobar")("value",a.soliPorAprobar)("icon","mdi mdi-check"),t.xp6(10),t.Oqu(a.texto),t.xp6(2),t.hij(" ",t.gM2(34,25,a.montoGenerado,"USD","symbol","1.2-2")," "),t.xp6(4),t.hij(" ",a.cantidaGenerada," "),t.xp6(2),t.hij(" ",1==a.cantidaGenerada?"Compra":"Compras"," "),t.xp6(3),t.Q6J("value",1),t.xp6(3),t.Q6J("value",0),t.xp6(4),t.Q6J("compras",a.listCompra)("texto",a.texto),t.xp6(3),t.Q6J("title","Vales consumidos este mes")("value",a.cantidadLogVale)("icon","mdi mdi-card-bulleted-off"),t.xp6(6),t.hij("Total de Compras en ",a.texto,""),t.xp6(1),t.Q6J("chartData",a.chartData))},directives:[y.R,U.j,S,D],pipes:[r.H9],styles:[".image-container[_ngcontent-%COMP%]{width:90px;height:90px;overflow:hidden;border-radius:50%;margin:-46px auto 0;position:relative;border:4px solid white;z-index:1}.image-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;display:block}"]}),i})()},34576:(C,g,n)=>{n.d(g,{R:()=>u});var o=n(83668),h=n(34099);let l=(()=>{class s{constructor(){this.isLoading=new h.X(!1)}}return s.\u0275fac=function(r){return new(r||s)},s.\u0275prov=o.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();var t=n(86019);function d(s,v){1&s&&(o.TgZ(0,"div",1),o.TgZ(1,"div",2),o.TgZ(2,"div",3),o._UZ(3,"div",4),o._UZ(4,"div",4),o._UZ(5,"div",4),o._UZ(6,"div",4),o._UZ(7,"div",4),o._UZ(8,"div",4),o.qZA(),o.qZA(),o.qZA())}let u=(()=>{class s{constructor(r){this.loaderService=r,this.loading=!0,this.loaderService.isLoading.subscribe(f=>{setTimeout(()=>{this.loading=f},1500)})}ngOnInit(){}}return s.\u0275fac=function(r){return new(r||s)(o.Y36(l))},s.\u0275cmp=o.Xpm({type:s,selectors:[["app-loader"]],decls:1,vars:1,consts:[["id","preloader",4,"ngIf"],["id","preloader"],["id","status"],[1,"spinner-chase"],[1,"chase-dot"]],template:function(r,f){1&r&&o.YNc(0,d,9,0,"div",0),2&r&&o.Q6J("ngIf",f.loading)},directives:[t.O5],styles:[""]}),s})()},55990:(C,g,n)=>{n.d(g,{j:()=>h});var o=n(83668);let h=(()=>{class l{constructor(){}ngOnInit(){}}return l.\u0275fac=function(d){return new(d||l)},l.\u0275cmp=o.Xpm({type:l,selectors:[["app-stat"]],inputs:{title:"title",value:"value",icon:"icon"},decls:11,vars:5,consts:[[1,"card","mini-stats-wid"],[1,"card-body"],[1,"media"],[1,"media-body"],[1,"text-muted","fw-medium"],[1,"mb-0"],[1,"mini-stat-icon","avatar-sm","rounded-circle","bg-primary","align-self-center"],[1,"avatar-title"]],template:function(d,u){1&d&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"p",4),o._uU(5),o.qZA(),o.TgZ(6,"h4",5),o._uU(7),o.qZA(),o.qZA(),o.TgZ(8,"div",6),o.TgZ(9,"span",7),o._UZ(10,"i"),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&d&&(o.xp6(5),o.Oqu(u.title),o.xp6(2),o.Oqu(u.value),o.xp6(3),o.Gre("bx ",u.icon," font-size-24"))},styles:[""]}),l})()},57337:(C,g,n)=>{n.d(g,{y:()=>t});var o=n(86019),h=n(20154),l=n(83668);let t=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275mod=l.oAB({type:d}),d.\u0275inj=l.cJS({imports:[[o.ez,h.bz]]}),d})()}}]);