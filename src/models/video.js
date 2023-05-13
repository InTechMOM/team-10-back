import User from "./user.js";
import { Schema, model} from "mongoose";

const videoprojectSchema = new Schema(
  {
    email: {
      type:String,
      minlength: 8,
      maxlength: 32,
      minDomainSegments: 2, 
      tlds: { allow: ['com', 'net'] },
      noWhiteSpaces:0
},
    url: {
      type:String,
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