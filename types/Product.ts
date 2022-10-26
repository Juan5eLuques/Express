export type Product = {
    id : number,
    name : string,
    marca : string,
    stock : number,
}

export type AddProductType = Omit<Product,'id'>

