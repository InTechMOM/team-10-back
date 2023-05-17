import User from "../../../models/user.js";
import VideoProject from "../../../models/video.js";
import { SchemaUpload } from "./validation.js";

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
      error:"Email not register"
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
    response.status(200).json({
      upload:("Ok"),
      data: saveVideo
    })

  } catch (error) { 
    next (error)
  }    
}

export default upload;


