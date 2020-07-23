"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _art = require("@react-native-community/art");

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propTypes = {
  d: _propTypes2.default.string.isRequired,
  fill: _propTypes2.default.string.isRequired,
  transformX: _propTypes2.default.number.isRequired,
  transformY: _propTypes2.default.number.isRequired
};

var defaultProps = {};

var QRCodeSurfaceCell = function QRCodeSurfaceCell(_ref) {
  var d = _ref.d,
      fill = _ref.fill,
      transformX = _ref.transformX,
      transformY = _ref.transformY;
  return _react2.default.createElement(_art.Shape, {
    d: d,
    fill: fill,
    transform: new _art.Transform().translate(transformX, transformY)
  });
};

QRCodeSurfaceCell.propTypes = propTypes;
QRCodeSurfaceCell.defaultProps = defaultProps;

exports.default = QRCodeSurfaceCell;