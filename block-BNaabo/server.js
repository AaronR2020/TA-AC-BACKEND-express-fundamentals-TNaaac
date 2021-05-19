//question 1
express=require('express')
app1=express()
app1.listen(4000,()=>{
    console.log("Port:4000");
})
//json value to req.body
app1.use(express.json());
//form value to req.body
app1.use(express.urlencoded({
    extended:false
}));


app1.post('/json',(req,res)=>{
    console.log(req.body);
})
app1.post('/contact',(req,res)=>{
    console.log(req.body);
})

app1.post('./stuff',(req,res)=>{
    app.use(express.static(__dirname + './public'));
    res.sendFile(__dirname + './index.html');
});

