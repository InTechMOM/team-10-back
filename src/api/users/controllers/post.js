import User from "../../../models/user.js";
import { schemaRegister } from "./validation.js";

export const register = async (request, response, next) => { 

//Registro 
  const {error} = schemaRegister.validate(request.body);
  if (error) { 
  return response.status(400).json({error: error.details[0].message}) 
  }

  //correo unico
  const emailRegistered = await User.findOne({ email:request.body.email });
  if (emailRegistered) {
    return response.status(400).json({error:"Email Registered"})
  }
    
  //Lectura de datos
  const { Name , email , rol } = request.body;

  //Creación 
    const user = new User({
      name: name.toUpperCase(),
      email, 
      rol
    });
    
  try { 
    const Cluster0 = await user.save();
    response.status(201).json({
      saved:("Ok"),
      data: Cluster0
    })

  } catch (error) { 
    next (error);
  };
}

export default register;