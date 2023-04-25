import express from "express"; 
const router = express.Router(); 
import { register , login }  from "./api/users/controllers/post.js";
import lecturaServidor from "./api/users/controllers/get.js";

router.get("/", lecturaServidor);
router.post("/users/register", register);
router.post("/users/login", login);

export default router; 




