"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["gameLogic"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* override browser default */\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  min-height: 100%;\n}\n\nheader {\n  background-color: antiquewhite;\n  box-shadow: 0px 5px 10px grey;\n  height: 100px;\n}\n\nh1 {\n  text-align: center;\n  font-size: xxx-large;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 2fr 1fr;\n}\n\nfooter {\n  grid-row-start: 3;\n  grid-row-end: 4;\n  text-align: center;\n  background-color: antiquewhite;\n}\n\n#startButton {\n    grid-column-start: 1;\n    grid-column-end: span 2;\n    justify-self: center;\n    align-self: center;\n    width: 200px;\n    height: 150px;\n    border-radius: 50px;\n    font-size: 50px;\n}\n\n#gameDescription {\n  grid-column-start: 1;\n  grid-column-end: span 2;\n  justify-self: center;\n  align-self: center;\n  width: 500px;\n}\n\n.boardStyle {\n    border: solid black 1px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    height: 500px;\n    width: 500px;\n    align-self: center;\n    justify-self: center;\n}\n\n.squareStyle {\n  position: relative;\n  border: solid black 1px;\n  margin: none;\n  padding: none;\n  text-align: center;\n}\n\n.firedSquareStyle:after {\n  position: absolute;\n  top: 10;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\\2716\";\n  font-size: 30px; \n  color: black;\n  line-height: 25px;\n  text-align: center;\n}\n\n.hitShipStyle {\n  background-color: pink;\n}\n\n.unhitShipStyle {\n  background-color: gray;\n}\n\n.shipSunkStyle {\n  background-color: red;\n}\n\n#messageBoard {\n  border: 2px solid black;\n  overflow-x: hidden;\n  overflow-y: auto;\n  grid-column: 1 / span 2;\n  align-self: center;\n  max-height: 150px;\n  justify-self: center;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,6BAA6B;AAC7B;;EAEE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,2BAA2B;EAC3B,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,6BAA6B;EAC7B,aAAa;AACf;;AAEA;EACE,kBAAkB;EAClB,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,8BAA8B;AAChC;;AAEA;IACI,oBAAoB;IACpB,uBAAuB;IACvB,oBAAoB;IACpB,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;AACnB;;AAEA;EACE,oBAAoB;EACpB,uBAAuB;EACvB,oBAAoB;EACpB,kBAAkB;EAClB,YAAY;AACd;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,sCAAsC;IACtC,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;EACE,kBAAkB;EAClB,uBAAuB;EACvB,YAAY;EACZ,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,OAAO;EACP,SAAS;EACT,OAAO;EACP,QAAQ;EACR,gBAAgB;EAChB,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,gBAAgB;EAChB,uBAAuB;EACvB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;AACtB","sourcesContent":["/* override browser default */\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  height: 100%;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 1fr 4fr;\n  min-height: 100%;\n}\n\nheader {\n  background-color: antiquewhite;\n  box-shadow: 0px 5px 10px grey;\n  height: 100px;\n}\n\nh1 {\n  text-align: center;\n  font-size: xxx-large;\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 2fr 1fr;\n}\n\nfooter {\n  grid-row-start: 3;\n  grid-row-end: 4;\n  text-align: center;\n  background-color: antiquewhite;\n}\n\n#startButton {\n    grid-column-start: 1;\n    grid-column-end: span 2;\n    justify-self: center;\n    align-self: center;\n    width: 200px;\n    height: 150px;\n    border-radius: 50px;\n    font-size: 50px;\n}\n\n#gameDescription {\n  grid-column-start: 1;\n  grid-column-end: span 2;\n  justify-self: center;\n  align-self: center;\n  width: 500px;\n}\n\n.boardStyle {\n    border: solid black 1px;\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    height: 500px;\n    width: 500px;\n    align-self: center;\n    justify-self: center;\n}\n\n.squareStyle {\n  position: relative;\n  border: solid black 1px;\n  margin: none;\n  padding: none;\n  text-align: center;\n}\n\n.firedSquareStyle:after {\n  position: absolute;\n  top: 10;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  content: \"\\2716\";\n  font-size: 30px; \n  color: black;\n  line-height: 25px;\n  text-align: center;\n}\n\n.hitShipStyle {\n  background-color: pink;\n}\n\n.unhitShipStyle {\n  background-color: gray;\n}\n\n.shipSunkStyle {\n  background-color: red;\n}\n\n#messageBoard {\n  border: 2px solid black;\n  overflow-x: hidden;\n  overflow-y: auto;\n  grid-column: 1 / span 2;\n  align-self: center;\n  max-height: 150px;\n  justify-self: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/game-logic.js":
/*!***************************!*\
  !*** ./src/game-logic.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainGameLoop": () => (/* binding */ mainGameLoop),
/* harmony export */   "startGame": () => (/* binding */ startGame)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
// eslint-disable-next-line import/no-cycle


// helper function to enable a delay between turns
// function sleep (milliseconds) {
//    const date = Date.now();
//    let currentDate = null;
//    do {
//      currentDate = Date.now();
//    } while (currentDate - date < milliseconds);
//  }

