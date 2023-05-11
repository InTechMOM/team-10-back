import User from "../../../models/user.js";
import { schemaRegister } from "./validation.js";

/**
 * @openapi
 * /users:
 *  post:
 *   produces:
 *    application/json
 *   parameters:
 *    name: name
 *    in:
 *    required: true
 *    type: string
 *   description: Creation API for users
 *   responses:
 *    200:
 *     description: Bad request
 *    400:
 *     description: User created
 */

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
    const user = new User(request.body);

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

export default register;