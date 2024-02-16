"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FSWrapper = void 0;
const Reader_1 = require("./Reader");
const Writer_1 = require("./Writer");
class FSWrapper {
    constructor(fileName) {
        this.reader = new Reader_1.Reader(fileName);
        this.writer = new Writer_1.Writer(fileName);
    }
    static reader(fileName) {
        return new Reader_1.Reader(fileName);
    }
}
exports.FSWrapper = FSWrapper;
// const reader = FSWrapper.reader("example.json");
