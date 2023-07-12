import {Item} from "./functions";

export type UserT={
    id: string, 
    name: string,
    age: number,
    cart: Item[]
};


export type ItemT={
    id: string,
    name: string,
    price: number,
    description: string,
    quantity:number
};