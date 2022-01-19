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

/***/ "./handler.ts":
/*!********************!*\
  !*** ./handler.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"findKeywordInPDF\": () => (/* binding */ findKeywordInPDF)\n/* harmony export */ });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_utils_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/utils/pdf */ \"./src/utils/pdf.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst findKeywordInPDF = async (event, _context) => {\n    var _a, _b;\n    const searchResult = [];\n    const pdfFile = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(\"https://researchtorevenue.files.wordpress.com/2015/04/1r41ai10801601_fong.pdf\", { responseType: \"arraybuffer\" });\n    const pdfText = await _src_utils_pdf__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPDFText(pdfFile.data);\n    const keywords = (_b = (_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.keywords) === null || _b === void 0 ? void 0 : _b.split(\"|\");\n    for (let keyword of keywords) {\n        searchResult.push({\n            keyword,\n            searchResult: await _src_utils_pdf__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchPage(pdfText, keyword),\n        });\n    }\n    return {\n        statusCode: 200,\n        body: JSON.stringify({\n            result: searchResult,\n        }, null, 2),\n    };\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oYW5kbGVyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUlBO0FBRUE7QUFJQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZGZ0ZXh0c2VhcmNoLy4vaGFuZGxlci50cz8zNmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQSUdhdGV3YXlFdmVudCwgQVBJR2F0ZXdheVByb3h5SGFuZGxlciB9IGZyb20gXCJhd3MtbGFtYmRhXCI7XG5pbXBvcnQgXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIjtcbmltcG9ydCBQZGYgZnJvbSBcIi4vc3JjL3V0aWxzL3BkZlwiO1xuaW1wb3J0IHsgcGRmVGV4dCwgcmVzdWx0IH0gZnJvbSBcIi4vc3JjL2ludGVyZmFjZS9wZGZUZXh0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBmaW5kS2V5d29yZEluUERGOiBBUElHYXRld2F5UHJveHlIYW5kbGVyID0gYXN5bmMgKFxuICBldmVudDogQVBJR2F0ZXdheUV2ZW50LFxuICBfY29udGV4dFxuKSA9PiB7XG4gIGNvbnN0IHNlYXJjaFJlc3VsdDogQXJyYXk8cmVzdWx0PiA9IFtdO1xuXG4gIGNvbnN0IHBkZkZpbGUgPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgXCJodHRwczovL3Jlc2VhcmNodG9yZXZlbnVlLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNS8wNC8xcjQxYWkxMDgwMTYwMV9mb25nLnBkZlwiLFxuICAgIHsgcmVzcG9uc2VUeXBlOiBcImFycmF5YnVmZmVyXCIgfVxuICApO1xuICBjb25zdCBwZGZUZXh0OiBwZGZUZXh0W10gPSBhd2FpdCBQZGYuZ2V0UERGVGV4dChwZGZGaWxlLmRhdGEpO1xuICBjb25zdCBrZXl3b3JkczogQXJyYXk8c3RyaW5nPiA9XG4gICAgZXZlbnQucXVlcnlTdHJpbmdQYXJhbWV0ZXJzPy5rZXl3b3Jkcz8uc3BsaXQoXCJ8XCIpO1xuXG4gIGZvciAobGV0IGtleXdvcmQgb2Yga2V5d29yZHMpIHtcbiAgICBzZWFyY2hSZXN1bHQucHVzaCh7XG4gICAgICBrZXl3b3JkLFxuICAgICAgc2VhcmNoUmVzdWx0OiBhd2FpdCBQZGYuc2VhcmNoUGFnZShwZGZUZXh0LCBrZXl3b3JkKSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhdHVzQ29kZTogMjAwLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KFxuICAgICAge1xuICAgICAgICByZXN1bHQ6IHNlYXJjaFJlc3VsdCxcbiAgICAgIH0sXG4gICAgICBudWxsLFxuICAgICAgMlxuICAgICksXG4gIH07XG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./handler.ts\n");

/***/ }),

