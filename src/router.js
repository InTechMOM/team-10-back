import express from "express"; 
const router = express.Router();

import { lecturaServidor } from "./api/users/controllers/get.js";


router.get("/", lecturaServidor);


export default router;

