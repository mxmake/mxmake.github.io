/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./conf/grunt/main-entry/viewer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./conf/grunt/main-entry/viewer.js":
/*!*****************************************!*\
  !*** ./conf/grunt/main-entry/viewer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _isBot2 = __webpack_require__(/*! santa-main-r/lib/lib/common/isBot.js */ "./node_modules/santa-main-r/lib/lib/common/isBot.js");

var _isBot3 = _interopRequireDefault(_isBot2);

var _isSuspectedBot2 = __webpack_require__(/*! santa-main-r/lib/lib/common/isSuspectedBot.js */ "./node_modules/santa-main-r/lib/lib/common/isSuspectedBot.js");

var _isSuspectedBot3 = _interopRequireDefault(_isSuspectedBot2);

var _experiment = __webpack_require__(/*! santa-main-r/lib/lib/viewer/experiment.js */ "./node_modules/santa-main-r/lib/lib/viewer/experiment.js");

var _PackagesUtil = __webpack_require__(/*! santa-main-r/lib/lib/common/PackagesUtil.js */ "./node_modules/santa-main-r/lib/lib/common/PackagesUtil.js");

var _PackagesUtil2 = _interopRequireDefault(_PackagesUtil);

var _convertSiteModel2 = __webpack_require__(/*! santa-main-r/lib/lib/viewer/convertSiteModel.js */ "./node_modules/santa-main-r/lib/lib/viewer/convertSiteModel.js");

var _convertSiteModel3 = _interopRequireDefault(_convertSiteModel2);

var _render2 = __webpack_require__(/*! santa-main-r/lib/lib/viewer/render.js */ "./node_modules/santa-main-r/lib/lib/viewer/render.js");

var _render3 = _interopRequireDefault(_render2);

var _addExperimentsFromQuery = __webpack_require__(/*! santa-main-r/lib/lib/common/addExperimentsFromQuery.js */ "./node_modules/santa-main-r/lib/lib/common/addExperimentsFromQuery.js");

var _addExperimentsFromQuery2 = _interopRequireDefault(_addExperimentsFromQuery);

var _applyPackagesCache = __webpack_require__(/*! santa-main-r/lib/lib/common/applyPackagesCache.js */ "./node_modules/santa-main-r/lib/lib/common/applyPackagesCache.js");

var _applyPackagesCache2 = _interopRequireDefault(_applyPackagesCache);

var _getBaseVersion = __webpack_require__(/*! santa-main-r/lib/lib/common/getBaseVersion.js */ "./node_modules/santa-main-r/lib/lib/common/getBaseVersion.js");

var _getFullRjsConfig = __webpack_require__(/*! santa-main-r/lib/lib/common/getFullRjsConfig.js */ "./node_modules/santa-main-r/lib/lib/common/getFullRjsConfig.js");

var _getFullRjsConfig2 = _interopRequireDefault(_getFullRjsConfig);

var _utils = __webpack_require__(/*! santa-main-r/lib/lib/viewer/utils.js */ "./node_modules/santa-main-r/lib/lib/viewer/utils.js");

var _getQueryUtils = __webpack_require__(/*! santa-main-r/lib/lib/common/getQueryUtils.js */ "./node_modules/santa-main-r/lib/lib/common/getQueryUtils.js");

var _getQueryUtils2 = _interopRequireDefault(_getQueryUtils);

var _getSubdomain = __webpack_require__(/*! santa-main-r/lib/lib/common/getSubdomain.js */ "./node_modules/santa-main-r/lib/lib/common/getSubdomain.js");

var _getSubdomain2 = _interopRequireDefault(_getSubdomain);

var _instruments2 = __webpack_require__(/*! santa-main-r/lib/lib/viewer/instruments.js */ "./node_modules/santa-main-r/lib/lib/viewer/instruments.js");

var _instruments3 = _interopRequireDefault(_instruments2);

var _joinURL = __webpack_require__(/*! santa-main-r/lib/lib/common/joinURL.js */ "./node_modules/santa-main-r/lib/lib/common/joinURL.js");

var _joinURL2 = _interopRequireDefault(_joinURL);

var _mobile = __webpack_require__(/*! santa-main-r/lib/lib/viewer/mobile.js */ "./node_modules/santa-main-r/lib/lib/viewer/mobile.js");

var _mobile2 = _interopRequireDefault(_mobile);

var _overrideScriptsLocationMapFromQuery = __webpack_require__(/*! santa-main-r/lib/lib/common/overrideScriptsLocationMapFromQuery.js */ "./node_modules/santa-main-r/lib/lib/common/overrideScriptsLocationMapFromQuery.js");

var _overrideScriptsLocationMapFromQuery2 = _interopRequireDefault(_overrideScriptsLocationMapFromQuery);

var _requirejs = __webpack_require__(/*! requirejs */ "requirejs");

var _requirejs2 = _interopRequireDefault(_requirejs);

var _resourcePrefetch = __webpack_require__(/*! santa-main-r/lib/lib/viewer/resourcePrefetch.js */ "./node_modules/santa-main-r/lib/lib/viewer/resourcePrefetch.js");

var _resourcePrefetch2 = _interopRequireDefault(_resourcePrefetch);

var _rjsConfig = __webpack_require__(/*! santa-main-r/lib/lib/viewer/rjs-config.js */ "./node_modules/santa-main-r/lib/lib/viewer/rjs-config.js");

var _rjsConfig2 = _interopRequireDefault(_rjsConfig);

var _storageUtil = __webpack_require__(/*! santa-main-r/lib/lib/common/storageUtil.js */ "./node_modules/santa-main-r/lib/lib/common/storageUtil.js");

var _storageUtil2 = _interopRequireDefault(_storageUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */
/* eslint prefer-template:0 */
/* eslint-disable sort-imports */

var sentryForViewerProjectLink = 'https://c22b509a2a2844068e609ca596c6bbdc@sentry.io/263673';

if (window.Raven && window.publicModel) {
  window.Raven.config(sentryForViewerProjectLink).install();
}

// This should be before the Polyfill

var isBot = (0, _isBot3.default)(window);
var isSuspectedBot = (0, _isSuspectedBot3.default)(window);

var options = __webpack_require__(/*! ../../../gen/options.json */ "./gen/options.json");
var packages = __webpack_require__(/*! ../../../gen/packagesList.json */ "./gen/packagesList.json");
var _window = window,
    rendererModel = _window.rendererModel,
    publicModel = _window.publicModel,
    _window$serviceTopolo = _window.serviceTopology,
    serviceTopology = _window$serviceTopolo === undefined ? {} : _window$serviceTopolo;


window.persistent = (0, _storageUtil2.default)(window); // TODO: how is this used?
var queryUtil = (0, _getQueryUtils2.default)(window);
window.queryUtil = queryUtil;

// Preload scripts for caching
var prefetch = window.isPrefetchMode || window.location.pathname.indexOf('prefetch') > 0 || queryUtil.isParameterTrue('prefetch');

var experimentInst = (0, _experiment.experiment)(window);
var render = (0, _render3.default)(window, _requirejs2.default, prefetch, isBot, experimentInst);
var packagesUtil = new _PackagesUtil2.default(packages, window.location.search, options.bundles);
var getViewerRjsConfig = (0, _rjsConfig2.default)(window, options.versions, experimentInst);

var _instruments = (0, _instruments3.default)(window, _requirejs2.default, isBot, isSuspectedBot, prefetch, experimentInst),
    sendErrorOrQueue = _instruments.sendErrorOrQueue,
    instrument = _instruments.instrument;

var convertSiteModel = (0, _convertSiteModel3.default)(window, sendErrorOrQueue, queryUtil);
var isPreview = queryUtil.isParameterTrue('isEdited');
var hasPageIdInHash = window.location.hash && window.location.hash !== '#!';
var isServerSide = !(window.clientSideRender || isPreview); //eslint-disable-line santa/no-module-state

if (isServerSide && hasPageIdInHash) {
  window.isServerSideWithHash = true;
  isServerSide = false;
}

var _window2 = window,
    _window2$wixBiSession = _window2.wixBiSession,
    wixBiSession = _window2$wixBiSession === undefined ? {} : _window2$wixBiSession;

window.wixBiSession = wixBiSession;
wixBiSession.mainLoaded = Date.now();
wixBiSession.et = 1;

serviceTopology.scriptsLocationMap = (0, _overrideScriptsLocationMapFromQuery2.default)(serviceTopology.scriptsLocationMap, queryUtil.getParameterByName('scriptsLocations'));

rendererModel.runningExperiments = (0, _addExperimentsFromQuery2.default)(rendererModel.runningExperiments, queryUtil, 'viewer');

window.siteModel = convertSiteModel(rendererModel, publicModel, rendererModel.runningExperiments);
window.siteModel.Raven = window.Raven;
var _window3 = window,
    siteModel = _window3.siteModel;
var premiumFeatures = rendererModel.premiumFeatures;

var isPremium = !!premiumFeatures && premiumFeatures.indexOf('HasDomain') !== -1;

var pageInfo = publicModel && (0, _utils.getPageInfo)(window, publicModel.pageList, isPremium);

instrument(serviceTopology, wixBiSession, queryUtil, siteModel, pageInfo, isPremium, isServerSide);

if (publicModel && !options.disableCheckRenderTime) {
  if (Math.abs(Date.now() - publicModel.renderTime) > 2592e5) {
    wixBiSession.sendError({
      errorName: 'Error #2592e5',
      errorCode: 111026
    });
    throw new Error('Error #2592e5');
  }
}

if (isServerSide && experimentInst.isOpen('sv_ssrBufferEvents')) {
  window.addEventListener('message', siteModel.messageHandler, false);
}

if (window.karmaIntegration) {
  siteModel.documentServicesModel = siteModel.documentServicesModel || window.karmaIntegration.documentServicesModel;
  siteModel.wixapps = siteModel.wixapps || {};
  siteModel.wixapps.appbuilder = siteModel.wixapps.appbuilder || {};
  siteModel.wixapps.appbuilder.descriptor = siteModel.wixapps.appbuilder.descriptor || {};
  siteModel.wixapps.appbuilder.descriptor.applicationInstanceVersion = siteModel.wixapps.appbuilder.descriptor.applicationInstanceVersion || {};
}

var config = (0, _getFullRjsConfig2.default)('santa', window.santaBase, getViewerRjsConfig(serviceTopology), packagesUtil, serviceTopology);

if (!options.disablePackagesCache) {
  (0, _applyPackagesCache2.default)({
    proj: 'santa',
    paths: config.paths,
    manifest: options.manifest,
    version: options.version,
    scriptsDomainUrl: serviceTopology.scriptsDomainUrl
  });
}

siteModel.santaBase = config.baseUrl;
serviceTopology.staticServerFallbackUrl = serviceTopology.staticServerFallbackUrl || 'https://fallback.wix.com/';
siteModel.baseVersion = (0, _getBaseVersion.getBaseVersion)(siteModel.santaBase);
siteModel.santaBaseFallbackUrl = siteModel.baseVersion ? (0, _joinURL2.default)(serviceTopology.staticServerFallbackUrl, siteModel.baseVersion) : null;

_requirejs2.default.config(config);
(0, _experiment.defineExperiment)(window);

var mobileView = _mobile2.default.isMobileView(window, siteModel, queryUtil);

var prefetcher = (0, _resourcePrefetch2.default)(window, {
  siteModel: siteModel,
  publicModel: publicModel,
  pageInfo: pageInfo,
  wixBiSession: wixBiSession,
  isServerSide: isServerSide,
  mobileView: mobileView,
  experiment: experimentInst,
  requirejs: _requirejs2.default
});

try {
  window.document.domain = (0, _getSubdomain2.default)(window.document.domain);
} catch (e) {
  // empty
}

window.isPreview = queryUtil.isParameterTrue.bind(null, 'isEdited');
var isExternalPreview = rendererModel.previewMode;

render({
  isServerSide: isServerSide,
  isPreview: isPreview,
  isExternalPreview: isExternalPreview,
  prefetcher: prefetcher,
  queryUtil: queryUtil,
  siteModel: siteModel,
  wixBiSession: wixBiSession,
  mobileView: mobileView,
  pageInfo: pageInfo,
  config: config
});
wixBiSession.beat(4);

/***/ }),

/***/ "./gen/options.json":
/*!**************************!*\
  !*** ./gen/options.json ***!
  \**************************/
/*! exports provided: versions, bundles, manifest, default */
/***/ (function(module) {

module.exports = {"versions":{"@shimil/remote-dom":"5.0.6","ag-grid":"6.2.1","ajv":"4.8.1","almond":"0.3.3","atob":"2.1.1","bi-logger-sanitizer":"1.0.10","blueimp-md5":"2.10.0","color":"0.11.1","create-react-class":"15.6.2","data-capsule":"1.0.83","date-fns":"1.3.0","fedops-logger":"3.0.10","grunt-contrib-requirejs":"1.0.0","gsap":"1.19.0","hammerjs":"2.0.8","hls.js":"0.8.9","image-client-api":"1.693.0","immutable":"3.7.5","js-platform-apps-configuration":"1.0.27","jsdom":"9.11.0","lodash":"4.17.10","mobx":"3.3.3","mobx-react":"4.2.2","mousetrap":"1.4.6","node-fetch":"2.1.2","platform-editor-sdk":"0.0.313","pm-rpc":"1.0.11","promote-analytics-adapter":"1.0.128","prop-types":"15.6.0","react":"16.3.0","react-dom":"16.3.0","react-dom-factories":"1.0.2","santa-bundle":"1.198.0","santa-components":"1.348.0","santa-core-utils":"1.638.0","santa-data-fixer":"1.193.1","santa-galleries":"1.368.0","santa-host-platform-services":"1.52.0","santa-image-utils":"1.190.0","santa-main-r":"1.758.2","santa-mobile-core":"1.456.1","santa-multilingual":"1.366.0","santa-platform-utils":"1.504.0","santa-renderer":"1.47.0","santa-skin-utils":"1.180.0","santa-wix-code":"1.624.0","soundmanager2":"2.97.20150601","speakingurl":"7.0.0","swfobject":"2.2.1","wix-code-platform":"1.0.977","wix-dom-sanitizer":"1.6.0","wix-elementory-globals":"3.1.942","wix-fullstory-loader":"1.0.306","wix-ui-santa":"1.0.469","xss":"0.2.12","zepto":"1.2.0","tweenmax":"1.19.0"},"bundles":[],"manifest":{}};

/***/ }),

/***/ "./gen/packagesList.json":
/*!*******************************!*\
  !*** ./gen/packagesList.json ***!
  \*******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, default */
