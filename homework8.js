const User = require('./entities/user.entity');
const Cart = require('./entities/cart.entity');
const Order = require('./entities/order.entity');
const FictionBook = require('./entities/books/fictionBook.entity');
const NonFictionBook = require('./entities/books/nonFictionBook.entity');

// creating instances of Book
const book1 = new FictionBook("The Lord of The Rings", "J.R.R Tolkien", "9788845292613", 12.99, true, "Fantasy");
const book2 = new FictionBook("1984", "George Orwell", "9780198185215", 15.99, true, "Science fiction");
const book3 = new NonFictionBook("Crime and Punishment", "Fyodor Dostoevsky", "9780198709701", 10.99, true, "Philosophical novel");

// creating User ojects
const user1 = new User("John", "john@example.com");
const user2 = new User("Jane", "jane@example.com");


// adding books to users carts
const cartUser1 = new Cart();
cartUser1.addBook(book1);
cartUser1.addBook(book2);
cartUser1.addBook(book3);

const cartUser2 = new Cart();
cartUser2.addBook(book2);
cartUser2.addBook(book3);
cartUser2.removeBook(book3);

// creating orders and displaying summary
const orderUser1 = new Order(user1, cartUser1.items);
orderUser1.summary();

const orderUser2 = new Order(user2, cartUser2.items);
orderUser2.summary();

// user interacts with the system by adding items to his cart
// Cart manages list of Book instances added by user
// Order interacts with the User and the Cart, to get information about user and the books ordered