/***/ "./src/utils/pdf.ts":
/*!**************************!*\
  !*** ./src/utils/pdf.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Pdf)\n/* harmony export */ });\n/* harmony import */ var pdfjs_dist_legacy_build_pdf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfjs-dist/legacy/build/pdf.js */ \"pdfjs-dist/legacy/build/pdf.js\");\n/* harmony import */ var pdfjs_dist_legacy_build_pdf_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfjs_dist_legacy_build_pdf_js__WEBPACK_IMPORTED_MODULE_0__);\n\nclass Pdf {\n    static async getPageText(pdf, pageNo) {\n        const page = await pdf.getPage(pageNo);\n        const tokenizedText = await page.getTextContent();\n        const pageText = tokenizedText.items\n            .map((token) => token.str)\n            .join(\"\");\n        return pageText;\n    }\n    static async getPDFText(source) {\n        const pdf = await (0,pdfjs_dist_legacy_build_pdf_js__WEBPACK_IMPORTED_MODULE_0__.getDocument)(source).promise;\n        const maxPages = pdf.numPages;\n        const pageTextPromises = [];\n        for (let pageNo = 1; pageNo <= maxPages; pageNo += 1) {\n            pageTextPromises.push({\n                pageNumber: pageNo,\n                text: await Pdf.getPageText(pdf, pageNo),\n            });\n        }\n        const pageTexts = await Promise.all(pageTextPromises);\n        return pageTexts;\n    }\n    static async searchPage(pdfText, searchText) {\n        const result = [];\n        pdfText.forEach((p) => {\n            let re = new RegExp(\"(.{0,20})\" + searchText + \"(.{0,20})\", \"gi\"), m;\n            const lines = [];\n            while ((m = re.exec(p.text))) {\n                let line = (m[1] ? \"...\" : \"\") + m[0] + (m[2] ? \"...\" : \"\");\n                lines.push(line);\n            }\n            result.push({ pageData: p, matches: lines });\n        });\n        return result;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvcGRmLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGRmdGV4dHNlYXJjaC8uL3NyYy91dGlscy9wZGYudHM/OWI1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXREb2N1bWVudCB9IGZyb20gXCJwZGZqcy1kaXN0L2xlZ2FjeS9idWlsZC9wZGYuanNcIjtcbmltcG9ydCB7IHBkZlRleHQsIHNlYXJjaFJlc3VsdCB9IGZyb20gXCIuLi9pbnRlcmZhY2UvcGRmVGV4dFwiO1xudHlwZSBQREZTb3VyY2UgPSBCdWZmZXIgfCBzdHJpbmc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBkZiB7XG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgZ2V0UGFnZVRleHQocGRmLCBwYWdlTm86IG51bWJlcikge1xuICAgIGNvbnN0IHBhZ2UgPSBhd2FpdCBwZGYuZ2V0UGFnZShwYWdlTm8pO1xuICAgIGNvbnN0IHRva2VuaXplZFRleHQgPSBhd2FpdCBwYWdlLmdldFRleHRDb250ZW50KCk7XG4gICAgY29uc3QgcGFnZVRleHQgPSB0b2tlbml6ZWRUZXh0Lml0ZW1zXG4gICAgICAubWFwKCh0b2tlbjogYW55KSA9PiB0b2tlbi5zdHIpXG4gICAgICAuam9pbihcIlwiKTtcbiAgICByZXR1cm4gcGFnZVRleHQ7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGFzeW5jIGdldFBERlRleHQoc291cmNlOiBQREZTb3VyY2UpOiBQcm9taXNlPHBkZlRleHRbXT4ge1xuICAgIGNvbnN0IHBkZiA9IGF3YWl0IGdldERvY3VtZW50KHNvdXJjZSkucHJvbWlzZTtcbiAgICBcbiAgICBjb25zdCBtYXhQYWdlczpudW1iZXIgPSBwZGYubnVtUGFnZXM7XG4gICAgY29uc3QgcGFnZVRleHRQcm9taXNlczogQXJyYXk8cGRmVGV4dD4gPSBbXTtcbiAgICBmb3IgKGxldCBwYWdlTm8gPSAxOyBwYWdlTm8gPD0gbWF4UGFnZXM7IHBhZ2VObyArPSAxKSB7XG4gICAgICBwYWdlVGV4dFByb21pc2VzLnB1c2goe1xuICAgICAgICBwYWdlTnVtYmVyOiBwYWdlTm8sXG4gICAgICAgIHRleHQ6IGF3YWl0IFBkZi5nZXRQYWdlVGV4dChwZGYsIHBhZ2VObyksXG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcGFnZVRleHRzID0gYXdhaXQgUHJvbWlzZS5hbGwocGFnZVRleHRQcm9taXNlcyk7XG4gICAgcmV0dXJuIHBhZ2VUZXh0cztcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgc2VhcmNoUGFnZShwZGZUZXh0OiBwZGZUZXh0W10sIHNlYXJjaFRleHQ6IHN0cmluZyk6IFByb21pc2U8c2VhcmNoUmVzdWx0W10+IHtcbiAgICBjb25zdCByZXN1bHQ6IEFycmF5PHNlYXJjaFJlc3VsdD4gPSBbXTtcblxuICAgIHBkZlRleHQuZm9yRWFjaCgocDogcGRmVGV4dCkgPT4ge1xuICAgICAgbGV0IHJlID0gbmV3IFJlZ0V4cChcIiguezAsMjB9KVwiICsgc2VhcmNoVGV4dCArIFwiKC57MCwyMH0pXCIsIFwiZ2lcIiksbTtcbiAgICAgIGNvbnN0IGxpbmVzOiBBcnJheTxzdHJpbmcgfCBudWxsPiA9IFtdO1xuICAgICAgd2hpbGUgKChtID0gcmUuZXhlYyhwLnRleHQpKSkge1xuICAgICAgICBsZXQgbGluZSA9IChtWzFdID8gXCIuLi5cIiA6IFwiXCIpICsgbVswXSArIChtWzJdID8gXCIuLi5cIiA6IFwiXCIpO1xuICAgICAgICBsaW5lcy5wdXNoKGxpbmUpO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goeyBwYWdlRGF0YTogcCwgbWF0Y2hlczogbGluZXMgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/pdf.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "pdfjs-dist/legacy/build/pdf.js":
/*!*************************************************!*\
  !*** external "pdfjs-dist/legacy/build/pdf.js" ***!
  \*************************************************/
/***/ ((module) => {

module.exports = require("pdfjs-dist/legacy/build/pdf.js");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("source-map-support/register");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./handler.ts");
/******/ 	var __webpack_export_target__ = exports;
/******/ 	for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
/******/ 	if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ 	
/******/ })()
;