/***/ (function(module) {

module.exports = ["a11yTestKit","adminLoginButton","animations","audioCommon","audioPlayer","backToTopButton","backgroundCommon","boxSlideShowSlide","buttonCommon","checkbox","checkboxGroup","comboBoxInput","compDesignUtils","compUtils","components","componentsPreviewLayer","componentsSeoLayer","contactForm","container","containerCommon","controller","core","coreUtils","dataFixer","datePicker","dateUtils","dialogs","displayer","disqusComments","documentMedia","documentServices","documentServicesSchemas","ebayItemsBySeller","editingRendererPlugins","exitMobileModeButton","facebookComments","facebookLike","facebookLikeBox","facebookShare","fileUploader","flashComponent","flickrBadgeWidget","formCommon","galleriesCommon","googleMap","gridComponent","hostLibs","htmlComponent","icon","imageButton","imageZoom","itunesButton","languageSelector","layout","linkBar","loginButton","loginSocialBar","matrixGallery","mediaContainer","mediaControls","mediaPlayer","mediaRichText","memoizeAPI","messageView","mobileActionsMenu","pagination","paypalButton","pinItPinWidget","pinterestFollow","pinterestPinIt","platformInit","popupCloseTextButton","popupContainer","previewExtensionsCore","qaAutomation","quickActionBar","radioButton","radioGroup","ratingsDisplay","render","repeater","richTextBox","rssButton","santaHost","santaPreview","santaPreviewComponents","santaProps","singleAudioPlayer","site-widgets","siteRegionContainer","skinExports","skins","skypeCallButton","slideShowGallery","socialCommon","soundCloudWidget","spotifyFollow","spotifyPlayer","stripColumnsContainer","stripContainer","stripSlideShow","stripSlideShowSlide","subscribeForm","svgCommon","svgShape","table","tags","testUtils","textArea","textCommon","thirdPartyAnalytics","tinyMenu","toggleSwitch","tpa","tpaGalleries","tpaWarmup","translationsUtils","twitterFeed","utils","vKShareButton","verticalAnchorsMenu","verticalMenu","videoPlayer","wGooglePlusOne","wTwitterFollow","wTwitterTweet","warmup","warmupUtils","wixCode","wixCodeInit","wixFreemiumBanner","wixappsBuilder","wixappsClassics","wixappsCore","wixappsLayout","youTubeSubscribeButton"];

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/PackagesUtil.js":
/*!******************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/PackagesUtil.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _reduceQueryToObject = __webpack_require__(/*! ./reduceQueryToObject */ "./node_modules/santa-main-r/lib/lib/common/reduceQueryToObject.js");

var _reduceQueryToObject2 = _interopRequireDefault(_reduceQueryToObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @param {Array.<string>} packagesStructure
 * @param {string} query
 * @param {Array.<string>?} bundles
 * @constructor
 */
function PackagesUtil(packagesStructure, query) {
  var bundles = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

  var queryParamsObject = (0, _reduceQueryToObject2.default)(query.replace(/^\?/, ''));

  /**
   * changes the config to load packages correctly, accounting the query
   * @param {Object} config
   * @returns {Object}
   */
  this.buildConfig = function (config) {
    var debug = (decodeURIComponent(queryParamsObject.debug) || '').split(',').filter(Boolean);

    if (debug.indexOf('all') !== -1) {
      var debuggableExternals = Object.keys(config.paths).filter(function (path) {
        return config.paths[path].source;
      });
      debug = packagesStructure.concat(debuggableExternals);
    }

    function isInDebug(i) {
      return debug.indexOf(i) !== -1;
    }

    //config.paths:
    Object.keys(config.paths).filter(function (k) {
      return _typeof(config.paths[k]) === 'object' && !Array.isArray(config.paths[k]);
    }).forEach(function (k) {
      config.paths[k] = config.paths[k][isInDebug(k) ? 'source' : 'min'];
    });

    //config.bundles:
    config.bundles = config.bundles || {};

    packagesStructure.filter(function (p) {
      return !isInDebug(p);
    }).filter(function (p) {
      return bundles.indexOf(p) === -1;
    }).forEach(function (pkg) {
      config.bundles[pkg] = pkg;
      config.paths[pkg] = 'packages-bin/' + pkg + '/' + pkg + '.min';
    });

    if (bundles && bundles.length > 0) {
      var bundleName = 'first-load';
      config.bundles[bundleName] = bundles;
      config.paths[bundleName] = 'packages-bin/' + bundleName + '/' + bundleName + '.min';
    }

    //config.packages:
    config.packages = config.packages || [];
    var projectPackages = packagesStructure.filter(isInDebug).map(function (name) {
      return {
        name: name,
        location: 'packages/' + name + '/src/main',
        main: name
      };
    });
    config.packages = config.packages.concat(projectPackages);

    return config;
  };
}

exports.default = PackagesUtil;
//# sourceMappingURL=PackagesUtil.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/addExperimentsFromQuery.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/addExperimentsFromQuery.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = addExperimentsFromQuery;
function addExperimentsFromQuery(runningExperiments, queryUtil, project, urlQueries) {
  var projValuePairRegex = new RegExp('^(' + project + ':)(.*)|(.*)$');

  var experiments = {};
  Object.keys(runningExperiments).forEach(function (key) {
    experiments[key] = runningExperiments[key];
  });

  var setPair = function setPair(_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    experiments[key] = value;
  };
  var getValueIfProj = function getValueIfProj(str) {
    return str.replace(projValuePairRegex, '$2');
  };

  var filterParamsForCurrProj = function filterParamsForCurrProj(paramValue) {
    return paramValue.split(';').map(getValueIfProj).filter(Boolean).join(',');
  };

  var setParamValues = function setParamValues(param, value) {
    var paramValue = queryUtil.getParameterByName(param, urlQueries);
    if (paramValue.indexOf(':') !== -1) {
      // Should be deprecated
      paramValue = filterParamsForCurrProj(paramValue);
    }
    paramValue.split(',').filter(Boolean).map(function (exp) {
      return [exp, value];
    }).forEach(setPair);
  };

  var setProjParamExperiments = function setProjParamExperiments() {
    queryUtil.getParameterByName(project + 'exp', urlQueries).split(',').filter(Boolean).map(function (exp) {
      return exp.split(':');
    }).map(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
          key = _ref4[0],
          value = _ref4[1];

      return [key.toLowerCase(), value || 'new'];
    }).forEach(setPair);
  };

  //////////////////

  setParamValues('experiments', 'new');
  setParamValues('experimentsoff', 'old');
  setProjParamExperiments();

  return experiments;
}
//# sourceMappingURL=addExperimentsFromQuery.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/applyPackagesCache.js":
/*!************************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/applyPackagesCache.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyPackagesCache;
function applyPackagesCache(_ref) {
  var proj = _ref.proj,
      paths = _ref.paths,
      manifest = _ref.manifest,
      version = _ref.version,
      scriptsDomainUrl = _ref.scriptsDomainUrl;

  var validForCache = function validForCache(pkg) {
    return paths[pkg] && manifest[pkg] !== version;
  };
  var overrideFromCache = function overrideFromCache(pkg) {
    paths[pkg] = scriptsDomainUrl + "services/" + proj + "/" + manifest[pkg] + "/" + paths[pkg];
  };

  Object.keys(manifest).filter(validForCache).forEach(overrideFromCache);
}
//# sourceMappingURL=applyPackagesCache.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/appsPath.js":
/*!**************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/appsPath.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nativeAppsPathBuilder = undefined;

var _rjsConfigUtils = __webpack_require__(/*! ./rjs-config-utils */ "./node_modules/santa-main-r/lib/lib/common/rjs-config-utils.js");

function nativeAppsPathBuilder(_ref, scriptsLocation) {
  var _ref$clientSpecMap = _ref.clientSpecMap,
      clientSpecMap = _ref$clientSpecMap === undefined ? {} : _ref$clientSpecMap,
      nativeComponentsOverrides = _ref.nativeComponentsOverrides;

  return Object.keys(clientSpecMap).map(function (app) {
    return clientSpecMap[app];
  }).filter(function (_ref2) {
    var appFields = _ref2.appFields;
    return appFields && appFields.platform && appFields.platform.viewerScriptUrl;
  }) //eslint-disable-line
  .reduce(function (result, _ref3) {
    var widgets = _ref3.widgets;

    var widgetsOutput = buildWidget(widgets);
    var widgetsAfterOverrides = buildNativeComponentOverrides(nativeComponentsOverrides, scriptsLocation);
    (0, _rjsConfigUtils.mergeInto)(result, widgetsAfterOverrides);
    (0, _rjsConfigUtils.mergeInto)(result, widgetsOutput);
    return result;
  }, {});
}

function buildNativeComponentOverrides(nativeComponentsOverrides, scriptsLocation) {
  try {
    var overrides = JSON.parse(nativeComponentsOverrides);
    return Object.keys(overrides).map(function (override) {
      return overrides[override];
    }).reduce(function (result, _ref4) {
      var componentName = _ref4.componentName,
          componentUrl = _ref4.componentUrl;

      if (validateUrl(componentUrl, scriptsLocation)) {
        var name = 'native.components.' + componentName;
        result[name] = componentUrl;
      }
      return result;
    }, {});
  } catch (error) {
    return '';
  }
}

function validateUrl(url, scriptsLocation) {
  return url.indexOf(scriptsLocation) === 0 || url.search('https?://localhost') === 0;
}

function buildWidget(widgets) {
  return Object.keys(widgets).map(function (widget) {
    return widgets[widget];
  }).filter(function (_ref5) {
    var componentFields = _ref5.componentFields;
    return componentFields && componentFields.componentName && componentFields.componentUrl;
  }).reduce(function (result, _ref6) {
    var _ref6$componentFields = _ref6.componentFields,
        componentName = _ref6$componentFields.componentName,
        componentUrl = _ref6$componentFields.componentUrl;

    var name = 'native.components.' + componentName;
    result[name] = componentUrl;
    return result;
  }, {});
}

exports.nativeAppsPathBuilder = nativeAppsPathBuilder;
//# sourceMappingURL=appsPath.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/getBaseVersion.js":
/*!********************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/getBaseVersion.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param url
 * @returns {*|Array|{index: number, input: string}}
 */
function getBaseVersion(url) {
  var semverMatches = url.match(/\/(\d+\.\d+\.\d+)\/?$/);
  return semverMatches && semverMatches[1];
}

exports.getBaseVersion = getBaseVersion;
//# sourceMappingURL=getBaseVersion.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/getFullRjsConfig.js":
/*!**********************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/getFullRjsConfig.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getFullRjsConfig;

var _joinURL = __webpack_require__(/*! ./joinURL.js */ "./node_modules/santa-main-r/lib/lib/common/joinURL.js");

var _joinURL2 = _interopRequireDefault(_joinURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAddress = function isAddress(str) {
  return (/^(https?:)?\/\//.test(str)
  );
}; /* eslint curly:0 */

function getFullRjsConfig(name, base, config, packagesUtil, serviceTopology) {
  function getBaseUrl() {
    if (!base) return serviceTopology.scriptsLocationMap[name];
    if (isAddress(base)) return base;
    return (0, _joinURL2.default)(serviceTopology.scriptsDomainUrl, 'services', name, base);
  }

  config = packagesUtil.buildConfig(config);
  config.baseUrl = getBaseUrl();
  return config;
}
//# sourceMappingURL=getFullRjsConfig.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/getIntegrationPath.js":
/*!************************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/getIntegrationPath.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getIntegrationPath;

var _isLocal = __webpack_require__(/*! ../common/isLocal.js */ "./node_modules/santa-main-r/lib/lib/common/isLocal.js");

var _isLocal2 = _interopRequireDefault(_isLocal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var packageToFolder = {
  tpaIntegration: 'Santa-Integration-Protractor',
  wixCodeIntegration: 'js-wixcode-integration',
  viewerIntegration: 'viewer-integration',
  platformIntegrationEditor: 'js-platform-integration',
  tpaIntegrationEditor: 'Santa-Editor-Integration-Protractor' };

function getLocalBasePath(baseArtifact) {
  var protocol = (/^https?:/.exec(baseArtifact) || [''])[0];
  return protocol + '//localhost:4578';
}

function getIntegrationPath(packageName, baseArtifact) {
  var integrationBasePath = (0, _isLocal2.default)(baseArtifact) ? getLocalBasePath(baseArtifact) : 'https://s3.amazonaws.com/integration-tests-statics/' + packageToFolder[packageName] + '/SNAPSHOT/runners';

  return integrationBasePath + '/' + packageName + '/src/main';
}
//# sourceMappingURL=getIntegrationPath.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/getQueryUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/getQueryUtils.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getQueryUtils;
/**
 * Get value of URL parameter by its name
 * @param {string} name
 * @param {string} query
 * @returns {string}
 */
function getParameterFromQuery(query, name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(query);
  return results && results[1] ? decodeURIComponent(results[1]).replace(/\+/g, ' ') : '';
}

/**
 * Get state of boolean URL parameter by its name
 * @param {string} name
 * @param {string} query
 * @returns {boolean}
 */
function isParameterTrueInQuery(query, name) {
  return getParameterFromQuery(query, name) === 'true';
}

function getQueryUtils(window) {
  return {
    getParameterFromQuery: getParameterFromQuery,
    isParameterTrueInQuery: isParameterTrueInQuery,
    getParameterByName: getParameterFromQuery.bind(null, window.location.search),
    isParameterTrue: isParameterTrueInQuery.bind(null, window.location.search)
  };
}
//# sourceMappingURL=getQueryUtils.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/getSubdomain.js":
/*!******************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/getSubdomain.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint prefer-template:0 */

module.exports = function getSubdomain(domain) {
  if (!domain) {
    return '';
  }
  var subDomain = domain.split('.');
  if (subDomain.length <= 2) {
    subDomain = domain;
  } else {
    var beforeLastPart = subDomain[subDomain.length - 2];
    var topLevelDomains = { com: true, org: true, net: true, edu: true, gov: true, mil: true, info: true, co: true, ac: true };
    if (topLevelDomains[beforeLastPart]) {
      subDomain = subDomain[subDomain.length - 3] + '.' + subDomain[subDomain.length - 2] + '.' + subDomain[subDomain.length - 1];
    } else {
      subDomain = subDomain[subDomain.length - 2] + '.' + subDomain[subDomain.length - 1];
    }
  }
  return subDomain;
};
//# sourceMappingURL=getSubdomain.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/isBot.js":
/*!***********************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/isBot.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (window) {
  return (/bot|google|phantom|crawler|spider|crawling|headless|^mozilla\/4\.0$/i.test(window.navigator.userAgent)
  );
};
//# sourceMappingURL=isBot.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/isLocal.js":
/*!*************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/isLocal.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isLocal;
/**
 * @param {string} path
 * @returns {boolean}
 */
function isLocal(path) {
  return (/^(https?:)?\/\/localhost($|[/:])/.test(path)
  );
}
//# sourceMappingURL=isLocal.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/isSuspectedBot.js":
/*!********************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/isSuspectedBot.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (window) {
  if (!Function.prototype.bind) {
    return true;
  }

  var languages = window.navigator.languages;

  if (languages && languages.length === 0) {
    return true;
  }

  var stack = void 0;
  try {
    null[0]();
  } catch (e) {
    stack = e.stack;
  }

  if (stack && /ph\x61n\x74om|n\x6fde[^_]/i.test(stack)) {
    return true;
  }

  return false;
};
//# sourceMappingURL=isSuspectedBot.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/joinURL.js":
/*!*************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/joinURL.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function safe(a) {
  return typeof a === 'undefined' ? 'undefined' : a;
}

function safeReplace(a, search, replaceValue) {
  return safe(a).replace(search, replaceValue);
}

module.exports = function joinURL() {
  var url = arguments[0];
  for (var i = 1; i < arguments.length; ++i) {
    url = safeReplace(url, /\/$/, '') + '/' + safeReplace(arguments[i], /^\//, ''); //eslint-disable-line prefer-template
  }
  return url;
};
//# sourceMappingURL=joinURL.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/overrideScriptsLocationMapFromQuery.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/overrideScriptsLocationMapFromQuery.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = overrideScriptsLocationMapFromQuery;

var _replaceUrlVersion = __webpack_require__(/*! ./replaceUrlVersion */ "./node_modules/santa-main-r/lib/lib/common/replaceUrlVersion.js");

