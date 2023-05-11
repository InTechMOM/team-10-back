import mongoose from "mongoose"; 
import { mongodb_uri } from "./index.js";

mongoose
.connect(mongodb_uri)
.then(() => console.log("Database is Connected"))
.catch((error) => console.error(error));