import { Order } from "./Order.model"
import { Product } from "./Product.model"
import { Role } from "./Role.model"
import { User } from "./User.model"

export class OrderLine {

    idOrderLine!:number
    qty!:number

    product!:Product
    order!:Order

    constructor() {}
    
}