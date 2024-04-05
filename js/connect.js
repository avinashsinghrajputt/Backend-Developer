const connect =require("connect");
const app=connect();
function logger(req,res,next){
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger);
app.use((req,res)=>{
    res.sendDate("Hello world");
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});