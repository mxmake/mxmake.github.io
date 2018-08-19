define("compUtils",["lodash","utils","santaProps","coreUtils","prop-types","santa-components","zepto","reactDOM","create-react-class","react","mobx","mobx-react"],function(e,t,r,n,o,i,s,a,p,c,u,d){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=713)}({0:function(t,r){t.exports=e},1:function(e,r){e.exports=t},11:function(e,t){e.exports=s},12:function(e,t){e.exports=a},17:function(e,t){e.exports=p},18:function(e,t){e.exports=c},24:function(e,t){e.exports=u},3:function(e,t){e.exports=r},343:function(e,t,r){var n,o;n=[r(18),r(17),r(0),r(1),r(714)],void 0===(o=function(e,t,r,n,o){"use strict";var i={},s={},a=void 0,p={compFactories:{},originalCompFactories:{},compClasses:{},compExtensions:{}};n.sessionFreezer.freeze(i),n.sessionFreezer.freeze(s);var c=function(e){return r.isPlainObject(e)};function u(u,d){var l=r.defaultTo(d,p),h=l.compFactories,m=l.compClasses,f=l.originalCompFactories,g=h[u];if(!g){var v=r.get(i,[u]);if(!v)return void n.log.error("Component not implemented:",u);var y=function(e,n,o){var i=r.defaultTo(o,p),a=e;c(e)&&(a=t({displayName:e.displayName||n,mixins:[e].concat(s[n])}));var u=r.compact([].concat(i.compExtensions[n]).concat(i.compExtensions["*"]));return r.flow(u)(a)}(v,u,l);m[u]=y,g=e.createFactory(y),f[u]=g;var P=o(u,y,a);h[u]=e.createFactory(P)}}var d={getCompClass:function(e,t,n){var o=r.defaultTo(n,p);return u(e,o),t?o.originalCompFactories[e]:o.compFactories[e]},getCompReactClass:function(e,t){var n=r.defaultTo(t,p);return d.getCompClass(e,!1,n),n.compClasses[e]},invalidate:function(e,t){delete r.defaultTo(t,p).compFactories[e]},extend:function(e,t){if(i.hasOwnProperty(e)){if(!c(i[e]))throw new Error("Unable to extend registered react class "+e);d.invalidate(e),s[e]=r.union(s[e].concat(t))}else n.log.error("Component can't be extended: "+e)},register:function(e,t){return i[e]=t,s[e]=[],d},registerExtension:function(e,t,n){var o=r.defaultTo(n,p);o.compExtensions[e]=o.compExtensions[e]||[],o.compExtensions[e].push(t)},registerCommonExtensionForAllComponents:function(e,t){d.registerExtension("*",e,t)},unregisterExtension:function(e,t,n){var o=r.defaultTo(n,p);r.pull(o.compExtensions[e],t)},unregisterCommonExtensionFromAllComponents:function(e,t){d.unregisterExtension("*",e,t)},registerMobxObserver:function(e){return a=e,d},keys:function(){return r.keys(i)},generateRuntimeState:function(){return{compClasses:{},originalCompFactories:{},compFactories:{},compExtensions:{}}}};return d}.apply(t,n))||(e.exports=o)},344:function(e,t,r){var n,o,i=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}();n=[r(0),r(18),r(3),r(5),r(46),r(345)],void 0===(o=function(e,t,r,n,o,s){"use strict";var a=new WeakMap,p=r.computedPropsBuilder,c=function(t,r,n,o,i){var s=n.siteAPI,a=s.getSiteData(),c=e.get(o.propTypes.skin,"fetch")&&o.propTypes.skin.fetch(),u=e.defaults({siteData:a,hardcodedSkin:c},n),d={fetchSantaType:function(e,t,r){return e.fetch?e.fetch(t,r):n.siteAPI.getSantaFetcher(e)(t,r)},siteData:a,siteAPI:s};return p.getInstance(d,u,t,r,!1).getComputedProps(u,i).get()};return function(r,p){if(a.has(p)&&a.get(p).hasOwnProperty(r))return a.get(p)[r];var u=function(r){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.previousStyleNode=null,t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,t.Component),i(n,[{key:"render",value:function(){var t=this.props,r=function(t,r,n){var o=e.assign({},r.getCompCss.cssTypes,{styleId:r.propTypes.styleId});return c(o,"cssTypes",t,r,n)}(e.assign({id:t.compId},t),p,t.invalidateCache),n=p.getCompCss(r.styleId,r);if(!n)return this.previousStyleNode;var o=p.getCompFonts&&t.siteAPI.getSiteAspect("fontsLoaderAspect"),i=o&&function(t,r,n){var o=c(r.getCompFonts.fontsTypes,"fontsTypes",n,r),i=r.getCompFonts&&r.getCompFonts(t,o);return e.union(i)}(e.keys(n),p,e.assign({id:t.compId},t));o&&!e.isEmpty(o.filterHandledFonts(i))&&t.requestRelayout&&o.loadFonts(i,t.requestRelayout);var a=e.map(n,function(e,r){return s.generateStyleNode(r,e,t.styleRoot)});return this.previousStyleNode=a,a}}]),n}();u.displayName="StyleNode ("+r+")",u.propTypes={styleRoot:n.string,siteAPI:n.object.isRequired,structure:n.object,compId:n.string,rootId:n.string.isRequired,requestRelayout:n.func.isRequired,invalidateCache:n.bool},u.defaultProps={rootId:"masterPage"};var d=o.observer(u);return a.has(p)||a.set(p,{}),a.get(p)[r]=d,d}}.apply(t,n))||(e.exports=o)},345:function(e,t,r){var n,o;n=[r(6),r(0)],void 0===(o=function(e,t){"use strict";return{generateStyleNode:function(r,n,o){return o&&(n=t.map(n.trim().split("\n"),function(e){var r=e.split("{"),n=r[0].split(",");return r[0]=t.map(n,function(e){return o+" "+e}),r.join("{")}).join("\n")),e.utils.createReactElement("style",{type:"text/css","data-styleid":r,key:r,dangerouslySetInnerHTML:{__html:n||""}})}}}.apply(t,n))||(e.exports=o)},346:function(e,t,r){var n,o;n=[r(0),r(24),r(1)],void 0===(o=function(e,t,r){"use strict";var n=16,o=new r.SiteDataPrivates;function i(e,r){this._siteAPI=e,this._siteData=r,this._primaryPageId="",this._revealLimit=t.observable.box(0),this._renderProgressPart=n,this._revealId=0,this._maxScroll=0,this.maxScroll=t.computed(function(){var e=this.getScreenInfo(),t=e.scrollY,r=e.screenHeight;return this._maxScroll=Math.max(t+r,this._maxScroll),this._maxScroll},{context:this})}function s(e){var t=e.getSiteData(),r=o.get(t);return r||(r=new i(e,t),o.set(t,r)),r}i.prototype={getScreenInfo:function(){var t=this._siteAPI.getSiteAspect("windowScrollEvent").getScrollPosition();return this._siteAPI.isExperimentOpen("sv_renderAboveTheFoldInSSR")&&this._siteData.isFirstRenderAfterSSR()?{scrollY:0,screenHeight:e.get(this._siteData,"ssr.aboveFoldScreenHeight")-8}:{scrollY:t.y,screenHeight:this._siteData.getScreenHeight()||1080}},isEnabled:function(e,t){if(!this._siteAPI.isExperimentOpen("renderAboveTheFold"))return!1;if(this._siteData.isInSSR()||!this._siteData.isViewerMode())return!1;if("undefined"==typeof window||!window.clientSideRender&&!this._siteAPI.isExperimentOpen("sv_renderAboveTheFoldInSSR")&&e)return!1;if(this._siteAPI.getSiteAspect("actionsAspect").hasNextAnchorScroll())return!1;var r=this._siteAPI.getPointers(),n=this._siteAPI.getDisplayedDAL(),o=r.components.getPage(t,this._siteData.getViewMode());return!n.get(r.getInnerPointer(o,["layout","anchors"]),!0)},done:function(){try{var e=new window.CustomEvent("wixFullyRendered",{detail:{progressive:this._isEnabled}});window.dispatchEvent(e)}catch(e){}this._siteAPI.notifyFullyRendered()},reset:function(){var t=this._siteData.getPrimaryPageId();if(t!==this._primaryPageId){var r=!this._primaryPageId;this._primaryPageId=t,this._notRevealedCount=0;var n=this.getScreenInfo(),o=n.scrollY,i=n.screenHeight;this._revealLimit.set(o+i),this._isEnabled=this.isEnabled(r,t),this.get=this._isEnabled?function(){return Math.max(this.maxScroll.get(),this._revealLimit.get())+8}:function(){return Number.MAX_SAFE_INTEGER},this._siteAPI.isExperimentOpen("renderProgressive")?this.reveal===e.noop&&delete this.reveal:this.reveal=e.noop}},reveal:function(){var e=this;0===this._revealId&&(this._revealId=r.idleCallback.request(function(t){e._revealId=0;var r=e.getScreenInfo().screenHeight,n=Math.max(e.maxScroll.get(),e._revealLimit.get()+Math.round(r/e._renderProgressPart));e._revealLimit.set(n),e._notRevealedCount>0&&(t&&t.timeRemaining&&(e._renderProgressPart-=t.timeRemaining()>0?2:-2,e._renderProgressPart<=0&&(e._renderProgressPart=1)),e.reveal())}))},incNotRevealedCount:function(){return this._notRevealedCount++},decNotRevealedCount:function(){var e=this._notRevealedCount--;return 1===e&&this._rendered&&this.done(),e},onRendered:function(){0===this._notRevealedCount?this.done():this._rendered=!0}};var a=function(e){return o.get(e.getSiteData())};return{reset:function(e){s(e).reset()},get:function(e){return a(e).get()},incNotRevealedCount:function(e){return a(e).incNotRevealedCount()},decNotRevealedCount:function(e){return a(e).decNotRevealedCount()},auto:function(e){a(e).reveal()},onRendered:function(e){s(e).onRendered()}}}.apply(t,n))||(e.exports=o)},4:function(e,t){e.exports=n},46:function(e,t){e.exports=d},5:function(e,t){e.exports=o},6:function(e,t){e.exports=i},713:function(e,t,r){var n,o;n=[r(343),r(344),r(345),r(716),r(346)],void 0===(o=function(e,t,r,n,o){"use strict";return{compFactory:e,styleNodeFactory:t,styleNodeUtils:r,mobxObserverWrapper:n,progressiveReveal:o}}.apply(t,n))||(e.exports=o)},714:function(e,t,r){var n,o;n=[r(0),r(5),r(6),r(344),r(715)],void 0===(o=function(e,t,r,n,o){"use strict";return function(i,s,a){var p=a(i,o.extendClass(s)),c=n(i,s),u=function(t){return[r.utils.createReactElement(p,function(t){return e.assign({},e.omit(t,"compRef"),{key:t.id,ref:t.compRef})}(t)),s.getCompCss?r.utils.createReactElement(c,function(e){var t=e.id,r=e.rootId,n=e.styleRoot,o=e.structure,i=e.siteAPI,s=e.mobxObserverWrapperProps;return{key:t+"_STYLE",styleRoot:n||s.styleRoot,siteAPI:i||s.siteAPI,requestRelayout:s.requestRelayout,structure:o,compId:t,rootId:r}}(t)):null]};return u.propTypes={styleRoot:t.string,compRef:t.func,siteAPI:t.object,structure:t.object,id:t.string,rootId:t.string,mobxObserverWrapperProps:t.PropTypes.shape({siteAPI:t.object.isRequired,requestRelayout:t.func.isRequired,viewerPrivateServices:t.object,addComponentRef:t.func,styleRoot:t.string}).isRequired},u}}.apply(t,n))||(e.exports=o)},715:function(e,t,r){var n,o;n=[r(6)],void 0===(o=function(e){"use strict";return{extendClass:function(t){return t.behaviors||t.behaviorExtensions?e.HOC.withBehaviors(t.behaviors||t.behaviorExtensions)(t):t}}}.apply(t,n))||(e.exports=o)},716:function(e,t,r){var n,o;n=[r(6),r(0),r(11),r(5),r(17),r(12),r(24),r(46),r(1),r(4),r(343),r(717),r(346),r(718),r(3)],void 0===(o=function(e,t,r,n,o,i,s,a,p,c,u,d,l,h,m){"use strict";var f=p.triggerTypesConsts,g=m.computedPropsBuilder,v=m.propsBuilderUtil,y={ENTER:p.siteConstants.Animations.Modes.AnimationType.ENTER,LEAVE:p.siteConstants.Animations.Modes.AnimationType.LEAVE,TRANSITION:p.siteConstants.Animations.Modes.AnimationType.TRANSITION},P=["mobxObserverWrapperProps","childrenSet","pagePointer"],C={"data-dead-comp":!0};function S(e){return{fetchSantaType:function(t,r,n){return e.getSantaFetcher(t)(r,n)},siteData:e.getSiteData(),siteAPI:e}}function b(e,r,n,o){var i=t.isUndefined(r)?"masterPage":r;return{structure:n,rootNavigationInfo:e.getSiteData().getExistingRootNavigationInfo(i),rootId:i,id:o}}function A(e,r,n,o,i){var s=function(e,r,n,o,i){var s=S(e),a=b(e,n,o,i),p=!!t.get(r,"shouldLayout",!1);return g.getInstance(s,a,r.propTypes,"santaTypes",p).getComputedProps(a).get()}(e.mobxObserverWrapperProps.siteAPI,i,e.rootId,o,e.id);return function(e){return"SITE_PAGES"===e}(e.id)&&t.assign(s,e.mobxObserverWrapperProps.propsForSitePages),s.isAffectedByModeChanges=r,n&&(s.className=(s.className||"")+" transitioning-comp"),s}function I(e){return!t.isEmpty(e)}function x(e,r,n){var o=t.map(n,function(n){return!!e||function(e,r){var n=[],o=t.get(e,"modes.definitions");if(o&&o.length){var i=t.map(o,"modeId"),s=t.keys(r);n=t.intersection(s,i)}return!t.isEmpty(n)}(n,r)});return t.zipObject(t.map(n,"id"),o)}function R(){var e=this.props.mobxObserverWrapperProps,r=e.siteAPI.getDisplayedDAL(),n=e.siteAPI.getPointers(),o=e.siteAPI.getSiteData();this.pagePointer=this.props.pagePointer||s.computed(function(){var e=o.getViewMode();return n.components.getPage(this.props.rootId,e)||n.components.getMasterPage(e)},{context:this,compareStructural:!0,name:"pagePointer_"+this.props.id}),this.childrenPointers=s.computed(function(){var e=this.pagePointer.get(),o=n.components.getComponent(this.props.id,e);if(function(e,t,r){var n=e&&t.components.getChildrenContainer(e);n&&r.get(n)}(o,n,r),!o)return[];var i=r.getByPath(["pageStubComponents",e.id]);return t.filter(n.components.getChildren(o),function(e){return!i||i[e.id]})},{context:this,compareStructural:!0,name:"childrenPointers_"+this.props.id}),this.computedChildrenToRender=s.computed(function(){return function(e,r,n){return t.map(e,function(e){return{id:r.get(n.getInnerPointer(e,["id"])),componentType:r.get(n.getInnerPointer(e,["componentType"]))}})}(this.childrenPointers.get(),r,n)},{context:this,compareStructural:!0,name:"computedChildrenToRender_"+this.props.id}),this.magicStructure=new d(o,r,n,this.props.id,this.pagePointer,this.computedChildrenToRender,this.props.computedParentDimensions),this.computedDimensions=s.computed(function(){return this.props.structure?{}:this.magicStructure.dimensions},{name:"computedDimensions_"+this.props.id,context:this}),this.compModes=s.computed(function(){var e=t.get(this.magicStructure.modes,"definitions");if(t.isEmpty(e))return{};var o=this.pagePointer.get().id,i=n.activeModes.getPageActiveModes(o),s=r.get(i);return t(s).mapValues(function(r,n){return t.some(e,{modeId:n})}).pickBy().value()},{context:this,compareStructural:!0,name:this.props.id+"_activeModes"}),this.compBehaviors=s.computed(function(){var e=this.props.mobxObserverWrapperProps.siteAPI,t=this.props.structure||this.magicStructure,r=t.behaviorQuery,n=t.propertyQuery;return v.getCompBehaviors(e,n,r,this.props.rootId,this.props.id)},{context:this,compareStructural:!0,name:this.props.id+"_compBehaviors"}),this.shouldReveal=s.computed(function(){return!(this.calcComponentTop()>l.get(this.props.mobxObserverWrapperProps.siteAPI))},{context:this,name:this.props.id+"_reveal"})}function _(){var e=this.props.mobxObserverWrapperProps.siteAPI,t=e.getPointers(),r=e.getDisplayedDAL(),n=this.pagePointer.get(),o=t.components.getComponent(this.props.id,n);(this.props.structure||o&&r.isExist(o))&&e.registerCompBehaviours(this.props.rootId,this.props.id,this.compBehaviors.get())}function T(e,n,o,s,a){var p=e.getComponentByPageAndCompId(n,o);if(p){var u=t.clone(s);u.zIndex=function(e,r,n){var o=void 0;o=t.includes(e.getRenderRealtimeConfigItem("compsToShowOnTop"),r)?c.style.MAX_Z_INDEX:n?e.getRenderFlag("renderFixedPositionContainers")?50:49:"";return o}(e,o,a),p.hasOwnProperty("getRootStyle")&&t.assign(u,p.getRootStyle(u)),r(i.findDOMNode(p)).css(u)}}return function(r,i){return a.observer(o({displayName:function(e,t){return"SantaTypeObserver("+(e.displayName||e.name||t.split(".").pop())+")"}(i,r),mixins:[c.renderDoneMixin],propTypes:{id:n.string.isRequired,structure:n.object,rootId:n.string,mobxObserverWrapperProps:n.object.isRequired,anyChangeInParentActiveModes:n.bool,applyStyleOverrides:n.bool,calcParentY:n.func},componentDidCatch:function(e,t){p.integrations.ravenUtils.captureError(e,{tags:{compType:this.props.structure&&this.props.structure.componentType},extra:{id:this.props.id,info:t}})},componentWillMount:function(){this.transitioningChildrenPrevLayout={},this.currentlyAnimatingChildren={},this.childrenAnimations={},this.renderedCompProps={},this.childrenToRender={},this._lastRenderedComp=null,this.stylesToApplyDomOnly=null,R.call(this),this.prevActiveModes=null,this.disposeReactions=function(){return s.observe(this.compBehaviors,_.bind(this),{})}.call(this),this.props.mobxObserverWrapperProps.siteAPI.setComponentRenderStart(this.props.id||this.props.structure.id);var e=this.props.mobxObserverWrapperProps.siteAPI,r=this.props.structure||this.magicStructure,n=S(e),o=b(e,this.props.rootId,r,this.props.id),a=!!t.get(i,"shouldLayout",!1);this.computedPropsManager=g.getInstance(n,o,i.propTypes,"santaTypes",a),l.reset(e)},componentWillUpdate:function(){this.setComponentRenderStartIfNeeded()},componentWillReact:function(){this.props.mobxObserverWrapperProps.siteAPI.getSiteData().reacted=!0,this.setComponentRenderStartIfNeeded()},componentWillUnmount:function(){var e=this.props.mobxObserverWrapperProps.siteAPI;e.cancelReLayoutPending(this.props.id||this.props.structure.id),e.unregisterCompBehaviours(this.props.rootId,this.props.id||this.props.structure.id),t.invoke(this,"disposeReactions")},componentDidMount:function(){var e=this.props.mobxObserverWrapperProps.siteAPI;_.call(this),this.prevActiveModes=this.compModes.get(),c.displayedOnlyStructureUtil.isDisplayedComponent(this.props.id)&&e.requestEnforceAnchors(),e.setComponentRenderEnd(this.props.id||this.props.structure.id),!1===this._isRevealed&&l.auto(e)},getModesChanges:function(){var e=this.compModes.get();return this.prevActiveModes?p.modes.getModeChanges(this.prevActiveModes,e):{}},componentDidUpdate:function(){var e=this.props.mobxObserverWrapperProps.siteAPI,r=e.getSiteAspect("WidgetAspect").isContextReady(this.props.rootId);if(this.stylesToApplyDomOnly&&e.isDuringPostUpdatesOperations(this.props.id)||!r)return e.removePostUpdateOperationsRender(this.props.id),void e.cancelReLayoutPending(this.props.id);if(I(this.childrenAnimations)&&(!function(e,t,r,n,o,i){t.getSiteAspect("actionsAspect").executeAction("modeChange",f.MODE_CHANGED_INIT,{modeChanges:r,componentAnimations:n,transitioningComponentsPrevLayout:o,pageId:e,onComplete:i})}(this.props.rootId,e,this.getModesChanges(),this.childrenAnimations,this.transitioningChildrenPrevLayout,this.handleModeChangeAnimationsFinished),function(e){e.getSiteAspect("actionsAspect").executeAction("modeChange",f.MODE_CHANGED_EXECUTE)}(e),this.childrenAnimations={},this.transitioningChildrenPrevLayout={}),this.stylesToApplyDomOnly){var n=t.get(this.magicStructure,"layout.fixedPosition",!1);T(e,this.props.rootId,this.props.id,this.stylesToApplyDomOnly,n),i.applyCompSpecificDomOnlyPatches&&i.applyCompSpecificDomOnlyPatches(this,this.renderedCompProps.style),this.stylesToApplyDomOnly=null}var o=this.props.mobxObserverWrapperProps.siteAPI.getPointers(),s=this.props.mobxObserverWrapperProps.siteAPI.getDisplayedDAL(),a=this.pagePointer.get(),p=this.computedChildrenToRender.get();this.childrenData={rotationDegrees:t.reduce(p,function(e,r){var n=r.id,i=o.components.getComponent(n,a);return t.set(e,n,s.get(o.getInnerPointer(i,"layout.rotationInDegrees")))},{})},this.prevActiveModes=this.compModes.get(),c.displayedOnlyStructureUtil.isDisplayedComponent(this.props.id)&&e.requestEnforceAnchors(),this.computedPropsManager.clearChangedPropsMap();var u=this.props.id||this.props.structure.id;this.shouldLayout&&e.setComponentRenderEnd(u)},getRenderedCompProps:function(e,r){var n=e.mobxObserverWrapperProps.siteAPI,o=this.currentlyAnimatingChildren,s=this.getModesChanges(),a=!t.isEmpty(s),p=e.structure||this.magicStructure,c=function(e,t,r,n,o,i){var s=n&&!!i,a=A(o,n,o.compAnimationType===y.TRANSITION||s,t,e);return a.childrenSet=r,a}(i,p,this.props.structure?[]:this.computedChildrenToRender.get(),a,e,r);if(a){var u=x(c.isAffectedByModeChanges,s,this.computedChildrenToRender.get());this.childrenAnimations=function(e,r,n){var o=t.keyBy(e.childrenSet,"id"),i=t.keyBy(r.childrenSet,"id"),s=t.reduce(i,function(e,r,n){return o[n]?e:t.set(e,n,y.ENTER)},{});return t.reduce(o,function(e,r,o){return i[o]?n[o]?t.set(e,o,y.TRANSITION):e:t.set(e,o,y.LEAVE)},s)}(r,c,u),this.transitioningChildrenPrevLayout=function(e,r,n){var o=e.getSiteData().measureMap;if(!o)return{};var i=e.getSiteAspect("windowScrollEvent").getScrollPosition(),s=t.partial(t.isEqual,y.TRANSITION);return t(r).pickBy(s).mapValues(function(e,r){return{width:o.width[r],height:o.height[r],left:o.absoluteLeft[r]-i.x,top:o.absoluteTop[r]-i.y,rotation:t.get(n,["rotationDegrees",r])}}).value()}(n,this.childrenAnimations,this.childrenData),t.assign(o,this.childrenAnimations)}return I(o)?this.childrenToRender=function(e,r,n,o){var i=t.filter(n,function(e){return!!o[e.id]});return t.unionBy(e.childrenSet,i,r.childrenSet,"id")}(r,c,this.childrenToRender,o):this.childrenToRender=c.childrenSet,t.assign({},c,{ref:this.compRefFunction},this.props)},compRefFunction:function(e){this.props.mobxObserverWrapperProps.addComponentRef&&this.props.mobxObserverWrapperProps.addComponentRef(e,this.props.id)},calcComponentTop:function(){var e=this.props.mobxObserverWrapperProps.siteAPI.getSiteData(),t=(this.computedDimensions.get().y||0)+(this.props.calcParentY?this.props.calcParentY():0),r=e.measureMap&&e.measureMap.absoluteTop&&e.measureMap.absoluteTop[this.props.id];return r<t?r:t},getChildProps:function(e){return{id:e,rootId:this.props.rootId,anyChangeInParentActiveModes:!(!this.props.anyChangeInParentActiveModes&&t.isEmpty(this.getModesChanges())),computedParentDimensions:this.computedDimensions,mobxObserverWrapperProps:this.props.mobxObserverWrapperProps,pagePointer:this.pagePointer,key:e,refInParent:e,calcParentY:this.calcComponentTop}},setComponentRenderStartIfNeeded:function(){var e=this;this.shouldLayout=function(){var r=e.computedPropsManager.getChangedProps(),n=i.shouldLayout;if(n){if(t.isFunction(n))return n(r);if(t.isObject(n))return t.some(r,function(e,r){return t.isUndefined(n[r])||n[r]})}return!0}(),this.shouldLayout&&this.props.mobxObserverWrapperProps.siteAPI.setComponentRenderStart(this.props.id||this.props.structure.id)},render:function(){var r=this,n=this.props.mobxObserverWrapperProps.siteAPI,o=n.getSiteAspect("WidgetAspect").isContextReady(this.props.rootId);if(!this.props.structure&&!this.magicStructure.id||!o)return this._lastRenderedComp;var s=t.clone(this.renderedCompProps);this.renderedCompProps=this.getRenderedCompProps(this.props,s);var a=this.props.structure||this.magicStructure,p=!!t.get(a,["layout","docked"]),d=!(this.wasDocked&&!p)&&n.getLayoutMechanism()===c.constants.LAYOUT_MECHANISMS.ANCHORS;if(this.wasDocked=p,this.stylesToApplyDomOnly=d&&h.getStylesToApplyDomOnly(s,this.renderedCompProps,i,a),this.stylesToApplyDomOnly)return this._lastRenderedComp;var m=this._isRevealed;this._isRevealed=m||this.shouldReveal.get();var f=void 0,g=void 0,v=void 0;return this._isRevealed?(f=i,g=t.omit(this.renderedCompProps,P),v=t.map(this.childrenToRender,function(t){return function(t){return t&&u.getCompClass(t)||e.utils.createReactElement.bind(null,"div")}(t.componentType)(r.getChildProps(t.id))}),!1===m&&l.decNotRevealedCount(n)):(f="div",g=C,!1!==m&&l.incNotRevealedCount(n)),this._lastRenderedComp=e.utils.createReactElement(f,g,v),this._lastRenderedComp},handleModeChangeAnimationsFinished:function(e){this.currentlyAnimatingChildren=t.omit(this.currentlyAnimatingChildren,t.keys(e)),I(this.currentlyAnimatingChildren)||this.forceUpdate()}}))}}.apply(t,n))||(e.exports=o)},717:function(e,t,r){var n,o;n=[r(0),r(24),r(1)],void 0===(o=function(e,t,r){"use strict";var n=e(r.constants.COMP_DATA_QUERY_KEYS).values().concat(["id","componentType","type","modes","layout","skin","styleId","originalStyleId","originCompId"]).value();function o(t,r,n,o,i,s,a){!function(t,r){e.forOwn(r,function(e,r){Object.defineProperty(t,r,{value:e,enumerable:!1})})}(this,{cachedComputedStructureValues:{},siteData:t,displayedDAL:r,pointers:n,compId:o,computedPagePointer:i,computedChildrenToRender:s,computedParentDimensions:a})}return o.prototype=e.transform(n,function(e,r){Object.defineProperty(e,r,{get:function(){return function(e){if(this.cachedComputedStructureValues[e])return this.cachedComputedStructureValues[e].get();var r=t.computed(function(){var t=this.pointers.components.getComponent(this.compId,this.computedPagePointer.get());if(!t||!this.displayedDAL.isExist(t))return null;var r=this.pointers.getInnerPointer(t,[e]);return this.displayedDAL.getStructureProperty(r)},{context:this,compareStructural:!0,name:this.compId+"_MagicStructure_"+e});return this.cachedComputedStructureValues[e]=r,r.get()}.call(this,r)}})},{}),Object.defineProperty(o.prototype,"components",{get:function(){if(this.cachedComputedStructureValues.components)return this.cachedComputedStructureValues.components.get();var r=t.computed(function(){return e.map(this.computedChildrenToRender.get(),"id")},{context:this,compareStructural:!0,name:this.compId+"_MagicStructure_components"});return this.cachedComputedStructureValues.components=r,r.get()}}),Object.defineProperty(o.prototype,"dimensions",{get:function(){if(this.cachedComputedStructureValues.dimensions)return this.cachedComputedStructureValues.dimensions.get();var e=t.computed(function(){return r.positionAndSize.isVerbsLayout(this.layout)?r.positionAndSize.getVerbsPositionAndSize(this.layout,this.computedParentDimensions.get(),this.siteData.getScreenSize(),this.siteData.getSiteWidth()):r.positionAndSize.getAbsolutePositionAndSize(this.layout)},{context:this,compareStructural:!0,name:this.compId+"_MagicStructure_dimensions"});return this.cachedComputedStructureValues.dimensions=e,e.get()}}),o}.apply(t,n))||(e.exports=o)},718:function(e,t,r){var n,o;n=[r(0),r(4)],void 0===(o=function(e,t){"use strict";var r=function(t,r,n){var o=e.pickBy(r,function(r,n){return t[n]!==r&&!e.isEqual(t[n],r)});return 1===e.size(o)&&!!o[n]};var n=function(r){var n=t.style.getPrefixedTransform();if(!e.has(r,[n]))return r;var o=e.clone(r),i=function(e){return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})}(n);return o[i]=r[n],n!==i&&(o[n]=""),o};return{getStylesToApplyDomOnly:function(t,o){var i=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).compSpecificIsDomOnlyOverride,s=function(e,t){return r(e,t,"style")}(t,o);if(s&&function(e,t){return r(e,t,"top")}(t.style,o.style)){var a={top:o.style.top};return n(a)}var p=s&&o.style.display===t.style.display;return e.isFunction(i)&&(p=p&&i(t,o)),p?n(o.style):null}}}.apply(t,n))||(e.exports=o)}})});
//# sourceMappingURL=compUtils.min.js.map