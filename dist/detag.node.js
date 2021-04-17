function o(n=void 0,l=void 0,s=!1){if(u(n))return`${n}`;if(!i(n))return null;if(n.length<1)return l;if(u(n[0]))return`${n[0]}`;if(!i(n[0]))return null;let[e,...f]=n,r="";for(let t=0;t<e.length;t++)r+=`${e[t]}${f[t]||""}`;return r}function i(n){return Array.isArray(n)}function u(n){return typeof n=="string"||n instanceof String}module.exports=o;
//# sourceMappingURL=detag.node.js.map
