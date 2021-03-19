"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _reactI18next = require("react-i18next");

var _reactResizable = require("react-resizable");

var _clsx = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var Windows = function Windows(props) {
  var windows = props.windows,
      taskbar = props.taskbar,
      grid = props.grid;

  var getDefaultValues = function getDefaultValues() {
    var sizes = {};
    var zIndexes = {};
    var locations = {};
    var maximized = {};
    var minimized = {};

    var _iterator = _createForOfIteratorHelper(windows),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var w = _step.value;
        sizes[w.key] = {
          w: w.size.w,
          h: w.size.h
        };
        zIndexes[w.key] = 100 + Math.random() * 200;
        locations[w.key] = {
          x: w.location.x,
          y: w.location.y
        };
        maximized[w.key] = false;
        minimized[w.key] = false;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return {
      sizes: sizes,
      zIndexes: zIndexes,
      locations: locations,
      maximized: maximized,
      minimized: minimized
    };
  };

  var defaults = getDefaultValues();
  var iWindowSizes = localStorage.getItem("windowSizes") ? JSON.parse(localStorage.getItem("windowSizes")) : defaults.sizes;
  var iWindowZIndexes = localStorage.getItem("windowZIndexes") ? JSON.parse(localStorage.getItem("windowZIndexes")) : defaults.zIndexes;
  var iWindowLocations = localStorage.getItem("windowLocations") ? JSON.parse(localStorage.getItem("windowLocations")) : defaults.locations;
  var iWindowMaximizes = localStorage.getItem("windowMaximizes") ? JSON.parse(localStorage.getItem("windowMaximizes")) : defaults.maximized;
  var iWindowMinimizes = localStorage.getItem("windowMinimizes") ? JSON.parse(localStorage.getItem("windowMinimizes")) : defaults.minimized;

  var _useTranslation = (0, _reactI18next.useTranslation)(),
      t = _useTranslation.t;

  var _useState = (0, _react.useState)(iWindowSizes),
      _useState2 = _slicedToArray(_useState, 2),
      windowSizes = _useState2[0],
      setWindowSizes = _useState2[1];

  var _useState3 = (0, _react.useState)(iWindowZIndexes),
      _useState4 = _slicedToArray(_useState3, 2),
      windowZIndexes = _useState4[0],
      setWindowZIndexes = _useState4[1];

  var _useState5 = (0, _react.useState)(iWindowLocations),
      _useState6 = _slicedToArray(_useState5, 2),
      windowLocations = _useState6[0],
      setWindowLocations = _useState6[1];

  var _useState7 = (0, _react.useState)(iWindowMaximizes),
      _useState8 = _slicedToArray(_useState7, 2),
      windowMaximizes = _useState8[0],
      setWindowMaximizes = _useState8[1];

  var _useState9 = (0, _react.useState)(iWindowMinimizes),
      _useState10 = _slicedToArray(_useState9, 2),
      windowMinimizes = _useState10[0],
      setWindowMinimizes = _useState10[1];

  var _useState11 = (0, _react.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      taskbarItemsIn = _useState12[0],
      setTaskbarItemsIn = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      taskbarItemsOut = _useState14[0],
      setTaskbarItemsOut = _useState14[1];

  (0, _react.useEffect)(function () {
    localStorage.setItem("windowSizes", JSON.stringify(windowSizes));
  }, [windowSizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowZIndexes", JSON.stringify(windowZIndexes));
  }, [windowZIndexes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowLocations", JSON.stringify(windowLocations));
  }, [windowLocations]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMaximizes", JSON.stringify(windowMaximizes));
  }, [windowMaximizes]);
  (0, _react.useEffect)(function () {
    localStorage.setItem("windowMinimizes", JSON.stringify(windowMinimizes));
  }, [windowMinimizes]);
  (0, _react.useEffect)(function () {
    var taskbarItemsIn = [];
    var taskbarItemsOut = [];
    windows.forEach(function (window) {
      var key = window.key,
          title = window.title,
          component = window.component,
          size = window.size,
          location = window.location,
          draggable = window.draggable,
          resizable = window.resizable,
          minimizable = window.minimizable,
          maximizable = window.maximizable;

      var handleResize = function handleResize(e, data) {
        setWindowSizes(_objectSpread(_objectSpread({}, windowSizes), {}, _defineProperty({}, key, {
          w: data.size.width,
          h: data.size.height
        })));
      };

      var handleZIndex = function handleZIndex() {
        var nums = Object.values(windowZIndexes).length ? Object.values(windowZIndexes) : [0];
        var zIndex = Math.max.apply(Math, _toConsumableArray(nums)) + 1;
        setWindowZIndexes(_objectSpread(_objectSpread({}, windowZIndexes), {}, _defineProperty({}, key, zIndex)));
      };

      var handleDrag = function handleDrag(e, data) {
        if (windowMaximizes[key] || windowMinimizes[key]) {
          return;
        }

        setWindowLocations(_objectSpread(_objectSpread({}, windowLocations), {}, _defineProperty({}, key, {
          x: data.x,
          y: data.y
        })));
      };

      var handleMaximize = function handleMaximize() {
        setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, key, false)));
        setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, key, !windowMaximizes[key])));
      };

      var handleMinimize = function handleMinimize() {
        setWindowMaximizes(_objectSpread(_objectSpread({}, windowMaximizes), {}, _defineProperty({}, key, false)));
        setWindowMinimizes(_objectSpread(_objectSpread({}, windowMinimizes), {}, _defineProperty({}, key, !windowMinimizes[key])));
      };

      var renderMinimize = function renderMinimize() {
        return minimizable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-minimize",
          onClick: handleMinimize
        }) : null;
      };

      var renderMaximize = function renderMaximize() {
        return maximizable ? /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-button tw-maximize",
          onClick: handleMaximize
        }) : null;
      };

      var renderHeader = function renderHeader() {
        var classNames = (0, _clsx.default)("tw-header", {
          "tw-draggable": draggable
        });
        return /*#__PURE__*/_react.default.createElement("div", {
          className: classNames
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-title"
        }, title ? t(title) : null), /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-buttons",
          onClick: handleZIndex
        }, renderMinimize(), renderMaximize()));
      };

      var renderBody = function renderBody() {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "tw-body"
        }, renderBodyContents());
      };

      var renderBodyContents = function renderBodyContents() {
        var width = windowMaximizes[key] ? "100%" : windowSizes[key] ? windowSizes[key].w : size.w;
        var height = windowMaximizes[key] ? "100%" : windowSizes[key] ? windowSizes[key].h : size.h;
        return resizable && !windowMaximizes[key] ? /*#__PURE__*/_react.default.createElement(_reactResizable.ResizableBox, {
          width: width,
          height: height,
          resizeHandles: ["se"],
          draggableOpts: {
            grid: [grid, grid]
          },
          onResizeStop: handleResize
        }, component) : /*#__PURE__*/_react.default.createElement("div", {
          style: {
            width: width,
            height: height
          }
        }, component);
      };

      var classNames = (0, _clsx.default)("tw-window", key, {
        "tw-taskbar-on": taskbar,
        "tw-taskbar-off": !taskbar,
        "tw-minimize-on": windowMinimizes[key],
        "tw-minimize-off": !windowMinimizes[key],
        "tw-maximize-on": windowMaximizes[key],
        "tw-maximize-off": !windowMaximizes[key]
      });

      var element = /*#__PURE__*/_react.default.createElement(_reactDraggable.default, {
        key: key,
        defaultPosition: windowLocations[key] || location,
        grid: [grid, grid],
        scale: 1,
        handle: ".tw-draggable",
        bounds: "parent",
        onStart: handleZIndex,
        onStop: handleDrag,
        cancel: ".tw-buttons"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: classNames,
        style: {
          zIndex: windowZIndexes[key]
        }
      }, renderHeader(), renderBody()));

      if (windowMinimizes[key] && taskbar) {
        taskbarItemsIn = [].concat(_toConsumableArray(taskbarItemsIn), [element]);
      } else {
        taskbarItemsOut = [].concat(_toConsumableArray(taskbarItemsOut), [element]);
      }
    });
    setTaskbarItemsIn(taskbarItemsIn);
    setTaskbarItemsOut(taskbarItemsOut); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowSizes, windowZIndexes, windowLocations, windowMaximizes, windowMinimizes]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-windows"
  }, taskbarItemsOut, /*#__PURE__*/_react.default.createElement("div", {
    className: "tw-taskbar"
  }, taskbarItemsIn));
};

