webpackHotUpdate("static/development/pages/02-colocando-em-pratica.js",{

/***/ "./components/Pages/HistoryCard.js":
/*!*****************************************!*\
  !*** ./components/Pages/HistoryCard.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HistoryCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Common_ComponentList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/ComponentList */ "./components/Common/ComponentList.js");
/* harmony import */ var _Common_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Common/Icon */ "./components/Common/Icon.js");
var _jsxFileName = "/home/ricardo/jobs/lab/components/Pages/HistoryCard.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var HistoryCard =
/*#__PURE__*/
function (_Component) {
  _inherits(HistoryCard, _Component);

  function HistoryCard() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HistoryCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HistoryCard)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      active: false,
      height: 0,
      isPlaying: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_cardBody", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openCard", function () {
      var clientHeight = _this._cardBody.current.firstChild.clientHeight;

      _this.setState({
        active: true,
        height: clientHeight,
        isPlaying: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('PV8 HistoryCard Pointer', {
          Active: _this.state.active
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Card BGWhite",
        onClick: _this.openCard,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardHead, {
        title: _this.props.title,
        onClick: function onClick() {
          return _this.setState({
            isPlaying: !_this.state.isPlaying
          });
        },
        isPlaying: _this.state.isPlaying,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CardBodyWrapper",
        ref: _this._cardBody,
        style: {
          height: _this.state.height
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardBody, {
        playlist: _this.props.playlist,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))));
    });

    return _this;
  }

  return HistoryCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var CardHead = function CardHead(_ref) {
  var title = _ref.title,
      play = _ref.play,
      onClick = _ref.onClick,
      isPlaying = _ref.isPlaying;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "CardHead Flex JCSpaceBetween",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FS4x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorGray Saira SairaLight MB8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Conhe\xE7a a hist\xF3ria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira SairaStrong Uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    onClick: onClick,
    src: "/static/img/ic_playlist_".concat(isPlaying ? 'play' : 'pause', "_24px.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }));
};

var CardBody = function CardBody(_ref2) {
  var _ref2$playlist = _ref2.playlist,
      playlist = _ref2$playlist === void 0 ? [] : _ref2$playlist;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "CardBody BGLightGray",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_ComponentList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: Sound,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, playlist));
};

var Sound = function Sound(_ref3) {
  var title = _ref3.title,
      src = _ref3.src,
      time = _ref3.time;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex AICenter JCSpaceBetween",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Play"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, time));
};

/***/ })

})
//# sourceMappingURL=02-colocando-em-pratica.js.ecd1419b098c2d826eb0.hot-update.js.map