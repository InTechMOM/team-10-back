import Joi from "joi"; 

//Esquema de carga de Video
export const SchemaUpload =   Joi.object ({
    email: Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
    url: Joi.string().required().uri().regex(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i),
    nameTeacher: Joi.string().required().min(3).max(32).trim().strict()
})

// Esquema Modificación (se dejan opcionales)
export const SchemaUpdate =   Joi.object ({
    url: Joi.string().uri().regex(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i),
    nameTeacher: Joi.string().min(3).max(32).trim().strict()
})

// Esquema Modifica la calificación
export const SchemaUpdateQualification =   Joi.object ({
  qualification: {
    skills: {
        communication: Joi.number().required().min(0).max(5),
        collaboration: Joi.number().required().min(0).max(5),
        creativity: Joi.number().required().min(0).max(5),
        critical_thinking: Joi.number().required().min(0).max(5)
      },
    comment: Joi.string()
}})