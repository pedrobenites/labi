webpackHotUpdate("static/development/pages/06-glossario.js",{

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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var SectionGlossary =
/*#__PURE__*/
function (_Component) {
  _inherits(SectionGlossary, _Component);

  function SectionGlossary() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SectionGlossary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SectionGlossary)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      disable: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setDisable", function (disable) {
      return _this.setState({
        disable: disable
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "PV2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "PV24 AutoSlider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DragElement, {
        isMoving: _this.setDisable,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        component: Summary,
        componentProps: {
          disable: _this.state.disable
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, summary))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
        component: Collection,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, _data_pages_06_json__WEBPACK_IMPORTED_MODULE_1__["glossary"])));
    });

    return _this;
  }

  return SectionGlossary;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var DragElement =
/*#__PURE__*/
function (_Component2) {
  _inherits(DragElement, _Component2);

  function DragElement() {
    var _getPrototypeOf3;

    var _this2;

    _classCallCheck(this, DragElement);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _possibleConstructorReturn(this, (_getPrototypeOf3 = _getPrototypeOf(DragElement)).call.apply(_getPrototypeOf3, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "state", {
      moving: false,
      x: 0,
      delta: 0,
      referenceDelta: 0,
      time: 0,
      width: null
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "_ref", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "componentDidMount", function () {
      _this2.setState({
        width: _this2._ref.current.clientWidth
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "dragStart", function (_ref2) {
      var clientX = _ref2.clientX;
      var time = new Date().getTime();
      var referenceDelta = _this2.state.delta;

      _this2.setState({
        moving: true,
        x: clientX,
        referenceDelta: referenceDelta,
        time: time
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "dragMove", function (_ref3) {
      var clientX = _ref3.clientX;
      if (!_this2.state.moving) return null;

      var time = new Date().getTime() - _this2.state.time;

      if (time > 50) _this2.props.isMoving && _this2.props.isMoving(true);
      var delta = _this2.state.referenceDelta + _this2.state.x - clientX;
      if (delta <= 0 || delta > _this2.state.width - 320) return null;

      _this2.setState({
        delta: delta
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "dragEnd", function () {
      _this2.props.isMoving && _this2.props.isMoving(false);

      _this2.setState({
        moving: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this2)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          maxWidth: '100%',
          overflow: 'hidden'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
        className: "Flex"
      }, _this2.drag, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Flex JCCenter MHAuto PH24",
        style: _this2.style,
        ref: _this2._ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, _this2.props.children)));
    });

    return _this2;
  }

  _createClass(DragElement, [{
    key: "drag",
    get: function get() {
      var _this3 = this;

      return {
        onMouseDown: this.dragStart,
        onMouseMove: this.dragMove,
        onMouseUp: this.dragEnd,
        onMouseLeave: this.dragEnd,
        onTouchStart: function onTouchStart(event) {
          return _this3.dragStart(event.changedTouches[0]);
        },
        onTouchMove: function onTouchMove(event) {
          return _this3.dragMove(event.changedTouches[0]);
        },
        onTouchEnd: this.dragEnd
      };
    }
  }, {
    key: "style",
    get: function get() {
      return {
        transform: "translateX(".concat(this.state.delta * -1, "px)"),
        userSelect: 'none'
      };
    }
  }]);

  return DragElement;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var Summary = function Summary(_ref4) {
  var letter = _ref4.letter,
      active = _ref4.active,
      disable = _ref4.disable;

  if (!active || !!disable) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "Card BGLightGray M8 ColorPrimary Saira Opacity5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
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
      lineNumber: 116
    },
    __self: this
  }, letter);
};

var Collection = function Collection(_ref5) {
  var letter = _ref5.letter,
      list = _ref5.list;
  if (!list) return null;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: letter,
    className: "PV1x TextCenter W80 MHAuto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Saira FS80 ColorPrimary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, letter), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_ComponentList__WEBPACK_IMPORTED_MODULE_4__["default"], {
    component: CollectionItem,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, list));
};

var CollectionItem = function CollectionItem(_ref6) {
  var title = _ref6.title,
      text = _ref6.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "PV1x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Saira ColorPrimary FS6x PT16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ColorGray SingleSpace P0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, text));
};

var LastSection = function LastSection() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_Section__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "BGSecondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_H2__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "Tem alguma palavra que voc\xEA gostaria de acrescentar aqui?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HTML_P__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "Basta mandar um e-mail para", ' ', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
    href: "mailto:glossario@labiexames.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "glossario@labiexames.com"), ' ', "com a palavra, o seu significado e porque voc\xEA acha que ela deveria estar no nosso gloss\xE1rio!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    className: "BtnOutlineInverted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Nosso pilares"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Common_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    href: "/",
    icon: "arrow-right",
    className: "BtnInverted MT16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
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
//# sourceMappingURL=06-glossario.js.13e291746817e00517b1.hot-update.js.map