import User from "../../../models/user.js";
import { schemaRegister } from "./validation.js";

export const register = async (request, response, next) => { 

//Registro 
  const {error} = schemaRegister.validate(request.body);
  if (error) { 
  return response.status(400).json({error: error.details[0].message}) 
  }

  try {

  //Lectura de datos
  const { name , email , rol } = request.body;

  //Nombre de teacher unico
  const nameRegistered = await User.findOne({ name });
  if (nameRegistered) {
  return response.status(400).json({error:"Name Registered"})
  }

  //correo unico
  const emailRegistered = await User.findOne({ email });
  if (emailRegistered) {
    return response.status(400).json({error:"Email Registered"})
  }

  //Creación 
    const user = new User({
      name: name.toUpperCase(),
      email, 
      rol
    });
    
    const userCreated = await user.save();
    response.status(201).json({
      saved:("Ok"),
      data: userCreated
    })

  } catch (error) { 
    next (error);
  };
}

export default register;