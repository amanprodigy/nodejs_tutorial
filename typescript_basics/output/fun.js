function add(a, b) {
    return a + b;
}
add(2, 3);
// doesnt work
// add(4, 'foo');
// add('bar', 'foo');
// add(4);
function addFlexible(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
addFlexible(4, 5, 8);
function addOptional(a, b, c) {
    if (c === undefined) {
        return a + b;
    }
    else {
        return a + b + c;
    }
}
function addFlavor(a, b, c) {
    if (b === void 0) { b = 0; }
    return a + b + c;
}
addFlavor(4, 6, 6);
addFlexible(4, 5, 8);
addOptional(4, 5);
var a = 10;
// Doesnt work
//a = true;
//a = 'Hello';
a = 20;
function greet() {
    return "Good morning";
}
// Any types
var an;
an = 10;
an = 'abc';
an = true;
// Union types
var un;
un = 4;
un = true;
//un = 'abc'; // Doesnt work
