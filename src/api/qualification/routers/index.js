import express from "express"; 
const qualificationRouter = express.Router();

import qualificationEdit from "../controllers/patch.js";
import allQualification from "../controllers/get.js";

qualificationRouter.patch("qualification/:id", qualificationEdit);
qualificationRouter.get("/qualification", allQualification);

export default qualificationRouter;