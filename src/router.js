import express from "express"; 
const router = express.Router(); 
import { register , login }  from "./api/users/controllers/post.js";
import { lecturaServidor , userId , listUsers , preordain} from "./api/users/controllers/get.js";

router.get("/", lecturaServidor);

//Crear el usuario
router.post("/users/register", register);
router.post("/users/login", login);

//Leer el usuario
router.get("/users/list", listUsers); 
router.get("/users/:id", userId);
router.get("*", preordain);

export default router; 