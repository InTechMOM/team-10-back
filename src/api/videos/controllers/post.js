import User from "../../../models/user.js";
import VideoProject from "../../../models/video.js";
import { SchemaUpload } from "./validation.js";

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
 *      email: some1@example.com
 *      url: https://www.youtube.com/watch?v=T1QFGwOnQxQ
 *      nameTeacher: Nicole Castro
 */

/**
 * @openapi
 * /api/upload:
 *  post:
 *   summary: Upload Video
 *   tags: [Videos]
 *   requestBody:
 *    required: true
 *    content:
 *     application/json:
 *      schema:
 *       type: object
 *       $ref: '#/components/schemas/VideoprojectSchema'
 *   responses:
 *    201:
 *     description: Video Created
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

export const upload = async (request, response, next) => {
  
try {
  //Validación
  const {error} = SchemaUpload.validate(request.body);
  if (error) { 
  return response.status(400).json({error: error.details[0].message}) 
  }

  //Lectura de datos
  const { email , url , nameTeacher } = request.body

  //Busqueda por email del estudiante en User
    const userId = await User.findOne({email, rol:"Soy Estudiante"}).populate([{
    path: "authorId", 
    select: "_id",
    strictPopulate: false
  }])

  if (!userId) {
    return response.status(404).json({
      error:" Unregistered student email "
    })
  }

  //Busqueda por nombre del docente en User
    const teacherId = await User.findOne({name:nameTeacher.toUpperCase(), rol:"Soy Docente" }).populate([{
    path: "teacherId", 
    select: "_id",
    strictPopulate: false
  }])

  if (!teacherId) {
    return response.status(404).json({
      error:"Teacher not register"
    })
  }

  //Creación del video
  const newVideo = new VideoProject ({
    email,
    url,
    nameTeacher:nameTeacher.toUpperCase(),
    authorId: userId._id,
    teacherId: teacherId._id
  })

  //Guardado de video
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


