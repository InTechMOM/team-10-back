import User from "../../../models/user.js";
import Videoproject from "../../../models/video.js";
import { SchemaUpload } from "./validation.js";

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
 * /api/videos/upload:
 *  post:
 *   summary: Upload Video
 *   tags: [videoprojectSchema]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/videoprojectSchema'
 *   responses:
 *    201:
 *     description: Video Created
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

export const upload = async (request, response, next) => {

  //Validación
  const {error} = SchemaUpload.validate(request.body);
  if (error) { 
  return response.status(400).json({error: error.details[0].message}) 
  }

  //Lectura de datos
  const { email , url} = request.body

  //Busqueda por email en User
    const user = await User.findOne({email:request.body.email}).populate([{
    path: "author", 
    select: "_id",
    strictPopulate: false
  }])
  if (!user) {
    return response.status(404).json({
      error:"Email not register"
    })
  }

  //Creación del video
  const newVideo = new Videoproject ({
    email,
    url,
    author: user._id
  })

  //Guardado de video
  try {
    const saveVideo = await newVideo.save()
    response.status(201).json({
      upload:("Ok"),
      data: saveVideo
    })
  } catch (error) { 
    next (error)
  }    
}

export default upload;


