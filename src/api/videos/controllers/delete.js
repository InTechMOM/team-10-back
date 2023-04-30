import Videoproject from "../../../models/video.js";

const videoDelete = async (request, response, next) => { 
  const id = request.params.id
  const video = Videoproject(request.body);
  try { 
     const videoDelete = await Videoproject.findByIdAndDelete(id);
     response.status(200).json({
       delete:("Ok"),
       data: videoDelete
     })
   } catch (error) { 
     next (error);
   };
 }

export default videoDelete;