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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ \"./node_modules/react-icons/io/index.esm.js\");\n\n\n\nconst NotificationSingleRender = (props)=>{\n    const onClick = ()=>{\n        const title = \"hi\";\n        const url = \"https://monospear.com/insightsview/NjA=/opentofu-a-fresh-era-in-open-source-infrastructure\";\n        // Encode title and URL for use in the share URL\n        const encodedTitle = encodeURIComponent(title);\n        const encodedUrl = encodeURIComponent(url);\n        // Generate the LinkedIn share URL\n        // const shareLink = `https://www.linkedin.com/shareArticle?mini=true&summary=youtube&title=${encodedTitle}&url=${encodedUrl}`;\n        const shareLink = \"https://www.linkedin.com/feed/?shareActive=true&text=This is my text! \".concat(encodedUrl);\n        // Open the LinkedIn share link in a new tab/window\n        // const FBshareLink = `https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fstackoverflow.com%2Fq%2F20956229%2F1101509&picture=http%3A%2F%2Fwww.applezein.net%2Fwordpress%2Fwp-content%2Fuploads%2F2015%2F03%2Ffacebook-logo.jpg&title=A+nice+question+about+Facebook&quote=Does+anyone+know+if+there+have+been+recent+changes+which+could+have+suddenly+stopped+this+from+working%3F&description=Apparently%2C+the+accepted+answer+is+not+correct.`;\n        var w = window.open(shareLink, \"_blank\", \"width=600,height=400\");\n        //debugger;\n        w.document.title = {\n            title\n        };\n        w.onload = ()=>{\n            w.document.title = {\n                title\n            };\n        };\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: \"w-full h-32 flex items-center justify-center\",\n        onClick: onClick,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-5/6  bg-white rounded-md shadow-sm p-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-xs text-primaryText font-medium\",\n                    children: props.x.title\n                }, void 0, false, {\n                    fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex w-full\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"ml-80\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io__WEBPACK_IMPORTED_MODULE_2__.IoIosNotifications, {\n                            color: \"#95D0D4\",\n                            size: 10\n                        }, void 0, false, {\n                            fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/weft/Documents/NextJs/apk-pilot-web-dashboard/pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_c = NotificationSingleRender;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotificationSingleRender);\nvar _c;\n$RefreshReg$(_c, \"NotificationSingleRender\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zY3JlZW5zL0hvbWUvbW9sZWN1bGVzL25vdGlmaWNhdGlvblNpbmdsZVJlbmRlci9Ob3RpZmljYXRpb25TaW5nbGVSZW5kZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0M7QUFDa0I7QUFTcEQsTUFBTUUsMkJBQXVDLENBQUNDO0lBQzVDLE1BQU1DLFVBQVU7UUFDZCxNQUFNQyxRQUFRO1FBQ2QsTUFBTUMsTUFBTTtRQUVaLGdEQUFnRDtRQUNoRCxNQUFNQyxlQUFlQyxtQkFBbUJIO1FBQ3hDLE1BQU1JLGFBQWFELG1CQUFtQkY7UUFFdEMsa0NBQWtDO1FBQ2xDLCtIQUErSDtRQUMvSCxNQUFNSSxZQUFZLHlFQUFvRixPQUFYRDtRQUMzRixtREFBbUQ7UUFDbkQsMmJBQTJiO1FBRTNiLElBQUlFLElBQUlDLE9BQU9DLElBQUksQ0FBQ0gsV0FBVyxVQUFVO1FBQ3pDLFdBQVc7UUFDWEMsRUFBRUcsUUFBUSxDQUFDVCxLQUFLLEdBQUc7WUFBQ0E7UUFBSztRQUN6Qk0sRUFBRUksTUFBTSxHQUFHO1lBQ1RKLEVBQUVHLFFBQVEsQ0FBQ1QsS0FBSyxHQUFHO2dCQUFDQTtZQUFLO1FBQzNCO0lBRUY7SUFDQSxxQkFDRSw4REFBQ1c7UUFDQ0MsV0FBVTtRQUNWYixTQUFTQTtrQkFFVCw0RUFBQ2M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFFRixXQUFVOzhCQUF3Q2QsTUFBTWlCLENBQUMsQ0FBQ2YsS0FBSzs7Ozs7OzhCQUlsRSw4REFBQ2E7b0JBQUlELFdBQVU7OEJBQ2IsNEVBQUNDO3dCQUFJRCxXQUFVO2tDQUNiLDRFQUFDaEIsOERBQWtCQTs0QkFBQ29CLE9BQU87NEJBQVdDLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14RDtLQXpDTXBCO0FBMkNOLCtEQUFlQSx3QkFBd0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2NyZWVucy9Ib21lL21vbGVjdWxlcy9ub3RpZmljYXRpb25TaW5nbGVSZW5kZXIvTm90aWZpY2F0aW9uU2luZ2xlUmVuZGVyLnRzeD9iYzk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW9Jb3NOb3RpZmljYXRpb25zIH0gZnJvbSBcInJlYWN0LWljb25zL2lvXCI7XG5pbnRlcmZhY2Ugc2NoZW1hIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgcHJvamVjdElkOiBudW1iZXI7XG4gIGJ1aWxkSWQ6IG51bWJlcjtcbiAgdmVyc2lvbjogbnVtYmVyO1xuICB0aW1lOiBEYXRlO1xufVxuY29uc3QgTm90aWZpY2F0aW9uU2luZ2xlUmVuZGVyOiBGQzxzY2hlbWE+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IG9uQ2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdGl0bGUgPSBcImhpXCI7XG4gICAgY29uc3QgdXJsID0gXCJodHRwczovL21vbm9zcGVhci5jb20vaW5zaWdodHN2aWV3L05qQT0vb3BlbnRvZnUtYS1mcmVzaC1lcmEtaW4tb3Blbi1zb3VyY2UtaW5mcmFzdHJ1Y3R1cmVcIjtcbiAgICBcbiAgICAvLyBFbmNvZGUgdGl0bGUgYW5kIFVSTCBmb3IgdXNlIGluIHRoZSBzaGFyZSBVUkxcbiAgICBjb25zdCBlbmNvZGVkVGl0bGUgPSBlbmNvZGVVUklDb21wb25lbnQodGl0bGUpO1xuICAgIGNvbnN0IGVuY29kZWRVcmwgPSBlbmNvZGVVUklDb21wb25lbnQodXJsKTtcbiAgICBcbiAgICAvLyBHZW5lcmF0ZSB0aGUgTGlua2VkSW4gc2hhcmUgVVJMXG4gICAgLy8gY29uc3Qgc2hhcmVMaW5rID0gYGh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9zaGFyZUFydGljbGU/bWluaT10cnVlJnN1bW1hcnk9eW91dHViZSZ0aXRsZT0ke2VuY29kZWRUaXRsZX0mdXJsPSR7ZW5jb2RlZFVybH1gO1xuICAgIGNvbnN0IHNoYXJlTGluayA9IGBodHRwczovL3d3dy5saW5rZWRpbi5jb20vZmVlZC8/c2hhcmVBY3RpdmU9dHJ1ZSZ0ZXh0PVRoaXMgaXMgbXkgdGV4dCEgJHtlbmNvZGVkVXJsfWBcbiAgICAvLyBPcGVuIHRoZSBMaW5rZWRJbiBzaGFyZSBsaW5rIGluIGEgbmV3IHRhYi93aW5kb3dcbiAgICAvLyBjb25zdCBGQnNoYXJlTGluayA9IGBodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyL3NoYXJlci5waHA/dT1odHRwJTNBJTJGJTJGc3RhY2tvdmVyZmxvdy5jb20lMkZxJTJGMjA5NTYyMjklMkYxMTAxNTA5JnBpY3R1cmU9aHR0cCUzQSUyRiUyRnd3dy5hcHBsZXplaW4ubmV0JTJGd29yZHByZXNzJTJGd3AtY29udGVudCUyRnVwbG9hZHMlMkYyMDE1JTJGMDMlMkZmYWNlYm9vay1sb2dvLmpwZyZ0aXRsZT1BK25pY2UrcXVlc3Rpb24rYWJvdXQrRmFjZWJvb2smcXVvdGU9RG9lcythbnlvbmUra25vdytpZit0aGVyZStoYXZlK2JlZW4rcmVjZW50K2NoYW5nZXMrd2hpY2grY291bGQraGF2ZStzdWRkZW5seStzdG9wcGVkK3RoaXMrZnJvbSt3b3JraW5nJTNGJmRlc2NyaXB0aW9uPUFwcGFyZW50bHklMkMrdGhlK2FjY2VwdGVkK2Fuc3dlcitpcytub3QrY29ycmVjdC5gO1xuXG4gICAgdmFyIHcgPSB3aW5kb3cub3BlbihzaGFyZUxpbmssICdfYmxhbmsnLCAnd2lkdGg9NjAwLGhlaWdodD00MDAnKTtcbiAgICAvL2RlYnVnZ2VyO1xuICAgIHcuZG9jdW1lbnQudGl0bGUgPSB7dGl0bGV9XG4gICAgdy5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICB3LmRvY3VtZW50LnRpdGxlID0ge3RpdGxlfTtcbiAgICB9XG4gICAgXG4gIH07XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtMzIgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgb25DbGljaz17b25DbGlja31cbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctNS82ICBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1zbSBwLTRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LXByaW1hcnlUZXh0IGZvbnQtbWVkaXVtXCI+e3Byb3BzLngudGl0bGV9PC9wPlxuICAgICAgICB7LyogPHAgY2xhc3NOYW1lPVwidGV4dC14cyB0ZXh0LWdyYXlUZXh0IGZvbnQtIG10LTFcIj5cbiAgICAgICAgICB7cHJvcHMueC5kZXNjcmlwdGlvbn1cbiAgICAgICAgPC9wPiAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtODBcIj5cbiAgICAgICAgICAgIDxJb0lvc05vdGlmaWNhdGlvbnMgY29sb3I9e1wiIzk1RDBENFwifSBzaXplPXsxMH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5vdGlmaWNhdGlvblNpbmdsZVJlbmRlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIklvSW9zTm90aWZpY2F0aW9ucyIsIk5vdGlmaWNhdGlvblNpbmdsZVJlbmRlciIsInByb3BzIiwib25DbGljayIsInRpdGxlIiwidXJsIiwiZW5jb2RlZFRpdGxlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiZW5jb2RlZFVybCIsInNoYXJlTGluayIsInciLCJ3aW5kb3ciLCJvcGVuIiwiZG9jdW1lbnQiLCJvbmxvYWQiLCJidXR0b24iLCJjbGFzc05hbWUiLCJkaXYiLCJwIiwieCIsImNvbG9yIiwic2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/screens/Home/molecules/notificationSingleRender/NotificationSingleRender.tsx\n"));

/***/ })

});