//Agregra en el squema

//password: {
  //type:String,
  //required:true,
  //alphanum:true,
  //minlength:6,
  //maxlength:20,
  //minOfUppercase:1, 
  //minOfNumeric:1, 
  //noWhiteSpaces:0, 
  //minOfSpecialCharacters:1, 
  //pattern : new RegExp('^[a-zA-Z0-9]{3,30}$') 
//},


//Se crea metodo para encriptar contraseña por seguridad
//UserSchema.methods.encrypPassword= password => {
  //const salt = bycrypt.genSalt(10); //await para decir que es asincronó 
  //return bycrypt.has(password, salt);
//}