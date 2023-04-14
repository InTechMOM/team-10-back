// Archivo encargado de arrancar la aplicación

// Import externas primero

import * as dotenv from "dotenv"; 
dotenv.config();

// Export internas

export const port = process.env.PORT; 
export const mongodb_uri= process.env.MONGODB_URI ;




