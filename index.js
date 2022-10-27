const express =require('express')
const app =express()
const cors=require('cors')
const port =5000

const categoryData=require('./Data/category.json')
const tutorialData=require('./Data/tutorial.json')

app.use(cors())
app.get('/',(req,res)=>{
    res.send('Learning website api adde')
})

app.get('/tutorial',(req,res)=>{
    res.send(categoryData)
})

app.get('/category/:id',(req,res)=>{
    const id =req.params.id
    const categoryData=tutorialData.filter(td => td.category_id == id)
    res.send(categoryData)
})

app.get('/tutorial/:id',(req,res)=>{
    const id =parseInt(req.params.id)
    const tutorialId=tutorialData.find(td => td.id === id)
    res.send(tutorialId)
})

app.get('/turorial/All',(req,res)=>{
    res.send(tutorialData)
})

app.listen(port ,()=>{
    console.log('learning website running in',port)
})