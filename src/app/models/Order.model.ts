import { OrderLine } from "./OrderLine.model"
import { Role } from "./Role.model"
import { User } from "./User.model"

export class Order {

    idOrder!:number
    dateOrder!:Date

    u!:User

    lOrderLines!:OrderLine[]

    constructor() {}
    
}