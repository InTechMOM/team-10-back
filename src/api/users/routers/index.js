import express from "express"; 
const usersRouter = express.Router();

import register from "../controllers/post.js";
import login from "../controllers/login.js";
import { userId , allUsers} from "../controllers/get.js";
import userEdit from "../controllers/put.js"; 
import userDelete from "../controllers/delete.js";

//User

//Crear el usuario
usersRouter.post("/register", register);
usersRouter.post("/login", login);

//Leer el usuario
usersRouter.get("/users", allUsers); 
usersRouter.get("/users/:id", userId);

//Actualizar el usuario
usersRouter.put("users/:id", userEdit);

//Eliminar el usuario
usersRouter.delete("users/:id", userDelete);


export default usersRouter;