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
var classes_1 = require("./classes");
function echo(arg) {
    return arg;
}
var myStr = echo(1);
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super.call(this, 'Admin', 'Company') || this;
    }
    return Admin;
}(classes_1.Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super.call(this, 'Manager', 'Company') || this;
    }
    return Manager;
}(classes_1.Programmer));
var ABC = /** @class */ (function () {
    function ABC() {
    }
    ABC.prototype.getFullName = function () {
        return this.firstname + ' ' + this.lastname;
    };
    ABC.prototype.greet = function () {
        console.log('Hello there');
    };
    return ABC;
}());
var abc = new ABC();
var admin = new Admin();
var manager = new Manager();
function echoPerson(person) {
    return person;
}
var ep = echoPerson(admin);
var mp = echoPerson(manager);
var ap = echoPerson(abc);
console.log(ep);
console.log(mp);
console.log(ap);
console.log(admin.getFullName());
console.log(manager.getFullName());