var _replaceUrlVersion2 = _interopRequireDefault(_replaceUrlVersion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function overrideScriptsLocationMapFromQuery(scriptsLocationMap, overrideParam) {
  overrideParam.split(',').filter(Boolean).forEach(function (keyValueString) {
    var pair = keyValueString.split(':');
    var urlOverride = (0, _replaceUrlVersion2.default)(scriptsLocationMap[pair[0]], pair[1]);
    if (urlOverride && scriptsLocationMap[pair[0]] !== urlOverride) {
      scriptsLocationMap[pair[0]] = urlOverride;
    }
  });
  return scriptsLocationMap;
}
//# sourceMappingURL=overrideScriptsLocationMapFromQuery.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/reduceQueryToObject.js":
/*!*************************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/reduceQueryToObject.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reduceQueryToObject;
/**
 *
 * @param {string} str
 * @param {string?} separator
 * @param {string?} equalizer
 * @returns {*}
 */
function reduceQueryToObject(str) {
  var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '&';
  var equalizer = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '=';

  return (str || '').replace(/^\?/, '').split(separator).reduce(function (o, pairString) {
    var pair = pairString.split(equalizer);
    o[pair[0]] = pair[1];
    return o;
  }, {});
}
//# sourceMappingURL=reduceQueryToObject.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/replaceUrlVersion.js":
/*!***********************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/replaceUrlVersion.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var bareSemver = /(\d)+\.(\d)+\.(\d)+/;
var onlyBareSemver = /^(\d)+\.(\d)+\.(\d)+$/;
var onlySha = /^[0-9a-f]{40}$/;

var validVersion = function validVersion(version) {
  return onlyBareSemver.test(version) || onlySha.test(version);
};

function replaceUrlVersion(url, version) {
  return url && validVersion(version) ? url.replace(bareSemver, version) : url;
}

exports.default = replaceUrlVersion;
//# sourceMappingURL=replaceUrlVersion.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/rjs-config-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/rjs-config-utils.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeInto = exports.nodeObj = exports.node = exports.third = exports.thirdObjUrl = exports.unpkgObj = exports.unpkg = exports.vendorOrThirdPartyObj = exports.vendorOrThirdParty = exports.unpkgOrNodeObj = exports.unpkgOrNode = undefined;

var _joinURL = __webpack_require__(/*! ./joinURL */ "./node_modules/santa-main-r/lib/lib/common/joinURL.js");

var _joinURL2 = _interopRequireDefault(_joinURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * builds an unpkg url e.g.
 * https://static.parastorage.com/unpkg/lodash@4.17.10/lodash.min.js
 * https://unpkg.parastorage.com/wix-base-ui@2.192.0/dist/base-ui.js
 * @param {string} pkg
 * @param {string} v
 * @param {string} p
 * @returns {string}
 */
function unpkg(pkg, v, p) {
  return '//static.parastorage.com/unpkg/' + pkg + '@' + v + '/' + p;
  // return `//unpkg.parastorage.com/${pkg}@${v}/${p}`
}

/**
 * @param {string} pkg
 * @param {string} v
 * @param {string} min
 * @param {string} debug
 * @returns {{min: string, source: string}}
 */
function unpkgObj(pkg, v, min, debug) {
  return {
    min: unpkg(pkg, v, min),
    source: unpkg(pkg, v, debug)
  };
}

/**
 * @param {string} scriptLocation
 * @param {string} pkg
 * @param {string} v
 * @param {string} min
 * @param {string} debug
 * @returns {{min: url, source: url}}
 */
function thirdObjUrl(scriptLocation, pkg, v, min, debug) {
  return {
    min: third(scriptLocation, pkg, v, min),
    source: third(scriptLocation, pkg, v, debug)
  };
}

/**
 * @param {string} v
 * @param {string} name
 */
function check(v, name) {
  if (typeof v === 'undefined') {
    throw new Error('error ' + name + ' is \'' + v + '\'');
  }
}

/**
 * @param {string} scriptsLocation
 * @param {string} pkg
 * @param {string} version
 * @param {string} path
 * @returns {url}
 */
function third(scriptsLocation, pkg, version, path) {
  check(scriptsLocation, 'scriptsLocation');
  check(pkg, 'pkg');
  check(version, 'version');
  check(path, 'path');
  return (0, _joinURL2.default)(scriptsLocation, 'services', 'third-party', pkg, version, path);
}

// function isLocalSource(window, name) {
//   return isLocal(getQueryUtils(window).getParameterByName('ReactSource'))
// }

/**
 *
 * @param {string} m
 * @param {string} p
 * @returns {string}
 */
function node(m, p) {
  return 'node_modules/' + m + '/' + p;
}

/**
 * @param {*} versions
 * @param {boolean} local
 * @param {string} m
 * @param {string} p
 * @returns {string}
 */
function unpkgOrNode(versions, local, m, p) {
  var actualLocal = isLocal(versions, local, m);
  return actualLocal ? node(m, p) : unpkg(m, versions[m], p);
}

function isLocal(versions, local, m) {
  return local || versions[m] === 'link';
}

/**
 * @param {*} versions
 * @param {boolean} local
 * @param {string} m
 * @param {string} min
 * @param {string} debug
 * @returns {{min: string, source: string}}
 */
function unpkgOrNodeObj(versions, local, m, min, debug) {
  var actualLocal = isLocal(versions, local, m);
  return actualLocal ? nodeObj(m, min, debug) : unpkgObj(m, versions[m], min, debug);
}

/**
 * @param {string} scriptsLocation
 * @param {boolean} local
 * @param {string} pkg
 * @param {string} v
 * @param {string} p
 * @returns {url}
 */
function vendorOrThirdParty(scriptsLocation, local, pkg, v, p) {
  return local ? jsVendor(pkg, v, p) : third(scriptsLocation, pkg, v, p);
}

/**
 * @param {string} scriptsLocation
 * @param {boolean} local
 * @param {string} pkg
 * @param {string} v
 * @param min
 * @param debug
 * @returns {url}
 */
function vendorOrThirdPartyObj(scriptsLocation, local, pkg, v, min, debug) {
  return local ? jsVendor(pkg, v, min) : thirdObjUrl(scriptsLocation, pkg, v, min, debug);
}

/**
 * @param {string} pkg
 * @param {string} v
 * @param {string} p
 * @returns {url}
 */
function jsVendor(pkg, v, p) {
  return (0, _joinURL2.default)('js/third-party-modules', pkg, v, p);
}

/**
 * @param {string} m
 * @param {string} min
 * @param {string} debug
 * @returns {{min: string, source: string}}
 */
function nodeObj(m, min, debug) {
  return { min: node(m, min), source: node(m, debug) };
}

function mergeInto(dst, src) {
  Object.keys(src).forEach(function (k) {
    dst[k] = dst[k] || src[k];
  });
}

exports.unpkgOrNode = unpkgOrNode;
exports.unpkgOrNodeObj = unpkgOrNodeObj;
exports.vendorOrThirdParty = vendorOrThirdParty;
exports.vendorOrThirdPartyObj = vendorOrThirdPartyObj;
exports.unpkg = unpkg;
exports.unpkgObj = unpkgObj;
exports.thirdObjUrl = thirdObjUrl;
exports.third = third;
exports.node = node;
exports.nodeObj = nodeObj;
exports.mergeInto = mergeInto;
//# sourceMappingURL=rjs-config-utils.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/common/storageUtil.js":
/*!*****************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/common/storageUtil.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (window) {
  function isAvailable(name) {
    try {
      var unique = 'testStorage' + Date.now();
      var st = window[name];
      st.setItem(unique, unique);
      var value = st.getItem(unique);
      st.removeItem(unique);
      if (value !== unique) {
        throw 'not equal'; //eslint-disable-line no-throw-literal
      }
    } catch (e) {
      return false;
    }
    return true;
  }

  var storage = void 0;
  if (isAvailable('localStorage')) {
    storage = window.localStorage;
  } else if (isAvailable('sessionStorage')) {
    storage = window.sessionStorage;
  } else {
    storage = {
      setItem: function setItem() {},
      getItem: function getItem() {},
      removeItem: function removeItem() {}
    };
  }

  return {
    save: function save(key, value) {
      storage.setItem(key, value);
    },
    load: function load(key) {
      return storage.getItem(key);
    },
    remove: function remove(key) {
      storage.removeItem(key);
    }
  };
};
//# sourceMappingURL=storageUtil.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/convertSiteModel.js":
/*!**********************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/convertSiteModel.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (scope, sendErrorOrQueue) {
  return function convertSiteModel(rendererModel, publicModel) {
    function getPagesDataFromSiteAsJson(siteJson) {
      var initialPagesData = {
        masterPage: siteJson.masterPage
      };

      return siteJson.pages.reduce(function (accum, val) {
        accum[val.structure.id] = val;
        return accum;
      }, initialPagesData);
    }

    var siteModel = {
      publicModel: publicModel,
      urlFormatModel: rendererModel.urlFormatModel,
      routers: rendererModel.routers,
      serviceTopology: scope.serviceTopology,
      santaBase: scope.santaBase,
      configUrls: scope.configUrls,
      rendererModel: rendererModel,
      componentGlobals: scope.componentGlobals,
      serverAndClientRender: scope.serverAndClientRender,
      adData: scope.adData,
      mobileAdData: scope.mobileAdData,
      googleAnalytics: scope.googleAnalytics,
      ipAnonymization: scope.ipAnonymization,
      googleTagManager: scope.googleTagManager,
      googleRemarketing: scope.googleRemarketing,
      facebookRemarketing: scope.facebookRemarketing,
      yandexMetrika: scope.yandexMetrika,
      wixData: scope.wixData,
      wixapps: scope.wixapps || getDefaultWixappsModel(),
      wixBiSession: scope.wixBiSession,
      pagesData: scope.pagesData,
      svgShapes: scope.svgShapes,
      contactforms_metadata: {},
      renderFlags: {},
      messageBuffer: [],
      messageHandler: function messageHandler(event) {
        return siteModel.messageBuffer.push(event);
      },
      tpasRenderedInSsr: []
    };
    siteModel.siteHeader = { id: siteModel.rendererModel.siteId, userId: siteModel.rendererModel.userId // required
    };siteModel.siteId = siteModel.rendererModel.siteId; // required
    siteModel.viewMode = siteModel.rendererModel.previewMode ? 'preview' : 'site'; // required
    if (scope.siteAsJson) {
      movePageDataToMaster(scope.siteAsJson, sendErrorOrQueue);
      siteModel.pagesData = getPagesDataFromSiteAsJson(scope.siteAsJson);
    }
    var pagesPlatformApplications = getPagesPlatformApplications(siteModel);
    if (pagesPlatformApplications) {
      siteModel.pagesPlatformApplications = pagesPlatformApplications;
    }
    if (scope.documentServicesModel) {
      siteModel.documentServicesModel = scope.documentServicesModel;
    }
    return siteModel;
  };
};

function getDefaultWixappsModel() {
  return { appbuilder: { metadata: { appbuilder_metadata: { requestedPartNames: [] } } } };
}

function getWixCodeAppDefId(clientSpecMap) {
  for (var spec in clientSpecMap) {
    if (clientSpecMap[spec].type === 'siteextension') {
      return clientSpecMap[spec].appDefinitionId.toString();
    }
  }
}

function hasAppWithAppDefId(clientSpecMap, appDefId) {
  for (var appId in clientSpecMap) {
    if (clientSpecMap.hasOwnProperty(appId) && clientSpecMap[appId].appDefinitionId === appDefId) {
      return true;
    }
  }
  return false;
}

function isGuid(appId) {
  var guidRegex = /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
  return guidRegex.test(appId);
}

//compare appDefId with current and legacy wix code app def ids - needed for old automation site
function isLegacyWixCodeAppDefId(siteModel, appDefId) {
  return isGuid(appDefId) && !hasAppWithAppDefId(siteModel.rendererModel.clientSpecMap, appDefId);
}

function getPagesPlatformApplications(siteModel) {
  var wixCodeAppDefId = getWixCodeAppDefId(siteModel.rendererModel.clientSpecMap);
  var pagesPlatformApplications = siteModel.rendererModel.pagesPlatformApplications;
  var result = {};

  var _loop = function _loop(pageId) {
    if (pagesPlatformApplications.hasOwnProperty(pageId)) {
      pagesPlatformApplications[pageId].forEach(function (appDefId) {
        if (appDefId === wixCodeAppDefId || isLegacyWixCodeAppDefId(siteModel, appDefId)) {
          appDefId = 'wixCode';
        }
        result[appDefId] = result[appDefId] || {};
        result[appDefId][pageId] = true;
      });
    }
  };

  for (var pageId in pagesPlatformApplications) {
    _loop(pageId);
  }

  return result;
}

function movePageDataToMaster(siteAsJson, sendErrorOrQueue) {
  var masterData = siteAsJson.masterPage.data.document_data;

  function move(ref, to, from) {
    if (!get(from, ref)) {
      return;
    }

    if (!get(to, ref)) {
      set(to, ref, get(from, ref));
    }
    remove(from, ref);
  }

  function get(parentData, ref) {
    return ref && parentData[ref.replace('#', '')];
  }

  function set(parentData, ref, dataToSet) {
    if (ref) {
      parentData[ref.replace('#', '')] = dataToSet;
    }
  }

  function remove(parentData, ref) {
    if (ref) {
      delete parentData[ref.replace('#', '')];
    }
  }

  function moveMediaRef(masterPageDocumentData, pageData, mediaRef) {
    // Image or WixVideo
    var media = get(pageData, mediaRef);
    move(mediaRef, masterPageDocumentData, pageData);
    // Image
    move(media.posterImageRef, masterPageDocumentData, pageData);
  }

  siteAsJson.pages.forEach(function (page) {
    if (!page.structure) {
      return;
    }

    var pageData = page.data.document_data;
    var pageId = page.structure.id;
    var desktopBg = void 0;
    var mobileBg = void 0;

    // Pages or AppPages
    var pageItem = get(pageData, pageId);
    move(pageId, masterData, pageData);

    if (pageItem && pageItem.pageBackgrounds && pageItem.pageBackgrounds.desktop.ref) {
      // BackgroundImage or BackgroundMedia
      desktopBg = get(pageData, pageItem.pageBackgrounds.desktop.ref);
      mobileBg = get(pageData, pageItem.pageBackgrounds.mobile.ref);
      move(pageItem.pageBackgrounds.desktop.ref, masterData, pageData);
      move(pageItem.pageBackgrounds.mobile.ref, masterData, pageData);

      // const wixBiSession = window.wixBiSession || {} TODO: Indeed unused?

      //BackgroundMedia
      if (desktopBg) {
        if (desktopBg.mediaRef) {
          moveMediaRef(masterData, pageData, desktopBg.mediaRef);
        }
        //Image
        move(desktopBg.imageOverlay, masterData, pageData);
      } else {
        sendErrorOrQueue({
          errorName: 'MISSING_DESKTOP_BACKGROUND_ITEM',
          errorCode: 112001,
          severity: 30
        }, pageItem.id);
      }

      if (mobileBg) {
        if (mobileBg.mediaRef) {
          moveMediaRef(masterData, pageData, mobileBg.mediaRef);
        }
        //Image
        move(mobileBg.imageOverlay, masterData, pageData);
      } else {
        sendErrorOrQueue({
          errorName: 'MISSING_MOBILE_BACKGROUND_ITEM',
          errorCode: 112002,
          severity: 30
        }, pageItem.id);
      }
    }
  });
}
//# sourceMappingURL=convertSiteModel.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/experiment.js":
/*!****************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/experiment.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function experiment(window) {
  var getRunningExperiments = function getRunningExperiments() {
    var rendererModel = window.rendererModel;

    if (rendererModel) {
      return rendererModel.runningExperiments;
    }
    var editorModel = window.editorModel;

    if (editorModel) {
      return editorModel.runningExperiments;
    }
  };

  var transformRunningExperiments = function transformRunningExperiments(runningExperiments) {
    return Object.keys(runningExperiments).reduce(function (acc, key) {
      acc[key.toLowerCase()] = runningExperiments[key];
      return acc;
    }, {});
  };

  var rawRunningExperiments = void 0;
  var transformedRunningExperiments = void 0;

  function getValue(name) {
    var runningExperiments = getRunningExperiments();
    if (rawRunningExperiments !== runningExperiments) {
      rawRunningExperiments = runningExperiments;
      transformedRunningExperiments = transformRunningExperiments(runningExperiments);
    }
    return transformedRunningExperiments[name.toLowerCase()];
  }

  var isOpen = function isOpen(name) {
    return isMultiValueExperimentOpen(name);
  };

  function isMultiValueExperimentOpen(name) {
    var value = getValue(name);
    return value && value !== 'old' && value !== 'false';
  }

  return {
    getRunningExperiments: getRunningExperiments,
    isOpen: isOpen,
    getValue: getValue,
    isMultiValueExperimentOpen: isMultiValueExperimentOpen
  };
}

function defineExperiment(window) {
  if (window.define) {
    window.define('experiment', [], function () {
      return experiment(window);
    });
  }
}

exports.experiment = experiment;
exports.defineExperiment = defineExperiment;
//# sourceMappingURL=experiment.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/get-rjs-config.js":
/*!********************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/get-rjs-config.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getViewerRjsConfig;

var _rjsConfigUtils = __webpack_require__(/*! ../common/rjs-config-utils */ "./node_modules/santa-main-r/lib/lib/common/rjs-config-utils.js");

