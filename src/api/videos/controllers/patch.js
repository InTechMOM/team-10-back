import Videoproject from "../../../models/video.js"
import { SchemaUpdate } from "./validation.js";

//Modifica video por su propio id (unidad)
const videoEdit = async (request, response, next) => { 
  const id = request.params.id
  const {error} = SchemaUpdate.validate(request.body);
    if (error) { 
    return response.status(400).json({error: error.details[0].message}) 
  }
    
  const { email , url} = request.body
 try { 
    const videoUpdate = await Videoproject.findByIdAndUpdate(id , request.body, {new:true});
    response.status(201).json({
       update:("Ok"),
       data: videoUpdate
    })
  } catch (error) { 
    next (error);
  };
}

export default videoEdit;