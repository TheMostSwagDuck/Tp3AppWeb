(function(e){function t(t){for(var n,s,o=t[0],c=t[1],u=t[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);l&&l(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/Tp3AppWeb/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0127":function(e,t,r){},"034f":function(e,t,r){"use strict";r("0127")},"357d":function(e,t,r){e.exports=r.p+"img/liked.9f611119.png"},"45c6":function(e,t,r){"use strict";(function(e){r("063a"),r("e2c0"),r("bcee"),r("e4bd"),r("b900");function n(t){var r=t.split(".")[1],n=e.from(r,"base64");return JSON.parse(n.toString())}function a(e){return n(e).exp}function i(e){return n(e).sub}function s(e){var t=n(e).exp;return!(Date.now()>=1e3*t)}t["a"]={decrypt:n,isAlive:s,getUserId:i,getExpiration:a}}).call(this,r("257d").Buffer)},"56d7":function(e,t,r){"use strict";r.r(t);r("5675"),r("58c3"),r("59f3"),r("3e3e");var n=r("d04a"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("NavigationBar"),r("router-view")],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar navbar-expand navbar-dark bg-dark"},[r("a",{staticClass:"navbar-brand"},[e._v("TP3")]),e._m(0),r("div",{staticClass:"collapse navbar-collapse"},[r("router-link",{staticClass:"nav-link active",attrs:{to:{name:"Home"}}},[e._v("Accueil")]),!1===e.isLoggedIn?r("router-link",{staticClass:"nav-link active",attrs:{to:{name:"Login"}}},[e._v("Connexion")]):e._e(),e.isLoggedIn?r("a",{staticClass:"nav-link active",attrs:{id:"logoutLink"},on:{click:e.logout}},[e._v("Déconnexion")]):e._e()],1)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})])}],c={computed:{isLoggedIn:function(){return this.$store.getters["authentication/isLoggedIn"]}},methods:{logout:function(){this.$store.dispatch("authentication/logout"),this.$router.push({name:"Login"})}}},u=c,l=r("bdd7"),p=Object(l["a"])(u,s,o,!1,null,null,null),d=p.exports,m={name:"App",components:{NavigationBar:d}},f=m,v=(r("034f"),Object(l["a"])(f,a,i,!1,null,null,null)),h=v.exports,g=r("dc3b"),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home",staticStyle:{"margin-top":"50px"}},[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{staticStyle:{"margin-left":"50px"}},[r("Selection")],1),r("b-col",{staticStyle:{"margin-right":"50px"},attrs:{cols:"7"}},[r("Map")],1)],1)],1)],1)},b=[],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("l-map",{ref:"map",staticStyle:{height:"400px"},attrs:{zoom:e.zoom,center:e.center}},[r("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),e._l(e.polylines,(function(t){return r("l-polyline",{key:t.id,attrs:{"lat-lngs":t.latlngs,color:e.getColor(t.level)}})}))],2)],1)},x=[],R=r("c452"),_=(r("833b"),r("e128"),r("bcee"),r("adc5"),r("608b")),E=r("e0fd"),T=r("5976"),O=r("8aad"),y=r.n(O),I="https://tp3-api.herokuapp.com";function S(e){return L.apply(this,arguments)}function L(){return L=Object(R["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["get"]("".concat(I,"/api/segments/")+t+"/");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}var C={getSegmentById:S},j={welcomeMessage:"Allo tout le monde !"},P={SERVER_ERROR_TITLE:"Une erreur serveur est survenue!",CLIENT_ERROR_TITLE:"Une erreur côté client est survenue!",IMPOSSIBLE_ACTION_ERROR_TITLE:"Action Impossible",NEEDED_CONNECTION_ACTION:"Veuillez vous connecter faire cette action",Selection:{IMPOSSIBLE_ACTION:function(e){return"Impossible de "+e+" pour le moment..."},IMPOSSIBlE_LOADING:function(e){return"Impossible de charger "+e},CANT_LOAD_USER:"Erreur du chargement du profile"},Map:{CANT_LOAD_TRAIL:"Impossible de charger le sentier choisi"}};j.install=function(e){e.prototype.$getUiText=function(e){return j[e]}};var N=j,A={components:{LMap:_["a"],LTileLayer:E["a"],LPolyline:T["a"]},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:"TP3 app web",zoom:12,center:[46.81,-71.22],polylines:[]}},computed:{trail:function(){return this.$store.state.map.selectedTrail}},methods:{setNewFocus:function(){for(var e=[],t=0;t<this.polylines.length;t++)for(var r=0;r<this.polylines[t].latlngs.length;r++)e.push(this.polylines[t].latlngs[r]);this.$refs.map.mapObject.fitBounds(e)},loadPolyline:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=[],n=0,a=!1,t.next=5,e.trail.segments.forEach(function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(t){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.getSegmentById(t);case 3:i=e.sent,n++,s={id:n,latlngs:i.coordinates,level:i.level},r.push(s),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),a=!0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}());case 5:a?e.makeToast(P.Map.CANT_LOAD_TRAIL,P.SERVER_ERROR_TITLE):e.polylines=r;case 6:case"end":return t.stop()}}),t)})))()},getColor:function(e){return"Facile"===e?"green":"Intermédiaire"===e?"blue":"Difficile"===e?"orange":"Très difficile"===e?"red":"black"},makeToast:function(e,t){this.$bvToast.toast(e,{title:t,autoHideDelay:5e3,appendToast:!0})}},watch:{trail:function(){null!==this.trail&&this.loadPolyline()},polylines:function(){this.polylines.length===this.trail.segments.length&&this.setNewFocus()}}},$=A,M=Object(l["a"])($,w,x,!1,null,null,null),B=M.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.isLoggedIn&&!1===e.onError?n("p",{attrs:{id:"userName"}},[e._v("Connecter en tant que "+e._s(this.name))]):e._e(),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedPark,expression:"selectedPark"}],staticClass:"custom-select",attrs:{id:"parksSelect",disabled:e.hasServiceError},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedPark=t.target.multiple?r:r[0]}}},e._l(this.parks,(function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.name))])})),0),n("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedTrail,expression:"selectedTrail"}],staticClass:"custom-select",staticStyle:{"margin-top":"15px"},attrs:{id:"trailsSelect",disabled:e.hasServiceError||null===e.selectedPark},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedTrail=t.target.multiple?r:r[0]}}},e._l(e.trails,(function(t){return n("option",{key:t.id,domProps:{value:t}},[e._v(e._s(t.name))])})),0),null!==e.selectedTrail?n("b-container",{attrs:{id:"trailInfo",fluid:""}},[n("b-row",{staticStyle:{"margin-top":"15px"}},[n("b-col",[e.likeLoading?n("img",{staticStyle:{height:"50px"},attrs:{src:r("dadb")}}):e._e(),!0===e.isLiked&&!1===e.likeLoading?n("img",{staticStyle:{height:"50px"},attrs:{id:"liked",src:r("357d"),alt:"liked"},on:{click:function(t){return e.unlike()}}}):e._e(),!1===e.isLiked&&!1===e.likeLoading?n("img",{staticStyle:{height:"50px"},attrs:{id:"disliked",src:r("fdaf"),alt:"notLiked"},on:{click:function(t){return e.like()}}}):e._e()]),n("b-col",[n("p",{attrs:{id:"trailName"}},[e._v(e._s(this.selectedTrail.name))])])],1),n("b-row",{staticStyle:{"margin-top":"15px"}},[n("b-col",[n("p",{attrs:{id:"nbLikes"}},[e._v(e._s(this.likes.length))])]),n("b-col",[n("p",{attrs:{id:"parkName"}},[e._v("Parc: "+e._s(this.selectedTrail.park))])])],1)],1):e._e()],1)},U=[],z=(r("e687"),{data:function(){return{selectedPark:null,selectedTrail:null,hasServiceError:!1,isLiked:!1,likeLoading:!1}},created:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("map/loadParks");case 3:t.next=9;break;case 5:t.prev=5,t.t0=t["catch"](0),e.hasServiceError=!0,e.makeToast(P.Selection.IMPOSSIBlE_LOADING("les parks"),P.SERVER_ERROR_TITLE);case 9:if(!e.isLoggedIn){t.next=13;break}return t.next=12,e.$store.dispatch("profile/getProfile");case 12:e.onError&&e.makeToast(P.Selection.CANT_LOAD_USER,P.SERVER_ERROR_TITLE);case 13:case"end":return t.stop()}}),t,null,[[0,5]])})))()},watch:{selectedPark:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.loadTrails();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),selectedTrail:function(){var e=Object(R["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(null===this.selectedTrail){e.next=7;break}return this.likeLoading=!0,e.next=4,this.$store.dispatch("map/updateSelectedTrail",this.selectedTrail);case 4:return e.next=6,this.getLike();case 6:this.likeLoading=!1;case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},computed:{isLoggedIn:function(){return this.$store.getters["authentication/isLoggedIn"]},onError:function(){return this.$store.state.profile.onError},name:function(){return this.$store.state.profile.name},parks:function(){return this.$store.state.map.parks},trails:function(){return this.$store.state.map.trails},likes:function(){return this.$store.state.map.likes}},methods:{loadTrails:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("map/loadTrails",e.selectedPark.id);case 3:t.next=9;break;case 5:t.prev=5,t.t0=t["catch"](0),e.hasServiceError=!0,e.makeToast(P.Selection.IMPOSSIBlE_LOADING("les sentiers pour le park choisi"),P.SERVER_ERROR_TITLE);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()},getLike:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.updateLikes();case 2:if(!e.isLoggedIn||e.onError){t.next=6;break}return t.next=5,e.$store.dispatch("profile/hasLiked",e.likes);case 5:e.isLiked=t.sent;case 6:case"end":return t.stop()}}),t)})))()},like:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.likeLoading=!0,!e.isLoggedIn){t.next=14;break}return t.prev=2,t.next=5,e.$store.dispatch("profile/likeTrail",e.selectedTrail.id);case 5:e.isLiked=!0,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),e.makeToast(P.Selection.IMPOSSIBLE_ACTION("like"),P.SERVER_ERROR_TITLE);case 11:e.updateLikes(),t.next=15;break;case 14:e.makeToast(P.NEEDED_CONNECTION_ACTION,P.IMPOSSIBLE_ACTION_ERROR_TITLE);case 15:e.likeLoading=!1;case 16:case"end":return t.stop()}}),t,null,[[2,8]])})))()},unlike:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.likeLoading=!0,!e.isLoggedIn){t.next=15;break}return t.prev=2,t.next=5,e.$store.dispatch("profile/dislikeTrail",e.likes);case 5:e.isLiked=!1,t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),e.makeToast(P.Selection.IMPOSSIBLE_ACTION("retirer un like"),P.SERVER_ERROR_TITLE);case 11:return t.next=13,e.updateLikes();case 13:t.next=16;break;case 15:e.makeToast(P.NEEDED_CONNECTION_ACTION,P.IMPOSSIBLE_ACTION_ERROR_TITLE);case 16:e.likeLoading=!1;case 17:case"end":return t.stop()}}),t,null,[[2,8]])})))()},updateLikes:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$store.dispatch("map/updateLikes",e.selectedTrail);case 3:t.next=9;break;case 5:t.prev=5,t.t0=t["catch"](0),e.isLiked=!1,e.makeToast(P.Selection.IMPOSSIBlE_LOADING("le nombre de like du sentier"),P.SERVER_ERROR_TITLE);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})))()},makeToast:function(e,t){this.$bvToast.toast(e,{title:t,autoHideDelay:5e3,appendToast:!0})}}}),V=z,G=Object(l["a"])(V,D,U,!1,null,null,null),H=G.exports,F={components:{Map:B,Selection:H}},q=F,J=Object(l["a"])(q,k,b,!1,null,null,null),W=J.exports,K=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("div",{staticClass:"col d-flex justify-content-center"},[r("div",{staticClass:"card w-75 mt-3"},[r("div",{staticClass:"card-header bg-dark text-light"},[e._v(" Login ")]),r("div",{staticClass:"card-body"},[r("div",{staticClass:"input-group mb-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"input-group-prepend mt-3"},[r("div",{staticClass:"row w-100"},[r("div",{staticClass:"input-group-text col"},[e._v("Email:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control w-100 col-8",attrs:{type:"text",placeholder:"ABC@fournisseur.ca","aria-label":"Email","aria-describedby":"basic-addon1"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),r("div",{staticClass:"input-group-prepend mt-3"},[r("div",{staticClass:"row w-100"},[r("div",{staticClass:"input-group-text col"},[e._v("Mot de Passe:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control w-100 col-8",attrs:{type:"password",placeholder:"Mots de Passe","aria-label":"Password","aria-describedby":"basic-addon1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])])])])])])]),r("div",{staticClass:"loginButton mt-4 w-75"},[r("button",{staticClass:"btn btn-primary",attrs:{id:"login"},on:{click:function(t){return e.login()}}},[e._v("Se Connecter")]),r("router-link",{staticClass:"nav-link active",attrs:{id:"toRegister",to:{name:"Register"}}},[e._v("Créer un compte")]),e.authServiceError?r("div",{attrs:{id:"errorMsg"}},[e._v(e._s(e.authServiceError))]):e._e()],1)])},Q=[],X={name:"Login",created:function(){this.$store.commit("authentication/clearError")},data:function(){return{email:"",password:""}},methods:{login:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("authentication/login",{email:e.email,password:e.password});case 2:e.authServiceError||e.$router.push({name:"Home"});case 3:case"end":return t.stop()}}),t)})))()}},computed:{authServiceError:function(){return this.$store.state.authentication.authServiceError}}},Y=X,Z=Object(l["a"])(Y,K,Q,!1,null,null,null),ee=Z.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("div",{staticClass:"col d-flex justify-content-center"},[r("div",{staticClass:"card w-75 mt-3"},[r("div",{staticClass:"card-header bg-dark text-light"},[e._v(" Créer un compte ")]),r("div",{staticClass:"card-body"},[r("div",{staticClass:"input-group mb-3"},[r("div",{staticClass:"container"},[r("div",{staticClass:"input-group-prepend mt-3"},[r("div",{staticClass:"row w-100"},[r("div",{staticClass:"input-group-text col"},[e._v("Email:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control w-100 col-8",attrs:{type:"text",placeholder:"ABC@fournisseur.ca","aria-label":"Email","aria-describedby":"basic-addon1"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),r("div",{staticClass:"input-group-prepend mt-3"},[r("div",{staticClass:"row w-100"},[r("div",{staticClass:"input-group-text col"},[e._v("Mot de Passe:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control w-100 col-8",attrs:{type:"password",placeholder:"Mots de Passe","aria-label":"Password","aria-describedby":"basic-addon1"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})])]),r("div",{staticClass:"input-group-prepend mt-3"},[r("div",{staticClass:"row w-100"},[r("div",{staticClass:"input-group-text col"},[e._v("Nom Compte:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control w-100 col-8",attrs:{type:"text",placeholder:"Nom du Compte","aria-label":"Name","aria-describedby":"basic-addon1"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])])])])])])]),r("div",{staticClass:"registerButton mt-3"},[r("button",{staticClass:"btn btn-primary",attrs:{id:"register"},on:{click:function(t){return e.register()}}},[e._v("Créer le compte")]),e.authServiceError?r("div",{attrs:{id:"errorMsg"}},[e._v(e._s(e.authServiceError))]):e._e()])])},re=[],ne={name:"Register",data:function(){return{email:"",password:"",name:""}},methods:{register:function(){var e=this;return Object(R["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("authentication/register",{email:e.email,password:e.password,name:e.name});case 2:e.authServiceError||e.$router.push({name:"Login"});case 3:case"end":return t.stop()}}),t)})))()}},computed:{authServiceError:function(){return this.$store.state.authentication.authServiceError}}},ae=ne,ie=Object(l["a"])(ae,te,re,!1,null,null,null),se=ie.exports,oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ce=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-container ",staticStyle:{"margin-top":"50px"}},[r("span",{staticClass:"title"},[e._v("Cette page n'existe pas...")])])}],ue={},le=Object(l["a"])(ue,oe,ce,!1,null,null,null),pe=le.exports,de=[{path:"/",name:"Root",redirect:"/home"},{path:"/home",name:"Home",component:W},{path:"/login",name:"Login",component:ee},{path:"/register",name:"Register",component:se},{path:"*",name:"PageNotFound",component:pe}];n["default"].use(g["a"]);var me=new g["a"]({mode:"history",base:"/Tp3AppWeb/",routes:de}),fe=me,ve=r("6c71"),he=r("5a19"),ge=r("5d80"),ke=r("7946"),be=r("a927"),we=r("e0e0"),xe=(r("bfa3"),function(e){Object(ke["a"])(r,e);var t=Object(be["a"])(r);function r(e,n,a){var i;return Object(ge["a"])(this,r),i=t.call(this,e),i.codeText=n,i.code=a,i}return Object(he["a"])(r)}(Object(we["a"])(Error)));function Re(e){if(_e(e)){var t=new xe("Erreur avec le réseau. Impossible de communiquer avec le serveur.");return t}var r=new xe(e.response.data,e.response.statusText,e.response.status);return r}function _e(e){return!!e.isAxiosError&&!e.response}function Ee(e){return Te.apply(this,arguments)}function Te(){return Te=Object(R["a"])(regeneratorRuntime.mark((function e(t){var r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("".concat(I,"/login"),{email:t.email,password:t.password});case 3:return r=e.sent,n=r.data.accessToken,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e["catch"](0),Re(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),Te.apply(this,arguments)}function Oe(e){return ye.apply(this,arguments)}function ye(){return ye=Object(R["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.post("".concat(I,"/register"),{email:t.email,password:t.password,name:t.name});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),Re(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),ye.apply(this,arguments)}var Ie={getToken:Ee,postUser:Oe},Se=r("45c6"),Le={token:"",authServiceError:""},Ce={isLoggedIn:function(e){return!!e.token},getTokenUserId:function(e){var t=Se["a"].getUserId(e.token);return t}},je={clearError:function(e){e.authServiceError=""},initializeAuthentication:function(e,t){e.token=t,e.authServiceError=""},logout:function(e){e.token=""},setAuthServiceError:function(e,t){e.authServiceError=t}},Pe={login:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,Ie.getToken(t);case 4:a=r.sent,n("initializeAuthentication",a),r.next=11;break;case 8:r.prev=8,r.t0=r["catch"](1),n("setAuthServiceError",r.t0.message);case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},logout:function(e){var t=e.commit;t("logout")},register:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,Ie.postUser(t);case 4:n("setAuthServiceError",""),r.next=10;break;case 7:r.prev=7,r.t0=r["catch"](1),n("setAuthServiceError",r.t0.message);case 10:case"end":return r.stop()}}),r,null,[[1,7]])})))()}},Ne={namespaced:!0,state:Le,actions:Pe,mutations:je,getters:Ce},Ae=(r("2cba"),r("351c"),y.a.create({}));Ae.interceptors.request.use((function(e){return ot.getters["authentication/isLoggedIn"]&&(e.headers.authorization="Bearer ".concat(ot.state.authentication.token)),e}));var $e=Ae;function Me(e){return Be.apply(this,arguments)}function Be(){return Be=Object(R["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$e.get("".concat(I,"/users/").concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),Re(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),Be.apply(this,arguments)}function De(e,t){return Ue.apply(this,arguments)}function Ue(){return Ue=Object(R["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$e.post("".concat(I,"/api/likes"),{userId:t,trailId:r});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)}))),Ue.apply(this,arguments)}function ze(e){return Ve.apply(this,arguments)}function Ve(){return Ve=Object(R["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$e.delete("".concat(I,"/api/likes/").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),Ve.apply(this,arguments)}var Ge={getUserById:Me,likeTrail:De,dislikeTrail:ze},He={email:"",name:"",onError:!1},Fe={},qe={initializeProfile:function(e,t){e.email=t.email,e.name=t.name,e.onError=!1},setOnError:function(e){e.onError=!0}},Je={getProfile:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.rootGetters,t.prev=1,a=n["authentication/getTokenUserId"],t.next=5,Ge.getUserById(a);case 5:i=t.sent,r("initializeProfile",i),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](1),r("setOnError");case 12:case"end":return t.stop()}}),t,null,[[1,9]])})))()},hasLiked:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.rootGetters,a=n["authentication/getTokenUserId"],r.next=4,t.some((function(e){return e.userId===a}));case 4:return i=r.sent,r.abrupt("return",i);case 6:case"end":return r.stop()}}),r)})))()},likeTrail:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.rootGetters,a=n["authentication/getTokenUserId"],r.next=4,Ge.likeTrail(a,t);case 4:return i=r.sent,r.abrupt("return",i);case 6:case"end":return r.stop()}}),r)})))()},dislikeTrail:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,i,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.rootGetters,a=n["authentication/getTokenUserId"],r.next=4,t.find((function(e){return e.userId===a}));case 4:return i=r.sent,r.next=7,Ge.dislikeTrail(i.id);case 7:return s=r.sent,r.abrupt("return",s);case 9:case"end":return r.stop()}}),r)})))()}},We={namespaced:!0,state:He,actions:Je,mutations:qe,getters:Fe};r("cde7");function Ke(){return Qe.apply(this,arguments)}function Qe(){return Qe=Object(R["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["get"]("".concat(I,"/api/parks"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)}))),Qe.apply(this,arguments)}function Xe(e){return Ye.apply(this,arguments)}function Ye(){return Ye=Object(R["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["get"]("".concat(I,"/api/parks/")+t+"/trails");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),Ye.apply(this,arguments)}var Ze={getParks:Ke,getTrailsByParkId:Xe};function et(e){return tt.apply(this,arguments)}function tt(){return tt=Object(R["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O["get"]("".concat(I,"/api/trails/")+t+"/likes");case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)}))),tt.apply(this,arguments)}var rt={getNbLikesByTrailId:et},nt={parks:[],trails:[],selectedTrail:null,likes:[]},at={initializeParks:function(e,t){e.parks=t,e.trails=[],e.likes=[],e.selectedTrail=null},setTrails:function(e,t){e.trails=t},setSelectedTrail:function(e,t){e.selectedTrail=t},setLikes:function(e,t){e.likes=t}},it={loadParks:function(e){return Object(R["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,Ze.getParks();case 3:n=t.sent,a=n.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})),r("initializeParks",a);case 6:case"end":return t.stop()}}),t)})))()},loadTrails:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.next=3,Ze.getTrailsByParkId(t);case 3:a=r.sent,i=a.sort((function(e,t){return e.name>t.name?1:t.name>e.name?-1:0})),n("setTrails",i);case 6:case"end":return r.stop()}}),r)})))()},updateSelectedTrail:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:n=e.commit,a=e.dispatch,n("setSelectedTrail",t),null!=t&&a("updateLikes",t);case 3:case"end":return r.stop()}}),r)})))()},updateLikes:function(e,t){return Object(R["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,r.prev=1,r.next=4,rt.getNbLikesByTrailId(t.id);case 4:a=r.sent,n("setLikes",a),r.next=12;break;case 8:throw r.prev=8,r.t0=r["catch"](1),n("setLikes",[]),new Error("Impossible de load le nombre de like");case 12:case"end":return r.stop()}}),r,null,[[1,8]])})))()}},st={namespaced:!0,state:nt,actions:it,mutations:at};n["default"].use(ve["a"]);var ot=new ve["a"].Store({modules:{authentication:Ne,profile:We,map:st}}),ct=r("d422"),ut=r("8472"),lt=(r("5f3e"),r("41cf"),r("9a6e"),r("9b4d")),pt=r.n(lt);delete pt.a.Icon.Default.prototype._getIconUrl,pt.a.Icon.Default.mergeOptions({iconRetinaUrl:r("a741"),iconUrl:r("843f"),shadowUrl:r("9021")}),n["default"].use(ct["a"]),n["default"].use(ut["a"]),n["default"].use(N),n["default"].config.productionTip=!1,new n["default"]({router:fe,store:ot,render:function(e){return e(h)}}).$mount("#app")},dadb:function(e,t,r){e.exports=r.p+"img/loadingWaiting.9da8a7ce.gif"},fdaf:function(e,t,r){e.exports=r.p+"img/notLiked.bed171f3.png"}});
//# sourceMappingURL=app.eb433b67.js.map