// Will run on click from a Start Button
function startGame (player1, player2) {
    // 1. Initialize Ship List
    const ships = [
        {
            name: "carrier",
            length: 5,
        },
        {
            name: "battleship",
            length: 4,
        },
        {
            name: "destroyer",
            length: 3,
        },
        {
            name: "submarine",
            length: 3,
        },
        {
            name: "patrol boat",
            length: 2,
        }
    ];

    // 2. Place ships on the boards randomly
    player1.randomlyPlaceAllShips(ships);
    player2.randomlyPlaceAllShips(ships);

    // 3. Initialize Message
    const message = `\n Let's Play!`;
    (0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])(message);
}

// human turn
function humanTurn (player, opponent, firePosition) {
    let isGameOver = false;
    let message;
    player.humanLaunchAttack(opponent, firePosition);
    const shipName = opponent.gameboard.board.find(element => element.coordinate === firePosition).containsShip;
    let shipIsSunk = false;
    if (shipName !== null) {
        shipIsSunk = opponent.gameboard.ships.find(element => element.name === shipName).isSunk();
    };
    if (shipIsSunk) {
        message = `\n ${player.name} sank ${opponent.name}'s ${shipName}!!`;
    };
    if (opponent.gameboard.haveSunkAllShips()) {
        message = `\n ${player.name} sank all of ${opponent.name}'s ships. ${player.name} wins!!!`;
        isGameOver = true;
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])(message);
    return isGameOver;
}

// computer turn
function computerTurn (player, opponent) {
    let isGameOver = false;
    let message;
    const positionFired = player.computerLaunchAttack(opponent);
    const shipName = opponent.gameboard.board.find(element => element.coordinate === positionFired).containsShip;
    let shipIsSunk = false;
    if (shipName !== null) {
        shipIsSunk = opponent.gameboard.ships.find(element => element.name === shipName).isSunk();
    };
    if (shipIsSunk) {
        message = `\n ${player.name} sank ${opponent.name}'s ${shipName}!!`;
    };
    if (opponent.gameboard.haveSunkAllShips()) {
        message = `\n ${player.name} sank all of ${opponent.name}'s ships. ${player.name} wins!!!`;
        isGameOver = true;
    };
    (0,_index__WEBPACK_IMPORTED_MODULE_0__["default"])(message);
    return isGameOver;
}

// END GAME by disabling clicks
function endGame() {
    document.querySelector('body').style['pointer-events'] = "none";
}

// Will run on a mouse click
function mainGameLoop (human, computer, positionClicked) {
    let isGameOver = humanTurn(human, computer, positionClicked);
    if (isGameOver) {
        endGame();
    };
    // sleep(1000);
    isGameOver = computerTurn(computer, human);
    if (isGameOver) {
        endGame();
    };
    // sleep(1000);
}




/***/ }),

/***/ "./src/gameboard-factory.js":
/*!**********************************!*\
  !*** ./src/gameboard-factory.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createGameboard": () => (/* binding */ createGameboard),
/* harmony export */   "testForOverlap": () => (/* binding */ testForOverlap)
/* harmony export */ });
/* harmony import */ var _ship_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship-factory */ "./src/ship-factory.js");


function createPosition (letter, number) {
    return {
        coordinate: letter + number.toString(),
        containsShip: null,
        firedUpon: false,
    };
}

function createBoard () {
    const board = [];
    const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    letters.forEach((letter) => {
        for (let i=1; i < 11; i+=1) {
            const position = createPosition(letter, i);
            board.push(position);
        };
    });
    return board;
};

// returns an array of legal coordinates the size of the ship length
function generateRandomShipCoordinates (length) {
    const randomShipCoordinates = [];
    const possibleLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const horizontalOrVertical = Math.floor(Math.random() * 2);
    if (horizontalOrVertical === 0) { // horizontal placement
        const startingLetterIndex = Math.floor(Math.random() * 10);        
        const startingNumber = Math.floor(Math.random() * (11-length)) + 1;
        for (let i = 0; i < length; i+=1) {
            randomShipCoordinates.push(possibleLetters[startingLetterIndex] + (startingNumber + i));
        };
    } else { // vertical placement
        const startingLetterIndex = Math.floor(Math.random() * (11-length));
        const startingNumber = Math.floor(Math.random() * 10 + 1);
        for (let i = 0; i < length; i+= 1) {
            randomShipCoordinates.push(possibleLetters[startingLetterIndex + i] + startingNumber);
        };
    };
    
    return randomShipCoordinates;
}

// returns true if overlap
function testForOverlap (board, coordinates = []) {
    return coordinates.some(element1 => board.find(element2 => element2.coordinate === element1).containsShip !== null);
}

function createGameboard () {
    const board = createBoard();
    const ships = [];
    return {
        board,
        ships,
        placeShip (shipName, shipLength, shipCoordinates) {
            ships.push((0,_ship_factory__WEBPACK_IMPORTED_MODULE_0__["default"])(shipName, shipLength));
            shipCoordinates.forEach((coordinate) => {
                const position = this.board.find(element => element.coordinate === coordinate);
                position.containsShip = shipName;
            });
        },
        generateRandomShipCoordinatesNoOverlap (length) {
            let coordinates = generateRandomShipCoordinates(length);
            while (testForOverlap(this.board, coordinates)) {
                coordinates = generateRandomShipCoordinates(length);
            };
            return coordinates;
            },
        receiveAttack (coordinate) {
            const position = this.board.find(element => element.coordinate === coordinate);
            position.firedUpon = true;
            if (position.containsShip !== null) {
                this.ships.find(ship => ship.name === position.containsShip).hit();
            };
        },
        haveSunkAllShips() {
            if (this.ships.find (element => !element.isSunk())) {
                return false;
            } 
            return true;
        },
    };
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateDisplay)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _player_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player-factory */ "./src/player-factory.js");
/* harmony import */ var _game_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game-logic */ "./src/game-logic.js");


