const express =require('express')
const app =express()
const cors=require('cors')
const port =5000

app.use(cors())
app.get('/',(req,res)=>{
    res.send('Learning website api adde')
})

app.listen(port ,()=>{
    console.log('learning website running in',port)
})