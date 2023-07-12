// EXTERNAL IMPORTS
import { v4 as uuidv4 } from "uuid"

// INTERNAL IMPORTS
import {UserT, ItemT} from "./types"

export class User implements UserT{

    id:string;
    name:string;
    age:number;
    cart:Item[];
    
    constructor(name:string, age:number){
        this.id = uuidv4()
        this.name = name,
        this.age = age,
        this.cart = []
    };


    addToCart(item:Item):void{
        this.cart.push(item)
    };  
    
    removeFromCart(item:Item):void{
        this.cart.forEach((name, i) => {
            if(name === item) this.cart.splice(i,1);
          });
    };
    
    removeQuantityFromCart(item:Item, remove:number):void{
        if (remove <= item.quantity){
            item.quantity -= remove;
        }else{
            console.log("That's more than you have!");
        };
    };

    cartTotal():number{
        let total = 0;
        for (let item of this.cart){
            total += item.price
        };
        return total
    };
    
    printCart():void{
        if (this.cart.length > 0){
            console.log(this.cart);
        }else{
            console.log("You have nothing in your cart.")
        };
    };
};

export class Item implements ItemT{

    id: string;
    name: string;
    price: number;
    description: string;
    quantity: number;
    
    constructor(name:string, price:number, description:string, quantity:number){
        this.id = uuidv4()
        this.name = name,
        this.price = price,
        this.description = description
        this.quantity = quantity
    };

};

