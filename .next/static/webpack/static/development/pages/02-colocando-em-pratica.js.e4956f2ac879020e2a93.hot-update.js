webpackHotUpdate("static/development/pages/02-colocando-em-pratica.js",{

/***/ "./pages/02-colocando-em-pratica.js":
/*!******************************************!*\
  !*** ./pages/02-colocando-em-pratica.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_pages_02_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/pages/02.json */ "./data/pages/02.json");
var _data_pages_02_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/pages/02.json */ "./data/pages/02.json", 1);
/* harmony import */ var _components_Common_Collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/Collapse */ "./components/Common/Collapse.js");
/* harmony import */ var _components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/ComponentList */ "./components/Common/ComponentList.js");
/* harmony import */ var _components_Common_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/Link */ "./components/Common/Link.js");
/* harmony import */ var _components_Pages_HistoryCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Pages/HistoryCard */ "./components/Pages/HistoryCard.js");
/* harmony import */ var _components_HTML_H2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HTML/H2 */ "./components/HTML/H2.js");
/* harmony import */ var _components_HTML_H3__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HTML/H3 */ "./components/HTML/H3.js");
/* harmony import */ var _components_HTML_P__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HTML/P */ "./components/HTML/P.js");
/* harmony import */ var _components_Views_PageView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Views/PageView */ "./components/Views/PageView.js");
/* harmony import */ var _components_HTML_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/HTML/Section */ "./components/HTML/Section.js");
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Slider/Slider */ "./components/Slider/Slider.js");
/* harmony import */ var _components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Slider/Slide */ "./components/Slider/Slide.js");
var _jsxFileName = "/home/ricardo/jobs/lab/pages/02-colocando-em-pratica.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Views_PageView__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, _data_pages_02_json__WEBPACK_IMPORTED_MODULE_1__["page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
});

var Section1 = function Section1() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "PT40",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Container TextCenter PH32 PT2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: CollapseSlider,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, _data_pages_02_json__WEBPACK_IMPORTED_MODULE_1__["faq"]));
};

var CollapseSlider = function CollapseSlider(_ref) {
  var _ref$slides = _ref.slides,
      slides = _ref$slides === void 0 ? [] : _ref$slides,
      props = _objectWithoutProperties(_ref, ["slides"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Collapse__WEBPACK_IMPORTED_MODULE_2__["default"], _extends({}, props, {
    full: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, slides.map(SlideFaq)));
};

var SlideFaq = function SlideFaq(_ref2) {
  var key = _ref2.key,
      bigTitle = _ref2.bigTitle,
      title = _ref2.title,
      subtitle = _ref2.subtitle,
      list = _ref2.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H3__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "Light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, subtitle));
};

var Section2 = function Section2() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: "BGSecondary",
    full: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "W80",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Agora, vamos exercitar com hist\xF3rias reais?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_3__["default"], {
    component: _components_Pages_HistoryCard__WEBPACK_IMPORTED_MODULE_5__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, _data_pages_02_json__WEBPACK_IMPORTED_MODULE_1__["historys"]));
};
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/02-colocando-em-pratica")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=02-colocando-em-pratica.js.e4956f2ac879020e2a93.hot-update.js.map