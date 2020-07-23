
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _QRCode = require("qr.js/lib/QRCode");

var _QRCode2 = _interopRequireDefault(_QRCode);

var _ErrorCorrectLevel = require("qr.js/lib/ErrorCorrectLevel");

var _ErrorCorrectLevel2 = _interopRequireDefault(_ErrorCorrectLevel);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _QRCodeSurface = require("../QRCodeSurface");

var _QRCodeSurface2 = _interopRequireDefault(_QRCodeSurface);

var _QRCodeSurfaceCell = require("../QRCodeSurfaceCell");

var _QRCodeSurfaceCell2 = _interopRequireDefault(_QRCodeSurfaceCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // A `qr.js` doesn't handle error level of zero (M) so we need to do it right, thus the deep require.


var propTypes = {
  bgColor: _propTypes2.default.string,
  fgColor: _propTypes2.default.string,
  level: _propTypes2.default.oneOf(["L", "M", "Q", "H"]),
  size: _propTypes2.default.number,
  value: _propTypes2.default.string.isRequired
};

var defaultProps = {
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  level: "L",
  size: 256
};

var QRCode = function (_React$PureComponent) {
  _inherits(QRCode, _React$PureComponent);

  function QRCode() {
    _classCallCheck(this, QRCode);

    return _possibleConstructorReturn(this, (QRCode.__proto__ || Object.getPrototypeOf(QRCode)).apply(this, arguments));
  }

  _createClass(QRCode, [{
    key: "renderQRCode",
    value: function renderQRCode() {
      var _props = this.props,
          bgColor = _props.bgColor,
          fgColor = _props.fgColor,
          level = _props.level,
          size = _props.size,
          value = _props.value;
      // We'll use type === -1 to force QRCode to automatically pick the best type

      var qrcode = new _QRCode2.default(-1, _ErrorCorrectLevel2.default[level]);
      qrcode.addData(value);
      qrcode.make();
      var cells = qrcode.modules;
      var tileSize = size / cells.length;
      return cells.map(function (row, rowIndex) {
        return row.map(function (cell, cellIndex) {
          var fill = cell ? fgColor : bgColor;
          var qrItemWidth = Math.ceil((cellIndex + 1) * tileSize) - Math.floor(cellIndex * tileSize);
          var qrItemHeight = Math.ceil((rowIndex + 1) * tileSize) - Math.floor(rowIndex * tileSize);
          var d = "M 0 0 L " + qrItemWidth + " 0 L " + qrItemWidth + " " + qrItemHeight + " L 0 " + qrItemHeight + " Z";
          var transformX = Math.round(cellIndex * tileSize);
          var transformY = Math.round(rowIndex * tileSize);
          return _react2.default.createElement(_QRCodeSurfaceCell2.default
          /* eslint-disable react/no-array-index-key */
          , { key: "rectangle-" + rowIndex + "-" + cellIndex
            /* eslint-enable react/no-array-index-key */
            , d: d,
            fill: fill,
            transformX: transformX,
            transformY: transformY
          });
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var size = this.props.size;

      return _react2.default.createElement(
        _QRCodeSurface2.default,
        { size: size, style: { height: size, width: size } },
        this.renderQRCode()
      );
    }
  }]);

  return QRCode;
}(_react2.default.PureComponent);

QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;

exports.default = QRCode;