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
  const { email , url} = request.body

  //Busqueda por email en User
  const user = await User.findOne({email:request.body.email}).populate([{
    path: "author", 
    select: "_id",
    strictPopulate: false
  }])
  if (!user) {
    return response.status(400).json({
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
    response.status(200).json({
      upload:("Ok"),
      data: saveVideo
    })
  } catch (error) { 
    next (error)
  }    
}

export default upload;


