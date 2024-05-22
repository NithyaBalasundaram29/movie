import express from 'express';

const app=express()
const port = 3000;
app.get("/",(req,res)=>{
    res.json({"msg":"hello world"})
});
app.listen(port,()=>{
    console.log("the server is running on locallost:", port);

})
