import express from "express"; 
const router = express.Router();

import register from "./api/users/controllers/post.js";
import login from "./api/users/controllers/login.js";
import { lecturaServidor , userId , listUsers , preordain} from "./api/users/controllers/get.js";
import userEdit from "./api/users/controllers/put.js"
import userDelete from "./api/users/controllers/delete.js";
import upload from "./api/videos/controllers/post.js";
import { videosId , listVideos } from "./api/videos/controllers/get.js"
import videoEdit from "./api/videos/controllers/patch.js";
import videoDelete from "./api/videos/controllers/delete.js";

router.get("/", lecturaServidor);

//user

//Crear el usuario
router.post("/users/register", register);
router.post("/users/login", login);

//Leer el usuario
router.get("/users/list", listUsers); 
router.get("/users/:id", userId);

//Actualizar el usuario
router.put("/users/:id", userEdit);

//Eliminar el usuario
router.delete("/users/:id", userDelete);

//video
router.post("/upload", upload);
router.get("/videos", listVideos);
//router.get("/videos/:id", videosId); //opción 1
router.get("/videos/author", videosId); //opción 2
router.patch("/videos/:id", videoEdit);
router.delete("/videos/:id", videoDelete);

//SIEMPRE DEJAR DE ULTIMA
router.get("*", preordain);

export default router;