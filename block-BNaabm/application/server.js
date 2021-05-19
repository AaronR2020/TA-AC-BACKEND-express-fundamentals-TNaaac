express=require('express')
app=express();
app.listen(4000,()=>{console.log("port 4000");})
function middlewear(req,res,next){
    console.log(req.url,req.method);
    next();
}
app.use('/',middlewear);
