webpackHotUpdate("static/development/pages/03-nossa-linguagem.js",{

/***/ "./pages/03-nossa-linguagem.js":
/*!*************************************!*\
  !*** ./pages/03-nossa-linguagem.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/pages/03.json */ "./data/pages/03.json");
var _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../data/pages/03.json */ "./data/pages/03.json", 1);
/* harmony import */ var _components_Common_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Common/Button */ "./components/Common/Button.js");
/* harmony import */ var _components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Common/ComponentList */ "./components/Common/ComponentList.js");
/* harmony import */ var _components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/HTML/H2 */ "./components/HTML/H2.js");
/* harmony import */ var _components_HTML_H3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/HTML/H3 */ "./components/HTML/H3.js");
/* harmony import */ var _components_HTML_HTML__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/HTML/HTML */ "./components/HTML/HTML.js");
/* harmony import */ var _components_HTML_P__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/HTML/P */ "./components/HTML/P.js");
/* harmony import */ var _components_Views_PageView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Views/PageView */ "./components/Views/PageView.js");
/* harmony import */ var _components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Common/ScrollTo */ "./components/Common/ScrollTo.js");
/* harmony import */ var _components_HTML_Section__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/HTML/Section */ "./components/HTML/Section.js");
/* harmony import */ var _components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Slider/Slide */ "./components/Slider/Slide.js");
/* harmony import */ var _components_Slider_Slider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Slider/Slider */ "./components/Slider/Slider.js");
var _jsxFileName = "/home/ricardo/jobs/lab/pages/03-nossa-linguagem.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Views_PageView__WEBPACK_IMPORTED_MODULE_9__["default"], _extends({}, _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__["page"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionLinguage, _extends({}, _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__["linguage1"], {
    className: "BGLightGray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionLinguage, _extends({}, _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__["linguage2"], {
    className: "BGWhite",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })));
});

var Section1 = function Section1() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    id: "target",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, _data_pages_03_json__WEBPACK_IMPORTED_MODULE_2__["slides"].map(SlideLinguages));
};

var SlideLinguages = function SlideLinguages(_ref, key) {
  var title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {
    key: key,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      maxWidth: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, title)));
};

var Section2 = function Section2() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "BGSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "T\xEDtulo lorem ipsum sobre linguagem ativa e passiva"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "N\xF3s praticamos 2 tipos de linguagem, a ATIVA e a REATIVA. Elas permitem que n\xF3s sejamos acolhedores sem desrespeitar as nossas regras de linguagem."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    to: "linguagem",
    offsetTop: 80,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "BtnOutlineInverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Vamos l\xE1")));
};

var SectionLinguage = function SectionLinguage(_ref2) {
  var slide1 = _ref2.slide1,
      slide2 = _ref2.slide2,
      title = _ref2.title,
      className = _ref2.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "linguagem",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'PT3x'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TextCenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "Medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fix: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide1, _extends({}, slide1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide2, _extends({}, slide2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))));
};

var Slide1 = function Slide1(_ref3) {
  var list = _ref3.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Step,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, parseList(list)));
};

var parseList = function parseList(list) {
  return list.map(function (text) {
    return {
      text: text
    };
  });
};

var Step = function Step(_ref4) {
  var index = _ref4.index,
      text = _ref4.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex JCCenter PB16 TextLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex AICenter W100",
    style: {
      maxWidth: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira SairaLight FS9x FlexGrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, index + 1, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_HTML__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "W80 SingleSpace ColorGray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, text)));
};

var Slide2 = function Slide2(_ref5) {
  var text = _ref5.text,
      listTitle = _ref5.listTitle,
      list = _ref5.list,
      maxWidth = _ref5.maxWidth;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Saira Light ColorPrimary FS4x PB24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, listTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Li,
    componentProps: {
      maxWidth: maxWidth
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, parseList(list)));
};

var Li = function Li(_ref6) {
  var text = _ref6.text,
      _ref6$maxWidth = _ref6.maxWidth,
      maxWidth = _ref6$maxWidth === void 0 ? 600 : _ref6$maxWidth;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex TextLeft MHAuto",
    style: {
      maxWidth: maxWidth
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PR16 ColorPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#522b79",
    d: "M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ColorBlack SingleSpace Opacity5 FS2x PB8 M0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, text));
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/03-nossa-linguagem")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=03-nossa-linguagem.js.0c48e7b4820322a1a892.hot-update.js.map