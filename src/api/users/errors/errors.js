//Manejo de errores //los middleware son transversales, que alican en diversas rutas son series de pasos y revise (res, req, next)
//El next es para que siga

const middlewareErrors = (error, request, response, next) => {
  //error debe ser el 1er parametro (middleware para manejo de err)
if (error) {
  response.status(400).json({ 
    status: "error",
    send: "Algo salió mal",
    name: error.name,
    message: error.message,
    patch: error.patch
});
} else { 
  response.status(500).json({ 
    status: "error",
    name: "UnKwnown Error",
    message: "UnKwnown Error",
  })
}
}

export default middlewareErrors;




