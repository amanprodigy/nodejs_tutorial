import {Person} from './classes.js';

interface PersonInterface{
    firstname: string;
    lastname: string;
    getFullName(): string;
}

class Warrior implements PersonInterface{
    private team: string;
    firstname: string;
    lastname: string;

    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
    }

    getFirstName(){
        return this.firstname;
    }

    getLastName(){
        return this.lastname;
    }

    getFullName(){
        return this.firstname + ' ' + this.lastname;
    }

}

let w : PersonInterface = new Warrior('Aman', 'Srivastava');
let fn: string = w.getFullName()
console.log(fn);

// example of duck typing
// w which was of type PersonInterface is now equated to someobj 
// this is because someobj has the same structure of PersonInterface
let someobj = {
    firstname: 'test',
    lastname: 'test',
    getFullName: () => 'test'
};

w = someobj;
