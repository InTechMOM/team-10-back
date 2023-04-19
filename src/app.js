//Import internas desde index.js
import express from "express";
import { port } from "./config/index.js"; //Siempre poner .js
import mongoose from "mongoose"; 
import { mongodb_uri } from "./config/index.js";

//Establece const
const app = express();

app.get("/", (request, response, error) => {
  response.send("Status:OK")7/Utilizarlo en post
})

//Base de Datos, Debe ir antes del listen
mongoose
.connect(mongodb_uri) //Se usa el metodo connect para vincular la URI(process.env para pasar el valor de la variable de entorno), y el segundo parametro son opciones de configuración
.then(() => console.log("Database is Connected")) //Promesa se resuelve satisfactoriamente (No poner comas)
.catch((error) => console.error(error));//Metodos encadenados

//Opción 2
mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected to MongoDB Atlas")).catch((error) => console.error(error));

//Comprobarlo npm run dev
app.listen(port, (error) => { //Le dice a serv que escuche al puer, poniendolo en estado de ejecución

  if(error) {
    console.log("Server Error: Failed");
    process.exit(1);
  }
  console.log("Server listening in port " + port);
})


