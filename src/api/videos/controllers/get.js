import User from "../../../models/user.js";
import Videoproject from "../../../models/video.js"

//busqueda de videos con :id del usuario
 export const videosId = async (request, response) => { 
  const id = request.params.id
  const uservideoid = await User.findById(id)
  if (uservideoid) {
    const emailvideos = (uservideoid.email);
    const videoid = await Videoproject.find({email:emailvideos})
      if (videoid) {
       return response.status(200).json({ 
         data: videoid})
     } else {
          response.status(400).json({
           message:"User has not uploaded videos"})
     }
    } else {
      response.status(400).json({
       message:"User Not Found"})
 }
}

//busqueda de tdos los videos (listar)
export const listVideos = async (request, response, next) => { 
  try  {
    const arrayVideos = await Videoproject.find(); 
    return response.status(200).json({ 
      listaVideos: arrayVideos})
  } catch (error) {
    response.status(400).json({ 
      error})
  }
}

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}