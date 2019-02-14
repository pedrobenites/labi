webpackHotUpdate("static/development/pages/01-comecando-pelo-basico.js",{

/***/ "./pages/01-comecando-pelo-basico.js":
/*!*******************************************!*\
  !*** ./pages/01-comecando-pelo-basico.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/pages/01.json */ "./data/pages/01.json");
var _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/pages/01.json */ "./data/pages/01.json", 1);
/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Common/Button */ "./components/Common/Button.js");
/* harmony import */ var _components_Common_Collapse__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/Collapse */ "./components/Common/Collapse.js");
/* harmony import */ var _components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ComponentList */ "./components/Common/ComponentList.js");
/* harmony import */ var _components_HTML_HTML__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HTML/HTML */ "./components/HTML/HTML.js");
/* harmony import */ var _components_HTML_H2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HTML/H2 */ "./components/HTML/H2.js");
/* harmony import */ var _components_HTML_P__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HTML/P */ "./components/HTML/P.js");
/* harmony import */ var _components_Views_PageView__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Views/PageView */ "./components/Views/PageView.js");
/* harmony import */ var _components_HTML_Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/HTML/Section */ "./components/HTML/Section.js");
/* harmony import */ var _components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/ScrollTo */ "./components/Common/ScrollTo.js");
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Slider/Slider */ "./components/Slider/Slider.js");
/* harmony import */ var _components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Slider/Slide */ "./components/Slider/Slide.js");
/* harmony import */ var _components_Pages_Thumbnail__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Pages/Thumbnail */ "./components/Pages/Thumbnail.js");
var _jsxFileName = "/home/ricardo/jobs/lab/pages/01-comecando-pelo-basico.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Views_PageView__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1__["page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionValues, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionPillars, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionPillarsSlides, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }));
});

var SectionValues = function SectionValues() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1__["slides"].map(function (_ref, key) {
    var letter = _ref.letter,
        text = _ref.text;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ColorPrimary Saira FS80",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, letter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_HTML__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "FS6x ColorGray PV2x",
      tagName: "p",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, text));
  }));
};

var SectionPillars = function SectionPillars() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: "BGSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Mas o que importa \xE9 transformar palavras em a\xE7\xE3o, n\xE3o \xE9 mesmo?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Transformamos os nossos valores em 3 pilares, que s\xE3o a nossa f\xF3rmula secreta parade como garantir que todos eles estar\xE3o presentes no nosso dia-a-dia SEMPRE!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    to: "pilares",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "BtnOutlineInverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Nossos pilares")));
};

var SectionPillarsSlides = function SectionPillarsSlides() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: "pilares",
    className: "TextCenter BGWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, _data_pages_01_json__WEBPACK_IMPORTED_MODULE_1__["pillars"].map(function (props, key) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Pillar, _extends({}, props, {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }));
  }));
};

var Pillar = function Pillar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "W80 MHAuto TextCenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "P24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      dispĺay: 'inline !important'
    },
    src: "/static/img/Logo_Acolher.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Acolher"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Fazemos os pacientes se sentirem especiais com um tratamento emp\xE1tico e humanizado.")));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/01-comecando-pelo-basico")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=01-comecando-pelo-basico.js.4cf9850fbf26f13815de.hot-update.js.map