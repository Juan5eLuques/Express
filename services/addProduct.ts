import { AddProductType, Product } from "types/Product";

export const addProduct  = (product : AddProductType , listProducts : Product[]) : Product => {
    const { name , marca , stock } = product
    const id = new Date().getTime()
    const newProduct = {id,name,marca,stock}
    listProducts.push(newProduct)

    return newProduct
}