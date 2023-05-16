import Joi from "joi"; 

//Esquema de carga de Video
export const SchemaUpload =   Joi.object ({
    email: Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
    url: Joi.string().required().uri().regex(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i),
    nameTeacher: Joi.string().required().alphanum().min(3).max(32).trim().strict()
})

// Esquema Modificación (se dejan opcionales)
export const SchemaUpdate =   Joi.object ({
    url: Joi.string().required().uri().regex(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i),
    nameTeacher: Joi.string().alphanum().min(3).max(32).trim().strict()
})