// eslint-disable-next-line import/no-cycle
 // Is there a way to fix this?

// Create Players
const player1 = (0,_player_factory__WEBPACK_IMPORTED_MODULE_1__["default"])("Human", false);
const player2 = (0,_player_factory__WEBPACK_IMPORTED_MODULE_1__["default"])("Computer", true);

// Initialize Message Board
const messageBoard = document.getElementById("messageBoard");

// add event listener for start button
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', () => {
    startButton.remove();
    document.getElementById("gameDescription").remove();
    (0,_game_logic__WEBPACK_IMPORTED_MODULE_2__.startGame) (player1, player2);
});

// When this function is called, the screen should display the current state of the
// game.

// Delete existing boards
function deleteBoards() {
    const boards = document.querySelectorAll(".boardStyle");
    boards.forEach(element => element.remove());
}

// Render a board
function updateBoard (player) {
    const board = document.createElement("div");
    board.classList.add("boardStyle");
    document.querySelector("main").prepend(board);
    player.gameboard.board.forEach((position) => {
        const square = document.createElement("div");
        square.classList.add("squareStyle");
        board.prepend(square);
        if (player.isComputer) {
            if (!position.firedUpon) {
                square.addEventListener("click", () => {
                    (0,_game_logic__WEBPACK_IMPORTED_MODULE_2__.mainGameLoop)(player1, player2, position.coordinate);                
                });
            };
            if (position.containsShip !== null && position.firedUpon) {
                square.classList.add("hitShipStyle");
            };
            if (position.containsShip === null && position.firedUpon) {
                square.classList.add("firedSquareStyle");
            };
        } else {
            if (position.containsShip !== null && !position.firedUpon) {
                square.classList.add("unhitShipStyle");
            };
            if (position.containsShip !== null && position.firedUpon) {
                square.classList.add("hitShipStyle");
            };
            if (position.containsShip === null && position.firedUpon) {
                square.classList.add("firedSquareStyle");
            };
        };
        if (position.containsShip !==null && (player.gameboard.ships.find(element => element.name === position.containsShip).isSunk())) {
            player.gameboard.board.forEach((element) => {
                if (element.containsShip === position.containsShip) {
                    square.classList.add("shipSunkStyle");
                };
            })
        };
    });
}

// TO DO: Message Board
function updateMessageBoard (message) {
    if (message !== undefined) {
    messageBoard.innerText = `${message} ${messageBoard.innerText}`;
    };
};

function updateDisplay (message) {
    deleteBoards();
    updateBoard(player1);
    updateBoard(player2);
    updateMessageBoard(message);
}



/***/ }),

/***/ "./src/player-factory.js":
/*!*******************************!*\
  !*** ./src/player-factory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPlayer)
/* harmony export */ });
/* harmony import */ var _gameboard_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard-factory */ "./src/gameboard-factory.js");


function getRandomAttackCoordinate(player) {
    let position = player.gameboard.board[Math.floor(Math.random() * 100)];
    while (position.firedUpon) {
        position = player.gameboard.board[Math.floor(Math.random() * 100)];
    };
    return position.coordinate;
}

// TO DO: Implement a more intelligent AI coordinate choosing function
// that will attempt to fire close to hits it has already made. Rather than
// just completely random

function createPlayer(name, isComputer) {
    const gameboard = (0,_gameboard_factory__WEBPACK_IMPORTED_MODULE_0__.createGameboard)();
    return {
        name,
        isComputer,
        gameboard,
        humanLaunchAttack(opponent, coordinate) {
            opponent.gameboard.receiveAttack(coordinate);
        },
        computerLaunchAttack(opponent) {
            const positionFired = getRandomAttackCoordinate(opponent);
            opponent.gameboard.receiveAttack(positionFired);
            return positionFired;
        },
        randomlyPlaceAllShips (ships = []) {
            ships.forEach((ship) => {
                this.gameboard.placeShip(ship.name, ship.length, this.gameboard.generateRandomShipCoordinatesNoOverlap(ship.length));
            })
       
        },
    };
}


/***/ }),

