import express from "express"; 
const usersRouter = express.Router();

import register from "../controllers/post.js";
import login from "../controllers/login.js";
import { userId , listUsers} from "../controllers/get.js";
import userEdit from "../controllers/put.js"; 
import userDelete from "../controllers/delete.js";

//user

//Crear el usuario
usersRouter.post("/register", register);
usersRouter.post("/login", login);

//Leer el usuario
usersRouter.get("", listUsers); 
usersRouter.get("/:id", userId);

//Actualizar el usuario
usersRouter.put("/:id", userEdit);

//Eliminar el usuario
usersRouter.delete("/:id", userDelete);


export default usersRouter;