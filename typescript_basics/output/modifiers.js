var Book = /** @class */ (function () {
    function Book(name) {
        this.name = 'White Tiger';
        this.basicname = 'Adam';
        this.name = name;
    }
    Book.prototype.getUrl = function () {
        return this.basicname + this.name;
    };
    return Book;
}());
var book = new Book('Old Man');
console.log(book.getUrl());
console.log(book.name);
