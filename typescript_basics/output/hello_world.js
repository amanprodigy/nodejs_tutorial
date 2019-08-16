var fn = function () { return 'response'; };
var a;
var b;
var c;
a = 10;
b = true;
c = "true";
var foo;
var bar;
foo = null;
bar = undefined;
var myArr;
myArr = [];
myArr = [1, 2, 3];
myArr.push(4);
var newArr = [1, 'string', true];
// tuple
var tupArr;
tupArr = [1, true];
// Following will fail
//tupArr = [3, 4, false];
//tupArr = [false, 3];
//tupArr = [3, 3];
//tupArr = [2, 'string'];
