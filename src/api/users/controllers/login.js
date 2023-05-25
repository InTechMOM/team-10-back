import User from "../../../models/user.js";
import { schemaLogin } from "./validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    Login:
 *     type: object
 *     properties:
 *      email:
 *        type: string
 *      rol:
 *        type: string
 *     required:
 *      - email
 *      - rol
 *     example:
 *      email: some@example.com
 *      rol: Soy Docente
 * 
 */

/**
 * @openapi
 * /api/login:
 *  post:
 *   summary: Access of users
 *   tags: [User]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/Login'
 *   responses:
 *    201:
 *     description: Access a user
 *    403:
 *     description: Unauthorized Access
 *    500:
 *     description: UnKwnown Error 
 */


const login = async (request, response, next) => {
try {
  // Login
  const {error} = schemaLogin.validate(request.body);
  if (error) { 
  return response.status(400).json({error: "Bad Request"}) 
  };

  //Acceso
  const userValidation = await User.findOne({ email:request.body.email , rol:request.body.rol }) 
  if (!userValidation)
  return response.status(403).json({error: "Unauthorized Access"});
   response.status(200).json("Welcome " + userValidation.name)
  } catch (error) { 
    next (error);
  };
}

export default login ;