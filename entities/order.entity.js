class Order {
    constructor(user, books) { // constructor for creating instance of Order class
        this._user = user; // user who placed order
        this._books = books; // books ordered by user
        this._totalPrice = this.calculateTotalPrice();
    }


    get user() {
        return this._user;
    }

    get books() {
        return this._books;
    }

    get totalPrice() {
        return this._totalPrice;
    }


    calculateTotalPrice() { // method for calculating total price for the order 
        return this._books.reduce((total, book) => total + book._price, 0);
    }

    summary() { // method for displaying summary of the order
        console.log(`User: ${this._user._name}`);
        console.log("Books:");
        this._books.forEach(book => {
            console.log(`- ${book._title}, ${book._author}`);
        });
        console.log(`Total price: $${this._totalPrice}`);
    }
}

module.exports = Order;