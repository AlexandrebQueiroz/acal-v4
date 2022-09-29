"use strict";(self.webpackChunkacal_web=self.webpackChunkacal_web||[]).push([[888],{888:(N,p,a)=>{a.r(p),a.d(p,{CustomerModule:()=>q});var c=a(6019),s=a(9133),r=a(4348),Z=a(5531),t=a(3668);let h=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[],imports:[[c.ez]]}),e})();var d=a(7128);let m=(()=>{class e{constructor(o){this.firestore=o}get(){const o=(0,d.hJ)(this.firestore,"customer");return(0,d.BS)(o)}add(o){const n=(0,d.hJ)(this.firestore,"customer");return(0,d.ET)(n,o)}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(d.gg))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var l=a(4382);let f=(()=>{class e{transform(o,...n){return null==o?void 0:o.padStart(11,"0").substring(0,11).replace(/[^0-9]/,"").replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=t.Yjl({name:"cpf",type:e,pure:!0}),e})();function g(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td",15),t._uU(2),t.qZA(),t.TgZ(3,"td",15),t._uU(4),t.ALo(5,"cpf"),t.qZA(),t.TgZ(6,"td"),t.TgZ(7,"button",16),t.NdJ("click",function(){return t.CHM(o),t.oxw().add()}),t._UZ(8,"nb-icon",17),t.qZA(),t.qZA(),t.TgZ(9,"td"),t.TgZ(10,"button",18),t.NdJ("click",function(){return t.CHM(o),t.oxw().add()}),t._UZ(11,"nb-icon",19),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=i.$implicit;t.xp6(2),t.Oqu(null==o?null:o.name),t.xp6(2),t.Oqu(t.lcZ(5,2,null==o?null:o.document))}}let b=(()=>{class e{constructor(o,n,u){this.service=o,this.activatedRoute=n,this.router=u}ngOnInit(){this.item$=this.service.get()}add(){this.router.navigate(["./../add"],{relativeTo:this.activatedRoute})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(m),t.Y36(l.gz),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ngx-customer-list"]],decls:36,vars:3,consts:[["pack","eva","icon","funnel-outline","attr.aria-label","Filtro"],[1,"row"],[1,"col-9"],["type","text","nbInput","","fullWidth","","placeholder","Nome:"],[1,"col-2"],["type","text","nbInput","","fullWidth","","placeholder","Documento:"],[1,"col-1"],["nbButton","","fullWidth","","outline","",3,"click"],["pack","eva","icon","search-outline","attr.aria-label","adicionar usuario"],[1,"table-responsive"],[1,"table","table-striped","table-hover"],["colspan","2",1,"col-1"],["colspan","2"],["pack","eva","icon","plus-outline","attr.aria-label","adicionar usuario"],[4,"ngFor","ngForOf"],[1,"align-middle"],["nbButton","","fullWidth","","outline","","status","success",3,"click"],["pack","eva","icon","edit-outline","attr.aria-label","adicionar usuario"],["nbButton","","fullWidth","","outline","","status","danger",3,"click"],["pack","eva","icon","trash-2-outline","attr.aria-label","adicionar usuario"]],template:function(o,n){1&o&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-header"),t.TgZ(2,"nb-accordion"),t.TgZ(3,"nb-accordion-item"),t.TgZ(4,"nb-accordion-item-header"),t._UZ(5,"nb-icon",0),t._uU(6," Filtros "),t.qZA(),t.TgZ(7,"nb-accordion-item-body"),t.TgZ(8,"div",1),t.TgZ(9,"div",2),t._UZ(10,"input",3),t.qZA(),t.TgZ(11,"div",4),t._UZ(12,"input",5),t.qZA(),t.TgZ(13,"div",6),t.TgZ(14,"button",7),t.NdJ("click",function(){return n.add()}),t._UZ(15,"nb-icon",8),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(16,"nb-card-body"),t.TgZ(17,"div",9),t.TgZ(18,"table",10),t.TgZ(19,"thead"),t.TgZ(20,"tr"),t.TgZ(21,"th",2),t._uU(22," Nome"),t.qZA(),t.TgZ(23,"th",4),t._uU(24," Documento"),t.qZA(),t.TgZ(25,"th",11),t._uU(26,"A\xe7\xf5es"),t.qZA(),t.qZA(),t.qZA(),t.TgZ(27,"thead"),t.TgZ(28,"tr"),t._UZ(29,"th",12),t.TgZ(30,"th",12),t.TgZ(31,"button",7),t.NdJ("click",function(){return n.add()}),t._UZ(32,"nb-icon",13),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(33,"tbody"),t.YNc(34,g,12,4,"tr",14),t.ALo(35,"async"),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.xp6(34),t.Q6J("ngForOf",t.lcZ(35,1,n.item$)))},directives:[r.Asz,r.ndF,r.qCO,r.SaG,r.YZd,r.fMN,r.AvE,r.h8i,r.DPz,r.yKW,c.sg],pipes:[c.Ov,f],styles:[""]}),e})();function C(e,i){1&e&&(t.TgZ(0,"span",15),t._uU(1," Campo Obrigat\xf3rio "),t.qZA())}function T(e,i){1&e&&(t.TgZ(0,"span",15),t._uU(1," Campo Obrigat\xf3rio "),t.qZA())}const v=[{path:"",component:(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["ngx-customer"]],decls:5,vars:0,consts:[["pack","eva","icon","person-outline"]],template:function(o,n){1&o&&(t.TgZ(0,"nb-card"),t.TgZ(1,"nb-card-header"),t._UZ(2,"nb-icon",0),t._uU(3," Associados "),t.qZA(),t.qZA(),t._UZ(4,"router-outlet"))},directives:[r.Asz,r.ndF,r.fMN,l.lC],encapsulation:2}),e})(),children:[{path:"add",component:(()=>{class e{constructor(o,n,u,y,k){this.toast=o,this.fb=n,this.service=u,this.activatedRoute=y,this.router=k,this.showPerson=!0,this.isSubmmited=!1,this.loading=!1}ngOnInit(){this.createForm()}tooglePersonType(){this.showPerson=!this.showPerson,this.document().setValue(null)}createForm(){this.form=this.fb.group({name:["",s.kI.required],document:["",[s.kI.required]],bithday:[""],phoneNumber:[""],createdAt:[Date()],active:[!0]})}onSubmit(){this.isSubmmited=!0,!this.form.invalid&&(this.loading=!0,this.service.add(this.form.value).then(o=>{this.toast.default(null==o?void 0:o.id,"Dado salvo"),this.loading=!1,this.router.navigate(["./../list"],{relativeTo:this.activatedRoute})},()=>{this.loading=!1}))}back(){this.router.navigate(["./../list"],{relativeTo:this.activatedRoute})}getStatus(o){return this.isSubmmited?o.valid?"success":"danger":"basic"}name(){return this.form.get("name")}document(){return this.form.get("document")}bithday(){return this.form.get("bithday")}phoneNumber(){return this.form.get("phoneNumber")}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(r.quB),t.Y36(s.qu),t.Y36(m),t.Y36(l.gz),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["ngx-customer-add"]],decls:30,vars:16,consts:[[1,"form",3,"formGroup","nbSpinner","ngSubmit"],[1,"row"],[1,"col-xl-8","col-md-6","col-12","form-group"],[1,"label"],["type","text","nbInput","","fullWidth","","formControlName","name","placeholder","Nome:",1,"form-control",3,"status"],["class","text-danger label",4,"ngIf"],[1,"col-xl-4","col-md-6","col-12","form-group"],["type","text","nbInput","","fullWidth","","status","basic","formControlName","document",1,"form-control",3,"placeholder","status","mask"],["nbSuffix","","nbButton","","ghost","","type","button",3,"click"],["pack","eva",3,"icon"],[1,"col-md-6","col-12","form-group"],["type","text","nbInput","","fullWidth","","status","basic","formControlName","bithday","mask","00/00/0000",1,"form-control",3,"placeholder","status"],["type","text","nbInput","","fullWidth","","status","basic","formControlName","phoneNumber","mask","(00)0 0000-0000",1,"form-control",3,"placeholder","status"],["nbButton","","type","button",1,"m-1",3,"click"],["nbButton","","type","submit",1,"m-1"],[1,"text-danger","label"]],template:function(o,n){1&o&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return n.onSubmit()}),t.TgZ(1,"nb-card"),t.TgZ(2,"nb-card-body"),t.TgZ(3,"div",1),t.TgZ(4,"div",2),t.TgZ(5,"span",3),t._uU(6," Nome:* "),t.qZA(),t._UZ(7,"input",4),t.YNc(8,C,2,0,"span",5),t.qZA(),t.TgZ(9,"div",6),t.TgZ(10,"span",3),t._uU(11),t.qZA(),t.TgZ(12,"nb-form-field"),t._UZ(13,"input",7),t.TgZ(14,"button",8),t.NdJ("click",function(){return n.tooglePersonType()}),t._UZ(15,"nb-icon",9),t.qZA(),t.qZA(),t.YNc(16,T,2,0,"span",5),t.qZA(),t.TgZ(17,"div",10),t.TgZ(18,"span",3),t._uU(19),t.qZA(),t._UZ(20,"input",11),t.qZA(),t.TgZ(21,"div",10),t.TgZ(22,"span",3),t._uU(23," N\xfamero de telefone "),t.qZA(),t._UZ(24,"input",12),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"nb-card-footer"),t.TgZ(26,"button",13),t.NdJ("click",function(){return n.back()}),t._uU(27," Voltar "),t.qZA(),t.TgZ(28,"button",14),t._uU(29," Enviar "),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&o&&(t.Q6J("formGroup",n.form)("nbSpinner",n.loading),t.xp6(7),t.Q6J("status",n.getStatus(n.name())),t.xp6(1),t.Q6J("ngIf",n.isSubmmited&&n.name().hasError("required")),t.xp6(3),t.hij(" ",n.showPerson?"C.P.F*:":"C.N.P.J*:"," "),t.xp6(2),t.Q6J("placeholder",n.showPerson?"C.P.F*:":"C.N.P.J*:")("status",n.getStatus(n.document()))("mask",n.showPerson?"000.000.000-00":"00.000.000/0000-00"),t.xp6(2),t.Q6J("icon",n.showPerson?"person-outline":"car-outline"),t.uIk("aria-label",n.showPerson?"hide password":"show password"),t.xp6(1),t.Q6J("ngIf",n.isSubmmited&&n.document().hasError("required")),t.xp6(3),t.hij(" ",n.showPerson?"Data de nascimento:":"Abertura da empresa:"," "),t.xp6(1),t.Q6J("placeholder",n.showPerson?"Data de nascimento:":"Abertura da empresa:")("status",n.getStatus(n.bithday())),t.xp6(4),t.Q6J("placeholder","N\xfamero de telefone")("status",n.getStatus(n.phoneNumber())))},directives:[s._Y,s.JL,s.sg,r.Q7R,r.Asz,r.yKW,r.h8i,s.Fj,s.JJ,s.u,c.O5,r.jBG,Z.hx,r.DPz,r.yyc,r.fMN,r.XWE],styles:[""]}),e})()},{path:"list",component:b},{path:"",redirectTo:"list"}]},{path:"**",redirectTo:""}];let _=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(v)],l.Bz]}),e})(),q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[m],imports:[[c.ez,_,h,s.UX,Z.yI.forChild(),r.T2N,r.zyh,r.nKr,r.V7y,r.KdK,r.oGl,r.uuI]]}),e})()}}]);