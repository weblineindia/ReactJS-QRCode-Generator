
Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  children: _propTypes2.default.array.isRequired,
  size: _propTypes2.default.number.isRequired,
  style: _propTypes2.default.object
};

var defaultProps = {
  style: undefined
};

var QRCodeSurface = function QRCodeSurface(_ref) {
  var children = _ref.children,
      size = _ref.size,
      style = _ref.style;
  return _react2.default.createElement(
    "svg",
    { height: size, style: style, width: size },
    children
  );
};

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

exports.default = QRCodeSurface;