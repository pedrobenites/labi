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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Common/Button.js":
/*!*************************************!*\
  !*** ./components/Common/Button.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./components/Common/Icon.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Common/Link.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Common/Button.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      icon = _ref.icon,
      props = _objectWithoutProperties(_ref, ["children", "className", "icon"]);

  var Component = props.href ? _Link__WEBPACK_IMPORTED_MODULE_3__["default"] : 'button';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Btn', className, {
      BtnIcon: icon
    })
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "InlineBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, children), icon && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Icon__WEBPACK_IMPORTED_MODULE_2__["default"], {
    name: icon,
    size: 2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Common/ComponentList.js":
/*!********************************************!*\
  !*** ./components/Common/ComponentList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/Common/ComponentList.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      Component = _ref.component,
      componentProps = _ref.componentProps;
  return children.map(function (props, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
      key: i,
      index: i
    }, componentProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      },
      __self: this
    }));
  });
});

/***/ }),

/***/ "./components/Common/Icon.js":
/*!***********************************!*\
  !*** ./components/Common/Icon.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/Common/Icon.js";

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
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("mdi mdi-".concat(name), _defineProperty({}, "mdi-".concat(fontSize[size], "px"), size)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Icon);

/***/ }),

/***/ "./components/Common/Link.js":
/*!***********************************!*\
  !*** ./components/Common/Link.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/Common/Link.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      href = _ref.href,
      props = _objectWithoutProperties(_ref, ["children", "href"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), children));
});

/***/ }),

/***/ "./components/Common/ScrollTo.js":
/*!***************************************!*\
  !*** ./components/Common/ScrollTo.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rc_scroll_anim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rc-scroll-anim */ "rc-scroll-anim");
/* harmony import */ var rc_scroll_anim__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rc_scroll_anim__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (rc_scroll_anim__WEBPACK_IMPORTED_MODULE_0___default.a.Link);

/***/ }),

/***/ "./components/HTML/H2.js":
/*!*******************************!*\
  !*** ./components/HTML/H2.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/HTML/H2.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "ColorPrimary Saira SairaLight FS7x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "./components/HTML/P.js":
/*!******************************!*\
  !*** ./components/HTML/P.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/HTML/P.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className,
      children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('ColorBlack SingleSpace PV1x Opacity5', className),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, children);
});

/***/ }),

/***/ "./components/HTML/Section.js":
/*!************************************!*\
  !*** ./components/HTML/Section.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/HTML/Section.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      full = _ref.full,
      props = _objectWithoutProperties(_ref, ["children", "full"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container P2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()({
      W80: !full
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, children)));
});

/***/ }),

/***/ "./components/Navigation/Navigation.js":
/*!*********************************************!*\
  !*** ./components/Navigation/Navigation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_navigation_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/navigation.json */ "./data/navigation.json");
var _data_navigation_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../data/navigation.json */ "./data/navigation.json", 1);
/* harmony import */ var _Common_ComponentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/ComponentList */ "./components/Common/ComponentList.js");
/* harmony import */ var _Common_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/Link */ "./components/Common/Link.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Navigation/Navigation.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Navigation =
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
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('PL24 PR12 Navigation BGPrimary', {
          Open: _this.state.open
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brand, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Hamburger, {
        onClick: function onClick() {
          return _this.setState({
            open: !_this.state.open
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      })));
    });

    return _this;
  }

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var Brand = function Brand() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    className: "Brand ColorSecondary Saira SairaStrong FS5x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Labi");
};

var Hamburger = function Hamburger(_ref) {
  var onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Hamburger",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }));
};

var Menu = function Menu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Menu Flex JCCenter AICenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_ComponentList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: MenuItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, _data_navigation_json__WEBPACK_IMPORTED_MODULE_2__)));
};

var MenuItem = function MenuItem(_ref2) {
  var text = _ref2.text,
      number = _ref2.number,
      href = _ref2.href;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MenuItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: href,
    className: "ColorWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Saira InlineBlock ColorSecondary FS6x Number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Saira SairaLight InlineBlock FS4x Text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, text)));
};

/***/ }),

/***/ "./components/Pages/SectionFooter.js":
/*!*******************************************!*\
  !*** ./components/Pages/SectionFooter.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Button */ "./components/Common/Button.js");
