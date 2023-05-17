import User from "../../../models/user.js";

//Servidor
export const serverRead = (request, response, error) => { 
  response.send("Status:OK")
}

/**
 * @openapi 
 *  components:
 *   schemas:
 *    User:
 *     type: object
 *     properties:
 *      name:
 *        type: string
 *      email:
 *        type: string
 *      rol:
 *        type: string
 *     required:
 *      - name
 *      - email
 *      - rol
 *     example:
 *      name: Samuel Reyes
 *      email: some@example.com
 *      rol: Soy Docente
 */

/**
 * @openapi
 * /api/users:
 *  get:
 *   summary: Return all users
 *   tags: [User]
 *   parameters:
 *    - in: query
 *      name: name
 *      description: Query for name
 *      schema:
 *        type: string
 *    - in: query
 *      name: email
 *      description: Query for email
 *      schema:
 *        type: string
 *    - in: query
 *      name: rol
 *      description: Query for rol
 *      schema:
 *        type: string
 *   responses:
 *    200:
 *     description: All users
 *     content:
 *      application/json:
 *       schema:
 *        type: array
 *        items:
 *         $ref: '#/components/schemas/User'
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

/**
 * @openapi
 * /api/users/{id}:
 *  get:
 *   summary: Return a user
 *   tags: [User]
 *   parameters:
 *    - in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: The user id
 *   responses:
 *    200:
 *     description: User
 *     content:
 *      application/json:
 *       schema:
 *        type: object
 *        items:
 *         $ref: '#/components/schemas/User'
 *    404:
 *     description: User Not Found
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

//Listar
export const allUsers = async (request, response, next) => { 
  
    const { name, email , rol } = request.query;
    const filters = { 
      ...name && { name:name.toUpperCase()},
      ...email && { email },
      ...rol && { rol }
    }; 

    try  {
    const arrayUsers = await User.find(filters); 
    if (!arrayUsers) {
      return response.status(404).json({ 
        message:"User Not Found"});
    }
      return response.status(200).json({ 
        List: arrayUsers});
  } catch (error) { 
    next (error);
  }
}


//busqueda con :id 
export const userId = async (request, response) => { 
  try  {
   const id = request.params.id
   const userId = await User.findById(id)
    return response.status(200).json({
      data: userId})
  } catch (error) { 
    next (error);
  }
}

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}