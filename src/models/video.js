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