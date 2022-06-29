import { Role } from "./Role.model"

export class User {

    id!:number
    nom!:string 
    prenom!:string
    dateNaissance!:Date
    email!:string
    username!:string
    password!:string

    role!:Role

    // lOrders: Order[]

    constructor() {}
    
}