//Logica de la app
import express from "express";
import { port } from "./config/index.js";
import mongoose from "mongoose"; 
import { mongodb_uri } from "./config/index.js";
import userRouters from "./api/users/routers/index.js"

const app = express();

app.get("/", (request, response, error) => {
  response.send("Status:OK")
})

app.use("/api", userRouters);

mongoose
.connect(mongodb_uri)
.then(() => console.log("Database is Connected"))
.catch((error) => console.error(error));

app.listen(port, (error) => { 
  if(error) {
    console.log("Server Error: Failed");
    process.exit(1);
  }
  console.log("Server listening in port " + port);
})


