"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("./App.scss");

var _Window = _interopRequireDefault(require("./components/Window"));

var _Windows = _interopRequireDefault(require("./components/Windows"));

var _WindowsProvider = _interopRequireDefault(require("./components/WindowsProvider"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "app"
  }, /*#__PURE__*/_react.default.createElement(_WindowsProvider.default, null, /*#__PURE__*/_react.default.createElement(_Windows.default, {
    id: "example",
    taskbar: true,
    step: 5
  }, /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window1",
    grids: {
      mobile: {
        x: 0,
        y: 0,
        w: 12,
        h: 1
      },
      tablet: {
        x: 0,
        y: 0,
        w: 6,
        h: 3
      },
      desktop: {
        x: 0,
        y: 0,
        w: 4,
        h: 4
      }
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 1")
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Draggable, resizable, minimizable and maximizable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window2",
    grids: {
      mobile: {
        x: 0,
        y: 1,
        w: 12,
        h: 1
      },
      tablet: {
        x: 6,
        y: 0,
        w: 6,
        h: 3
      },
      desktop: {
        x: 4,
        y: 0,
        w: 4,
        h: 4
      }
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 2"),
    minSize: {
      w: 200,
      h: 100
    },
    maxSize: {
      w: 500,
      h: 300
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "With minimum and maximum size.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window3",
    grids: {
      mobile: {
        x: 0,
        y: 2,
        w: 12,
        h: 1
      },
      tablet: {
        x: 0,
        y: 3,
        w: 6,
        h: 3
      },
      desktop: {
        x: 8,
        y: 0,
        w: 4,
        h: 4
      }
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 3"),
    bounds: {
      mobile: {
        top: 0,
        left: 0,
        right: 12,
        bottom: 6
      },
      tablet: {
        top: 0,
        left: 6,
        right: 12,
        bottom: 12
      },
      desktop: {
        top: 0,
        left: 0,
        right: 12,
        bottom: 6
      }
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Bounded to half of the screen.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window4",
    grids: {
      mobile: {
        x: 0,
        y: 3,
        w: 12,
        h: 1
      },
      tablet: {
        x: 6,
        y: 3,
        w: 6,
        h: 3
      },
      desktop: {
        x: 0,
        y: 4,
        w: 4,
        h: 4
      }
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 4"),
    draggable: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Not draggable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window5",
    grids: {
      mobile: {
        x: 0,
        y: 4,
        w: 12,
        h: 1
      },
      tablet: {
        x: 0,
        y: 6,
        w: 6,
        h: 3
      },
      desktop: {
        x: 4,
        y: 4,
        w: 4,
        h: 4
      }
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 5"),
    resizable: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Not resizable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window6",
    grids: {
      mobile: {
        x: 0,
        y: 5,
        w: 12,
        h: 1
      },
      tablet: {
        x: 6,
        y: 6,
        w: 6,
        h: 3
      },
      desktop: {
        x: 8,
        y: 4,
        w: 4,
        h: 4
      }
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 6"),
    minimizable: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Not minimizable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window7",
    grids: {
      mobile: {
        x: 0,
        y: 6,
        w: 12,
        h: 1
      },
      tablet: {
        x: 0,
        y: 9,
        w: 6,
        h: 3
      },
      desktop: {
        x: 0,
        y: 8,
        w: 4,
        h: 4
      }
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 7"),
    maximizable: false
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Not maximizable.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window8",
    grids: {
      mobile: {
        x: 0,
        y: 7,
        w: 12,
        h: 1
      },
      tablet: {
        x: 6,
        y: 9,
        w: 6,
        h: 3
      },
      desktop: {
        x: 4,
        y: 8,
        w: 4,
        h: 4
      }
    },
    startMinimized: {
      mobile: false,
      tablet: true,
      desktop: false
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Without a title. Start minimized on tablet only.")), /*#__PURE__*/_react.default.createElement(_Window.default, {
    id: "window9",
    grids: {
      mobile: {
        x: 0,
        y: 8,
        w: 12,
        h: 1
      },
      tablet: {
        x: 2,
        y: 2,
        w: 8,
        h: 8
      },
      desktop: {
        x: 8,
        y: 8,
        w: 4,
        h: 4
      }
    },
    title: /*#__PURE__*/_react.default.createElement("div", null, "Window 9"),
    startMinimized: {
      mobile: true,
      tablet: true,
      desktop: true
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      padding: "1rem"
    }
  }, "Starting minimized.")))));
};

var _default = App;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAudHN4Il0sIm5hbWVzIjpbIkFwcCIsIm1vYmlsZSIsIngiLCJ5IiwidyIsImgiLCJ0YWJsZXQiLCJkZXNrdG9wIiwicGFkZGluZyIsInRvcCIsImxlZnQiLCJyaWdodCIsImJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOzs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBTTtBQUNoQixzQkFDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsa0JBQ0UsNkJBQUMsd0JBQUQscUJBQ0UsNkJBQUMsZ0JBQUQ7QUFBUyxJQUFBLEVBQUUsRUFBQyxTQUFaO0FBQXNCLElBQUEsT0FBTyxFQUFFLElBQS9CO0FBQXFDLElBQUEsSUFBSSxFQUFFO0FBQTNDLGtCQUNFLDZCQUFDLGVBQUQ7QUFDRSxJQUFBLEVBQUUsRUFBQyxTQURMO0FBRUUsSUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsTUFBTSxFQUFFO0FBQUVDLFFBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLFFBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLFFBQUFBLENBQUMsRUFBRSxFQUFqQjtBQUFxQkMsUUFBQUEsQ0FBQyxFQUFFO0FBQXhCLE9BREg7QUFFTEMsTUFBQUEsTUFBTSxFQUFFO0FBQUVKLFFBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLFFBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLFFBQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsUUFBQUEsQ0FBQyxFQUFFO0FBQXZCLE9BRkg7QUFHTEUsTUFBQUEsT0FBTyxFQUFFO0FBQUVMLFFBQUFBLENBQUMsRUFBRSxDQUFMO0FBQVFDLFFBQUFBLENBQUMsRUFBRSxDQUFYO0FBQWNDLFFBQUFBLENBQUMsRUFBRSxDQUFqQjtBQUFvQkMsUUFBQUEsQ0FBQyxFQUFFO0FBQXZCO0FBSEosS0FGVDtBQU9FLElBQUEsS0FBSyxlQUFFO0FBUFQsa0JBU0U7QUFBSyxJ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QUFjLEVBQUU7QUFBRUosTUFBQUEsTUFBTSxFQUFFLElBQVY7QUFBZ0JLLE1BQUFBLE1BQU0sRUFBRSxJQUF4QjtBQUE4QkMsTUFBQUEsT0FBTyxFQUFFO0FBQXZDO0FBUmxCLGtCQVVFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBWiwyQkFWRixDQXBIRixDQURGLENBREYsQ0FERjtBQXVJRCxDQXhJRDs7ZUEwSWVSLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbXBvcnQgXCIuL0FwcC5zY3NzXCI7XHJcbmltcG9ydCBXaW5kb3cgZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dcIjtcclxuaW1wb3J0IFdpbmRvd3MgZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dzXCI7XHJcbmltcG9ydCBXaW5kb3dzUHJvdmlkZXIgZnJvbSBcIi4vY29tcG9uZW50cy9XaW5kb3dzUHJvdmlkZXJcIjtcclxuXHJcbmNvbnN0IEFwcCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhcHBcIj5cclxuICAgICAgPFdpbmRvd3NQcm92aWRlcj5cclxuICAgICAgICA8V2luZG93cyBpZD1cImV4YW1wbGVcIiB0YXNrYmFyPXt0cnVlfSBzdGVwPXs1fT5cclxuICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgaWQ9XCJ3aW5kb3cxXCJcclxuICAgICAgICAgICAgZ3JpZHM9e3tcclxuICAgICAgICAgICAgICBtb2JpbGU6IHsgeDogMCwgeTogMCwgdzogMTIsIGg6IDEgfSxcclxuICAgICAgICAgICAgICB0YWJsZXQ6IHsgeDogMCwgeTogMCwgdzogNiwgaDogMyB9LFxyXG4gICAgICAgICAgICAgIGRlc2t0b3A6IHsgeDogMCwgeTogMCwgdzogNCwgaDogNCB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0aXRsZT17PGRpdj5XaW5kb3cgMTwvZGl2Pn1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAgICBEcmFnZ2FibGUsIHJlc2l6YWJsZSwgbWluaW1pemFibGUgYW5kIG1heGltaXphYmxlLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvV2luZG93PlxyXG5cclxuICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgaWQ9XCJ3aW5kb3cyXCJcclxuICAgICAgICAgICAgZ3JpZHM9e3tcclxuICAgICAgICAgICAgICBtb2JpbGU6IHsgeDogMCwgeTogMSwgdzogMTIsIGg6IDEgfSxcclxuICAgICAgICAgICAgICB0YWJsZXQ6IHsgeDogNiwgeTogMCwgdzogNiwgaDogMyB9LFxyXG4gICAgICAgICAgICAgIGRlc2t0b3A6IHsgeDogNCwgeTogMCwgdzogNCwgaDogNCB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0aXRsZT17PGRpdj5XaW5kb3cgMjwvZGl2Pn1cclxuICAgICAgICAgICAgbWluU2l6ZT17eyB3OiAyMDAsIGg6IDEwMCB9fVxyXG4gICAgICAgICAgICBtYXhTaXplPXt7IHc6IDUwMCwgaDogMzAwIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxcmVtXCIgfX0+XHJcbiAgICAgICAgICAgICAgV2l0aCBtaW5pbXVtIGFuZCBtYXhpbXVtIHNpemUuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9XaW5kb3c+XHJcblxyXG4gICAgICAgICAgPFdpbmRvd1xyXG4gICAgICAgICAgICBpZD1cIndpbmRvdzNcIlxyXG4gICAgICAgICAgICBncmlkcz17e1xyXG4gICAgICAgICAgICAgIG1vYmlsZTogeyB4OiAwLCB5OiAyLCB3OiAxMiwgaDogMSB9LFxyXG4gICAgICAgICAgICAgIHRhYmxldDogeyB4OiAwLCB5OiAzLCB3OiA2LCBoOiAzIH0sXHJcbiAgICAgICAgICAgICAgZGVza3RvcDogeyB4OiA4LCB5OiAwLCB3OiA0LCBoOiA0IH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHRpdGxlPXs8ZGl2PldpbmRvdyAzPC9kaXY+fVxyXG4gICAgICAgICAgICBib3VuZHM9e3tcclxuICAgICAgICAgICAgICBtb2JpbGU6IHsgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMTIsIGJvdHRvbTogNiB9LFxyXG4gICAgICAgICAgICAgIHRhYmxldDogeyB0b3A6IDAsIGxlZnQ6IDYsIHJpZ2h0OiAxMiwgYm90dG9tOiAxMiB9LFxyXG4gICAgICAgICAgICAgIGRlc2t0b3A6IHsgdG9wOiAwLCBsZWZ0OiAwLCByaWdodDogMTIsIGJvdHRvbTogNiB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIEJvdW5kZWQgdG8gaGFsZiBvZiB0aGUgc2NyZWVuLlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvV2luZG93PlxyXG5cclxuICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgaWQ9XCJ3aW5kb3c0XCJcclxuICAgICAgICAgICAgZ3JpZHM9e3tcclxuICAgICAgICAgICAgICBtb2JpbGU6IHsgeDogMCwgeTogMywgdzogMTIsIGg6IDEgfSxcclxuICAgICAgICAgICAgICB0YWJsZXQ6IHsgeDogNiwgeTogMywgdzogNiwgaDogMyB9LFxyXG4gICAgICAgICAgICAgIGRlc2t0b3A6IHsgeDogMCwgeTogNCwgdzogNCwgaDogNCB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0aXRsZT17PGRpdj5XaW5kb3cgNDwvZGl2Pn1cclxuICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5Ob3QgZHJhZ2dhYmxlLjwvZGl2PlxyXG4gICAgICAgICAgPC9XaW5kb3c+XHJcblxyXG4gICAgICAgICAgPFdpbmRvd1xyXG4gICAgICAgICAgICBpZD1cIndpbmRvdzVcIlxyXG4gICAgICAgICAgICBncmlkcz17e1xyXG4gICAgICAgICAgICAgIG1vYmlsZTogeyB4OiAwLCB5OiA0LCB3OiAxMiwgaDogMSB9LFxyXG4gICAgICAgICAgICAgIHRhYmxldDogeyB4OiAwLCB5OiA2LCB3OiA2LCBoOiAzIH0sXHJcbiAgICAgICAgICAgICAgZGVza3RvcDogeyB4OiA0LCB5OiA0LCB3OiA0LCBoOiA0IH0sXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIHRpdGxlPXs8ZGl2PldpbmRvdyA1PC9kaXY+fVxyXG4gICAgICAgICAgICByZXNpemFibGU9e2ZhbHNlfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19Pk5vdCByZXNpemFibGUuPC9kaXY+XHJcbiAgICAgICAgICA8L1dpbmRvdz5cclxuXHJcbiAgICAgICAgICA8V2luZG93XHJcbiAgICAgICAgICAgIGlkPVwid2luZG93NlwiXHJcbiAgICAgICAgICAgIGdyaWRzPXt7XHJcbiAgICAgICAgICAgICAgbW9iaWxlOiB7IHg6IDAsIHk6IDUsIHc6IDEyLCBoOiAxIH0sXHJcbiAgICAgICAgICAgICAgdGFibGV0OiB7IHg6IDYsIHk6IDYsIHc6IDYsIGg6IDMgfSxcclxuICAgICAgICAgICAgICBkZXNrdG9wOiB7IHg6IDgsIHk6IDQsIHc6IDQsIGg6IDQgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdGl0bGU9ezxkaXY+V2luZG93IDY8L2Rpdj59XHJcbiAgICAgICAgICAgIG1pbmltaXphYmxlPXtmYWxzZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5Ob3QgbWluaW1pemFibGUuPC9kaXY+XHJcbiAgICAgICAgICA8L1dpbmRvdz5cclxuXHJcbiAgICAgICAgICA8V2luZG93XHJcbiAgICAgICAgICAgIGlkPVwid2luZG93N1wiXHJcbiAgICAgICAgICAgIGdyaWRzPXt7XHJcbiAgICAgICAgICAgICAgbW9iaWxlOiB7IHg6IDAsIHk6IDYsIHc6IDEyLCBoOiAxIH0sXHJcbiAgICAgICAgICAgICAgdGFibGV0OiB7IHg6IDAsIHk6IDksIHc6IDYsIGg6IDMgfSxcclxuICAgICAgICAgICAgICBkZXNrdG9wOiB7IHg6IDAsIHk6IDgsIHc6IDQsIGg6IDQgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgdGl0bGU9ezxkaXY+V2luZG93IDc8L2Rpdj59XHJcbiAgICAgICAgICAgIG1heGltaXphYmxlPXtmYWxzZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5Ob3QgbWF4aW1pemFibGUuPC9kaXY+XHJcbiAgICAgICAgICA8L1dpbmRvdz5cclxuXHJcbiAgICAgICAgICA8V2luZG93XHJcbiAgICAgICAgICAgIGlkPVwid2luZG93OFwiXHJcbiAgICAgICAgICAgIGdyaWRzPXt7XHJcbiAgICAgICAgICAgICAgbW9iaWxlOiB7IHg6IDAsIHk6IDcsIHc6IDEyLCBoOiAxIH0sXHJcbiAgICAgICAgICAgICAgdGFibGV0OiB7IHg6IDYsIHk6IDksIHc6IDYsIGg6IDMgfSxcclxuICAgICAgICAgICAgICBkZXNrdG9wOiB7IHg6IDQsIHk6IDgsIHc6IDQsIGg6IDQgfSxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgc3RhcnRNaW5pbWl6ZWQ9e3sgbW9iaWxlOiBmYWxzZSwgdGFibGV0OiB0cnVlLCBkZXNrdG9wOiBmYWxzZSB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgIFdpdGhvdXQgYSB0aXRsZS4gU3RhcnQgbWluaW1pemVkIG9uIHRhYmxldCBvbmx5LlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvV2luZG93PlxyXG5cclxuICAgICAgICAgIDxXaW5kb3dcclxuICAgICAgICAgICAgaWQ9XCJ3aW5kb3c5XCJcclxuICAgICAgICAgICAgZ3JpZHM9e3tcclxuICAgICAgICAgICAgICBtb2JpbGU6IHsgeDogMCwgeTogOCwgdzogMTIsIGg6IDEgfSxcclxuICAgICAgICAgICAgICB0YWJsZXQ6IHsgeDogMiwgeTogMiwgdzogOCwgaDogOCB9LFxyXG4gICAgICAgICAgICAgIGRlc2t0b3A6IHsgeDogOCwgeTogOCwgdzogNCwgaDogNCB9LFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICB0aXRsZT17PGRpdj5XaW5kb3cgOTwvZGl2Pn1cclxuICAgICAgICAgICAgc3RhcnRNaW5pbWl6ZWQ9e3sgbW9iaWxlOiB0cnVlLCB0YWJsZXQ6IHRydWUsIGRlc2t0b3A6IHRydWUgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiBcIjFyZW1cIiB9fT5TdGFydGluZyBtaW5pbWl6ZWQuPC9kaXY+XHJcbiAgICAgICAgICA8L1dpbmRvdz5cclxuICAgICAgICA8L1dpbmRvd3M+XHJcbiAgICAgIDwvV2luZG93c1Byb3ZpZGVyPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl19