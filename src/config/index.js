//variables de entorno

// Import externas
import * as dotenv from "dotenv";  //Dep que permite traer las variables de entorno
dotenv.config();

// Export internas
export const port = process.env.PORT; //Se exportan las variables
export const mongodb_uri= process.env.MONGODB_URI ;




