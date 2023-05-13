import User from "../../../models/user.js";

const userDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     const userDelete = await User.findByIdAndDelete(id);
     response.status(200).json({
       delete:("Ok"),
       data: userDelete
     })
   } catch (error) { 
     next (error);
   };
 }

export default userDelete;
