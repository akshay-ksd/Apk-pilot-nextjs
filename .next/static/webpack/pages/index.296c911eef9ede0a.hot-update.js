"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx":
/*!********************************************************************************************!*\
  !*** ./pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx ***!
  \********************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\n\nconst NotificationSingleRender = (props)=>{\n    const onClick = ()=>{\n        const title = \"hi\";\n        const url = \"https://monospear.com/insightsview/NjA=/opentofu-a-fresh-era-in-open-source-infrastructure\";\n        // Encode title and URL for use in the share URL\n        const encodedTitle = encodeURIComponent(title);\n        const encodedUrl = encodeURIComponent(url);\n        // Generate the LinkedIn share URL\n        const shareLink = \"https://www.linkedin.com/shareArticle?mini=true&summary=youtube&title=\".concat(encodedTitle, \"&url=\").concat(encodedUrl);\n        // const shareLink = `https://www.linkedin.com/feed/?shareActive=true&text=This is my text! ${encodedUrl}`\n        // Open the LinkedIn share link in a new tab/window\n        const FBshareLink = \"https://www.facebook.com/sharer/sharer.php?u=\".concat(encodeURIComponent(encodedUrl), \"&quote=\").concat(encodeURIComponent(title), \"&picture=\").concat(encodeURIComponent(url));\n        var w = window.open(FBshareLink, \"_blank\", \"width=600,height=400\");\n        //debugger;\n        w.document.title = {\n            title\n        };\n        w.onload = ()=>{\n            w.document.title = {\n                title\n            };\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-full h-32 flex items-center justify-center\",\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-5/6  bg-white rounded-md shadow-sm p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs text-primaryText font-medium\",\n                    children: props.x.title\n                }, void 0, false, {\n                    fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-80\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosNotifications, {\n                            color: \"#95D0D4\",\n                            size: 10\n                        }, void 0, false, {\n                            fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NotificationSingleRender;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationSingleRender);\nvar _c;\n$RefreshReg$(_c, \"NotificationSingleRender\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY3JlZW5zL0hvbWUvbW9sZWN1bGVzL25vdGlmaWNhdGlvblNpbmdsZVJlbmRlci9Ob3RpZmljYXRpb25TaW5nbGVSZW5kZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDa0I7QUFTcEQsTUFBTUUsMkJBQXVDLENBQUNDO0lBQzVDLE1BQU1DLFVBQVU7UUFDZCxNQUFNQyxRQUFRO1FBQ2QsTUFBTUMsTUFBTTtRQUVaLGdEQUFnRDtRQUNoRCxNQUFNQyxlQUFlQyxtQkFBbUJIO1FBQ3hDLE1BQU1JLGFBQWFELG1CQUFtQkY7UUFFdEMsa0NBQWtDO1FBQ2xDLE1BQU1JLFlBQVkseUVBQTZGRCxPQUFwQkYsY0FBYSxTQUFrQixPQUFYRTtRQUMvRywwR0FBMEc7UUFDMUcsbURBQW1EO1FBQ25ELE1BQU1FLGNBQWMsZ0RBQXdGSCxPQUF4Q0EsbUJBQW1CQyxhQUFZLFdBQThDRCxPQUFyQ0EsbUJBQW1CSCxRQUFPLGFBQW1DLE9BQXhCRyxtQkFBbUJGO1FBRXBLLElBQUlNLElBQUlDLE9BQU9DLElBQUksQ0FBQ0gsYUFBYSxVQUFVO1FBQzNDLFdBQVc7UUFDWEMsRUFBRUcsUUFBUSxDQUFDVixLQUFLLEdBQUc7WUFBQ0E7UUFBSztRQUN6Qk8sRUFBRUksTUFBTSxHQUFHO1lBQ1RKLEVBQUVHLFFBQVEsQ0FBQ1YsS0FBSyxHQUFHO2dCQUFDQTtZQUFLO1FBQzNCO0lBRUY7SUFDQSxxQkFDRSw4REFBQ1k7UUFDQ0MsV0FBVTtRQUNWZCxTQUFTQTtrQkFFVCw0RUFBQ2U7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFFRixXQUFVOzhCQUF3Q2YsTUFBTWtCLENBQUMsQ0FBQ2hCLEtBQUs7Ozs7Ozs4QkFJbEUsOERBQUNjO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTtrQ0FDYiw0RUFBQ2pCLDhEQUFrQkE7NEJBQUNxQixPQUFPOzRCQUFXQyxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEQ7S0F6Q01yQjtBQTJDTiwrREFBZUEsd0JBQXdCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3NjcmVlbnMvSG9tZS9tb2xlY3VsZXMvbm90aWZpY2F0aW9uU2luZ2xlUmVuZGVyL05vdGlmaWNhdGlvblNpbmdsZVJlbmRlci50c3g/YmM5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IElvSW9zTm90aWZpY2F0aW9ucyB9IGZyb20gXCJyZWFjdC1pY29ucy9pb1wiO1xuaW50ZXJmYWNlIHNjaGVtYSB7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIHByb2plY3RJZDogbnVtYmVyO1xuICBidWlsZElkOiBudW1iZXI7XG4gIHZlcnNpb246IG51bWJlcjtcbiAgdGltZTogRGF0ZTtcbn1cbmNvbnN0IE5vdGlmaWNhdGlvblNpbmdsZVJlbmRlcjogRkM8c2NoZW1hPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCBvbkNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IHRpdGxlID0gXCJoaVwiO1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cHM6Ly9tb25vc3BlYXIuY29tL2luc2lnaHRzdmlldy9OakE9L29wZW50b2Z1LWEtZnJlc2gtZXJhLWluLW9wZW4tc291cmNlLWluZnJhc3RydWN0dXJlXCI7XG4gICAgXG4gICAgLy8gRW5jb2RlIHRpdGxlIGFuZCBVUkwgZm9yIHVzZSBpbiB0aGUgc2hhcmUgVVJMXG4gICAgY29uc3QgZW5jb2RlZFRpdGxlID0gZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlKTtcbiAgICBjb25zdCBlbmNvZGVkVXJsID0gZW5jb2RlVVJJQ29tcG9uZW50KHVybCk7XG4gICAgXG4gICAgLy8gR2VuZXJhdGUgdGhlIExpbmtlZEluIHNoYXJlIFVSTFxuICAgIGNvbnN0IHNoYXJlTGluayA9IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vc2hhcmVBcnRpY2xlP21pbmk9dHJ1ZSZzdW1tYXJ5PXlvdXR1YmUmdGl0bGU9JHtlbmNvZGVkVGl0bGV9JnVybD0ke2VuY29kZWRVcmx9YDtcbiAgICAvLyBjb25zdCBzaGFyZUxpbmsgPSBgaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2ZlZWQvP3NoYXJlQWN0aXZlPXRydWUmdGV4dD1UaGlzIGlzIG15IHRleHQhICR7ZW5jb2RlZFVybH1gXG4gICAgLy8gT3BlbiB0aGUgTGlua2VkSW4gc2hhcmUgbGluayBpbiBhIG5ldyB0YWIvd2luZG93XG4gICAgY29uc3QgRkJzaGFyZUxpbmsgPSBgaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9JHtlbmNvZGVVUklDb21wb25lbnQoZW5jb2RlZFVybCl9JnF1b3RlPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHRpdGxlKX0mcGljdHVyZT0ke2VuY29kZVVSSUNvbXBvbmVudCh1cmwpfWA7XG5cbiAgICB2YXIgdyA9IHdpbmRvdy5vcGVuKEZCc2hhcmVMaW5rLCAnX2JsYW5rJywgJ3dpZHRoPTYwMCxoZWlnaHQ9NDAwJyk7XG4gICAgLy9kZWJ1Z2dlcjtcbiAgICB3LmRvY3VtZW50LnRpdGxlID0ge3RpdGxlfVxuICAgIHcub25sb2FkID0gKCkgPT4ge1xuICAgICAgdy5kb2N1bWVudC50aXRsZSA9IHt0aXRsZX07XG4gICAgfVxuICAgIFxuICB9O1xuICByZXR1cm4gKFxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLTMyIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUvNiAgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctc20gcC00XCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1wcmltYXJ5VGV4dCBmb250LW1lZGl1bVwiPntwcm9wcy54LnRpdGxlfTwvcD5cbiAgICAgICAgey8qIDxwIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5VGV4dCBmb250LSBtdC0xXCI+XG4gICAgICAgICAge3Byb3BzLnguZGVzY3JpcHRpb259XG4gICAgICAgIDwvcD4gKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTgwXCI+XG4gICAgICAgICAgICA8SW9Jb3NOb3RpZmljYXRpb25zIGNvbG9yPXtcIiM5NUQwRDRcIn0gc2l6ZT17MTB9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOb3RpZmljYXRpb25TaW5nbGVSZW5kZXI7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJb0lvc05vdGlmaWNhdGlvbnMiLCJOb3RpZmljYXRpb25TaW5nbGVSZW5kZXIiLCJwcm9wcyIsIm9uQ2xpY2siLCJ0aXRsZSIsInVybCIsImVuY29kZWRUaXRsZSIsImVuY29kZVVSSUNvbXBvbmVudCIsImVuY29kZWRVcmwiLCJzaGFyZUxpbmsiLCJGQnNoYXJlTGluayIsInciLCJ3aW5kb3ciLCJvcGVuIiwiZG9jdW1lbnQiLCJvbmxvYWQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwieCIsImNvbG9yIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\n"));

/***/ })

});