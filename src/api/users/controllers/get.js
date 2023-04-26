import User from "../../../models/user.js";

//Servidor
export const lecturaServidor = (request, response, error) => { 
  response.send("Status:OK")
}

//Listar
export const listUsers = async (request, response, next) => { 
  try  {
    const arrayUsers = await User.find(); 
    return response.status(200).json({ 
      listaUsers: arrayUsers})
  } catch (error) {
    response.status(400).json({ 
      error})
  }
}

//busqueda con :id 
export const userId = async (request, response) => { 
   const id = request.params.id
   const userid = await User.findById(id)
   if (userid) {
    return response.status(200).json({ 
      data: userid})
  } else {
       response.status(400).json({
        message:"User Not Found"})
  }
}

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}