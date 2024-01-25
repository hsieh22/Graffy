"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/lucide-react@0.302.0_react@18.2.0";
exports.ids = ["vendor-chunks/lucide-react@0.302.0_react@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createLucideIcon),\n/* harmony export */   toKebabCase: () => (/* binding */ toKebabCase)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/.pnpm/next@14.0.3_@babel+core@7.23.7_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultAttributes.js */ \"(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js\");\n/**\n * @license lucide-react v0.302.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \n\nconst toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, \"$1-$2\").toLowerCase().trim();\nconst createLucideIcon = (iconName, iconNode)=>{\n    const Component = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ color = \"currentColor\", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = \"\", children, ...rest }, ref)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"svg\", {\n            ref,\n            ..._defaultAttributes_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n            width: size,\n            height: size,\n            stroke: color,\n            strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,\n            className: [\n                \"lucide\",\n                `lucide-${toKebabCase(iconName)}`,\n                className\n            ].join(\" \"),\n            ...rest\n        }, [\n            ...iconNode.map(([tag, attrs])=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, attrs)),\n            ...Array.isArray(children) ? children : [\n                children\n            ]\n        ]));\n    Component.displayName = `${iconName}`;\n    return Component;\n};\n //# sourceMappingURL=createLucideIcon.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vY3JlYXRlTHVjaWRlSWNvbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7OztDQUtDLEdBRWlEO0FBQ0s7QUFFdkQsTUFBTUcsY0FBYyxDQUFDQyxTQUFXQSxPQUFPQyxPQUFPLENBQUMsc0JBQXNCLFNBQVNDLFdBQVcsR0FBR0MsSUFBSTtBQUNoRyxNQUFNQyxtQkFBbUIsQ0FBQ0MsVUFBVUM7SUFDbEMsTUFBTUMsMEJBQVlYLGlEQUFVQSxDQUMxQixDQUFDLEVBQUVZLFFBQVEsY0FBYyxFQUFFQyxPQUFPLEVBQUUsRUFBRUMsY0FBYyxDQUFDLEVBQUVDLG1CQUFtQixFQUFFQyxZQUFZLEVBQUUsRUFBRUMsUUFBUSxFQUFFLEdBQUdDLE1BQU0sRUFBRUMsb0JBQVFsQixvREFBYUEsQ0FDcEksT0FDQTtZQUNFa0I7WUFDQSxHQUFHakIsNkRBQWlCO1lBQ3BCa0IsT0FBT1A7WUFDUFEsUUFBUVI7WUFDUlMsUUFBUVY7WUFDUkUsYUFBYUMsc0JBQXNCUSxPQUFPVCxlQUFlLEtBQUtTLE9BQU9WLFFBQVFDO1lBQzdFRSxXQUFXO2dCQUFDO2dCQUFVLENBQUMsT0FBTyxFQUFFYixZQUFZTSxVQUFVLENBQUM7Z0JBQUVPO2FBQVUsQ0FBQ1EsSUFBSSxDQUFDO1lBQ3pFLEdBQUdOLElBQUk7UUFDVCxHQUNBO2VBQ0tSLFNBQVNlLEdBQUcsQ0FBQyxDQUFDLENBQUNDLEtBQUtDLE1BQU0saUJBQUsxQixvREFBYUEsQ0FBQ3lCLEtBQUtDO2VBQ2xEQyxNQUFNQyxPQUFPLENBQUNaLFlBQVlBLFdBQVc7Z0JBQUNBO2FBQVM7U0FDbkQ7SUFHTE4sVUFBVW1CLFdBQVcsR0FBRyxDQUFDLEVBQUVyQixTQUFTLENBQUM7SUFDckMsT0FBT0U7QUFDVDtBQUVvRCxDQUNwRCw0Q0FBNEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cF9maW5hbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9sdWNpZGUtcmVhY3RAMC4zMDIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9jcmVhdGVMdWNpZGVJY29uLmpzP2QzYzQiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuMzAyLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCB7IGZvcndhcmRSZWYsIGNyZWF0ZUVsZW1lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZGVmYXVsdEF0dHJpYnV0ZXMgZnJvbSAnLi9kZWZhdWx0QXR0cmlidXRlcy5qcyc7XG5cbmNvbnN0IHRvS2ViYWJDYXNlID0gKHN0cmluZykgPT4gc3RyaW5nLnJlcGxhY2UoLyhbYS16MC05XSkoW0EtWl0pL2csIFwiJDEtJDJcIikudG9Mb3dlckNhc2UoKS50cmltKCk7XG5jb25zdCBjcmVhdGVMdWNpZGVJY29uID0gKGljb25OYW1lLCBpY29uTm9kZSkgPT4ge1xuICBjb25zdCBDb21wb25lbnQgPSBmb3J3YXJkUmVmKFxuICAgICh7IGNvbG9yID0gXCJjdXJyZW50Q29sb3JcIiwgc2l6ZSA9IDI0LCBzdHJva2VXaWR0aCA9IDIsIGFic29sdXRlU3Ryb2tlV2lkdGgsIGNsYXNzTmFtZSA9IFwiXCIsIGNoaWxkcmVuLCAuLi5yZXN0IH0sIHJlZikgPT4gY3JlYXRlRWxlbWVudChcbiAgICAgIFwic3ZnXCIsXG4gICAgICB7XG4gICAgICAgIHJlZixcbiAgICAgICAgLi4uZGVmYXVsdEF0dHJpYnV0ZXMsXG4gICAgICAgIHdpZHRoOiBzaXplLFxuICAgICAgICBoZWlnaHQ6IHNpemUsXG4gICAgICAgIHN0cm9rZTogY29sb3IsXG4gICAgICAgIHN0cm9rZVdpZHRoOiBhYnNvbHV0ZVN0cm9rZVdpZHRoID8gTnVtYmVyKHN0cm9rZVdpZHRoKSAqIDI0IC8gTnVtYmVyKHNpemUpIDogc3Ryb2tlV2lkdGgsXG4gICAgICAgIGNsYXNzTmFtZTogW1wibHVjaWRlXCIsIGBsdWNpZGUtJHt0b0tlYmFiQ2FzZShpY29uTmFtZSl9YCwgY2xhc3NOYW1lXS5qb2luKFwiIFwiKSxcbiAgICAgICAgLi4ucmVzdFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgLi4uaWNvbk5vZGUubWFwKChbdGFnLCBhdHRyc10pID0+IGNyZWF0ZUVsZW1lbnQodGFnLCBhdHRycykpLFxuICAgICAgICAuLi5BcnJheS5pc0FycmF5KGNoaWxkcmVuKSA/IGNoaWxkcmVuIDogW2NoaWxkcmVuXVxuICAgICAgXVxuICAgIClcbiAgKTtcbiAgQ29tcG9uZW50LmRpc3BsYXlOYW1lID0gYCR7aWNvbk5hbWV9YDtcbiAgcmV0dXJuIENvbXBvbmVudDtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUx1Y2lkZUljb24gYXMgZGVmYXVsdCwgdG9LZWJhYkNhc2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUx1Y2lkZUljb24uanMubWFwXG4iXSwibmFtZXMiOlsiZm9yd2FyZFJlZiIsImNyZWF0ZUVsZW1lbnQiLCJkZWZhdWx0QXR0cmlidXRlcyIsInRvS2ViYWJDYXNlIiwic3RyaW5nIiwicmVwbGFjZSIsInRvTG93ZXJDYXNlIiwidHJpbSIsImNyZWF0ZUx1Y2lkZUljb24iLCJpY29uTmFtZSIsImljb25Ob2RlIiwiQ29tcG9uZW50IiwiY29sb3IiLCJzaXplIiwic3Ryb2tlV2lkdGgiLCJhYnNvbHV0ZVN0cm9rZVdpZHRoIiwiY2xhc3NOYW1lIiwiY2hpbGRyZW4iLCJyZXN0IiwicmVmIiwid2lkdGgiLCJoZWlnaHQiLCJzdHJva2UiLCJOdW1iZXIiLCJqb2luIiwibWFwIiwidGFnIiwiYXR0cnMiLCJBcnJheSIsImlzQXJyYXkiLCJkaXNwbGF5TmFtZSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ defaultAttributes)\n/* harmony export */ });\n/**\n * @license lucide-react v0.302.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ var defaultAttributes = {\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: 24,\n    height: 24,\n    viewBox: \"0 0 24 24\",\n    fill: \"none\",\n    stroke: \"currentColor\",\n    strokeWidth: 2,\n    strokeLinecap: \"round\",\n    strokeLinejoin: \"round\"\n};\n //# sourceMappingURL=defaultAttributes.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vZGVmYXVsdEF0dHJpYnV0ZXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7OztDQUtDLEdBRUQsSUFBSUEsb0JBQW9CO0lBQ3RCQyxPQUFPO0lBQ1BDLE9BQU87SUFDUEMsUUFBUTtJQUNSQyxTQUFTO0lBQ1RDLE1BQU07SUFDTkMsUUFBUTtJQUNSQyxhQUFhO0lBQ2JDLGVBQWU7SUFDZkMsZ0JBQWdCO0FBQ2xCO0FBRXdDLENBQ3hDLDZDQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwX2ZpbmFsLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2x1Y2lkZS1yZWFjdEAwLjMwMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2RlZmF1bHRBdHRyaWJ1dGVzLmpzPzI4ZTciXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuMzAyLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBkZWZhdWx0QXR0cmlidXRlcyA9IHtcbiAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgd2lkdGg6IDI0LFxuICBoZWlnaHQ6IDI0LFxuICB2aWV3Qm94OiBcIjAgMCAyNCAyNFwiLFxuICBmaWxsOiBcIm5vbmVcIixcbiAgc3Ryb2tlOiBcImN1cnJlbnRDb2xvclwiLFxuICBzdHJva2VXaWR0aDogMixcbiAgc3Ryb2tlTGluZWNhcDogXCJyb3VuZFwiLFxuICBzdHJva2VMaW5lam9pbjogXCJyb3VuZFwiXG59O1xuXG5leHBvcnQgeyBkZWZhdWx0QXR0cmlidXRlcyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZWZhdWx0QXR0cmlidXRlcy5qcy5tYXBcbiJdLCJuYW1lcyI6WyJkZWZhdWx0QXR0cmlidXRlcyIsInhtbG5zIiwid2lkdGgiLCJoZWlnaHQiLCJ2aWV3Qm94IiwiZmlsbCIsInN0cm9rZSIsInN0cm9rZVdpZHRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/defaultAttributes.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/home.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/home.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ \"(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js\");\n/**\n * @license lucide-react v0.302.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \nconst Home = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Home\", [\n    [\n        \"path\",\n        {\n            d: \"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\",\n            key: \"y5dka4\"\n        }\n    ],\n    [\n        \"polyline\",\n        {\n            points: \"9 22 9 12 15 12 15 22\",\n            key: \"e2us08\"\n        }\n    ]\n]);\n //# sourceMappingURL=home.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvaG9tZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7OztDQUtDLEdBRXFEO0FBRXRELE1BQU1DLE9BQU9ELGdFQUFnQkEsQ0FBQyxRQUFRO0lBQ3BDO1FBQUM7UUFBUTtZQUFFRSxHQUFHO1lBQWtEQyxLQUFLO1FBQVM7S0FBRTtJQUNoRjtRQUFDO1FBQVk7WUFBRUMsUUFBUTtZQUF5QkQsS0FBSztRQUFTO0tBQUU7Q0FDakU7QUFFMEIsQ0FDM0IsZ0NBQWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3BfZmluYWwvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvaG9tZS5qcz9mY2JlIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjMwMi4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgSG9tZSA9IGNyZWF0ZUx1Y2lkZUljb24oXCJIb21lXCIsIFtcbiAgW1wicGF0aFwiLCB7IGQ6IFwibTMgOSA5LTcgOSA3djExYTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yelwiLCBrZXk6IFwieTVka2E0XCIgfV0sXG4gIFtcInBvbHlsaW5lXCIsIHsgcG9pbnRzOiBcIjkgMjIgOSAxMiAxNSAxMiAxNSAyMlwiLCBrZXk6IFwiZTJ1czA4XCIgfV1cbl0pO1xuXG5leHBvcnQgeyBIb21lIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhvbWUuanMubWFwXG4iXSwibmFtZXMiOlsiY3JlYXRlTHVjaWRlSWNvbiIsIkhvbWUiLCJkIiwia2V5IiwicG9pbnRzIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/home.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/message-square-more.js":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/message-square-more.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MessageSquareMore)\n/* harmony export */ });\n/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ \"(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js\");\n/**\n * @license lucide-react v0.302.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \nconst MessageSquareMore = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"MessageSquareMore\", [\n    [\n        \"path\",\n        {\n            d: \"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z\",\n            key: \"1lielz\"\n        }\n    ],\n    [\n        \"path\",\n        {\n            d: \"M8 10h.01\",\n            key: \"19clt8\"\n        }\n    ],\n    [\n        \"path\",\n        {\n            d: \"M12 10h.01\",\n            key: \"1nrarc\"\n        }\n    ],\n    [\n        \"path\",\n        {\n            d: \"M16 10h.01\",\n            key: \"1m94wz\"\n        }\n    ]\n]);\n //# sourceMappingURL=message-square-more.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvbWVzc2FnZS1zcXVhcmUtbW9yZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7OztDQUtDLEdBRXFEO0FBRXRELE1BQU1DLG9CQUFvQkQsZ0VBQWdCQSxDQUFDLHFCQUFxQjtJQUM5RDtRQUFDO1FBQVE7WUFBRUUsR0FBRztZQUFpRUMsS0FBSztRQUFTO0tBQUU7SUFDL0Y7UUFBQztRQUFRO1lBQUVELEdBQUc7WUFBYUMsS0FBSztRQUFTO0tBQUU7SUFDM0M7UUFBQztRQUFRO1lBQUVELEdBQUc7WUFBY0MsS0FBSztRQUFTO0tBQUU7SUFDNUM7UUFBQztRQUFRO1lBQUVELEdBQUc7WUFBY0MsS0FBSztRQUFTO0tBQUU7Q0FDN0M7QUFFdUMsQ0FDeEMsK0NBQStDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3BfZmluYWwvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvbWVzc2FnZS1zcXVhcmUtbW9yZS5qcz8xMTJjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjMwMi4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgTWVzc2FnZVNxdWFyZU1vcmUgPSBjcmVhdGVMdWNpZGVJY29uKFwiTWVzc2FnZVNxdWFyZU1vcmVcIiwgW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMjEgMTVhMiAyIDAgMCAxLTIgMkg3bC00IDRWNWEyIDIgMCAwIDEgMi0yaDE0YTIgMiAwIDAgMSAyIDJ6XCIsIGtleTogXCIxbGllbHpcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTggMTBoLjAxXCIsIGtleTogXCIxOWNsdDhcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTEyIDEwaC4wMVwiLCBrZXk6IFwiMW5yYXJjXCIgfV0sXG4gIFtcInBhdGhcIiwgeyBkOiBcIk0xNiAxMGguMDFcIiwga2V5OiBcIjFtOTR3elwiIH1dXG5dKTtcblxuZXhwb3J0IHsgTWVzc2FnZVNxdWFyZU1vcmUgYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVzc2FnZS1zcXVhcmUtbW9yZS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJjcmVhdGVMdWNpZGVJY29uIiwiTWVzc2FnZVNxdWFyZU1vcmUiLCJkIiwia2V5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/message-square-more.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/pause.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/pause.js ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pause)\n/* harmony export */ });\n/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ \"(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js\");\n/**\n * @license lucide-react v0.302.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \nconst Pause = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Pause\", [\n    [\n        \"rect\",\n        {\n            width: \"4\",\n            height: \"16\",\n            x: \"6\",\n            y: \"4\",\n            key: \"iffhe4\"\n        }\n    ],\n    [\n        \"rect\",\n        {\n            width: \"4\",\n            height: \"16\",\n            x: \"14\",\n            y: \"4\",\n            key: \"sjin7j\"\n        }\n    ]\n]);\n //# sourceMappingURL=pause.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvcGF1c2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUVxRDtBQUV0RCxNQUFNQyxRQUFRRCxnRUFBZ0JBLENBQUMsU0FBUztJQUN0QztRQUFDO1FBQVE7WUFBRUUsT0FBTztZQUFLQyxRQUFRO1lBQU1DLEdBQUc7WUFBS0MsR0FBRztZQUFLQyxLQUFLO1FBQVM7S0FBRTtJQUNyRTtRQUFDO1FBQVE7WUFBRUosT0FBTztZQUFLQyxRQUFRO1lBQU1DLEdBQUc7WUFBTUMsR0FBRztZQUFLQyxLQUFLO1FBQVM7S0FBRTtDQUN2RTtBQUUyQixDQUM1QixpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cF9maW5hbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9sdWNpZGUtcmVhY3RAMC4zMDIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9wYXVzZS5qcz9lYzUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjMwMi4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgUGF1c2UgPSBjcmVhdGVMdWNpZGVJY29uKFwiUGF1c2VcIiwgW1xuICBbXCJyZWN0XCIsIHsgd2lkdGg6IFwiNFwiLCBoZWlnaHQ6IFwiMTZcIiwgeDogXCI2XCIsIHk6IFwiNFwiLCBrZXk6IFwiaWZmaGU0XCIgfV0sXG4gIFtcInJlY3RcIiwgeyB3aWR0aDogXCI0XCIsIGhlaWdodDogXCIxNlwiLCB4OiBcIjE0XCIsIHk6IFwiNFwiLCBrZXk6IFwic2ppbjdqXCIgfV1cbl0pO1xuXG5leHBvcnQgeyBQYXVzZSBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXVzZS5qcy5tYXBcbiJdLCJuYW1lcyI6WyJjcmVhdGVMdWNpZGVJY29uIiwiUGF1c2UiLCJ3aWR0aCIsImhlaWdodCIsIngiLCJ5Iiwia2V5IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/pause.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/play.js":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/play.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Play)\n/* harmony export */ });\n/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ \"(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js\");\n/**\n * @license lucide-react v0.302.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \nconst Play = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Play\", [\n    [\n        \"polygon\",\n        {\n            points: \"5 3 19 12 5 21 5 3\",\n            key: \"191637\"\n        }\n    ]\n]);\n //# sourceMappingURL=play.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvcGxheS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7OztDQUtDLEdBRXFEO0FBRXRELE1BQU1DLE9BQU9ELGdFQUFnQkEsQ0FBQyxRQUFRO0lBQ3BDO1FBQUM7UUFBVztZQUFFRSxRQUFRO1lBQXNCQyxLQUFLO1FBQVM7S0FBRTtDQUM3RDtBQUUwQixDQUMzQixnQ0FBZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cF9maW5hbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9sdWNpZGUtcmVhY3RAMC4zMDIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9wbGF5LmpzPzc2N2EiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBsdWNpZGUtcmVhY3QgdjAuMzAyLjAgLSBJU0NcbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBJU0MgbGljZW5zZS5cbiAqIFNlZSB0aGUgTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbmltcG9ydCBjcmVhdGVMdWNpZGVJY29uIGZyb20gJy4uL2NyZWF0ZUx1Y2lkZUljb24uanMnO1xuXG5jb25zdCBQbGF5ID0gY3JlYXRlTHVjaWRlSWNvbihcIlBsYXlcIiwgW1xuICBbXCJwb2x5Z29uXCIsIHsgcG9pbnRzOiBcIjUgMyAxOSAxMiA1IDIxIDUgM1wiLCBrZXk6IFwiMTkxNjM3XCIgfV1cbl0pO1xuXG5leHBvcnQgeyBQbGF5IGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsYXkuanMubWFwXG4iXSwibmFtZXMiOlsiY3JlYXRlTHVjaWRlSWNvbiIsIlBsYXkiLCJwb2ludHMiLCJrZXkiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/play.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/rotate-cw.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/rotate-cw.js ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RotateCw)\n/* harmony export */ });\n/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ \"(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js\");\n/**\n * @license lucide-react v0.302.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \nconst RotateCw = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"RotateCw\", [\n    [\n        \"path\",\n        {\n            d: \"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8\",\n            key: \"1p45f6\"\n        }\n    ],\n    [\n        \"path\",\n        {\n            d: \"M21 3v5h-5\",\n            key: \"1q7to0\"\n        }\n    ]\n]);\n //# sourceMappingURL=rotate-cw.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvcm90YXRlLWN3LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7Ozs7O0NBS0MsR0FFcUQ7QUFFdEQsTUFBTUMsV0FBV0QsZ0VBQWdCQSxDQUFDLFlBQVk7SUFDNUM7UUFBQztRQUFRO1lBQUVFLEdBQUc7WUFBcURDLEtBQUs7UUFBUztLQUFFO0lBQ25GO1FBQUM7UUFBUTtZQUFFRCxHQUFHO1lBQWNDLEtBQUs7UUFBUztLQUFFO0NBQzdDO0FBRThCLENBQy9CLHFDQUFxQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dwX2ZpbmFsLy4vbm9kZV9tb2R1bGVzLy5wbnBtL2x1Y2lkZS1yZWFjdEAwLjMwMi4wX3JlYWN0QDE4LjIuMC9ub2RlX21vZHVsZXMvbHVjaWRlLXJlYWN0L2Rpc3QvZXNtL2ljb25zL3JvdGF0ZS1jdy5qcz9mZmY1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjMwMi4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgUm90YXRlQ3cgPSBjcmVhdGVMdWNpZGVJY29uKFwiUm90YXRlQ3dcIiwgW1xuICBbXCJwYXRoXCIsIHsgZDogXCJNMjEgMTJhOSA5IDAgMSAxLTktOWMyLjUyIDAgNC45MyAxIDYuNzQgMi43NEwyMSA4XCIsIGtleTogXCIxcDQ1ZjZcIiB9XSxcbiAgW1wicGF0aFwiLCB7IGQ6IFwiTTIxIDN2NWgtNVwiLCBrZXk6IFwiMXE3dG8wXCIgfV1cbl0pO1xuXG5leHBvcnQgeyBSb3RhdGVDdyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3RhdGUtY3cuanMubWFwXG4iXSwibmFtZXMiOlsiY3JlYXRlTHVjaWRlSWNvbiIsIlJvdGF0ZUN3IiwiZCIsImtleSIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/rotate-cw.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/settings.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/settings.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Settings)\n/* harmony export */ });\n/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createLucideIcon.js */ \"(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/createLucideIcon.js\");\n/**\n * @license lucide-react v0.302.0 - ISC\n *\n * This source code is licensed under the ISC license.\n * See the LICENSE file in the root directory of this source tree.\n */ \nconst Settings = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"Settings\", [\n    [\n        \"path\",\n        {\n            d: \"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\",\n            key: \"1qme2f\"\n        }\n    ],\n    [\n        \"circle\",\n        {\n            cx: \"12\",\n            cy: \"12\",\n            r: \"3\",\n            key: \"1v7zrd\"\n        }\n    ]\n]);\n //# sourceMappingURL=settings.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vbHVjaWRlLXJlYWN0QDAuMzAyLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9sdWNpZGUtcmVhY3QvZGlzdC9lc20vaWNvbnMvc2V0dGluZ3MuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7Ozs7Q0FLQyxHQUVxRDtBQUV0RCxNQUFNQyxXQUFXRCxnRUFBZ0JBLENBQUMsWUFBWTtJQUM1QztRQUNFO1FBQ0E7WUFDRUUsR0FBRztZQUNIQyxLQUFLO1FBQ1A7S0FDRDtJQUNEO1FBQUM7UUFBVTtZQUFFQyxJQUFJO1lBQU1DLElBQUk7WUFBTUMsR0FBRztZQUFLSCxLQUFLO1FBQVM7S0FBRTtDQUMxRDtBQUU4QixDQUMvQixvQ0FBb0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cF9maW5hbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9sdWNpZGUtcmVhY3RAMC4zMDIuMF9yZWFjdEAxOC4yLjAvbm9kZV9tb2R1bGVzL2x1Y2lkZS1yZWFjdC9kaXN0L2VzbS9pY29ucy9zZXR0aW5ncy5qcz82ZThjIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgbHVjaWRlLXJlYWN0IHYwLjMwMi4wIC0gSVNDXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgSVNDIGxpY2Vuc2UuXG4gKiBTZWUgdGhlIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG5pbXBvcnQgY3JlYXRlTHVjaWRlSWNvbiBmcm9tICcuLi9jcmVhdGVMdWNpZGVJY29uLmpzJztcblxuY29uc3QgU2V0dGluZ3MgPSBjcmVhdGVMdWNpZGVJY29uKFwiU2V0dGluZ3NcIiwgW1xuICBbXG4gICAgXCJwYXRoXCIsXG4gICAge1xuICAgICAgZDogXCJNMTIuMjIgMmgtLjQ0YTIgMiAwIDAgMC0yIDJ2LjE4YTIgMiAwIDAgMS0xIDEuNzNsLS40My4yNWEyIDIgMCAwIDEtMiAwbC0uMTUtLjA4YTIgMiAwIDAgMC0yLjczLjczbC0uMjIuMzhhMiAyIDAgMCAwIC43MyAyLjczbC4xNS4xYTIgMiAwIDAgMSAxIDEuNzJ2LjUxYTIgMiAwIDAgMS0xIDEuNzRsLS4xNS4wOWEyIDIgMCAwIDAtLjczIDIuNzNsLjIyLjM4YTIgMiAwIDAgMCAyLjczLjczbC4xNS0uMDhhMiAyIDAgMCAxIDIgMGwuNDMuMjVhMiAyIDAgMCAxIDEgMS43M1YyMGEyIDIgMCAwIDAgMiAyaC40NGEyIDIgMCAwIDAgMi0ydi0uMThhMiAyIDAgMCAxIDEtMS43M2wuNDMtLjI1YTIgMiAwIDAgMSAyIDBsLjE1LjA4YTIgMiAwIDAgMCAyLjczLS43M2wuMjItLjM5YTIgMiAwIDAgMC0uNzMtMi43M2wtLjE1LS4wOGEyIDIgMCAwIDEtMS0xLjc0di0uNWEyIDIgMCAwIDEgMS0xLjc0bC4xNS0uMDlhMiAyIDAgMCAwIC43My0yLjczbC0uMjItLjM4YTIgMiAwIDAgMC0yLjczLS43M2wtLjE1LjA4YTIgMiAwIDAgMS0yIDBsLS40My0uMjVhMiAyIDAgMCAxLTEtMS43M1Y0YTIgMiAwIDAgMC0yLTJ6XCIsXG4gICAgICBrZXk6IFwiMXFtZTJmXCJcbiAgICB9XG4gIF0sXG4gIFtcImNpcmNsZVwiLCB7IGN4OiBcIjEyXCIsIGN5OiBcIjEyXCIsIHI6IFwiM1wiLCBrZXk6IFwiMXY3enJkXCIgfV1cbl0pO1xuXG5leHBvcnQgeyBTZXR0aW5ncyBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zZXR0aW5ncy5qcy5tYXBcbiJdLCJuYW1lcyI6WyJjcmVhdGVMdWNpZGVJY29uIiwiU2V0dGluZ3MiLCJkIiwia2V5IiwiY3giLCJjeSIsInIiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/lucide-react@0.302.0_react@18.2.0/node_modules/lucide-react/dist/esm/icons/settings.js\n");

/***/ })

};
;