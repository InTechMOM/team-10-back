//Conexión de la base de datos
import mongoose from "mongoose"; 
import { mongodb_uri } from "./index.js";

mongoose // Conexión a la base de datos, el metodo para conectar la uri, y es una promesa
.connect(mongodb_uri)
.then(() => console.log("Database is Connected"))
.catch((error) => console.error(error));