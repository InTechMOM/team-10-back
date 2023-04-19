import express from "express";
const app = express();
import userRouters from "../routers/index.js";

//middleware
app.use("/api", userRouters);


// revisar archivo en mentoria Si lo dejo aca no me funciona

