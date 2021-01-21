"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocalStorage = void 0;

var getLocalStorage = function getLocalStorage(id, name, defaultValue) {
  var stprage = localStorage.getItem("windows");
  var windows = stprage ? JSON.parse(stprage) : {};
  return windows[id] && windows[id][name] ? windows[id][name] : defaultValue;
};

exports.getLocalStorage = getLocalStorage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXRMb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOlsiZ2V0TG9jYWxTdG9yYWdlIiwiaWQiLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwic3RwcmFnZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ3aW5kb3dzIiwiSlNPTiIsInBhcnNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQU8sSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUM3QkMsRUFENkIsRUFFN0JDLElBRjZCLEVBRzdCQyxZQUg2QixFQUkxQjtBQUNILE1BQU1DLE9BQU8sR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFNBQXJCLENBQWhCO0FBRUEsTUFBTUMsT0FBTyxHQUFHSCxPQUFPLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxPQUFYLENBQUgsR0FBbUMsRUFBMUQ7QUFFQSxTQUFPRyxPQUFPLENBQUNOLEVBQUQsQ0FBUCxJQUFlTSxPQUFPLENBQUNOLEVBQUQsQ0FBUCxDQUFZQyxJQUFaLENBQWYsR0FBbUNLLE9BQU8sQ0FBQ04sRUFBRCxDQUFQLENBQVlDLElBQVosQ0FBbkMsR0FBdURDLFlBQTlEO0FBQ0QsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSAoXHJcbiAgaWQ6IHN0cmluZyxcclxuICBuYW1lOiBzdHJpbmcsXHJcbiAgZGVmYXVsdFZhbHVlOiBhbnlcclxuKSA9PiB7XHJcbiAgY29uc3Qgc3RwcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwid2luZG93c1wiKTtcclxuXHJcbiAgY29uc3Qgd2luZG93cyA9IHN0cHJhZ2UgPyBKU09OLnBhcnNlKHN0cHJhZ2UgYXMgc3RyaW5nKSA6IHt9O1xyXG5cclxuICByZXR1cm4gd2luZG93c1tpZF0gJiYgd2luZG93c1tpZF1bbmFtZV0gPyB3aW5kb3dzW2lkXVtuYW1lXSA6IGRlZmF1bHRWYWx1ZTtcclxufTtcclxuIl19