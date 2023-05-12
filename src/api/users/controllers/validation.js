import Joi from "joi"; 

const UserRole = {
  teacher:"Soy Docente",
  student:"Soy Estudiante"
}

// Esquema Registro
export const schemaRegister = Joi.object ({
  firstname: Joi.string().uppercase().required().alphanum().min(3).max(32).trim().strict(),
  lastname: Joi.string().uppercase().required().alphanum().min(3).max(32).trim().strict(),
  email: Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
  rol: Joi.string().required().valid(UserRole.teacher, UserRole.student)
})

// Esquema login
export const schemaLogin = Joi.object ({
  email: Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
  rol: Joi.string().required().valid(UserRole.teacher, UserRole.student)
})

// Esquema Modificación (se dejan opcionales)
export const schemaUpdate = Joi.object ({
  firstname: Joi.string().uppercase().alphanum().min(3).max(32).trim().strict(),
  lastname: Joi.string().uppercase().alphanum().min(3).max(32).trim().strict(), 
})