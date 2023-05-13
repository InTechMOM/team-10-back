import express from "express"; 
const router = express.Router();

import register from "./api/users/controllers/post.js";
import login from "./api/users/controllers/login.js";
import { serverRead , userId , allUsers , preordain} from "./api/users/controllers/get.js";
import userEdit from "./api/users/controllers/put.js"
import userDelete from "./api/users/controllers/delete.js";
import upload from "./api/videos/controllers/post.js";
import { videosId , allVideos } from "./api/videos/controllers/get.js"
import videoEdit from "./api/videos/controllers/patch.js";
import videoDelete from "./api/videos/controllers/delete.js";

router.get("/", serverRead);

//user

//Crear el usuario
router.post("/register", register);
router.post("/login", login);

//Leer el usuario
router.get("/users", allUsers); 
router.get("/users/:id", userId);

//Actualizar el usuario
router.put("/users/:id", userEdit);

//Eliminar el usuario
router.delete("/users/:id", userDelete);

//video
router.post("/upload", upload);
router.get("/videos", allVideos);
router.get("/videos/:id", videosId); 
router.patch("/videos/:id", videoEdit);
router.delete("/videos/:id", videoDelete);

//SIEMPRE DEJAR DE ULTIMA
router.get("*", preordain);

export default router;