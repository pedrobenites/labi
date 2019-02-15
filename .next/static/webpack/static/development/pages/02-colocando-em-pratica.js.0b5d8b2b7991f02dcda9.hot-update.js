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
/* harmony import */ var _Common_ComponentList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Common/ComponentList */ "./components/Common/ComponentList.js");
/* harmony import */ var _Common_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Common/Icon */ "./components/Common/Icon.js");
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "render", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "PV8 HistoryCard",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "Card BGWhite",
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardHead, {
        title: _this.props.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CardBody, {
        playlist: _this.props.playlist,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      })));
    });

    return _this;
  }

  return HistoryCard;
}(Component);



var CardHead = function CardHead(_ref) {
  var title = _ref.title,
      play = _ref.play;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex JCSpaceBetween",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "FS4x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorGray Saira SairaLight MB8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Conhe\xE7a a hist\xF3ria"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ColorPrimary Saira SairaStrong Uppercase",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/img/ic_play_arrow_24px.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};

var CardBody = function CardBody(_ref2) {
  var _ref2$playlist = _ref2.playlist,
      playlist = _ref2$playlist === void 0 ? [] : _ref2$playlist;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Common_ComponentList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    component: Sound,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, playlist);
};

var Sound = function Sound(_ref3) {
  var title = _ref3.title,
      src = _ref3.src,
      time = _ref3.time;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "Flex AICenter JCSpaceBetween",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Play"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, titme));
};

/***/ }),

/***/ "./data/pages/02.json":
/*!****************************!*\
  !*** ./data/pages/02.json ***!
  \****************************/
