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
      required:true,
  },
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
    author: {
      type: Schema.Types.ObjectId, 
      ref: "User" 
    }, 
  },  
  { 
    timestamps: true,    
  }
)

export default model("Videoproject", videoprojectSchema);