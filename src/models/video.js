import User from "./user.js";
import { Schema, model} from "mongoose";

const videoprojectSchema = new Schema(
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
    firstNameTeacher: {
      type:String,
      alphanum:true,
      minlength:[3,"La cadena es más corta de la requerida"],
      maxlength:32,
      noWhiteSpaces:0
},
    lastNameTeacher: {
      type:String,
      alphanum:true, 
      minlength:[3,"La cadena es más corta de la requerida"],
      maxlength:32,
      noWhiteSpaces:0
},
    author: {
      type: Schema.Types.ObjectId, 
      ref: "User" 
  }, 
    teacher: {
      type: Schema.Types.ObjectId, 
      ref: "User" 
}, 
},
  { 
    timestamps: true,    
  }
)

export default model("Videoproject", videoprojectSchema);