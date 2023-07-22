const express=require('express')
const cors=require('cors')
const productList=require('./products.json')
const app=express()

app.use(express.json())
app.use(cors())

app.get('/products',(req,res)=>{
    res.json(productList)
})

app.get('/products/:id',(req,res)=>{
    const {id} = req.params
    const filterProduct=productList.filter((product)=>product.id===parseInt(id))
    res.json(filterProduct)
})

const PORT=3001
app.listen(PORT,()=>console.log(`started at ${PORT}`))