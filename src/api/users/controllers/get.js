import User from "../../../models/user.js";

//Servidor
export const serverRead = (request, response, error) => { 
  response.send("Status:OK")
}

//Listar
export const listUsers = async (request, response, next) => { 
  try  {
    const arrayUsers = await User.find(); 
    return response.status(200).json({ 
      list: arrayUsers})
  } catch (error) {
    response.status(400).json({ 
      error})
  }
}

//busqueda con :id 
export const userId = async (request, response) => { 
   const id = request.params.id
   const userId = await User.findById(id)
   if (!userId) {
    return response.status(400).json({
      message:"User Not Found"})
    }
    return response.status(200).json({
      data: userId})
  }

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}