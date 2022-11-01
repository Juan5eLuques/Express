import { AddProductType, Product } from "types/Product";

export const addProduct  = (product : AddProductType , listProducts : Product[]) : Product => {
    const { name , marca , stock , description, precio} = product
    const id = new Date().getTime()
    const newProduct = {id,name,marca,stock,description, precio}
    listProducts.push(newProduct)

    return newProduct
}