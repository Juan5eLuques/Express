import { Product } from "types/Product";

export const getData = () => {

    const products : Product[] =  [
        {
            id:1,
            name:'Televisor',
            marca : 'LG',
            stock : 4 ,
            description:'Televisor 52" ',
            precio: 20.000,
        },
        {
            id:2,
            name:'PC',
            marca : 'HP',
            stock : 2,
            description:'PC completa sin mouse ni teclado',
            precio: 150.000
        },
        {
            id:3,
            name:'Tostadora',
            marca : 'Express',
            stock : 5,
            description:'Tostadora electrica',
            precio: 14.000,
        },
        {
            id:4,
            name:'Celular',
            marca : 'Iphone',
            stock : 4,
            description:'Iphone 12',
            precio: 250.000
        },
        
        ]

        return { products }

}
