const middlewareErrors = (error, request, response, next) => {
if (error) {
  return response.status(400).json({ 
    status: "error",
    send: "Something went wrong",
    name: error.name,
    message: error.message,
    patch: error.patch
});
} else { 
  return response.status(500).json({ 
    status: "error",
    name: "UnKwnown Error",
    message: "UnKwnown Error",
  })
}
}

export default middlewareErrors;