/* harmony import */ var _HTML_H2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../HTML/H2 */ "./components/HTML/H2.js");
/* harmony import */ var _HTML_P__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../HTML/P */ "./components/HTML/P.js");
/* harmony import */ var _HTML_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../HTML/Section */ "./components/HTML/Section.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Pages/SectionFooter.js";





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var href = _ref.href,
      remove = _ref.remove;
  if (remove) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HTML_Section__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "BGLightGray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HTML_H2__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Vamos adiante?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HTML_P__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "BtnInverted",
    icon: "arrow-right",
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Pr\xF3ximo cap\xEDtulo"));
});

/***/ }),

/***/ "./components/Pages/SectionHeader.js":
/*!*******************************************!*\
  !*** ./components/Pages/SectionHeader.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Common_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/Button */ "./components/Common/Button.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Pages/SectionHeader.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var className = _ref.className,
      number = _ref.number,
      title = _ref.title,
      text = _ref.text,
      cta = _ref.cta;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "Spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container PT2x PH16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "W80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorSecondary Saira FS80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "ColorWhite PT8 Saira SairaLight FS8x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ColorWhite SingleSpace Opacity6 PV2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "BtnOutline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, cta))));
});

/***/ }),

/***/ "./components/Views/MainView.js":
/*!**************************************!*\
  !*** ./components/Views/MainView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stylus_index_styl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../stylus/index.styl */ "./stylus/index.styl");
/* harmony import */ var _stylus_index_styl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stylus_index_styl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Navigation/Navigation */ "./components/Navigation/Navigation.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Views/MainView.js";





var MainView = function MainView(_ref) {
  var children = _ref.children,
      title = _ref.title,
      description = _ref.description,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Labi Exames | ", title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navigation_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (MainView);

/***/ }),

/***/ "./components/Views/PageView.js":
/*!**************************************!*\
  !*** ./components/Views/PageView.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainView */ "./components/Views/MainView.js");
/* harmony import */ var _Pages_SectionHeader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Pages/SectionHeader */ "./components/Pages/SectionHeader.js");
/* harmony import */ var _Pages_SectionFooter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Pages/SectionFooter */ "./components/Pages/SectionFooter.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Views/PageView.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      meta = _ref.meta,
      header = _ref.header,
      footer = _ref.footer,
      className = _ref.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainView__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, meta, {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_SectionHeader__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Pages_SectionFooter__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({}, footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
});

/***/ }),

/***/ "./data/navigation.json":
/*!******************************!*\
  !*** ./data/navigation.json ***!
  \******************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, default */
/***/ (function(module) {

module.exports = [{"text":"Começando pelo Básico","href":"01-comecando-pelo-basico","number":"01"},{"text":"Colocando em Prática","href":"02-colocando-em-pratica","number":"02"},{"text":"Nossa Linguagem","href":"03-nossa-linguagem","number":"03"},{"text":"Comunicação por Canal","href":"04-comunicacao-por-canal","number":"04"},{"text":"Respostas Certeiras","href":"05-respostas-certeiras","number":"05"},{"text":"Glossário","href":"06-glossario","number":"06"}];

/***/ }),

/***/ "./data/pages/06.json":
/*!****************************!*\
  !*** ./data/pages/06.json ***!
  \****************************/
/*! exports provided: page, glossary, default */
/***/ (function(module) {

module.exports = {"page":{"meta":{"title":"Glossário"},"header":{"number":"06","title":"Glossário","text":"O Glossário vai nos ajudar a unificar a nossa comunicação. Ele demonstra qual é o melhor termo a ser utilizado em cada situação. É uma lista de palavras importantes, do nosso dia- a- dia, que TODOS devemos saber o que significam.","cta":"Nosso ABC"},"footer":{"remove":true}},"glossary":[{"letter":"C","list":[{"title":"Check-up","text":"Check-up é o nome dado ao conjunto de exames que são vendidos juntos e por estilo de vida."},{"title":"Colaborador","text":"É a nossa maneira de chamar todas as pessoas que trabalham no Labi."},{"title":"Coleta Domiciliar","text":"Nossa maneira de chamar os exames na casa dos pacientes."},{"title":"Coletor","text":"É como chamamos o profissional que coletam as amostras de sangue."}]},{"letter":"E","list":[{"title":"Equipe","text":"É nossa maneira de nos referirmos ao conjunto de todas as pessoas que trabalham no Labi, a equipe Labi. Ou, então, como chamamos as pessoas que atuam na mesma área: equipe de marketing, equipe financeira, equipe de vendas, equipe da central de atendimentos…"},{"title":"Especialistas","text":"É como nos referimos aos colaboradores que trabalham na área técnica."},{"title":"Exames","text":"Exames são todos os procedimentos individuais que nós realizamos. Um paciente pode realizar 1 exames ou vários. Cada um deles precisa estar discriminado na ficha."},{"title":"Exames de Análises Clínicas","text":"Exames de análises clínicas é o nome dado ao tipo de exame que nós realizamos, ou seja, exames de sangue, urina e fezes."}]},{"letter":"L","list":[{"title":"Laboratório","text":"Nos referimos ao Labi como um laboratório de coleta de exames de análises clínicas."}]},{"letter":"P","list":[{"title":"Pedido Médico","text":"É a nossa maneira de falar prescrição médica, requisição."}]},{"letter":"U","list":[{"title":"Unidades","text":"É como chamamos as nossas unidades físicas de coleta de exames."}]}]};

/***/ }),

