"use strict";

var _i18next = _interopRequireDefault(require("i18next"));

var _reactI18next = require("react-i18next");

var _en = _interopRequireDefault(require("./languages/en"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_i18next.default.use(_reactI18next.initReactI18next).init({
  resources: {
    en: {
      translation: _en.default
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9sb2NhbGl6YXRpb24vaW5kZXgudHMiXSwibmFtZXMiOlsiaTE4biIsInVzZSIsImluaXRSZWFjdEkxOG5leHQiLCJpbml0IiwicmVzb3VyY2VzIiwiZW4iLCJ0cmFuc2xhdGlvbiIsImxuZyIsImZhbGxiYWNrTG5nIiwiaW50ZXJwb2xhdGlvbiIsImVzY2FwZVZhbHVlIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBOztBQUVBOzs7O0FBRUFBLGlCQUFLQyxHQUFMLENBQVNDLDhCQUFULEVBQTJCQyxJQUEzQixDQUFnQztBQUM5QkMsRUFBQUEsU0FBUyxFQUFFO0FBQ1RDLElBQUFBLEVBQUUsRUFBRTtBQUNGQyxNQUFBQSxXQUFXLEVBQUVEO0FBRFg7QUFESyxHQURtQjtBQU05QkUsRUFBQUEsR0FBRyxFQUFFLElBTnlCO0FBTzlCQyxFQUFBQSxXQUFXLEVBQUUsSUFQaUI7QUFROUJDLEVBQUFBLGFBQWEsRUFBRTtBQUNiQyxJQUFBQSxXQUFXLEVBQUU7QUFEQTtBQVJlLENBQWhDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGkxOG4gZnJvbSBcImkxOG5leHRcIjtcbmltcG9ydCB7IGluaXRSZWFjdEkxOG5leHQgfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xuXG5pbXBvcnQgZW4gZnJvbSBcIi4vbGFuZ3VhZ2VzL2VuXCI7XG5cbmkxOG4udXNlKGluaXRSZWFjdEkxOG5leHQpLmluaXQoe1xuICByZXNvdXJjZXM6IHtcbiAgICBlbjoge1xuICAgICAgdHJhbnNsYXRpb246IGVuLFxuICAgIH0sXG4gIH0sXG4gIGxuZzogXCJlblwiLFxuICBmYWxsYmFja0xuZzogXCJlblwiLFxuICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgZXNjYXBlVmFsdWU6IGZhbHNlLFxuICB9LFxufSk7XG4iXX0=