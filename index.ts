import express from "express";
import bodyParser from "body-parser";
import { getData } from "./services/getData";
import { addProduct } from "./services/addProduct";

const cors = require('cors')

const {products} = getData()

const app = express();


app.use(bodyParser.json());
app.use(cors())

app.get("/product/all", (_req, res) => {
  res.status(200).json(products);
});

app.post("/add", (req, res) => {
  const { name, marca, stock, description ,precio} = req.body;
  try {
    if (!name || !marca) throw new Error("Name or Marca is empty");
    res.status(200).json(addProduct({name,marca,stock,description,precio}, products));
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

app.put("/product/edit", (req, res) => {  
  const { name, marca, id, description, stock, precio} = req.body;
  const index = products.findIndex(product => product.id === id);

  if (index === -1)
    return res.status(400).json({ message: "Product not found - 400" });
    products[index] = { ...products[index], name, marca,description, stock,precio}
  res.status(200).json(products[index]);
});

app.get('/product/:id', (req,res) => {
  const id  = Number(req.params.id)
  const item = products.find( prod => prod.id === Number(id))
  if(item) res.status(200).json(item)
  res.status(400).json({message : 'Product not found - 400'})
})

app.delete('/product/delete/:id', (req, res) => {
  const id = Number(req.params.id)
  const index = products.findIndex(product => product.id === id);
  if (index === -1) return res.status(400).json({message : "El ID ingresado no se encuentra en la BD  "})
  res.status(200).json(products.splice(index,1))
});



app.listen(3000);
