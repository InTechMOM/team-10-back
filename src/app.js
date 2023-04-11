import express from "express";
import { port } from "./config/index.js"; //Siempre poner .js

const app = express();

app.get("/", (request, response, error) => {
  response.send("Status:OK")
})

app.listen(port, (error) => { //Le dice a serv que escuche al puer, poniendolo en estado de ejecución

  if(error) {
    console.log("Server Error: Failed");
    process.exit(1);
  }
  console.log("Server listening in port " + port);
})