import { CartLine } from "./CartLine.model"
import { OrderLine } from "./OrderLine.model"
import { Role } from "./Role.model"
import { User } from "./User.model"

export class Cart {

    idCart!:number
    lCartLines: CartLine[]

    constructor(lCartlines:CartLine[]) {
        this.lCartLines = lCartlines
    }
    
}