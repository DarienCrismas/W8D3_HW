"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = exports.User = void 0;
// EXTERNAL IMPORTS
const uuid_1 = require("uuid");
class User {
    constructor(name, age) {
        this.id = (0, uuid_1.v4)();
        this.name = name,
            this.age = age,
            this.cart = [];
    }
    ;
    addToCart(item) {
        this.cart.push(item);
    }
    ;
    removeFromCart(item) {
        this.cart.forEach((name, i) => {
            if (name === item)
                this.cart.splice(i, 1);
        });
    }
    ;
    removeQuantityFromCart(item, remove) {
        if (remove <= item.quantity) {
            item.quantity -= remove;
        }
        else {
            console.log("That's more than you have!");
        }
        ;
    }
    ;
    cartTotal() {
        let total = 0;
        for (let item of this.cart) {
            total += item.price;
        }
        ;
        return total;
    }
    ;
    printCart() {
        if (this.cart.length > 0) {
            console.log(this.cart);
        }
        else {
            console.log("You have nothing in your cart.");
        }
        ;
    }
    ;
}
exports.User = User;
;
class Item {
    constructor(name, price, description, quantity) {
        this.id = (0, uuid_1.v4)();
        this.name = name,
            this.price = price,
            this.description = description;
        this.quantity = quantity;
    }
    ;
}
exports.Item = Item;
;
