"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["shipFactory"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/ship-factory.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcEZhY3RvcnkuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAtZmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbnVtT2ZIaXRzOiAwLFxuICAgICAgICBoaXQgKCkge1xuICAgICAgICAgICAgdGhpcy5udW1PZkhpdHMgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bU9mSGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bU9mSGl0cyA9PT0gdGhpcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=