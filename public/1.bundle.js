webpackJsonp([1],{

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_anchor_link_smooth_scroll__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_anchor_link_smooth_scroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_anchor_link_smooth_scroll__);



var Events = function Events(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "events-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    id: "events",
    className: "block-title"
  }, "\u041C\u0435\u0440\u043E\u043F\u0440\u0438\u044F\u0442\u0438\u044F"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "events-subheader"
  }, "\u0423 \u043C\u0435\u043D\u044F \u0447\u0430\u0441\u0442\u043E \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u044E\u0442: \xAB\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440\u0430, \u0430 \u0432\u044B \u0442\u043E\u043B\u044C\u043A\u043E \u0441\u0432\u0430\u0434\u044C\u0431\u044B \u0432\u0435\u0434\u0451\u0442\u0435? \u0423 \u043D\u0430\u0441 \u044E\u0431\u0438\u043B\u0435\u0439/\u0432\u044B\u043F\u0443\u0441\u043A\u043D\u043E\u0439/\u043A\u043E\u0440\u043F\u043E\u0440\u0430\u0442\u0438\u0432...\xBB"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "events-subheader-all"
  }, "\u042F \u0432\u0435\u0434\u0443 \u0432\u0441\u0451!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "events-details-wrapper"
  }, props.appState.events.map(function (item, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "events-details-block",
      key: "event-".concat(index)
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_anchor_link_smooth_scroll___default.a, {
      href: item.link
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "details-photo-block"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      className: "details-photo",
      src: __webpack_require__(41)("./" + item.photo),
      alt: ""
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "details-description"
    }, item.description))));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "events-extra-info"
  }, props.appState.eventsExtraInfo.map(function (infoBlock, i) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "info-block",
      key: i
    }, infoBlock);
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Events);

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./event1.jpg": 42,
	"./event2.jpg": 43,
	"./event3.jpg": 44,
	"./event4.jpg": 45
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 41;

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/fcb20c79f55a5bd49f04549382ec403f.jpg";

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/10feb86b30eec3655979e4ea5b44c5d0.jpg";

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/28361f1a6b393e6792c86f8c3eb3ee80.jpg";

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/911bac1879626cba2189a72cb7516b1d.jpg";

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FdmVudHMuanN4Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZXZlbnRzIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ldmVudHMvZXZlbnQxLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2V2ZW50cy9ldmVudDIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvZXZlbnRzL2V2ZW50My5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ldmVudHMvZXZlbnQ0LmpwZyJdLCJuYW1lcyI6WyJFdmVudHMiLCJwcm9wcyIsImFwcFN0YXRlIiwiZXZlbnRzIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGluayIsInJlcXVpcmUiLCJwaG90byIsImRlc2NyaXB0aW9uIiwiZXZlbnRzRXh0cmFJbmZvIiwiaW5mb0Jsb2NrIiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2I7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUksTUFBRSxFQUFDLFFBQVA7QUFBZ0IsYUFBUyxFQUFDO0FBQTFCLDBFQURGLEVBRUU7QUFBRyxhQUFTLEVBQUM7QUFBYiwwZ0JBRkYsRUFHRTtBQUFHLGFBQVMsRUFBQztBQUFiLDJEQUhGLEVBSUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsTUFBZixDQUFzQkMsR0FBdEIsQ0FBMEIsVUFBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQzFDLFdBQ0E7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBc0MsU0FBRyxrQkFBV0EsS0FBWDtBQUF6QyxPQUNFLDREQUFDLHVFQUFEO0FBQVksVUFBSSxFQUFFRCxJQUFJLENBQUNFO0FBQXZCLE9BQ0U7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssZUFBUyxFQUFDLGVBQWY7QUFBK0IsU0FBRyxFQUFFQyw0QkFBMkIsR0FBR0gsSUFBSSxDQUFDSSxLQUE1QixDQUEzQztBQUErRSxTQUFHLEVBQUM7QUFBbkYsTUFERixFQUVFO0FBQUcsZUFBUyxFQUFDO0FBQWIsT0FBb0NKLElBQUksQ0FBQ0ssV0FBekMsQ0FGRixDQURGLENBREYsQ0FEQTtBQVNELEdBVkEsQ0FESCxDQUpGLEVBaUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR1QsS0FBSyxDQUFDQyxRQUFOLENBQWVTLGVBQWYsQ0FBK0JQLEdBQS9CLENBQW1DLFVBQUNRLFNBQUQsRUFBWUMsQ0FBWixFQUFrQjtBQUNwRCxXQUFPO0FBQUcsZUFBUyxFQUFDLFlBQWI7QUFBMEIsU0FBRyxFQUFFQTtBQUEvQixPQUFtQ0QsU0FBbkMsQ0FBUDtBQUNELEdBRkEsQ0FESCxDQWpCRixDQURhO0FBQUEsQ0FBZjs7QUEwQmVaLHFFQUFmLEU7Ozs7Ozs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCOzs7Ozs7O0FDcEJBLGlCQUFpQixxQkFBdUIsaUQ7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixpRDs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGlEOzs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsaUQiLCJmaWxlIjoiMS5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQW5jaG9yTGluayBmcm9tICdyZWFjdC1hbmNob3ItbGluay1zbW9vdGgtc2Nyb2xsJztcclxuXHJcbmNvbnN0IEV2ZW50cyA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiZXZlbnRzLXdyYXBwZXJcIj5cclxuICAgIDxoMSBpZD1cImV2ZW50c1wiIGNsYXNzTmFtZT1cImJsb2NrLXRpdGxlXCI+0JzQtdGA0L7Qv9GA0LjRj9GC0LjRjzwvaDE+XHJcbiAgICA8cCBjbGFzc05hbWU9XCJldmVudHMtc3ViaGVhZGVyXCI+0KMg0LzQtdC90Y8g0YfQsNGB0YLQviDRgdC/0YDQsNGI0LjQstCw0Y7RgjogwqvQkNC70LXQutGB0LDQvdC00YDQsCwg0LAg0LLRiyDRgtC+0LvRjNC60L4g0YHQstCw0LTRjNCx0Ysg0LLQtdC00ZHRgtC1PyDQoyDQvdCw0YEg0Y7QsdC40LvQtdC5L9Cy0YvQv9GD0YHQutC90L7QuS/QutC+0YDQv9C+0YDQsNGC0LjQsi4uLsK7PC9wPlxyXG4gICAgPHAgY2xhc3NOYW1lPVwiZXZlbnRzLXN1YmhlYWRlci1hbGxcIj7QryDQstC10LTRgyDQstGB0ZEhPC9wPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtZGV0YWlscy13cmFwcGVyXCI+XHJcbiAgICAgIHtwcm9wcy5hcHBTdGF0ZS5ldmVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtZGV0YWlscy1ibG9ja1wiIGtleT17YGV2ZW50LSR7aW5kZXh9YH0+XHJcbiAgICAgICAgICA8QW5jaG9yTGluayBocmVmPXtpdGVtLmxpbmt9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtcGhvdG8tYmxvY2tcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRldGFpbHMtcGhvdG9cIiBzcmM9e3JlcXVpcmUoJy4uL2ltYWdlcy9ldmVudHMvJyArIGl0ZW0ucGhvdG8pfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGV0YWlscy1kZXNjcmlwdGlvblwiPntpdGVtLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0FuY2hvckxpbms+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJldmVudHMtZXh0cmEtaW5mb1wiPlxyXG4gICAgICB7cHJvcHMuYXBwU3RhdGUuZXZlbnRzRXh0cmFJbmZvLm1hcCgoaW5mb0Jsb2NrLCBpKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIDxwIGNsYXNzTmFtZT1cImluZm8tYmxvY2tcIiBrZXk9e2l9PntpbmZvQmxvY2t9PC9wPlxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRXZlbnRzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0V2ZW50cy5qc3giLCJ2YXIgbWFwID0ge1xuXHRcIi4vZXZlbnQxLmpwZ1wiOiA0Mixcblx0XCIuL2V2ZW50Mi5qcGdcIjogNDMsXG5cdFwiLi9ldmVudDMuanBnXCI6IDQ0LFxuXHRcIi4vZXZlbnQ0LmpwZ1wiOiA0NVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDQxO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy9ldmVudHMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2ZjYjIwYzc5ZjU1YTViZDQ5ZjA0NTQ5MzgyZWM0MDNmLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy9ldmVudHMvZXZlbnQxLmpwZ1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzEwZmViODZiMzBlZWMzNjU1OTc5ZTRlYTViNDRjNWQwLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy9ldmVudHMvZXZlbnQyLmpwZ1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzI4MzYxZjFhNmIzOTNlNjc5MmM4NmY4YzNlYjNlZTgwLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy9ldmVudHMvZXZlbnQzLmpwZ1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzkxMWJhYzE4Nzk2MjZjYmEyMTg5YTcyY2I3NTE2YjFkLmpwZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2ltYWdlcy9ldmVudHMvZXZlbnQ0LmpwZ1xuLy8gbW9kdWxlIGlkID0gNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==