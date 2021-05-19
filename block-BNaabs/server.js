express=require('express');
app=express()
app.listen(4000,()=>{
    console.log('4000:port');
});
app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/index.html")  
})
app.get('/new',(req,res)=>{
    res.sendFile(__dirname + "/new.html")  
})
//recheck > not correct
app.post('/newForm',(req,res)=>{
    res.send('Form send')
});
app.get('/users/:name',(req,res)=>{
    nameVal=req.params.name;
    console.log(nameVal);
    res.send(nameVal)
})
