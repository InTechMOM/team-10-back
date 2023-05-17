import express from "express"; 
import { port } from "./config/index.js"; 
import "./config/dbConnection.js"; 
import router from "./router.js"; 
import bodyParser from "body-parser"; 
import middlewareErrors from "./api/errors/errors.js";

const app = express(); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 
app.use("/api", router);

app.use(middlewareErrors); 

app.listen(port, (error) => { 
  if(error) {
    console.log("Server Error: Failed");
    process.exit(1);
  }
  console.log("Server listening in port " + port);
});