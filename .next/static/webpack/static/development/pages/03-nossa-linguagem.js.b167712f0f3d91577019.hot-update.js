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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  var title = _ref.title,
      _ref$comparativeList = _ref.comparativeList,
      comparativeList = _ref$comparativeList === void 0 ? [] : _ref$comparativeList;
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
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "P2x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Comparative,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, comparativeList))));
};

var Comparative = function Comparative(_ref2) {
  var title = _ref2.title,
      yes = _ref2.yes,
      not = _ref2.not;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PV8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira Medium PV8 Absolute W100 TextCenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex JCSpaceBetween AICenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComparativeColumn, {
    style: {
      borderRight: '1px solid #DDD'
    },
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconCheck, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }),
    texts: yes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ComparativeColumn, {
    icon: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(IconClose, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }),
    texts: not,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  })));
};

var ComparativeColumn = function ComparativeColumn(_ref3) {
  var texts = _ref3.texts,
      icon = _ref3.icon,
      style = _ref3.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "W100",
    style: style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      transform: 'translateY(-24px)'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, icon), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PT8 PH8 ColorGray FS2x",
    style: {
      marginBottom: -24
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, texts && !texts.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, texts) : console.log(_typeof(texts)))));
};

var Section2 = function Section2() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "BGSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "T\xEDtulo lorem ipsum sobre linguagem ativa e passiva"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "N\xF3s praticamos 2 tipos de linguagem, a ATIVA e a REATIVA. Elas permitem que n\xF3s sejamos acolhedores sem desrespeitar as nossas regras de linguagem."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ScrollTo__WEBPACK_IMPORTED_MODULE_10__["default"], {
    to: "linguagem",
    offsetTop: 80,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "BtnOutlineInverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Vamos l\xE1")));
};

var SectionLinguage = function SectionLinguage(_ref4) {
  var slide1 = _ref4.slide1,
      slide2 = _ref4.slide2,
      title = _ref4.title,
      className = _ref4.className;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    id: "linguagem",
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(className, 'PT3x'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "TextCenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H3__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "Medium",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slider__WEBPACK_IMPORTED_MODULE_13__["default"], {
    fix: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide1, _extends({}, slide1, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Slide2, _extends({}, slide2, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }))));
};

var Slide1 = function Slide1(_ref5) {
  var list = _ref5.list;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Step,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
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

var Step = function Step(_ref6) {
  var index = _ref6.index,
      text = _ref6.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex JCCenter PB16 TextLeft",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex AICenter W100",
    style: {
      maxWidth: 400
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira SairaLight FS9x FlexGrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, index + 1, "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_HTML__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "W80 SingleSpace ColorGray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, text)));
};

var Slide2 = function Slide2(_ref7) {
  var text = _ref7.text,
      listTitle = _ref7.listTitle,
      list = _ref7.list,
      maxWidth = _ref7.maxWidth;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Slider_Slide__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "Saira Light ColorPrimary FS4x PB24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, listTitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: Li,
    componentProps: {
      maxWidth: maxWidth
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, parseList(list)));
};

var Li = function Li(_ref8) {
  var text = _ref8.text,
      _ref8$maxWidth = _ref8.maxWidth,
      maxWidth = _ref8$maxWidth === void 0 ? 600 : _ref8$maxWidth;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex TextLeft MHAuto",
    style: {
      maxWidth: maxWidth
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PR16 ColorPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#522b79",
    d: "M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ColorBlack SingleSpace Opacity5 FS2x PB8 M0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, text));
};

var IconClose = function IconClose() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#F28D8D",
    d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }));
};

var IconCheck = function IconCheck() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: 16,
    height: 16,
    viewBox: "0 0 24 24",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#9CDB9C",
    d: "M22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2A10,10 0 0,1 22,12M6,10L12,16L18,10L16.6,8.6L12,13.2L7.4,8.6L6,10Z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }));
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
//# sourceMappingURL=03-nossa-linguagem.js.b167712f0f3d91577019.hot-update.js.map