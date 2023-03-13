"use strict";
(self["webpackChunkbattleship"] = self["webpackChunkbattleship"] || []).push([["gameboardFactory"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/gameboard-factory.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZWJvYXJkRmFjdG9yeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixRQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEM7QUFDQTtBQUNBLHdCQUF3QixZQUFZO0FBQ3BDO0FBQ0E7QUFDQSxNQUFNLE9BQU87QUFDYjtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlEQUFVO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAtZmFjdG9yeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlU2hpcCBmcm9tICcuL3NoaXAtZmFjdG9yeSc7XG5cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uIChsZXR0ZXIsIG51bWJlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvb3JkaW5hdGU6IGxldHRlciArIG51bWJlci50b1N0cmluZygpLFxuICAgICAgICBjb250YWluc1NoaXA6IG51bGwsXG4gICAgICAgIGZpcmVkVXBvbjogZmFsc2UsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQm9hcmQgKCkge1xuICAgIGNvbnN0IGJvYXJkID0gW107XG4gICAgY29uc3QgbGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGxldHRlcnMuZm9yRWFjaCgobGV0dGVyKSA9PiB7XG4gICAgICAgIGZvciAobGV0IGk9MTsgaSA8IDExOyBpKz0xKSB7XG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbiA9IGNyZWF0ZVBvc2l0aW9uKGxldHRlciwgaSk7XG4gICAgICAgICAgICBib2FyZC5wdXNoKHBvc2l0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbiAgICByZXR1cm4gYm9hcmQ7XG59O1xuXG4vLyByZXR1cm5zIGFuIGFycmF5IG9mIGxlZ2FsIGNvb3JkaW5hdGVzIHRoZSBzaXplIG9mIHRoZSBzaGlwIGxlbmd0aFxuZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TaGlwQ29vcmRpbmF0ZXMgKGxlbmd0aCkge1xuICAgIGNvbnN0IHJhbmRvbVNoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIGNvbnN0IHBvc3NpYmxlTGV0dGVycyA9IFsnQScsICdCJywgJ0MnLCAnRCcsICdFJywgJ0YnLCAnRycsICdIJywgJ0knLCAnSiddO1xuICAgIGNvbnN0IGhvcml6b250YWxPclZlcnRpY2FsID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgaWYgKGhvcml6b250YWxPclZlcnRpY2FsID09PSAwKSB7IC8vIGhvcml6b250YWwgcGxhY2VtZW50XG4gICAgICAgIGNvbnN0IHN0YXJ0aW5nTGV0dGVySW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7ICAgICAgICBcbiAgICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTEtbGVuZ3RoKSkgKyAxO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSs9MSkge1xuICAgICAgICAgICAgcmFuZG9tU2hpcENvb3JkaW5hdGVzLnB1c2gocG9zc2libGVMZXR0ZXJzW3N0YXJ0aW5nTGV0dGVySW5kZXhdICsgKHN0YXJ0aW5nTnVtYmVyICsgaSkpO1xuICAgICAgICB9O1xuICAgIH0gZWxzZSB7IC8vIHZlcnRpY2FsIHBsYWNlbWVudFxuICAgICAgICBjb25zdCBzdGFydGluZ0xldHRlckluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDExLWxlbmd0aCkpO1xuICAgICAgICBjb25zdCBzdGFydGluZ051bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwICsgMSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKz0gMSkge1xuICAgICAgICAgICAgcmFuZG9tU2hpcENvb3JkaW5hdGVzLnB1c2gocG9zc2libGVMZXR0ZXJzW3N0YXJ0aW5nTGV0dGVySW5kZXggKyBpXSArIHN0YXJ0aW5nTnVtYmVyKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIFxuICAgIHJldHVybiByYW5kb21TaGlwQ29vcmRpbmF0ZXM7XG59XG5cbi8vIHJldHVybnMgdHJ1ZSBpZiBvdmVybGFwXG5mdW5jdGlvbiB0ZXN0Rm9yT3ZlcmxhcCAoYm9hcmQsIGNvb3JkaW5hdGVzID0gW10pIHtcbiAgICByZXR1cm4gY29vcmRpbmF0ZXMuc29tZShlbGVtZW50MSA9PiBib2FyZC5maW5kKGVsZW1lbnQyID0+IGVsZW1lbnQyLmNvb3JkaW5hdGUgPT09IGVsZW1lbnQxKS5jb250YWluc1NoaXAgIT09IG51bGwpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVHYW1lYm9hcmQgKCkge1xuICAgIGNvbnN0IGJvYXJkID0gY3JlYXRlQm9hcmQoKTtcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuICAgIHJldHVybiB7XG4gICAgICAgIGJvYXJkLFxuICAgICAgICBzaGlwcyxcbiAgICAgICAgcGxhY2VTaGlwIChzaGlwTmFtZSwgc2hpcExlbmd0aCwgc2hpcENvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBzaGlwcy5wdXNoKGNyZWF0ZVNoaXAoc2hpcE5hbWUsIHNoaXBMZW5ndGgpKTtcbiAgICAgICAgICAgIHNoaXBDb29yZGluYXRlcy5mb3JFYWNoKChjb29yZGluYXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmJvYXJkLmZpbmQoZWxlbWVudCA9PiBlbGVtZW50LmNvb3JkaW5hdGUgPT09IGNvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvbnRhaW5zU2hpcCA9IHNoaXBOYW1lO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdlbmVyYXRlUmFuZG9tU2hpcENvb3JkaW5hdGVzTm9PdmVybGFwIChsZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBjb29yZGluYXRlcyA9IGdlbmVyYXRlUmFuZG9tU2hpcENvb3JkaW5hdGVzKGxlbmd0aCk7XG4gICAgICAgICAgICB3aGlsZSAodGVzdEZvck92ZXJsYXAodGhpcy5ib2FyZCwgY29vcmRpbmF0ZXMpKSB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBnZW5lcmF0ZVJhbmRvbVNoaXBDb29yZGluYXRlcyhsZW5ndGgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBjb29yZGluYXRlcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgIHJlY2VpdmVBdHRhY2sgKGNvb3JkaW5hdGUpIHtcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5ib2FyZC5maW5kKGVsZW1lbnQgPT4gZWxlbWVudC5jb29yZGluYXRlID09PSBjb29yZGluYXRlKTtcbiAgICAgICAgICAgIHBvc2l0aW9uLmZpcmVkVXBvbiA9IHRydWU7XG4gICAgICAgICAgICBpZiAocG9zaXRpb24uY29udGFpbnNTaGlwICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5maW5kKHNoaXAgPT4gc2hpcC5uYW1lID09PSBwb3NpdGlvbi5jb250YWluc1NoaXApLmhpdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgaGF2ZVN1bmtBbGxTaGlwcygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzLmZpbmQgKGVsZW1lbnQgPT4gIWVsZW1lbnQuaXNTdW5rKCkpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgIH07XG59XG5cbmV4cG9ydCB7IHRlc3RGb3JPdmVybGFwICwgY3JlYXRlR2FtZWJvYXJkfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaGlwKG5hbWUsIGxlbmd0aCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGxlbmd0aCxcbiAgICAgICAgbnVtT2ZIaXRzOiAwLFxuICAgICAgICBoaXQgKCkge1xuICAgICAgICAgICAgdGhpcy5udW1PZkhpdHMgKz0gMTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bU9mSGl0cztcbiAgICAgICAgfSxcbiAgICAgICAgaXNTdW5rICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm51bU9mSGl0cyA9PT0gdGhpcy5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=