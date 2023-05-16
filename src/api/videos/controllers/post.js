import User from "../../../models/user.js";
import Videoproject from "../../../models/video.js";
import { SchemaUpload } from "./validation.js";

export const upload = async (request, response, next) => {

  //Validación
  const {error} = SchemaUpload.validate(request.body);
  if (error) { 
  return response.status(400).json({error: error.details[0].message}) 
  }

  //Lectura de datos
  const { email , url , firstNameTeacher , lastNameTeacher } = request.body

  //Busqueda por email del estudiante en User
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

  //Busqueda por nombre del docente en User
    const teacher = await User.findOne({ firstName:{ $regex: firstNameTeacher, $options:'i' } , lastName:{ $regex: lastNameTeacher, $options:'i' } , rol:"Soy Docente" }).populate([{
    path: "teacher", 
    select: "_id",
    strictPopulate: false
  }])

  if (!teacher) {
    return response.status(404).json({
      error:"Teacher not register"
    })
  }

  //Busqueda por nombre de docente y rol //preguntar que sí se rquiere para lista desplegable puesto el query de rl ya ls filtra?? los body necesaris?
  //como entran los dats?

  //Creación del video
  const newVideo = new Videoproject ({
    email,
    url,
    firstNameTeacher:firstNameTeacher.toUpperCase(),
    lastNameTeacher:lastNameTeacher.toUpperCase(),
    author: user._id,
    teacher: teacher._id
  })

  //Guardado de video
  try {
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


