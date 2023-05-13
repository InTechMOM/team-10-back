import User from "../../../models/user.js";
import Videoproject from "../../../models/video.js"

//busqueda de videos con :id del usuario
export const videosId = async (request, response) => { 
  const id = request.params.id
  const uservideoid = await Videoproject.findOne ({ author: id }) 
  if (!uservideoid) 
    return response.status(404).json({
      message:"User has not uploaded videos"})
  return response.status(200).json({
    data: uservideoid})
}

//busqueda de todos los videos cargados (listar), con filtros
export const allVideos = async (request, response, next) => { 
  try  {
    const { email , url } = request.query;
    const filters = { 
      ...email && { email },
      ...url && { url }
    }; //el operador lo vuelve oleano y si es true {} lo usa sino no
    const arrayVideos = await Videoproject.find(filters); 
    return response.status(200).json({ 
      list: arrayVideos})
  } catch (error) { 
    next (error);
  };
}

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}