import { Schema, model} from "mongoose";//import mongose y se instancio esquema y model.

// Esquema
let posibles_roles=["Soy Estudiante", "Soy Docente"]
const userSchema = new Schema({
  name: {
    type:String,
    required:true,
    alphanum:true,
    uppercase:true,
    min:[3,"La cadena es más corta de la requerida"],
    max:32,
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
},
  email: {
    type:String,
    required:true,
    minDomainSegments: 2, 
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0, //No esta en joi
    unique: true //No esta en joi
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

//se crea el modelo Parametrs; 1)Nombre del modelo, 2)Nombre del esquema
export default model("User", userSchema);// el plural se llamara la colección
