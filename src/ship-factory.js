export default function createShip(name, length) {
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
