import express from "express"; 
const videosRouter = express.Router();

import upload from "../controllers/post.js";
import { videosId , listVideos } from "../controllers/get.js";
import videoEdit from "../controllers/patch.js";
import videoDelete from "../controllers/delete.js";

//videos

//Cargar video
videosRouter.post("/upload", upload);

//Consultar videos
videosRouter.get("/list", listVideos);
videosRouter.get("/:id", videosId);

//Modificar videos
videosRouter.patch("/:id", videoEdit);

//Eliminar videos
videosRouter.delete("/:id", videoDelete);

export default videosRouter;