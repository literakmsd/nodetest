const express=require('express')

const app=express();

app.listen(3000,()=>console.log("listening on 3000"))

app.get('/',(req,res)=>{
    res.send('Hallo world')
})

app.get('/loaderio-93487e8f4d08ff7c50435fede0bb5b5d.html',(req,res)=>{
    res.send("loaderio-93487e8f4d08ff7c50435fede0bb5b5d")
})