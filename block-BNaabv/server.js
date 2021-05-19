express=require('express');
logger=require('morgan');
cookiesVal=require('cookie_parse')
app=express();
app.listen(3000);

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(logger('dev'));

app.get('/',(req,res)=>{

    res.send('<h2>Welcome to express.js </h2>')
});
app.use('/',(req,res,next)=>{
    res.cookies('name','Aaron');
    next();
})
app.get('/about',(req,res)=>{
    res.send('my name is qwerty');
});

app.post('/form',(req,res)=>{
    res.send(res.body);
});

app.post('/json',(req,res)=>{
    res.send(res.body);
});


app.use('/users/:username',(req,res,next)=>{
    res.send(req.params.username)
});

app.use((req,res,next)=>{
    res.send('PAGE NOT FOUND 404');
})
