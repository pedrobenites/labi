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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
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
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dangerous_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony import */ var react_dangerous_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dangerous_html__WEBPACK_IMPORTED_MODULE_1__);


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_dangerous_html__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
    html: children
  }, props));
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("react-dangerous-html");

/***/ }),
/* 24 */,
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
/* 26 */
/***/ (function(module) {

module.exports = {"c":{"meta":{"title":"Nossa linguagem"},"header":{"number":"03","title":"Nossa linguagem","text":"Nós sabemos que cada pessoa tem seu jeito de falar, mas quando falamos pelo Labi estamos representando todas as pessoas que trabalham com a gente. Por isso, precisamos TODOS falar a mesma língua!","cta":"Nossa linguagem"},"footer":{"href":"/04-comunicacao-por-canal"}},"d":[{"title":"Nós falamos o português correto sempre","comparativeList":[{"title":"Acentos","yes":"você, horário, médico, avó, pudéssemos…","not":"voce, horario, medico, avo, pudessemos…"},{"title":"Vírgulas","yes":"Boa tarde, como posso lhe ajudar?","not":"Boa tarde como posso lhe ajudar"},{"title":"Pontuação","yes":["Obrigada!","Até o seu exame."],"not":["Obrigada","Ate o seu exame"]},{"title":"Abreviações","yes":["você","por favor","tudo bem","sempre","estou"],"not":["vc","pfv","td","smp","to"]}]},{"title":"Nós usamos os seguintes emojis","list":["😉 Winking face","👩 Woman health worker: medium skin tone","😌 Smiling face with smiling eyes","🍀 Four leaf clover","😁 Beaming face with smiling eyes","👉 Backhand index pointing right"],"text":"O 🍀 é um emoji especial, que só pode ser utilizado para desejar boa a sorte a pessoas inscritas nos nossos processos seletivos.","warning":{"title":"E não se esqueça:","text":"Nunca deseje boa sorte a um paciente."}},{"title":"Nós somos próximos e acolhedores sempre","comparativeList":[{"title":"Pronomes","yes":["você","lhe",""],"not":["Sr. Sra.","Srta.","Tu"]},{"title":"Exemplo","yes":["Como eu posso lhe ajudar?","Como você está?","Você precisa de alguma ajuda?","Quer que eu lhe alcance?"],"not":["Como eu posso ajudar a Sra.?","Como o Sr. está?","Tu precisa de alguma ajuda?","Quer que eu alcance para Srta.?"]}]}],"a":{"title":"NOSSA LINGUAGEM ATIVA","slide1":{"list":["Quando nós <strong>começamos</strong> uma conversa.","Quando estamos <strong>entrando em contato</strong> com alguém pelo telefone, e-mail ou redes sociais.","Quando <strong>abordamos alguém</strong> para oferecer ajuda ou passar informação."]},"slide2":{"text":"Quando estamos nos comunicando de forma ativa precisamos focar nos scripts do Guia de Comunicação, usar uma linguagem mais formal.","listTitle":"Nesse caso, nunca usamos:","maxWidth":280,"list":["Gifs","Emojis","Mensagens de Áudio"]}},"b":{"title":"NOSSA LINGUAGEM REATIVA","slide1":{"list":["Quando <strong>outra pessoa começa uma conversa</strong> com a gente.","Quando um <strong>paciente nos chama</strong> em algum dos nossos canais de atendimento.","Quando pacientes <strong>interagem conosco</strong> nas nossas redes sociais <strong>de forma espontânea</strong>."]},"slide2":{"text":"Quando estamos nos comunicando de forma reativa podemos nos adaptar a forma de linguagem do paciente. Essa técnica transparece empatia e permite que o paciente se sinta mais confortável.","listTitle":"Por exemplo:","list":["Se um paciente lhe mandar gifs você pode respondê-lo com gifs","Se um paciente lhe emojis você pode respondê-lo com emojis, desde que sejam os nossos emojis!","Se um paciente se comunicar por mensagens de áudio você pode respondê-los com mensagens de áudio. Fique atento muitos pacientes usam essas mensagens quando tem dificuldade de leitura."]}}};

/***/ }),
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(38);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(26);
var _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(26, 1);
/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var _components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _components_HTML_H3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _components_HTML_HTML__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(22);
/* harmony import */ var _components_HTML_P__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3);
/* harmony import */ var _components_Views_PageView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(14);
/* harmony import */ var _components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8);
/* harmony import */ var _components_HTML_Section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
/* harmony import */ var _components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(17);
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(16);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Views_PageView__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__[/* page */ "c"], react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section1, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section2, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionLinguage, _extends({}, _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__[/* linguage1 */ "a"], {
    className: "BGLightGray"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionLinguage, _extends({}, _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__[/* linguage2 */ "b"], {
    className: "BGWhite"
  })));
});

