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

/***/ "./src/functions/generateCertificate.ts":
/*!**********************************************!*\
  !*** ./src/functions/generateCertificate.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handle\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _util_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dynamodbClient */ \"./src/util/dynamodbClient.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! handlebars */ \"handlebars\");\n/* harmony import */ var handlebars__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(handlebars__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ \"dayjs\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! chrome-aws-lambda */ \"chrome-aws-lambda\");\n/* harmony import */ var chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nconst compile = async (data) => {\n    const certificatePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"src\", \"template\", \"certificate.hbs\");\n    const html = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(certificatePath, \"utf8\");\n    return handlebars__WEBPACK_IMPORTED_MODULE_3___default().compile(html)(data);\n};\nconst handle = async (event) => {\n    const { id, name, grade } = JSON.parse(event.body);\n    const response = await _util_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.query({\n        TableName: \"users_certificates\",\n        KeyConditionExpression: \"id = :id\",\n        ExpressionAttributeValues: {\n            \":id\": id\n        }\n    }).promise();\n    const userAlreadyExist = response.Items[0];\n    if (!userAlreadyExist) {\n        await _util_dynamodbClient__WEBPACK_IMPORTED_MODULE_0__.document.put({\n            TableName: \"users_certificates\",\n            Item: {\n                id,\n                name,\n                grade\n            }\n        }).promise();\n    }\n    const medalPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), \"src\", \"template\", \"selo.png\");\n    const medal = fs__WEBPACK_IMPORTED_MODULE_2___default().readFileSync(medalPath, \"base64\");\n    const data = {\n        id,\n        name,\n        grade,\n        data: dayjs__WEBPACK_IMPORTED_MODULE_4___default()().format(\"DD/MM/YYYY\"),\n        medal\n    };\n    const content = await compile(data);\n    const browser = await chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_5___default().puppeteer.launch({\n        headless: true,\n        args: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_5___default().args),\n        defaultViewport: (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_5___default().defaultViewport),\n        executablePath: await (chrome_aws_lambda__WEBPACK_IMPORTED_MODULE_5___default().executablePath),\n    });\n    const page = await browser.newPage();\n    await page.setContent(content);\n    await page.pdf({\n        format: \"a4\",\n        landscape: true,\n        path: process.env.IS_OFFLINE ? \"certificate.pdf\" : null,\n        printBackground: true,\n        preferCSSPageSize: true,\n    });\n    await browser.close();\n    return {\n        statusCode: 201,\n        body: JSON.stringify({\n            message: \"Certificate created\",\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBb0JBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaWduaXRlY2VydGlmaWNhdGUvLi9zcmMvZnVuY3Rpb25zL2dlbmVyYXRlQ2VydGlmaWNhdGUudHM/YTVhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb2N1bWVudCB9IGZyb20gXCIuLi91dGlsL2R5bmFtb2RiQ2xpZW50XCI7XG5cbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgZnMgZnJvbSBcImZzXCI7XG5cbmltcG9ydCBoYW5kbGViYXJzIGZyb20gXCJoYW5kbGViYXJzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5cbmltcG9ydCBjaHJvbWl1bSBmcm9tIFwiY2hyb21lLWF3cy1sYW1iZGFcIjtcblxuaW1wb3J0IHsgUzMgfSBmcm9tIFwiYXdzLXNka1wiO1xuaW1wb3J0IHsgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5cbmludGVyZmFjZSBJQ3JlYXRlQ2VydGlmaWNhdGV7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZ3JhZGU6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIElUZW1wbGF0ZSB7XG4gICAgaWQ6IHN0cmluZztcbiAgICBuYW1lOiBzdHJpbmc7XG4gICAgZ3JhZGU6IHN0cmluZztcbiAgICBkYXRhOiBzdHJpbmc7XG4gICAgbWVkYWw6IHN0cmluZztcbn1cblxuLy8gY29tcGlsYXIgYXJxdWl2byB0ZW1wbGF0ZVxuY29uc3QgY29tcGlsZSA9IGFzeW5jIChkYXRhOiBJVGVtcGxhdGUpID0+IHtcbiAgICBjb25zdCBjZXJ0aWZpY2F0ZVBhdGggPSBcbiAgICBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgXG4gICAgXCJzcmNcIiwgXG4gICAgXCJ0ZW1wbGF0ZVwiLCBcbiAgICBcImNlcnRpZmljYXRlLmhic1wiKTtcblxuICAgIGNvbnN0IGh0bWwgPSBmcy5yZWFkRmlsZVN5bmMoY2VydGlmaWNhdGVQYXRoLCBcInV0ZjhcIik7XG5cbiAgICByZXR1cm4gaGFuZGxlYmFycy5jb21waWxlKGh0bWwpKGRhdGEpOyBcbn1cblxuLy8gbWV0b2RvIGhhbmRsZSBwYXJhIHJlY2ViZXIgaW5mbyBkbyBib2R5XG5leHBvcnQgY29uc3QgaGFuZGxlOkFQSUdhdGV3YXlQcm94eUhhbmRsZXIgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IGlkLCBuYW1lLCBncmFkZSB9ID0gSlNPTi5wYXJzZShldmVudC5ib2R5KSBhcyBJQ3JlYXRlQ2VydGlmaWNhdGU7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGRvY3VtZW50LnF1ZXJ5KHtcbiAgICAgICAgVGFibGVOYW1lOiBcInVzZXJzX2NlcnRpZmljYXRlc1wiLFxuICAgICAgICBLZXlDb25kaXRpb25FeHByZXNzaW9uOiBcImlkID0gOmlkXCIsXG4gICAgICAgIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcbiAgICAgICAgICAgIFwiOmlkXCI6IGlkXG4gICAgICAgIH1cbiAgICB9KS5wcm9taXNlKCk7XG5cbiAgICBjb25zdCB1c2VyQWxyZWFkeUV4aXN0ID0gcmVzcG9uc2UuSXRlbXNbMF07XG5cbiAgICAvLyB2YWxpZGEgc2UgdXN1w6FyaW8gZXhpc3RlXG4gICAgaWYoIXVzZXJBbHJlYWR5RXhpc3QpIHtcbiAgICAgICAgYXdhaXQgZG9jdW1lbnQucHV0KHtcbiAgICAgICAgICAgIFRhYmxlTmFtZTogXCJ1c2Vyc19jZXJ0aWZpY2F0ZXNcIixcbiAgICAgICAgICAgIEl0ZW06IHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGdyYWRlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLnByb21pc2UoKTtcbiAgICB9XG4gICAgXG4gICAgLy8gYWRpY2lvbmFyIGNhbWluaG8gZGEgaW1hZ2VtIGRhIG1lZGFsaGEgcGFyYSBpbnNlcmlyIG5vIHBkZlxuICAgIGNvbnN0IG1lZGFsUGF0aCA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCBcInNyY1wiLCBcInRlbXBsYXRlXCIsIFwic2Vsby5wbmdcIik7XG5cbiAgICAvL2NvbnZlcnRlbmRvIHBhcmEgZm9ybWF0byBiYXNlNjRcbiAgICBjb25zdCBtZWRhbCA9IGZzLnJlYWRGaWxlU3luYyhtZWRhbFBhdGgsIFwiYmFzZTY0XCIpO1xuXG4gICAgLy8gdGlwYW5kbyBpbmZvcm1hw6fDtWVzXG4gICAgY29uc3QgZGF0YTpJVGVtcGxhdGUgPSB7XG4gICAgICAgICBpZCxcbiAgICAgICAgIG5hbWUsXG4gICAgICAgICBncmFkZSxcbiAgICAgICAgIGRhdGE6IGRheWpzKCkuZm9ybWF0KFwiREQvTU0vWVlZWVwiKSxcbiAgICAgICAgIG1lZGFsIFxuICAgIH1cblxuICAgIC8vIGNvbXBpbGFuZG8gdGVtcGxhdGUgY29tIGluZm9ybWHDp8O1ZXMgZG8gdXN1w6FyaW8gZW5jb250cmFkYVxuICAgIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBjb21waWxlKGRhdGEpO1xuXG4gICAgLy8gY29udmVydGVyIHBhcmEgcGRmXG4gICAgY29uc3QgYnJvd3NlciA9IGF3YWl0IGNocm9taXVtLnB1cHBldGVlci5sYXVuY2goe1xuICAgICAgICBoZWFkbGVzczogdHJ1ZSxcbiAgICAgICAgYXJnczogY2hyb21pdW0uYXJncyxcbiAgICAgICAgZGVmYXVsdFZpZXdwb3J0OiBjaHJvbWl1bS5kZWZhdWx0Vmlld3BvcnQsXG4gICAgICAgIGV4ZWN1dGFibGVQYXRoOiBhd2FpdCBjaHJvbWl1bS5leGVjdXRhYmxlUGF0aCxcbiAgICAgIH0pO1xuXG4gICAgY29uc3QgcGFnZSA9IGF3YWl0IGJyb3dzZXIubmV3UGFnZSgpO1xuXG4gICAgYXdhaXQgcGFnZS5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICBhd2FpdCBwYWdlLnBkZih7XG4gICAgZm9ybWF0OiBcImE0XCIsXG4gICAgbGFuZHNjYXBlOiB0cnVlLFxuICAgIHBhdGg6IHByb2Nlc3MuZW52LklTX09GRkxJTkUgPyBcImNlcnRpZmljYXRlLnBkZlwiIDogbnVsbCxcbiAgICBwcmludEJhY2tncm91bmQ6IHRydWUsXG4gICAgcHJlZmVyQ1NTUGFnZVNpemU6IHRydWUsXG59KTtcblxuICAgIGF3YWl0IGJyb3dzZXIuY2xvc2UoKTtcbiAgICBcblxuICAgIC8vc2FsdmFyIG5vIHMzXG5cbiAgICAvLyBjb25zdCBzMyA9IG5ldyBTMygpO1xuXG4gICAgLy8gYXdhaXQgczMucHV0T2JqZWN0KHtcbiAgICAvLyAgICAgQnVja2V0OiBcInNlcnZlcmxlc3NjZXJ0aWZpY2F0ZXBkZlwiLFxuICAgIC8vICAgICBLZXk6IGAke2lkfS5wZGZgLFxuICAgIC8vICAgICBBQ0w6IFwicHVibGljLXJlYWRcIixcbiAgICAvLyAgICAgQm9keTogcGRmLFxuICAgIC8vICAgICBDb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi9wZGZcIiAgICAgICAgXG4gICAgLy8gfSkucHJvbWlzZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdHVzQ29kZTogMjAxLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbWVzc2FnZTogXCJDZXJ0aWZpY2F0ZSBjcmVhdGVkXCIsXG5cbiAgICAgICAgICAgLy9DcmlhIHBkZiBlIHJldG9ybmFyIHVybCBkZW50cm8gZGEgQVdTIHBhcmEgYmFpeGFyIG8gcGRmIGdlcmFkb1xuICAgICAgICAgICAvL3VybDpgaHR0cHM6Ly9zZXJ2ZXJsZXNzY2VydGlmaWNhdGVwZGYuczMuc2EtZWFzdC0xLmFtYXpvbmF3cy5jb20vJHtpZH0ucGRmYFxuICAgICAgICB9KSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/functions/generateCertificate.ts\n");

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

/***/ }),

/***/ "chrome-aws-lambda":
/*!************************************!*\
  !*** external "chrome-aws-lambda" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("chrome-aws-lambda");

/***/ }),

/***/ "dayjs":
/*!************************!*\
  !*** external "dayjs" ***!
  \************************/
/***/ ((module) => {

module.exports = require("dayjs");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/functions/generateCertificate.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;