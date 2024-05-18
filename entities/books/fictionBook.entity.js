const Book = require('./book.entity')

class FictionBook extends Book { // class extending basic book class for fiction books
    constructor(title, author, isbn, price, availability, genre) {
        super (title, author, isbn, price, availability);
        this._genre = genre;
    }


    get genre() {
        return this._genre;
    }

    set genre(genre) {
        this._genre = genre;
    }
}

module.exports = FictionBook;