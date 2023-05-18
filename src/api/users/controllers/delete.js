import mongoose from "mongoose"; 
import User from "../../../models/user.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     properties:
 *      name:
 *        type: string
 *      email:
 *        type: string
 *      rol:
 *        type: string
 *     required:
 *      - name
 *      - email
 *      - rol
 *     example:
 *      name: Samuel Reyes
 *      email: some@example.com
 *      rol: Soy Docente
 * 
 */

/**
 * @openapi
 * /api/users/{id}:
 *  delete:
 *   summary: Delete a user
 *   tags: [User]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The user id
 *   responses:
 *    200:
 *     description: User
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        items:
 *         $ref: '#/components/schemas/User'
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: User Not Found
 *    422:
 *     description: Id Not Valid
 *    500:
 *     description: UnKwnown Error 
 */

const userDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     if (!mongoose.isValidObjectId(id)) {
       return response.status(422).json({message: "Id Not Valid"})
      }
     const userDelete = await User.findByIdAndDelete(id);
     if (!userDelete) {
      return response.status(404).json({
        message:"User Not Found"})
      }
      return response.status(200).json({
       delete:("Ok"),
       data: userDelete
     })
   } catch (error) { 
     next (error);
   };
 }

export default userDelete;

