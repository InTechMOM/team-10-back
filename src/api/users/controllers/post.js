import User from "../../../models/user.js";
import { schemaRegister , schemaLogin } from "./validation.js";

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
    
  //Creación 
    const user = new User({
    name: request.body.name,
    lastname: request.body.lastname,
    email: request.body.email,
    rol: request.body.rol
  });

  try { 
    const Cluster0 = await user.save();
    response.status(200).json({
      saved:("Ok"),
      data: Cluster0
    })

  } catch (error) { 
    next (error);
  };
}

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