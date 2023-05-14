import Videoproject from "../../../models/video.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    videoQualifiedsSchema:
 *     type: object
 *     properties:
 *      email:
 *        type: string
 *      url:
 *        type: string
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
 * /api/qualification:
 *  get:
 *   summary: Return all videos qualified
 *   tags: [videoQualified]
 *   parameters:
 *    - in: query
 *      name: communication
 *      description: Query for skills
 *      schema:
 *        type: string
 *    - in: query
 *      name: collaboration
 *      description: Query for skills
 *      schema:
 *        type: string
  *    - in: query
 *      name: creativity
 *      description: Query for skills
 *      schema:
 *        type: string
 *    - in: query
 *      name: critical_thinking
 *      description: Query for skills
 *      schema:
 *        type: string
 *    - in: query
 *      name: comment
 *      description: Query for comment
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: All videos qualified
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/videoQualifiedsSchema'
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

const allQualification = async (request, response, next) => { 
  try  {
    const { skills , comment } = request.query;
    const filters = { 
      ...skills && { skills },   
      ...comment && { comment }
    }; 
    const arrayQualification = await Videoproject.find(filters); 
    return response.status(200).json({ 
      list: arrayQualification})
  } catch (error) { 
    next (error)
  } 
}

export default allQualification