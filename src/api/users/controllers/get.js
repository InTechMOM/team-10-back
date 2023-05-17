import User from "../../../models/user.js";

//Servidor
export const serverRead = (request, response, error) => { 
  response.send("Status:OK")
}

//Listar
export const allUsers = async (request, response, next) => { 
  try  {
    const { name, email , rol } = request.query;
    const filters = { 
      ...name && { name:name.toUpperCase()},
      ...email && { email },
      ...rol && { rol }
    }; 
    const arrayUsers = await User.find(filters); 
    if (!arrayUsers) {
      return response.status(404).json({ 
        message:"User Not Found"});
    }
      return response.status(200).json({ 
        List: arrayUsers});
  } catch (error) { 
    next (error);
  }
}


//busqueda con :id 
export const userId = async (request, response) => { 
  try  {
   const id = request.params.id
   const userId = await User.findById(id)
   if (!userId) {
    return response.status(404).json({
      message:"User Not Found"})
    }
    return response.status(200).json({
      data: userId})
  } catch (error) { 
    next (error);
  }
}

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}