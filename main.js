import express from 'express';
import movieRoutes from './routes/movies.route.js'
const app=express()
const port = 3000;


app.get("/",(req,res)=>{
    res.json({"msg":"hello world!!!!"})
});

//crud of movie
   app.use('/movies',movieRoutes)

app.listen(port,()=>{
    console.log("the server is running on locallost:", port);

})
