"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const FSWrapper_1 = require("../../data-models/src/components/FSWrapper");
const reader = FSWrapper_1.FSWrapper.reader("exmaple.txt");
const myName = "Desmond";
try {
    console.log(`${myName}, you did it!`);
}
catch (err) {
    throw new Error("Something went wrong!!");
}
