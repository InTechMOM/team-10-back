import Videoproject from "../../../models/video.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    videoprojectSchema:
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
 *      - email
 *      - url
 *     example:
 *      email: some@example.com
 *      url: https://www.youtube.com/watch?v=T1QFGwOnQxQ
 */

/**
 * @openapi
 * /api/videos/{id}:
 *  delete:
 *   summary: Delete a video
 *   tags: [videoprojectSchema]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The video id
 *   responses:
 *    200:
 *     description: Video
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        items:
 *         $ref: '#/components/schemas/videoprojectSchema'
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

const videoDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     const videoDelete = await Videoproject.findByIdAndDelete(id);
     response.status(200).json({
       delete:("Ok"),
       data: videoDelete
     })
   } catch (error) { 
     next (error);
   };
 }

export default videoDelete;