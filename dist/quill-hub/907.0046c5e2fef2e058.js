"use strict";(self.webpackChunkQuillHub=self.webpackChunkQuillHub||[]).push([[907],{6907:(q,v,u)=>{u.r(v),u.d(v,{DetailModule:()=>M});var f=u(6814),d=u(9972),l=u(6223);const h={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let m;const Z=new Uint8Array(16);function S(){if(!m&&(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!m))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(Z)}const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));const k=function A(e,o,a){if(h.randomUUID&&!o&&!e)return h.randomUUID();const n=(e=e||{}).random||(e.rng||S)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,o){a=a||0;for(let i=0;i<16;++i)o[a+i]=n[i];return o}return function g(e,o=0){return r[e[o+0]]+r[e[o+1]]+r[e[o+2]]+r[e[o+3]]+"-"+r[e[o+4]]+r[e[o+5]]+"-"+r[e[o+6]]+r[e[o+7]]+"-"+r[e[o+8]]+r[e[o+9]]+"-"+r[e[o+10]]+r[e[o+11]]+r[e[o+12]]+r[e[o+13]]+r[e[o+14]]+r[e[o+15]]}(n)};var t=u(5879),c=u(8378),D=u(2181),T=u(7398),C=u(2169);let N=(()=>{var e;class o{constructor(n){this._store=n}getAll(){return this._store.select("app")}updateBookById(n){this._store.dispatch((0,c.u8)({book:n}))}getBookById(n){return this.getAll().pipe((0,D.h)(i=>!!i.books),(0,T.U)(i=>i.books?.find(s=>s.Id===n)))}createBook(n){this._store.dispatch((0,c.IY)({book:n}))}deleteBookById(n){this._store.dispatch((0,c.MC)({bookId:n}))}}return(e=o).\u0275fac=function(n){return new(n||e)(t.LFG(C.yh))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),o})();var I=u(2296),b=u(1175),y=u(2032),p=u(1941);function w(e,o){1&e&&(t.TgZ(0,"div",17),t._uU(1," The ISBN is invalid. It should have between 10 and 13 numeric digits. "),t.qZA())}function _(e,o){if(1&e){const a=t.EpF();t.TgZ(0,"div",14)(1,"button",18),t.NdJ("click",function(){t.CHM(a);const i=t.oxw();return t.KtG(i.delete())}),t._UZ(2,"mat-icon",19),t._uU(3,"Delete "),t.qZA()()}}const J=[{path:"",component:(()=>{var e;class o{constructor(n,i,s,V){this._formBuilder=n,this._bookService=i,this._route=s,this._router=V,this.new=!1,this.form=this._formBuilder.group({Id:["",[l.kI.required]],Title:["",[l.kI.required]],Author:["",[l.kI.required]],ISBN:["",[l.kI.required,e=>e.value&&!/^[0-9]{10,13}$/.test(e.value)?{invalidISBN:"The ISBN is invalid. It should have between 10 and 13 numeric digits."}:null]],Genere:["",[l.kI.required]],Available_Copies:["",[l.kI.required]]}),this._route.params.subscribe(Y=>{const U=Y.id;"new"===U?(this.new=!0,this.form.patchValue({Id:k()})):this.form.patchValue({Id:U})})}ngOnInit(){this.new||this._bookService.getBookById(this.form.value.Id).subscribe(n=>{this.form.patchValue(n)})}action(){this.new?this._bookService.createBook(this.form.value):this._bookService.updateBookById(this.form.value),this._router.navigate(["..."])}delete(){this._bookService.deleteBookById(this.form.value.Id),this._router.navigate(["..."])}}return(e=o).\u0275fac=function(n){return new(n||e)(t.Y36(l.qu),t.Y36(N),t.Y36(d.gz),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-detail"]],decls:36,vars:4,consts:[["mat-raised-button","","color","primary","routerLink","...",1,"ms-1"],["fontIcon","arrow_back_ios_new"],[1,"mt-2",3,"formGroup","ngSubmit"],[1,"row","g-2","m-0"],[1,"col-12"],[1,"w-100"],["matInput","","formControlName","Title"],[1,"col-12","col-sm-6"],["matInput","","formControlName","Author"],["type","number","matInput","","formControlName","ISBN"],["class","error-message",4,"ngIf"],["matInput","","formControlName","Genere"],["type","number","matInput","","formControlName","Available_Copies"],["class","col-auto",4,"ngIf"],[1,"col-auto"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],["fontIcon","save"],[1,"error-message"],["mat-raised-button","","color","warn","type","button",3,"click"],["fontIcon","delete"]],template:function(n,i){if(1&n&&(t.TgZ(0,"button",0),t._UZ(1,"mat-icon",1),t._uU(2,"Return\n"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return i.action()}),t.TgZ(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),t._uU(8,"Title"),t.qZA(),t._UZ(9,"input",6),t.qZA()(),t.TgZ(10,"div",7)(11,"mat-form-field",5)(12,"mat-label"),t._uU(13,"Author"),t.qZA(),t._UZ(14,"input",8),t.qZA()(),t.TgZ(15,"div",7)(16,"mat-form-field",5)(17,"mat-label"),t._uU(18,"ISBN"),t.qZA(),t._UZ(19,"input",9),t.YNc(20,w,2,0,"div",10),t.qZA()(),t.TgZ(21,"div",7)(22,"mat-form-field",5)(23,"mat-label"),t._uU(24,"Genere"),t.qZA(),t._UZ(25,"input",11),t.qZA()(),t.TgZ(26,"div",7)(27,"mat-form-field",5)(28,"mat-label"),t._uU(29,"Available copies"),t.qZA(),t._UZ(30,"input",12),t.qZA()(),t.YNc(31,_,4,0,"div",13),t.TgZ(32,"div",14)(33,"button",15),t._UZ(34,"mat-icon",16),t._uU(35,"Save "),t.qZA()()()()),2&n){let s;t.xp6(3),t.Q6J("formGroup",i.form),t.xp6(17),t.Q6J("ngIf",null==i.form||null==(s=i.form.get("ISBN"))?null:s.hasError("invalidISBN")),t.xp6(11),t.Q6J("ngIf",!i.new),t.xp6(2),t.Q6J("disabled",i.form.invalid)}},dependencies:[f.O5,d.rH,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.sg,l.u,I.lW,b.Hw,y.Nt,p.KE,p.hX],encapsulation:2}),o})()}];let x=(()=>{var e;class o{}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(J),d.Bz]}),o})(),M=(()=>{var e;class o{}return(e=o).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.ez,x,l.UX,d.Bz,l.u5,I.ot,b.Ps,y.c,p.lN]}),o})()}}]);