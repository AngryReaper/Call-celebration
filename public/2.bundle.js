webpackJsonp([2],{

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./photo1.jpg": 102,
	"./photo2.jpg": 103
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
webpackContext.id = 101;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/01a7e66b4de2390e1fac0edae0846b07.jpg";

/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/fd40de8e6ab5f05f92f30fc42784a41d.jpg";

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Contacts = function Contacts(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "contacts-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    id: "contacts",
    className: "block-title"
  }, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "details"
  }, props.appState.contacts.map(function (contact, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "details-block",
      key: 'contact-' + index
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "details-photo-block"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      className: "details-photo",
      src: __webpack_require__(101)("./" + contact.photo),
      alt: ""
    }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "details-description"
    }, contact.description)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "details-text-block"
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "details-text-title glowing-text"
    }, contact.detailsTitle), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "details-text-content"
    }, contact.detailsContent.map(function (itemText, i) {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        key: "contact-block-".concat(index, "-").concat(i)
      }, itemText);
    }))));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "contacts-order-block"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "order-dates"
  }, "\u0411\u0440\u043E\u043D\u044C \u0434\u0430\u0442:"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "order-title"
  }, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "order-text"
  }, props.appState.contactsInfo.phone)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "order-title"
  }, "E-mail: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "order-text"
  }, props.appState.contactsInfo.email)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "order-title"
  }, "VK: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "order-text"
  }, props.appState.contactsInfo.vk))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contacts);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2NvbnRhY3RzIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb250YWN0cy9waG90bzEuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY29udGFjdHMvcGhvdG8yLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWN0cy5qc3giXSwibmFtZXMiOlsiQ29udGFjdHMiLCJwcm9wcyIsImFwcFN0YXRlIiwiY29udGFjdHMiLCJtYXAiLCJjb250YWN0IiwiaW5kZXgiLCJyZXF1aXJlIiwicGhvdG8iLCJkZXNjcmlwdGlvbiIsImRldGFpbHNUaXRsZSIsImRldGFpbHNDb250ZW50IiwiaXRlbVRleHQiLCJpIiwiY29udGFjdHNJbmZvIiwicGhvbmUiLCJlbWFpbCIsInZrIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCOzs7Ozs7O0FDbEJBLGlCQUFpQixxQkFBdUIsaUQ7Ozs7Ozs7QUNBeEMsaUJBQWlCLHFCQUF1QixpRDs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRDtBQUFBLFNBQ2Y7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFO0FBQUksTUFBRSxFQUFDLFVBQVA7QUFBa0IsYUFBUyxFQUFDO0FBQTVCLHdEQURGLEVBRUU7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNHQSxLQUFLLENBQUNDLFFBQU4sQ0FBZUMsUUFBZixDQUF3QkMsR0FBeEIsQ0FBNEIsVUFBQ0MsT0FBRCxFQUFVQyxLQUFWLEVBQW9CO0FBQy9DLFdBQ0E7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixTQUFHLEVBQUUsYUFBYUE7QUFBakQsT0FDRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUErQixTQUFHLEVBQUVDLDZCQUE2QixHQUFHRixPQUFPLENBQUNHLEtBQWpDLENBQTNDO0FBQW9GLFNBQUcsRUFBQztBQUF4RixNQURGLEVBRUU7QUFBRyxlQUFTLEVBQUM7QUFBYixPQUFvQ0gsT0FBTyxDQUFDSSxXQUE1QyxDQUZGLENBREYsRUFLRTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQ0U7QUFBRyxlQUFTLEVBQUM7QUFBYixPQUFnREosT0FBTyxDQUFDSyxZQUF4RCxDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNHTCxPQUFPLENBQUNNLGNBQVIsQ0FBdUJQLEdBQXZCLENBQTJCLFVBQUNRLFFBQUQsRUFBV0MsQ0FBWCxFQUFpQjtBQUMzQyxhQUFPO0FBQUcsV0FBRywwQkFBbUJQLEtBQW5CLGNBQTRCTyxDQUE1QjtBQUFOLFNBQXdDRCxRQUF4QyxDQUFQO0FBQ0QsS0FGQSxDQURILENBRkYsQ0FMRixDQURBO0FBZUQsR0FoQkEsQ0FESCxDQUZGLEVBcUJFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFHLGFBQVMsRUFBQztBQUFiLDBEQURGLEVBRUU7QUFBRyxhQUFTLEVBQUM7QUFBYixxREFBb0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBOEJYLEtBQUssQ0FBQ0MsUUFBTixDQUFlWSxZQUFmLENBQTRCQyxLQUExRCxDQUFwQyxDQUZGLEVBR0U7QUFBRyxhQUFTLEVBQUM7QUFBYixpQkFBbUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBOEJkLEtBQUssQ0FBQ0MsUUFBTixDQUFlWSxZQUFmLENBQTRCRSxLQUExRCxDQUFuQyxDQUhGLEVBSUU7QUFBRyxhQUFTLEVBQUM7QUFBYixhQUErQjtBQUFNLGFBQVMsRUFBQztBQUFoQixLQUE4QmYsS0FBSyxDQUFDQyxRQUFOLENBQWVZLFlBQWYsQ0FBNEJHLEVBQTFELENBQS9CLENBSkYsQ0FyQkYsQ0FEZTtBQUFBLENBQWpCOztBQStCZWpCLHVFQUFmLEUiLCJmaWxlIjoiMi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vcGhvdG8xLmpwZ1wiOiAxMDIsXG5cdFwiLi9waG90bzIuanBnXCI6IDEwM1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHR2YXIgaWQgPSBtYXBbcmVxXTtcblx0aWYoIShpZCArIDEpKSAvLyBjaGVjayBmb3IgbnVtYmVyIG9yIHN0cmluZ1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpO1xuXHRyZXR1cm4gaWQ7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDEwMTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvY29udGFjdHMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8wMWE3ZTY2YjRkZTIzOTBlMWZhYzBlZGFlMDg0NmIwNy5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvY29udGFjdHMvcGhvdG8xLmpwZ1xuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9mZDQwZGU4ZTZhYjVmMDVmOTJmMzBmYzQyNzg0YTQxZC5qcGdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9pbWFnZXMvY29udGFjdHMvcGhvdG8yLmpwZ1xuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBDb250YWN0cyA9IChwcm9wcykgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdHMtd3JhcHBlclwiPlxyXG4gICAgPGgxIGlkPVwiY29udGFjdHNcIiBjbGFzc05hbWU9XCJibG9jay10aXRsZVwiPtCa0L7QvdGC0LDQutGC0Ys8L2gxPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzXCI+XHJcbiAgICAgIHtwcm9wcy5hcHBTdGF0ZS5jb250YWN0cy5tYXAoKGNvbnRhY3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYmxvY2tcIiBrZXk9eydjb250YWN0LScgKyBpbmRleH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtcGhvdG8tYmxvY2tcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkZXRhaWxzLXBob3RvXCIgc3JjPXtyZXF1aXJlKCcuLi9pbWFnZXMvY29udGFjdHMvJyArIGNvbnRhY3QucGhvdG8pfSBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbHMtZGVzY3JpcHRpb25cIj57Y29udGFjdC5kZXNjcmlwdGlvbn08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy10ZXh0LWJsb2NrXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRldGFpbHMtdGV4dC10aXRsZSBnbG93aW5nLXRleHRcIj57Y29udGFjdC5kZXRhaWxzVGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtdGV4dC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAge2NvbnRhY3QuZGV0YWlsc0NvbnRlbnQubWFwKChpdGVtVGV4dCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17YGNvbnRhY3QtYmxvY2stJHtpbmRleH0tJHtpfWB9PntpdGVtVGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+KVxyXG4gICAgICB9KX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0cy1vcmRlci1ibG9ja1wiPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJvcmRlci1kYXRlc1wiPtCR0YDQvtC90Ywg0LTQsNGCOjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwib3JkZXItdGl0bGVcIj7QotC10LvQtdGE0L7QvTogPHNwYW4gY2xhc3NOYW1lPVwib3JkZXItdGV4dFwiPntwcm9wcy5hcHBTdGF0ZS5jb250YWN0c0luZm8ucGhvbmV9PC9zcGFuPjwvcD5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwib3JkZXItdGl0bGVcIj5FLW1haWw6IDxzcGFuIGNsYXNzTmFtZT1cIm9yZGVyLXRleHRcIj57cHJvcHMuYXBwU3RhdGUuY29udGFjdHNJbmZvLmVtYWlsfTwvc3Bhbj48L3A+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cIm9yZGVyLXRpdGxlXCI+Vks6IDxzcGFuIGNsYXNzTmFtZT1cIm9yZGVyLXRleHRcIj57cHJvcHMuYXBwU3RhdGUuY29udGFjdHNJbmZvLnZrfTwvc3Bhbj48L3A+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29udGFjdHNcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Db250YWN0cy5qc3giXSwic291cmNlUm9vdCI6IiJ9