import User from "./user.js";
import { Schema, model} from "mongoose";

const videosProjectSchema = new Schema(
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
      required:true,
      unique: true 
},
    nameTeacher: {
      type:String,
      minlength:[3,"La cadena es más corta de la requerida"],
      maxlength:64,
      noWhiteSpaces:4,
    },
    authorId: {
      type: Schema.Types.ObjectId, 
      ref: "User" 
    }, 
    teacherId: {
      type: Schema.Types.ObjectId, 
      ref: "User" 
    },
    qualification:{
      skills: {
        communication: {
        type:Number,
        min:0,
        max:5
      },
        collaboration: {
        type:Number,
        min:0,
        max:5
      },
        creativity: {
        type:Number,
        min:0,
        max:5
      },
        critical_thinking: {
        type:Number,
        min:0,
        max:5
      }
      },
      comment: {
        type:String
      },
    },
    qualified:{
        type:Boolean
    }  
 },
{ 
  timestamps: true,    
}
)

export default model("VideosProject", videosProjectSchema);