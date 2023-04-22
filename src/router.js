import express from "express"; //middleware router de express
const router = express.Router(); //inicializams una constante para gestión las rutas, al inicializar debo exportarla
import register from "./api/users/controllers/post.js";
import lecturaServidor from "./api/users/controllers/get.js";

//import userRouters from "./api/users/routers/index.js";

//middleware , función que se ejecuta durante la petición
// Respuesta del servidor funcionando
router.get("/", lecturaServidor);

//Creación de un usuario
router.post("/register", register);

//Leer el usuario
//router.get("/users/{id}", lecturaServidor);



export default router; 




