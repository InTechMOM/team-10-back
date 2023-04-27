import express from "express"; 
const router = express.Router(); 
import register from "./api/users/controllers/post.js";
import login from "./api/users/controllers/login.js";
import { lecturaServidor , userId , listUsers , preordain} from "./api/users/controllers/get.js";
import userEdit from "./api/users/controllers/put.js"
import userDelete from "./api/users/controllers/delete.js";

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

//Eliminar el usuario
router.delete("/users/:id", userDelete);


export default router; 