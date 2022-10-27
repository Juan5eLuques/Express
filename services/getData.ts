import e from "express";
import { Product } from "types/Product";

export const getData = () => {

    const products : Product[] =  [
        {
            id:1,
            name:'Televisor',
            marca : 'LG',
            stock : 4 ,
            description:'una descripcion'
        },
        {
            id:2,
            name:'PC',
            marca : 'HP',
            stock : 2,
            description:'una descripcion'
        },
        {
            id:3,
            name:'Tostadora',
            marca : 'Express',
            stock : 5,
            description:'una descripcion'
        },
        {
            id:4,
            name:'Celular',
            marca : 'Iphone',
            stock : 4,
            description:'una descripcion'
        },
        
        ]

        return { products }

}
