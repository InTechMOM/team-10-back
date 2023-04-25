import User from "../../../models/user.js";
import schemaRegister from "./validation.js";

const register = async (request, response, next) => { //async debe ir en un afunción superior

//validación de usuario
  const {error} = schemaRegister.validate(request.body);
  if (error) { //Sí existe un error conforme a la validación con el esquema de joi, MIRAR ALFANUMERICO
  return response.status(400).json({error: error.details[0].message}) //status 400 (servidor no puede o no procesará la petición debido a algo que es percibido como un error del cliente)
  }

  //Validación de correo unico
  const emailRegistered = await User.findOne({ email:request.body.email });// .findOne es de mongoose y busca en archivo
  if (emailRegistered) {
    return response.status(400).json(
      {error:"Email Registered"}
    )
  }
    
  //creación de usuario (lee lo ingresado en body)
  const user = new User({
    name: request.body.name,
    lastname: request.body.lastname,
    email: request.body.email,
    rol: request.body.rol
  }); //punto y coma

  try { //try:sentencias a ejecutar (guardar)
    const Cluster0 = await user.save(); //constante que se llenara con los datos, esperar a que se guarde el user
    response.status(200).json({
      saved:("Ok"),
      data: Cluster0
    })

  } catch (error) { //Sentencias si hay una excepcion durante try
    next (error);
  };
}

export default register;