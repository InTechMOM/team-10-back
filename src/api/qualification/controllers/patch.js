import Videoproject from "../../../models/video.js"
import { SchemaUpdate } from "../../videos/controllers/validation.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    videoQualifiedSchema:
 *     type: object
 *     properties:
 *      skills:
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
 *      skills: 
 *       communication: 5
 *       collaboration: 4
 *       creativity: 4
 *       critical_thinking: 5
 *      comment: Buen trabajo
 */


/**
 * @openapi
 * /api/qualification/{id}:
 *  patch:
 *   summary: Video qualified
 *   tags: [videoQualifiedSchema]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The qualification id
*   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/videoQualifiedSchema'
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
  const {error} = SchemaUpdate.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
    }
   
  const { skills , comment  } = (request.body);
 try { 
    const qualificationUpdate = await Videoproject.findByIdAndUpdate(id , request.body, {new:true});
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
