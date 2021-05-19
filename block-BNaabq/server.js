express=require('express');
cookieparser=require('cookie-parser');
logger=require('morgan');

//create basic server
app=express();
app.listen(4000)

//create cookie
app.use(cookieparser())

app.use('/about',(req,res,next)=>{
    res.cookie('username','AaronR2020');
    next();
});
app.use((req,res,next)=>{
    console.log(req.cookie);
    next();
}
);

app.use(logger)



