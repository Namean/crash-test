"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = void 0;
const fs_1 = __importDefault(require("fs"));
class Reader {
    constructor(fileName) {
        this.fileName = fileName;
    }
    getFileString() {
        let fileBuffer, fileString;
        try {
            fileBuffer = fs_1.default.readFileSync(this.fileName);
            fileString = fileBuffer.toString();
            return fileString;
        }
        catch (err) {
            throw err;
        }
    }
    setFileString() {
        this.fileString = this.getFileString();
    }
    read() { }
    get getFileName() {
        return this.fileName;
    }
    set setFileName(fileName) {
        this.fileName = fileName;
    }
}
exports.Reader = Reader;
const reader = new Reader("./test");
