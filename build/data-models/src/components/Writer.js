"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Writer = void 0;
const fs_1 = __importDefault(require("fs"));
class Writer {
    constructor(fileName) {
        this.fileName = fileName;
    }
    write(fileContent) {
        fs_1.default.writeFileSync(this.fileName, fileContent);
        return 0;
    }
    writeJSON(fileContent, options) {
        try {
            let json = JSON.stringify([fileContent], null, 4);
            fs_1.default.writeFileSync(this.fileName, json);
        }
        catch (err) {
            throw new Error("Something we wrong");
            return -1;
        }
        return 0;
    }
    appendJSON(content, options) {
        const { fileName } = this;
        let fileBuffer, fileString, fileObject, json;
        fileBuffer = fs_1.default.readFileSync(fileName);
        fileString = fileBuffer.toString();
        fileObject = JSON.parse(fileString);
        fileObject.push(content);
        json = JSON.stringify(fileObject, null, 4);
        fs_1.default.writeFileSync(fileName, json);
        return -99;
    }
    getFileObject() {
        let fileBuffer, fileString;
        fileBuffer = fs_1.default.readFileSync(this.fileName);
        fileString = fileBuffer.toString();
        return fileString;
    }
    get getFileName() {
        return this.fileName;
    }
    setFileName(fileName) {
        this.fileName = fileName;
    }
}
exports.Writer = Writer;
