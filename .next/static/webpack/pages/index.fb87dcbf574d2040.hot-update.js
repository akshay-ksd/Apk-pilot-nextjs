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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\n\nconst NotificationSingleRender = (props)=>{\n    const onClick = ()=>{\n        const title = \"hi\";\n        const url = \"https://monospear.com/insightsview/NjA=/opentofu-a-fresh-era-in-open-source-infrastructure\";\n        // Encode title and URL for use in the share URL\n        const encodedTitle = encodeURIComponent(title);\n        const encodedUrl = encodeURIComponent(url);\n        // Generate the LinkedIn share URL\n        const shareLink = \"https://www.linkedin.com/shareArticle?mini=true&summary=youtube&title=\".concat(encodedTitle, \"&url=\").concat(encodedUrl);\n        // const shareLink = `https://www.linkedin.com/feed/?shareActive=true&text=This is my text! ${encodedUrl}`\n        // Open the LinkedIn share link in a new tab/window\n        const FBshareLink = \"https://www.facebook.com/sharer/sharer.php?description=\".concat(encodeURIComponent(title), \"}\");\n        var w = window.open(FBshareLink, \"_blank\", \"width=600,height=400\");\n        //debugger;\n        w.document.title = {\n            title\n        };\n        w.onload = ()=>{\n            w.document.title = {\n                title\n            };\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-full h-32 flex items-center justify-center\",\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-5/6  bg-white rounded-md shadow-sm p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs text-primaryText font-medium\",\n                    children: props.x.title\n                }, void 0, false, {\n                    fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-80\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosNotifications, {\n                            color: \"#95D0D4\",\n                            size: 10\n                        }, void 0, false, {\n                            fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NotificationSingleRender;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationSingleRender);\nvar _c;\n$RefreshReg$(_c, \"NotificationSingleRender\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY3JlZW5zL0hvbWUvbW9sZWN1bGVzL25vdGlmaWNhdGlvblNpbmdsZVJlbmRlci9Ob3RpZmljYXRpb25TaW5nbGVSZW5kZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDa0I7QUFTcEQsTUFBTUUsMkJBQXVDLENBQUNDO0lBQzVDLE1BQU1DLFVBQVU7UUFDZCxNQUFNQyxRQUFRO1FBQ2QsTUFBTUMsTUFBTTtRQUVaLGdEQUFnRDtRQUNoRCxNQUFNQyxlQUFlQyxtQkFBbUJIO1FBQ3hDLE1BQU1JLGFBQWFELG1CQUFtQkY7UUFFdEMsa0NBQWtDO1FBQ2xDLE1BQU1JLFlBQVkseUVBQTZGRCxPQUFwQkYsY0FBYSxTQUFrQixPQUFYRTtRQUMvRywwR0FBMEc7UUFDMUcsbURBQW1EO1FBQ25ELE1BQU1FLGNBQWMsMERBQW9GLE9BQTFCSCxtQkFBbUJILFFBQU87UUFFeEcsSUFBSU8sSUFBSUMsT0FBT0MsSUFBSSxDQUFDSCxhQUFhLFVBQVU7UUFDM0MsV0FBVztRQUNYQyxFQUFFRyxRQUFRLENBQUNWLEtBQUssR0FBRztZQUFDQTtRQUFLO1FBQ3pCTyxFQUFFSSxNQUFNLEdBQUc7WUFDVEosRUFBRUcsUUFBUSxDQUFDVixLQUFLLEdBQUc7Z0JBQUNBO1lBQUs7UUFDM0I7SUFFRjtJQUNBLHFCQUNFLDhEQUFDWTtRQUNDQyxXQUFVO1FBQ1ZkLFNBQVNBO2tCQUVULDRFQUFDZTtZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUVGLFdBQVU7OEJBQXdDZixNQUFNa0IsQ0FBQyxDQUFDaEIsS0FBSzs7Ozs7OzhCQUlsRSw4REFBQ2M7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDakIsOERBQWtCQTs0QkFBQ3FCLE9BQU87NEJBQVdDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RDtLQXpDTXJCO0FBMkNOLCtEQUFlQSx3QkFBd0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NyZWVucy9Ib21lL21vbGVjdWxlcy9ub3RpZmljYXRpb25TaW5nbGVSZW5kZXIvTm90aWZpY2F0aW9uU2luZ2xlUmVuZGVyLnRzeD9iYzk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9Jb3NOb3RpZmljYXRpb25zIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbnRlcmZhY2Ugc2NoZW1hIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJvamVjdElkOiBudW1iZXI7XG4gIGJ1aWxkSWQ6IG51bWJlcjtcbiAgdmVyc2lvbjogbnVtYmVyO1xuICB0aW1lOiBEYXRlO1xufVxuY29uc3QgTm90aWZpY2F0aW9uU2luZ2xlUmVuZGVyOiBGQzxzY2hlbWE+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBcImhpXCI7XG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL21vbm9zcGVhci5jb20vaW5zaWdodHN2aWV3L05qQT0vb3BlbnRvZnUtYS1mcmVzaC1lcmEtaW4tb3Blbi1zb3VyY2UtaW5mcmFzdHJ1Y3R1cmVcIjtcbiAgICBcbiAgICAvLyBFbmNvZGUgdGl0bGUgYW5kIFVSTCBmb3IgdXNlIGluIHRoZSBzaGFyZSBVUkxcbiAgICBjb25zdCBlbmNvZGVkVGl0bGUgPSBlbmNvZGVVUklDb21wb25lbnQodGl0bGUpO1xuICAgIGNvbnN0IGVuY29kZWRVcmwgPSBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICBcbiAgICAvLyBHZW5lcmF0ZSB0aGUgTGlua2VkSW4gc2hhcmUgVVJMXG4gICAgY29uc3Qgc2hhcmVMaW5rID0gYGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnN1bW1hcnk9eW91dHViZSZ0aXRsZT0ke2VuY29kZWRUaXRsZX0mdXJsPSR7ZW5jb2RlZFVybH1gO1xuICAgIC8vIGNvbnN0IHNoYXJlTGluayA9IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vZmVlZC8/c2hhcmVBY3RpdmU9dHJ1ZSZ0ZXh0PVRoaXMgaXMgbXkgdGV4dCEgJHtlbmNvZGVkVXJsfWBcbiAgICAvLyBPcGVuIHRoZSBMaW5rZWRJbiBzaGFyZSBsaW5rIGluIGEgbmV3IHRhYi93aW5kb3dcbiAgICBjb25zdCBGQnNoYXJlTGluayA9IGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/ZGVzY3JpcHRpb249JHtlbmNvZGVVUklDb21wb25lbnQodGl0bGUpfX1gO1xuXG4gICAgdmFyIHcgPSB3aW5kb3cub3BlbihGQnNoYXJlTGluaywgJ19ibGFuaycsICd3aWR0aD02MDAsaGVpZ2h0PTQwMCcpO1xuICAgIC8vZGVidWdnZXI7XG4gICAgdy5kb2N1bWVudC50aXRsZSA9IHt0aXRsZX1cbiAgICB3Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgIHcuZG9jdW1lbnQudGl0bGUgPSB7dGl0bGV9O1xuICAgIH1cbiAgICBcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC0zMiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01LzYgIGJnLXdoaXRlIHJvdW5kZWQtbWQgc2hhZG93LXNtIHAtNFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtcHJpbWFyeVRleHQgZm9udC1tZWRpdW1cIj57cHJvcHMueC50aXRsZX08L3A+XG4gICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzIHRleHQtZ3JheVRleHQgZm9udC0gbXQtMVwiPlxuICAgICAgICAgIHtwcm9wcy54LmRlc2NyaXB0aW9ufVxuICAgICAgICA8L3A+ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC04MFwiPlxuICAgICAgICAgICAgPElvSW9zTm90aWZpY2F0aW9ucyBjb2xvcj17XCIjOTVEMEQ0XCJ9IHNpemU9ezEwfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTm90aWZpY2F0aW9uU2luZ2xlUmVuZGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSW9Jb3NOb3RpZmljYXRpb25zIiwiTm90aWZpY2F0aW9uU2luZ2xlUmVuZGVyIiwicHJvcHMiLCJvbkNsaWNrIiwidGl0bGUiLCJ1cmwiLCJlbmNvZGVkVGl0bGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJlbmNvZGVkVXJsIiwic2hhcmVMaW5rIiwiRkJzaGFyZUxpbmsiLCJ3Iiwid2luZG93Iiwib3BlbiIsImRvY3VtZW50Iiwib25sb2FkIiwiYnV0dG9uIiwiY2xhc3NOYW1lIiwiZGl2IiwicCIsIngiLCJjb2xvciIsInNpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\n"));

/***/ })

});