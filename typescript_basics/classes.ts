export class Person{
    firstname: string;
    lastname: string;
    //private fullname;

    constructor(firstname, lastname){
        this.firstname = firstname;
        this.lastname = lastname;
        //this.fullname = this.firstname + ' ' + this.lastname;
    }

    public getFullName(){
        return this.firstname + ' ' + this.lastname;
    }

    public greet(){
        console.log('Hey there');
    }
}

export class Programmer extends Person{
    public greet(){
        console.log('Hey there '+this.firstname);
    }

    public greetLikePerson(){
        super.greet();
    }

}

var prog = new Programmer('John', 'Jacobs');
console.log(prog.greet());
console.log(prog.greetLikePerson());


var p : Person = new Person('Aman', 'Srivastava');

console.log(p);
console.log(p.firstname + ' ' + p.lastname);
console.log(p.getFullName());

var newProgrammer: Person = new Programmer('Brad', 'Hurley');
newProgrammer.greet();