var _appsPath = __webpack_require__(/*! ../common/appsPath */ "./node_modules/santa-main-r/lib/lib/common/appsPath.js");

var _joinURL = __webpack_require__(/*! ../common/joinURL */ "./node_modules/santa-main-r/lib/lib/common/joinURL.js");

var _joinURL2 = _interopRequireDefault(_joinURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaults = {
  'santa-core-utils': '1.307.0',
  'santa-skin-utils': '1.1.0',
  'image-client-api': '1.40.0',
  imageClientLib: '1.40.0',
  zepto: '1.2.0',
  xss: '0.2.12',
  'create-react-class': '15.6.2',
  'react-dom-factories': '1.0.2',
  'prop-types': '15.6.0',
  lodash: '4.7.0',
  react: '15.5.4',
  'react-dom': '15.5.4',
  'pm-rpc': '1.0.7',
  hammerjs: '2.0.8',
  // jsVendor: {
  mobx: '3.3.3',
  'mobx-react': '4.2.2',
  tweenmax: '1.19.0',
  'fedops-logger': '3.0.5'

  /**
   * @param {Object.<string, string>} versions
   * @param {*} serviceTopology
   * @param {boolean} local
   * @param {Object.<string, *>} clientSpecMap
   * @returns {*}
   */
};function getViewerRjsConfig(versions, serviceTopology, local, appsConfig) {
  var scriptsLocation = serviceTopology.scriptsDomainUrl;
  var platformSdkRoot = serviceTopology.scriptsLocationMap['js-platform-editor-sdk'];

  var platformAppConfigurationUrl = serviceTopology && serviceTopology.scriptsLocationMap['js-platform-apps-configuration'] || 'https://static.parastorage.com/services/js-platform-apps-configuration/1.7.0';
  var promoteAnalyticsAdapterUrl = serviceTopology && serviceTopology.scriptsLocationMap['promote-analytics-adapter'];

  (0, _rjsConfigUtils.mergeInto)(versions, defaults);

  /**
   *  @type {function(pkg:string, path:string)}
   */
  var _unpkg = _rjsConfigUtils.unpkgOrNode.bind(null, versions, local);
  /**
   *  @type {function(pkg:string, min:string, debug:string)}
   */
  var _unpkgObj = _rjsConfigUtils.unpkgOrNodeObj.bind(null, versions, local);
  /**
   * @type {function(pkg:string, version:string, min:string)}
   */
  var _thirdParty = _rjsConfigUtils.vendorOrThirdParty.bind(null, scriptsLocation, local);
  /**
   * @type {function(pkg:string, version:string, min:string, debug:string)}
   */
  var _thirdObj = _rjsConfigUtils.vendorOrThirdPartyObj.bind(null, scriptsLocation, local);

  var promoteAnalyticsAdapterPath = local ? (0, _rjsConfigUtils.node)('promote-analytics-adapter', 'dist/statics/analytics-event-adapter.bundle.min') : (0, _joinURL2.default)(promoteAnalyticsAdapterUrl, 'analytics-event-adapter.bundle.min');

  var paths = {
    // -------------- RUNTIME --------------------------------------------------------------
    wixImmutable: _unpkg('santa-core-utils', 'dist/wixImmutable'),
    lodash: _unpkg('lodash', 'lodash.min'),

    vendor: _unpkgObj('santa-bundle', 'dist/bundle.min', 'dist/bundle'),

    react: _unpkgObj('react', 'umd/react.production.min', 'umd/react.development'),
    reactDOM: _unpkgObj('react-dom', 'umd/react-dom.production.min', 'umd/react-dom.development'),
    reactDOMServer: _unpkgObj('react-dom', 'umd/react-dom-server.browser.production.min', 'umd/react-dom-server.browser.development'),
    reactTestUtils: _unpkg('react-dom', 'umd/react-dom-test-utils.development'),
    'prop-types': _unpkgObj('prop-types', 'prop-types.min', 'prop-types'),
    'create-react-class': _unpkgObj('create-react-class', 'create-react-class.min', 'create-react-class'),
    'react-dom-factories': _unpkg('react-dom-factories', 'index'),
    mobx: (0, _rjsConfigUtils.nodeObj)('mobx', 'lib/mobx.umd.min', 'lib/mobx.umd'),
    'mobx-react': _unpkgObj('mobx-react', 'index.min', 'index'),

    zepto: _unpkgObj('zepto', 'dist/zepto.min', 'dist/zepto'),
    speakingurl: _thirdParty('speakingurl', '', 'speakingurl.min'),
    immutable: _thirdObj('immutable', '3.7.5', 'dist/immutable.min', 'dist/immutable'),
    TweenMax: _thirdObj('tweenmax', versions.tweenmax, 'minified/TweenMax.min', 'uncompressed/TweenMax'), //bundle
    TweenLite: _thirdObj('tweenmax', versions.tweenmax, 'minified/TweenMax.min', 'uncompressed/TweenMax'),
    TimelineMax: _thirdObj('tweenmax', versions.tweenmax, 'minified/TweenMax.min', 'uncompressed/TweenMax'),
    ScrollToPlugin: _thirdObj('tweenmax', versions.tweenmax, 'minified/plugins/ScrollToPlugin.min', 'uncompressed/plugins/ScrollToPlugin'), //bundle
    DrawSVGPlugin: _thirdObj('tweenmax', versions.tweenmax, 'minified/plugins/DrawSVGPlugin.min', 'uncompressed/plugins/DrawSVGPlugin'),
    MorphSVGPlugin: _thirdObj('tweenmax', versions.tweenmax, 'minified/plugins/MorphSVGPlugin.min', 'uncompressed/plugins/MorphSVGPlugin'),
    Draggable: _thirdObj('tweenmax', versions.tweenmax, 'minified/utils/Draggable.min', 'uncompressed/utils/Draggable'),
    color: _thirdParty('color-convert', '0.2.0', 'color.min'),
    'date-fns': _thirdObj('date-fns', 'v1.3.0', 'date_fns.min', 'date_fns'),
    ajv: _thirdObj('ajv', '4.8.1', 'ajv.min', 'ajv.bundle'),
    jsonpatch: 'js/vendor/json-patch/json-patch.umd',
    xss: _unpkg('xss', 'dist/xss.min'), //shim
    immutableDiff: 'js/vendor/immutablejsdiff.min',
    pmrpc: _unpkg('pm-rpc', 'build/pm-rpc.min'),
    'ag-grid': _thirdObj('ag-grid', '6.2.1', 'dist/ag-grid.min', 'dist/ag-grid'),

    SoundManager: _thirdParty('soundmanager2', 'V2.97a.20150601', 'soundmanager2-nodebug-jsmin'),
    hammer: _unpkg('hammerjs', 'hammer.min'),
    mousetrap: _thirdParty('mousetrap', '1.4.6', 'mousetrap.min'),
    swfobject: _thirdParty('swfobject', '2.3.20130521', 'swfobject.min'),
    remoteDOM: _unpkg('@shimil/remote-dom', 'dist/local.min'),
    'fedops-logger': _unpkg('fedops-logger', 'dist/statics/fedops-logger-module.bundle.min'),

    // ------------- internal -------------------------------------------------------------------
    platformEvents: _unpkgObj('platform-editor-sdk', 'lib/platformEvents.min', 'lib/platformEvents'),
    platformUtils: _unpkg('santa-platform-utils', 'dist/platformUtils-bundle'),
    mobileCore: _unpkg('santa-mobile-core', 'dist/mobileCore'),
    'santa-components': _unpkgObj('santa-components', 'dist/santa-components.prod', 'dist/santa-components.devel'),
    'santa-components/popover': _unpkgObj('santa-components', 'dist/santa-component-popover.prod', 'dist/santa-component-popover.devel'),
    'santa-renderer': _unpkg('santa-renderer', 'dist/santa-renderer'),
    mobileLayoutUtils: _unpkg('santa-mobile-core', 'dist/mobileLayoutUtils'),
    'mesh-migrator': _unpkg('mesh-migrator', 'dist/mesh-migrator'),
    skinUtils: _unpkg('santa-skin-utils', 'dist/skin-utils'),
    coreUtilsLib: _unpkg('santa-core-utils', 'dist/coreUtils'),
    warmupUtilsLib: _unpkg('santa-core-utils', 'dist/warmupUtils'),
    imageClientLib: _unpkg('image-client-api', 'dist/imageClientApi'),
    wixDomSanitizer: _unpkg('wix-dom-sanitizer', 'dist/wix-dom-sanitizer'),
    'santa-data-fixer': _unpkg('santa-data-fixer', 'dist/santa-data-fixer'),
    'host-platform-api': _unpkg('santa-host-platform-services', 'dist/host-platform-api'),
    'host-worker-init': _unpkg('santa-host-platform-services', 'dist/host-worker-init'),
    wixFullstoryLoader: _unpkg('wix-fullstory-loader', 'dist/statics/app.bundle'),
    'data-capsule': _unpkg('data-capsule', 'dist/statics/frame-listener.bundle.min'),
    coreMultilingual: _unpkg('santa-multilingual', 'dist/languages'),
    'hls-light': _unpkg('hls.js', 'dist/hls.light.min'), //lazy
    hls: _unpkg('hls.js', 'dist/hls.min'), //lazy
    'promote-analytics-adapter': promoteAnalyticsAdapterPath,
    'js-platform-apps-configuration-editor': (0, _joinURL2.default)(platformAppConfigurationUrl, 'platform-apps-editor.min'),
    wixUiRichTextArea: _unpkg('wix-ui-santa', 'dist/statics/RichTextArea.bundle.min'),
    wixUiRichTextBox: _unpkg('wix-ui-santa', 'dist/statics/RichTextBox.bundle.min'),
    wixUiToggleSwitch: _unpkg('wix-ui-santa', 'dist/statics/ToggleSwitch.bundle.min'),
    wixUiTimePicker: _unpkg('wix-ui-santa', 'dist/statics/TimePicker.bundle.min'),
    wixUiVideoPlayer: _unpkg('wix-ui-santa', 'dist/statics/VideoPlayer.bundle.min'),
    wixUiPagination: _unpkg('wix-ui-santa', 'dist/statics/Pagination.bundle.min'),
    wixUiRating: _unpkg('wix-ui-santa', 'dist/statics/Rating.bundle.min'),
    wixUiSlider: _unpkg('wix-ui-santa', 'dist/statics/Slider.bundle.min'),
    wixUiTags: _unpkg('wix-ui-santa', 'dist/statics/Tags.bundle.min'),
    wixUiCompsToPackages: _unpkg('wix-ui-santa', 'dist/statics/compsToPackages.bundle.min'),
    'wix-ui-santa': _unpkg('wix-ui-santa', 'dist/statics'),
    // ------------- TESTING -------------------------------------------------------------------
    fake: 'js/plugins/fake/src/main/fake',
    definition: 'js/plugins/definition/src/main/definition',
    ReactProxy: 'js/vendor/ReactProxy',
    Squire: 'js/vendor/squire/Squire',
    jasmine: _thirdParty('jasmine', '2.1.3', 'jasmine'),
    'jasmine-html': _thirdParty('jasmine', '2.1.3', 'jasmine-html'),
    'jasmine-boot': _thirdParty('jasmine', '2.1.3', 'jasmine-boot'),
    // ------------- DEVELOPMENT ---------------------------------------------------------------
    io: 'https://cdnjs.cloudflare.com/ajax/libs/socket.io/1.4.0/socket.io.min',
    patcher: (0, _rjsConfigUtils.node)('santa-utils', 'common/hot/patcher'),
    hot: (0, _rjsConfigUtils.node)('santa-utils', 'common/hot/listener')
  };

  var appsPath = (0, _appsPath.nativeAppsPathBuilder)(appsConfig, scriptsLocation);
  (0, _rjsConfigUtils.mergeInto)(paths, appsPath);

  if (platformSdkRoot) {
    paths.platformAPI = { min: (0, _joinURL2.default)(platformSdkRoot, 'lib', 'platform-api.min'), source: (0, _joinURL2.default)(platformSdkRoot, 'lib', 'platform-api') };
  }

  var wixCodePlatformBaseUrl = serviceTopology.scriptsLocationMap['wix-code-platform'];
  if (wixCodePlatformBaseUrl) {
    var getPathToWixCodePlatformFile = function getPathToWixCodePlatformFile(filename) {
      return local ? (0, _rjsConfigUtils.node)('wix-code-platform', 'dist/' + filename) : (0, _joinURL2.default)(wixCodePlatformBaseUrl, filename);
    };
    paths['elementory-browser-support'] = getPathToWixCodePlatformFile('elementory-browser-support.min');
    paths['wix-data-schemas-creator'] = {
      min: getPathToWixCodePlatformFile('wix-data-schemas-creator.min'),
      source: getPathToWixCodePlatformFile('wix-data-schemas-creator')
    };
  }

  return {
    //By default load any module IDs from js/lib
    baseUrl: '/',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: paths,
    bundles: {
      vendor: ['prop-types', 'create-react-class', 'mobx']
    },
    map: {
      'mobx-react': {
        'react-dom': 'reactDOM'
      },
      reactTestUtils: {
        'react-dom': 'reactDOM'
      }
    },
    shim: {
      color: { exports: 'Color' },
      'jasmine-html': {
        deps: ['jasmine']
      },
      'jasmine-boot': {
        deps: ['jasmine', 'jasmine-html']
      },
      SoundManager: { exports: 'soundManager' },
      ReactProxy: {
        deps: ['react'],
        exports: 'ReactProxy'
      },
      jsonpatch: { exports: 'jsonpatch' },
      xss: { exports: 'filterXSS' }
    },
    waitSeconds: 0
  };
}
//# sourceMappingURL=get-rjs-config.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/instruments.js":
/*!*****************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/instruments.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (window, requirejs, isBot, isSuspectedBot, prefetch, experiment) {
  var TIMED_BEAT_DELAY = 500;

  var _window$location = window.location,
      location = _window$location === undefined ? {} : _window$location,
      _window$performance = window.performance,
      performance = _window$performance === undefined ? {} : _window$performance,
      XMLHttpRequest = window.XMLHttpRequest;
  var _location$href = location.href,
      href = _location$href === undefined ? '' : _location$href;


  var VIEWER_BI = {
    ENDPOINT: 'ugc-viewer',
    SRC: 42
  };
  var PERF_EVID = 351;
  var BOT_EVID = 361;
  var UNLOAD_EVID = 323;
  var KEEP_ALIVE = {
    EVID: 329,
    RATIO: 10,
    INTERVAL: 5 * 1000,
    LONG_LIMIT: 60,
    SHORT_LIMIT: 6
  };

  var delayedErrors = [];
  function sendErrorOrQueue() {
    var wixBiSession = window.wixBiSession;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (wixBiSession && wixBiSession.sendError) {
      wixBiSession.sendError.apply(wixBiSession, args);
    } else {
      delayedErrors.push(args);
    }
  }

  function instrument(serviceTopology, wixBiSession, queryUtil, siteModel, pageInfo, isPremium, isServerSide) {
    //eslint-disable-line complexity,max-statements
    wixBiSession.pn = 1;
    wixBiSession.initialTimestamp = wixBiSession.initialTimestamp || wixBiSession.mainLoaded;
    wixBiSession.random = Math.random();

    var sampleRatioState = queryUtil.getParameterByName('sampleratio');
    var rendererModel = siteModel.rendererModel || window.rendererModel;
    var siteInfo = rendererModel.siteInfo;

    var base = (serviceTopology.biServerUrl || 'http://frog.wix.com').replace(/\/$/, '');

    var recordEt = performance.mark ? function (et) {
      wixBiSession.et = et;
      switch (et) {
        case 4:
          performance.mark('main-r executed (beat 4)');
          break;
        case 5:
          performance.mark('utils loaded (beat 5)');
          break;
        default:
          performance.mark('beat ' + et);
      }
    } : function (et) {
      wixBiSession.et = et;
    };
    wixBiSession.beat = recordEt;

    var param = function param(name, value) {
      return name + '=' + value;
    };
    var params = function params(pairs) {
      var p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : param;
      return Object.keys(pairs).map(function (value) {
        return p(value, pairs[value]);
      }).join('&');
    };

    var biBool = function biBool(bool) {
      return Number(Boolean(bool));
    };

    function prepareMessage(evid, src, _ref) {
      var _ref$omit = _ref.omit,
          omit = _ref$omit === undefined ? {} : _ref$omit,
          map = _ref.map,
          _ref$pairs = _ref.pairs,
          pairs = _ref$pairs === undefined ? {} : _ref$pairs;

      pairs.evid = evid;
      pairs.src = src;

      if (!omit.pn) {
        pairs.pn = 1;
      }
      if (!omit.isp) {
        pairs.isp = biBool(isPremium);
      }
      if (!omit.url) {
        var url = href.replace(/^[^:]+:\/\/(www\.)?/i, '');
        pairs.url = encodeURIComponent(url.substring(0, 256));
      }

      if (!omit.v) {
        pairs.v = siteModel.baseVersion || 'unknown';
      }
      if (!omit.majorVer) {
        pairs.majorVer = window.clientSideRender ? 3 : 4;
      }
      if (!omit.ver && window.santaBase) {
        var sourceMatches = window.santaBase.match(/([\d\.]+)\/?$/);
        pairs.ver = sourceMatches && sourceMatches[1] || '';
      }

      if (!omit.dc && serviceTopology) {
        var serverName = serviceTopology.serverName;
        if (typeof serverName === 'string') {
          var parts = serverName.split('.');
          if (parts.length > 1) {
            pairs.dc = parts[1];
          }
        }
      }

      if (siteInfo && siteInfo.siteId) {
        pairs.sid = siteInfo.siteId;
      }
      if (rendererModel.metaSiteId) {
        pairs.msid = rendererModel.metaSiteId;
      }

      var siteHeader = siteModel.siteHeader || window.siteHeader;
      if (!omit.uuid && siteHeader && siteHeader.userId) {
        pairs.uuid = siteHeader.userId;
      }
      var publicModel = siteModel.publicModel;

      if (!omit.tsp && publicModel && publicModel.timeSincePublish) {
        pairs.tsp = publicModel.timeSincePublish;
      }
      if (wixBiSession.viewerSessionId) {
        pairs.vsi = wixBiSession.viewerSessionId;
      }

      if (!omit.ts && wixBiSession.initialTimestamp) {
        pairs.ts = Date.now() - wixBiSession.initialTimestamp;
      }

      var _param = map ? function (name, value) {
        return param(map[name] || name, value);
      } : param;
      return params(pairs, _param);
    }

    var navigator = window.navigator,
        Image = window.Image,
        document = window.document;

    wixBiSession.sendBeacon = isBot && experiment.isOpen('ajaxForBI') ? function (url) {
      var r = new XMLHttpRequest();
      r.open('GET', url, true);
      r.send();
    } : function (url, useBeacon) {
      var sent = false;
      if (useBeacon && !isBot) {
        try {
          sent = navigator.sendBeacon(url);
        } catch (e) {
          /*Comment for Lint*/
        }
      }
      if (!sent) {
        new Image().src = url;
      }
    };

    function sendBI(endpoint, evid, code) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      var src = base + '/' + endpoint + '?c=' + Date.now() + '&';
      src += prepareMessage(evid, code, options);
      if (options.extra) {
        src += options.extra;
      }
      wixBiSession.sendBeacon(src, true);
    }

    wixBiSession.sendBI = function (endpoint, evid, code, extra, sampleRatio) {
      if (!sampleRatio || Math.floor(wixBiSession.random * sampleRatio) === 0) {
        sendBI(endpoint, evid, code, {
          omit: {
            pn: true,
            isp: true,
            ts: true,
            url: true,
            v: true,
            ver: true
          },
          map: {
            sid: 'did',
            dc: 'server',
            uuid: 'uid'
          },
          pairs: extra
        });
      }
    };

    var MAX_LIMIT = 4;

    var sendError = function sendError(name, errc) {
      for (var _len2 = arguments.length, args = Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
        args[_key2 - 3] = arguments[_key2];
      }

      var sev = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 40;
      // eslint-disable-line func-style
      var visitor_id = wixBiSession.viewerSessionId;

      var pairs = {
        errn: encodeURIComponent(name),
        errc: errc,
        sev: sev,
        errscp: 'core',
        cat: 2,
        iss: 1,
        et: wixBiSession.et,
        visitor_id: visitor_id
      };

      var total = 0;
      pairs = args.reduce(function (result, arg, index) {
        if (index < MAX_LIMIT) {
          if (total + arg.length > 1024) {
            arg = arg.substring(0, Math.max(1024 - total, 32));
          }
          result['p' + (index + 1)] = encodeURIComponent(arg);
          total += result.length;
        }
        return result;
      }, pairs);

      sendBI('trg', 10, 44, {
        omit: {
          pn: true,
          isp: true,
          tsp: true,
          v: true,
          url: true,
          uuid: true
        },
        map: {
          sid: 'did',
          dc: 'server',
          ts: 'response_time'
        },
        pairs: pairs
      });
    };

    var prepareAndSendError = function prepareAndSendError(err, data) {
      var message = err.message,
          stack = err.stack,
          _err$requireModules = err.requireModules,
          requireModules = _err$requireModules === undefined ? [] : _err$requireModules,
          requireType = err.requireType;
      var errn = data.errn,
          errc = data.errc,
          severity = data.severity;

      var modules = requireModules && requireModules.join ? requireModules.join(';') : '';
      var what = stack ? '' + stack : message;
      sendError(errn, errc, severity, what, modules, href, requireType); // REQUIREJS_ERROR from packages/core/src/main/bi/errors.js
    };

    wixBiSession.sendError = function (err) {
      for (var _len3 = arguments.length, args = Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return sendError.apply(undefined, [err.errorName, err.errorCode, err.severity].concat(args));
    };

    delayedErrors.forEach(function (delayedError) {
      return wixBiSession.sendError.apply(wixBiSession, _toConsumableArray(delayedError));
    });
    delayedErrors = null;

    // Grow performance resource buffer as required
    var isDebug = queryUtil.getParameterByName('debug');
    if (performance.setResourceTimingBufferSize) {
      if ('onresourcetimingbufferfull' in performance) {
        performance.onresourcetimingbufferfull = function () {
          var maxSize = 150;
          return function () {
            maxSize *= 2;
            performance.setResourceTimingBufferSize(maxSize);
          };
        }();
      } else {
        performance.setResourceTimingBufferSize(isDebug ? 1000 : 300);
      }
    }

    var newrelic = window.newrelic;
    if (newrelic) {
      var shortUrl = href.replace(/^[^/]*\/\//, '');
      if (newrelic.setPageViewName) {
        newrelic.setPageViewName(shortUrl);
      }
      if (newrelic.setCustomAttribute) {
        newrelic.setCustomAttribute('url', shortUrl);
        if (siteInfo && siteInfo.siteId) {
          newrelic.setCustomAttribute('sid', siteInfo.siteId);
        }
        if (rendererModel.metaSiteId) {
          newrelic.setCustomAttribute('msid', rendererModel.metaSiteId);
        }

        if (experiment) {
          var runningExperiments = experiment.getRunningExperiments();
          if (runningExperiments) {
            var experiments = Object.keys(runningExperiments).filter(experiment.isMultiValueExperimentOpen).map(function (name) {
              var value = runningExperiments[name];
              return value !== 'new' ? name + '=' + value : name;
            }).join('][');
            if (experiments) {
              newrelic.setCustomAttribute('experiments', '[' + experiments + ']');
            }
          }
        }

        newrelic.setCustomAttribute('preview', biBool(rendererModel.previewMode));
        newrelic.setCustomAttribute('isPremium', isPremium);
        var siteHeader = siteModel.siteHeader || window.siteHeader;
        if (siteHeader && siteHeader.userId) {
          newrelic.setCustomAttribute('uuid', siteHeader.userId);
        }
        var publicModel = siteModel.publicModel;
        if (publicModel && publicModel.timeSincePublish) {
          newrelic.setCustomAttribute('timeSincePublish', publicModel.timeSincePublish);
        }
        if (wixBiSession.viewerSessionId) {
          newrelic.setCustomAttribute('vsi', wixBiSession.viewerSessionId);
        }
        newrelic.setCustomAttribute('debug', biBool(isDebug));
      }
    }

    if (prefetch) {
      wixBiSession.sendBI(VIEWER_BI.ENDPOINT, 384, VIEWER_BI.SRC);
      return;
    }

    if (!wixBiSession.viewerSessionId || rendererModel.previewMode || queryUtil.isParameterTrue('suppressbi')) {
      return;
    }

    if (siteInfo.documentType !== 'Template') {
      (function validityBI() {
        var isTop = void 0;
        try {
          isTop = window.self === window.top;
        } catch (e) {
          isTop = false;
        }
        if (!isTop || isBot || isSuspectedBot) {
          wixBiSession.sendBI(VIEWER_BI.ENDPOINT, BOT_EVID, VIEWER_BI.SRC, {
            top: biBool(isTop),
            bot: biBool(isBot),
            sbot: biBool(isSuspectedBot)
          });
        }
      })();
    }

    if (!window.clientSideRender) {
      var getTS = function getTS() {
        return (performance && performance.timing && performance.timing.domContentLoadedEventStart) - wixBiSession.initialTimestamp;
      }; //eslint-disable-line
      var send = function send() {
        return wixBiSession.sendBI(VIEWER_BI.ENDPOINT, 380, VIEWER_BI.SRC, { phase_name: 'did_load_dom_content', status: 1, ts: getTS(), isBot: !!rendererModel.seo });
      };

      if (document.readyState === 'complete') {
        send();
      } else {
        document.onreadystatechange = function () {
          if (document.readyState === 'complete') {
            send();
          }
        };
      }
    }

    (function performanceBI() {
      var pairs = {};
      var navigation = performance.navigation,
          timing = performance.timing;

      if (timing) {
        var domainLookupStart = timing.domainLookupStart,
            domainLookupEnd = timing.domainLookupEnd,
            redirectStart = timing.redirectStart,
            redirectEnd = timing.redirectEnd,
            connectStart = timing.connectStart,
            connectEnd = timing.connectEnd,
            secureConnectionStart = timing.secureConnectionStart,
            requestStart = timing.requestStart,
            responseStart = timing.responseStart,
            responseEnd = timing.responseEnd;

        var dnsTime = domainLookupEnd - domainLookupStart;
        if (dnsTime >= 0) {
          pairs.dns_time = dnsTime;
        }
        var redirectTime = redirectEnd - redirectStart;
        if (redirectTime >= 0) {
          pairs.redirect_time = redirectTime;
        }
        var connectTime = connectEnd - connectStart;
        if (connectTime >= 0) {
          pairs.connect_time = connectTime;
        }
        if (secureConnectionStart > 0) {
          var sslTime = connectEnd - secureConnectionStart;
          pairs.ssl_time = sslTime;
        }
        var ttfbTime = responseStart - requestStart;
        if (ttfbTime >= 0) {
          pairs.ttfb_time = ttfbTime;
        }
        var responseTime = responseEnd - responseStart;
        if (responseTime >= 0) {
          pairs.response_time = responseTime;
        }
        var loadTime = timing.navigationStart || timing.fetchStart || domainLookupStart || connectStart;
        loadTime = wixBiSession.initialTimestamp - loadTime;
        if (loadTime >= 0) {
          pairs.load_time = loadTime;
        }
        if (pageInfo) {
          pairs.page_id = pageInfo.pageId;
        }
        pairs.is_ssl = biBool(location.protocol === 'https:');
      }
      if (navigation) {
        var redirectCount = navigation.redirectCount,
            type = navigation.type;

        if (type >= 0) {
          pairs.navigation_type = type;
        }
        if (redirectCount >= 0) {
          pairs.redirect_count = redirectCount;
        }
      }
      if (performance.getEntriesByType) {
        var navigationEntry = performance.getEntriesByType('navigation')[0];
        if (navigationEntry) {
          pairs.transferSize = navigationEntry.transferSize;
          pairs.decodedBodySize = navigationEntry.decodedBodySize;
        }
      }

      pairs.is_premium = biBool(isPremium);
      pairs.is_wixsite = biBool(siteInfo.documentType === 'WixSite');
      pairs.is_ssr = biBool(!window.clientSideRender);

      wixBiSession.sendBI(VIEWER_BI.ENDPOINT, PERF_EVID, VIEWER_BI.SRC, pairs);
    })();

    if (isDebug && sampleRatioState !== 'force') {
      return;
    }

    if (!wixBiSession.hasOwnProperty('coin')) {
      wixBiSession.coin = parseInt(wixBiSession.viewerSessionId, 16);
    }

    function genPayload() {
      var et = wixBiSession.et,
          initialTimestamp = wixBiSession.initialTimestamp,
          pn = wixBiSession.pn;

      var payload = {
        isp: biBool(isPremium),
        iss: biBool(isServerSide),
        pn: pn
      };
      if (et) {
        payload.lbt = et;
      }
      if (initialTimestamp) {
        payload.ts = Date.now() - initialTimestamp;
      }
      if (performance.now) {
        payload.tts = Math.round(performance.now());
      }
      return payload;
    }

    if (experiment.isOpen('unloadBI')) {
      window.addEventListener('unload', function () {
        var payload = genPayload();
        if (performance.getEntriesByType) {
          var marks = performance.getEntriesByType('mark');
          var length = marks.length;

          if (length > 0) {
            payload.mark = marks[length - 1].name;
          }
        }
        wixBiSession.sendBI(VIEWER_BI.ENDPOINT, UNLOAD_EVID, VIEWER_BI.SRC, payload);
      }, false);
    }

    var keepAliveRatio = queryUtil.getParameterByName('sampleratio') === 'none' ? 1 : KEEP_ALIVE.RATIO;
    if (experiment.isOpen('sv_keepAlive') && wixBiSession.coin % keepAliveRatio === 0) {
      var keepAliveLimit = KEEP_ALIVE.LONG_LIMIT;
      var did_finish = false;
      var counter = 0;
      var reportAliveInterval = setInterval(function () {
        if ((wixBiSession.pn > 1 || wixBiSession.et === 3) && !did_finish) {
          did_finish = true;
          keepAliveLimit = Math.min(counter + KEEP_ALIVE.SHORT_LIMIT, KEEP_ALIVE.LONG_LIMIT);
        }
        if (++counter > keepAliveLimit) {
          clearInterval(reportAliveInterval);
          return;
        }
        var payload = genPayload();
        payload.counter = counter;
        payload.did_finish = did_finish;
        wixBiSession.sendBI(VIEWER_BI.ENDPOINT, KEEP_ALIVE.EVID, VIEWER_BI.SRC, payload);
      }, KEEP_ALIVE.INTERVAL);
    }

    var siteType = function () {
      var BEAT_SITE_TYPES = ['No Site Type', 'WixSite', 'UGC', 'Template'];
      var documentType = siteInfo.documentType;
      var st = BEAT_SITE_TYPES.indexOf(documentType);
      return st !== -1 ? st : documentType;
    }();

    var alwaysVisible = document.hidden !== true;
    //eslint-disable-next-line no-extra-parens
    wixBiSession.checkVisibility = function () {
      return alwaysVisible = alwaysVisible && document.hidden !== true;
    };
    document.addEventListener('visibilitychange', wixBiSession.checkVisibility, false);

    wixBiSession.maybeBot = isBot || isSuspectedBot;
    wixBiSession.beat = function (et) {
      var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref2$record = _ref2.record,
          record = _ref2$record === undefined ? true : _ref2$record;

      if (record) {
        recordEt(et);
      }
      var pairs = {
        isjp: biBool(wixBiSession.maybeBot),
        et: et,
        st: siteType,
        ita: biBool(wixBiSession.checkVisibility())
      };
      if (performance.now) {
        pairs.tts = Math.round(performance.now());
      }
      sendBI('bt', 3, 29, {
        omit: {
          majorVer: true,
          tsp: true,
          ver: true
        },
        pairs: pairs
      });
    };

    var ignoreURLs = [/^chrome(\-extension)?\:/, /^file\:/, /^resource\:/, /\.net\//, /\.info\//, /\.ru\//, /google/, /facebook/, /dropbox/, /ad\-score/, /drivemac/, /shopping/, /datafast/, /shopcomp/, /vimeo/, /olark/];
    function ignoreError(where) {
      where = where.trim();
      if (!where) {
        return true;
      }
      for (var i = 0; i < ignoreURLs.length; ++i) {
        if (ignoreURLs[i].test(where)) {
          return true;
        }
      }
      return false;
    }

    if (!isSuspectedBot) {
      var firstTime = true;

      var onerror = window.onerror;

      window.onerror = function (errorMsg, url, line, column, err) {
        if (firstTime) {
          firstTime = false;
          var where = err && err.stack ? '' + err.stack : url;
          if (!ignoreError(where)) {
            sendError('JAVASCRIPT_ERROR', 111022, 40, errorMsg, where, href); // JAVASCRIPT_ERROR from packages/core/src/main/bi/errors.js
          }
        }
        if (onerror) {
          return onerror.apply(this, arguments);
        }
      };

      if (window.console) {
        var _console = console,
            error = _console.error;

        if (error) {
          console.error = function () {
            var stack = void 0;
            try {
              throw new Error('get stack');
            } catch (e) {
              stack = e.stack;
            }

            for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }

            sendError.apply(undefined, ['CONSOLE_ERROR', 111023, 30, stack, href].concat(args)); // CONSOLE_ERROR from packages/core/src/main/bi/errors.js
            error.apply(this, args);
            console.error = error;
          };
        }
      }

      requirejs.onError = function (err) {
        if (!firstTime) {
          return;
        }
        firstTime = false;

        if (experiment.isOpen('sv_requireSplitError')) {
          if (err.requireType !== 'define') {
            prepareAndSendError(err, {
              errc: 111027,
              errn: 'REQUIREJS_FILE_DOWNLOAD_ERROR',
              severity: 40
            });
          } else {
            prepareAndSendError(err, {
              errc: 111028,
              errn: 'REQUIREJS_SCRIPT_ERROR',
              severity: 40
            });
          }
        }
        prepareAndSendError(err, {
          errc: 111024,
          errn: 'REQUIREJS_ERROR',
          severity: 40
        });
      };
    }

    if (experiment.isOpen('timedBeat')) {
      var noRecord = {
        record: false
      };
      setTimeout(function () {
        wixBiSession.beat(9, noRecord);
        setTimeout(function () {
          wixBiSession.beat(10, noRecord);
          setTimeout(function () {
            wixBiSession.beat(11, noRecord);
          }, TIMED_BEAT_DELAY);
        }, TIMED_BEAT_DELAY);
      }, TIMED_BEAT_DELAY);
    }
  }

  return {
    sendErrorOrQueue: sendErrorOrQueue,
    instrument: instrument
  };
};

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//# sourceMappingURL=instruments.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/miniPackages.js":
/*!******************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/miniPackages.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = miniPackages;
function miniPackages(window, requirejs, isServerSide) {
  var _window$location = window.location;
  _window$location = _window$location === undefined ? {} : _window$location;
  var hostname = _window$location.hostname;

  // Prefetch font CSS files
  // By marking them as media="none" their download is made non-blocking
  // (At least for WebKit / Blink browsers)
  // (WixThemeReact may remove this attribute)

  if (!isServerSide && hostname !== 'localhost') {
    requirejs(['lodash', 'utils'], function (_, utils) {
      function enableLink() {
        this.removeAttribute('media');
      }

      var document = window.document,
          documentType = window.rendererModel.siteInfo.documentType,
          serviceTopology = window.serviceTopology;

      var cssUrls = utils.fonts.fontUtils.getCssUrls(documentType, serviceTopology);
      _.forEach(cssUrls, function (url, id) {
        var link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', url);
        link.setAttribute('media', 'none');
        link.setAttribute('id', 'font_' + id);
        link.addEventListener('load', enableLink, false);
        document.head.appendChild(link);
      });
    });
  }
}
//# sourceMappingURL=miniPackages.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/mobile.js":
/*!************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/mobile.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function isMobileDevice(window) {
  var userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera;
  var patternByDevice = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
  var patternByModel = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i; // eslint-disable-line max-len
  return patternByDevice.test(userAgent) || patternByModel.test(userAgent.substr(0, 4));
}

function isMobileView(window, siteModel, queryUtil) {
  return queryUtil.isParameterTrue('showmobileview') || // eslint-disable-line no-extra-parens
  isMobileDevice(window) && siteModel.rendererModel.siteMetaData && siteModel.rendererModel.siteMetaData.adaptiveMobileOn;
}

exports.default = { isMobileDevice: isMobileDevice, isMobileView: isMobileView };
//# sourceMappingURL=mobile.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/render.js":
/*!************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/render.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (window, requirejs, prefetch, isBot, experiment) {
  var _window$performance = window.performance,
      performance = _window$performance === undefined ? {} : _window$performance;

  if (!performance.measure) {
    performance = {
      mark: function mark() {},
      measure: function measure() {}
    };
  }

  if (prefetch && window.define) {
    var dummy = function dummy() {
      return {};
    };
    var define = window.define;
    window.define = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      for (var i = 0; i < args.length; ++i) {
        if (typeof args[i] === 'function') {
          args[i] = dummy;
        }
      }
      return define.apply(this, args);
    };
    window.define.amd = define.amd;
    var rjs = requirejs;
    window.requirejs = requirejs = function requirejs(dependencies) {
      return rjs.call(this, dependencies, dummy);
    };
  }

  function notifyParent(msg) {
    try {
      window.parent.postMessage(msg, '*');
    } catch (e) {
      //ignore
    }
  }

  notifyParent('santaStart');

  function render(_ref) {
    var isServerSide = _ref.isServerSide,
        isPreview = _ref.isPreview,
        isExternalPreview = _ref.isExternalPreview,
        _ref$prefetcher = _ref.prefetcher,
        contentCache = _ref$prefetcher.contentCache,
        setContext = _ref$prefetcher.setContext,
        queryUtil = _ref.queryUtil,
        siteModel = _ref.siteModel,
        wixBiSession = _ref.wixBiSession,
        mobileView = _ref.mobileView,
        config = _ref.config;

    var useDS = queryUtil.isParameterTrue('ds');
    var isQaAutomation = queryUtil.isParameterTrue('isqa');
    var isTpaIntegration = queryUtil.isParameterTrue('isTpaIntegration');
    var isWixCodeIntegration = queryUtil.isParameterTrue('isWixCodeIntegration');
    var isViewerIntegration = queryUtil.isParameterTrue('isViewerIntegration');
    siteModel.requestModel = {
      userAgent: window.navigator.userAgent,
      cookie: window.document.cookie

      //eslint-disable-next-line no-extra-parens
    };var hasProtectedPages = function (_ref2) {
      var _ref2$rendererModel$p = _ref2.rendererModel.passwordProtectedPages,
          passwordProtectedPages = _ref2$rendererModel$p === undefined ? [] : _ref2$rendererModel$p,
          _ref2$publicModel = _ref2.publicModel;
      _ref2$publicModel = _ref2$publicModel === undefined ? {} : _ref2$publicModel;
      var _ref2$publicModel$pag = _ref2$publicModel.pageList;
      _ref2$publicModel$pag = _ref2$publicModel$pag === undefined ? {} : _ref2$publicModel$pag;
      var _ref2$publicModel$pag2 = _ref2$publicModel$pag.pages,
          pages = _ref2$publicModel$pag2 === undefined ? [] : _ref2$publicModel$pag2;
      return passwordProtectedPages.length || pages.some(function (page) {
        return !page.pageJsonFileName;
      });
    }(siteModel);

    function addConditionalDependencies(pkgs) {
      var map = siteModel.rendererModel.clientSpecMap;
      var mapKeys = Object.keys(map);
      var shouldLoadPackageFor = function shouldLoadPackageFor(applicationType) {
        return mapKeys.some(function (applicationId) {
          return map[applicationId].type === applicationType;
        });
      };

      function insert(p, marker) {
        var pos = p.indexOf(marker);

        for (var _len2 = arguments.length, extra = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
          extra[_key2 - 2] = arguments[_key2];
        }

        if (pos !== -1) {
          p.splice.apply(p, [pos, 0].concat(extra));
        } else {
          p.push.apply(p, extra);
        }
      }

      // We check that we have wixCodeModel, because if a site is published without Wix Code,
      // And then Wix Code is added and the site is saved, the metasite is "copied" to the
      // published site as well, showing as if there's Wix Code in the published site, although
      // there isn't
      var isWixCloud = function isWixCloud() {
        return shouldLoadPackageFor('siteextension') && !!siteModel.rendererModel.wixCodeModel;
      };

      function shouldLoadPackageForEComMigratedSite() {
        var _siteModel$publicMode = siteModel.publicModel;
        _siteModel$publicMode = _siteModel$publicMode === undefined ? {} : _siteModel$publicMode;
        var _siteModel$publicMode2 = _siteModel$publicMode.metaSiteFlags,
            metaSiteFlags = _siteModel$publicMode2 === undefined ? '' : _siteModel$publicMode2;

        return metaSiteFlags.indexOf('EComMigrated') >= 0;
      }

      function isQuickActionEnabled(quickActionName) {
        var _siteModel$rendererMo = siteModel.rendererModel.siteMetaData;
        _siteModel$rendererMo = _siteModel$rendererMo === undefined ? {} : _siteModel$rendererMo;
        var _siteModel$rendererMo2 = _siteModel$rendererMo.quickActions;
        _siteModel$rendererMo2 = _siteModel$rendererMo2 === undefined ? {} : _siteModel$rendererMo2;
        var _siteModel$rendererMo3 = _siteModel$rendererMo2.configuration,
            configuration = _siteModel$rendererMo3 === undefined ? {} : _siteModel$rendererMo3;

        return !!configuration[quickActionName];
      }

      var wixappsComps = ['container', 'textArea', 'matrixGallery', 'slideShowGallery', 'comboBoxInput', 'dialogs'];

      if (!experiment.isOpen('selectiveWixapps')) {
        if (isPreview || shouldLoadPackageFor('wixapps') || shouldLoadPackageFor('ecommerce') || shouldLoadPackageForEComMigratedSite()) {
          insert.apply(undefined, [pkgs, 'tpa', 'wixappsCore', 'wixappsClassics'].concat(wixappsComps, ['table', 'messageView']));
        }
        if (isPreview || shouldLoadPackageFor('appbuilder')) {
          insert.apply(undefined, [pkgs, 'tpa', 'wixappsCore', 'wixappsBuilder'].concat(wixappsComps));
        }
      }

      if (useDS || isPreview) {
        pkgs.push('documentServices', 'documentServicesSchemas');
      }
      if (isPreview) {
        pkgs.push('immutable');
      }

      if (isWixCloud() || isPreview) {
        pkgs.push('wixCode');
      }

      if (!experiment.isOpen('selectiveDialogs') || hasProtectedPages) {
        pkgs.push('dialogs', 'linkBar', 'loginSocialBar', 'controller');
        if (isServerSide) {
          pkgs.push('backToTopButton');
        }
      }

      if (mobileView) {
        pkgs.push('tinyMenu', 'loginSocialBar', 'icon', 'svgShape', 'quickActionBar');
        if (isQuickActionEnabled('quickActionsMenuEnabled')) {
          pkgs.push('mobileActionsMenu');
        }
      }

      if (isPreview || siteModel.rendererModel.siteInfo.documentType === 'Template') {
        pkgs.push('translationsUtils');
      }

      return pkgs;
    }

    var handleRequireError = prefetch ? function () {} : function (pkgs) {
      return function (err) {
        if (err.requireType === 'define') {
          requirejs.onError(err);
          return;
        }
        if (!config.urlArgs) {
          if (err.requireModules) {
            err.requireModules.forEach(function (module) {
              requirejs.undef(module);
            });
          }
          config.urlArgs = 'c=' + Date.now();
          requirejs.config(config);
          var errClone = Object.keys(err).reduce(function (r, k) {
            r[k] = err[k];
            return r;
          }, {});
          errClone.message = err.message;
          errClone.stack = err.stack ? '' + err.stack : ''; //eslint-disable-line prefer-template
          requirejs(pkgs, function () {
            errClone.errn = 'REQUIREJS_RETRY_ERROR';
            errClone.errc = 111025;
            errClone.severity = 10;
            requirejs.onError(errClone);
          }, requirejs.onError);
        }
      };
    };

    var buildFunctionParametersObject = function buildFunctionParametersObject(pkgs, args) {
      return pkgs.reduce(function (result, pkg, index) {
        result[pkg] = args[index];
        return result;
      }, {});
    };

    var loadRequirements = function loadRequirements(pkgs, cb) {
      var loaded = cb ? function () {
        for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        var p = buildFunctionParametersObject(pkgs, args);
        cb(p);
      } : function () {};

      if (queryUtil.getParameterByName('debug')) {
        requirejs(pkgs, loaded);
      } else {
        requirejs(pkgs, loaded, handleRequireError(pkgs));
      }
    };

    var load = function load(pkgs, cb) {
      wixBiSession.packagesLoaded = Date.now();

      /*
       * Require all needed packages (static + conditional)
       * Then do initial site render (or re-layout if it was rendered by the server)
       */
      function getAjaxHandler($, cookieUtils) {
        var ignore = {};

        var canUseCache = function canUseCache(_ref3) {
          var url = _ref3.url,
              type = _ref3.type;
          return !ignore[url] && (!type || type.toUpperCase() === 'GET');
        };

        function addXSRFHeader(options) {
          var XSRFToken = cookieUtils.getCookie('XSRF-TOKEN');
          if (XSRFToken) {
            options.headers = options.headers || {};
            options.headers['X-XSRF-TOKEN'] = XSRFToken;
          }
        }

        function getHostname(url) {
          return url.match(/:\/\//) !== undefined ? url.split('/')[2] : url.split('/')[0];
        }

        return function (options) {
          if (options.cache !== false && canUseCache(options) && contentCache(options)) {
            return;
          }
          ignore[options.url] = true;

          if (options.type === 'POST' && getHostname(options.url) === 'editor.wix.com' && experiment.isOpen('xsrfHeaderOnPostRequests')) {
            addXSRFHeader(options);
          }
          $.ajax.apply($, arguments);
        };
      }

      loadRequirements([].concat(_toConsumableArray(pkgs), ['warmupUtils', 'zepto']), function (p) {
        var ajaxHandler = getAjaxHandler(p.zepto, p.warmupUtils.cookieUtils);
        p.warmupUtils.ajaxLibrary.register(ajaxHandler);

        if (siteModel.wixData) {
          var siteStructureNode = window.document.getElementById('masterPage') || window.document.getElementById('SITE_STRUCTURE');
          siteModel.wixHtmlRaw = siteStructureNode.outerHTML;
          siteModel.wixAnchors = window.anchors || {};
          siteStructureNode.parentNode.removeChild(siteStructureNode);
        }

        siteModel.requestModel.storage = p.warmupUtils.storage(window);

        siteModel.currentUrl = p.warmupUtils.urlUtils.parseUrl(window.serverSideUrl || window.location.href);
        siteModel.forceMobileView = window.forceMobileView;

        cb(p, ajaxHandler);
      });
    };

    var loadWithIntegrationPackages = function loadWithIntegrationPackages(_, pkgs, cb) {
      var addIntegrationPackages = function addIntegrationPackages(packages) {
        if (isQaAutomation) {
          packages.push('qaAutomation');
        }
        if (isTpaIntegration) {
          packages.push('tpaIntegration', 'jasmine', 'jasmine-html');
        }
        if (isWixCodeIntegration) {
          packages.push('wixCodeIntegration', 'jasmine', 'jasmine-html', 'wixCode');
        }
        if (isViewerIntegration) {
          packages.push('viewerIntegration', 'jasmine', 'jasmine-html');
        }
        return _.uniq(packages);
      };

      var initIntegrationPackages = function initIntegrationPackages(p) {
        var tpaIntegration = p.tpaIntegration,
            wixCodeIntegration = p.wixCodeIntegration,
            viewerIntegration = p.viewerIntegration;

        if (tpaIntegration) {
          tpaIntegration.init(window, p.core);
        }
        if (wixCodeIntegration) {
          wixCodeIntegration.init(window, p.core, p.wixCode, p['host-platform-api'], p.utils, p.tpa);
        }
        if (viewerIntegration) {
          viewerIntegration.init(window, p.core, p.utils);
        }
      };

      loadRequirements(addIntegrationPackages(pkgs), function (p) {
        initIntegrationPackages(p);
        cb(p);
      });
    };

    function getClientSidePackages() {
      var clientSidePackages = ['animations', 'backgroundCommon', 'buttonCommon', 'color', 'compDesignUtils', 'components', 'compUtils', 'containerCommon', 'core', 'coreMultilingual', 'coreUtils', 'coreUtilsLib', 'create-react-class', 'data-capsule', 'dataFixer', 'displayer', 'fedops-logger', 'formCommon', 'galleriesCommon', 'host-platform-api', 'imageClientLib', 'imageZoom', 'layout', 'mobileLayoutUtils', 'mobileLayoutUtils', 'mobx', 'mobx-react', 'platformUtils', 'pmrpc', 'prop-types', 'react', 'react-dom-factories', 'reactDOM', 'remoteDOM', 'render', 'santa-components', 'santa-data-fixer', 'santa-renderer', 'santaProps', 'ScrollToPlugin', 'site-widgets', 'skinExports', 'skins', 'skinUtils', 'socialCommon', 'textCommon', 'thirdPartyAnalytics', 'TimelineMax', 'tpa', 'TweenMax', 'utils', 'warmupUtils', 'warmupUtilsLib', 'wixUiCompsToPackages', 'xss', 'zepto'];

      return addConditionalDependencies(clientSidePackages);
    }

    function renderClientSide() {
      var clientSidePackages = getClientSidePackages();
      var shouldLoadWorkerDirectly = experiment.isOpen('wixCodeNoIframe') && Boolean(siteModel.publicModel);
      var platformInitPkgs = ['lodash'];
      if (shouldLoadWorkerDirectly) {
        platformInitPkgs = platformInitPkgs.concat(['host-worker-init', 'platformInit']);
      } else {
        platformInitPkgs = platformInitPkgs.concat(['wixCodeInit']);
      }
      loadRequirements(platformInitPkgs, function (_ref4) {
        var _ = _ref4.lodash,
            platformInit = _ref4.platformInit,
            _ref4$wixCodeInit = _ref4.wixCodeInit,
            wixCodeInit = _ref4$wixCodeInit === undefined ? platformInit : _ref4$wixCodeInit;

        var wixCodeAppApi = wixCodeInit.getAppApi();
        wixCodeInit.initMainR({
          appApi: wixCodeAppApi,
          siteModel: siteModel,
          mobileView: mobileView,
          queryUtil: queryUtil,
          isBot: isBot,
          fetchScripts: experiment.isOpen('platformFetchScripts')
        });
        var props = {
          wixCodeAppApi: wixCodeAppApi
        };
        wixBiSession.usingPlatform = wixCodeAppApi.isAppInitiated();
        setContext({
          shouldDelay: function shouldDelay() {
            return !isPreview && experiment.isOpen('importScriptsOpt') && wixCodeAppApi.isAppInitiated();
          }
        });
        var notify = notifyParent.bind(null, 'santaReady');

        var platformApps = wixCodeInit.appsUtils.getAppsBaseInfo({
          rendererModel: siteModel.rendererModel,
          clientSpecMap: siteModel.rendererModel.clientSpecMap,
          serviceTopology: siteModel.serviceTopology,
          viewerPlatformAppSources: queryUtil.getParameterByName('viewerPlatformAppSources'),
          santaBase: siteModel.santaBase
        });
        var anyPlatformApps = wixCodeInit.specMapUtils.getAppSpec(siteModel.rendererModel.clientSpecMap) || platformApps.length > 0;
        var corePlus = ['core', 'render'];

        if (isQaAutomation) {
          corePlus.push('qaAutomation');
        }
        if (anyPlatformApps) {
          corePlus.push('wixCode');
        }

        load(corePlus, function (pkgs, ajaxHandler) {
          performance.mark('prepare start');

          var requireAllComponents = !experiment.isOpen('selectiveDownload') || isPreview || useDS || isExternalPreview || !window.Promise;

          var core = pkgs.core,
              qaAutomation = pkgs.qaAutomation;

          if (qaAutomation) {
            qaAutomation.init(window, siteModel);
          }

          if (siteModel.rendererModel.seo) {
            clientSidePackages.push('componentsSeoLayer');
          }

          if (requireAllComponents) {
            loadRequirements(['components', 'skins'].concat(core.requireCompCode.all()), function (loadedPackages) {
              if (core.requireCompCode.callAllRequiredPackagesCallbacks) {
                core.requireCompCode.callAllRequiredPackagesCallbacks(loadedPackages);
              }

              if (useDS || isPreview || isExternalPreview) {
                clientSidePackages.push('componentsPreviewLayer');
              }
              loadWithIntegrationPackages(_, clientSidePackages, function (p) {
                p.render.renderClientSide(p, ajaxHandler, siteModel, props, notify);
              });
            });
          } else {
            siteModel.selectiveCompDownload = true;
            var preparedData = {};
            if (pkgs.render.initSiteForRender) {
              preparedData = pkgs.render.initSiteForRender(siteModel, ajaxHandler, props);
            } else {
              preparedData.privates = core.renderer.createSitePrivatesEx(ajaxHandler, siteModel, props);
              preparedData.prepared = core.renderer.prepareSiteForRender(preparedData.privates.displayedSiteData, preparedData.privates.viewerPrivateServices, props);
              preparedData.props = props;
            }

            loadWithIntegrationPackages(_, clientSidePackages, function (p) {
              p.render.renderFromPrepared(p, preparedData.privates, preparedData.prepared, preparedData.props, notify);
            });
          }
        });

        (0, _miniPackages2.default)(window, requirejs, isServerSide);

        wixBiSession.info = function () {
          console.log('%cTiming Info', 'color:blue; font-weight:bold');
          console.table(_(performance.getEntries()).filter(function (_ref5) {
            var entryType = _ref5.entryType;
            return ['mark', 'paint'].includes(entryType);
          }).invokeMap('toJSON').value(), ['name', 'startTime']);

          console.log('%cHTML Info', 'color:blue; font-weight:bold');
          console.table(_(performance.getEntriesByType('navigation')[0]).pick(['responseStart', 'domInteractive', 'transferSize', 'decodedBodySize']).toPairs().value());

          var scripts = _.filter(performance.getEntriesByType('resource'), function (_ref6) {
            var initiatorType = _ref6.initiatorType;
            return initiatorType === 'script';
          });
          var santaBase = window.santaBase,
              clientSideRender = window.clientSideRender,
              santaRenderingError = window.santaRenderingError,
              document = window.document;

          var info = {
            Version: santaBase.match(/\/([^/]+)$/)[1],
            'Using platform': wixBiSession.usingPlatform,
            'Using SSR': !clientSideRender,
            'No SSR reason': santaRenderingError && santaRenderingError.errorInfo,
            'Script file count': scripts.length,
            'Script file size (KB)': _.reduce(scripts, function (total, _ref7) {
              var transferSize = _ref7.transferSize;
              return total + transferSize;
            }, 0) >> 10,
            'Script protocol': scripts[0].nextHopProtocol,
            'iframe count': document.querySelectorAll('iframe').length
          };
          if (!info['No SSR reason']) {
            delete info['No SSR reason'];
          }
          console.log('%cSession Info', 'color:blue; font-weight:bold');
          console.table(_.toPairs(info));
        };
      });

      loadRequirements(clientSidePackages);
    }

    function renderServerSide() {
      load(['lodash', 'warmupUtilsLib', 'experiment', 'imageClientLib', 'layout', 'warmup', 'warmupUtils', 'tpaWarmup'], function (loadedPackages) {
        loadedPackages.warmup.init(siteModel, function () {
          notifyParent('santaDidLayout');
          renderClientSide();
        });
        if (experiment.isOpen('earlyLoadJS')) {
          requirejs(['coreUtilsLib'], function () {
            requirejs(['core'], function () {});
          });
        }
      });
    }

    // Server side render state
    window.sssr = {};

    function callRender() {
      if (isServerSide) {
        renderServerSide();
      } else if (window.isServerSideWithHash) {
        window.document.addEventListener('DOMContentLoaded', function () {
          window.document.getElementById('SITE_CONTAINER').innerHTML = '';
          renderClientSide();
        });
      } else {
        renderClientSide();
      }
    }

    if ((0, _isLocal2.default)(window.santaBase) && queryUtil.getParameterByName('hot') !== 'false') {
      requirejs(['hot', 'zepto'], function (hot, $) {
        hot.init($);
        callRender();
      });
    } else {
      callRender();
    }
  }

  return render;
};

