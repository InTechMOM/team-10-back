import mongoose from "mongoose"; 
import User from "../../../models/user.js";
import VideosProject from "../../../models/video.js";
import { SchemaUpdate } from "./validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    VideosprojectUpdateSchema:
 *     type: object
 *     properties:
 *      email:
 *        type: string
 *      url:
 *        type: string
 *      nameTeacher:
 *        type: string
 *     required:
 *      - url
 *      - nameTeacher
 *     example:
 *      url: https://www.youtube.com/watch?v=T1QFGwOnQxQ
 *      nameTeacher: Nicole Castro
 */

/**
 * @openapi
 * /api/videos/{id}/qualification:
 *  patch:
 *   summary: Update a video for id video
 *   tags: [Videos]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The video id
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/VideosprojectUpdateSchema'
 *   responses:
 *    201:
 *     description: Video Update
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: Video Not Found
 *    422:
 *     description: Id Not Valid
 *    500:
 *     description: UnKwnown Error 
 */


//Modifica video por su propio id (unidad)
const videoEdit = async (request, response, next) => { 
  const id = request.params.id
  if (!mongoose.isValidObjectId(id)) {
    return response.status(422).json({message: "Id Not Valid"})
   }
  const {error} = SchemaUpdate.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
  }
  
  //Busqueda por Id del video
  const { url , nameTeacher } = request.body
 try { 
    //Busqueda por nombre del docente en User
    const teacherId = await User.findOne({name:nameTeacher.toUpperCase(), rol:"Soy Docente" }).populate([{
      path: "teacherId", 
      select: "_id  ",
      strictPopulate: false
    }])
  
    if (!teacherId) {
      return response.status(404).json({
        error:"Teacher not register"
      })
    }
    const videoUpdate = await VideosProject.findByIdAndUpdate(id , { 
      url,
      teacherId: teacherId._id, 
      ...nameTeacher && {nameTeacher:nameTeacher.toUpperCase()}}, {new:true});
    if (!videoUpdate) {
      return response.status(404).json({
        message:"Video Not Found"})
        }
      return response.status(201).json({
       update:("Ok"),
       data: videoUpdate
      })
  } catch (error) { 
    next (error);
  };
}

export default videoEdit;