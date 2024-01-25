"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-is@18.2.0";
exports.ids = ["vendor-chunks/react-is@18.2.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.development.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.development.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * @license React\n * react-is.development.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */ \nif (true) {\n    (function() {\n        \"use strict\";\n        // ATTENTION\n        // When adding new symbols to this file,\n        // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'\n        // The Symbol used to tag the ReactElement-like types.\n        var REACT_ELEMENT_TYPE = Symbol.for(\"react.element\");\n        var REACT_PORTAL_TYPE = Symbol.for(\"react.portal\");\n        var REACT_FRAGMENT_TYPE = Symbol.for(\"react.fragment\");\n        var REACT_STRICT_MODE_TYPE = Symbol.for(\"react.strict_mode\");\n        var REACT_PROFILER_TYPE = Symbol.for(\"react.profiler\");\n        var REACT_PROVIDER_TYPE = Symbol.for(\"react.provider\");\n        var REACT_CONTEXT_TYPE = Symbol.for(\"react.context\");\n        var REACT_SERVER_CONTEXT_TYPE = Symbol.for(\"react.server_context\");\n        var REACT_FORWARD_REF_TYPE = Symbol.for(\"react.forward_ref\");\n        var REACT_SUSPENSE_TYPE = Symbol.for(\"react.suspense\");\n        var REACT_SUSPENSE_LIST_TYPE = Symbol.for(\"react.suspense_list\");\n        var REACT_MEMO_TYPE = Symbol.for(\"react.memo\");\n        var REACT_LAZY_TYPE = Symbol.for(\"react.lazy\");\n        var REACT_OFFSCREEN_TYPE = Symbol.for(\"react.offscreen\");\n        // -----------------------------------------------------------------------------\n        var enableScopeAPI = false; // Experimental Create Event Handle API.\n        var enableCacheElement = false;\n        var enableTransitionTracing = false; // No known bugs, but needs performance testing\n        var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber\n        // stuff. Intended to enable React core members to more easily debug scheduling\n        // issues in DEV builds.\n        var enableDebugTracing = false; // Track which Fiber(s) schedule render work.\n        var REACT_MODULE_REFERENCE;\n        {\n            REACT_MODULE_REFERENCE = Symbol.for(\"react.module.reference\");\n        }\n        function isValidElementType(type) {\n            if (typeof type === \"string\" || typeof type === \"function\") {\n                return true;\n            } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).\n            if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {\n                return true;\n            }\n            if (typeof type === \"object\" && type !== null) {\n                if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object\n                // types supported by any Flight configuration anywhere since\n                // we don't know which Flight build this will end up being used\n                // with.\n                type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {\n                    return true;\n                }\n            }\n            return false;\n        }\n        function typeOf(object) {\n            if (typeof object === \"object\" && object !== null) {\n                var $$typeof = object.$$typeof;\n                switch($$typeof){\n                    case REACT_ELEMENT_TYPE:\n                        var type = object.type;\n                        switch(type){\n                            case REACT_FRAGMENT_TYPE:\n                            case REACT_PROFILER_TYPE:\n                            case REACT_STRICT_MODE_TYPE:\n                            case REACT_SUSPENSE_TYPE:\n                            case REACT_SUSPENSE_LIST_TYPE:\n                                return type;\n                            default:\n                                var $$typeofType = type && type.$$typeof;\n                                switch($$typeofType){\n                                    case REACT_SERVER_CONTEXT_TYPE:\n                                    case REACT_CONTEXT_TYPE:\n                                    case REACT_FORWARD_REF_TYPE:\n                                    case REACT_LAZY_TYPE:\n                                    case REACT_MEMO_TYPE:\n                                    case REACT_PROVIDER_TYPE:\n                                        return $$typeofType;\n                                    default:\n                                        return $$typeof;\n                                }\n                        }\n                    case REACT_PORTAL_TYPE:\n                        return $$typeof;\n                }\n            }\n            return undefined;\n        }\n        var ContextConsumer = REACT_CONTEXT_TYPE;\n        var ContextProvider = REACT_PROVIDER_TYPE;\n        var Element = REACT_ELEMENT_TYPE;\n        var ForwardRef = REACT_FORWARD_REF_TYPE;\n        var Fragment = REACT_FRAGMENT_TYPE;\n        var Lazy = REACT_LAZY_TYPE;\n        var Memo = REACT_MEMO_TYPE;\n        var Portal = REACT_PORTAL_TYPE;\n        var Profiler = REACT_PROFILER_TYPE;\n        var StrictMode = REACT_STRICT_MODE_TYPE;\n        var Suspense = REACT_SUSPENSE_TYPE;\n        var SuspenseList = REACT_SUSPENSE_LIST_TYPE;\n        var hasWarnedAboutDeprecatedIsAsyncMode = false;\n        var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated\n        function isAsyncMode(object) {\n            {\n                if (!hasWarnedAboutDeprecatedIsAsyncMode) {\n                    hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint\n                    console[\"warn\"](\"The ReactIs.isAsyncMode() alias has been deprecated, \" + \"and will be removed in React 18+.\");\n                }\n            }\n            return false;\n        }\n        function isConcurrentMode(object) {\n            {\n                if (!hasWarnedAboutDeprecatedIsConcurrentMode) {\n                    hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint\n                    console[\"warn\"](\"The ReactIs.isConcurrentMode() alias has been deprecated, \" + \"and will be removed in React 18+.\");\n                }\n            }\n            return false;\n        }\n        function isContextConsumer(object) {\n            return typeOf(object) === REACT_CONTEXT_TYPE;\n        }\n        function isContextProvider(object) {\n            return typeOf(object) === REACT_PROVIDER_TYPE;\n        }\n        function isElement(object) {\n            return typeof object === \"object\" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;\n        }\n        function isForwardRef(object) {\n            return typeOf(object) === REACT_FORWARD_REF_TYPE;\n        }\n        function isFragment(object) {\n            return typeOf(object) === REACT_FRAGMENT_TYPE;\n        }\n        function isLazy(object) {\n            return typeOf(object) === REACT_LAZY_TYPE;\n        }\n        function isMemo(object) {\n            return typeOf(object) === REACT_MEMO_TYPE;\n        }\n        function isPortal(object) {\n            return typeOf(object) === REACT_PORTAL_TYPE;\n        }\n        function isProfiler(object) {\n            return typeOf(object) === REACT_PROFILER_TYPE;\n        }\n        function isStrictMode(object) {\n            return typeOf(object) === REACT_STRICT_MODE_TYPE;\n        }\n        function isSuspense(object) {\n            return typeOf(object) === REACT_SUSPENSE_TYPE;\n        }\n        function isSuspenseList(object) {\n            return typeOf(object) === REACT_SUSPENSE_LIST_TYPE;\n        }\n        exports.ContextConsumer = ContextConsumer;\n        exports.ContextProvider = ContextProvider;\n        exports.Element = Element;\n        exports.ForwardRef = ForwardRef;\n        exports.Fragment = Fragment;\n        exports.Lazy = Lazy;\n        exports.Memo = Memo;\n        exports.Portal = Portal;\n        exports.Profiler = Profiler;\n        exports.StrictMode = StrictMode;\n        exports.Suspense = Suspense;\n        exports.SuspenseList = SuspenseList;\n        exports.isAsyncMode = isAsyncMode;\n        exports.isConcurrentMode = isConcurrentMode;\n        exports.isContextConsumer = isContextConsumer;\n        exports.isContextProvider = isContextProvider;\n        exports.isElement = isElement;\n        exports.isForwardRef = isForwardRef;\n        exports.isFragment = isFragment;\n        exports.isLazy = isLazy;\n        exports.isMemo = isMemo;\n        exports.isPortal = isPortal;\n        exports.isProfiler = isProfiler;\n        exports.isStrictMode = isStrictMode;\n        exports.isSuspense = isSuspense;\n        exports.isSuspenseList = isSuspenseList;\n        exports.isValidElementType = isValidElementType;\n        exports.typeOf = typeOf;\n    })();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtaXNAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0NBUUMsR0FFRDtBQUVBLElBQUlBLElBQXFDLEVBQUU7SUFDeEM7UUFDSDtRQUVBLFlBQVk7UUFDWix3Q0FBd0M7UUFDeEMsa0ZBQWtGO1FBQ2xGLHNEQUFzRDtRQUN0RCxJQUFJQyxxQkFBcUJDLE9BQU9DLEdBQUcsQ0FBQztRQUNwQyxJQUFJQyxvQkFBb0JGLE9BQU9DLEdBQUcsQ0FBQztRQUNuQyxJQUFJRSxzQkFBc0JILE9BQU9DLEdBQUcsQ0FBQztRQUNyQyxJQUFJRyx5QkFBeUJKLE9BQU9DLEdBQUcsQ0FBQztRQUN4QyxJQUFJSSxzQkFBc0JMLE9BQU9DLEdBQUcsQ0FBQztRQUNyQyxJQUFJSyxzQkFBc0JOLE9BQU9DLEdBQUcsQ0FBQztRQUNyQyxJQUFJTSxxQkFBcUJQLE9BQU9DLEdBQUcsQ0FBQztRQUNwQyxJQUFJTyw0QkFBNEJSLE9BQU9DLEdBQUcsQ0FBQztRQUMzQyxJQUFJUSx5QkFBeUJULE9BQU9DLEdBQUcsQ0FBQztRQUN4QyxJQUFJUyxzQkFBc0JWLE9BQU9DLEdBQUcsQ0FBQztRQUNyQyxJQUFJVSwyQkFBMkJYLE9BQU9DLEdBQUcsQ0FBQztRQUMxQyxJQUFJVyxrQkFBa0JaLE9BQU9DLEdBQUcsQ0FBQztRQUNqQyxJQUFJWSxrQkFBa0JiLE9BQU9DLEdBQUcsQ0FBQztRQUNqQyxJQUFJYSx1QkFBdUJkLE9BQU9DLEdBQUcsQ0FBQztRQUV0QyxnRkFBZ0Y7UUFFaEYsSUFBSWMsaUJBQWlCLE9BQU8sd0NBQXdDO1FBQ3BFLElBQUlDLHFCQUFxQjtRQUN6QixJQUFJQywwQkFBMEIsT0FBTywrQ0FBK0M7UUFFcEYsSUFBSUMscUJBQXFCLE9BQU8sc0RBQXNEO1FBQ3RGLCtFQUErRTtRQUMvRSx3QkFBd0I7UUFFeEIsSUFBSUMscUJB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VyxpQkFBaUIsR0FBR1Y7UUFDcEJVLG9CQUFvQixHQUFHVDtRQUN2QlMsa0JBQWtCLEdBQUdSO1FBQ3JCUSxjQUFjLEdBQUdQO1FBQ2pCTyxjQUFjLEdBQUdOO1FBQ2pCTSxnQkFBZ0IsR0FBR0w7UUFDbkJLLGtCQUFrQixHQUFHSjtRQUNyQkksb0JBQW9CLEdBQUdIO1FBQ3ZCRyxrQkFBa0IsR0FBR0Y7UUFDckJFLHNCQUFzQixHQUFHRDtRQUN6QkMsMEJBQTBCLEdBQUdyQztRQUM3QnFDLGNBQWMsR0FBR2hDO0lBQ2Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dwX2ZpbmFsLy4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0LWlzQDE4LjIuMC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzP2VkNDYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBBVFRFTlRJT05cbi8vIFdoZW4gYWRkaW5nIG5ldyBzeW1ib2xzIHRvIHRoaXMgZmlsZSxcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcbi8vIFRoZSBTeW1ib2wgdXNlZCB0byB0YWcgdGhlIFJlYWN0RWxlbWVudC1saWtlIHR5cGVzLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKTtcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnBvcnRhbCcpO1xudmFyIFJFQUNUX0ZSQUdNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mcmFnbWVudCcpO1xudmFyIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm9maWxlcicpO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wcm92aWRlcicpO1xudmFyIFJFQUNUX0NPTlRFWFRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmNvbnRleHQnKTtcbnZhciBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc2VydmVyX2NvbnRleHQnKTtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubWVtbycpO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxudmFyIGVuYWJsZUNhY2hlRWxlbWVudCA9IGZhbHNlO1xudmFyIGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nID0gZmFsc2U7IC8vIE5vIGtub3duIGJ1Z3MsIGJ1dCBuZWVkcyBwZXJmb3JtYW5jZSB0ZXN0aW5nXG5cbnZhciBlbmFibGVMZWdhY3lIaWRkZW4gPSBmYWxzZTsgLy8gRW5hYmxlcyB1bnN0YWJsZV9hdm9pZFRoaXNGYWxsYmFjayBmZWF0dXJlIGluIEZpYmVyXG4vLyBzdHVmZi4gSW50ZW5kZWQgdG8gZW5hYmxlIFJlYWN0IGNvcmUgbWVtYmVycyB0byBtb3JlIGVhc2lseSBkZWJ1ZyBzY2hlZHVsaW5nXG4vLyBpc3N1ZXMgaW4gREVWIGJ1aWxkcy5cblxudmFyIGVuYWJsZURlYnVnVHJhY2luZyA9IGZhbHNlOyAvLyBUcmFjayB3aGljaCBGaWJlcihzKSBzY2hlZHVsZSByZW5kZXIgd29yay5cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9TRVJWRVJfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2ZUeXBlO1xuXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgcmV0dXJuICQkdHlwZW9mO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgU3VzcGVuc2VMaXN0ID0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2VMaXN0KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLlN1c3BlbnNlTGlzdCA9IFN1c3BlbnNlTGlzdDtcbmV4cG9ydHMuaXNBc3luY01vZGUgPSBpc0FzeW5jTW9kZTtcbmV4cG9ydHMuaXNDb25jdXJyZW50TW9kZSA9IGlzQ29uY3VycmVudE1vZGU7XG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLmlzQ29udGV4dFByb3ZpZGVyID0gaXNDb250ZXh0UHJvdmlkZXI7XG5leHBvcnRzLmlzRWxlbWVudCA9IGlzRWxlbWVudDtcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xuZXhwb3J0cy5pc0ZyYWdtZW50ID0gaXNGcmFnbWVudDtcbmV4cG9ydHMuaXNMYXp5ID0gaXNMYXp5O1xuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XG5leHBvcnRzLmlzUG9ydGFsID0gaXNQb3J0YWw7XG5leHBvcnRzLmlzUHJvZmlsZXIgPSBpc1Byb2ZpbGVyO1xuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XG5leHBvcnRzLmlzU3VzcGVuc2UgPSBpc1N1c3BlbnNlO1xuZXhwb3J0cy5pc1N1c3BlbnNlTGlzdCA9IGlzU3VzcGVuc2VMaXN0O1xuZXhwb3J0cy5pc1ZhbGlkRWxlbWVudFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGU7XG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcbiAgfSkoKTtcbn1cbiJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiUkVBQ1RfRUxFTUVOVF9UWVBFIiwiU3ltYm9sIiwiZm9yIiwiUkVBQ1RfUE9SVEFMX1RZUEUiLCJSRUFDVF9GUkFHTUVOVF9UWVBFIiwiUkVBQ1RfU1RSSUNUX01PREVfVFlQRSIsIlJFQUNUX1BST0ZJTEVSX1RZUEUiLCJSRUFDVF9QUk9WSURFUl9UWVBFIiwiUkVBQ1RfQ09OVEVYVF9UWVBFIiwiUkVBQ1RfU0VSVkVSX0NPTlRFWFRfVFlQRSIsIlJFQUNUX0ZPUldBUkRfUkVGX1RZUEUiLCJSRUFDVF9TVVNQRU5TRV9UWVBFIiwiUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIiwiUkVBQ1RfTUVNT19UWVBFIiwiUkVBQ1RfTEFaWV9UWVBFIiwiUkVBQ1RfT0ZGU0NSRUVOX1RZUEUiLCJlbmFibGVTY29wZUFQSSIsImVuYWJsZUNhY2hlRWxlbWVudCIsImVuYWJsZVRyYW5zaXRpb25UcmFjaW5nIiwiZW5hYmxlTGVnYWN5SGlkZGVuIiwiZW5hYmxlRGVidWdUcmFjaW5nIiwiUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSIsImlzVmFsaWRFbGVtZW50VHlwZSIsInR5cGUiLCIkJHR5cGVvZiIsImdldE1vZHVsZUlkIiwidW5kZWZpbmVkIiwidHlwZU9mIiwib2JqZWN0IiwiJCR0eXBlb2ZUeXBlIiwiQ29udGV4dENvbnN1bWVyIiwiQ29udGV4dFByb3ZpZGVyIiwiRWxlbWVudCIsIkZvcndhcmRSZWYiLCJGcmFnbWVudCIsIkxhenkiLCJNZW1vIiwiUG9ydGFsIiwiUHJvZmlsZXIiLCJTdHJpY3RNb2RlIiwiU3VzcGVuc2UiLCJTdXNwZW5zZUxpc3QiLCJoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSIsImhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUiLCJpc0FzeW5jTW9kZSIsImNvbnNvbGUiLCJpc0NvbmN1cnJlbnRNb2RlIiwiaXNDb250ZXh0Q29uc3VtZXIiLCJpc0NvbnRleHRQcm92aWRlciIsImlzRWxlbWVudCIsImlzRm9yd2FyZFJlZiIsImlzRnJhZ21lbnQiLCJpc0xhenkiLCJpc01lbW8iLCJpc1BvcnRhbCIsImlzUHJvZmlsZXIiLCJpc1N0cmljdE1vZGUiLCJpc1N1c3BlbnNlIiwiaXNTdXNwZW5zZUxpc3QiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.development.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js":
/*!***************************************************************************!*\
  !*** ./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nif (false) {} else {\n    module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ \"(ssr)/./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/cjs/react-is.development.js\");\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vcmVhY3QtaXNAMTguMi4wL25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUVBLElBQUlBLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMQyx5S0FBeUI7QUFDM0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93cF9maW5hbC8uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWFjdC1pc0AxOC4yLjAvbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2luZGV4LmpzPzk3OTUiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzJyk7XG59XG4iXSwibmFtZXMiOlsicHJvY2VzcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/react-is@18.2.0/node_modules/react-is/index.js\n");

/***/ })

};
;