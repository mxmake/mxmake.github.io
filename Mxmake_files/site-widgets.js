define("site-widgets",["lodash","utils","core","coreUtils","platformInit","host-platform-api"],function(e,t,o,n,r,i){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1637)}({0:function(t,o){t.exports=e},1:function(e,o){e.exports=t},1637:function(e,t,o){var n,r;n=[o(2),o(1638),o(92)],void 0===(r=function(e,t,o){"use strict";return e.behaviorHandlersFactory.registerHandler("widget",o.widgetBehaviorHandler),e.behaviorHandlersFactory.registerBehaviorPreprocessor("widget",o.widgetBehaviorPreprocessor),e.siteAspectsRegistry.registerHostLibsAspect("WidgetAspect",t),{SiteWidgetAspect:t}}.apply(t,n))||(e.exports=r)},1638:function(e,t,o){var n,r,i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=function e(t,o,n){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,o);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,o,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0};n=[o(0),o(92),o(4),o(1),o(51)],void 0===(r=function(e,t,o,n,r){"use strict";var s=new WeakMap;function p(t,o){return e(t).without(n.siteConstants.MASTER_PAGE_ID).filter(o.getPageTitle.bind(o)).value()}function l(t,o,n){var r=this,i=s.get(this);if(e.includes(i.aspectProps.getAllRenderedContextIds(),o)){var a=i.siteAPI.getRuntimeDal(),p=i.siteAPI.getSiteDataAPI().document.getAllCompsUnderRoot(o,n),l=e(p).omit(["masterPage"]).mapValues(function(e){return t.call(r,a,e.id,o)}).value();i.widgetHandler.handleWidgetUpdate(l)}}return function(n){function u(e,t,o,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(u.__proto__||Object.getPrototypeOf(u)).call(this,e,t,o,n.getRuntimeDal(),n.getActionQueue(),n.getWixCodeAppApi(),r));return s.set(i,{aspectProps:e,widgetHandler:a(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"getWidgetHandler",i).call(i),siteAPI:n}),o.on("svSessionChange",i.updateSvSession.bind(i)),o.on("clientSpecMapUpdated",function(){var e=s.get(this);this.updateWixCodeModelDataAfterLogin(),e.widgetHandler.handleSiteMemberUpdate(e.aspectProps.getSMbySiteExtensionInstanceForRgi()),e.widgetHandler.handleAppDataUpdate(e.aspectProps.getAppsDataForRgi())}.bind(i)),o.on("displayedJsonUpdated",l.bind(i,i.getCompModel)),o.on("fakeModeChange",l.bind(i,i.getCompModel)),o.on("languageHasChanged",i.updateMultilingualInfo.bind(i)),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(u,t.WidgetAspect),i(u,[{key:"onHostPropsChanged",value:function(e){a(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"onHostPropsChanged",this).call(this,e),s.get(this).aspectProps=e}},{key:"loadUserCode",value:function(t){var o=s.get(this),n=o.siteAPI.getSiteData(),i=p(t,n),a=r.appsUtils.getUserCodeDefinitions(n.getClientSpecMap(),i,n);e.isEmpty(a)||o.widgetHandler.loadUserCode(a,i)}},{key:"loadAllContextsUserCode",value:function(){var t=s.get(this),n=e.without(t.aspectProps.getAllRenderedContextIds(),o.siteConstants.MASTER_PAGE_ID);this.loadUserCode(n)}},{key:"loadApps",value:function(e,t){var o=s.get(this);if(o.aspectProps.initWixCode){this.loadUserCode(o.siteAPI,e,o.widgetHandler);var n=p(e,o.siteAPI.getSiteData());a(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"loadApps",this).call(this,n,t)}}},{key:"pageNavigationInfoChanged",value:function(e){var t=s.get(this),o=t.aspectProps.getNavigationDataForRgi();t.widgetHandler.handleLocationUpdate(o),this.removeContextIdToIgnore(e)}},{key:"updateSvSession",value:function(e){s.get(this).widgetHandler.handleSvSessionUpdate(e)}},{key:"updateWixCodeModelDataAfterLogin",value:function(){var t=s.get(this),o=a(u.prototype.__proto__||Object.getPrototypeOf(u.prototype),"getLoadedAppsContexts",this).call(this);if(!e.isEmpty(o)){var n=e.map(o,"rootId"),i=t.siteAPI.getSiteData(),p=r.appsUtils.getApplications(i.getClientSpecMap(),n,i);t.widgetHandler.updateWixCodeModelDataAfterLogin(p,n)}}},{key:"updateMultilingualInfo",value:function(){var e=s.get(this),t=e.siteAPI.getSiteData().getMultilingualInfoForRgi();e.widgetHandler.handleMultilingualInfoUpdate(t)}}]),u}()}.apply(t,n))||(e.exports=r)},2:function(e,t){e.exports=o},4:function(e,t){e.exports=n},51:function(e,t){e.exports=r},92:function(e,t){e.exports=i}})});
//# sourceMappingURL=site-widgets.min.js.map