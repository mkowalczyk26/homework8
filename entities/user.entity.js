class User { // represents user of bookstore
    constructor(name, email, userId) { //constructor for creating user instance
        this._name = name; //name of user
        this._email = email; //email of user
        this._userId = userId; // identifier for user
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

    set userId(userId) {
        this._userId = userId;
    }

}

module.exports = User;