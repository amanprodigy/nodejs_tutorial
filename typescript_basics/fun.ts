function add(a: number, b: number){
    return a + b;
}

add(2, 3);

// doesnt work
// add(4, 'foo');
// add('bar', 'foo');
// add(4);


function addFlexible(a: number, b: number, c=0){
    return a + b + c;
}

addFlexible(4, 5, 8);


function addOptional(a: number, b: number, c?){
    if(c === undefined){
        return a + b;
    }else{
        return a + b + c;
    }
}

function addFlavor(a: number, b: number = 0, c: number){
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

function greet(): string{
    return "Good morning"
}

// Any types
var an: any;
an = 10;
an = 'abc';
an = true;

// Union types
var un: number | boolean;
un = 4;
un = true;
//un = 'abc'; // Doesnt work
