
import  express from 'express';
const router = express.Router();



//R -reading movies
router.get("/",(req,res)=>{
    res.send("get all list movies")

})

//C -CREATING movies
router.post("/",(req,res)=>{
    res.send("create all movies")

})

//U -UPDATING movies
router.put("/:id",(req,res)=>{
    res.send("update all list movies")
})
//D -deleting movies
router.delete("/:id",(req,res)=>{
    res.send("delete all  movies")

})
export default router;