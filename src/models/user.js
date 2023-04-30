import { Schema, model} from "mongoose";

let posibles_roles=["Soy Estudiante", "Soy Docente"]
const userSchema = new Schema({
  name:{
    firstname: {
      type:String,
      required:true,
      alphanum:true,
      uppercase:true,
      minlength:[3,"La cadena es más corta de la requerida"],
      maxlength:32,
      noWhiteSpaces:0
  },
    lastname: {
      type:String,
      required:true,
      alphanum:true, 
      uppercase:true,
      minlength:3,
      maxlength:32,
      noWhiteSpaces:0
  }},
  email: {
    type:String,
    required:true,
    minlength: 8,
    maxlength: 32,
    minDomainSegments: 2, 
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0, 
    unique: true 
},
  rol: {
    type:String,
    required:true,
    enum:{
    values:posibles_roles,message:"Opción no valida"}
},
  Date: { 
    type: Date,
    default: new Date()
}
})

export default model("User", userSchema);