import Videoproject from "../../../models/video.js";

const allQualification = async (request, response, next) => { 
  try  {
    const { skills , comment } = request.query;
    const filters = { 
      ...skills && { skills },   
      ...comment && { comment }
    }; 
    const arrayQualification = await Videoproject.find(filters); 
    return response.status(200).json({ 
      list: arrayQualification})
  } catch (error) { 
    next (error)
  } 
}

export default allQualification