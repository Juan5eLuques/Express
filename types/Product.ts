export type Product = {
    id : number,
    name : string,
    marca : string,
    stock : number,
    description? : string,
}

export type AddProductType = Omit<Product,'id'>

