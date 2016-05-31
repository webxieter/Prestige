!function(e,n,t){function o(e,n){return typeof e===n}function r(){var e,n,t,r,s,i,l;for(var a in C)if(C.hasOwnProperty(a)){if(e=[],n=C[a],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],l=i.split("."),1===l.length?x[l[0]]=r:(!x[l[0]]||x[l[0]]instanceof Boolean||(x[l[0]]=new Boolean(x[l[0]])),x[l[0]][l[1]]=r),g.push((r?"":"no-")+l.join("-"))}}function s(e){var n=S.className,t=x._config.classPrefix||"";if(_&&(n=n.baseVal),x._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}x._config.enableClasses&&(n+=" "+t+e.join(" "+t),_?S.className.baseVal=n:S.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):_?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,n){return!!~(""+e).indexOf(n)}function a(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function f(e,n){return function(){return e.apply(n,arguments)}}function u(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?f(r,t||n):r);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=n.body;return e||(e=i(_?"svg":"body"),e.fake=!0),e}function c(e,t,o,r){var s,l,a,f,u="modernizr",p=i("div"),c=d();if(parseInt(o,10))for(;o--;)a=i("div"),a.id=r?r[o]:u+(o+1),p.appendChild(a);return s=i("style"),s.type="text/css",s.id="s"+u,(c.fake?c:p).appendChild(s),c.appendChild(p),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),p.id=u,c.fake&&(c.style.background="",c.style.overflow="hidden",f=S.style.overflow,S.style.overflow="hidden",S.appendChild(c)),l=t(p,e),c.fake?(c.parentNode.removeChild(c),S.style.overflow=f,S.offsetHeight):p.parentNode.removeChild(p),!!l}function m(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(p(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+p(n[r])+":"+o+")");return s=s.join(" or "),c("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,s){function f(){p&&(delete N.style,delete N.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var u=m(e,r);if(!o(u,"undefined"))return u}for(var p,d,c,h,v,y=["modernizr","tspan","samp"];!N.style&&y.length;)p=!0,N.modElem=i(y.shift()),N.style=N.modElem.style;for(c=e.length,d=0;c>d;d++)if(h=e[d],v=N.style[h],l(h,"-")&&(h=a(h)),N.style[h]!==t){if(s||o(r,"undefined"))return f(),"pfx"==n?h:!0;try{N.style[h]=r}catch(g){}if(N.style[h]!=v)return f(),"pfx"==n?h:!0}return f(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+P.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(l,n,r,s):(l=(e+" "+E.join(i+" ")+i).split(" "),u(l,n,t))}function y(e,n,o){return v(e,t,t,n,o)}var g=[],C=[],w={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},x=function(){};x.prototype=w,x=new x;var S=n.documentElement,_="svg"===S.nodeName.toLowerCase(),b="Moz O ms Webkit",P=w._config.usePrefixes?b.split(" "):[];w._cssomPrefixes=P;var E=w._config.usePrefixes?b.toLowerCase().split(" "):[];w._domPrefixes=E;var z={elem:i("modernizr")};x._q.push(function(){delete z.elem});var N={style:z.elem.style};x._q.unshift(function(){delete N.style}),w.testAllProps=v,w.testAllProps=y,x.addTest("flexbox",y("flexBasis","1px",!0)),r(),s(g),delete w.addTest,delete w.addAsyncTest;for(var T=0;T<x._q.length;T++)x._q[T]();e.Modernizr=x}(window,document);
//# sourceMappingURL=modernizr-custom.js.map
