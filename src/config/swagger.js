import swaggerJSDoc from "swagger-jsdoc";

const swaggerOptions = {
definition: {
    openapi: '3.0.0',
    info: {
     title: 'MVP IntechMom',
     version: '1.0.0',
    },
 },
servers:[
    {
        url: "http://localhost:3000"
    }
],
apis: [
    'app.js',
    "./src/api/users/controllers/post.js",
    "./src/api/users/controllers/get.js",
    "./src/api/users/controllers/put.js",
    "./src/api/users/controllers/delete.js",
    "./src/api/videos/controllers/post.js",
    "./src/api/videos/controllers/get.js",
    "./src/api/videos/controllers/patch.js",
    "./src/api/videos/controllers/delete.js",
    "./src/api/qualification/controllers/get.js",
    "./src/api/qualification/controllers/patch.js"
]
}

export const openApiSpecification = swaggerJSDoc (swaggerOptions);

