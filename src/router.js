import express from "express"; 
const router = express.Router(); 
import register from "./api/users/controllers/post.js";
import login from "./api/users/controllers/login.js";
import { serverRead , userId , listUsers , preordain} from "./api/users/controllers/get.js";
import userEdit from "./api/users/controllers/put.js"
import userDelete from "./api/users/controllers/delete.js";

router.get("/", serverRead);

//Crear el usuario
router.post("/register", register);
router.post("/login", login);

//Leer el usuario
router.get("/users", listUsers); 
router.get("/users/:id", userId);

//Actualizar el usuario
router.put("/users/:id", userEdit);

//Eliminar el usuario
router.delete("/users/:id", userDelete);
router.get("*", preordain);


export default router; 