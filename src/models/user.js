import { Schema, model} from "mongoose";

let posibles_roles=["Soy Estudiante", "Soy Docente"]
const userSchema = new Schema({
  name: {
    type:String,
    required:true,
    minlength:[3,"La cadena es más corta de la requerida"],
    maxlength:64,
    noWhiteSpaces:4,
    unique: true 
  },
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
  date: { 
    type: Date,
    default: new Date()
}
})

export default model("User", userSchema);