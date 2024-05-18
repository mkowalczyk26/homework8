class Book { // represents a book in a bookstore
    constructor(title, author, isbn, price, availability) {  //constructor for creating instances
        this._title = title; //title of the book
        this._author = author; //author of the book
        this._isbn = isbn; //international standard book number
        this._price = price; //price of the book
        this._availability = availability; // identifies if book is availible
    }

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get isbn() {
        return this._isbn;
    }

    get price() {
        return this._price;
    }

    get availability() {
        return this._availability;
    }



    set title(title) {
        this._title = title;
    }

    set author(author) {
        this._author = author;
    }

    set isbn(isbn) {
        this._isbn = isbn;
    }

    set price(price) {
        this._price = price;
    }

    set availability(availability) {
        this._availability = availability;
    }
}


module.exports = Book;