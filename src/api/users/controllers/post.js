import User from "../../../models/user.js";
import { schemaRegister } from "./validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     properties:
 *      firstName:
 *        type: string
 *      lastName:
 *        type: string
 *      email:
 *        type: string
 *      rol:
 *        type: string
 *     required:
 *      - firstName
 *      - lastName
 *      - email
 *      - rol
 *     example:
 *      firstName: nicole
 *      lastName: castro
 *      email: some@example.com
 *      rol: Soy Docente
 * 
 */

/**
 * @openapi
 * /api/users/register:
 *  post:
 *   summary: Creation of users
 *   tags: [User]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    201:
 *     description: User Created
 *    400:
 *     description: Bad Request
 *    500:
 *     description: UnKwnown Error 
 */

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