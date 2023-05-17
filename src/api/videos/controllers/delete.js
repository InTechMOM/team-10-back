import VideoProject from "../../../models/video.js";

/**
 * @openapi 
 *  components:
 *   schemas:
 *    VideoprojectSchema:
 *     type: object
 *     properties:
 *      email:
 *        type: string
 *      url:
 *        type: string
 *      nameTeacher:
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
 *      - nameTeacher
 *     example:
 *      email: some@example.com
 *      url: https://www.youtube.com/watch?v=T1QFGwOnQxQ
 *      nameTeacher: Nicole Castro
 */

/**
 * @openapi
 * /api/videos/{id}:
 *  delete:
 *   summary: Delete a video for id de video
 *   tags: [Videos]
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
 *         $ref: '#/components/schemas/VideoprojectSchema'
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

const videoDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     const videoDelete = await VideoProject.findByIdAndDelete(id);
     if (!videoDelete) {
      return response.status(404).json({
        message:"Video Not Found"})
      }
      return response.status(200).json({
       delete:("Ok"),
       data: videoDelete
     })
   } catch (error) { 
     next (error);
   };
 }

export default videoDelete;

