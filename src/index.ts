// INTERNAL IMPORTS
import {User, Item} from "./functions"


function createUser(name:string, age:number):User{
    let newUser = new User(name, age)
    return newUser
};  

function createItem(name:string, price:number, description:string, quantity:number):Item{
    let newItem = new Item(name, price, description, quantity)
    return newItem
};


let jim = createUser("Jimmy", 23);
let pear = createItem("pear", 1.00, "peary good", 3);
let bread = createItem("bread", 5.75, "this was the yeast i could do", 2);
let corn = createItem("corn", 0.50, "im not making a corny pun", 1);
let apple = createItem("apple", 1.50, "sure did apple-y myself for this homework", 5);

jim.addToCart(pear);
jim.printCart();
console.log(`Cart total: ${jim.cartTotal()}`);


jim.addToCart(bread);
jim.addToCart(apple);
jim.addToCart(corn);
jim.printCart();
console.log(`Cart total: ${jim.cartTotal()}`);


jim.removeFromCart(apple);
jim.removeFromCart(pear);
jim.removeFromCart(bread);
jim.removeFromCart(corn);

jim.printCart();
console.log(`Cart total: ${jim.cartTotal()}`);