var _isLocal = __webpack_require__(/*! ../common/isLocal.js */ "./node_modules/santa-main-r/lib/lib/common/isLocal.js");

var _isLocal2 = _interopRequireDefault(_isLocal);

var _miniPackages = __webpack_require__(/*! ../viewer/miniPackages.js */ "./node_modules/santa-main-r/lib/lib/viewer/miniPackages.js");

var _miniPackages2 = _interopRequireDefault(_miniPackages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
//# sourceMappingURL=render.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/resourcePrefetch.js":
/*!**********************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/resourcePrefetch.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = resourcePrefetch;

var _joinURL = __webpack_require__(/*! ../common/joinURL.js */ "./node_modules/santa-main-r/lib/lib/common/joinURL.js");

var _joinURL2 = _interopRequireDefault(_joinURL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resourcePrefetch(_ref, _ref2) {
  var document = _ref.document,
      XMLHttpRequest = _ref.XMLHttpRequest,
      Promise = _ref.Promise,
      santaBase = _ref.santaBase;
  var siteModel = _ref2.siteModel,
      publicModel = _ref2.publicModel,
      pageInfo = _ref2.pageInfo,
      shouldTimeout = _ref2.shouldTimeout,
      wixBiSession = _ref2.wixBiSession,
      isServerSide = _ref2.isServerSide,
      mobileView = _ref2.mobileView,
      experiment = _ref2.experiment,
      requirejs = _ref2.requirejs;

  if (!publicModel) {
    return {
      contentCache: function contentCache() {},
      setContext: function setContext() {}
    };
  }

  var cache = {};
  var pending = {};
  var context = {
    shouldDelay: function shouldDelay() {}
  };

  function _prefetch(url, options, pageId) {
    var r = new XMLHttpRequest();

    r.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        var cached = options.parse ? options.parse(r.response) : r.response;
        cache[url] = cached;
        pending[url].filter(function (op) {
          return op.success;
        }).forEach(function (op) {
          op.success(cached);
        });
      } else {
        this.onerror();
      }
    };
    r.onerror = function () {
      cache[url] = r;
      pending[url].filter(function (op) {
        return op.error;
      }).forEach(function (op) {
        op.error(r);
      });
    };
    r.onloadend = function () {
      delete pending[url];
    };

    r.open('GET', url, true);

    //Property timeout MUST be after .open() and before .send()
    //This is related to an issue with IE - https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/timeout
    if (shouldTimeout) {
      r.timeout = 2000;
      r.ontimeout = function () {
        if (pageId) {
          //beat 2 = 'reset' event
          wixBiSession.beat(2, pageId);
        }
      };
    }
    //Property timeout MUST be after .open() and before .send()

    if (options.accept) {
      r.setRequestHeader('Accept', options.accept);
    }

    r.send();
  }

  function prefetch(url, options, pageId) {
    if (url) {
      options = options || {};
      var cached = cache[url];
      if (cached) {
        if (options.success) {
          options.success(cached);
        }
      } else {
        var p = pending[url];
        if (!p) {
          pending[url] = p = [];
          _prefetch(url, options, pageId);
        }
        p.push(options);
      }
    }
  }

  function prefetchJSON(url, pageId) {
    prefetch(url, {
      accept: 'application/json',
      parse: function parse(response) {
        var json = null;
        try {
          json = JSON.parse(response);
          if (wixBiSession.et < 6) {
            prefetchComps(json);
            prefetchSvg(json.structure, response);
            earlyBackground(json, pageId);
          }
        } catch (e) {
          // empty
        }
        return json;
      }
    }, pageId);
  }

  var pc = null;
  function prefetchComps(json) {
    if (Promise && json.structure && experiment.isOpen('prefetchComps')) {
      if (pc === null) {
        pc = new Promise(function (resolve) {
          requirejs(['coreUtils'], function (_ref3) {
            var prefetchComponents = _ref3.prefetchComponents;

            resolve(prefetchComponents);
          });
        });
      }
      pc.then(function (prefetchComponents) {
        var hasBlog = prefetchComponents(json, siteModel, mobileView);
        if (hasBlog) {
          prefetchJSON((0, _joinURL2.default)(santaBase, 'static/wixapps/apps/blog/descriptor.json'));
        }
      });
    }
  }

  function toGrayscale(color) {
    var match = color.match(/#(.{2})(.{2})(.{2})/);
    if (match) {
      var c = Math.floor(match.slice(1).map(function (h) {
        return parseInt(h, 16);
      }).reduce(function (s, v) {
        return s + v;
      }, 0) / 3).toString(16);
      return '#' + c + c + c;
    }
  }

  function headerColor(json) {
    if (experiment.isOpen('earlyBackgroundUseHeader')) {
      var _json$structure = json.structure;
      _json$structure = _json$structure === undefined ? {} : _json$structure;
      var _json$structure$child = _json$structure.children,
          children = _json$structure$child === undefined ? [] : _json$structure$child;

      var header = children.find(function (_ref4) {
        var id = _ref4.id;
        return id === 'SITE_HEADER';
      });
      if (header) {
        var styleId = header.styleId;
        var _json$data = json.data;
        _json$data = _json$data === undefined ? {} : _json$data;
        var _json$data$theme_data = _json$data.theme_data;
        _json$data$theme_data = _json$data$theme_data === undefined ? {} : _json$data$theme_data;
        var _json$data$theme_data2 = _json$data$theme_data[styleId];
        _json$data$theme_data2 = _json$data$theme_data2 === undefined ? {} : _json$data$theme_data2;
        var _json$data$theme_data3 = _json$data$theme_data2.style;
        _json$data$theme_data3 = _json$data$theme_data3 === undefined ? {} : _json$data$theme_data3;
        var _json$data$theme_data4 = _json$data$theme_data3.properties;
        _json$data$theme_data4 = _json$data$theme_data4 === undefined ? {} : _json$data$theme_data4;
        var bg = _json$data$theme_data4.bg;

        return bg;
      }
    }
  }
  function pageColor(document_data, pageId) {
    if (document_data) {
      var _document_data$pageId = document_data[pageId];
      _document_data$pageId = _document_data$pageId === undefined ? {} : _document_data$pageId;
      var _document_data$pageId2 = _document_data$pageId.pageBackgrounds;
      _document_data$pageId2 = _document_data$pageId2 === undefined ? {} : _document_data$pageId2;
      var _document_data$pageId3 = _document_data$pageId2[mobileView ? 'mobile' : 'desktop'];
      _document_data$pageId3 = _document_data$pageId3 === undefined ? {} : _document_data$pageId3;
      var ref = _document_data$pageId3.ref;

      if (ref) {
        var _document_data = document_data[ref[0] === '#' ? ref.substring(1) : ref];
        _document_data = _document_data === undefined ? {} : _document_data;
        var color = _document_data.color;

        return color;
      }
    }
  }

  var savedColor = void 0;
  var savedMap = void 0;
  function earlyBackground(json, pageId) {
    if (document && experiment.isOpen('earlyBackground')) {
      var _json$data2 = json.data;
      _json$data2 = _json$data2 === undefined ? {} : _json$data2;
      var document_data = _json$data2.document_data,
          theme_data = _json$data2.theme_data;

      if (theme_data && !savedMap) {
        var _theme_data$THEME_DAT = theme_data.THEME_DATA;
        _theme_data$THEME_DAT = _theme_data$THEME_DAT === undefined ? {} : _theme_data$THEME_DAT;
        savedMap = _theme_data$THEME_DAT.color;
      }
      savedColor = headerColor(json) || savedColor || pageColor(document_data, pageId);
      if (savedColor) {
        var match = savedColor.match(/color_(\d+)/);
        if (match) {
          savedColor = savedMap[match[1]];
        }
        if (savedColor && savedColor[0] === '#') {
          document.body.style.backgroundColor = experiment.isOpen('earlyBackgroundGrayscale') ? toGrayscale(savedColor) : savedColor;
        }
      }
    }
  }

  function shapeSkinNameToUrl(shapeSkinName) {
    function getSvgUri(version, svgHash, shapeName) {
      return svgHash + (version === 1 ? '_svgshape.v1.' + shapeName : '') + '.svg'; //eslint-disable-line prefer-template
    }

    var mediaRootUrl = siteModel.serviceTopology.mediaRootUrl;
    var partsArr = shapeSkinName.replace(/^.*\//, '').split('.');
    var version = partsArr[1] === 'v1' ? 1 : 2;
    var svgHash = partsArr[2].replace(/svg_/i, '');
    var svgName = partsArr[3];
    var svgUri = getSvgUri(version, svgHash, svgName);
    return (0, _joinURL2.default)(mediaRootUrl, 'shapes', svgUri);
  }

  var svgMap = {
    'skins.viewer.svgshape.SvgShapeDefaultSki': true
  };

  function prefetchSvg(structure, response) {
    if (structure && response.indexOf('"svg') !== -1) {
      var svgs = JSON.stringify(structure).match(/"skin"\s*:\s*"svg[^"]+"/g);
      if (svgs) {
        svgs.map(function (m) {
          m = m.match(/svg[^"]+/);
          return m && m[0];
        }).filter(function (svg) {
          if (!svg || svgMap[svg]) {
            return false;
          }
          svgMap[svg] = true;
          return true;
        }).map(shapeSkinNameToUrl).forEach(function (url) {
          prefetch(url);
        });
      }
    }
  }

  function getFirstUrl(pageJsonFileName) {
    if (pageJsonFileName) {
      var topology = publicModel.pageList.topology[0];
      return topology.baseUrl + topology.parts.replace('{filename}', pageJsonFileName);
    }
  }

  function getMasterPageFirstURL() {
    var _publicModel$pageList = publicModel.pageList,
        masterPageJsonFileName = _publicModel$pageList.masterPageJsonFileName,
        masterPage = _publicModel$pageList.masterPage;

    return getFirstUrl(masterPageJsonFileName) || masterPage && masterPage[0];
  }

  function getPageFirstURL() {
    return getFirstUrl(pageInfo.pageJsonFileName) || pageInfo.urls[0];
  }

  function shouldPrefetch() {
    return !isServerSide && !experiment.isOpen('sv_getDataFixedPageJsonAndUseThem');
  }

  function prefetchTranslations(langs) {
    // There is a bug in IE11 that fail to redirect (status 307) here for cross origin ajax requests WEED-10793
    // Converting http to https will prevent this redirect temporarily until all Parastorage urls in
    // serviceTopology.scriptsLocationMap will be https HTMLSRVR-2321
    var santaLangsUrl = window.siteModel.serviceTopology.scriptsLocationMap['santa-langs'].replace(/https?/, 'https');
    var urls = [].concat(langs).map(function (l) {
      return santaLangsUrl + '/resources/santa-viewer/bundles/_generated/santa_viewer_' + l + '.json';
    });
    urls.forEach(prefetchJSON);
  }

  try {
    if (shouldPrefetch()) {
      prefetchJSON(getMasterPageFirstURL(), 'masterPage');
      prefetchTranslations('en');
      if (pageInfo) {
        prefetchJSON(getPageFirstURL(), pageInfo.pageId);
      }
    }
  } catch (e) {
    // empty
  }

  var cbs = [];
  function async(cb) {
    function delay() {
      var top = cbs.shift();
      if (top) {
        top();
        if (cbs.length > 0) {
          setTimeout(delay, 10);
        }
      }
    }

    if (cbs.push(cb) === 1) {
      if (context.shouldDelay()) {
        setTimeout(delay, 10);
      } else {
        setTimeout(function () {
          var fs = cbs;
          cbs = [];
          fs.forEach(function (f) {
            f();
          });
        }, 0);
      }
    }
  }

  return {
    contentCache: function contentCache(options) {
      var url = options.url;

      var cached = cache[url];
      if (cached) {
        async(function () {
          if (cached instanceof XMLHttpRequest) {
            options.error(cached);
          } else {
            options.success(cached);
          }
        });
      } else if (pending[url]) {
        pending[url].push(options);
      } else {
        return false;
      }
      return true;
    },
    setContext: function setContext(update) {
      Object.keys(update).forEach(function (key) {
        context[key] = update[key];
      });
      // Object.assign(context, update)
    }
  };
}
//# sourceMappingURL=resourcePrefetch.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/rjs-config.js":
/*!****************************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/rjs-config.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (window, versions, experiment) {
  function getViewerRjsConfig(serviceTopology) {
    var queryUtils = (0, _getQueryUtils2.default)(window);
    var clientSpecMap = window.rendererModel && window.rendererModel.clientSpecMap;
    var local = ((0, _isLocal2.default)(queryUtils.getParameterByName('ReactSource')) || (0, _isLocal2.default)(window.santaBase)) && !queryUtils.getParameterByName('isBisect');
    var nativeComponentsOverrides = queryUtils.getParameterByName('nativeComponentsOverrides');
    var rr = (0, _getRjsConfig2.default)(versions, serviceTopology, local, { clientSpecMap: clientSpecMap, nativeComponentsOverrides: nativeComponentsOverrides });

    if (!experiment) {
      rr.paths.experiment = 'js/plugins/experiment/experiment';
    }

    // generated
    rr.packages = ['tpaIntegration', 'wixCodeIntegration', 'viewerIntegration'].map(function (packageName) {
      return {
        name: packageName,
        main: packageName,
        location: (0, _getIntegrationPath2.default)(packageName, window.santaBase)
      };
    });

    return rr;
  }
  return getViewerRjsConfig;
};

var _getIntegrationPath = __webpack_require__(/*! ../common/getIntegrationPath */ "./node_modules/santa-main-r/lib/lib/common/getIntegrationPath.js");

var _getIntegrationPath2 = _interopRequireDefault(_getIntegrationPath);

var _getQueryUtils = __webpack_require__(/*! ../common/getQueryUtils */ "./node_modules/santa-main-r/lib/lib/common/getQueryUtils.js");

var _getQueryUtils2 = _interopRequireDefault(_getQueryUtils);

var _getRjsConfig = __webpack_require__(/*! ./get-rjs-config */ "./node_modules/santa-main-r/lib/lib/viewer/get-rjs-config.js");

var _getRjsConfig2 = _interopRequireDefault(_getRjsConfig);

var _isLocal = __webpack_require__(/*! ../common/isLocal */ "./node_modules/santa-main-r/lib/lib/common/isLocal.js");

var _isLocal2 = _interopRequireDefault(_isLocal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=rjs-config.js.map

/***/ }),

/***/ "./node_modules/santa-main-r/lib/lib/viewer/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/santa-main-r/lib/lib/viewer/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @param pages
 * @param pageId
 * @returns {Page}
 */
function getPageById(pages, pageId) {
  return pages.find(function (p) {
    return p.pageId === pageId;
  });
}

/**
 * @typedef {Object} Page
 * @property {string} pageId
 * @property {string} pageUriSEO
 */

/**
 * @param window
 * @param {{pages: Page[], mainPageId: string}} pageList
 * @param {boolean} isPremium
 * @returns {Page|null}
 */
function getPageInfo(window, pageList, isPremium) {
  if (!pageList) {
    return null;
  }
  var pages = pageList.pages || [];
  var hash = window.location.hash.split('/');
  var pageId = hash[1];
  if (pageId) {
    var page = getPageById(pages, pageId);
    if (page) {
      return page;
    }
  }

  var pathname = window.location.pathname;
  if (pathname) {
    if (!isPremium) {
      var match = pathname.match(/\/.+\/([^/]+)$/);
      pathname = match && match[1];
    }

    if (pathname) {
      var result = pages.find(function (p) {
        var pageUriSEO = p.pageUriSEO;
        if (pageUriSEO) {
          var re = new RegExp('(^|/)' + pageUriSEO + '(/|$)');
          return re.test(pathname);
        }
        return false;
      });

      if (result) {
        return result;
      }
    }
  }

  return pageList.mainPageId && getPageById(pages, pageList.mainPageId);
}

exports.getPageInfo = getPageInfo;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ "requirejs":
/*!****************************!*\
  !*** external "requirejs" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = requirejs;

/***/ })

/******/ });
//# sourceMappingURL=main-r.min.js.map