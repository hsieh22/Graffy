"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@firebase+logger@0.4.0";
exports.ids = ["vendor-chunks/@firebase+logger@0.4.0"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@firebase+logger@0.4.0/node_modules/@firebase/logger/dist/esm/index.esm2017.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@firebase+logger@0.4.0/node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogLevel: () => (/* binding */ LogLevel),\n/* harmony export */   Logger: () => (/* binding */ Logger),\n/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel),\n/* harmony export */   setUserLogHandler: () => (/* binding */ setUserLogHandler)\n/* harmony export */ });\n/**\r\n * @license\r\n * Copyright 2017 Google LLC\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */ /**\r\n * A container for all of the Logger instances\r\n */ const instances = [];\n/**\r\n * The JS SDK supports 5 log levels and also allows a user the ability to\r\n * silence the logs altogether.\r\n *\r\n * The order is a follows:\r\n * DEBUG < VERBOSE < INFO < WARN < ERROR\r\n *\r\n * All of the log types above the current log level will be captured (i.e. if\r\n * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and\r\n * `VERBOSE` logs will not)\r\n */ var LogLevel;\n(function(LogLevel) {\n    LogLevel[LogLevel[\"DEBUG\"] = 0] = \"DEBUG\";\n    LogLevel[LogLevel[\"VERBOSE\"] = 1] = \"VERBOSE\";\n    LogLevel[LogLevel[\"INFO\"] = 2] = \"INFO\";\n    LogLevel[LogLevel[\"WARN\"] = 3] = \"WARN\";\n    LogLevel[LogLevel[\"ERROR\"] = 4] = \"ERROR\";\n    LogLevel[LogLevel[\"SILENT\"] = 5] = \"SILENT\";\n})(LogLevel || (LogLevel = {}));\nconst levelStringToEnum = {\n    \"debug\": LogLevel.DEBUG,\n    \"verbose\": LogLevel.VERBOSE,\n    \"info\": LogLevel.INFO,\n    \"warn\": LogLevel.WARN,\n    \"error\": LogLevel.ERROR,\n    \"silent\": LogLevel.SILENT\n};\n/**\r\n * The default log level\r\n */ const defaultLogLevel = LogLevel.INFO;\n/**\r\n * By default, `console.debug` is not displayed in the developer console (in\r\n * chrome). To avoid forcing users to have to opt-in to these logs twice\r\n * (i.e. once for firebase, and once in the console), we are sending `DEBUG`\r\n * logs to the `console.log` function.\r\n */ const ConsoleMethod = {\n    [LogLevel.DEBUG]: \"log\",\n    [LogLevel.VERBOSE]: \"log\",\n    [LogLevel.INFO]: \"info\",\n    [LogLevel.WARN]: \"warn\",\n    [LogLevel.ERROR]: \"error\"\n};\n/**\r\n * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR\r\n * messages on to their corresponding console counterparts (if the log method\r\n * is supported by the current log level)\r\n */ const defaultLogHandler = (instance, logType, ...args)=>{\n    if (logType < instance.logLevel) {\n        return;\n    }\n    const now = new Date().toISOString();\n    const method = ConsoleMethod[logType];\n    if (method) {\n        console[method](`[${now}]  ${instance.name}:`, ...args);\n    } else {\n        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);\n    }\n};\nclass Logger {\n    /**\r\n     * Gives you an instance of a Logger to capture messages according to\r\n     * Firebase's logging scheme.\r\n     *\r\n     * @param name The name that the logs will be associated with\r\n     */ constructor(name){\n        this.name = name;\n        /**\r\n         * The log level of the given Logger instance.\r\n         */ this._logLevel = defaultLogLevel;\n        /**\r\n         * The main (internal) log handler for the Logger instance.\r\n         * Can be set to a new function in internal package code but not by user.\r\n         */ this._logHandler = defaultLogHandler;\n        /**\r\n         * The optional, additional, user-defined log handler for the Logger instance.\r\n         */ this._userLogHandler = null;\n        /**\r\n         * Capture the current instance for later use\r\n         */ instances.push(this);\n    }\n    get logLevel() {\n        return this._logLevel;\n    }\n    set logLevel(val) {\n        if (!(val in LogLevel)) {\n            throw new TypeError(`Invalid value \"${val}\" assigned to \\`logLevel\\``);\n        }\n        this._logLevel = val;\n    }\n    // Workaround for setter/getter having to be the same type.\n    setLogLevel(val) {\n        this._logLevel = typeof val === \"string\" ? levelStringToEnum[val] : val;\n    }\n    get logHandler() {\n        return this._logHandler;\n    }\n    set logHandler(val) {\n        if (typeof val !== \"function\") {\n            throw new TypeError(\"Value assigned to `logHandler` must be a function\");\n        }\n        this._logHandler = val;\n    }\n    get userLogHandler() {\n        return this._userLogHandler;\n    }\n    set userLogHandler(val) {\n        this._userLogHandler = val;\n    }\n    /**\r\n     * The functions below are all based on the `console` interface\r\n     */ debug(...args) {\n        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);\n        this._logHandler(this, LogLevel.DEBUG, ...args);\n    }\n    log(...args) {\n        this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);\n        this._logHandler(this, LogLevel.VERBOSE, ...args);\n    }\n    info(...args) {\n        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);\n        this._logHandler(this, LogLevel.INFO, ...args);\n    }\n    warn(...args) {\n        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);\n        this._logHandler(this, LogLevel.WARN, ...args);\n    }\n    error(...args) {\n        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);\n        this._logHandler(this, LogLevel.ERROR, ...args);\n    }\n}\nfunction setLogLevel(level) {\n    instances.forEach((inst)=>{\n        inst.setLogLevel(level);\n    });\n}\nfunction setUserLogHandler(logCallback, options) {\n    for (const instance of instances){\n        let customLogLevel = null;\n        if (options && options.level) {\n            customLogLevel = levelStringToEnum[options.level];\n        }\n        if (logCallback === null) {\n            instance.userLogHandler = null;\n        } else {\n            instance.userLogHandler = (instance, level, ...args)=>{\n                const message = args.map((arg)=>{\n                    if (arg == null) {\n                        return null;\n                    } else if (typeof arg === \"string\") {\n                        return arg;\n                    } else if (typeof arg === \"number\" || typeof arg === \"boolean\") {\n                        return arg.toString();\n                    } else if (arg instanceof Error) {\n                        return arg.message;\n                    } else {\n                        try {\n                            return JSON.stringify(arg);\n                        } catch (ignored) {\n                            return null;\n                        }\n                    }\n                }).filter((arg)=>arg).join(\" \");\n                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {\n                    logCallback({\n                        level: LogLevel[level].toLowerCase(),\n                        message,\n                        args,\n                        type: instance.name\n                    });\n                }\n            };\n        }\n    }\n}\n //# sourceMappingURL=index.esm2017.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZpcmViYXNlK2xvZ2dlckAwLjQuMC9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2xvZ2dlci9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0NBZUMsR0FDRDs7Q0FFQyxHQUNELE1BQU1BLFlBQVksRUFBRTtBQUNwQjs7Ozs7Ozs7OztDQVVDLEdBQ0QsSUFBSUM7QUFDSCxVQUFVQSxRQUFRO0lBQ2ZBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUc7SUFDbENBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLFVBQVUsR0FBRyxFQUFFLEdBQUc7SUFDcENBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUc7SUFDakNBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUc7SUFDakNBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLFFBQVEsR0FBRyxFQUFFLEdBQUc7SUFDbENBLFFBQVEsQ0FBQ0EsUUFBUSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUc7QUFDdkMsR0FBR0EsWUFBYUEsQ0FBQUEsV0FBVyxDQUFDO0FBQzVCLE1BQU1DLG9CQUFvQjtJQUN0QixTQUFTRCxTQUFTRSxLQUFLO0lBQ3ZCLFdBQVdGLFNBQVNHLE9BQU87SUFDM0IsUUFBUUgsU0FBU0ksSUFBSTtJQUNyQixRQUFRSixTQUFTSyxJQUFJO0lBQ3JCLFNBQVNMLFNBQVNNLEtBQUs7SUFDdkIsVUFBVU4sU0FBU08sTUFBTTtBQUM3QjtBQUNBOztDQUVDLEdBQ0QsTUFBTUMsa0JBQWtCUixTQUFTSSxJQUFJO0FBQ3JDOzs7OztDQUtDLEdBQ0QsTUFBTUssZ0JBQWdCO0lBQ2xCLENBQUNULFNBQVNFLEtBQUssQ0FBQyxFQUFFO0lBQ2xCLENBQUNGLFNBQVNHLE9BQU8sQ0FBQyxFQUFFO0lBQ3BCLENBQUNILFNBQVNJLElBQUksQ0FB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QixPQUFPO3dCQUMzQixPQUFPMEIsSUFBSUYsT0FBTztvQkFDdEIsT0FDSzt3QkFDRCxJQUFJOzRCQUNBLE9BQU9JLEtBQUtDLFNBQVMsQ0FBQ0g7d0JBQzFCLEVBQ0EsT0FBT0ksU0FBUzs0QkFDWixPQUFPO3dCQUNYO29CQUNKO2dCQUNKLEdBQ0tDLE1BQU0sQ0FBQ0wsQ0FBQUEsTUFBT0EsS0FDZE0sSUFBSSxDQUFDO2dCQUNWLElBQUlmLFNBQVVNLENBQUFBLG1CQUFtQixRQUFRQSxtQkFBbUIsS0FBSyxJQUFJQSxpQkFBaUJqQyxTQUFTRyxRQUFRLEdBQUc7b0JBQ3RHNEIsWUFBWTt3QkFDUkosT0FBT3RDLFFBQVEsQ0FBQ3NDLE1BQU0sQ0FBQ2dCLFdBQVc7d0JBQ2xDVDt3QkFDQWhDO3dCQUNBMEMsTUFBTTVDLFNBQVNTLElBQUk7b0JBQ3ZCO2dCQUNKO1lBQ0o7UUFDSjtJQUNKO0FBQ0o7QUFFNEQsQ0FDNUQseUNBQXlDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd3BfZmluYWwvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZpcmViYXNlK2xvZ2dlckAwLjQuMC9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2xvZ2dlci9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzPzdjZmYiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEEgY29udGFpbmVyIGZvciBhbGwgb2YgdGhlIExvZ2dlciBpbnN0YW5jZXNcclxuICovXHJcbmNvbnN0IGluc3RhbmNlcyA9IFtdO1xyXG4vKipcclxuICogVGhlIEpTIFNESyBzdXBwb3J0cyA1IGxvZyBsZXZlbHMgYW5kIGFsc28gYWxsb3dzIGEgdXNlciB0aGUgYWJpbGl0eSB0b1xyXG4gKiBzaWxlbmNlIHRoZSBsb2dzIGFsdG9nZXRoZXIuXHJcbiAqXHJcbiAqIFRoZSBvcmRlciBpcyBhIGZvbGxvd3M6XHJcbiAqIERFQlVHIDwgVkVSQk9TRSA8IElORk8gPCBXQVJOIDwgRVJST1JcclxuICpcclxuICogQWxsIG9mIHRoZSBsb2cgdHlwZXMgYWJvdmUgdGhlIGN1cnJlbnQgbG9nIGxldmVsIHdpbGwgYmUgY2FwdHVyZWQgKGkuZS4gaWZcclxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBJTkZPYCwgZXJyb3JzIHdpbGwgc3RpbGwgYmUgbG9nZ2VkLCBidXQgYERFQlVHYCBhbmRcclxuICogYFZFUkJPU0VgIGxvZ3Mgd2lsbCBub3QpXHJcbiAqL1xyXG52YXIgTG9nTGV2ZWw7XHJcbihmdW5jdGlvbiAoTG9nTGV2ZWwpIHtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiREVCVUdcIl0gPSAwXSA9IFwiREVCVUdcIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiVkVSQk9TRVwiXSA9IDFdID0gXCJWRVJCT1NFXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIklORk9cIl0gPSAyXSA9IFwiSU5GT1wiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJXQVJOXCJdID0gM10gPSBcIldBUk5cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiRVJST1JcIl0gPSA0XSA9IFwiRVJST1JcIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiU0lMRU5UXCJdID0gNV0gPSBcIlNJTEVOVFwiO1xyXG59KShMb2dMZXZlbCB8fCAoTG9nTGV2ZWwgPSB7fSkpO1xyXG5jb25zdCBsZXZlbFN0cmluZ1RvRW51bSA9IHtcclxuICAgICdkZWJ1Zyc6IExvZ0xldmVsLkRFQlVHLFxyXG4gICAgJ3ZlcmJvc2UnOiBMb2dMZXZlbC5WRVJCT1NFLFxyXG4gICAgJ2luZm8nOiBMb2dMZXZlbC5JTkZPLFxyXG4gICAgJ3dhcm4nOiBMb2dMZXZlbC5XQVJOLFxyXG4gICAgJ2Vycm9yJzogTG9nTGV2ZWwuRVJST1IsXHJcbiAgICAnc2lsZW50JzogTG9nTGV2ZWwuU0lMRU5UXHJcbn07XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgbGV2ZWxcclxuICovXHJcbmNvbnN0IGRlZmF1bHRMb2dMZXZlbCA9IExvZ0xldmVsLklORk87XHJcbi8qKlxyXG4gKiBCeSBkZWZhdWx0LCBgY29uc29sZS5kZWJ1Z2AgaXMgbm90IGRpc3BsYXllZCBpbiB0aGUgZGV2ZWxvcGVyIGNvbnNvbGUgKGluXHJcbiAqIGNocm9tZSkuIFRvIGF2b2lkIGZvcmNpbmcgdXNlcnMgdG8gaGF2ZSB0byBvcHQtaW4gdG8gdGhlc2UgbG9ncyB0d2ljZVxyXG4gKiAoaS5lLiBvbmNlIGZvciBmaXJlYmFzZSwgYW5kIG9uY2UgaW4gdGhlIGNvbnNvbGUpLCB3ZSBhcmUgc2VuZGluZyBgREVCVUdgXHJcbiAqIGxvZ3MgdG8gdGhlIGBjb25zb2xlLmxvZ2AgZnVuY3Rpb24uXHJcbiAqL1xyXG5jb25zdCBDb25zb2xlTWV0aG9kID0ge1xyXG4gICAgW0xvZ0xldmVsLkRFQlVHXTogJ2xvZycsXHJcbiAgICBbTG9nTGV2ZWwuVkVSQk9TRV06ICdsb2cnLFxyXG4gICAgW0xvZ0xldmVsLklORk9dOiAnaW5mbycsXHJcbiAgICBbTG9nTGV2ZWwuV0FSTl06ICd3YXJuJyxcclxuICAgIFtMb2dMZXZlbC5FUlJPUl06ICdlcnJvcidcclxufTtcclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGxvZyBoYW5kbGVyIHdpbGwgZm9yd2FyZCBERUJVRywgVkVSQk9TRSwgSU5GTywgV0FSTiwgYW5kIEVSUk9SXHJcbiAqIG1lc3NhZ2VzIG9uIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uc29sZSBjb3VudGVycGFydHMgKGlmIHRoZSBsb2cgbWV0aG9kXHJcbiAqIGlzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBsb2cgbGV2ZWwpXHJcbiAqL1xyXG5jb25zdCBkZWZhdWx0TG9nSGFuZGxlciA9IChpbnN0YW5jZSwgbG9nVHlwZSwgLi4uYXJncykgPT4ge1xyXG4gICAgaWYgKGxvZ1R5cGUgPCBpbnN0YW5jZS5sb2dMZXZlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcclxuICAgIGNvbnN0IG1ldGhvZCA9IENvbnNvbGVNZXRob2RbbG9nVHlwZV07XHJcbiAgICBpZiAobWV0aG9kKSB7XHJcbiAgICAgICAgY29uc29sZVttZXRob2RdKGBbJHtub3d9XSAgJHtpbnN0YW5jZS5uYW1lfTpgLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXR0ZW1wdGVkIHRvIGxvZyBhIG1lc3NhZ2Ugd2l0aCBhbiBpbnZhbGlkIGxvZ1R5cGUgKHZhbHVlOiAke2xvZ1R5cGV9KWApO1xyXG4gICAgfVxyXG59O1xyXG5jbGFzcyBMb2dnZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlcyB5b3UgYW4gaW5zdGFuY2Ugb2YgYSBMb2dnZXIgdG8gY2FwdHVyZSBtZXNzYWdlcyBhY2NvcmRpbmcgdG9cclxuICAgICAqIEZpcmViYXNlJ3MgbG9nZ2luZyBzY2hlbWUuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgdGhhdCB0aGUgbG9ncyB3aWxsIGJlIGFzc29jaWF0ZWQgd2l0aFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgbG9nIGxldmVsIG9mIHRoZSBnaXZlbiBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSBkZWZhdWx0TG9nTGV2ZWw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIG1haW4gKGludGVybmFsKSBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKiBDYW4gYmUgc2V0IHRvIGEgbmV3IGZ1bmN0aW9uIGluIGludGVybmFsIHBhY2thZ2UgY29kZSBidXQgbm90IGJ5IHVzZXIuXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlciA9IGRlZmF1bHRMb2dIYW5kbGVyO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBvcHRpb25hbCwgYWRkaXRpb25hbCwgdXNlci1kZWZpbmVkIGxvZyBoYW5kbGVyIGZvciB0aGUgTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDYXB0dXJlIHRoZSBjdXJyZW50IGluc3RhbmNlIGZvciBsYXRlciB1c2VcclxuICAgICAgICAgKi9cclxuICAgICAgICBpbnN0YW5jZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuICAgIGdldCBsb2dMZXZlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nTGV2ZWw7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9nTGV2ZWwodmFsKSB7XHJcbiAgICAgICAgaWYgKCEodmFsIGluIExvZ0xldmVsKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBJbnZhbGlkIHZhbHVlIFwiJHt2YWx9XCIgYXNzaWduZWQgdG8gXFxgbG9nTGV2ZWxcXGBgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvLyBXb3JrYXJvdW5kIGZvciBzZXR0ZXIvZ2V0dGVyIGhhdmluZyB0byBiZSB0aGUgc2FtZSB0eXBlLlxyXG4gICAgc2V0TG9nTGV2ZWwodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fbG9nTGV2ZWwgPSB0eXBlb2YgdmFsID09PSAnc3RyaW5nJyA/IGxldmVsU3RyaW5nVG9FbnVtW3ZhbF0gOiB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9nSGFuZGxlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbG9nSGFuZGxlcjtcclxuICAgIH1cclxuICAgIHNldCBsb2dIYW5kbGVyKHZhbCkge1xyXG4gICAgICAgIGlmICh0eXBlb2YgdmFsICE9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1ZhbHVlIGFzc2lnbmVkIHRvIGBsb2dIYW5kbGVyYCBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlciA9IHZhbDtcclxuICAgIH1cclxuICAgIGdldCB1c2VyTG9nSGFuZGxlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdXNlckxvZ0hhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgdXNlckxvZ0hhbmRsZXIodmFsKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgPSB2YWw7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFRoZSBmdW5jdGlvbnMgYmVsb3cgYXJlIGFsbCBiYXNlZCBvbiB0aGUgYGNvbnNvbGVgIGludGVyZmFjZVxyXG4gICAgICovXHJcbiAgICBkZWJ1ZyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuREVCVUcsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgbG9nKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJlxyXG4gICAgICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLlZFUkJPU0UsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgaW5mbyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuSU5GTywgLi4uYXJncyk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5JTkZPLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIHdhcm4oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLldBUk4sIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuV0FSTiwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICBlcnJvciguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiYgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuRVJST1IsIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7XHJcbiAgICBpbnN0YW5jZXMuZm9yRWFjaChpbnN0ID0+IHtcclxuICAgICAgICBpbnN0LnNldExvZ0xldmVsKGxldmVsKTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHNldFVzZXJMb2dIYW5kbGVyKGxvZ0NhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBmb3IgKGNvbnN0IGluc3RhbmNlIG9mIGluc3RhbmNlcykge1xyXG4gICAgICAgIGxldCBjdXN0b21Mb2dMZXZlbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZXZlbCkge1xyXG4gICAgICAgICAgICBjdXN0b21Mb2dMZXZlbCA9IGxldmVsU3RyaW5nVG9FbnVtW29wdGlvbnMubGV2ZWxdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobG9nQ2FsbGJhY2sgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UudXNlckxvZ0hhbmRsZXIgPSAoaW5zdGFuY2UsIGxldmVsLCAuLi5hcmdzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gYXJnc1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoYXJnID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXJnID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhcmcgPT09ICdudW1iZXInIHx8IHR5cGVvZiBhcmcgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGFyZyBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhcmcubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoaWdub3JlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoYXJnID0+IGFyZylcclxuICAgICAgICAgICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGxldmVsID49IChjdXN0b21Mb2dMZXZlbCAhPT0gbnVsbCAmJiBjdXN0b21Mb2dMZXZlbCAhPT0gdm9pZCAwID8gY3VzdG9tTG9nTGV2ZWwgOiBpbnN0YW5jZS5sb2dMZXZlbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2dDYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldmVsOiBMb2dMZXZlbFtsZXZlbF0udG9Mb3dlckNhc2UoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogaW5zdGFuY2UubmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5leHBvcnQgeyBMb2dMZXZlbCwgTG9nZ2VyLCBzZXRMb2dMZXZlbCwgc2V0VXNlckxvZ0hhbmRsZXIgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iXSwibmFtZXMiOlsiaW5zdGFuY2VzIiwiTG9nTGV2ZWwiLCJsZXZlbFN0cmluZ1RvRW51bSIsIkRFQlVHIiwiVkVSQk9TRSIsIklORk8iLCJXQVJOIiwiRVJST1IiLCJTSUxFTlQiLCJkZWZhdWx0TG9nTGV2ZWwiLCJDb25zb2xlTWV0aG9kIiwiZGVmYXVsdExvZ0hhbmRsZXIiLCJpbnN0YW5jZSIsImxvZ1R5cGUiLCJhcmdzIiwibG9nTGV2ZWwiLCJub3ciLCJEYXRlIiwidG9JU09TdHJpbmciLCJtZXRob2QiLCJjb25zb2xlIiwibmFtZSIsIkVycm9yIiwiTG9nZ2VyIiwiY29uc3RydWN0b3IiLCJfbG9nTGV2ZWwiLCJfbG9nSGFuZGxlciIsIl91c2VyTG9nSGFuZGxlciIsInB1c2giLCJ2YWwiLCJUeXBlRXJyb3IiLCJzZXRMb2dMZXZlbCIsImxvZ0hhbmRsZXIiLCJ1c2VyTG9nSGFuZGxlciIsImRlYnVnIiwibG9nIiwiaW5mbyIsIndhcm4iLCJlcnJvciIsImxldmVsIiwiZm9yRWFjaCIsImluc3QiLCJzZXRVc2VyTG9nSGFuZGxlciIsImxvZ0NhbGxiYWNrIiwib3B0aW9ucyIsImN1c3RvbUxvZ0xldmVsIiwibWVzc2FnZSIsIm1hcCIsImFyZyIsInRvU3RyaW5nIiwiSlNPTiIsInN0cmluZ2lmeSIsImlnbm9yZWQiLCJmaWx0ZXIiLCJqb2luIiwidG9Mb3dlckNhc2UiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@firebase+logger@0.4.0/node_modules/@firebase/logger/dist/esm/index.esm2017.js\n");

/***/ })

};
;