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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["children", "className", "icon"]);

  var Component = props.href ? _Link__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"] : 'button';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Btn', className, {
      BtnIcon: icon
    })
  }, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "InlineBlock"
  }, children), icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    name: icon,
    size: 2
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (Button);

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

/* harmony default export */ __webpack_exports__["a"] = (Icon);

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ColorBlack SingleSpace PV1x Opacity5', className)
  }, children);
});

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
var stylus = __webpack_require__(14);

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return external_react_default.a.createElement("nav", {
        className: external_classnames_default()('PL24 PR12 Navigation BGPrimary', {
          Open: _this.state.open
        })
      }, external_react_default.a.createElement("div", {
        className: "Wrapper"
      }, external_react_default.a.createElement(Navigation_Brand, null), external_react_default.a.createElement(Navigation_Menu, null), external_react_default.a.createElement(Navigation_Hamburger, {
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



var Navigation_Brand = function Brand() {
  return external_react_default.a.createElement(Link["a" /* default */], {
    href: "/",
    className: "Brand ColorSecondary Saira SairaStrong FS5x"
  }, "Labi");
};

var Navigation_Hamburger = function Hamburger(_ref) {
  var onClick = _ref.onClick;
  return external_react_default.a.createElement("div", {
    className: "Hamburger",
    onClick: onClick
  }, external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null), external_react_default.a.createElement("span", null));
};

var Navigation_Menu = function Menu() {
  return external_react_default.a.createElement("div", {
    className: "Menu Flex JCCenter AICenter"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement(ComponentList["a" /* default */], {
    component: Navigation_MenuItem
  }, navigation)));
};

var Navigation_MenuItem = function MenuItem(_ref2) {
  var text = _ref2.text,
      number = _ref2.number,
      href = _ref2.href;
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Views/MainView.js + 1 modules
var MainView = __webpack_require__(12);

// EXTERNAL MODULE: ./components/Common/Button.js
var Button = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Pages/SectionHeader.js


/* harmony default export */ var SectionHeader = (function (_ref) {
  var className = _ref.className,
      number = _ref.number,
      title = _ref.title,
      text = _ref.text,
      cta = _ref.cta;
  return external_react_default.a.createElement("header", {
    className: "Spacer"
  }, external_react_default.a.createElement("div", {
    className: "Container PT2x PH16"
  }, external_react_default.a.createElement("div", {
    className: "W80"
  }, external_react_default.a.createElement("div", {
    className: "ColorSecondary Saira FS80"
  }, number), external_react_default.a.createElement("h1", {
    className: "ColorWhite PT8 Saira SairaLight FS8x"
  }, title), external_react_default.a.createElement("p", {
    className: "ColorWhite SingleSpace Opacity6 PV2x"
  }, text), external_react_default.a.createElement(Button["a" /* default */], {
    className: "BtnOutline"
  }, cta))));
});
// EXTERNAL MODULE: ./components/HTML/H2.js
var H2 = __webpack_require__(7);

// EXTERNAL MODULE: ./components/HTML/P.js
var P = __webpack_require__(8);

// EXTERNAL MODULE: ./components/HTML/Section.js
var Section = __webpack_require__(6);

// CONCATENATED MODULE: ./components/Pages/SectionFooter.js





/* harmony default export */ var SectionFooter = (function (_ref) {
  var href = _ref.href,
      remove = _ref.remove;
  if (remove) return null;
  return external_react_default.a.createElement(Section["a" /* default */], {
    className: "BGLightGray"
  }, external_react_default.a.createElement(H2["a" /* default */], null, "Vamos adiante?"), external_react_default.a.createElement(P["a" /* default */], null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore."), external_react_default.a.createElement(Button["a" /* default */], {
    className: "BtnInverted",
    icon: "arrow-right",
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
/* 14 */
/***/ (function(module, exports) {



/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module) {

module.exports = {"b":{"meta":{"title":"Glossário"},"header":{"number":"06","title":"Glossário","text":"O Glossário vai nos ajudar a unificar a nossa comunicação. Ele demonstra qual é o melhor termo a ser utilizado em cada situação. É uma lista de palavras importantes, do nosso dia- a- dia, que TODOS devemos saber o que significam.","cta":"Nosso ABC"},"footer":{"remove":true}},"a":[{"letter":"C","list":[{"title":"Check-up","text":"Check-up é o nome dado ao conjunto de exames que são vendidos juntos e por estilo de vida."},{"title":"Colaborador","text":"É a nossa maneira de chamar todas as pessoas que trabalham no Labi."},{"title":"Coleta Domiciliar","text":"Nossa maneira de chamar os exames na casa dos pacientes."},{"title":"Coletor","text":"É como chamamos o profissional que coletam as amostras de sangue."}]},{"letter":"E","list":[{"title":"Equipe","text":"É nossa maneira de nos referirmos ao conjunto de todas as pessoas que trabalham no Labi, a equipe Labi. Ou, então, como chamamos as pessoas que atuam na mesma área: equipe de marketing, equipe financeira, equipe de vendas, equipe da central de atendimentos…"},{"title":"Especialistas","text":"É como nos referimos aos colaboradores que trabalham na área técnica."},{"title":"Exames","text":"Exames são todos os procedimentos individuais que nós realizamos. Um paciente pode realizar 1 exames ou vários. Cada um deles precisa estar discriminado na ficha."},{"title":"Exames de Análises Clínicas","text":"Exames de análises clínicas é o nome dado ao tipo de exame que nós realizamos, ou seja, exames de sangue, urina e fezes."}]},{"letter":"L","list":[{"title":"Laboratório","text":"Nos referimos ao Labi como um laboratório de coleta de exames de análises clínicas."}]},{"letter":"P","list":[{"title":"Pedido Médico","text":"É a nossa maneira de falar prescrição médica, requisição."}]},{"letter":"U","list":[{"title":"Unidades","text":"É como chamamos as nossas unidades físicas de coleta de exames."}]}]};

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports) {

module.exports = require("rc-scroll-anim");

/***/ }),
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./data/pages/06.json
var _06 = __webpack_require__(22);

// EXTERNAL MODULE: ./components/Common/Button.js
var Button = __webpack_require__(3);

// EXTERNAL MODULE: ./components/HTML/H2.js
var H2 = __webpack_require__(7);

// EXTERNAL MODULE: ./components/Common/ComponentList.js
var ComponentList = __webpack_require__(4);

// EXTERNAL MODULE: ./components/Common/Link.js
var Link = __webpack_require__(2);

// EXTERNAL MODULE: ./components/HTML/P.js
var P = __webpack_require__(8);

// EXTERNAL MODULE: ./components/Views/PageView.js + 2 modules
var PageView = __webpack_require__(13);

// EXTERNAL MODULE: ./components/HTML/Section.js
var Section = __webpack_require__(6);

// EXTERNAL MODULE: external "rc-scroll-anim"
var external_rc_scroll_anim_ = __webpack_require__(28);
var external_rc_scroll_anim_default = /*#__PURE__*/__webpack_require__.n(external_rc_scroll_anim_);

// CONCATENATED MODULE: ./components/Common/ScrollTo.js

/* harmony default export */ var ScrollTo = (external_rc_scroll_anim_default.a.Link);
// CONCATENATED MODULE: ./pages/06-glossario.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var summary = _06["a" /* glossary */].map(function (_ref) {
  var letter = _ref.letter;
  return {
    letter: letter
  };
});
/* harmony default export */ var _06_glossario = __webpack_exports__["default"] = (function () {
  return external_react_default.a.createElement(PageView["a" /* default */], _extends({}, _06["b" /* page */], {
    className: "BGWhite"
  }), external_react_default.a.createElement("div", {
    className: "PT40"
  }), external_react_default.a.createElement(_06_glossario_SectionGlossary, null), external_react_default.a.createElement(_06_glossario_LastSection, null));
});

var _06_glossario_SectionGlossary = function SectionGlossary() {
  return external_react_default.a.createElement("section", {
    className: "PV2x"
  }, external_react_default.a.createElement("div", {
    className: "PV24 AutoSlider"
  }, external_react_default.a.createElement("div", {
    className: "Flex Wrapper"
  }, external_react_default.a.createElement("div", {
    className: "MAuto Flex JCCenter PH24"
  }, external_react_default.a.createElement(ComponentList["a" /* default */], {
    component: _06_glossario_Summary
  }, summary)))), external_react_default.a.createElement("div", {
    className: "Container"
  }, external_react_default.a.createElement(ComponentList["a" /* default */], {
    component: _06_glossario_Collection
  }, _06["a" /* glossary */])));
};

var _06_glossario_Summary = function Summary(_ref2) {
  var letter = _ref2.letter;
  return external_react_default.a.createElement(ScrollTo, {
    to: letter,
    offsetTop: 100,
    className: "Card BGLightGray M8 ColorPrimary Saira Pointer"
  }, letter);
};

var _06_glossario_Collection = function Collection(_ref3) {
  var letter = _ref3.letter,
      list = _ref3.list;
  return external_react_default.a.createElement("div", {
    id: letter,
    className: "PV1x TextCenter W80 MAuto"
  }, external_react_default.a.createElement("div", {
    className: "Saira FS80 ColorPrimary"
  }, letter), external_react_default.a.createElement(ComponentList["a" /* default */], {
    component: _06_glossario_CollectionItem
  }, list));
};

var _06_glossario_CollectionItem = function CollectionItem(_ref4) {
  var title = _ref4.title,
      text = _ref4.text;
  return external_react_default.a.createElement("div", {
    className: "PV1x"
  }, external_react_default.a.createElement("div", {
    className: "Saira ColorPrimary FS6x PT16"
  }, title), external_react_default.a.createElement("p", {
    className: "ColorGray SingleSpace P0"
  }, text));
};

var _06_glossario_LastSection = function LastSection() {
  return external_react_default.a.createElement(Section["a" /* default */], {
    className: "BGSecondary"
  }, external_react_default.a.createElement(H2["a" /* default */], null, "Tem alguma palavra que voc\xEA gostaria de acrescentar aqui?"), external_react_default.a.createElement(P["a" /* default */], null, "Basta mandar um e-mail para", ' ', external_react_default.a.createElement(Link["a" /* default */], {
    href: "mailto:glossario@labiexames.com"
  }, "glossario@labiexames.com"), ' ', "com a palavra, o seu significado e porque voc\xEA acha que ela deveria estar no nosso gloss\xE1rio!"), external_react_default.a.createElement(Button["a" /* default */], {
    href: "/",
    className: "BtnOutlineInverted"
  }, "Nosso pilares"), external_react_default.a.createElement(Button["a" /* default */], {
    href: "/",
    icon: "arrow-right",
    className: "BtnInverted MT16"
  }, "Voltar ao in\xEDcio"));
};

/***/ })
/******/ ]);