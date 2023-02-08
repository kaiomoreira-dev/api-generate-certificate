/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/verifyCertificate.ts":
/*!********************************************!*\
  !*** ./src/functions/verifyCertificate.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _util_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dynamodbClient */ \"./src/util/dynamodbClient.ts\");\n\nconst handle = async (event) => {\n    const { id } = event.pathParameters;\n    const response = await _util_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.query({\n        TableName: \"users_certificates\",\n        KeyConditionExpression: \"id = :id\",\n        ExpressionAttributeValues: {\n            \":id\": id\n        }\n    }).promise();\n    const userCertificate = response.Items[0];\n    if (userCertificate) {\n        return {\n            statusCode: 200,\n            body: JSON.stringify({\n                message: \"Certificate valid\",\n            }),\n        };\n    }\n    return {\n        statusCode: 400,\n        body: JSON.stringify({\n            message: \"Certificate invalid\"\n        }),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL3ZlcmlmeUNlcnRpZmljYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2lnbml0ZWNlcnRpZmljYXRlLy4vc3JjL2Z1bmN0aW9ucy92ZXJpZnlDZXJ0aWZpY2F0ZS50cz82YzFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlQcm94eUhhbmRsZXIgfSBmcm9tIFwiYXdzLWxhbWJkYVwiO1xuaW1wb3J0IHsgZG9jdW1lbnQgfSBmcm9tIFwiLi4vdXRpbC9keW5hbW9kYkNsaWVudFwiO1xuXG5leHBvcnQgY29uc3QgaGFuZGxlOkFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcblxuICAgIGNvbnN0IHsgaWQgfSA9IGV2ZW50LnBhdGhQYXJhbWV0ZXJzO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBkb2N1bWVudC5xdWVyeSh7XG4gICAgICAgIFRhYmxlTmFtZTogXCJ1c2Vyc19jZXJ0aWZpY2F0ZXNcIixcbiAgICAgICAgS2V5Q29uZGl0aW9uRXhwcmVzc2lvbjogXCJpZCA9IDppZFwiLFxuICAgICAgICBFeHByZXNzaW9uQXR0cmlidXRlVmFsdWVzOiB7XG4gICAgICAgICAgICBcIjppZFwiOiBpZFxuICAgICAgICB9XG4gICAgfSkucHJvbWlzZSgpO1xuXG4gICAgY29uc3QgdXNlckNlcnRpZmljYXRlID0gcmVzcG9uc2UuSXRlbXNbMF07XG5cbiAgICBpZih1c2VyQ2VydGlmaWNhdGUpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IDIwMCxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkNlcnRpZmljYXRlIHZhbGlkXCIgLFxuXG4gICAgICAgICAgICAgICAgLy9yZXRvcm5hciB1cmwgZGVudHJvIGRhIEFXUyBwYXJhIGJhaXhhciBvIHBkZiBnZXJhZG9cbiAgICAgICAgICAgICAgICAvL25hbWU6IHVzZXJDZXJ0aWZpY2F0ZS5uYW1lLFxuICAgICAgICAgICAgICAgIC8vdXJsOmBodHRwczovL3NlcnZlcmxlc3NjZXJ0aWZpY2F0ZXBkZi5zMy5zYS1lYXN0LTEuYW1hem9uYXdzLmNvbS8ke2lkfS5wZGZgXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdGF0dXNDb2RlOiA0MDAsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiQ2VydGlmaWNhdGUgaW52YWxpZFwiXG4gICAgICAgIH0pLFxuICAgIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/functions/verifyCertificate.ts\n");

/***/ }),

/***/ "./src/util/dynamodbClient.ts":
/*!************************************!*\
  !*** ./src/util/dynamodbClient.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"document\": () => (/* binding */ document)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n\nconst options = {\n    region: \"localhost\",\n    endpoint: \"http://localhost:8000\",\n};\nconst isOffline = () => {\n    return process.env.IS_OFFLINE;\n};\nconst document = isOffline()\n    ? new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient(options)\n    : new aws_sdk__WEBPACK_IMPORTED_MODULE_0__.DynamoDB.DocumentClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbC9keW5hbW9kYkNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduaXRlY2VydGlmaWNhdGUvLi9zcmMvdXRpbC9keW5hbW9kYkNsaWVudC50cz9lYzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCIH0gZnJvbSBcImF3cy1zZGtcIjtcblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICByZWdpb246IFwibG9jYWxob3N0XCIsXG4gICAgZW5kcG9pbnQ6IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwXCIsXG4gIH07XG5cbmNvbnN0IGlzT2ZmbGluZSA9ICgpID0+IHtcbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuSVNfT0ZGTElORTtcbn07XG5cbmV4cG9ydCBjb25zdCBkb2N1bWVudCA9IGlzT2ZmbGluZSgpIFxuPyBuZXcgRHluYW1vREIuRG9jdW1lbnRDbGllbnQob3B0aW9ucykgXG46IG5ldyBEeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/dynamodbClient.ts\n");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/verifyCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;