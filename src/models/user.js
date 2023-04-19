import Joi from "joi";

// Esquema con Joi
const userSchema = Joi.object({
  name: Joi.string()
    .required()
    .alphanum() 
    .uppercase() 
    .min(8)
    .max(32)
    .noWhiteSpaces(),
  
  lastname: Joi.string()
    .required()
    .alphanum() 
    .uppercase() 
    .min(8)
    .max(32)
    .noWhiteSpaces(),

  email: Joi.string()
    .required()
    .email({minDomainSegments:2, tlds:{allow:["com","net"]}})
    .noWhiteSpaces(),

  rol: Joi.string()
    .required()
    .enum({values:["Soy estudiante", "Soy docente"]}),
});

export default userSchema;
