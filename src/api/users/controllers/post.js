import User from "../../../models/user.js";

const register = async (request, response) => { //async debe ir en un afunción superior
  const user = new User({
    name: request.body.name,
    lastname: request.body.lastname,
    email: request.body.email,
    rol: request.body.rol
  })
  try {
    const userDB = await user.save(); //constante que se llenara con los datos, esperar a que se guarde el user
    response.json({
      error: null,
      data: userDB
    })
  }
  catch (error) {
    response.status(400).json({error})
  }};

export default register;