import express from "express"; 
import { port } from "./config/index.js"; 
import "./config/dbConnection.js"; 
import bodyParser from "body-parser"; 
import middlewareErrors from "./api/errors/errors.js";
import usersRouter from "./api/users/routers/index.js";
import videosRouter from "./api/videos/routes/index.js";
import qualificationRouter from "./api/qualification/routers/index.js";
import { preordain } from "./api/users/controllers/get.js";

const app = express(); 

//API´s
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
import { lecturaServidor } from "./api/users/controllers/get.js";
app.get("/", lecturaServidor);
app.use("/api/users", usersRouter);
app.use("/api/videos", videosRouter);
app.use("/api/qualification", qualificationRouter);

//Errores
app.use(middlewareErrors);

//Dejar siempre de ultimas
app.use("*", preordain); 

app.listen(port, (error) => { 
  if(error) {
    console.log("Server Error: Failed");
    process.exit(1);
  }
  console.log("Server listening in port " + port);
});