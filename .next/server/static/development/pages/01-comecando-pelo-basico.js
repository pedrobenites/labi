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
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Link */ "./components/Common/Link.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Common/Button.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      arrow = _ref.arrow,
      props = _objectWithoutProperties(_ref, ["children", "className", "arrow"]);

  var Component = props.href ? _Link__WEBPACK_IMPORTED_MODULE_2__["default"] : 'button';
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Btn', className)
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "InlineBlock",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, children), arrow && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "ML12",
    style: {
      top: 3,
      position: 'relative'
    },
    src: "/static/img/ic_arrow-right.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/Common/Collapse.js":
/*!***************************************!*\
  !*** ./components/Common/Collapse.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Icon */ "./components/Common/Icon.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Common/Collapse.js";

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
        }, 'Collapse'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CollapseHead, {
        style: _this.style,
        onClick: function onClick() {
          return _this.setState({
            open: !_this.state.open
          });
        },
        step: _this.props.step,
        title: _this.props.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CollapseBody",
        style: {
          maxHeight: _this.state.open ? 500 : 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "PT24 PB1x PH16 TextLeft",
        style: _this.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "ColorGray SingleSpace",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, _this.props.description))));
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
    className: "Flex JCSpaceBetween AICenter CollapseHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, step && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Step",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, step), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconPlus, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }));
};

var IconPlus = function IconPlus() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    className: "IconPlus",
    height: "24",
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#522B79",
    d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }));
};

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeMenu", function () {
      return _this.setState({
        open: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('PL24 PR12 Navigation BGPrimary', {
          Open: _this.state.open
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Wrapper",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brand, {
        onClick: _this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
        onClick: _this.closeMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
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
          lineNumber: 18
        },
        __self: this
      })));
    });

    return _this;
  }

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var Brand = function Brand(_ref) {
  var onClick = _ref.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/",
    className: "Brand ColorSecondary Saira SairaStrong FS5x",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/lab_logo.svg",
    alt: "Lab",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }));
};

var Hamburger = function Hamburger(_ref2) {
  var onClick = _ref2.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Hamburger",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }));
};

var Menu = function Menu(_ref3) {
  var onClick = _ref3.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Menu Flex JCCenter AICenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_ComponentList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: MenuItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, _data_navigation_json__WEBPACK_IMPORTED_MODULE_2__)));
};

var MenuItem = function MenuItem(_ref4) {
  var text = _ref4.text,
      number = _ref4.number,
      href = _ref4.href;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "MenuItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: href,
    className: "ColorWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Saira InlineBlock ColorSecondary FS6x Number",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "Saira SairaLight InlineBlock FS4x Text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
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
    className: "BGLightGray P2x",
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
    className: "PV1x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_Button__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "BtnInverted MT4",
    arrow: true,
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
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
    className: "PB3x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Spacer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container PT2x PH32",
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
    className: "ColorWhite SingleSpace Opacity6 PV1x",
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

/***/ "./components/Pages/Thumbnail.js":
/*!***************************************!*\
  !*** ./components/Pages/Thumbnail.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/Pages/Thumbnail.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var src = _ref.src;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Thumbnail PB1x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: src,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })));
});

/***/ }),

/***/ "./components/Slider/Slide.js":
/*!************************************!*\
  !*** ./components/Slider/Slide.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/Slider/Slide.js";

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex AICenter JCCenter TextCenter P1x Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PB24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, children));
});

/***/ }),

/***/ "./components/Slider/Slider.js":
/*!*************************************!*\
  !*** ./components/Slider/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/ricardo/jobs/lab/components/Slider/Slider.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "PT40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PB2x PT40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, sliderSettings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), children)));
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

module.exports = [{"text":"Começando pelo Básico","href":"/01-comecando-pelo-basico","number":"01"},{"text":"Colocando em Prática","href":"/02-colocando-em-pratica","number":"02"},{"text":"Nossa Linguagem","href":"/03-nossa-linguagem","number":"03"},{"text":"Comunicação por Canal","href":"/04-comunicacao-por-canal","number":"04"},{"text":"Respostas Certeiras","href":"/05-respostas-certeiras","number":"05"},{"text":"Glossário","href":"/06-glossario","number":"06"}];

/***/ }),

