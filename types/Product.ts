export type Product = {
    id : number,
    name : string,
    marca : string,
    stock : number,
    description? : string,
    precio: number
}

export type AddProductType = Omit<Product,'id'>

