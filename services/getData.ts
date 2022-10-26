import e from "express";
import { Product } from "types/Product";

export const getData = () => {

    const products : Product[] =  [
        {
            id:1,
            name:'Televisor',
            marca : 'LG',
            stock : 4  
        },
        {
            id:2,
            name:'PC',
            marca : 'HP',
            stock : 2
        },
        {
            id:3,
            name:'Tostadora',
            marca : 'Express',
            stock : 5
        },
        {
            id:4,
            name:'Celular',
            marca : 'Iphone',
            stock : 4  
        },
        
        ]

        return { products }

}
