express=require('express')
app=express();
app.listen(4000);

app.get('/',(req,res)=>{
    res.send("index page")
});

app.get('/about',(req,res)=>{
    res.send("about page")
});

app.use('/admin',(req,res)=>{
    next("Unauthorised access")
});

app.use((req,res,next)=>{
    res.send("404 page not found")
});


app.use((err,req,res,next)=>{
    res.send(err)
});


