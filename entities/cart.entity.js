class Cart { //represents cart for the user
    constructor() { //creating cart instance
        this._items = []; // array for books in cart
    }


    get items() {
        return this._items;
    }

    addBook(book) {  // method for adding new book to cart
        this._items.push(book);
    }

    removeBook(book) {  // method for removing specyfic book from the cart
        const index = this._items.findIndex(item => item === book);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }

    calculateTotalPrice() { // method for calculating total price of items in cart
        return this.items.reduce((total, book) => total + book._price, 0);
    }
}

module.exports = Cart;