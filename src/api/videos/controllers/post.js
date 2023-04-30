import Videoproject from "../../../models/video.js";
import { SchemaUpload } from "./validation.js";

export const upload = async (request, response, next) => {

  //Validación
  const {error} = SchemaUpload.validate(request.body);
  if (error) { 
  return response.status(400).json({error: error.details[0].message}) 
  }
  
  //  //Creación 
  const video = new Videoproject(request.body);

  try { 
    const videobd = await video.save();
    response.status(200).json({
      upload:("Ok"),
      data: videobd
    })

  } catch (error) { 
    next (error);
  };
}

export default upload;