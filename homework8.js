class Book { // represents a book in a bookstore
    constructor(title, author, isbn, price, availability) {  //constructor for creating instances
        this.title = title; //title of the book
        this.author = author; //author of the book
        this.isbn = isbn; //international standard book number
        this.price = price; //price of the book
        this.availability = availability; // identifies if book is availible
    }
}


class User { // represents user of bookstore
    constructor(name, email, userId) { //constructor for creating user instance
        this.name = name; //name of user
        this.email = email; //email of user
        this.userId = userId; // identifier for user
    }
}


class Cart { //represents cart for the user
    constructor() { //creating cart instance
        this.items = []; // array for books in cart
    }

    addBook(book) {  // method for adding new book to cart
        this.items.push(book);
    }

    removeBook(book) {  // method for removing specyfic book from the cart
        const index = this.items.findIndex(item => item === book);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    }

    calculateTotalPrice() { // method for calculating total price of items in cart
        return this.items.reduce((total, book) => total + book.price, 0);
    }
}


class Order {
    constructor(user, books) { // constructor for creating instance of Order class
        this.user = user; // user who placed order
        this.books = books; // books ordered by user
        this.totalPrice = this.calculateTotalPrice();
    }

    calculateTotalPrice() { // method for calculating total price for the order 
        return this.books.reduce((total, book) => total + book.price, 0);
    }

    summary() { // method for displaying summary of the order
        console.log(`User: ${this.user.name}`);
        console.log("Books:");
        this.books.forEach(book => {
            console.log(`- ${book.title}, ${book.author}`);
        });
        console.log(`Total price: $${this.totalPrice}`);
    }
}


// creating instances of Book
const book1 = new Book("The Lord of The Rings", "J.R.R Tolkien", "9788845292613", 12.99, true);
const book2 = new Book("1984", "George Orwell", "9780198185215", 15.99, true);
const book3 = new Book("Crime and Punishment", "Fyodor Dostoevsky", "9780198709701", 10.99, true);

// creating User ojects
const user1 = new User("John", "john@example.com", "1");
const user2 = new User("Jane", "jane@example.com", "2");

// adding books to users carts
const cartUser1 = new Cart();
cartUser1.addBook(book1);
cartUser1.addBook(book2);
cartUser1.addBook(book3);

const cartUser2 = new Cart();
cartUser2.addBook(book2);
cartUser2.addBook(book3);
cartUser2.removeBook(book3)

// creating orders and displaying summary
const orderUser1 = new Order(user1, cartUser1.items);
orderUser1.summary();

const orderUser2 = new Order(user2, cartUser2.items);
orderUser2.summary();

// user interacts with the system by adding items to his cart
// Cart manages list of Book instances added by user
// Order interacts with the User and the Cart, to get information about user and the books ordered
