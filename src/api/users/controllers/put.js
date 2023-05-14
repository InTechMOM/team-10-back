import User from "../../../models/user.js";
import {schemaUpdate} from "./validation.js";

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
 * /api/users/{id}:
 *  put:
 *   summary: Update a user
 *   tags: [User]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The user id
*   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/User'
 *   responses:
 *    201:
 *     description: User Update
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

const userEdit = async (request, response, next) => { 
   const id = request.params.id
   const {error} = schemaUpdate.validate(request.body);
     if (error) { 
     return response.status(400).json({error: error.details[0].message}) 
     }
    
   const user = User(request.body);
  try { 
     const userUpdate = await User.findByIdAndUpdate(id , request.body, {new:true});
     response.status(201).json({
        update:("Ok"),
        data: userUpdate
     })
   } catch (error) { 
     next (error);
   };
 }

export default userEdit;