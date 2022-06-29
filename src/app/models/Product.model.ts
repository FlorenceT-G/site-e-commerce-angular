import { Categorie } from "./Categorie.model"

export class Product {

    idProduct!:number
    labelProduct!:string
    img!:string
    stock!:number

    cat!:Categorie

    constructor() {}
    
}