/*! exports provided: page, faq, historys, default */
/***/ (function(module) {

module.exports = {"page":{"meta":{"title":"Colocando em prática"},"header":{"number":"02","title":"Colocando em prática","text":"Agora que já sabemos quem somos na teoria, vamos ver como isso funciona no nosso dia- a- dia!","cta":"Nossa experiência"},"footer":{"href":"03-nossa-linguagem"}},"faq":[{"color":"#F5F5F5","step":"ETAPA 1","title":"Conhecimento","slides":[{"bigTitle":"A nossa relação com o paciente começa na etapa do conhecimento. Essa é a nossa oportunidade de apresentarmos o Labi, os nossos pilares e produtos.","title":null,"subtitle":null,"list":[]},{"bigTitle":null,"title":"RECEBIMENTO","subtitle":"Seja bem-vindo ao Labi Exames.","list":["Recebemos TODAS as pessoas com a mesma atenção e acolhimento.","Somos gentis e solícitos em TODOS os nossos canais.","Sempre que possível, levante-se para receber um novo paciente, o sempre ofereça para que ele sente. Evite fazer atendimentos sentado enquanto o paciente está em pé em frente ao balcão."]},{"bigTitle":null,"title":"APRESENTAÇÃO","subtitle":"Deixa eu lhe contar um pouco mais sobre nós!","list":["Ao receber um paciente que está buscando informações sobre o Labi tenha paciência para contar nossa história, demonstrar nossos diferenciais e esclarecer todas as dúvidas.","Apresente o Labi como um jeito inteligente de fazer exames, que une qualidade, conveniência e os melhores preços","Sempre apresente nossos checkups e convide o paciente para realizar um exame."]},{"bigTitle":null,"title":"ENCAMINHAMENTO","subtitle":"Todo mundo tem exames a fazer.","list":["Mesmo que o paciente esteja apenas curioso, sempre existe oportunidade de oferecer um exame.","Ofereça um orçamento de exames que ele já tenha te contado que precisa fazer.","Ou então mostre os nossos checkups e convide o paciente a experimentar o Labi."]}]},{"color":"#F0F0F0","step":"ETAPA 2","title":"Compra","slides":[{"bigTitle":"Comprar exames não é algo usual. Precisamos ter paciência, explicar as condições de forma clara e estarmos prontos para encontrar a melhor solução para o paciente.","title":null,"subtitle":null,"list":[]},{"bigTitle":null,"title":"ORÇAMENTO","subtitle":"Sim, nós temos os melhores preços!","list":["Prepare o orçamento dos exames com carinho e atenção.","Esteja sempre atento aos preparos necessário para orientar o paciente.","Pergunte se ele tem dúvidas, urgência ou se gostaria de conhecer nossas condições de pagamento."]},{"bigTitle":null,"title":"COMPRA","subtitle":"Como você gosta de ser atendido quando compra algo importante?","list":["Explique todas as formas de pagamento possíveis: a vista, no débito, no crédito ou parcelado.","Sempre que o atendimento estiver sendo feito por canais digitais ofereça o desconto da compra pela internet.","Se a compra for presencial, confirme o valor antes de passar o cartão e auxilie o paciente nesse processo."]},{"bigTitle":null,"title":"AGENDAMENTO","subtitle":"A gente facilita tudo, do início ao fim.","list":["Entregue o protocolo, esclareça o prazo do resultado e como ele pode ser retirado: através do site ou na unidade.","Para facilitar a compreensão pinte a área com o login e senha de acesso ao resultado dos exames.","Acompanhe o paciente até a saída e garanta que ele está bem o suficiente para ir embora."]}]},{"color":"#EBEBEB","step":"ETAPA 3","title":"Coleta de Exame","slides":[{"bigTitle":"A etapa da coleta é a mais delicada da nossa jornada. Não medimos esforços para manter o conforto do paciente neste momento da sua experiência no Labi.","title":null,"subtitle":null,"list":[]},{"bigTitle":null,"title":"CHAMADA","subtitle":"Nossa chance causar a melhor primeira impressão","list":["Antes de chamar o paciente imprima as etiquetas dos exames que serão coletados","Você deve receber o paciente com protocolo e documento de identificação em mãos","Chame o paciente pelo nome completo. Caso o paciente tenha mais de 70 anos opte pelo tratamento Sr. ou Sra.","Apresente-se ao paciente enquanto o acompanha até o box de coleta"]},{"bigTitle":null,"title":"COLETA","subtitle":"Uau que rápido, eu nem percebi a picada da agulha!","list":["Convide o paciente para se sentar e, se você perceber que ele está nervoso, ofereça para realizar a coleta deitado ou ajude a acalmá-lo","Manuseie o material de maneira clara permitindo que o paciente veja que todo o material é descartável.","Mostre os tubos de coleta, explique quais serão os exames e peça para o paciente conferir o nome nas etiquetas.","Deixe o paciente escolher qual braço de sua preferência para a coleta.","Peça licença, garroteie, esterilize a região com álcool e faça a coleta."]},{"bigTitle":null,"title":"DESPEDIDA","subtitle":"Nosso dever de garantir que o paciente está bem para ir pra casa.","list":["Entregue o protocolo, esclareça o prazo do resultado e como ele pode ser retirado: através do site ou na unidade.","Para facilitar a compreensão pinte a área com o login e senha de acesso ao resultado dos exames.","Acompanhe o paciente até a saída e garanta que ele está bem o suficiente para ir embora."]}]},{"color":"#E6E6E6","step":"ETAPA 4","title":"Resultado","slides":[{"bigTitle":"O resultado de um exame vai muito além de um laudo. Por isso, precisamos ser empáticos e atenciosos.","title":null,"subtitle":null,"list":[]},{"bigTitle":null,"title":"ENTREGA","subtitle":"Conveniência e conforto do paciente em primeiro lugar.","list":["Todos precisamos estar sempre prontos para explicar como funciona a entrega dos exames e orientar como se faz para acessar o resultado online.","Nós nunca podemos consultar o resultado de exames de pacientes.","Quando entregue pessoalmente nunca deseje boa sorte, entregue o exame e cumprimente o paciente."]},{"bigTitle":null,"title":"COLETA","subtitle":"Nosso dever é orientar.","list":["A ligação médica tem como objetivo orientar os pacientes sobre os próximos passos. Ela não é uma consulta.","É importante manter uma voz calma e não causar ansiedade no paciente.","Seja simpático e positivo.","Em situações extremas peça ajuda para fazer a ligação caso tenha dúvidas sobre como abordar o paciente."]},{"bigTitle":null,"title":"DESPEDIDA","subtitle":"Estamos sempre disponíveis para dúvidas.","list":["Se prepare para todo o tipo de dúvida, esse Guia está aqui para isso!","Sempre que estiver em um atendimento digital mantenha a calma e procure a resposta mais adequada para a dúvida do paciente.","Quando estiver em um atendimento telefônico ou presencial, se não souber a resposta, anote o telefone do paciente e ligue mais tarde com a resposta."]}]}],"historys":[{"title":"Da Bia","playlist":[{"src":"static/sounds/history_01/H1_01_Labi_Exames_Apresenta.mp3","title":"Labi Exames apresenta","time":"0:24"},{"src":"static/sounds/history_01/H1_02_Conhecendo_o_Labi.mp3","title":"Conhecendo o Labi","time":"0:50"},{"src":"static/sounds/history_01/H1_03_Primeiro_Contato.mp3","title":"Primeiro contato","time":"2:31"},{"src":"static/sounds/history_01/H1_04_Compra_do_Exame.mp3","title":"Compra do exame","time":"1:26"},{"src":"static/sounds/history_01/H1_05_Coleta_do_Exame.mp3","title":"Coleta do exame","time":"1:26"},{"src":"static/sounds/history_01/H1_06_Entrega_do_Resultado.mp3","title":"Entrega do resultado","time":"0:55"}]},{"title":"Da tia Catarina","youtubeSlug":""}]};

/***/ })

})
//# sourceMappingURL=02-colocando-em-pratica.js.0b5d8b2b7991f02dcda9.hot-update.js.map