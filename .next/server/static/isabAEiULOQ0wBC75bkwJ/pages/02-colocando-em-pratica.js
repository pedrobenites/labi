module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ["children", "href"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", props, children));
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var className = _ref.className,
      children = _ref.children,
      notUseClassNameDefault = _ref.notUseClassNameDefault,
      isList = _ref.isList;
  var classNameComponent = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_defineProperty({}, 'ColorBlack SingleSpace PV1x Opacity5', !notUseClassNameDefault), className);

  if (isList) {
    return children.map(function (child, key) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: classNameComponent,
        key: key
      }, child);
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classNameComponent
  }, children);
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      Component = _ref.component,
      componentProps = _ref.componentProps;
  return children.map(function (props, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      key: i,
      index: i
    }, componentProps));
  });
});

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      arrow = _ref.arrow,
      props = _objectWithoutProperties(_ref, ["children", "className", "arrow"]);

  var Component = props.href ? _Link__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"] : 'button';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Btn', className)
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "InlineBlock"
  }, children), arrow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "ML12",
    style: {
      top: 3,
      position: 'relative'
    },
    src: "/static/img/ic_arrow-right.svg"
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      full = _ref.full,
      props = _objectWithoutProperties(_ref, ["children", "full"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container P2x"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      W80: !full
    })
  }, children)));
});

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "ColorPrimary Saira SairaLight FS7x"
  }, children);
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var rc_scroll_anim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var rc_scroll_anim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (rc_scroll_anim__WEBPACK_IMPORTED_MODULE_0___default.a.Link);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 11 */
/***/ (function(module) {

module.exports = [{"text":"Começando pelo Básico","href":"/01-comecando-pelo-basico","number":"01"},{"text":"Colocando em Prática","href":"/02-colocando-em-pratica","number":"02"},{"text":"Nossa Linguagem","href":"/03-nossa-linguagem","number":"03"},{"text":"Comunicação por Canal","href":"/04-comunicacao-por-canal","number":"04"},{"text":"Respostas Certeiras","href":"/05-respostas-certeiras","number":"05"},{"text":"Glossário","href":"/06-glossario","number":"06"}];

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(10);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./stylus/index.styl
var stylus = __webpack_require__(18);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(1);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./data/navigation.json
var navigation = __webpack_require__(11);

// EXTERNAL MODULE: ./components/Common/ComponentList.js
var ComponentList = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Common/Link.js
var Link = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Navigation/Navigation.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Navigation_Navigation =
/*#__PURE__*/
function (_Component) {
  _inherits(Navigation, _Component);

  function Navigation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navigation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenu", function () {
      return _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return external_react_default.a.createElement("nav", {
        className: external_classnames_default()('PL24 PR12 Navigation BGPrimary', {
          Open: _this.state.open
        })
      }, external_react_default.a.createElement("div", {
        className: "Wrapper"
      }, external_react_default.a.createElement(Navigation_Brand, {
        onClick: _this.closeMenu
      }), external_react_default.a.createElement(Navigation_Menu, {
        onClick: _this.closeMenu
      }), external_react_default.a.createElement(Navigation_Hamburger, {
        onClick: function onClick() {
          return _this.setState({
            open: !_this.state.open
          });
        }
      })));
    });

    return _this;
  }

  return Navigation;
}(external_react_["Component"]);



var Navigation_Brand = function Brand(_ref) {
  var onClick = _ref.onClick;
  return external_react_default.a.createElement(Link["a" /* default */], {
    href: "/",
    className: "Brand ColorSecondary Saira SairaStrong FS5x",
    onClick: onClick
  }, external_react_default.a.createElement("img", {
    src: "/static/img/lab_exames.svg",
    alt: "Lab"
  }));
};

var Navigation_Hamburger = function Hamburger(_ref2) {
  var onClick = _ref2.onClick;
  return external_react_default.a.createElement("div", {
    className: "Hamburger",
    onClick: onClick
  }, external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null));
};

