"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lecture = void 0;
var LectureType;
(function (LectureType) {
    LectureType["ARTICLE"] = "article";
    LectureType["VIDEO"] = "video";
    LectureType["READING"] = "reading";
})(LectureType || (LectureType = {}));
class Lecture {
    constructor(lecture_number, section_number, title) {
        this.lecture_number = lecture_number;
        this.section_number = section_number;
        this.title = title;
        this._id = 0;
        this.id = 0;
        this.duration = null;
        this.is_complete = false;
    }
    setSectionNumber(sectionNumber) {
        this.section_number = sectionNumber;
    }
    getIsComplete() {
        return this.is_complete;
    }
    setIsComplete(is_complete) {
        this.is_complete = is_complete;
    }
}
exports.Lecture = Lecture;
