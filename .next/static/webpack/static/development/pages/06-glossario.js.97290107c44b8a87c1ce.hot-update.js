webpackHotUpdate("static/development/pages/06-glossario.js",{

/***/ "./node_modules/enquire.js/src/MediaQuery.js":
false,

/***/ "./node_modules/enquire.js/src/MediaQueryDispatch.js":
false,

/***/ "./node_modules/enquire.js/src/QueryHandler.js":
false,

/***/ "./node_modules/enquire.js/src/Util.js":
false,

/***/ "./node_modules/enquire.js/src/index.js":
false,

/***/ "./node_modules/json2mq/index.js":
false,

/***/ "./node_modules/lodash.debounce/index.js":
false,

/***/ "./node_modules/react-slick/lib/arrows.js":
false,

/***/ "./node_modules/react-slick/lib/default-props.js":
false,

/***/ "./node_modules/react-slick/lib/dots.js":
false,

/***/ "./node_modules/react-slick/lib/index.js":
false,

/***/ "./node_modules/react-slick/lib/initial-state.js":
false,

/***/ "./node_modules/react-slick/lib/inner-slider.js":
false,

/***/ "./node_modules/react-slick/lib/slider.js":
false,

/***/ "./node_modules/react-slick/lib/track.js":
false,

/***/ "./node_modules/react-slick/lib/utils/innerSliderUtils.js":
false,

/***/ "./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js":
false,

/***/ "./node_modules/string-convert/camel2hyphen.js":
false,

/***/ "./pages/06-glossario.js":
/*!*******************************!*\
  !*** ./pages/06-glossario.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
  var letter = _ref.letter,
      list = _ref.list;
  return {
    letter: letter,
    active: !!list
  };
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Views_PageView__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({}, _data_pages_06_json__WEBPACK_IMPORTED_MODULE_1__["page"], {
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
    className: "MHAuto Flex JCCenter PH24",
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
  var letter = _ref2.letter,
      active = _ref2.active;

  if (!active) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Card BGLightGray M8 ColorPrimary Saira Opacity5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, letter);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_9__["default"], {
    to: letter,
    offsetTop: 100,
    className: "Card BGLightGray M8 ColorPrimary Saira Pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, letter);
};

var Collection = function Collection(_ref3) {
  var letter = _ref3.letter,
      list = _ref3.list;
  if (!list) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: letter,
    className: "PV1x TextCenter W80 MHAuto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Saira FS80 ColorPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, letter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: CollectionItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
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
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Saira ColorPrimary FS6x PT16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ColorGray SingleSpace P0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, text));
};

var LastSection = function LastSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "BGSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "Tem alguma palavra que voc\xEA gostaria de acrescentar aqui?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Basta mandar um e-mail para", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "mailto:glossario@labiexames.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "glossario@labiexames.com"), ' ', "com a palavra, o seu significado e porque voc\xEA acha que ela deveria estar no nosso gloss\xE1rio!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    className: "BtnOutlineInverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Nosso pilares"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    icon: "arrow-right",
    className: "BtnInverted MT16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Voltar ao in\xEDcio"));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/06-glossario")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=06-glossario.js.97290107c44b8a87c1ce.hot-update.js.map