webpackJsonp([3],{

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var Recalls = function Recalls(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "recalls-wrapper"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    id: "recalls",
    className: "block-title"
  }, "\u041E\u0442\u0437\u044B\u0432\u044B"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "recalls-container"
  }, props.appState.recalls.map(function (recall, index) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: "recall-item-block",
      key: "recall-".concat(index)
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: recall["class"]
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "recall-item-title"
    }, recall.title), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      className: "recall-item-text"
    }, recall.text)));
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    className: "send-me"
  }, "\u041F\u0440\u0438\u0441\u044B\u043B\u0430\u0439\u0442\u0435 \u0432\u0430\u0448\u0438 \u043E\u0442\u0437\u044B\u0432\u044B \u043D\u0430 E-mail: ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", null, props.appState.contacts.email), " \u0411\u0443\u0434\u0443 \u043E\u0447\u0435\u043D\u044C \u043F\u0440\u0438\u0437\u043D\u0430\u0442\u0435\u043B\u044C\u043D\u0430!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Recalls);

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWNhbGxzLmpzeCJdLCJuYW1lcyI6WyJSZWNhbGxzIiwicHJvcHMiLCJhcHBTdGF0ZSIsInJlY2FsbHMiLCJtYXAiLCJyZWNhbGwiLCJpbmRleCIsInRpdGxlIiwidGV4dCIsImNvbnRhY3RzIiwiZW1haWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQ7QUFBQSxTQUNkO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRTtBQUFJLE1BQUUsRUFBQyxTQUFQO0FBQWlCLGFBQVMsRUFBQztBQUEzQiw0Q0FERixFQUVFO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDR0EsS0FBSyxDQUFDQyxRQUFOLENBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLENBQTJCLFVBQUNDLE1BQUQsRUFBU0MsS0FBVCxFQUFtQjtBQUMvQyxXQUNBO0FBQUssZUFBUyxFQUFDLG1CQUFmO0FBQW1DLFNBQUcsbUJBQVlBLEtBQVo7QUFBdEMsT0FDRTtBQUFLLGVBQVMsRUFBRUQsTUFBTTtBQUF0QixPQUNFO0FBQUcsZUFBUyxFQUFDO0FBQWIsT0FBa0NBLE1BQU0sQ0FBQ0UsS0FBekMsQ0FERixFQUVFO0FBQUcsZUFBUyxFQUFDO0FBQWIsT0FBaUNGLE1BQU0sQ0FBQ0csSUFBeEMsQ0FGRixDQURGLENBREE7QUFPQyxHQVJBLENBREgsQ0FGRixFQWFFO0FBQUcsYUFBUyxFQUFDO0FBQWIseUpBQXlELDBFQUFPUCxLQUFLLENBQUNDLFFBQU4sQ0FBZU8sUUFBZixDQUF3QkMsS0FBL0IsQ0FBekQsdUlBYkYsQ0FEYztBQUFBLENBQWhCOztBQWtCZVYsc0VBQWYsRSIsImZpbGUiOiIzLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSZWNhbGxzID0gKHByb3BzKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWNhbGxzLXdyYXBwZXJcIj5cclxuICAgIDxoMSBpZD1cInJlY2FsbHNcIiBjbGFzc05hbWU9XCJibG9jay10aXRsZVwiPtCe0YLQt9GL0LLRizwvaDE+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2FsbHMtY29udGFpbmVyXCI+XHJcbiAgICAgIHtwcm9wcy5hcHBTdGF0ZS5yZWNhbGxzLm1hcCgocmVjYWxsLCBpbmRleCkgPT4ge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY2FsbC1pdGVtLWJsb2NrXCIga2V5PXtgcmVjYWxsLSR7aW5kZXh9YH0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3JlY2FsbC5jbGFzc30+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWNhbGwtaXRlbS10aXRsZVwiPntyZWNhbGwudGl0bGV9PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVjYWxsLWl0ZW0tdGV4dFwiPntyZWNhbGwudGV4dH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PilcclxuICAgICAgfSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIDxwIGNsYXNzTmFtZT1cInNlbmQtbWVcIj7Qn9GA0LjRgdGL0LvQsNC50YLQtSDQstCw0YjQuCDQvtGC0LfRi9Cy0Ysg0L3QsCBFLW1haWw6IDxzcGFuPntwcm9wcy5hcHBTdGF0ZS5jb250YWN0cy5lbWFpbH08L3NwYW4+INCR0YPQtNGDINC+0YfQtdC90Ywg0L/RgNC40LfQvdCw0YLQtdC70YzQvdCwITwvcD5cclxuICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVjYWxscztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZWNhbGxzLmpzeCJdLCJzb3VyY2VSb290IjoiIn0=