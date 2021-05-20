express=require('express');
logger=require('morgan');
cookieParse=require('cookie-parser');

app=express();
app.listen(4000,()=>{console.log("port no: 4000");});

//middleware
app.use(logger('dev'))
app.use(cookieParse());
//formMiddleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
//static folder upload
app.use(express.static(__dirname + '/public'));

//route
app.get('/',(req,res)=>{
    console.log(req.method);
    res.sendFile(__dirname + '/index.html');
})

app.get('/user.html',(req,res)=>{
    console.log(req.method);
    res.sendFile(__dirname + '/user.html');
});

app.get('/project.html',(req,res)=>{
    console.log(req.method);
    res.sendFile(__dirname + '/project.html');
})



app.use((req,res,next)=>{
    res.send('404 error');
})

app.use((err,req,res,next)=>{
    console.log(err);
    res.send(res);
})