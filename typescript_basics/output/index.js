"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var classes_1 = require("./classes");
var _ = __importStar(require("lodash"));
var person = new classes_1.Person('Aman', 'Srivastava');
console.log(person);
var arr = [1, 3, 5, 7, 9];
var newArr = _.reverse(arr);
console.log(newArr);