var Section1 = function Section1() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_13__[/* default */ "b"], {
    id: "target"
  }, _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__[/* slides */ "d"].map(SlideLinguages));
};

var SlideLinguages = function SlideLinguages(_ref, key) {
  var title = _ref.title,
      _ref$comparativeList = _ref.comparativeList,
      comparativeList = _ref$comparativeList === void 0 ? [] : _ref$comparativeList,
      otherSlide = _objectWithoutProperties(_ref, ["title", "comparativeList"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], {
    key: key
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      maxWidth: 400
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PV2x"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    component: Comparative
  }, comparativeList), otherSlide && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(OtherSlide, otherSlide))));
};

var OtherSlide = function OtherSlide(_ref2) {
  var list = _ref2.list,
      text = _ref2.text,
      warning = _ref2.warning;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorGray FS3x SingleSpace"
  }, list && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " PV1x MHAuto",
    style: {
      maxWidth: 310
    }
  }, list.map(function (item, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: key,
      className: "TextLeft"
    }, item);
  })), text && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: " PV1x"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, text)), warning && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Saira LightColorPrimary"
  }, warning.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, warning.text)));
};

var Comparative = function Comparative(_ref3) {
  var title = _ref3.title,
      yes = _ref3.yes,
      not = _ref3.not;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PV8"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira Medium PV8 Absolute W100 TextCenter"
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex JCSpaceBetween AICenter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComparativeColumn, {
    style: {
      borderRight: '1px solid #DDD'
    },
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconCheck, null),
    texts: yes
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComparativeColumn, {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconClose, null),
    texts: not
  })));
};

var ComparativeColumn = function ComparativeColumn(_ref4) {
  var texts = _ref4.texts,
      icon = _ref4.icon,
      style = _ref4.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "W100 PH16",
    style: style
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      transform: 'translateY(-24px)'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PT8 PH8 ColorGray FS2x",
    style: {
      marginBottom: -24
    }
  }, typeof texts === 'string' ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, texts) : texts && texts.map(function (text, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: key
    }, text);
  }))));
};

var Section2 = function Section2() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], {
    className: "BGSecondary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, "T\xEDtulo lorem ipsum sobre linguagem ativa e passiva"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, "N\xF3s praticamos 2 tipos de linguagem, a ATIVA e a REATIVA. Elas permitem que n\xF3s sejamos acolhedores sem desrespeitar as nossas regras de linguagem."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    to: "linguagem",
    offsetTop: 80
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: "BtnOutlineInverted"
  }, "Vamos l\xE1")));
};

var SectionLinguage = function SectionLinguage(_ref5) {
  var slide1 = _ref5.slide1,
      slide2 = _ref5.slide2,
      title = _ref5.title,
      className = _ref5.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "linguagem",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'PT3x')
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TextCenter"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H3__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    className: "Medium"
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_13__[/* default */ "b"], {
    fix: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide1, slide1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide2, slide2)));
};

var Slide1 = function Slide1(_ref6) {
  var list = _ref6.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    component: Step
  }, parseList(list)));
};

var parseList = function parseList(list) {
  return list.map(function (text) {
    return {
      text: text
    };
  });
};

var Step = function Step(_ref7) {
  var index = _ref7.index,
      text = _ref7.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex JCCenter PB16 TextLeft"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex AICenter W100",
    style: {
      maxWidth: 400
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira SairaLight FS9x FlexGrow"
  }, index + 1, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_HTML__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    className: "W80 SingleSpace ColorGray"
  }, text)));
};

var Slide2 = function Slide2(_ref8) {
  var text = _ref8.text,
      listTitle = _ref8.listTitle,
      list = _ref8.list,
      maxWidth = _ref8.maxWidth;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Saira Light ColorPrimary FS4x PB24"
  }, listTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    component: Li,
    componentProps: {
      maxWidth: maxWidth
    }
  }, parseList(list)));
};

var Li = function Li(_ref9) {
  var text = _ref9.text,
      _ref9$maxWidth = _ref9.maxWidth,
      maxWidth = _ref9$maxWidth === void 0 ? 600 : _ref9$maxWidth;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex TextLeft MHAuto",
    style: {
      maxWidth: maxWidth
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PR16 ColorPrimary"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#522b79",
    d: "M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ColorBlack SingleSpace Opacity5 FS2x PB8 M0"
  }, text));
};

var IconClose = function IconClose() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#F28D8D",
    d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
  }));
};

var IconCheck = function IconCheck() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#9CDB9C",
    d: "M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z"
  }));
};

/***/ })
/******/ ]);