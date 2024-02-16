"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
class Section {
    constructor(section_number, title) {
        this.section_number = section_number;
        this.title = title;
        this.lectures = [];
        this.has_resources = false;
    }
    getTitle() {
        return this.title;
    }
    setTitle(title) {
        this.title = title;
    }
    getSectionNumber() {
        return this.section_number;
    }
    getSection() {
        return `section-${this.section_number}`;
    }
    getLectures() {
        return this.lectures;
    }
    showLectures() {
        console.log(this.lectures);
    }
    appendLecture(lecture) {
        lecture.setSectionNumber(this.getSectionNumber());
        this.lectures.push(lecture);
    }
    toString(capitalize = false) {
        const returnString = `section-${this.section_number}: ${this.getTitle()}`;
        const capitalReturnString = `Section-${this.section_number}: ${this.getTitle()}`;
        if (!capitalize) {
            return returnString;
        }
        else {
            return capitalReturnString;
        }
    }
}
exports.Section = Section;
