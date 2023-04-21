//Archivo principal, se ejecuta al iniciar el servidor
import express from "express"; //Servidor
import { port } from "./config/index.js"; //servidor importar variable de puerto
import "./config/dbConnection.js"; //Lee el respectivo archivo y se conecta a la bd, y siempre poner extensión de archivo
import router from "./router.js"; //¿cambiar nombre de roueter?
import bodyParser from "body-parser"; // funciona como un middleware

const app = express(); //Servidor

//Capturar body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // habilitando la lectura de las solicitudes en json con parser
app.use("/api", router);
 
app.listen(port, (error) => { //Servidor, permite que el puerto escuche
  if(error) {
    console.log("Server Error: Failed");
    process.exit(1);
  }
  console.log("Server listening in port " + port);
});