var Navigation_Menu = function Menu(_ref3) {
  var onClick = _ref3.onClick;
  return external_react_default.a.createElement("div", {
    className: "Menu Flex JCCenter AICenter"
  }, external_react_default.a.createElement("div", {
    onClick: onClick
  }, external_react_default.a.createElement(ComponentList["a" /* default */], {
    component: Navigation_MenuItem
  }, navigation)));
};

var Navigation_MenuItem = function MenuItem(_ref4) {
  var text = _ref4.text,
      number = _ref4.number,
      href = _ref4.href;
  return external_react_default.a.createElement("div", {
    className: "MenuItem"
  }, external_react_default.a.createElement(Link["a" /* default */], {
    href: href,
    className: "ColorWhite"
  }, external_react_default.a.createElement("span", {
    className: "Saira InlineBlock ColorSecondary FS6x Number"
  }, number), external_react_default.a.createElement("span", {
    className: "Saira SairaLight InlineBlock FS4x Text"
  }, text)));
};
// CONCATENATED MODULE: ./components/Views/MainView.js





var MainView_MainView = function MainView(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      className = _ref.className;
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Labi Exames | ", title)), external_react_default.a.createElement(Navigation_Navigation, null), external_react_default.a.createElement("main", {
    className: className
  }, children));
};

/* harmony default export */ var Views_MainView = __webpack_exports__["a"] = (MainView_MainView);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("rc-scroll-anim");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Views/MainView.js + 1 modules
var MainView = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Common/Button.js
var Button = __webpack_require__(5);

// EXTERNAL MODULE: ./components/Common/ScrollTo.js
var ScrollTo = __webpack_require__(8);

// CONCATENATED MODULE: ./components/Pages/SectionHeader.js



/* harmony default export */ var SectionHeader = (function (_ref) {
  var className = _ref.className,
      number = _ref.number,
      title = _ref.title,
      text = _ref.text,
      cta = _ref.cta;
  return external_react_default.a.createElement("header", {
    className: "PB3x"
  }, external_react_default.a.createElement("div", {
    className: "Spacer"
  }, external_react_default.a.createElement("div", {
    className: "Container PT2x PH32"
  }, external_react_default.a.createElement("div", {
    className: "ColorSecondary Saira FS80"
  }, number), external_react_default.a.createElement("h1", {
    className: "ColorWhite PT8 Saira SairaLight FS8x"
  }, title), external_react_default.a.createElement("p", {
    className: "ColorWhite SingleSpace Opacity6 PV1x"
  }, text), external_react_default.a.createElement(ScrollTo["a" /* default */], {
    to: "target",
    offsetTop: 80
  }, external_react_default.a.createElement(Button["a" /* default */], {
    className: "BtnOutline"
  }, cta)))));
});
// EXTERNAL MODULE: ./components/HTML/H2.js
var H2 = __webpack_require__(7);

// EXTERNAL MODULE: ./components/HTML/P.js
var P = __webpack_require__(3);

// EXTERNAL MODULE: ./components/HTML/Section.js
var Section = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Pages/SectionFooter.js





/* harmony default export */ var SectionFooter = (function (_ref) {
  var href = _ref.href,
      remove = _ref.remove;
  if (remove) return null;
  return external_react_default.a.createElement(Section["a" /* default */], {
    className: "BGLightGray PV2x"
  }, external_react_default.a.createElement(H2["a" /* default */], null, "Vamos adiante?"), external_react_default.a.createElement(P["a" /* default */], {
    className: "PV1x"
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore."), external_react_default.a.createElement(Button["a" /* default */], {
    className: "BtnInverted MT4",
    arrow: true,
    href: href
  }, "Pr\xF3ximo cap\xEDtulo"));
});
// CONCATENATED MODULE: ./components/Views/PageView.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ var PageView = __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      meta = _ref.meta,
      header = _ref.header,
      footer = _ref.footer,
      className = _ref.className;
  return external_react_default.a.createElement(MainView["a" /* default */], _extends({}, meta, {
    className: className
  }), external_react_default.a.createElement(SectionHeader, header), children, external_react_default.a.createElement(SectionFooter, footer));
});

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleSlider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




var sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
/* harmony default export */ __webpack_exports__["b"] = (function (_ref) {
  var children = _ref.children,
      id = _ref.id,
      fix = _ref.fix;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      PT40: !fix
    }),
    id: id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PB2x PT40"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, sliderSettings, children)));
});
function SimpleSlider(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", props, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, sliderSettings, children));
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex AICenter JCCenter TextCenter P1x Container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PB24"
  }, children));
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20);
/* harmony import */ var _HTML_P__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var _default =
/*#__PURE__*/
function (_Component) {
  _inherits(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      open: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
          Container: !_this.props.full,
          Open: _this.state.open,
          P8: !_this.props.full,
          CollapseFull: _this.props.full
        }, 'Collapse')
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CollapseHead, {
        style: _this.style,
        onClick: function onClick() {
          return _this.setState({
            open: !_this.state.open
          });
        },
        step: _this.props.step,
        title: _this.props.title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CollapseBody, {
        isOpen: _this.state.open,
        style: _this.style,
        description: _this.props.description,
        className: _this.props.classNameBody,
        isList: _this.props.isList,
        notUseClassNameDefault: _this.props.notUseClassNameDefault
      }, _this.props.children));
    });

    return _this;
  }

  _createClass(_default, [{
    key: "style",
    get: function get() {
      return {
        backgroundColor: this.props.color || '#F5F5F5'
      };
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var CollapseHead = function CollapseHead(_ref) {
  var title = _ref.title,
      step = _ref.step,
      props = _objectWithoutProperties(_ref, ["title", "step"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, props, {
    className: "CollapseHead Flex AICenter JCSpaceBetween"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, step && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Step"
  }, step), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Title Saira Medium"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconPlus, null));
};

var IconPlus = function IconPlus() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "IconPlus",
    height: "24",
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#522B79",
    d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"
  }));
};

var CollapseBody = function CollapseBody(_ref2) {
  var description = _ref2.description,
      isOpen = _ref2.isOpen,
      style = _ref2.style,
      children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["description", "isOpen", "style", "children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "CollapseBody",
    style: {
      maxHeight: isOpen ? 1000 : 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PV16 PH24 TextLeft",
    style: style
  }, description && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HTML_P__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], props, description), children));
};

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var fontSize = [null, 18, 24, 36, 48];

var Icon = function Icon(_ref) {
  var name = _ref.name,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["name", "size"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", _extends({
    className: "Icon InlineBlock"
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mdi mdi-".concat(name), _defineProperty({}, "mdi-".concat(fontSize[size], "px"), size))
  }));
};

/* unused harmony default export */ var _unused_webpack_default_export = (Icon);

/***/ }),
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var _Slider_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var CollapseSlider = function CollapseSlider(_ref) {
  var _ref$slides = _ref.slides,
      slides = _ref$slides === void 0 ? [] : _ref$slides,
      Component = _ref.slideComponent,
      props = _objectWithoutProperties(_ref, ["slides", "slideComponent"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Collapse__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], _extends({}, props, {
    full: true
  }), slides.length && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Slider_Slider__WEBPACK_IMPORTED_MODULE_2__[/* SimpleSlider */ "a"], null, slides.map(Component)));
};

