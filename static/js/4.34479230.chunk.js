(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,n,r){"use strict";var t=r(10),a=r.n(t),o=r(95),i=r.n(o),s=r(36),u=r.n(s),c=r(0),l=r.n(c),p=r(4),d=r.n(p),f=r(87),m=r.n(f),v=r(22),g=r.n(v),h=r(14),b=function(e,n,r,t){var o=n.value;return"checkbox"===e?a()({},n,{checked:!!o}):"radio"===e?a()({},n,{checked:t(o,r),value:r}):"select-multiple"===e?a()({},n,{value:o||[]}):"file"===e?a()({},n,{value:o||void 0}):n};var y=r(94),_=function(e,n){if(Object(y.a)(e)){if(!n&&e.nativeEvent&&void 0!==e.nativeEvent.text)return e.nativeEvent.text;if(n&&void 0!==e.nativeEvent)return e.nativeEvent.text;var r=e,t=r.target,a=t.type,o=t.value,i=t.checked,s=t.files,u=r.dataTransfer;return"checkbox"===a?!!i:"file"===a?s||u&&u.files:"select-multiple"===a?function(e){var n=[];if(e)for(var r=0;r<e.length;r++){var t=e[r];t.selected&&n.push(t.value)}return n}(e.target.options):o}return e},D="undefined"!==typeof window&&window.navigator&&window.navigator.product&&"ReactNative"===window.navigator.product,w=function(e,n){var r=n.name,t=n.parse,a=n.normalize,o=_(e,D);return t&&(o=t(o,r)),a&&(o=a(r,o)),o},E="text",F=r(8),x=r(54),O=function(e,n,r){return Object(x.isValidElementType)(e[n])?null:new Error("Invalid prop `"+n+"` supplied to `"+r+"`.")},j=["_reduxForm"],C=function(e){return e&&"object"===typeof e},S=function(e){return e&&"function"===typeof e},R=function(e){C(e)&&S(e.preventDefault)&&e.preventDefault()},V=function(e,n){if(C(e)&&C(e.dataTransfer)&&S(e.dataTransfer.getData))return e.dataTransfer.getData(n)},k=function(e,n,r){C(e)&&C(e.dataTransfer)&&S(e.dataTransfer.setData)&&e.dataTransfer.setData(n,r)};var T=function(e){var n=e.deepEqual,r=e.getIn,t=function(r){function t(){for(var e,n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];return(e=r.call.apply(r,[this].concat(t))||this).ref=l.a.createRef(),e.isPristine=function(){return e.props.pristine},e.getValue=function(){return e.props.value},e.handleChange=function(n){var r=e.props,t=r.name,o=r.dispatch,i=r.parse,s=r.normalize,u=r.onChange,c=r._reduxForm,l=r.value,p=w(n,{name:t,parse:i,normalize:s}),d=!1;if(u)if(!D&&Object(y.a)(n))u(a()({},n,{preventDefault:function(){return d=!0,R(n)}}),p,l,t);else{var f=u(n,p,l,t);D&&(d=f)}d||(o(c.change(t,p)),c.asyncValidate&&c.asyncValidate(t,p,"change"))},e.handleFocus=function(n){var r=e.props,t=r.name,o=r.dispatch,i=r.onFocus,s=r._reduxForm,u=!1;i&&(D?u=i(n,t):i(a()({},n,{preventDefault:function(){return u=!0,R(n)}}),t)),u||o(s.focus(t))},e.handleBlur=function(n){var r=e.props,t=r.name,o=r.dispatch,i=r.parse,s=r.normalize,u=r.onBlur,c=r._reduxForm,l=r._value,p=r.value,d=w(n,{name:t,parse:i,normalize:s});d===l&&void 0!==l&&(d=p);var f=!1;u&&(D?f=u(n,d,p,t):u(a()({},n,{preventDefault:function(){return f=!0,R(n)}}),d,p,t)),f||(o(c.blur(t,d)),c.asyncValidate&&c.asyncValidate(t,d,"blur"))},e.handleDragStart=function(n){var r=e.props,t=r.name,a=r.onDragStart,o=r.value;k(n,E,null==o?"":o),a&&a(n,t)},e.handleDrop=function(n){var r=e.props,t=r.name,o=r.dispatch,i=r.onDrop,s=r._reduxForm,u=r.value,c=V(n,E),l=!1;i&&i(a()({},n,{preventDefault:function(){return l=!0,R(n)}}),c,u,t),l||(o(s.change(t,c)),R(n))},e}u()(t,r);var o=t.prototype;return o.shouldComponentUpdate=function(e){var r=this,t=Object.keys(e),a=Object.keys(this.props);return!!(this.props.children||e.children||t.length!==a.length||t.some(function(t){return~(e.immutableProps||[]).indexOf(t)?r.props[t]!==e[t]:!~j.indexOf(t)&&!n(r.props[t],e[t])}))},o.getRenderedComponent=function(){return this.ref.current},o.render=function(){var n=this.props,r=n.component,t=n.forwardRef,o=n.name,i=n._reduxForm,s=(n.normalize,n.onBlur,n.onChange,n.onFocus,n.onDragStart,n.onDrop,n.immutableProps,g()(n,["component","forwardRef","name","_reduxForm","normalize","onBlur","onChange","onFocus","onDragStart","onDrop","immutableProps"])),u=function(e,n,r){var t=e.getIn,o=e.toJS,i=e.deepEqual,s=r.asyncError,u=r.asyncValidating,c=r.onBlur,l=r.onChange,p=r.onDrop,d=r.onDragStart,f=r.dirty,m=r.dispatch,v=r.onFocus,h=r.form,y=r.format,_=r.initial,D=(r.parse,r.pristine),w=r.props,E=r.state,F=r.submitError,x=r.submitFailed,O=r.submitting,j=r.syncError,C=r.syncWarning,S=(r.validate,r.value),R=r._value,V=(r.warn,g()(r,["asyncError","asyncValidating","onBlur","onChange","onDrop","onDragStart","dirty","dispatch","onFocus","form","format","initial","parse","pristine","props","state","submitError","submitFailed","submitting","syncError","syncWarning","validate","value","_value","warn"])),k=j||s||F,T=C,B=function(e,r){if(null===r)return e;var t=null==e?"":e;return r?r(e,n):t}(S,y);return{input:b(V.type,{name:n,onBlur:c,onChange:l,onDragStart:d,onDrop:p,onFocus:v,value:B},R,i),meta:a()({},o(E),{active:!(!E||!t(E,"active")),asyncValidating:u,autofilled:!(!E||!t(E,"autofilled")),dirty:f,dispatch:m,error:k,form:h,initial:_,warning:T,invalid:!!k,pristine:D,submitting:!!O,submitFailed:!!x,touched:!(!E||!t(E,"touched")),valid:!k,visited:!(!E||!t(E,"visited"))}),custom:a()({},V,{},w)}}(e,o,a()({},s,{form:i.form,onBlur:this.handleBlur,onChange:this.handleChange,onDrop:this.handleDrop,onDragStart:this.handleDragStart,onFocus:this.handleFocus})),l=u.custom,p=g()(u,["custom"]);if(t&&(l.ref=this.ref),"string"===typeof r){var d=p.input;return p.meta,Object(c.createElement)(r,a()({},d,{},l))}return Object(c.createElement)(r,a()({},p,{},l))},t}(c.Component);return t.propTypes={component:O,props:d.a.object},Object(h.b)(function(e,t){var a=t.name,o=t._reduxForm,i=o.initialValues,s=(0,o.getFormState)(e),u=r(s,"initial."+a),c=void 0!==u?u:i&&r(i,a),l=r(s,"values."+a),p=r(s,"submitting"),d=function(e,n){var r=F.a.getIn(e,n);return r&&r._error?r._error:r}(r(s,"syncErrors"),a),f=function(e,n){var t=r(e,n);return t&&t._warning?t._warning:t}(r(s,"syncWarnings"),a),m=n(l,c);return{asyncError:r(s,"asyncErrors."+a),asyncValidating:r(s,"asyncValidating")===a,dirty:!m,pristine:m,state:r(s,"fields."+a),submitError:r(s,"submitErrors."+a),submitFailed:r(s,"submitFailed"),submitting:p,syncError:d,syncWarning:f,initial:c,value:l,_value:t.value}},void 0,void 0,{forwardRef:!0})(t)},B=r(96),z=r.n(B),N=function(e,n,r,t,a,o){if(o)return e===n},P=function(e,n,r){var t=z()(e.props,n,N),a=z()(e.state,r,N);return!t||!a},q=function(e,n){var r=e._reduxForm.sectionPrefix;return r?r+"."+n:n},I=r(48);var M=function(e){var n=T(e),r=e.setIn,t=function(e){function t(n){var t;if((t=e.call(this,n)||this).ref=l.a.createRef(),t.normalize=function(e,n){var a=t.props.normalize;if(!a)return n;var o=t.props._reduxForm.getValues();return a(n,t.value,r(o,e,n),o,e)},!n._reduxForm)throw new Error("Field must be inside a component decorated with reduxForm()");return t}u()(t,e);var o=t.prototype;return o.componentDidMount=function(){var e=this;this.props._reduxForm.register(this.name,"Field",function(){return e.props.validate},function(){return e.props.warn})},o.shouldComponentUpdate=function(e,n){return P(this,e,n)},o.UNSAFE_componentWillReceiveProps=function(e){var n=q(this.props,this.props.name),r=q(e,e.name);n===r&&F.a.deepEqual(this.props.validate,e.validate)&&F.a.deepEqual(this.props.warn,e.warn)||(this.props._reduxForm.unregister(n),this.props._reduxForm.register(r,"Field",function(){return e.validate},function(){return e.warn}))},o.componentWillUnmount=function(){this.props._reduxForm.unregister(this.name)},o.getRenderedComponent=function(){return m()(this.props.forwardRef,"If you want to access getRenderedComponent(), you must specify a forwardRef prop to Field"),this.ref.current?this.ref.current.getRenderedComponent():void 0},o.render=function(){return Object(c.createElement)(n,a()({},this.props,{name:this.name,normalize:this.normalize,ref:this.ref}))},i()(t,[{key:"name",get:function(){return q(this.props,this.props.name)}},{key:"dirty",get:function(){return!this.pristine}},{key:"pristine",get:function(){return!(!this.ref.current||!this.ref.current.isPristine())}},{key:"value",get:function(){return this.ref.current&&this.ref.current.getValue()}}]),t}(c.Component);return t.propTypes={name:d.a.string.isRequired,component:O,format:d.a.func,normalize:d.a.func,onBlur:d.a.func,onChange:d.a.func,onFocus:d.a.func,onDragStart:d.a.func,onDrop:d.a.func,parse:d.a.func,props:d.a.object,validate:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),warn:d.a.oneOfType([d.a.func,d.a.arrayOf(d.a.func)]),forwardRef:d.a.bool,immutableProps:d.a.arrayOf(d.a.string),_reduxForm:d.a.object},Object(I.b)(t)};n.a=M(F.a)},308:function(e,n,r){e.exports={wrap:"Dialogs_wrap__3KaJ-",user:"Dialogs_user__2KxcY",dialoge:"Dialogs_dialoge__YvYSV",messages:"Dialogs_messages__T_4c3",enter:"Dialogs_enter__3CTR5",field:"Dialogs_field__2Yr7H",btn:"Dialogs_btn__3jk0l",letter:"Dialogs_letter__3B2OD",text:"Dialogs_text__Mto9q"}},314:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),o=r(128),i=r(308),s=r.n(i),u=r(11),c=function(e){var n="/dialogs/"+e.id;return a.a.createElement(u.b,{to:n,className:s.a.dialoge},e.name)},l=function(e){return a.a.createElement("div",{className:s.a.letter},a.a.createElement("img",{src:"https://www.spotteron.net/images/icons/user60.png",alt:"user"}),a.a.createElement("div",{className:s.a.text},e.message))},p=r(137),d=r(129),f=r(72),m=r(32),v=Object(f.a)(50),g=Object(d.a)({form:"dialogMessage"})(function(e){return a.a.createElement("form",{onSubmit:e.handleSubmit},a.a.createElement(p.a,{className:s.a.field,component:m.c,name:"newDialogBody",placeolder:"Enter New Message",validate:[f.b,v]}),a.a.createElement("button",null,"Send"))}),h=function(e){var n=e.stateDialogs.dialogs.map(function(e){return a.a.createElement(c,{name:e.name,id:e.id})}),r=e.stateDialogs.messages.map(function(e){return a.a.createElement(l,{message:e.message})});return a.a.createElement("div",{className:s.a.wrap},a.a.createElement("div",{className:s.a.user},n),a.a.createElement("div",{className:s.a.messages},a.a.createElement("div",{className:s.a.enter},a.a.createElement(g,{onSubmit:function(n){e.addMessage(n.newDialogBody)}})),a.a.createElement("div",null,r)))},b=r(88),y=r(6),_=r(14);n.default=Object(y.d)(Object(_.b)(function(e){return{stateDialogs:e.dialogsPage}},function(e){return{addMessage:function(n){e(Object(o.a)(n))}}}),b.a)(h)}}]);
//# sourceMappingURL=4.34479230.chunk.js.map