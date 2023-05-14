import Videoproject from "../../../models/video.js"
import { SchemaUpload } from "./validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    videoprojectUpdateSchema:
 *     type: object
 *     properties:
 *      email:
 *        type: string
 *      url:
 *        type: string
 *     required:
 *      - url
 *     example:
 *      url: https://www.youtube.com/watch?v=T1QFGwOnQxQ
 */

/**
 * @openapi
 * /api/videos/{id}:
 *  patch:
 *   summary: Update a video
 *   tags: [videoprojectUpdateSchema]
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
 *       $ref: '#/components/schemas/videoprojectUpdateSchema'
 *   responses:
 *    201:
 *     description: Video Update
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */


//Modifica video por su propio id (unidad)
const videoEdit = async (request, response, next) => { 
  const id = request.params.id
  const {error} = SchemaUpload.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
  }
    
  const { email , url} = request.body
 try { 
    const videoUpdate = await Videoproject.findByIdAndUpdate(id , request.body, {new:true});
    response.status(201).json({
       update:("Ok"),
       data: videoUpdate
    })
  } catch (error) { 
    next (error);
  };
}

export default videoEdit;