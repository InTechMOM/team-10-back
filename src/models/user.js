import { Schema, model} from "mongoose";//import mongose y se instancio esquema y model.

// Esquema

let posibles_roles=["Soy estudiante", "Soy docente"]

const userSchema = new Schema({
  name: {
    type:String,
    required:true,
    alphanum:true, 
    min:[3,"La cadena es más corta de la requerida"],
    max:32,
    noWhiteSpaces:0
},
  lastname: {
    type:String,
    required:true,
    alphanum:true, 
    minlength:3,
    maxlength:32,
    noWhiteSpaces:0
},
  email: {
    type:String,
    required:true,
    minDomainSegments: [2,"La cadena no es un correo electrónico válido"], 
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0,
    unique: true
},
  rol: {
    type:String,
    enum:{
    values:posibles_roles,message:"Opción no valida"}
},
  Date: { 
    type:Date,
    default: Date.now
}
})

//se crea el modelo Parametrs; 1)Nombre del modelo, 2)Nombre del esquema
export default model("User", userSchema);
