class Book{
    readonly name: string = 'White Tiger';
    private basicname: string = 'Adam';

    constructor(name){
        this.name = name;
    }

    getUrl(){
        return this.basicname + this.name;
    }
}

var book = new Book('Old Man');
console.log(book.getUrl());
console.log(book.name);
