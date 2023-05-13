import express from "express"; 
const qualificationRouter = express.Router();

import qualificationEdit from "../controllers/patch.js";
import allQualification from "../controllers/get.js";


qualificationRouter.patch("/:id", qualificationEdit);
qualificationRouter.get("", allQualification);

export default qualificationRouter;