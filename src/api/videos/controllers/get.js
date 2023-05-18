import mongoose from "mongoose"; 
import User from "../../../models/user.js";
import VideosProject from "../../../models/video.js"

/**
 * @openapi 
 *  components:
 *   schemas:
 *    VideosprojectSchema:
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
 * /api/videos:
 *  get:
 *   summary: Return all videos uploaded
 *   tags: [Videos]
 *   parameters:
 *    - in: query
 *      name: email
 *      description: Query for name
 *      schema:
 *        type: string
 *    - in: query
 *      name: url
 *      description: Query for url
 *      schema:
 *        type: string
 *    - in: query
 *      name: nameTeacher
 *      description: Query for nameTeacher
 *      schema:
 *        type: string
 *    - in: query
 *      name: qualified
 *      description: Query for qualification
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: All videos
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/VideosprojectSchema'
 *    400:
 *     description: Something went wrong
 *    422:
 *     description: Id Not Valid
 *    500:
 *     description: UnKwnown Error 
 */

/**
 * @openapi
 * /api/videos/{authorId}:
 *  get:
 *   summary: Return a video for id user (Author)
 *   tags: [Videos]
 *   parameters:
 *    - in: path
 *      name: authorId
 *      schema:
 *        type: string
 *      required: true
 *      description: The video for id user
 *   responses:
 *    200:
 *     description: Video
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        items:
 *         $ref: '#/components/schemas/VideosprojectSchema'
 *    404:
 *     description: Video Not Found
 *    400:
 *     description: Something went wrong
 *    422:
 *     description: Id Not Valid
 *    500:
 *     description: UnKwnown Error 
 */

//busqueda de videos con :id del usuario
export const videosId = async (request, response, next) => { 
try  {
  const id = request.params.id
  if (!mongoose.isValidObjectId(id)) {
    return response.status(422).json({message: "Id Not Valid"})
   }
  const userVideoId = await VideosProject.find({ authorId: id }) 
   if (!userVideoId) 
    return response.status(404).json({
      message:"User has not uploaded videos"})
    return response.status(200).json({
     data: userVideoId})

  } catch (error) { 
    next (error);
  };
}

//busqueda de todos los videos cargados (listar), con filtros
export const allVideos = async (request, response, next) => { 
  try  {
  const { email , url , nameTeacher , qualified } = request.query;
  const filters = { 
    ...email && { email },
    ...url && { url },
    ...nameTeacher  && { nameTeacher:nameTeacher.toUpperCase() },
    ...qualified && { qualified },
  }; 
  const arrayVideos = await VideosProject.find(filters); 
  return response.status(200).json({ 
    list: arrayVideos})
  } catch (error) { 
    next (error);
  };
}

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}