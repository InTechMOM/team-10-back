import mongoose from "mongoose"; 

// Esquema

const UserSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type:String,
    required:true,
    alphanum:true, //verificar Nombre de Usuario, solo letras?
    uppercase:true, //Forzar a que sea mayuscula
    min:[8,"La cadena es más corta de la requerida"],
    max:32,
    noWhiteSpaces:0,
},
  lastname: {
    type:String,
    required:true,
    alphanum:true, //verificar Nombre de Usuario, solo letras?
    uppercase:true, //Forzar a que sea mayuscula
    minlength:8,
    maxlength:32,
    noWhiteSpaces:0,
},
  email: {
    type:String,
    required:true,
    minDomainSegments: [2,"La cadena no es un correo electrónico válido"], //Número de segmentos necesarios para el dominio luego del @
    tlds: { allow: ['com', 'net'] },
    noWhiteSpaces:0,
},
  rol: {type:Boolean,
    required:true,
},
  //Opción 2
  //{type:String,
  //enum:{
  //values:posibles_valores,message:"Opción no valida"}
  //}

  //Opción 3 
  //Validación personalizada con una función (devuelve un booleano)
  password: {
    type:String,
    required:true,
    alphanum:true,
    minlength:6,
    maxlength:20,
    minOfUppercase:1, //Minimo una mayuscula
    minOfNumeric:1, //Minimo un número
    noWhiteSpaces:0, //Sin espacios
    minOfSpecialCharacters:1, //Minimo un caracter
    pattern : new RegExp('^[a-zA-Z0-9]{3,30}$') //Define una regla de patrón
},
  creationDate: { //Fecha de creación
    type:Date,
    default: Date.now
}
})

//Se crea metodo para encriptar contraseña por seguridad
UserSchema.methods.encrypPassword= password => {
  const salt = bycrypt.genSalt(10); //await para decir que es asincronó 
  return bycrypt.has(password, salt);
}

const User = mongoose.model("User",UserSchema); //Parametrs; 1)Nombre del modelo, 2)Nombre del esquema

//module.exports.User = User; //Exportar el modelo para usarlo en otros doc