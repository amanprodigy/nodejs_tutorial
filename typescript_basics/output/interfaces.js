"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Warrior = /** @class */ (function () {
    function Warrior(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    Warrior.prototype.getFirstName = function () {
        return this.firstname;
    };
    Warrior.prototype.getLastName = function () {
        return this.lastname;
    };
    Warrior.prototype.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    return Warrior;
}());
var w = new Warrior('Aman', 'Srivastava');
var fn = w.getFullName();
console.log(fn);
// example of duck typing
// w which was of type PersonInterface is now equated to someobj 
// this is because someobj has the same structure of PersonInterface
var someobj = {
    firstname: 'test',
    lastname: 'test',
    getFullName: function () { return 'test'; }
};
w = someobj;
