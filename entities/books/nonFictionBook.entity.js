const Book = require('./book.entity')

class NonFictionBook extends Book { // class extending basic book class for non-fiction books
    constructor(title, author, isbn, price, availability, genre) {
        super (title, author, isbn, price, availability);
        this.genre = genre;
    }

    
    get genre() {
        return this._genre;
    }

    set genre(genre) {
        this._genre = genre;
    }
}

module.exports = NonFictionBook;