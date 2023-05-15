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
 * /api/users/login:
 *  post:
 *   summary: Access of users
 *   tags: [Login]
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
 *    400:
 *     description: Unauthorized Access
 *    500:
 *     description: UnKwnown Error 
 */


const login = async (request, response, next) => {

  // Login
  const {error} = schemaLogin.validate(request.body);
  if (error) { 
  return response.status(400).json({error: "Bad Request"}) 
  };

  //Acceso
  const userVal = await User.findOne({ email:request.body.email , rol:request.body.rol }) 
  if (!userVal) return response.status(400).json({error: "Unauthorized Access"});
   response.status(200).json("Welcome " + userVal.firstName + " " + userVal.lastName)

 next (error);
}

export default login ;