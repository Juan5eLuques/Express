const express = require('express')()

express.get('/',(req,res)=>{
    res.send("Hello world")
})

express.listen(3000, () => {
    console.log("Estoy escuchando en el puerto 3000")
})