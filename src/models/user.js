const mongoose = require("mongoose");

// Esquema

let posibles_roles=["Soy estudiante", "Soy docente"]

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type:String,
    required:true,
    alphanum:true, 
    uppercase:true, 
    min:[8,"La cadena es más corta de la requerida"],
    max:32,
    noWhiteSpaces:0,
},
  lastname: {
    type:String,
    required:true,
    alphanum:true, 
    uppercase:true, 
    minlength:8,
    maxlength:32,
    noWhiteSpaces:0,
},
  email: {
    type:String,
    required:true,
    minDomainSegments: [2,"La cadena no es un correo electrónico válido"], 
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0,
},
  rol: {
    type:String,
    enum:{
    values:posibles_roles,message:"Opción no valida"}
},
creationDate: { 
    type:Date,
    default: Date.now
}
})

const user = mongoose.model("user", userSchema); //se crea el modulo Parametrs; 1)Nombre del modelo, 2)Nombre del esquema
module.exports = user;