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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
      isPlaying: false,
      position: 0,
      duration: 0,
      currentTime: 0
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_cardBody", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "_audio", react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "controlPlaying", function () {
      _this.setState({
        duration: _this._audio.current.duration
      });

      if (!_this.state.active) return _this.openCard();
      return _this.audioToggle();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateTime", function (_ref) {
      var target = _ref.target;

      _this.setState({
        currentTime: target.currentTime
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "openCard", function () {
      var clientHeight = _this._cardBody.current.firstChild.clientHeight;

      _this.audioPlay();

      return _this.setState({
        active: true,
        height: clientHeight
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "audioToggle", function () {
      if (_this.state.isPlaying) return _this.audioPause();
      return _this.audioPlay();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "audioPlay", function () {
      _this._audio.current.play();

      _this.setState({
        isPlaying: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "audioPause", function () {
      _this._audio.current.pause();

      _this.setState({
        isPlaying: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('PV8 HistoryCard', {
          Active: _this.state.active
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Card BGWhite",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardHead, {
        onClick: _this.controlPlaying,
        title: _this.props.title,
        isPlaying: _this.state.isPlaying,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), _this.progressBar, _this.audio, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "CardBodyWrapper",
        ref: _this._cardBody,
        style: {
          height: _this.state.height
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardBody, {
        playlist: _this.props.playlist,
        position: _this.state.position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }))));
    });

    return _this;
  }

  _createClass(HistoryCard, [{
    key: "_sound",
    get: function get() {
      return 'static/sounds/history_01/H1_03_Primeiro_Contato.mp3';
    }
  }, {
    key: "progressBar",
    get: function get() {
      if (!this.state.active) return null;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressBar, {
        currentTime: this.state.currentTime,
        duration: this.state.duration,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      });
    }
  }, {
    key: "audio",
    get: function get() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
        ref: this._audio,
        onTimeUpdate: this.updateTime,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
        src: this._sound,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }));
    }
  }]);

  return HistoryCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



var CardHead = function CardHead(_ref2) {
  var title = _ref2.title,
      play = _ref2.play,
      isPlaying = _ref2.isPlaying,
      onClick = _ref2.onClick;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "CardHead Flex JCSpaceBetween",
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FS4x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorGray Saira SairaLight MB8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Conhe\xE7a a hist\xF3ria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira SairaStrong Uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Pointer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/ic_playlist_".concat(!isPlaying ? 'play' : 'pause', "_24px.svg"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  })));
};

var ProgressBar = function ProgressBar(_ref3) {
  var _ref3$currentTime = _ref3.currentTime,
      currentTime = _ref3$currentTime === void 0 ? 0 : _ref3$currentTime,
      _ref3$duration = _ref3.duration,
      duration = _ref3$duration === void 0 ? 1 : _ref3$duration;
  var progress = Math.round(currentTime * 100 / duration) || 0;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "W100 ProgressBar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "BGPrimary",
    style: {
      height: 5,
      width: "".concat(progress, "%")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }));
};

var CardBody = function CardBody(_ref4) {
  var _ref4$playlist = _ref4.playlist,
      playlist = _ref4$playlist === void 0 ? [] : _ref4$playlist,
      position = _ref4.position;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "CardBody",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_ComponentList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    component: Sound,
    componentProps: {
      position: position
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, playlist));
};

var Sound = function Sound(_ref5) {
  var title = _ref5.title,
      src = _ref5.src,
      time = _ref5.time,
      index = _ref5.index,
      position = _ref5.position;
  var isSelected = index === position;
  var play = {
    active: '/static/img/ic_play_circle_filled_24px.svg',
    disable: '/static/img/ic_play_circle_outline_24px.svg'
  };
  var icon = isSelected ? play.active : play.disable;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('Sound Flex AICenter PV8 JCSpaceBetween Saira TextLeft', {
      ColorGray: !isSelected,
      ColorPrimary: isSelected
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ImageBody",
    style: {
      backgroundImage: "url(".concat(icon, ")")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "W100 PH16",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("audio", {
    id: "audio",
    preload: "auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: src,
    type: "audio/mp3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  })));
};

/***/ })

})
//# sourceMappingURL=02-colocando-em-pratica.js.7a1fb290cd8d2fa055a3.hot-update.js.map