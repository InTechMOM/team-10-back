// todas las rutas de la entidad 
import express from "express";
const router = express.Router();
import bodyParser from "body-parser";
import userSchema from "../../../models/user.js";

//Creación de un usuario
router.post("/users", (request, response, error) => {
  const user = userSchema(request.body);
  user
  .save()
  .then(() => response.json("Estatus: 200"))
  .then(() => response.body("Ok"))
  .catch((error) => response.json({message:error}))
});

export default router;


//export { router as userRouters }; //otra opcion de ES6
//module.exports = router;
//se cambio impor por require y expor por module.export