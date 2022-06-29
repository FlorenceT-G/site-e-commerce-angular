import { Product } from "./Product.model"

export class Categorie {

    idCategorie!:number
    labelCategorie!:string
    desc!:string

    lproducts!: Product[]

    constructor(){}
}