import VideosProject from "../../../../models/video.js"
import { SchemaUpdateQualification } from "../validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    VideoQualifiedSchema:
 *     type: object
 *     properties:
 *      qualification:
 *       skills:
 *          communication:
 *            type: string
 *          collaboration:
 *            type: string
 *          creativity:
 *            type: string
 *          critical_thinking:
 *            type: string
 *      comment:
 *        type: string
 *     required:
 *      - skills
 *      - comment
 *     example:
 *      qualification:
 *       skills: 
 *        communication: 5
 *        collaboration: 4
 *        creativity: 4
 *        critical_thinking: 5
 *       comment: Buen trabajo
 */


/**
 * @openapi
 * /api/video/{id}/qualification:
 *  patch:
 *   summary: Video qualified
 *   tags: [videoQualified]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The qualification id del video
*   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/VideoQualifiedSchema'
 *   responses:
 *    201:
 *     description: Video qualified
 *    400:
 *     description: Something went wrong
 *    404:
 *     description: Video Not Found
 *    500:
 *     description: UnKwnown Error 
 */

//Modifica calificación por su propio id del video(unidad), en las 4 ambitos
const qualificationEdit = async (request, response, next) => { 
  const id = request.params.id
  const {error} = SchemaUpdateQualification.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
    }
   
 try { 
    const qualificationUpdate = await VideosProject.findByIdAndUpdate(id , {qualification:request.body.qualification, qualified:true} , {new:true});
    if (!qualificationUpdate) {
      return response.status(404).json({
        message:"Video Not Found"})
      }
      return response.status(201).json({
      qualified:("Ok"),
      data: qualificationUpdate
      })
    } catch (error) { 
      next (error);
    };
}


export default qualificationEdit;