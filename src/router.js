import express from "express"; 
const router = express.Router(); 
import { register , login }  from "./api/users/controllers/post.js";
import { lecturaServidor , userId , listUsers , preordain} from "./api/users/controllers/get.js";
import userEdit from "./api/users/controllers/put.js"

router.get("/", lecturaServidor);

//Crear el usuario
router.post("/users/register", register);
router.post("/users/login", login);

//Leer el usuario
router.get("/users/list", listUsers); 
router.get("/users/:id", userId);
router.get("*", preordain);

//Actualizar el usuario
router.put("/users/:id", userEdit);

export default router; 