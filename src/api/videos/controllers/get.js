import User from "../../../models/user.js";
import VideoProject from "../../../models/video.js"

//busqueda de videos con :id del usuario (author)
export const videosId = async (request, response) => {
  try  {
  const id = request.params.id
  const userVideoId = await VideoProject.findOne ({ authorId: id }) 
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
  const { email , url , nameTeacher } = request.query;
  const filters = { 
    ...email && { email },
    ...url && { url },
    ...nameTeacher  && { nameTeacher:nameTeacher.toUpperCase() },
  }; 
  const arrayVideos = await VideoProject.find(filters); 
  return response.status(200).json({ 
    list: arrayVideos})
  } catch (error) { 
    next (error);
  };
}

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}