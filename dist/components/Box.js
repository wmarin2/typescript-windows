"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./Box.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Box = function Box(props) {
  var text = props.text;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "box"
  }, text);
};

var _default = Box;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0JveC50c3giXSwibmFtZXMiOlsiQm94IiwicHJvcHMiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUE7Ozs7QUFNQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxDQUFDQyxLQUFELEVBQXFCO0FBQUEsTUFDdkJDLElBRHVCLEdBQ2RELEtBRGMsQ0FDdkJDLElBRHVCO0FBRy9CLHNCQUFPO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUFzQkEsSUFBdEIsQ0FBUDtBQUNELENBSkQ7O2VBTWVGLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4vQm94LnNjc3NcIjtcblxuaW50ZXJmYWNlIEJveFByb3BzIHtcbiAgdGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBCb3ggPSAocHJvcHM6IEJveFByb3BzKSA9PiB7XG4gIGNvbnN0IHsgdGV4dCB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+e3RleHR9PC9kaXY+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQm94O1xuIl19