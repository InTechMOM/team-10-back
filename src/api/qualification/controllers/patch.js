import VideoProject from "../../../models/video.js"
import { SchemaUpdateQualification } from "../../videos/controllers/validation.js";

//Modifica calificación por su propio id del video(unidad), en las 4 ambitos
const qualificationEdit = async (request, response, next) => { 
  const id = request.params.id
  const {error} = SchemaUpdateQualification.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
    }
   
  const qualification = (request.body);
 try { 
    const qualificationUpdate = await VideoProject.findByIdAndUpdate(id , request.body, {new:true});
    response.status(201).json({
      qualified:("Ok"),
      data: qualificationUpdate
    })
  } catch (error) { 
    next (error);
  };
}

export default qualificationEdit;
