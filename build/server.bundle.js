!function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=9)}([function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t){e.exports=require("express")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.asyncMiddleware=function(e){return function(t,r,n){e(t,r,n).catch(n)}}},function(e,t){e.exports=require("jsonwebtoken")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.authUser=t.createUser=void 0;var n=s(r(1)),u=s(r(0)),o=s(r(4));function s(e){return e&&e.__esModule?e:{default:e}}var a,c;t.createUser=(a=(0,u.default)(n.default.mark(function e(t,r,u){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.send("create user resource");case 1:case"end":return e.stop()}},e,void 0)})),function(e,t,r){return a.apply(this,arguments)}),t.authUser=(c=(0,u.default)(n.default.mark(function e(t,r,u){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:o.default.sign({user:"test_user"},"secret",{expiresIn:10},function(e,t){r.send("token: "+t)});case 1:case"end":return e.stop()}},e,void 0)})),function(e,t,r){return c.apply(this,arguments)})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=c(r(1)),u=c(r(0)),o=r(2),s=r(5),a=r(3);function c(e){return e&&e.__esModule?e:{default:e}}var i,f=(0,o.Router)();f.get("/",(0,a.asyncMiddleware)((i=(0,u.default)(n.default.mark(function e(t,r){return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.send("please login");case 1:case"end":return e.stop()}},e,void 0)})),function(e,t){return i.apply(this,arguments)}))),f.post("/",(0,a.asyncMiddleware)(s.createUser)),f.get("/auth",(0,a.asyncMiddleware)(s.authUser)),t.default=f},function(e,t){e.exports=require("cookie-parser")},function(e,t){e.exports=require("body-parser")},function(e,t,r){"use strict";var n=a(r(2)),u=a(r(8)),o=a(r(7)),s=a(r(6));function a(e){return e&&e.__esModule?e:{default:e}}var c=(0,n.default)();c.use(u.default.json()),c.use(u.default.urlencoded({extended:!1})),c.use((0,o.default)()),c.use("/api",s.default),c.use("/",function(e,t){t.send("request: "+e.url)}),c.listen(3e3)}]);