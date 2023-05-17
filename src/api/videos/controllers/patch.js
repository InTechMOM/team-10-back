import VideoProject from "../../../models/video.js";
import { SchemaUpdate } from "./validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    VideoprojectUpdateSchema:
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
 * /api/videos/{id}:
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
 *       $ref: '#/components/schemas/VideoprojectUpdateSchema'
 *   responses:
 *    201:
 *     description: Video Update
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: Video Not Found
 *    500:
 *     description: UnKwnown Error 
 */


//Modifica video por su propio id (unidad)
const videoEdit = async (request, response, next) => { 
  const id = request.params.id
  const {error} = SchemaUpdate.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
  }
  
  //Busqueda por Id del video
  const { url , nameTeacher } = request.body
 try { 
    const videoUpdate = await VideoProject.findByIdAndUpdate(id , { 
      url:url,
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