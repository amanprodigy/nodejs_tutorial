import {Person, Programmer} from './classes'

function echo<T>(arg: T): T{
    return arg;
}

var myStr = echo(1);

class Admin<T> extends Person{
    constructor(){
        super('Admin', 'Company');
    }

}

class Manager extends Programmer{
    constructor(){
        super('Manager', 'Company');
    }

}

class ABC{
    firstname;
    lastname;
    getFullName(){
        return this.firstname + ' ' + this.lastname;
    }
    greet(){
        console.log('Hello there');
    }
}

var abc = new ABC();

var admin = new Admin();
var manager = new Manager();

function echoPerson<T extends Person>(person: T): T{
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
