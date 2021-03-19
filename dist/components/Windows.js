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
        zIndexes[w.key] = 100 + Math.round(Math.random() * 200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1dpbmRvd3MudHN4Il0sIm5hbWVzIjpbIldpbmRvd3MiLCJwcm9wcyIsIndpbmRvd3MiLCJ0YXNrYmFyIiwiZ3JpZCIsImdldERlZmF1bHRWYWx1ZXMiLCJzaXplcyIsInpJbmRleGVzIiwibG9jYXRpb25zIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwidyIsImtleSIsInNpemUiLCJoIiwiTWF0aCIsInJvdW5kIiwicmFuZG9tIiwieCIsImxvY2F0aW9uIiwieSIsImRlZmF1bHRzIiwiaVdpbmRvd1NpemVzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImlXaW5kb3daSW5kZXhlcyIsImlXaW5kb3dMb2NhdGlvbnMiLCJpV2luZG93TWF4aW1pemVzIiwiaVdpbmRvd01pbmltaXplcyIsInQiLCJ3aW5kb3dTaXplcyIsInNldFdpbmRvd1NpemVzIiwid2luZG93WkluZGV4ZXMiLCJzZXRXaW5kb3daSW5kZXhlcyIsIndpbmRvd0xvY2F0aW9ucyIsInNldFdpbmRvd0xvY2F0aW9ucyIsIndpbmRvd01heGltaXplcyIsInNldFdpbmRvd01heGltaXplcyIsIndpbmRvd01pbmltaXplcyIsInNldFdpbmRvd01pbmltaXplcyIsInRhc2tiYXJJdGVtc0luIiwic2V0VGFza2Jhckl0ZW1zSW4iLCJ0YXNrYmFySXRlbXNPdXQiLCJzZXRUYXNrYmFySXRlbXNPdXQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiZm9yRWFjaCIsIndpbmRvdyIsInRpdGxlIiwiY29tcG9uZW50IiwiZHJhZ2dhYmxlIiwicmVzaXphYmxlIiwibWluaW1pemFibGUiLCJtYXhpbWl6YWJsZSIsImhhbmRsZVJlc2l6ZSIsImUiLCJkYXRhIiwid2lkdGgiLCJoZWlnaHQiLCJoYW5kbGVaSW5kZXgiLCJudW1zIiwiT2JqZWN0IiwidmFsdWVzIiwibGVuZ3RoIiwiekluZGV4IiwibWF4IiwiaGFuZGxlRHJhZyIsImhhbmRsZU1heGltaXplIiwiaGFuZGxlTWluaW1pemUiLCJyZW5kZXJNaW5pbWl6ZSIsInJlbmRlck1heGltaXplIiwicmVuZGVySGVhZGVyIiwiY2xhc3NOYW1lcyIsInJlbmRlckJvZHkiLCJyZW5kZXJCb2R5Q29udGVudHMiLCJlbGVtZW50IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0JBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBeUI7QUFBQSxNQUMvQkMsT0FEK0IsR0FDSkQsS0FESSxDQUMvQkMsT0FEK0I7QUFBQSxNQUN0QkMsT0FEc0IsR0FDSkYsS0FESSxDQUN0QkUsT0FEc0I7QUFBQSxNQUNiQyxJQURhLEdBQ0pILEtBREksQ0FDYkcsSUFEYTs7QUFFdkMsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQzdCLFFBQUlDLEtBQVUsR0FBRyxFQUFqQjtBQUNBLFFBQUlDLFFBQWEsR0FBRyxFQUFwQjtBQUNBLFFBQUlDLFNBQWMsR0FBRyxFQUFyQjtBQUNBLFFBQUlDLFNBQWMsR0FBRyxFQUFyQjtBQUNBLFFBQUlDLFNBQWMsR0FBRyxFQUFyQjs7QUFMNkIsK0NBTWRSLE9BTmM7QUFBQTs7QUFBQTtBQU03QiwwREFBd0I7QUFBQSxZQUFkUyxDQUFjO0FBQ3RCTCxRQUFBQSxLQUFLLENBQUNLLENBQUMsQ0FBQ0MsR0FBSCxDQUFMLEdBQWU7QUFDYkQsVUFBQUEsQ0FBQyxFQUFFQSxDQUFDLENBQUNFLElBQUYsQ0FBT0YsQ0FERztBQUViRyxVQUFBQSxDQUFDLEVBQUVILENBQUMsQ0FBQ0UsSUFBRixDQUFPQztBQUZHLFNBQWY7QUFJQVAsUUFBQUEsUUFBUSxDQUFDSSxDQUFDLENBQUNDLEdBQUgsQ0FBUixHQUFrQixNQUFNRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWMsR0FB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QUFBLE9BQU8sRUFBRXlELFlBUFg7QUFRRSxRQUFBLE1BQU0sRUFBRU8sVUFSVjtBQVNFLFFBQUEsTUFBTSxFQUFDO0FBVFQsc0JBV0U7QUFBSyxRQUFBLFNBQVMsRUFBRU0sVUFBaEI7QUFBNEIsUUFBQSxLQUFLLEVBQUU7QUFBRVIsVUFBQUEsTUFBTSxFQUFFaEMsY0FBYyxDQUFDdEIsR0FBRDtBQUF4QjtBQUFuQyxTQUNHNkQsWUFBWSxFQURmLEVBR0dFLFVBQVUsRUFIYixDQVhGLENBREY7O0FBb0JBLFVBQUluQyxlQUFlLENBQUM1QixHQUFELENBQWYsSUFBd0JULE9BQTVCLEVBQXFDO0FBQ25DdUMsUUFBQUEsY0FBYyxnQ0FBT0EsY0FBUCxJQUF1Qm1DLE9BQXZCLEVBQWQ7QUFDRCxPQUZELE1BRU87QUFDTGpDLFFBQUFBLGVBQWUsZ0NBQU9BLGVBQVAsSUFBd0JpQyxPQUF4QixFQUFmO0FBQ0Q7QUFDRixLQWpLRDtBQW1LQWxDLElBQUFBLGlCQUFpQixDQUFDRCxjQUFELENBQWpCO0FBQ0FHLElBQUFBLGtCQUFrQixDQUFDRCxlQUFELENBQWxCLENBeEtjLENBeUtkO0FBQ0QsR0ExS0QsRUEwS0csQ0FDRFosV0FEQyxFQUVERSxjQUZDLEVBR0RFLGVBSEMsRUFJREUsZUFKQyxFQUtERSxlQUxDLENBMUtIO0FBa0xBLHNCQUNFO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNHSSxlQURILGVBR0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQTZCRixjQUE3QixDQUhGLENBREY7QUFPRCxDQXpRRDs7QUEyUUExQyxPQUFPLENBQUM4RSxZQUFSLEdBQXVCO0FBQ3JCM0UsRUFBQUEsT0FBTyxFQUFFLElBRFk7QUFFckJDLEVBQUFBLElBQUksRUFBRTtBQUZlLENBQXZCO2VBS2VKLE8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgU3ludGhldGljRXZlbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBEcmFnZ2FibGUsIHsgRHJhZ2dhYmxlRXZlbnQsIERyYWdnYWJsZURhdGEgfSBmcm9tIFwicmVhY3QtZHJhZ2dhYmxlXCI7XG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XG5pbXBvcnQgeyBSZXNpemFibGVCb3gsIFJlc2l6ZUNhbGxiYWNrRGF0YSB9IGZyb20gXCJyZWFjdC1yZXNpemFibGVcIjtcbmltcG9ydCBjbHN4IGZyb20gXCJjbHN4XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgV2luZG93IHtcbiAga2V5OiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBjb21wb25lbnQ6IEpTWC5FbGVtZW50O1xuICBzaXplOiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH07XG4gIGxvY2F0aW9uOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH07XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIHJlc2l6YWJsZT86IGJvb2xlYW47XG4gIG1pbmltaXphYmxlPzogYm9vbGVhbjtcbiAgbWF4aW1pemFibGU/OiBib29sZWFuO1xufVxuXG5pbnRlcmZhY2UgV2luZG93c1Byb3BzIHtcbiAgd2luZG93czogV2luZG93W107XG4gIHRhc2tiYXI/OiBib29sZWFuO1xuICBncmlkPzogbnVtYmVyO1xufVxuXG5jb25zdCBXaW5kb3dzID0gKHByb3BzOiBXaW5kb3dzUHJvcHMpID0+IHtcbiAgY29uc3QgeyB3aW5kb3dzLCB0YXNrYmFyLCBncmlkIH0gPSBwcm9wcztcbiAgY29uc3QgZ2V0RGVmYXVsdFZhbHVlcyA9ICgpID0+IHtcbiAgICBsZXQgc2l6ZXM6IGFueSA9IHt9XG4gICAgbGV0IHpJbmRleGVzOiBhbnkgPSB7fVxuICAgIGxldCBsb2NhdGlvbnM6IGFueSA9IHt9XG4gICAgbGV0IG1heGltaXplZDogYW55ID0ge31cbiAgICBsZXQgbWluaW1pemVkOiBhbnkgPSB7fVxuICAgIGZvcihjb25zdCB3IG9mIHdpbmRvd3MpIHtcbiAgICAgIHNpemVzW3cua2V5XSA9IHtcbiAgICAgICAgdzogdy5zaXplLncsXG4gICAgICAgIGg6IHcuc2l6ZS5oXG4gICAgICB9XG4gICAgICB6SW5kZXhlc1t3LmtleV0gPSAxMDAgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkqMjAwKVxuICAgICAgbG9jYXRpb25zW3cua2V5XSA9IHtcbiAgICAgICAgeDogdy5sb2NhdGlvbi54LFxuICAgICAgICB5OiB3LmxvY2F0aW9uLnlcbiAgICAgIH1cbiAgICAgIG1heGltaXplZFt3LmtleV0gPSBmYWxzZVxuICAgICAgbWluaW1pemVkW3cua2V5XSA9IGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBzaXplcyxcbiAgICAgIHpJbmRleGVzLFxuICAgICAgbG9jYXRpb25zLFxuICAgICAgbWF4aW1pemVkLFxuICAgICAgbWluaW1pemVkXG4gICAgfVxuICB9XG4gIGNvbnN0IGRlZmF1bHRzID0gZ2V0RGVmYXVsdFZhbHVlcygpXG4gIGNvbnN0IGlXaW5kb3dTaXplcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93U2l6ZXNcIilcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93U2l6ZXNcIikgYXMgc3RyaW5nKVxuICA6IGRlZmF1bHRzLnNpemVzO1xuXG5jb25zdCBpV2luZG93WkluZGV4ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIpXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd1pJbmRleGVzXCIpIGFzIHN0cmluZylcbiAgOiBkZWZhdWx0cy56SW5kZXhlcztcblxuY29uc3QgaVdpbmRvd0xvY2F0aW9ucyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TG9jYXRpb25zXCIpXG4gID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiKSBhcyBzdHJpbmcpXG4gIDogZGVmYXVsdHMubG9jYXRpb25zO1xuXG5jb25zdCBpV2luZG93TWF4aW1pemVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIilcbiAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93TWF4aW1pemVzXCIpIGFzIHN0cmluZylcbiAgOiBkZWZhdWx0cy5tYXhpbWl6ZWQ7XG5cbmNvbnN0IGlXaW5kb3dNaW5pbWl6ZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIndpbmRvd01pbmltaXplc1wiKVxuICA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ3aW5kb3dNaW5pbWl6ZXNcIikgYXMgc3RyaW5nKVxuICA6IGRlZmF1bHRzLm1pbmltaXplZDtcblxuICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG5cbiAgY29uc3QgW3dpbmRvd1NpemVzLCBzZXRXaW5kb3dTaXplc10gPSB1c2VTdGF0ZShpV2luZG93U2l6ZXMpO1xuICBjb25zdCBbd2luZG93WkluZGV4ZXMsIHNldFdpbmRvd1pJbmRleGVzXSA9IHVzZVN0YXRlKGlXaW5kb3daSW5kZXhlcyk7XG4gIGNvbnN0IFt3aW5kb3dMb2NhdGlvbnMsIHNldFdpbmRvd0xvY2F0aW9uc10gPSB1c2VTdGF0ZShpV2luZG93TG9jYXRpb25zKTtcbiAgY29uc3QgW3dpbmRvd01heGltaXplcywgc2V0V2luZG93TWF4aW1pemVzXSA9IHVzZVN0YXRlKGlXaW5kb3dNYXhpbWl6ZXMpO1xuICBjb25zdCBbd2luZG93TWluaW1pemVzLCBzZXRXaW5kb3dNaW5pbWl6ZXNdID0gdXNlU3RhdGUoaVdpbmRvd01pbmltaXplcyk7XG4gIGNvbnN0IFt0YXNrYmFySXRlbXNJbiwgc2V0VGFza2Jhckl0ZW1zSW5dID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xuICBjb25zdCBbdGFza2Jhckl0ZW1zT3V0LCBzZXRUYXNrYmFySXRlbXNPdXRdID0gdXNlU3RhdGU8SlNYLkVsZW1lbnRbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dTaXplc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dTaXplcykpO1xuICB9LCBbd2luZG93U2l6ZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93WkluZGV4ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93WkluZGV4ZXMpKTtcbiAgfSwgW3dpbmRvd1pJbmRleGVzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIndpbmRvd0xvY2F0aW9uc1wiLCBKU09OLnN0cmluZ2lmeSh3aW5kb3dMb2NhdGlvbnMpKTtcbiAgfSwgW3dpbmRvd0xvY2F0aW9uc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ3aW5kb3dNYXhpbWl6ZXNcIiwgSlNPTi5zdHJpbmdpZnkod2luZG93TWF4aW1pemVzKSk7XG4gIH0sIFt3aW5kb3dNYXhpbWl6ZXNdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwid2luZG93TWluaW1pemVzXCIsIEpTT04uc3RyaW5naWZ5KHdpbmRvd01pbmltaXplcykpO1xuICB9LCBbd2luZG93TWluaW1pemVzXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdGFza2Jhckl0ZW1zSW46IEpTWC5FbGVtZW50W10gPSBbXTtcbiAgICBsZXQgdGFza2Jhckl0ZW1zT3V0OiBKU1guRWxlbWVudFtdID0gW107XG5cbiAgICB3aW5kb3dzLmZvckVhY2goKHdpbmRvdzogV2luZG93KSA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGtleSxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGNvbXBvbmVudCxcbiAgICAgICAgc2l6ZSxcbiAgICAgICAgbG9jYXRpb24sXG4gICAgICAgIGRyYWdnYWJsZSxcbiAgICAgICAgcmVzaXphYmxlLFxuICAgICAgICBtaW5pbWl6YWJsZSxcbiAgICAgICAgbWF4aW1pemFibGUsXG4gICAgICB9ID0gd2luZG93O1xuXG4gICAgICBjb25zdCBoYW5kbGVSZXNpemUgPSAoZTogU3ludGhldGljRXZlbnQsIGRhdGE6IFJlc2l6ZUNhbGxiYWNrRGF0YSkgPT4ge1xuICAgICAgICBzZXRXaW5kb3dTaXplcyh7XG4gICAgICAgICAgLi4ud2luZG93U2l6ZXMsXG4gICAgICAgICAgW2tleV06IHsgdzogZGF0YS5zaXplLndpZHRoLCBoOiBkYXRhLnNpemUuaGVpZ2h0IH0sXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFuZGxlWkluZGV4ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBudW1zID0gT2JqZWN0LnZhbHVlcyh3aW5kb3daSW5kZXhlcykubGVuZ3RoXG4gICAgICAgICAgPyBPYmplY3QudmFsdWVzKHdpbmRvd1pJbmRleGVzKVxuICAgICAgICAgIDogWzBdO1xuXG4gICAgICAgIGNvbnN0IHpJbmRleCA9IE1hdGgubWF4KC4uLihudW1zIGFzIG51bWJlcltdKSkgKyAxO1xuXG4gICAgICAgIHNldFdpbmRvd1pJbmRleGVzKHsgLi4ud2luZG93WkluZGV4ZXMsIFtrZXldOiB6SW5kZXggfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYW5kbGVEcmFnID0gKGU6IERyYWdnYWJsZUV2ZW50LCBkYXRhOiBEcmFnZ2FibGVEYXRhKSA9PiB7XG4gICAgICAgIGlmICh3aW5kb3dNYXhpbWl6ZXNba2V5XSB8fCB3aW5kb3dNaW5pbWl6ZXNba2V5XSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFdpbmRvd0xvY2F0aW9ucyh7XG4gICAgICAgICAgLi4ud2luZG93TG9jYXRpb25zLFxuICAgICAgICAgIFtrZXldOiB7IHg6IGRhdGEueCwgeTogZGF0YS55IH0sXG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgaGFuZGxlTWF4aW1pemUgPSAoKSA9PiB7XG4gICAgICAgIHNldFdpbmRvd01pbmltaXplcyh7XG4gICAgICAgICAgLi4ud2luZG93TWluaW1pemVzLFxuICAgICAgICAgIFtrZXldOiBmYWxzZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXG4gICAgICAgICAgW2tleV06ICF3aW5kb3dNYXhpbWl6ZXNba2V5XSxcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBoYW5kbGVNaW5pbWl6ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0V2luZG93TWF4aW1pemVzKHtcbiAgICAgICAgICAuLi53aW5kb3dNYXhpbWl6ZXMsXG4gICAgICAgICAgW2tleV06IGZhbHNlLFxuICAgICAgICB9KTtcblxuICAgICAgICBzZXRXaW5kb3dNaW5pbWl6ZXMoe1xuICAgICAgICAgIC4uLndpbmRvd01pbmltaXplcyxcbiAgICAgICAgICBba2V5XTogIXdpbmRvd01pbmltaXplc1trZXldLFxuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbmRlck1pbmltaXplID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gbWluaW1pemFibGUgPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b24gdHctbWluaW1pemVcIiBvbkNsaWNrPXtoYW5kbGVNaW5pbWl6ZX0+PC9kaXY+XG4gICAgICAgICkgOiBudWxsO1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVuZGVyTWF4aW1pemUgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBtYXhpbWl6YWJsZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LWJ1dHRvbiB0dy1tYXhpbWl6ZVwiIG9uQ2xpY2s9e2hhbmRsZU1heGltaXplfT48L2Rpdj5cbiAgICAgICAgKSA6IG51bGw7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZW5kZXJIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjbHN4KFwidHctaGVhZGVyXCIsIHtcbiAgICAgICAgICBcInR3LWRyYWdnYWJsZVwiOiBkcmFnZ2FibGUsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy10aXRsZVwiPnt0aXRsZSA/IHQodGl0bGUpIDogbnVsbH08L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dy1idXR0b25zXCIgb25DbGljaz17aGFuZGxlWkluZGV4fT5cbiAgICAgICAgICAgICAge3JlbmRlck1pbmltaXplKCl9XG5cbiAgICAgICAgICAgICAge3JlbmRlck1heGltaXplKCl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlbmRlckJvZHkgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cInR3LWJvZHlcIj57cmVuZGVyQm9keUNvbnRlbnRzKCl9PC9kaXY+O1xuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVuZGVyQm9keUNvbnRlbnRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHdpbmRvd01heGltaXplc1trZXldXG4gICAgICAgICAgPyBcIjEwMCVcIlxuICAgICAgICAgIDogd2luZG93U2l6ZXNba2V5XVxuICAgICAgICAgID8gd2luZG93U2l6ZXNba2V5XS53XG4gICAgICAgICAgOiBzaXplLnc7XG5cbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gd2luZG93TWF4aW1pemVzW2tleV1cbiAgICAgICAgICA/IFwiMTAwJVwiXG4gICAgICAgICAgOiB3aW5kb3dTaXplc1trZXldXG4gICAgICAgICAgPyB3aW5kb3dTaXplc1trZXldLmhcbiAgICAgICAgICA6IHNpemUuaDtcblxuICAgICAgICByZXR1cm4gcmVzaXphYmxlICYmICF3aW5kb3dNYXhpbWl6ZXNba2V5XSA/IChcbiAgICAgICAgICA8UmVzaXphYmxlQm94XG4gICAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodH1cbiAgICAgICAgICAgIHJlc2l6ZUhhbmRsZXM9e1tcInNlXCJdfVxuICAgICAgICAgICAgZHJhZ2dhYmxlT3B0cz17eyBncmlkOiBbZ3JpZCwgZ3JpZF0gfX1cbiAgICAgICAgICAgIG9uUmVzaXplU3RvcD17aGFuZGxlUmVzaXplfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtjb21wb25lbnR9XG4gICAgICAgICAgPC9SZXNpemFibGVCb3g+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19Pntjb21wb25lbnR9PC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjbGFzc05hbWVzID0gY2xzeChcInR3LXdpbmRvd1wiLCBrZXksIHtcbiAgICAgICAgXCJ0dy10YXNrYmFyLW9uXCI6IHRhc2tiYXIsXG4gICAgICAgIFwidHctdGFza2Jhci1vZmZcIjogIXRhc2tiYXIsXG4gICAgICAgIFwidHctbWluaW1pemUtb25cIjogd2luZG93TWluaW1pemVzW2tleV0sXG4gICAgICAgIFwidHctbWluaW1pemUtb2ZmXCI6ICF3aW5kb3dNaW5pbWl6ZXNba2V5XSxcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vblwiOiB3aW5kb3dNYXhpbWl6ZXNba2V5XSxcbiAgICAgICAgXCJ0dy1tYXhpbWl6ZS1vZmZcIjogIXdpbmRvd01heGltaXplc1trZXldLFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGVsZW1lbnQ6IEpTWC5FbGVtZW50ID0gKFxuICAgICAgICA8RHJhZ2dhYmxlXG4gICAgICAgICAga2V5PXtrZXl9XG4gICAgICAgICAgZGVmYXVsdFBvc2l0aW9uPXt3aW5kb3dMb2NhdGlvbnNba2V5XSB8fCBsb2NhdGlvbn1cbiAgICAgICAgICBncmlkPXtbZ3JpZCBhcyBudW1iZXIsIGdyaWQgYXMgbnVtYmVyXX1cbiAgICAgICAgICBzY2FsZT17MX1cbiAgICAgICAgICBoYW5kbGU9XCIudHctZHJhZ2dhYmxlXCJcbiAgICAgICAgICBib3VuZHM9XCJwYXJlbnRcIlxuICAgICAgICAgIG9uU3RhcnQ9e2hhbmRsZVpJbmRleH1cbiAgICAgICAgICBvblN0b3A9e2hhbmRsZURyYWd9XG4gICAgICAgICAgY2FuY2VsPVwiLnR3LWJ1dHRvbnNcIlxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzTmFtZXN9IHN0eWxlPXt7IHpJbmRleDogd2luZG93WkluZGV4ZXNba2V5XSB9fT5cbiAgICAgICAgICAgIHtyZW5kZXJIZWFkZXIoKX1cblxuICAgICAgICAgICAge3JlbmRlckJvZHkoKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9EcmFnZ2FibGU+XG4gICAgICApO1xuXG4gICAgICBpZiAod2luZG93TWluaW1pemVzW2tleV0gJiYgdGFza2Jhcikge1xuICAgICAgICB0YXNrYmFySXRlbXNJbiA9IFsuLi50YXNrYmFySXRlbXNJbiwgZWxlbWVudF07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrYmFySXRlbXNPdXQgPSBbLi4udGFza2Jhckl0ZW1zT3V0LCBlbGVtZW50XTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHNldFRhc2tiYXJJdGVtc0luKHRhc2tiYXJJdGVtc0luKTtcbiAgICBzZXRUYXNrYmFySXRlbXNPdXQodGFza2Jhckl0ZW1zT3V0KTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvZXhoYXVzdGl2ZS1kZXBzXG4gIH0sIFtcbiAgICB3aW5kb3dTaXplcyxcbiAgICB3aW5kb3daSW5kZXhlcyxcbiAgICB3aW5kb3dMb2NhdGlvbnMsXG4gICAgd2luZG93TWF4aW1pemVzLFxuICAgIHdpbmRvd01pbmltaXplcyxcbiAgXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInR3LXdpbmRvd3NcIj5cbiAgICAgIHt0YXNrYmFySXRlbXNPdXR9XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHctdGFza2JhclwiPnt0YXNrYmFySXRlbXNJbn08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbldpbmRvd3MuZGVmYXVsdFByb3BzID0ge1xuICB0YXNrYmFyOiB0cnVlLFxuICBncmlkOiAxLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgV2luZG93cztcbiJdfQ==