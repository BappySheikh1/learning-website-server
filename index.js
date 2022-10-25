const express =require('express')
const app =express()
const cors=require('cors')
const port =5000

const categoryData=require('./Data/category.json')

app.use(cors())
app.get('/',(req,res)=>{
    res.send('Learning website api adde')
})

app.get('/tutorial',(req,res)=>{
    res.send(categoryData)
})

app.listen(port ,()=>{
    console.log('learning website running in',port)
})