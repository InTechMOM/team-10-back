import mongoose from "mongoose"; 
import User from "../../../models/user.js";
import {schemaUpdate} from "./validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    UserUpate:
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
 *     example:
 *      name: Samuel Reyes
 * 
 */

/**
 * @openapi
 * /api/users/{id}:
 *  put:
 *    summary: Update a user
 *    tags: [User]
 *    parameters:
 *     - in: path
 *       name: id
 *       schema:
 *         type: string
 *       required: true
 *       description: The user id
 *    requestBody:
 *     required: true
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        $ref: '#/components/schemas/UserUpate'
 *    responses:
 *     201:
 *      description: User Update
 *     400:
 *      description: Something went wrong
 *     404:
 *      description: User Not Found
 *     409:
 *      description: name is assigned to another user
 *     422:
 *      description: Id Not Valid
 *     500:
 *      description: UnKwnown Error 
 */

//Validación de datos
const userEdit = async (request, response, next) => { 
  try { 
   const id = request.params.id
    if (!mongoose.isValidObjectId(id)) {
     return response.status(422).json({message: "Id Not Valid"})
    }
   const {error} = schemaUpdate.validate(request.body);
     if (error) { 
     return response.status(400).json({error: error.details[0].message}) 
     }
    
   const { name } = request.body;

   const userUpdate = await User.findByIdAndUpdate(id , {name:name.toUpperCase()} , {new:true});
   if (!userUpdate) {
    return response.status(404).json({
      message:"User Not Found"})
    }
    return response.status(201).json({
      update:("Ok"),
      data: userUpdate
    })
   } catch (error) { 
    if  (error.code === 11000) {
      return response.status(409).json({error:"name is assigned to another user"});
    } next (error);
   };
 }

export default userEdit;


