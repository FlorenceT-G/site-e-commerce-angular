import { OrderLine } from "./OrderLine.model"
import { Product } from "./Product.model"
import { Role } from "./Role.model"
import { User } from "./User.model"

export class CartLine {

    idCartLine!:number

    p!:Product
    qty!:number
    
    constructor(p:Product, qty:number) {
        this.p = p
        this.qty = qty
    }
    
}