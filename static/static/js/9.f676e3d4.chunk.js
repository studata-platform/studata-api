(window["webpackJsonpdata-science-platform"]=window["webpackJsonpdata-science-platform"]||[]).push([[9,25],{430:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),i=t(152),u=t(5),c=t(4),l=t(76),m=t(53),d=t(49);function s(){var e=Object(u.a)(["\n  margin-left: auto;\n"]);return s=function(){return e},e}function f(){var e=Object(u.a)(["\n  &:hover {\n    text-decoration: underline;\n  }\n\n  &:not(:first-child) {\n    margin-left: 6.2rem;\n  }\n"]);return f=function(){return e},e}function b(){var e=Object(u.a)(["\n  display: flex;\n  margin: auto 0 auto 6.2rem;\n"]);return b=function(){return e},e}function p(){var e=Object(u.a)(["\n  margin-top: 6.4rem;\n  display: flex;\n  color: ",";\n\n  @media (max-width: ",") {\n    margin-top: 2.4rem;\n  }\n"]);return p=function(){return e},e}var v=Object(c.d)(m.b)(p(),(function(e){return e.inverted?e.theme.copy.primaryInverted:e.theme.copy.primary}),o.a.H750),h=c.d.div(b()),g=Object(c.d)(l.b)(f()),O=c.d.div(s()),j=function(e){var n=e.inverted,t=e.navigationLinks,u=e.children,c=Object(r.useRef)(),l=Object(r.useContext)(i.a);if(c.current){var m=c.current.clientHeight;l.setValue(i.b.HeaderHeight,m)}return a.a.createElement(v,{inverted:n,ref:c},a.a.createElement(d.b,{showName:!t}),t&&a.a.createElement(h,null,t.map((function(e){return a.a.createElement(g,Object.assign({},e,{fontWeight:o.e.Bold,serif:!0}),e.children)}))),u&&a.a.createElement(O,null,u))};t.d(n,"default",(function(){return j}))},433:function(e,n,t){"use strict";var r;!function(e){e.Text="text",e.Number="tel",e.Search="search",e.Email="email",e.Phone="tel",e.Password="password"}(r||(r={})),n.a=r},435:function(e,n,t){"use strict";var r=t(0);n.a=function(e,n,t){return Object(r.useEffect)((function(){var r=e.current;if(null!=r)return r.addEventListener(n,t),function(){return r.removeEventListener(n,t)}}),[e,n,t])}},436:function(e,n,t){"use strict";var r=t(5),a=t(4),o=t(69),i=t(95),u=t(0),c=t.n(u),l=t(435),m=t(116);function d(){var e=Object(r.a)(["\n  position: absolute;\n  left: -1rem;\n  top: 50%;\n  padding: 1rem 1.5rem 1rem 4.5rem;\n  border-radius: 0.8rem;\n  white-space: nowrap;\n  background: ",";\n  box-shadow: ",";\n  animation: 0.4s "," forwards;\n"]);return d=function(){return e},e}function s(){var e=Object(r.a)(["\n  position: relative;\n  z-index: 1;\n"]);return s=function(){return e},e}function f(){var e=Object(r.a)(["\n  position: relative;\n  display: inline-block;\n  animation: 0.5s "," forwards;\n\n  svg {\n    display: block;\n  }\n"]);return f=function(){return e},e}function b(){var e=Object(r.a)(["\n  0% {\n    transform: translate(1rem, -50%);\n    opacity: 0;\n  }\n  100% {\n    transform: translate(0rem, -50%);\n    opacity: 1;\n  }\n"]);return b=function(){return e},e}function p(){var e=Object(r.a)(["\n  0% {\n    transform: translateY(1rem);\n    opacity: 0;\n  }\n  100% {\n    transform: translateY(0rem);\n    opacity: 1;\n  }\n"]);return p=function(){return e},e}var v=Object(a.e)(p()),h=Object(a.e)(b()),g=a.d.div(f(),v),O=a.d.div(s()),j=a.d.div(d(),(function(e){return e.theme.tooltip.backgroundColor}),(function(e){return e.theme.tooltip.shadow}),h);function y(){var e=Object(r.a)(["\n    cursor: pointer;\n    fill: ",";\n  "]);return y=function(){return e},e}var E=function(e){var n=e.children,t=e.className,r=e.error,d=e.icon,s=void 0===d?m.a.Info:d,f=Object(u.useRef)(null),b=Object(u.useState)(!1),p=Object(i.a)(b,2),v=p[0],h=p[1];Object(l.a)(f,"mouseenter",(function(){return h(!0)})),Object(l.a)(f,"mouseleave",(function(){return h(!1)}));var E=s,w=Object(a.d)((function(e){e.error;var n=Object(o.a)(e,["error"]);return c.a.createElement(E,n)}))(y(),(function(e){return e.error?e.theme.copy.error:e.theme.copy.secondary}));return c.a.createElement(g,{className:t,ref:f},v&&c.a.createElement(j,null,n),c.a.createElement(O,null,c.a.createElement(w,{error:r})))},w=t(7),x=t(77);function k(){var e=Object(r.a)(["\n  display: inline-flex;\n  position: relative;\n  font-size: 1.4rem;\n  align-items: center;\n  justify-content: center;\n"]);return k=function(){return e},e}function C(){var e=Object(r.a)(["\n  background: ",";\n  border: 1px solid ",";\n  border-radius: ","rem;\n  color: ",";\n  font-size: 1.6rem;\n  line-height: 1;\n  min-height: 7rem;\n  outline: none;\n  padding: 0 ","rem;\n  position: relative;\n  transition: 0.2s "," border-color;\n  width: 100%;\n\n  &::-webkit-outer-spin-button,\n  &::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  /* Firefox */\n  &[type=number] {\n    -moz-appearance:textfield;\n  }\n\n  &:placeholder-shown {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n\n    &:focus + "," {\n      opacity: 0.5;\n    }\n  }\n\n  &:not(:placeholder-shown) {\n    padding-top: 2rem;\n  }\n\n  &:not(:placeholder-shown) + "," {\n    transform: translateY(-1rem);\n    font-size: 1.4rem;\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(r.a)(["\n  position: absolute;\n  left: ","rem;\n  font-weight: ",";\n  font-size: 1.6rem;\n  pointer-events: none;\n  transition: 0.25s "," all;\n"]);return S=function(){return e},e}function z(){var e=Object(r.a)(["\n  position: absolute;\n  right: 2rem;\n"]);return z=function(){return e},e}t.d(n,"d",(function(){return P})),t.d(n,"c",(function(){return R})),t.d(n,"a",(function(){return D})),t.d(n,"b",(function(){return N}));var P=Object(a.d)(E)(z()),R=a.d.label(S(),(function(e){return e.theme.input.padding}),w.e.Black,x.a.easeOutExpo),D=a.d.input(C(),(function(e){return e.theme.input.backgroundColor}),(function(e){return e.theme.input.borderColor}),(function(e){return e.theme.input.borderRadius}),(function(e){return e.theme.input.copyColor}),(function(e){return e.theme.input.padding}),x.a.easeOutExpo,R,R),N=a.d.div(k())},437:function(e,n,t){"use strict";var r=t(95),a=t(69),o=t(0),i=t.n(o),u=t(433),c=t(436),l=function(e){var n=e.className,t=e.defaultValue,l=void 0===t?"":t,m=e.type,d=void 0===m?u.a.Text:m,s=e.onChange,f=e.label,b=e.formatter,p=e.validator,v=Object(a.a)(e,["className","defaultValue","type","onChange","label","formatter","validator"]),h=Object(o.useState)(l),g=Object(r.a)(h,2),O=g[0],j=g[1],y=Object(o.useState)(),E=Object(r.a)(y,2),w=E[0],x=E[1],k=Object(o.useState)(!1),C=Object(r.a)(k,2),S=C[0],z=C[1];Object(o.useEffect)((function(){p&&x(p(l))}),[x,l,p]);var P=Object(o.useCallback)((function(e){var n=b?b(e.currentTarget.value,e):e.currentTarget.value;j(n),!S&&z(!0),p&&x(p(n)),s&&s(e)}),[b,p,S,s]);return i.a.createElement(c.b,{className:n,hasError:!0},i.a.createElement(c.a,Object.assign({},v,{placeholder:" ",id:v.name,value:O,type:d,onChange:P})),i.a.createElement(c.c,{htmlFor:v.name},f),w&&i.a.createElement(c.d,{icon:w.icon,error:S},w.children))};t.d(n,"a",(function(){return l}))},455:function(e,n,t){"use strict";var r=t(5),a=t(4),o=t(436);function i(){var e=Object(r.a)(["\n  padding: 0;\n  border: none;\n\n  "," {\n    width: 100%;\n    display: flex;\n\n    ",' {\n      border-radius: 0;\n      border: none;\n    }\n\n    &:not(:first-child)::before {\n      content: "";\n      display: block;\n      width: calc(100% - ',"rem);\n      border-bottom: 1px solid ",";\n      position: absolute;\n      top: 0;\n      z-index: 1;\n    }\n\n    &:first-child "," {\n      border-top-left-radius: ","rem;\n      border-top-right-radius: ","rem;\n    }\n\n    &:last-child "," {\n      border-bottom-left-radius: ","rem;\n      border-bottom-right-radius: ","rem;\n    }\n  }\n"]);return i=function(){return e},e}var u=a.d.fieldset(i(),o.b,o.a,(function(e){return 2*e.theme.input.padding}),(function(e){return e.theme.input.borderColor}),o.a,(function(e){return e.theme.input.borderRadius}),(function(e){return e.theme.input.borderRadius}),o.a,(function(e){return e.theme.input.borderRadius}),(function(e){return e.theme.input.borderRadius}));t.d(n,"a",(function(){return u}))},460:function(e,n,t){"use strict";var r=t(116);n.a=function(e){return""!==e?null:{icon:r.a.Error,children:"Dit veld is verplicht"}}},487:function(e,n,t){"use strict";t.r(n);var r=t(19),a=t(0),o=t.n(a),i=t(41),u=t(7),c=t(30),l=t(433),m=t(460),d=t(116),s=function(e){return/^.+@[a-z0-9-.]+\.[a-z0-9-]{2,63}$/.test(e)?null:{icon:d.a.Error,children:"Opgegeven e-mailadres is niet geldig"}},f=function(e){return""===e?null:/^[+() 0-9]+$/gi.test(e)?null:{icon:d.a.Error,children:"Opgegeven telefoonnummer is niet geldig"}},b=function(e){return e.replace(/[^0-9 +()]/g,"")},p=t(53),v=t(75),h=t(444),g=t(5),O=t(4),j=t(76),y=t(48),E=t(94),w=t(430),x=t(437),k=t(455);function C(){var e=Object(g.a)(["\n  margin: 6.2rem auto 0;\n"]);return C=function(){return e},e}function S(){var e=Object(g.a)(["\n  margin-bottom: 3.4rem;\n"]);return S=function(){return e},e}function z(){var e=Object(g.a)(["\n  margin-bottom: 3.2rem;\n"]);return z=function(){return e},e}function P(){var e=Object(g.a)(["\n  width: 100%;\n  max-width: 60rem;\n  margin: 4rem auto;\n  display: flex;\n  flex-direction: column;\n  pointer-events: all;\n"]);return P=function(){return e},e}function R(){var e=Object(g.a)(["\n  fill: ",";\n"]);return R=function(){return e},e}Object(O.d)(d.a.Info)(R(),(function(e){return e.theme.copy.tertiary}));var D=O.d.form(P()),N=Object(O.d)(v.b)(z()),T=Object(O.d)(y.a)(S()),F=Object(O.d)(j.c)(C());function H(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var Q={name:{label:"Volledige naam",name:"name",validator:m.a},role:{label:"Functie",name:"role",validator:m.a},email:{label:"E-mailadres",name:"email",type:l.a.Email,validator:s},phone:{label:"Telefoonnummer",name:"phone",type:l.a.Phone,formatter:b,validator:f},comment:{label:"Opmerking",name:"comment"}},V=function(){var e=Object(a.useContext)(h.a),n=Object(i.g)(),t=Object(a.useCallback)((function(t){t.preventDefault();var a=new FormData(t.target),o={name:a.get("name"),role:a.get("role"),email:a.get("email"),phone:a.get("phone")};""!==o.name&&""!==o.role&&""!==o.email&&(e.setResult(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?H(t,!0).forEach((function(n){Object(r.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):H(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e.result,{person:o,comment:a.get("comment")})),n.push(c.a.QuickScanResult))}),[e,n]);return e.data&&e.data.quickScanQuestions.some((function(n){return null==e.result.answers[n._id]}))?o.a.createElement(i.a,{to:c.a.QuickScanQuestions}):o.a.createElement(a.Fragment,null,o.a.createElement(w.default,null),o.a.createElement(E.b,{x:25,y:-20}),o.a.createElement(p.b,{width:p.a.Smaller},o.a.createElement(D,{onSubmit:t},o.a.createElement(N,{headingType:v.a.Secondary,fontColor:u.b.Accent},"Contactgegevens"),o.a.createElement(T,null,"Mocht u de resultaten vrijblijvend terug willen zien, worden deze naar u gemaild nadat u de volgende gegevens heeft invoert."),o.a.createElement(k.a,null,o.a.createElement(x.a,Q.name),o.a.createElement(x.a,Q.role),o.a.createElement(x.a,Q.email),o.a.createElement(x.a,Q.phone),o.a.createElement(x.a,Q.comment)),o.a.createElement(F,{type:"submit"},"Bekijk mijn bedrijfsprofiel"))))};t.d(n,"default",(function(){return V}))}}]);
//# sourceMappingURL=9.f676e3d4.chunk.js.map