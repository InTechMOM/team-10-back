import User from "../../../models/user.js";
import {schemaUpdate} from "./validation.js";

//Validación de datos
const userEdit = async (request, response, next) => { 
  try { 
   const id = request.params.id
   const {error} = schemaUpdate.validate(request.body);
     if (error) { 
     return response.status(400).json({error: error.details[0].message}) 
     }
    
   const { name } = request.body;

   const userUpdate = await User.findByIdAndUpdate(id , {name:name.toUpperCase()} , {new:true});
   if (!userUpdate) {
    return response.status(404).json({
      message:"User Not Found"})
    }
    return response.status(201).json({
      update:("Ok"),
      data: userUpdate
    })
   } catch (error) { 
     next (error);
   };
 }

export default userEdit;