/***/ "./src/ship-factory.js":
/*!*****************************!*\
  !*** ./src/ship-factory.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createShip)
/* harmony export */ });
function createShip(name, length) {
    return {
        name,
        length,
        numOfHits: 0,
        hit () {
            this.numOfHits += 1;
            return this.numOfHits;
        },
        isSunk () {
            return this.numOfHits === this.length;
        }
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/game-logic.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM1QztBQUN1RCxDQUFDOztBQUV4RDtBQUNBLGdCQUFnQiwyREFBWTtBQUM1QixnQkFBZ0IsMkRBQVk7O0FBRTVCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVM7QUFDYixDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IseURBQVk7QUFDaEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUyxFQUFFLHVCQUF1QjtBQUNsRTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRnNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZixzQkFBc0IsbUVBQWU7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNuQ2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2dhbWUtbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLWZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLWZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBvdmVycmlkZSBicm93c2VyIGRlZmF1bHQgKi9cXG5odG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuaHRtbCB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDRmcjtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbmhlYWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDEwcHggZ3JleTtcXG4gIGhlaWdodDogMTAwcHg7XFxufVxcblxcbmgxIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogeHh4LWxhcmdlO1xcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxufVxcblxcbmZvb3RlciB7XFxuICBncmlkLXJvdy1zdGFydDogMztcXG4gIGdyaWQtcm93LWVuZDogNDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IGFudGlxdWV3aGl0ZTtcXG59XFxuXFxuI3N0YXJ0QnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICAgIGdyaWQtY29sdW1uLWVuZDogc3BhbiAyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICAgIGZvbnQtc2l6ZTogNTBweDtcXG59XFxuXFxuI2dhbWVEZXNjcmlwdGlvbiB7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogc3BhbiAyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5ib2FyZFN0eWxlIHtcXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5zcXVhcmVTdHlsZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcXG4gIG1hcmdpbjogbm9uZTtcXG4gIHBhZGRpbmc6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5maXJlZFNxdWFyZVN0eWxlOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTA7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBjb250ZW50OiBcXFwiXFxcXDI3MTZcXFwiO1xcbiAgZm9udC1zaXplOiAzMHB4OyBcXG4gIGNvbG9yOiBibGFjaztcXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uaGl0U2hpcFN0eWxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxufVxcblxcbi51bmhpdFNoaXBTdHlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc2hpcFN1bmtTdHlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNtZXNzYWdlQm9hcmQge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgZ3JpZC1jb2x1bW46IDEgLyBzcGFuIDI7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXgtaGVpZ2h0OiAxNTBweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDZCQUE2QjtBQUM3Qjs7RUFFRSxTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDJCQUEyQjtFQUMzQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLDhCQUE4QjtBQUNoQzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25COztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogb3ZlcnJpZGUgYnJvd3NlciBkZWZhdWx0ICovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmh0bWwge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA0ZnI7XFxuICBtaW4taGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDVweCAxMHB4IGdyZXk7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbn1cXG5cXG5oMSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IHh4eC1sYXJnZTtcXG59XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgZ3JpZC1yb3ctc3RhcnQ6IDM7XFxuICBncmlkLXJvdy1lbmQ6IDQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbnRpcXVld2hpdGU7XFxufVxcblxcbiNzdGFydEJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxufVxcblxcbiNnYW1lRGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IHNwYW4gMjtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uYm9hcmRTdHlsZSB7XFxuICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uc3F1YXJlU3R5bGUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XFxuICBtYXJnaW46IG5vbmU7XFxuICBwYWRkaW5nOiBub25lO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZmlyZWRTcXVhcmVTdHlsZTphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDEwO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgY29udGVudDogXFxcIlxcXFwyNzE2XFxcIjtcXG4gIGZvbnQtc2l6ZTogMzBweDsgXFxuICBjb2xvcjogYmxhY2s7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmhpdFNoaXBTdHlsZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBwaW5rO1xcbn1cXG5cXG4udW5oaXRTaGlwU3R5bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnNoaXBTdW5rU3R5bGUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbWVzc2FnZUJvYXJkIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAyO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWF4LWhlaWdodDogMTUwcHg7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHVwZGF0ZURpc3BsYXkgZnJvbSAnLi9pbmRleCc7XG5cbi8vIGhlbHBlciBmdW5jdGlvbiB0byBlbmFibGUgYSBkZWxheSBiZXR3ZWVuIHR1cm5zXG4vLyBmdW5jdGlvbiBzbGVlcCAobWlsbGlzZWNvbmRzKSB7XG4vLyAgICBjb25zdCBkYXRlID0gRGF0ZS5ub3coKTtcbi8vICAgIGxldCBjdXJyZW50RGF0ZSA9IG51bGw7XG4vLyAgICBkbyB7XG4vLyAgICAgIGN1cnJlbnREYXRlID0gRGF0ZS5ub3coKTtcbi8vICAgIH0gd2hpbGUgKGN1cnJlbnREYXRlIC0gZGF0ZSA8IG1pbGxpc2Vjb25kcyk7XG4vLyAgfVxuXG4vLyBXaWxsIHJ1biBvbiBjbGljayBmcm9tIGEgU3RhcnQgQnV0dG9uXG5mdW5jdGlvbiBzdGFydEdhbWUgKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAvLyAxLiBJbml0aWFsaXplIFNoaXAgTGlzdFxuICAgIGNvbnN0IHNoaXBzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImNhcnJpZXJcIixcbiAgICAgICAgICAgIGxlbmd0aDogNSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJiYXR0bGVzaGlwXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDQsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiZGVzdHJveWVyXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic3VibWFyaW5lXCIsXG4gICAgICAgICAgICBsZW5ndGg6IDMsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwicGF0cm9sIGJvYXRcIixcbiAgICAgICAgICAgIGxlbmd0aDogMixcbiAgICAgICAgfVxuICAgIF07XG5cbiAgICAvLyAyLiBQbGFjZSBzaGlwcyBvbiB0aGUgYm9hcmRzIHJhbmRvbWx5XG4gICAgcGxheWVyMS5yYW5kb21seVBsYWNlQWxsU2hpcHMoc2hpcHMpO1xuICAgIHBsYXllcjIucmFuZG9tbHlQbGFjZUFsbFNoaXBzKHNoaXBzKTtcblxuICAgIC8vIDMuIEluaXRpYWxpemUgTWVzc2FnZVxuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXFxuIExldCdzIFBsYXkhYDtcbiAgICB1cGRhdGVEaXNwbGF5KG1lc3NhZ2UpO1xufVxuXG4vLyBodW1hbiB0dXJuXG5mdW5jdGlvbiBodW1hblR1cm4gKHBsYXllciwgb3Bwb25lbnQsIGZpcmVQb3NpdGlvbikge1xuICAgIGxldCBpc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgcGxheWVyLmh1bWFuTGF1bmNoQXR0YWNrKG9wcG9uZW50LCBmaXJlUG9zaXRpb24pO1xuICAgIGNvbnN0IHNoaXBOYW1lID0gb3Bwb25lbnQuZ2FtZWJvYXJkLmJvYXJkLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmNvb3JkaW5hdGUgPT09IGZpcmVQb3NpdGlvbikuY29udGFpbnNTaGlwO1xuICAgIGxldCBzaGlwSXNTdW5rID0gZmFsc2U7XG4gICAgaWYgKHNoaXBOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHNoaXBJc1N1bmsgPSBvcHBvbmVudC5nYW1lYm9hcmQuc2hpcHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gc2hpcE5hbWUpLmlzU3VuaygpO1xuICAgIH07XG4gICAgaWYgKHNoaXBJc1N1bmspIHtcbiAgICAgICAgbWVzc2FnZSA9IGBcXG4gJHtwbGF5ZXIubmFtZX0gc2FuayAke29wcG9uZW50Lm5hbWV9J3MgJHtzaGlwTmFtZX0hIWA7XG4gICAgfTtcbiAgICBpZiAob3Bwb25lbnQuZ2FtZWJvYXJkLmhhdmVTdW5rQWxsU2hpcHMoKSkge1xuICAgICAgICBtZXNzYWdlID0gYFxcbiAke3BsYXllci5uYW1lfSBzYW5rIGFsbCBvZiAke29wcG9uZW50Lm5hbWV9J3Mgc2hpcHMuICR7cGxheWVyLm5hbWV9IHdpbnMhISFgO1xuICAgICAgICBpc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9O1xuICAgIHVwZGF0ZURpc3BsYXkobWVzc2FnZSk7XG4gICAgcmV0dXJuIGlzR2FtZU92ZXI7XG59XG5cbi8vIGNvbXB1dGVyIHR1cm5cbmZ1bmN0aW9uIGNvbXB1dGVyVHVybiAocGxheWVyLCBvcHBvbmVudCkge1xuICAgIGxldCBpc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgbGV0IG1lc3NhZ2U7XG4gICAgY29uc3QgcG9zaXRpb25GaXJlZCA9IHBsYXllci5jb21wdXRlckxhdW5jaEF0dGFjayhvcHBvbmVudCk7XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBvcHBvbmVudC5nYW1lYm9hcmQuYm9hcmQuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuY29vcmRpbmF0ZSA9PT0gcG9zaXRpb25GaXJlZCkuY29udGFpbnNTaGlwO1xuICAgIGxldCBzaGlwSXNTdW5rID0gZmFsc2U7XG4gICAgaWYgKHNoaXBOYW1lICE9PSBudWxsKSB7XG4gICAgICAgIHNoaXBJc1N1bmsgPSBvcHBvbmVudC5nYW1lYm9hcmQuc2hpcHMuZmluZChlbGVtZW50ID0+IGVsZW1lbnQubmFtZSA9PT0gc2hpcE5hbWUpLmlzU3VuaygpO1xuICAgIH07XG4gICAgaWYgKHNoaXBJc1N1bmspIHtcbiAgICAgICAgbWVzc2FnZSA9IGBcXG4gJHtwbGF5ZXIubmFtZX0gc2FuayAke29wcG9uZW50Lm5hbWV9J3MgJHtzaGlwTmFtZX0hIWA7XG4gICAgfTtcbiAgICBpZiAob3Bwb25lbnQuZ2FtZWJvYXJkLmhhdmVTdW5rQWxsU2hpcHMoKSkge1xuICAgICAgICBtZXNzYWdlID0gYFxcbiAke3BsYXllci5uYW1lfSBzYW5rIGFsbCBvZiAke29wcG9uZW50Lm5hbWV9J3Mgc2hpcHMuICR7cGxheWVyLm5hbWV9IHdpbnMhISFgO1xuICAgICAgICBpc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICB9O1xuICAgIHVwZGF0ZURpc3BsYXkobWVzc2FnZSk7XG4gICAgcmV0dXJuIGlzR2FtZU92ZXI7XG59XG5cbi8vIEVORCBHQU1FIGJ5IGRpc2FibGluZyBjbGlja3NcbmZ1bmN0aW9uIGVuZEdhbWUoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLnN0eWxlWydwb2ludGVyLWV2ZW50cyddID0gXCJub25lXCI7XG59XG5cbi8vIFdpbGwgcnVuIG9uIGEgbW91c2UgY2xpY2tcbmZ1bmN0aW9uIG1haW5HYW1lTG9vcCAoaHVtYW4sIGNvbXB1dGVyLCBwb3NpdGlvbkNsaWNrZWQpIHtcbiAgICBsZXQgaXNHYW1lT3ZlciA9IGh1bWFuVHVybihodW1hbiwgY29tcHV0ZXIsIHBvc2l0aW9uQ2xpY2tlZCk7XG4gICAgaWYgKGlzR2FtZU92ZXIpIHtcbiAgICAgICAgZW5kR2FtZSgpO1xuICAgIH07XG4gICAgLy8gc2xlZXAoMTAwMCk7XG4gICAgaXNHYW1lT3ZlciA9IGNvbXB1dGVyVHVybihjb21wdXRlciwgaHVtYW4pO1xuICAgIGlmIChpc0dhbWVPdmVyKSB7XG4gICAgICAgIGVuZEdhbWUoKTtcbiAgICB9O1xuICAgIC8vIHNsZWVwKDEwMDApO1xufVxuXG5leHBvcnQge3N0YXJ0R2FtZSwgbWFpbkdhbWVMb29wfTtcbiIsImltcG9ydCBjcmVhdGVTaGlwIGZyb20gJy4vc2hpcC1mYWN0b3J5JztcblxuZnVuY3Rpb24gY3JlYXRlUG9zaXRpb24gKGxldHRlciwgbnVtYmVyKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29vcmRpbmF0ZTogbGV0dGVyICsgbnVtYmVyLnRvU3RyaW5nKCksXG4gICAgICAgIGNvbnRhaW5zU2hpcDogbnVsbCxcbiAgICAgICAgZmlyZWRVcG9uOiBmYWxzZSxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZCAoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICBjb25zdCBsZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgbGV0dGVycy5mb3JFYWNoKChsZXR0ZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaT0xOyBpIDwgMTE7IGkrPTEpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gY3JlYXRlUG9zaXRpb24obGV0dGVyLCBpKTtcbiAgICAgICAgICAgIGJvYXJkLnB1c2gocG9zaXRpb24pO1xuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiBib2FyZDtcbn07XG5cbi8vIHJldHVybnMgYW4gYXJyYXkgb2YgbGVnYWwgY29vcmRpbmF0ZXMgdGhlIHNpemUgb2YgdGhlIHNoaXAgbGVuZ3RoXG5mdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVNoaXBDb29yZGluYXRlcyAobGVuZ3RoKSB7XG4gICAgY29uc3QgcmFuZG9tU2hpcENvb3JkaW5hdGVzID0gW107XG4gICAgY29uc3QgcG9zc2libGVMZXR0ZXJzID0gWydBJywgJ0InLCAnQycsICdEJywgJ0UnLCAnRicsICdHJywgJ0gnLCAnSScsICdKJ107XG4gICAgY29uc3QgaG9yaXpvbnRhbE9yVmVydGljYWwgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICBpZiAoaG9yaXpvbnRhbE9yVmVydGljYWwgPT09IDApIHsgLy8gaG9yaXpvbnRhbCBwbGFjZW1lbnRcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdMZXR0ZXJJbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTsgICAgICAgIFxuICAgICAgICBjb25zdCBzdGFydGluZ051bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMS1sZW5ndGgpKSArIDE7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKz0xKSB7XG4gICAgICAgICAgICByYW5kb21TaGlwQ29vcmRpbmF0ZXMucHVzaChwb3NzaWJsZUxldHRlcnNbc3RhcnRpbmdMZXR0ZXJJbmRleF0gKyAoc3RhcnRpbmdOdW1iZXIgKyBpKSk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHsgLy8gdmVydGljYWwgcGxhY2VtZW50XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nTGV0dGVySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTEtbGVuZ3RoKSk7XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAgKyAxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrPSAxKSB7XG4gICAgICAgICAgICByYW5kb21TaGlwQ29vcmRpbmF0ZXMucHVzaChwb3NzaWJsZUxldHRlcnNbc3RhcnRpbmdMZXR0ZXJJbmRleCArIGldICsgc3RhcnRpbmdOdW1iZXIpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgXG4gICAgcmV0dXJuIHJhbmRvbVNoaXBDb29yZGluYXRlcztcbn1cblxuLy8gcmV0dXJucyB0cnVlIGlmIG92ZXJsYXBcbmZ1bmN0aW9uIHRlc3RGb3JPdmVybGFwIChib2FyZCwgY29vcmRpbmF0ZXMgPSBbXSkge1xuICAgIHJldHVybiBjb29yZGluYXRlcy5zb21lKGVsZW1lbnQxID0+IGJvYXJkLmZpbmQoZWxlbWVudDIgPT4gZWxlbWVudDIuY29vcmRpbmF0ZSA9PT0gZWxlbWVudDEpLmNvbnRhaW5zU2hpcCAhPT0gbnVsbCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUdhbWVib2FyZCAoKSB7XG4gICAgY29uc3QgYm9hcmQgPSBjcmVhdGVCb2FyZCgpO1xuICAgIGNvbnN0IHNoaXBzID0gW107XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYm9hcmQsXG4gICAgICAgIHNoaXBzLFxuICAgICAgICBwbGFjZVNoaXAgKHNoaXBOYW1lLCBzaGlwTGVuZ3RoLCBzaGlwQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIHNoaXBzLnB1c2goY3JlYXRlU2hpcChzaGlwTmFtZSwgc2hpcExlbmd0aCkpO1xuICAgICAgICAgICAgc2hpcENvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMuYm9hcmQuZmluZChlbGVtZW50ID0+IGVsZW1lbnQuY29vcmRpbmF0ZSA9PT0gY29vcmRpbmF0ZSk7XG4gICAgICAgICAgICAgICAgcG9zaXRpb24uY29udGFpbnNTaGlwID0gc2hpcE5hbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2VuZXJhdGVSYW5kb21TaGlwQ29vcmRpbmF0ZXNOb092ZXJsYXAgKGxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZ2VuZXJhdGVSYW5kb21TaGlwQ29vcmRpbmF0ZXMobGVuZ3RoKTtcbiAgICAgICAgICAgIHdoaWxlICh0ZXN0Rm9yT3ZlcmxhcCh0aGlzLmJvYXJkLCBjb29yZGluYXRlcykpIHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlcyA9IGdlbmVyYXRlUmFuZG9tU2hpcENvb3JkaW5hdGVzKGxlbmd0aCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgcmVjZWl2ZUF0dGFjayAoY29vcmRpbmF0ZSkge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmJvYXJkLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmNvb3JkaW5hdGUgPT09IGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgcG9zaXRpb24uZmlyZWRVcG9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi5jb250YWluc1NoaXAgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLmZpbmQoc2hpcCA9PiBzaGlwLm5hbWUgPT09IHBvc2l0aW9uLmNvbnRhaW5zU2hpcCkuaGl0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBoYXZlU3Vua0FsbFNoaXBzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMuZmluZCAoZWxlbWVudCA9PiAhZWxlbWVudC5pc1N1bmsoKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuZXhwb3J0IHsgdGVzdEZvck92ZXJsYXAgLCBjcmVhdGVHYW1lYm9hcmR9OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGNyZWF0ZVBsYXllciBmcm9tIFwiLi9wbGF5ZXItZmFjdG9yeVwiO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1jeWNsZVxuaW1wb3J0IHsgc3RhcnRHYW1lLCBtYWluR2FtZUxvb3AgfSBmcm9tICcuL2dhbWUtbG9naWMnOyAvLyBJcyB0aGVyZSBhIHdheSB0byBmaXggdGhpcz9cblxuLy8gQ3JlYXRlIFBsYXllcnNcbmNvbnN0IHBsYXllcjEgPSBjcmVhdGVQbGF5ZXIoXCJIdW1hblwiLCBmYWxzZSk7XG5jb25zdCBwbGF5ZXIyID0gY3JlYXRlUGxheWVyKFwiQ29tcHV0ZXJcIiwgdHJ1ZSk7XG5cbi8vIEluaXRpYWxpemUgTWVzc2FnZSBCb2FyZFxuY29uc3QgbWVzc2FnZUJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZXNzYWdlQm9hcmRcIik7XG5cbi8vIGFkZCBldmVudCBsaXN0ZW5lciBmb3Igc3RhcnQgYnV0dG9uXG5jb25zdCBzdGFydEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydEJ1dHRvbicpO1xuc3RhcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3RhcnRCdXR0b24ucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lRGVzY3JpcHRpb25cIikucmVtb3ZlKCk7XG4gICAgc3RhcnRHYW1lIChwbGF5ZXIxLCBwbGF5ZXIyKTtcbn0pO1xuXG4vLyBXaGVuIHRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkLCB0aGUgc2NyZWVuIHNob3VsZCBkaXNwbGF5IHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZVxuLy8gZ2FtZS5cblxuLy8gRGVsZXRlIGV4aXN0aW5nIGJvYXJkc1xuZnVuY3Rpb24gZGVsZXRlQm9hcmRzKCkge1xuICAgIGNvbnN0IGJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuYm9hcmRTdHlsZVwiKTtcbiAgICBib2FyZHMuZm9yRWFjaChlbGVtZW50ID0+IGVsZW1lbnQucmVtb3ZlKCkpO1xufVxuXG4vLyBSZW5kZXIgYSBib2FyZFxuZnVuY3Rpb24gdXBkYXRlQm9hcmQgKHBsYXllcikge1xuICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBib2FyZC5jbGFzc0xpc3QuYWRkKFwiYm9hcmRTdHlsZVwiKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5wcmVwZW5kKGJvYXJkKTtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlU3R5bGVcIik7XG4gICAgICAgIGJvYXJkLnByZXBlbmQoc3F1YXJlKTtcbiAgICAgICAgaWYgKHBsYXllci5pc0NvbXB1dGVyKSB7XG4gICAgICAgICAgICBpZiAoIXBvc2l0aW9uLmZpcmVkVXBvbikge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtYWluR2FtZUxvb3AocGxheWVyMSwgcGxheWVyMiwgcG9zaXRpb24uY29vcmRpbmF0ZSk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi5jb250YWluc1NoaXAgIT09IG51bGwgJiYgcG9zaXRpb24uZmlyZWRVcG9uKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJoaXRTaGlwU3R5bGVcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLmNvbnRhaW5zU2hpcCA9PT0gbnVsbCAmJiBwb3NpdGlvbi5maXJlZFVwb24pIHtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcImZpcmVkU3F1YXJlU3R5bGVcIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHBvc2l0aW9uLmNvbnRhaW5zU2hpcCAhPT0gbnVsbCAmJiAhcG9zaXRpb24uZmlyZWRVcG9uKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJ1bmhpdFNoaXBTdHlsZVwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAocG9zaXRpb24uY29udGFpbnNTaGlwICE9PSBudWxsICYmIHBvc2l0aW9uLmZpcmVkVXBvbikge1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwiaGl0U2hpcFN0eWxlXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbi5jb250YWluc1NoaXAgPT09IG51bGwgJiYgcG9zaXRpb24uZmlyZWRVcG9uKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJmaXJlZFNxdWFyZVN0eWxlXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHBvc2l0aW9uLmNvbnRhaW5zU2hpcCAhPT1udWxsICYmIChwbGF5ZXIuZ2FtZWJvYXJkLnNoaXBzLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50Lm5hbWUgPT09IHBvc2l0aW9uLmNvbnRhaW5zU2hpcCkuaXNTdW5rKCkpKSB7XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jb250YWluc1NoaXAgPT09IHBvc2l0aW9uLmNvbnRhaW5zU2hpcCkge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNoaXBTdW5rU3R5bGVcIik7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbi8vIFRPIERPOiBNZXNzYWdlIEJvYXJkXG5mdW5jdGlvbiB1cGRhdGVNZXNzYWdlQm9hcmQgKG1lc3NhZ2UpIHtcbiAgICBpZiAobWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbWVzc2FnZUJvYXJkLmlubmVyVGV4dCA9IGAke21lc3NhZ2V9ICR7bWVzc2FnZUJvYXJkLmlubmVyVGV4dH1gO1xuICAgIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5IChtZXNzYWdlKSB7XG4gICAgZGVsZXRlQm9hcmRzKCk7XG4gICAgdXBkYXRlQm9hcmQocGxheWVyMSk7XG4gICAgdXBkYXRlQm9hcmQocGxheWVyMik7XG4gICAgdXBkYXRlTWVzc2FnZUJvYXJkKG1lc3NhZ2UpO1xufVxuXG4iLCJpbXBvcnQgeyBjcmVhdGVHYW1lYm9hcmQgfSBmcm9tICcuL2dhbWVib2FyZC1mYWN0b3J5JztcblxuZnVuY3Rpb24gZ2V0UmFuZG9tQXR0YWNrQ29vcmRpbmF0ZShwbGF5ZXIpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCldO1xuICAgIHdoaWxlIChwb3NpdGlvbi5maXJlZFVwb24pIHtcbiAgICAgICAgcG9zaXRpb24gPSBwbGF5ZXIuZ2FtZWJvYXJkLmJvYXJkW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMCldO1xuICAgIH07XG4gICAgcmV0dXJuIHBvc2l0aW9uLmNvb3JkaW5hdGU7XG59XG5cbi8vIFRPIERPOiBJbXBsZW1lbnQgYSBtb3JlIGludGVsbGlnZW50IEFJIGNvb3JkaW5hdGUgY2hvb3NpbmcgZnVuY3Rpb25cbi8vIHRoYXQgd2lsbCBhdHRlbXB0IHRvIGZpcmUgY2xvc2UgdG8gaGl0cyBpdCBoYXMgYWxyZWFkeSBtYWRlLiBSYXRoZXIgdGhhblxuLy8ganVzdCBjb21wbGV0ZWx5IHJhbmRvbVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQbGF5ZXIobmFtZSwgaXNDb21wdXRlcikge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IGNyZWF0ZUdhbWVib2FyZCgpO1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGlzQ29tcHV0ZXIsXG4gICAgICAgIGdhbWVib2FyZCxcbiAgICAgICAgaHVtYW5MYXVuY2hBdHRhY2sob3Bwb25lbnQsIGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIG9wcG9uZW50LmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpO1xuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlckxhdW5jaEF0dGFjayhvcHBvbmVudCkge1xuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25GaXJlZCA9IGdldFJhbmRvbUF0dGFja0Nvb3JkaW5hdGUob3Bwb25lbnQpO1xuICAgICAgICAgICAgb3Bwb25lbnQuZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb25GaXJlZCk7XG4gICAgICAgICAgICByZXR1cm4gcG9zaXRpb25GaXJlZDtcbiAgICAgICAgfSxcbiAgICAgICAgcmFuZG9tbHlQbGFjZUFsbFNoaXBzIChzaGlwcyA9IFtdKSB7XG4gICAgICAgICAgICBzaGlwcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHNoaXAubmFtZSwgc2hpcC5sZW5ndGgsIHRoaXMuZ2FtZWJvYXJkLmdlbmVyYXRlUmFuZG9tU2hpcENvb3JkaW5hdGVzTm9PdmVybGFwKHNoaXAubGVuZ3RoKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgIFxuICAgICAgICB9LFxuICAgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbnVtT2ZIaXRzOiAwLFxuICAgICAgICBoaXQgKCkge1xuICAgICAgICAgICAgdGhpcy5udW1PZkhpdHMgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bU9mSGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bU9mSGl0cyA9PT0gdGhpcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=