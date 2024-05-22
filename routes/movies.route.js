
import  express from 'express';
import { MovieIndex, MovieUpdate,MovieCreate,MovieDelete } from '../controllers/movies.controller.js'
const router = express.Router();



//R -reading movies
router.get("/",MovieIndex)

//C -CREATING movies
router.post("/",MovieCreate)

//U -UPDATING movies
router.put("/:id",MovieUpdate)
//D -deleting movies
router.delete("/:id",MovieDelete)
export default router;