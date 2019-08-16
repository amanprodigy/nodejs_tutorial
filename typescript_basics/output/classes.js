"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    //private fullname;
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        //this.fullname = this.firstname + ' ' + this.lastname;
    }
    Person.prototype.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    Person.prototype.greet = function () {
        console.log('Hey there');
    };
    return Person;
}());
exports.Person = Person;
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.greet = function () {
        console.log('Hey there ' + this.firstname);
    };
    Programmer.prototype.greetLikePerson = function () {
        _super.prototype.greet.call(this);
    };
    return Programmer;
}(Person));
exports.Programmer = Programmer;
var prog = new Programmer('John', 'Jacobs');
console.log(prog.greet());
console.log(prog.greetLikePerson());
var p = new Person('Aman', 'Srivastava');
console.log(p);
console.log(p.firstname + ' ' + p.lastname);
console.log(p.getFullName());
var newProgrammer = new Programmer('Brad', 'Hurley');
newProgrammer.greet();
