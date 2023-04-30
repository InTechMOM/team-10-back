import Joi from "joi"; 

//Esquema de carga de Video
export const SchemaUpload =   Joi.object ({
    email: Joi.string().required().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
    url: Joi.string().required()
})

// Esquema Modificación (se dejan opcionales)
export const SchemaUpdate =   Joi.object ({
    email: Joi.string().min(8).max(32).email({minDomainSegments:2, tlds:{allow:["com","net"]}}),
    url: Joi.string().required()
})