/***/ "./pages/06-glossario.js":
/*!*******************************!*\
  !*** ./pages/06-glossario.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_pages_06_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/pages/06.json */ "./data/pages/06.json");
var _data_pages_06_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/pages/06.json */ "./data/pages/06.json", 1);
/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/Button */ "./components/Common/Button.js");
/* harmony import */ var _components_HTML_H2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/HTML/H2 */ "./components/HTML/H2.js");
/* harmony import */ var _components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ComponentList */ "./components/Common/ComponentList.js");
/* harmony import */ var _components_Common_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Common/Link */ "./components/Common/Link.js");
/* harmony import */ var _components_HTML_P__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HTML/P */ "./components/HTML/P.js");
/* harmony import */ var _components_Views_PageView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Views/PageView */ "./components/Views/PageView.js");
/* harmony import */ var _components_HTML_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HTML/Section */ "./components/HTML/Section.js");
/* harmony import */ var _components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Common/ScrollTo */ "./components/Common/ScrollTo.js");
var _jsxFileName = "/home/ricardo/jobs/lab/pages/06-glossario.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }











var summary = _data_pages_06_json__WEBPACK_IMPORTED_MODULE_1__["glossary"].map(function (_ref) {
  var letter = _ref.letter;
  return {
    letter: letter
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Views_PageView__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _data_pages_06_json__WEBPACK_IMPORTED_MODULE_1__["page"], {
    className: "BGWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PT40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionGlossary, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LastSection, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
});

var SectionGlossary = function SectionGlossary() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "PV2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PV24 AutoSlider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex Wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MAuto Flex JCCenter PH24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Summary,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, summary)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Collection,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, _data_pages_06_json__WEBPACK_IMPORTED_MODULE_1__["glossary"])));
};

var Summary = function Summary(_ref2) {
  var letter = _ref2.letter;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    to: letter,
    offsetTop: 100,
    className: "Card BGLightGray M8 ColorPrimary Saira Pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, letter);
};

var Collection = function Collection(_ref3) {
  var letter = _ref3.letter,
      list = _ref3.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: letter,
    className: "PV1x TextCenter W80 MAuto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Saira FS80 ColorPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, letter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: CollectionItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, list));
};

var CollectionItem = function CollectionItem(_ref4) {
  var title = _ref4.title,
      text = _ref4.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PV1x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Saira ColorPrimary FS6x PT16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ColorGray SingleSpace P0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, text));
};

var LastSection = function LastSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "BGSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Tem alguma palavra que voc\xEA gostaria de acrescentar aqui?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Basta mandar um e-mail para", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "mailto:glossario@labiexames.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "glossario@labiexames.com"), ' ', "com a palavra, o seu significado e porque voc\xEA acha que ela deveria estar no nosso gloss\xE1rio!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    className: "BtnOutlineInverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Nosso pilares"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    icon: "arrow-right",
    className: "BtnInverted MT16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Voltar ao in\xEDcio"));
};

/***/ }),

/***/ "./stylus/index.styl":
/*!***************************!*\
  !*** ./stylus/index.styl ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** multi ./pages/06-glossario.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/06-glossario.js */"./pages/06-glossario.js");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "rc-scroll-anim":
/*!*********************************!*\
  !*** external "rc-scroll-anim" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rc-scroll-anim");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=06-glossario.js.map