(window.webpackJsonp=window.webpackJsonp||[]).push([[11,90],{1097:function(e,t,n){},299:function(e,t,n){"use strict";n.r(t);n(105),n(1097);var r=n(0),o=n.n(r),i=n(41),a=n.n(i),c=n(73);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},p=function(e){return r.createElement(c.a,null,function(t){var n,o,i=t.getPrefixCls,c=e.prefixCls,p=e.className,f=e.color,m=void 0===f?"":f,b=e.children,y=e.pending,d=(e.position,e.dot),v=s(e,["prefixCls","className","color","children","pending","position","dot"]),h=i("timeline",c),O=a()((u(n={},"".concat(h,"-item"),!0),u(n,"".concat(h,"-item-pending"),y),n),p),g=a()((u(o={},"".concat(h,"-item-head"),!0),u(o,"".concat(h,"-item-head-custom"),d),u(o,"".concat(h,"-item-head-").concat(m),!0),o));return r.createElement("li",l({},v,{className:O}),r.createElement("div",{className:"".concat(h,"-item-tail")}),r.createElement("div",{className:g,style:{borderColor:/blue|red|green/.test(m)?void 0:m}},d),r.createElement("div",{className:"".concat(h,"-item-content")},b))})};p.defaultProps={color:"blue",pending:!1,position:""};var f=p,m=n(222);function b(e){return(b="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function d(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O(e,t){return!t||"object"!==b(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function g(e){return(g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},E=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(e=O(this,g(t).apply(this,arguments))).renderTimeline=function(t){var n,o=t.getPrefixCls,i=e.props,c=i.prefixCls,l=i.pending,u=void 0===l?null:l,s=i.pendingDot,p=i.children,b=i.className,h=i.reverse,O=i.mode,g=w(i,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),j=o("timeline",c),E="boolean"===typeof u?null:u,P=a()(j,(v(n={},"".concat(j,"-pending"),!!u),v(n,"".concat(j,"-reverse"),!!h),v(n,"".concat(j,"-").concat(O),!!O),n),b),T=u?r.createElement(f,{pending:!!u,dot:s||r.createElement(m.a,{type:"loading"})},E):null,C=h?[T].concat(d(r.Children.toArray(p).reverse())):[].concat(d(r.Children.toArray(p)),[T]),I=function(e,t){return"alternate"===O?"right"===e.props.position?"".concat(j,"-item-right"):"left"===e.props.position?"".concat(j,"-item-left"):"".concat(j,t%2===0?"-item-left":"-item-right"):"left"===O?"".concat(j,"-item-left"):"right"===O?"".concat(j,"-item-right"):"right"===e.props.position?"".concat(j,"-item-right"):""},N=C.filter(function(e){return!!e}),S=r.Children.count(N),x="".concat(j,"-item-last"),k=r.Children.map(N,function(e,t){return r.cloneElement(e,{className:a()([e.props.className,!h&&u?t===S-2?x:"":t===S-1?x:"",I(e,t)])})});return r.createElement("ul",y({},g,{className:P}),k)},e}var n,o,i;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,r["Component"]),n=t,(o=[{key:"render",value:function(){return r.createElement(c.a,null,this.renderTimeline)}}])&&h(n.prototype,o),i&&h(n,i),t}();E.Item=f,E.defaultProps={reverse:!1,mode:""};var P=E,T=n(34),C=n(35),I=n(37),N=n(36),S=n(38),x=(n(358),n(181)),k=n.n(x),A=n(39),_=n(5),D=function(e){function t(){var e,n;Object(T.a)(this,t);for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(n=Object(I.a)(this,(e=Object(N.a)(t)).call.apply(e,[this].concat(o)))).state={value:new Date(2016,9,10,8,45),value2:[new Date(2016,9,10,8,40),new Date(2016,9,10,9,40)]},n}return Object(S.a)(t,e),Object(C.a)(t,[{key:"componentDidMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!Object(_.b)(Object(_.a)(this.props),Object(_.a)(e))||!Object(_.b)(Object(_.a)(this.state),Object(_.a)(t))}},{key:"render",value:function(){var e=this.props.configs.defaultOptions;return o.a.createElement("div",{id:"x-timeline"},o.a.createElement("h3",null,"Timeline\u65f6\u95f4\u8f74"),o.a.createElement("div",{className:"mt-20 mb-20"},o.a.createElement(P,null,o.a.createElement(P.Item,null,"Create a services site 2015-09-01"),o.a.createElement(P.Item,null,"Solve initial network problems 2015-09-01"),o.a.createElement(P.Item,null,"Technical testing 2015-09-01"),o.a.createElement(P.Item,null,"Network problems being solved 2015-09-01"))),o.a.createElement(k.a,{value:"<Timeline>\n\t<Timeline.Item>Create a services site 2015-09-01</Timeline.Item>\n\t<Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>\n\t<Timeline.Item>Technical testing 2015-09-01</Timeline.Item>\n\t<Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>\n</Timeline>",options:e}))}}]),t}(r.Component);t.default=Object(A.b)(function(e){return{configs:e.configs}},{})(D)},358:function(e,t,n){}}]);
//# sourceMappingURL=11.21d8d157.chunk.js.map