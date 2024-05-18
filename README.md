
# Online Bookstore Application

This project is simple implementation of the bookstore. Users can add books to their cart, and make orders. They can also calculate total price of the order based on their cart, and display a summary.


___


## Entities
- Book - Represents book in a bookstore. It is base class for fiction books and non fiction books.
- FictionBook - Represents the fiction book, extends base Book class.
- NonFictionBook - Repesents the non fiction book, extends base Book class.
- User - Represents user of the bookstore.
- Order - Represents order placed in the store by user. It include books inside user cart.
- Cart - Represent cart for the user, it includes books which user adds.


___


## Usage

### Creating new books

You can create instances of books using FictinoBook and NonFictionBook

Example:

```javascript
const FictionBook = require('./entities/books/fictionBook.entity');
const NonFictionBook = require('./entities/books/nonFictionBook.entity');

const book1 = new FictionBook("The Lord of The Rings", "J.R.R Tolkien", "9788845292613", 12.99, true, "Fantasy");
const book2 = new FictionBook("1984", "George Orwell", "9780198185215", 15.99, true, "Science fiction");
const book3 = new NonFictionBook("Crime and Punishment", "Fyodor Dostoevsky", "9780198709701", 10.99, true, "Philosophical novel");
```



### Creating new users

You can create instances of user like this:

```javascript
const User = require('./entities/user.entity');

const user1 = new User("John", "john@example.com", "1");
const user2 = new User("Jane", "jane@example.com", "2");
```



### Creating cart and managing books in it

you can create cart and manage books by using:

```javascript
const cartUser1 = new Cart();

cartUser1.addBook(book1);
cartUser1.removeBook(book1);
```


### Creating orders and displaying summary

you can create orders and display summary like this:

```javascript
const Order = require('./entities/order.entity');

const orderUser1 = new Order(user1, cartUser1.items);
orderUser1.summary();
```

___


## Running the application

Run `homework8.js` file using node

```bash
node homework8.js
````

