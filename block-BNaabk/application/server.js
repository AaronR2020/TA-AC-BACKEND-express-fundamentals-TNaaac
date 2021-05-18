var express=require('express');
//create server
app=express();
app.listen(3000)
app.get('/index',(req,res)=>{
    res.send("welcome to index page")
})