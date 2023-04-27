import User from "../../../models/user.js";
import schemaLogin from "./validation.js";

export const login = async (request, response, next) => {

  // Login
  const {error} = schemaLogin.validate(request.body);
  if (error) { 
  return response.status(400).json({error: error.details[0].message}) 
  };

  //Acceso
  const userVal = await User.findOne({ email:request.body.email }) 
  if (!userVal) return response.status(400).json({error: "Unregistered User"});
    const rolVal = await User.findOne({ rol:request.body.rol }) 
    if (!rolVal) return response.status(400).json({error: "Unauthorized Access"});

   response.status(200).json("Welcome ")

 next (error);
}