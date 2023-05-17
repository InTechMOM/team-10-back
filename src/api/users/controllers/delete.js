import User from "../../../models/user.js";

const userDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     const userDelete = await User.findByIdAndDelete(id);
     if (!userDelete) {
      return response.status(404).json({
        message:"User Not Found"})
      }
      return response.status(200).json({
       delete:("Ok"),
       data: userDelete
     })
   } catch (error) { 
     next (error);
   };
 }

export default userDelete;
