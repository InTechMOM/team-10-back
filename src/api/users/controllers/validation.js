import Joi from "joi"; //Se llama al modulo de Joi

const rolesValida = ("Soy docente", "Soy estudiante")

// Esquema con Joi
const schemaRegister = Joi.object ({
  name: Joi.string().uppercase().required().alphanum().min(3).max(32).trim().strict(),
  lastname: Joi.string().uppercase().required().alphanum().min(3).max(32).trim().strict(), //uppercase debe ir seguido de
  email: Joi.string().required().email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
  rol: Joi.string().required() .valid(... Object.values(rolesValida))
})

export default schemaRegister;
