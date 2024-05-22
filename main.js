import express from 'express';
const app=express()
const port = 3000;


app.get("/",(req,res)=>{
    res.json({"msg":"hello world"})
});

//crud of movie

//R -reading movies
app.get("/movies",()=>{

})

//C -CREATING movies
app.post("/movies",()=>{

})

//U -UPDATING movies
app.put("/movies/:id",()=>{

})
//D -deleting movies
app.delete("/movies/:id",()=>{

})
app.listen(port,()=>{
    console.log("the server is running on locallost:", port);

})
