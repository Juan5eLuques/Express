import express from "express";
import bodyParser from "body-parser";
import { Product } from "types/Product";

const app = express();

app.use(bodyParser.json());


const product : Product[] =  [
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

app.get("/product", (req, res) => {
  res.status(200).json(product);
});

app.post("/product", (req, res) => {
  const { name, marca, stock } = req.body;
  try {
    if (!name || !marca) throw new Error("che pasame el name y marca");
    product.push({ id: new Date().getTime(), name, marca, stock });
    res.status(200).json(...product.slice(-1));
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.put("/product", (req, res) => {
  const { name, marca, id } = req.body;
  const index = product.findIndex(product => product.id === id);

  if (index === -1)
    return res.status(400).json({ message: "Product not found - 400" });

  product[index] = { ...product[index], name, marca };
  res.status(200).json(product[index]);
});

app.delete("/product/id", (req, res) => {
    const { id } = req.body
    const index = product.findIndex(product => product.id === id);
    if (index === -1) return res.status(400).json({message : "El ID ingresado no se encuentra en la BD  "})
    res.status(200).json(product.splice(index,1))

});

app.listen(3000);