/* harmony default export */ __webpack_exports__["a"] = (CollapseSlider);

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ColorPrimary Saira FS5x', className)
  }, props), children);
});

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module) {

module.exports = {"c":{"meta":{"title":"Colocando em prática"},"header":{"number":"02","title":"Colocando em prática","text":"Agora que já sabemos quem somos na teoria, vamos ver como isso funciona no nosso dia- a- dia!","cta":"Nossa experiência"},"footer":{"href":"03-nossa-linguagem"}},"a":[{"color":"#F5F5F5","step":"ETAPA 1","title":"Conhecimento","slides":[{"bigTitle":"A nossa relação com o paciente começa na etapa do conhecimento. Essa é a nossa oportunidade de apresentarmos o Labi, os nossos pilares e produtos.","title":null,"subtitle":null,"list":[]},{"bigTitle":null,"title":"RECEBIMENTO","subtitle":"Seja bem-vindo ao Labi Exames.","list":["Recebemos TODAS as pessoas com a mesma atenção e acolhimento.","Somos gentis e solícitos em TODOS os nossos canais.","Sempre que possível, levante-se para receber um novo paciente, o sempre ofereça para que ele sente. Evite fazer atendimentos sentado enquanto o paciente está em pé em frente ao balcão."]},{"bigTitle":null,"title":"APRESENTAÇÃO","subtitle":"Deixa eu lhe contar um pouco mais sobre nós!","list":["Ao receber um paciente que está buscando informações sobre o Labi tenha paciência para contar nossa história, demonstrar nossos diferenciais e esclarecer todas as dúvidas.","Apresente o Labi como um jeito inteligente de fazer exames, que une qualidade, conveniência e os melhores preços","Sempre apresente nossos checkups e convide o paciente para realizar um exame."]},{"bigTitle":null,"title":"ENCAMINHAMENTO","subtitle":"Todo mundo tem exames a fazer.","list":["Mesmo que o paciente esteja apenas curioso, sempre existe oportunidade de oferecer um exame.","Ofereça um orçamento de exames que ele já tenha te contado que precisa fazer.","Ou então mostre os nossos checkups e convide o paciente a experimentar o Labi."]}]},{"color":"#F0F0F0","step":"ETAPA 2","title":"Compra","slides":[{"bigTitle":"Comprar exames não é algo usual. Precisamos ter paciência, explicar as condições de forma clara e estarmos prontos para encontrar a melhor solução para o paciente.","title":null,"subtitle":null,"list":[]},{"bigTitle":null,"title":"ORÇAMENTO","subtitle":"Sim, nós temos os melhores preços!","list":["Prepare o orçamento dos exames com carinho e atenção.","Esteja sempre atento aos preparos necessário para orientar o paciente.","Pergunte se ele tem dúvidas, urgência ou se gostaria de conhecer nossas condições de pagamento."]},{"bigTitle":null,"title":"COMPRA","subtitle":"Como você gosta de ser atendido quando compra algo importante?","list":["Explique todas as formas de pagamento possíveis: a vista, no débito, no crédito ou parcelado.","Sempre que o atendimento estiver sendo feito por canais digitais ofereça o desconto da compra pela internet.","Se a compra for presencial, confirme o valor antes de passar o cartão e auxilie o paciente nesse processo."]},{"bigTitle":null,"title":"AGENDAMENTO","subtitle":"A gente facilita tudo, do início ao fim.","list":["Entregue o protocolo, esclareça o prazo do resultado e como ele pode ser retirado: através do site ou na unidade.","Para facilitar a compreensão pinte a área com o login e senha de acesso ao resultado dos exames.","Acompanhe o paciente até a saída e garanta que ele está bem o suficiente para ir embora."]}]},{"color":"#EBEBEB","step":"ETAPA 3","title":"Coleta de Exame","slides":[{"bigTitle":"A etapa da coleta é a mais delicada da nossa jornada. Não medimos esforços para manter o conforto do paciente neste momento da sua experiência no Labi.","title":null,"subtitle":null,"list":[]},{"bigTitle":null,"title":"CHAMADA","subtitle":"Nossa chance causar a melhor primeira impressão","list":["Antes de chamar o paciente imprima as etiquetas dos exames que serão coletados","Você deve receber o paciente com protocolo e documento de identificação em mãos","Chame o paciente pelo nome completo. Caso o paciente tenha mais de 70 anos opte pelo tratamento Sr. ou Sra.","Apresente-se ao paciente enquanto o acompanha até o box de coleta"]},{"bigTitle":null,"title":"COLETA","subtitle":"Uau que rápido, eu nem percebi a picada da agulha!","list":["Convide o paciente para se sentar e, se você perceber que ele está nervoso, ofereça para realizar a coleta deitado ou ajude a acalmá-lo","Manuseie o material de maneira clara permitindo que o paciente veja que todo o material é descartável.","Mostre os tubos de coleta, explique quais serão os exames e peça para o paciente conferir o nome nas etiquetas.","Deixe o paciente escolher qual braço de sua preferência para a coleta.","Peça licença, garroteie, esterilize a região com álcool e faça a coleta."]},{"bigTitle":null,"title":"DESPEDIDA","subtitle":"Nosso dever de garantir que o paciente está bem para ir pra casa.","list":["Entregue o protocolo, esclareça o prazo do resultado e como ele pode ser retirado: através do site ou na unidade.","Para facilitar a compreensão pinte a área com o login e senha de acesso ao resultado dos exames.","Acompanhe o paciente até a saída e garanta que ele está bem o suficiente para ir embora."]}]},{"color":"#E6E6E6","step":"ETAPA 4","title":"Resultado","slides":[{"bigTitle":"O resultado de um exame vai muito além de um laudo. Por isso, precisamos ser empáticos e atenciosos.","title":null,"subtitle":null,"list":[]},{"bigTitle":null,"title":"ENTREGA","subtitle":"Conveniência e conforto do paciente em primeiro lugar.","list":["Todos precisamos estar sempre prontos para explicar como funciona a entrega dos exames e orientar como se faz para acessar o resultado online.","Nós nunca podemos consultar o resultado de exames de pacientes.","Quando entregue pessoalmente nunca deseje boa sorte, entregue o exame e cumprimente o paciente."]},{"bigTitle":null,"title":"COLETA","subtitle":"Nosso dever é orientar.","list":["A ligação médica tem como objetivo orientar os pacientes sobre os próximos passos. Ela não é uma consulta.","É importante manter uma voz calma e não causar ansiedade no paciente.","Seja simpático e positivo.","Em situações extremas peça ajuda para fazer a ligação caso tenha dúvidas sobre como abordar o paciente."]},{"bigTitle":null,"title":"DESPEDIDA","subtitle":"Estamos sempre disponíveis para dúvidas.","list":["Se prepare para todo o tipo de dúvida, esse Guia está aqui para isso!","Sempre que estiver em um atendimento digital mantenha a calma e procure a resposta mais adequada para a dúvida do paciente.","Quando estiver em um atendimento telefônico ou presencial, se não souber a resposta, anote o telefone do paciente e ligue mais tarde com a resposta."]}]}],"b":[{"title":"Da Bia","playlist":[{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H1_01_Labi_Exames_Apresenta.mp3","title":"Essa é a Bia","time":"0:24"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H1_02_Conhecendo_o_Labi.mp3","title":"Conhecendo o Labi","time":"0:50"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H1_03_Primeiro_Contato.mp3","title":"Primeiro contato","time":"2:31"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H1_04_Compra_do_Exame.mp3","title":"Compra do exame","time":"1:26"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H1_05_Coleta_do_Exame.mp3","title":"Coleta do exame","time":"1:26"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H1_06_Entrega_do_Resultado.mp3","title":"Entrega do resultado","time":"0:55"}]},{"title":"Da tia Catarina","playlist":[{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H2_01_Labi_Exames_Apresenta.mp3","title":"Essa é a Catarina","time":"0:36"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H2_02_Conhecendo_o_Labi.mp3","title":"Conhecendo o Labi","time":"0:20"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H2_03_Primeiro_Contato.mp3","title":"Primeiro contato","time":"6:54"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H2_04_Compra_do_Exame.mp3","title":"Compra do exame","time":"1:37"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H2_05_Coleta_do_Exame.mp3","title":"Coleta do exame","time":"1:28"},{"src":"https://s3-sa-east-1.amazonaws.com/fredes/uploads/labi/sounds/H2_06_Entrega_do_Resultado.mp3","title":"Entrega do resultado","time":"0:49"}]}]};

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./data/pages/02.json
var _02 = __webpack_require__(28);

// EXTERNAL MODULE: ./components/Common/CollapseSlider.js
var CollapseSlider = __webpack_require__(24);

// EXTERNAL MODULE: ./components/Common/ComponentList.js
var ComponentList = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Common/Link.js
var Link = __webpack_require__(2);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(1);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// EXTERNAL MODULE: ./components/Common/Icon.js
var Icon = __webpack_require__(20);

// CONCATENATED MODULE: ./components/Pages/HistoryCard.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var HistoryCard_HistoryCard =
/*#__PURE__*/
function (_Component) {
  _inherits(HistoryCard, _Component);

  function HistoryCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HistoryCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HistoryCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: false,
      height: 0,
      isPlaying: false,
      position: 0,
      duration: 0,
      currentTime: 0,
      audio: '',
      quantify: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_cardBody", external_react_default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_audio", external_react_default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "componentDidMount", function () {
      if (!_this.props.playlist || !_this.props.playlist.length) return null;

      _this.setState({
        quantify: _this.props.playlist.length
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "controlPlaying", function () {
      _this.setState({
        duration: _this._audio.current.duration
      });

      if (!_this.state.active) return _this.openCard();
      return _this.audioToggle();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateTime", function (_ref) {
      var target = _ref.target;
      var currentTime = target.currentTime;

      if (currentTime === _this.state.duration) {
        var newPosition = _this.state.position + 1;

        if (newPosition < _this.state.quantify) {
          return _this.setPosition(newPosition);
        }

        return null;
      }

      return _this.setState({
        currentTime: currentTime
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openCard", function () {
      var clientHeight = _this._cardBody.current.firstChild.clientHeight;

      _this.setPosition(0);

      return _this.setState({
        active: true,
        height: clientHeight
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "audioToggle", function () {
      if (_this.state.isPlaying) return _this.audioPause();
      return _this.audioPlay();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "audioPlay", function () {
      _this._audio.current.play();

      _this.setState({
        isPlaying: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "audioPause", function () {
      _this._audio.current.pause();

      _this.setState({
        isPlaying: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setAudioSrc", function () {
      _this._audio.current.src = _this.soundSrc;
      _this._audio.current.currentTime = 0;
      setTimeout(function () {
        var duration = _this._audio.current.duration;

        _this.setState({
          duration: _this._audio.current.duration,
          isPlaying: true
        });

        _this._audio.current.play();
      }, 100);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setPosition", function (position) {
      _this.setState({
        position: position,
        currentTime: 0
      });

      setTimeout(function () {
        return _this.setAudioSrc();
      }, 100);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      if (!_this.props.playlist || !_this.props.playlist.length) return null;
      return external_react_default.a.createElement("div", {
        className: external_classnames_default()('PV8 HistoryCard', {
          Active: _this.state.active
        })
      }, external_react_default.a.createElement("div", {
        className: "Card BGWhite"
      }, external_react_default.a.createElement(HistoryCard_CardHead, {
        onClick: _this.controlPlaying,
        title: _this.props.title,
        isPlaying: _this.state.isPlaying
      }), _this.state.active && external_react_default.a.createElement(HistoryCard_ProgressBar, {
        currentTime: _this.state.currentTime,
        duration: _this.state.duration
      }), external_react_default.a.createElement("audio", {
        ref: _this._audio,
        onTimeUpdate: _this.updateTime
      }), external_react_default.a.createElement("div", {
        className: "CardBodyWrapper",
        ref: _this._cardBody,
        style: {
          height: _this.state.height
        }
      }, external_react_default.a.createElement(HistoryCard_CardBody, {
        playlist: _this.props.playlist,
        position: _this.state.position,
        setPosition: _this.setPosition
      }))));
    });

    return _this;
  }

  _createClass(HistoryCard, [{
    key: "soundSrc",
    get: function get() {
      var playlist = this.props.playlist;
      if (!playlist) return null;
      return playlist[this.state.position].src;
    }
  }]);

  return HistoryCard;
}(external_react_["Component"]);



var HistoryCard_CardHead = function CardHead(_ref2) {
  var title = _ref2.title,
      play = _ref2.play,
      isPlaying = _ref2.isPlaying,
      onClick = _ref2.onClick;
  return external_react_default.a.createElement("div", {
    className: "CardHead Flex JCSpaceBetween",
    onClick: onClick
  }, external_react_default.a.createElement("div", {
    className: "FS4x"
  }, external_react_default.a.createElement("div", {
    className: "ColorGray Saira SairaLight MB8"
  }, "Conhe\xE7a a hist\xF3ria"), external_react_default.a.createElement("div", {
    className: "ColorPrimary Saira SairaStrong Uppercase"
  }, title)), external_react_default.a.createElement("div", {
    className: "Pointer"
  }, external_react_default.a.createElement("img", {
    src: "/static/img/ic_playlist_".concat(!isPlaying ? 'play' : 'pause', "_24px.svg")
  })));
};

var HistoryCard_ProgressBar = function ProgressBar(_ref3) {
  var _ref3$currentTime = _ref3.currentTime,
      currentTime = _ref3$currentTime === void 0 ? 0 : _ref3$currentTime,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 1 : _ref3$duration;
  var progress = Math.round(currentTime * 100 / duration) || 0;
  return external_react_default.a.createElement("div", {
    className: "W100 ProgressBar"
  }, external_react_default.a.createElement("div", {
    className: "BGPrimary",
    style: {
      height: 5,
      width: "".concat(progress, "%")
    }
  }));
};

var HistoryCard_CardBody = function CardBody(_ref4) {
  var _ref4$playlist = _ref4.playlist,
      playlist = _ref4$playlist === void 0 ? [] : _ref4$playlist,
      position = _ref4.position,
      setPosition = _ref4.setPosition;
  return external_react_default.a.createElement("div", {
    className: "CardBody"
  }, external_react_default.a.createElement(ComponentList["a" /* default */], {
    component: HistoryCard_Sound,
    componentProps: {
      position: position,
      setPosition: setPosition
    }
  }, playlist));
};

var HistoryCard_Sound = function Sound(_ref5) {
  var title = _ref5.title,
      src = _ref5.src,
      time = _ref5.time,
      index = _ref5.index,
      position = _ref5.position,
      setPosition = _ref5.setPosition;
  var isSelected = index === position;
  var play = {
    active: '/static/img/ic_play_circle_filled_24px.svg',
    disable: '/static/img/ic_play_circle_outline_24px.svg'
  };
  var icon = isSelected ? play.active : play.disable;
  return external_react_default.a.createElement("div", {
    onClick: function onClick() {
      return setPosition(index);
    },
    className: external_classnames_default()('Sound Flex AICenter PV8 JCSpaceBetween Saira TextLeft Pointer', {
      ColorGray: !isSelected,
      ColorPrimary: isSelected
    })
  }, external_react_default.a.createElement("div", {
    className: "ImageBody",
    style: {
      backgroundImage: "url(".concat(icon, ")")
    }
  }), external_react_default.a.createElement("div", {
    className: "W100 PH16"
  }, title), external_react_default.a.createElement("div", null, time), external_react_default.a.createElement("audio", {
    id: "audio",
    preload: "auto"
  }, external_react_default.a.createElement("source", {
    src: src,
    type: "audio/mp3"
  })));
};
// EXTERNAL MODULE: ./components/HTML/H2.js
var H2 = __webpack_require__(7);

// EXTERNAL MODULE: ./components/HTML/H3.js
var H3 = __webpack_require__(25);

// EXTERNAL MODULE: ./components/HTML/P.js
var P = __webpack_require__(3);

// EXTERNAL MODULE: ./components/Views/PageView.js + 2 modules
var PageView = __webpack_require__(14);

// EXTERNAL MODULE: ./components/HTML/Section.js
var Section = __webpack_require__(6);

// EXTERNAL MODULE: ./components/Slider/Slider.js
var Slider = __webpack_require__(16);

// EXTERNAL MODULE: ./components/Slider/Slide.js
var Slide = __webpack_require__(17);

// CONCATENATED MODULE: ./pages/02-colocando-em-pratica.js
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }














/* harmony default export */ var _02_colocando_em_pratica = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(PageView["a" /* default */], _02["c" /* page */], external_react_default.a.createElement(_02_colocando_em_pratica_Section1, null), external_react_default.a.createElement(_02_colocando_em_pratica_Section2, null));
});

var _02_colocando_em_pratica_Section1 = function Section1() {
  return external_react_default.a.createElement("section", {
    className: "PT40"
  }, external_react_default.a.createElement("div", {
    id: "target",
    className: "Container TextCenter PH32 PT2x"
  }, external_react_default.a.createElement(P["a" /* default */], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")), external_react_default.a.createElement(ComponentList["a" /* default */], {
    component: CollapseSlider["a" /* default */],
    componentProps: {
      slideComponent: _02_colocando_em_pratica_SlideFaq
    }
  }, _02["a" /* faq */]));
};

var _02_colocando_em_pratica_SlideFaq = function SlideFaq(_ref, key) {
  var bigTitle = _ref.bigTitle,
      title = _ref.title,
      subtitle = _ref.subtitle,
      list = _ref.list;
  return external_react_default.a.createElement(Slide["a" /* default */], {
    key: key
  }, external_react_default.a.createElement("div", {
    className: "Container",
    style: {
      maxWidth: 380
    }
  }, external_react_default.a.createElement("p", {
    className: "TextLeft FS6x SingleSpace Saira ColorPrimary Medium"
  }, bigTitle), external_react_default.a.createElement(H3["a" /* default */], {
    className: "Light PB8"
  }, title), external_react_default.a.createElement("p", {
    style: {
      minHeight: '2em'
    }
  }, subtitle), external_react_default.a.createElement(_02_colocando_em_pratica_Ul, {
    className: "TextLeft SingleSpace FS2x List ListCheck ColorGray"
  }, list)));
};

var _02_colocando_em_pratica_Ul = function Ul(_ref2) {
  var children = _ref2.children,
      props = _objectWithoutProperties(_ref2, ["children"]);

  if (!children.length) return null;
  return external_react_default.a.createElement("ul", props, children.map(function (child, key) {
    return external_react_default.a.createElement("li", {
      className: "PV4",
      key: key
    }, child);
  }));
};

var _02_colocando_em_pratica_Section2 = function Section2() {
  return external_react_default.a.createElement(Section["a" /* default */], {
    className: "BGSecondary",
    full: true
  }, external_react_default.a.createElement("div", {
    className: "W80"
  }, external_react_default.a.createElement(H2["a" /* default */], null, "Agora, vamos exercitar com hist\xF3rias reais?"), external_react_default.a.createElement(P["a" /* default */], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")), external_react_default.a.createElement(ComponentList["a" /* default */], {
    component: HistoryCard_HistoryCard
  }, _02["b" /* historys */]));
};

/***/ })
/******/ ]);