import User from "./user.js";
import { Schema, model} from "mongoose";

const videoProjectSchema = new Schema(
{
    email: {
      type:String,
      required:true,
      minlength: 8,
      maxlength: 32,
      minDomainSegments: 2, 
      tlds: { allow: ['com', 'net'] },
      noWhiteSpaces:0
},
    url: {
      type:String,
      required:true
},
    nameTeacher: {
      type:String,
      minlength:[3,"La cadena es más corta de la requerida"],
      maxlength:64,
      noWhiteSpaces:4,
      unique: true 
},
    authorId: {
      type: Schema.Types.ObjectId, 
      ref: "User" 
  }, 
    teacherId: {
      type: Schema.Types.ObjectId, 
      ref: "User" 
}, 
},
  { 
    timestamps: true,    
  }
)

export default model("Videoproject", videoProjectSchema);