Windows.defaultProps = {
  taskbar: true,
  grid: 1
};
var _default = Windows;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdldERlZmF1bHRWYWx1ZXMiLCJzaXplcyIsInpJbmRleGVzIiwibG9jYXRpb25zIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwidyIsImtleSIsInNpemUiLCJoIiwiTWF0aCIsInJhbmRvbSIsIngiLCJsb2NhdGlvbiIsInkiLCJkZWZhdWx0cyIsImlXaW5kb3dTaXplcyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpV2luZG93WkluZGV4ZXMiLCJpV2luZG93TG9jYXRpb25zIiwiaVdpbmRvd01heGltaXplcyIsImlXaW5kb3dNaW5pbWl6ZXMiLCJ0Iiwid2luZG93U2l6ZXMiLCJzZXRXaW5kb3dTaXplcyIsIndpbmRvd1pJbmRleGVzIiwic2V0V2luZG93WkluZGV4ZXMiLCJ3aW5kb3dMb2NhdGlvbnMiLCJzZXRXaW5kb3dMb2NhdGlvbnMiLCJ3aW5kb3dNYXhpbWl6ZXMiLCJzZXRXaW5kb3dNYXhpbWl6ZXMiLCJ3aW5kb3dNaW5pbWl6ZXMiLCJzZXRXaW5kb3dNaW5pbWl6ZXMiLCJ0YXNrYmFySXRlbXNJbiIsInNldFRhc2tiYXJJdGVtc0luIiwidGFza2Jhckl0ZW1zT3V0Iiwic2V0VGFza2Jhckl0ZW1zT3V0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImZvckVhY2giLCJ3aW5kb3ciLCJ0aXRsZSIsImNvbXBvbmVudCIsImRyYWdnYWJsZSIsInJlc2l6YWJsZSIsIm1pbmltaXphYmxlIiwibWF4aW1pemFibGUiLCJoYW5kbGVSZXNpemUiLCJlIiwiZGF0YSIsIndpZHRoIiwiaGVpZ2h0IiwiaGFuZGxlWkluZGV4IiwibnVtcyIsIk9iamVjdCIsInZhbHVlcyIsImxlbmd0aCIsInpJbmRleCIsIm1heCIsImhhbmRsZURyYWciLCJoYW5kbGVNYXhpbWl6ZSIsImhhbmRsZU1pbmltaXplIiwicmVuZGVyTWluaW1pemUiLCJyZW5kZXJNYXhpbWl6ZSIsInJlbmRlckhlYWRlciIsImNsYXNzTmFtZXMiLCJyZW5kZXJCb2R5IiwicmVuZGVyQm9keUNvbnRlbnRzIiwiZWxlbWVudCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQXlCO0FBQUEsTUFDL0JDLE9BRCtCLEdBQ0pELEtBREksQ0FDL0JDLE9BRCtCO0FBQUEsTUFDdEJDLE9BRHNCLEdBQ0pGLEtBREksQ0FDdEJFLE9BRHNCO0FBQUEsTUFDYkMsSUFEYSxHQUNKSCxLQURJLENBQ2JHLElBRGE7O0FBRXZDLE1BQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUM3QixRQUFJQyxLQUFVLEdBQUcsRUFBakI7QUFDQSxRQUFJQyxRQUFhLEdBQUcsRUFBcEI7QUFDQSxRQUFJQyxTQUFjLEdBQUcsRUFBckI7QUFDQSxRQUFJQyxTQUFjLEdBQUcsRUFBckI7QUFDQSxRQUFJQyxTQUFjLEdBQUcsRUFBckI7O0FBTDZCLCtDQU1kUixPQU5jO0FBQUE7O0FBQUE7QUFNN0IsMERBQXdCO0FBQUEsWUFBZFMsQ0FBYztBQUN0QkwsUUFBQUEsS0FBSyxDQUFDSyxDQUFDLENBQUNDLEdBQUgsQ0FBTCxHQUFlO0FBQ2JELFVBQUFBLENBQUMsRUFBRUEsQ0FBQyxDQUFDRSxJQUFGLENBQU9GLENBREc7QUFFYkcsVUFBQUEsQ0FBQyxFQUFFSCxDQUFDLENBQUNFLElBQUYsQ0FBT0M7QUFGRyxTQUFmO0FBSUFQLFFBQUFBLFFBQVEsQ0FBQ0ksQ0FBQyxDQUFDQyxHQUFILENBQVIsR0FBa0IsTUFBTUcsSUFBSSxDQUFDQyxNQUFMLEtBQWMsR0FBdEM7QUFDQVIsUUFBQUEsU0FBUyxDQUFDRyxDQUFD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QUFFTyxVQVJWO0FBU0UsUUFBQSxNQUFNLEVBQUM7QUFUVCxzQkFXRTtBQUFLLFFBQUEsU0FBUyxFQUFFTSxVQUFoQjtBQUE0QixRQUFBLEtBQUssRUFBRTtBQUFFUixVQUFBQSxNQUFNLEVBQUVoQyxjQUFjLENBQUNyQixHQUFEO0FBQXhCO0FBQW5DLFNBQ0c0RCxZQUFZLEVBRGYsRUFHR0UsVUFBVSxFQUhiLENBWEYsQ0FERjs7QUFvQkEsVUFBSW5DLGVBQWUsQ0FBQzNCLEdBQUQsQ0FBZixJQUF3QlQsT0FBNUIsRUFBcUM7QUFDbkNzQyxRQUFBQSxjQUFjLGdDQUFPQSxjQUFQLElBQXVCbUMsT0FBdkIsRUFBZDtBQUNELE9BRkQsTUFFTztBQUNMakMsUUFBQUEsZUFBZSxnQ0FBT0EsZUFBUCxJQUF3QmlDLE9BQXhCLEVBQWY7QUFDRDtBQUNGLEtBaktEO0FBbUtBbEMsSUFBQUEsaUJBQWlCLENBQUNELGNBQUQsQ0FBakI7QUFDQUcsSUFBQUEsa0JBQWtCLENBQUNELGVBQUQsQ0FBbEIsQ0F4S2MsQ0F5S2Q7QUFDRCxHQTFLRCxFQTBLRyxDQUNEWixXQURDLEVBRURFLGNBRkMsRUFHREUsZUFIQyxFQUlERSxlQUpDLEVBS0RFLGVBTEMsQ0ExS0g7QUFrTEEsc0JBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dJLGVBREgsZUFHRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FBNkJGLGNBQTdCLENBSEYsQ0FERjtBQU9ELENBelFEOztBQTJRQXpDLE9BQU8sQ0FBQzZFLFlBQVIsR0FBdUI7QUFDckIxRSxFQUFBQSxPQUFPLEVBQUUsSUFEWTtBQUVyQkMsRUFBQUEsSUFBSSxFQUFFO0FBRmUsQ0FBdkI7ZUFLZUosTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlLCBTeW50aGV0aWNFdmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IERyYWdnYWJsZSwgeyBEcmFnZ2FibGVFdmVudCwgRHJhZ2dhYmxlRGF0YSB9IGZyb20gXCJyZWFjdC1kcmFnZ2FibGVcIjtcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcInJlYWN0LWkxOG5leHRcIjtcbmltcG9ydCB7IFJlc2l6YWJsZUJveCwgUmVzaXplQ2FsbGJhY2tEYXRhIH0gZnJvbSBcInJlYWN0LXJlc2l6YWJsZVwiO1xuaW1wb3J0IGNsc3ggZnJvbSBcImNsc3hcIjtcblxuZXhwb3J0IGludGVyZmFjZSBXaW5kb3cge1xuICBrZXk6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGNvbXBvbmVudDogSlNYLkVsZW1lbnQ7XG4gIHNpemU6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfTtcbiAgbG9jYXRpb246IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfTtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgcmVzaXphYmxlPzogYm9vbGVhbjtcbiAgbWluaW1pemFibGU/OiBib29sZWFuO1xuICBtYXhpbWl6YWJsZT86IGJvb2xlYW47XG59XG5cbmludGVyZmFjZSBXaW5kb3dzUHJvcHMge1xuICB3aW5kb3dzOiBXaW5kb3dbXTtcbiAgdGFza2Jhcj86IGJvb2xlYW47XG4gIGdyaWQ/OiBudW1iZXI7XG59XG5cbmNvbnN0IFdpbmRvd3MgPSAocHJvcHM6IFdpbmRvd3NQcm9wcykgPT4ge1xuICBjb25zdCB7IHdpbmRvd3MsIHRhc2tiYXIsIGdyaWQgfSA9IHByb3BzO1xuICBjb25zdCBnZXREZWZhdWx0VmFsdWVzID0gKCkgPT4ge1xuICAgIGxldCBzaXplczogYW55ID0ge31cbiAgICBsZXQgekluZGV4ZXM6IGFueSA9IHt9XG4gICAgbGV0IGxvY2F0aW9uczogYW55ID0ge31cbiAgICBsZXQgbWF4aW1pemVkOiBhbnkgPSB7fVxuICAgIGxldCBtaW5pbWl6ZWQ6IGFueSA9IHt9XG4gICAgZm9yKGNvbnN0IHcgb2Ygd2luZG93cykge1xuICAgICAgc2l6ZXNbdy5rZXldID0ge1xuICAgICAgICB3OiB3LnNpemUudyxcbiAgICAgICAgaDogdy5zaXplLmhcbiAgICAgIH1cbiAgICAgIHpJbmRleGVzW3cua2V5XSA9IDEwMCArIE1hdGgucmFuZG9tKCkqMjAwXG4gICAgICBsb2NhdGlvbnNbdy5rZXldID0ge1xuICAgICAgICB4OiB3LmxvY2F0aW9uLngsXG4gICAgICAgIHk6IHcubG9jYXRpb24ueVxuICAgICAgfVxuICAgICAgbWF4aW1pemVkW3cua2V5XSA9IGZhbHNlXG4gICAgICBtaW5pbWl6ZWRbdy5rZXldID0gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHNpemVzLFxuICAgICAgekluZGV4ZXMsXG4gICAgICBsb2NhdGlvbnMsXG4gICAgICBtYXhpbWl6ZWQsXG4gICAgICBtaW5pbWl6ZWRcbiAgICB9XG4gIH1cbiAgY29uc3QgZGVmYXVsdHMgPSBnZXREZWZhdWx0VmFsdWVzKClcbiAgY29uc3QgaVdpbmRvd1NpemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dTaXplc1wiKVxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dTaXplc1wiKSBhcyBzdHJpbmcpXG4gIDogZGVmYXVsdHMuc2l6ZXM7XG5cbmNvbnN0IGlXaW5kb3daSW5kZXhlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIilcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIikgYXMgc3RyaW5nKVxuICA6IGRlZmF1bHRzLnpJbmRleGVzO1xuXG5jb25zdCBpV2luZG93TG9jYXRpb25zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dMb2NhdGlvbnNcIilcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpIGFzIHN0cmluZylcbiAgOiBkZWZhdWx0cy5sb2NhdGlvbnM7XG5cbmNvbnN0IGlXaW5kb3dNYXhpbWl6ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd01heGltaXplc1wiKVxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIikgYXMgc3RyaW5nKVxuICA6IGRlZmF1bHRzLm1heGltaXplZDtcblxuY29uc3QgaVdpbmRvd01pbmltaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIpXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiKSBhcyBzdHJpbmcpXG4gIDogZGVmYXVsdHMubWluaW1pemVkO1xuXG4gIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKTtcblxuICBjb25zdCBbd2luZG93U2l6ZXMsIHNldFdpbmRvd1NpemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dTaXplcyk7XG4gIGNvbnN0IFt3aW5kb3daSW5kZXhlcywgc2V0V2luZG93WkluZGV4ZXNdID0gdXNlU3RhdGUoaVdpbmRvd1pJbmRleGVzKTtcbiAgY29uc3QgW3dpbmRvd0xvY2F0aW9ucywgc2V0V2luZG93TG9jYXRpb25zXSA9IHVzZVN0YXRlKGlXaW5kb3dMb2NhdGlvbnMpO1xuICBjb25zdCBbd2luZG93TWF4aW1pemVzLCBzZXRXaW5kb3dNYXhpbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01heGltaXplcyk7XG4gIGNvbnN0IFt3aW5kb3dNaW5pbWl6ZXMsIHNldFdpbmRvd01pbmltaXplc10gPSB1c2VTdGF0ZShpV2luZG93TWluaW1pemVzKTtcbiAgY29uc3QgW3Rhc2tiYXJJdGVtc0luLCBzZXRUYXNrYmFySXRlbXNJbl0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XG4gIGNvbnN0IFt0YXNrYmFySXRlbXNPdXQsIHNldFRhc2tiYXJJdGVtc091dF0gPSB1c2VTdGF0ZTxKU1guRWxlbWVudFtdPihbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd1NpemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd1NpemVzKSk7XG4gIH0sIFt3aW5kb3dTaXplc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3daSW5kZXhlc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3daSW5kZXhlcykpO1xuICB9LCBbd2luZG93WkluZGV4ZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd0xvY2F0aW9ucykpO1xuICB9LCBbd2luZG93TG9jYXRpb25zXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd01heGltaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dNYXhpbWl6ZXMpKTtcbiAgfSwgW3dpbmRvd01heGltaXplc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWluaW1pemVzKSk7XG4gIH0sIFt3aW5kb3dNaW5pbWl6ZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB0YXNrYmFySXRlbXNJbjogSlNYLkVsZW1lbnRbXSA9IFtdO1xuICAgIGxldCB0YXNrYmFySXRlbXNPdXQ6IEpTWC5FbGVtZW50W10gPSBbXTtcblxuICAgIHdpbmRvd3MuZm9yRWFjaCgod2luZG93OiBXaW5kb3cpID0+IHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAga2V5LFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgY29tcG9uZW50LFxuICAgICAgICBzaXplLFxuICAgICAgICBsb2NhdGlvbixcbiAgICAgICAgZHJhZ2dhYmxlLFxuICAgICAgICByZXNpemFibGUsXG4gICAgICAgIG1pbmltaXphYmxlLFxuICAgICAgICBtYXhpbWl6YWJsZSxcbiAgICAgIH0gPSB3aW5kb3c7XG5cbiAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9IChlOiBTeW50aGV0aWNFdmVudCwgZGF0YTogUmVzaXplQ2FsbGJhY2tEYXRhKSA9PiB7XG4gICAgICAgIHNldFdpbmRvd1NpemVzKHtcbiAgICAgICAgICAuLi53aW5kb3dTaXplcyxcbiAgICAgICAgICBba2V5XTogeyB3OiBkYXRhLnNpemUud2lkdGgsIGg6IGRhdGEuc2l6ZS5oZWlnaHQgfSxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYW5kbGVaSW5kZXggPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG51bXMgPSBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKS5sZW5ndGhcbiAgICAgICAgICA/IE9iamVjdC52YWx1ZXMod2luZG93WkluZGV4ZXMpXG4gICAgICAgICAgOiBbMF07XG5cbiAgICAgICAgY29uc3QgekluZGV4ID0gTWF0aC5tYXgoLi4uKG51bXMgYXMgbnVtYmVyW10pKSArIDE7XG5cbiAgICAgICAgc2V0V2luZG93WkluZGV4ZXMoeyAuLi53aW5kb3daSW5kZXhlcywgW2tleV06IHpJbmRleCB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhbmRsZURyYWcgPSAoZTogRHJhZ2dhYmxlRXZlbnQsIGRhdGE6IERyYWdnYWJsZURhdGEpID0+IHtcbiAgICAgICAgaWYgKHdpbmRvd01heGltaXplc1trZXldIHx8IHdpbmRvd01pbmltaXplc1trZXldKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0V2luZG93TG9jYXRpb25zKHtcbiAgICAgICAgICAuLi53aW5kb3dMb2NhdGlvbnMsXG4gICAgICAgICAgW2tleV06IHsgeDogZGF0YS54LCB5OiBkYXRhLnkgfSxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYW5kbGVNYXhpbWl6ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2luZG93TWluaW1pemVzKHtcbiAgICAgICAgICAuLi53aW5kb3dNaW5pbWl6ZXMsXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01heGltaXplc1trZXldLFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGhhbmRsZU1pbmltaXplID0gKCkgPT4ge1xuICAgICAgICBzZXRXaW5kb3dNYXhpbWl6ZXMoe1xuICAgICAgICAgIC4uLndpbmRvd01heGltaXplcyxcbiAgICAgICAgICBba2V5XTogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxuICAgICAgICAgIFtrZXldOiAhd2luZG93TWluaW1pemVzW2tleV0sXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVuZGVyTWluaW1pemUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtaW5pbWl6YWJsZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1taW5pbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1pbmltaXplfT48L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZW5kZXJNYXhpbWl6ZSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIG1heGltaXphYmxlID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctYnV0dG9uIHR3LW1heGltaXplXCIgb25DbGljaz17aGFuZGxlTWF4aW1pemV9PjwvZGl2PlxuICAgICAgICApIDogbnVsbDtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbmRlckhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNsc3goXCJ0dy1oZWFkZXJcIiwge1xuICAgICAgICAgIFwidHctZHJhZ2dhYmxlXCI6IGRyYWdnYWJsZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXRpdGxlXCI+e3RpdGxlID8gdCh0aXRsZSkgOiBudWxsfTwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbnNcIiBvbkNsaWNrPXtoYW5kbGVaSW5kZXh9PlxuICAgICAgICAgICAgICB7cmVuZGVyTWluaW1pemUoKX1cblxuICAgICAgICAgICAgICB7cmVuZGVyTWF4aW1pemUoKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVuZGVyQm9keSA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwidHctYm9keVwiPntyZW5kZXJCb2R5Q29udGVudHMoKX08L2Rpdj47XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZW5kZXJCb2R5Q29udGVudHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gd2luZG93TWF4aW1pemVzW2tleV1cbiAgICAgICAgICA/IFwiMTAwJVwiXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLndcbiAgICAgICAgICA6IHNpemUudztcblxuICAgICAgICBjb25zdCBoZWlnaHQgPSB3aW5kb3dNYXhpbWl6ZXNba2V5XVxuICAgICAgICAgID8gXCIxMDAlXCJcbiAgICAgICAgICA6IHdpbmRvd1NpemVzW2tleV1cbiAgICAgICAgICA/IHdpbmRvd1NpemVzW2tleV0uaFxuICAgICAgICAgIDogc2l6ZS5oO1xuXG4gICAgICAgIHJldHVybiByZXNpemFibGUgJiYgIXdpbmRvd01heGltaXplc1trZXldID8gKFxuICAgICAgICAgIDxSZXNpemFibGVCb3hcbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgICAgcmVzaXplSGFuZGxlcz17W1wic2VcIl19XG4gICAgICAgICAgICBkcmFnZ2FibGVPcHRzPXt7IGdyaWQ6IFtncmlkLCBncmlkXSB9fVxuICAgICAgICAgICAgb25SZXNpemVTdG9wPXtoYW5kbGVSZXNpemV9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2NvbXBvbmVudH1cbiAgICAgICAgICA8L1Jlc2l6YWJsZUJveD5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX0+e2NvbXBvbmVudH08L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctd2luZG93XCIsIGtleSwge1xuICAgICAgICBcInR3LXRhc2tiYXItb25cIjogdGFza2JhcixcbiAgICAgICAgXCJ0dy10YXNrYmFyLW9mZlwiOiAhdGFza2JhcixcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vblwiOiB3aW5kb3dNaW5pbWl6ZXNba2V5XSxcbiAgICAgICAgXCJ0dy1taW5pbWl6ZS1vZmZcIjogIXdpbmRvd01pbmltaXplc1trZXldLFxuICAgICAgICBcInR3LW1heGltaXplLW9uXCI6IHdpbmRvd01heGltaXplc1trZXldLFxuICAgICAgICBcInR3LW1heGltaXplLW9mZlwiOiAhd2luZG93TWF4aW1pemVzW2tleV0sXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZWxlbWVudDogSlNYLkVsZW1lbnQgPSAoXG4gICAgICAgIDxEcmFnZ2FibGVcbiAgICAgICAgICBrZXk9e2tleX1cbiAgICAgICAgICBkZWZhdWx0UG9zaXRpb249e3dpbmRvd0xvY2F0aW9uc1trZXldIHx8IGxvY2F0aW9ufVxuICAgICAgICAgIGdyaWQ9e1tncmlkIGFzIG51bWJlciwgZ3JpZCBhcyBudW1iZXJdfVxuICAgICAgICAgIHNjYWxlPXsxfVxuICAgICAgICAgIGhhbmRsZT1cIi50dy1kcmFnZ2FibGVcIlxuICAgICAgICAgIGJvdW5kcz1cInBhcmVudFwiXG4gICAgICAgICAgb25TdGFydD17aGFuZGxlWkluZGV4fVxuICAgICAgICAgIG9uU3RvcD17aGFuZGxlRHJhZ31cbiAgICAgICAgICBjYW5jZWw9XCIudHctYnV0dG9uc1wiXG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3NOYW1lc30gc3R5bGU9e3sgekluZGV4OiB3aW5kb3daSW5kZXhlc1trZXldIH19PlxuICAgICAgICAgICAge3JlbmRlckhlYWRlcigpfVxuXG4gICAgICAgICAgICB7cmVuZGVyQm9keSgpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0RyYWdnYWJsZT5cbiAgICAgICk7XG5cbiAgICAgIGlmICh3aW5kb3dNaW5pbWl6ZXNba2V5XSAmJiB0YXNrYmFyKSB7XG4gICAgICAgIHRhc2tiYXJJdGVtc0luID0gWy4uLnRhc2tiYXJJdGVtc0luLCBlbGVtZW50XTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tiYXJJdGVtc091dCA9IFsuLi50YXNrYmFySXRlbXNPdXQsIGVsZW1lbnRdO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgc2V0VGFza2Jhckl0ZW1zSW4odGFza2Jhckl0ZW1zSW4pO1xuICAgIHNldFRhc2tiYXJJdGVtc091dCh0YXNrYmFySXRlbXNPdXQpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgfSwgW1xuICAgIHdpbmRvd1NpemVzLFxuICAgIHdpbmRvd1pJbmRleGVzLFxuICAgIHdpbmRvd0xvY2F0aW9ucyxcbiAgICB3aW5kb3dNYXhpbWl6ZXMsXG4gICAgd2luZG93TWluaW1pemVzLFxuICBdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHctd2luZG93c1wiPlxuICAgICAge3Rhc2tiYXJJdGVtc091dH1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10YXNrYmFyXCI+e3Rhc2tiYXJJdGVtc0lufTwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuV2luZG93cy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRhc2tiYXI6IHRydWUsXG4gIGdyaWQ6IDEsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dzO1xuIl19