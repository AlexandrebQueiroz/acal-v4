"use strict";(self.webpackChunkacal_web=self.webpackChunkacal_web||[]).push([[655],{5683:(y,u,t)=>{t.r(u),t.d(u,{DashboardModule:()=>M});var i=t(4348),s=t(3668);let p=(()=>{class e{constructor(){}}return e.\u0275fac=function(d){return new(d||e)},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac}),e})();var c=t(3863);const g=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275cmp=s.Xpm({type:e,selectors:[["ngx-dashboard"]],decls:4,vars:0,consts:[["pack","eva","icon","monitor-outline"]],template:function(d,C){1&d&&(s.TgZ(0,"nb-card"),s.TgZ(1,"nb-card-header"),s._UZ(2,"nb-icon",0),s._uU(3," Dashboard "),s.qZA(),s.qZA())},directives:[i.Asz,i.ndF,i.fMN],encapsulation:2}),e})()},{path:"**",redirectTo:""}];let m=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.Bz.forChild(g)],c.Bz]}),e})();var f=t(4184);let M=(()=>{class e{}return e.\u0275fac=function(d){return new(d||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({providers:[p],imports:[[m,f.O,i.zyh,i.KdK]]}),e})()},9655:(y,u,t)=>{t.r(u),t.d(u,{PagesModule:()=>A});var i=t(4348),s=t(4184),p=t(5683),c=t(3863),n=t(3668);let g=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngx-miscellaneous"]],decls:1,vars:0,template:function(a,h){1&a&&n._UZ(0,"router-outlet")},directives:[c.lC],encapsulation:2}),o})(),m=(()=>{class o{constructor(a){this.menuService=a}goToHome(){this.menuService.navigateHome()}}return o.\u0275fac=function(a){return new(a||o)(n.Y36(i.kkI))},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngx-not-found"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"flex-centered","col-xl-4","col-lg-6","col-md-8","col-sm-12"],[1,"title"],[1,"sub-title"],["nbButton","","fullWidth","","type","button",1,"home-button",3,"click"]],template:function(a,h){1&a&&(n.TgZ(0,"div",0),n.TgZ(1,"div",1),n.TgZ(2,"nb-card"),n.TgZ(3,"nb-card-body"),n.TgZ(4,"div",2),n.TgZ(5,"h2",3),n._uU(6,"404 Pagina n\xe3o encontrada"),n.qZA(),n.TgZ(7,"small",4),n._uU(8," A Pagina que voc\xea est\xe1 procurando parace n\xe3o existir "),n.qZA(),n.TgZ(9,"button",5),n.NdJ("click",function(){return h.goToHome()}),n._uU(10," Voltar para o inicio "),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA())},directives:[i.Asz,i.yKW,i.DPz],styles:[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:flex}.title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{text-align:center;display:block;margin-bottom:3rem}.home-button[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),o})();const f=[{path:"",component:g,children:[{path:"404",component:m}]}];let M=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.Bz.forChild(f)],c.Bz]}),o})(),e=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[s.O,i.zyh,i.T2N,M]]}),o})();var r=t(1579);const d=[{title:"Dashboard",icon:"monitor-outline",link:"/pages/dashboard",home:!0},{title:"Cadastros",group:!0},{title:"Associados",icon:"person-outline",link:"/pages/customer"},{title:"Grupos",icon:"people-outline",link:"/pages/group"},{title:"Matr\xedculas",icon:"home-outline",link:"/pages/address"},{title:"Contratos",icon:"file-text-outline",link:"/pages/contract"},{title:"Operacional",group:!0},{title:"Gerar Faturas",icon:"archive-outline",link:"/pages/invoice"},{title:"Par\xe2metros",icon:"color-picker-outline",link:"/pages/parameter"},{title:"Financeiro",group:!0},{title:"Faturas",icon:"credit-card-outline",link:"/pages/bill"}];var C=t(1128);const P=[{path:"",canActivate:[r.a],component:(()=>{class o{constructor(){this.menu=d}}return o.\u0275fac=function(a){return new(a||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(a,h){1&a&&(n.TgZ(0,"ngx-one-column-layout"),n._UZ(1,"nb-menu",0),n._UZ(2,"router-outlet"),n.qZA()),2&a&&(n.xp6(1),n.Q6J("items",h.menu))},directives:[C.s,i.mBz,c.lC],styles:["[_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),o})(),children:[{path:"dashboard",loadChildren:()=>Promise.resolve().then(t.bind(t,5683)).then(o=>o.DashboardModule)},{path:"customer",loadChildren:()=>Promise.all([t.e(592),t.e(757)]).then(t.bind(t,4757)).then(o=>o.CustomerModule)},{path:"group",loadChildren:()=>Promise.all([t.e(592),t.e(404)]).then(t.bind(t,6404)).then(o=>o.GroupModule)},{path:"address",loadChildren:()=>t.e(271).then(t.bind(t,6271)).then(o=>o.AddressModule)},{path:"contract",loadChildren:()=>Promise.all([t.e(592),t.e(529)]).then(t.bind(t,1529)).then(o=>o.ContractModule)},{path:"invoice",loadChildren:()=>Promise.all([t.e(592),t.e(662)]).then(t.bind(t,2662)).then(o=>o.InvoiceModule)},{path:"bill",loadChildren:()=>t.e(374).then(t.bind(t,6374)).then(o=>o.BillModule)},{path:"parameter",loadChildren:()=>Promise.all([t.e(592),t.e(575)]).then(t.bind(t,3575)).then(o=>o.ParameterModule)},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"**",component:m}]}];let Z=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[c.Bz.forChild(P)],c.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[Z,s.O,i.j5J,p.DashboardModule,e]]}),o})()}}]);