/***/ "./data/pages/01.json":
/*!****************************!*\
  !*** ./data/pages/01.json ***!
  \****************************/
/*! exports provided: page, faq, default */
/***/ (function(module) {

module.exports = {"page":{"meta":{"title":"Começando pelo básico"},"header":{"number":"01","title":"Começando pelo básico","text":"O básico é o que todos nós precisamos ter na ponta da língua! E, na verdade, até já temos. Mas sempre vale repetir.","cta":"Nossos valores"},"footer":{"href":"/02-colocando-em-pratica"}},"faq":[{"title":"O que fazer","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore."},{"title":"O que evitar","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ut labore."}]};

/***/ }),

/***/ "./pages/01-comecando-pelo-basico.js":
/*!*******************************************!*\
  !*** ./pages/01-comecando-pelo-basico.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/pages/01.json */ "./data/pages/01.json");
var _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/pages/01.json */ "./data/pages/01.json", 1);
/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/Button */ "./components/Common/Button.js");
/* harmony import */ var _components_Common_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/Collapse */ "./components/Common/Collapse.js");
/* harmony import */ var _components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ComponentList */ "./components/Common/ComponentList.js");
/* harmony import */ var _components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HTML/H2 */ "./components/HTML/H2.js");
/* harmony import */ var _components_HTML_P__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HTML/P */ "./components/HTML/P.js");
/* harmony import */ var _components_Views_PageView__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Views/PageView */ "./components/Views/PageView.js");
/* harmony import */ var _components_HTML_Section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HTML/Section */ "./components/HTML/Section.js");
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Slider/Slider */ "./components/Slider/Slider.js");
/* harmony import */ var _components_Slider_Slide__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Slider/Slide */ "./components/Slider/Slide.js");
/* harmony import */ var _components_Pages_Thumbnail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Pages/Thumbnail */ "./components/Pages/Thumbnail.js");
var _jsxFileName = "/home/ricardo/jobs/lab/pages/01-comecando-pelo-basico.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Views_PageView__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1__["page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
});

var Section1 = function Section1() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide3, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
};

var Slide1 = function Slide1() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira FS80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "a."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "FS6x ColorGray PV2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "N\xE3o medimos esfor\xE7os para ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "ColorPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "cuidar do nosso cliente"), " e ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    className: "ColorPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "todos os detalhes importam"), "."));
};

var Slide2 = function Slide2() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira FS80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "b."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "FS6x ColorGray PV2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "N\xE3o medimos esfor\xE7os para."));
};

var Slide3 = function Slide3() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira FS80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "c."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "FS6x ColorGray PV2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "N\xE3o medimos esfor\xE7os para."));
};

var Section2 = function Section2() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "BGSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Mas o que importa \xE9 transformar palavras em a\xE7\xE3o, n\xE3o \xE9 mesmo?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Transformamos os nossos valores em 3 pilares, que s\xE3o a nossa f\xF3rmula secreta parade como garantir que todos eles estar\xE3o presentes no nosso dia-a-dia SEMPRE!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "BtnOutlineInverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Nossos pilares"));
};

var Section3 = function Section3() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "TextCenter BGWhite",
    full: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "W80 MHAuto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Pages_Thumbnail__WEBPACK_IMPORTED_MODULE_11__["default"], {
    src: "http://www.clinicaacolher.com.br/uploads/images/paginas/6.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Acolher"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Fazemos os pacientes se sentirem especiais com um tratamento emp\xE1tico e humanizado.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: _components_Common_Collapse__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1__["faq"]));
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
/*!*************************************************!*\
  !*** multi ./pages/01-comecando-pelo-basico.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/01-comecando-pelo-basico.js */"./pages/01-comecando-pelo-basico.js");


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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ })

/******/ });
//# sourceMappingURL=01-comecando-pelo-basico.js.map