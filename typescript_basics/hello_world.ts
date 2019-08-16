var fn = () => 'response';

var a: number;
var b: boolean;
var c: string;

a = 10;
b = true;
c = "true";


var foo: undefined;
var bar: null;

foo = null;
bar = undefined;

var myArr: number[];
myArr = [];
myArr = [1, 2, 3];
myArr.push(4);

var newArr = [1, 'string', true];

// tuple

var tupArr: [number, boolean];
tupArr = [1, true];
// Following will fail
//tupArr = [3, 4, false];
//tupArr = [false, 3];
//tupArr = [3, 3];
//tupArr = [2, 'string'];



