class User { // represents user of bookstore
    static idCounter = 1; // static property for handling user ID

    constructor(name, email) { //constructor for creating user instance
        this._name = name; //name of user
        this._email = email; //email of user
        this._userId = User.idCounter++; // identifier for user
    }

    get name() {
        return this._name;
    }

    get email() {
        return this._email;
    }

    get userId() {
        return this._userId;
    }


    set name(name) {
        this._name = name;
    }

    set email(email) {
        this._email = email;
    }
}

module.exports = User;