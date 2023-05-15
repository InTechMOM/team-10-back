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
 *      firstName:
 *        type: string
 *      lastName:
 *        type: string
 *      email:
 *        type: string
 *      rol:
 *        type: string
 *     required:
 *      - firstName
 *      - lastName
 *      - email
 *      - rol
 *     example:
 *      firstName: nicole
 *      lastName: castro
 *      email: some@example.com
 *      rol: Soy Docente
 * 
 */

/**
 * @openapi
 * /api/users:
 *  get:
 *   summary: Return all users
 *   tags: [User]
 *   parameters:
 *    - in: query
 *      name: firstName
 *      description: Query for firstName
 *      schema:
 *        type: string
 *    - in: query
 *      name: lastName
 *      description: Query for lastName
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
  try  {
    const { firstName , lastName, email , rol } = request.query;
    const filters = { 
      ...firstName && { firstName:{ $regex: firstName, $options:'i' } },
      ...lastName && { lastName:{ $regex: lastName, $options:'i' } },
      ...email && { email },
      ...rol && { rol }
    }; 
    const arrayUsers = await User.find(filters); 
    return response.status(200).json({ 
      list: arrayUsers})
  } catch (error) { 
    next (error);
  };
}


//busqueda con :id 
export const userId = async (request, response) => { 
   const id = request.params.id
   const userId = await User.findById(id)
   if (!userId) {
    return response.status(404).json({
      message:"User Not Found"})
    }
    return response.status(200).json({
      data: userId})
  }

export const preordain = async (request, response, next) => {
  response.status(404).json({message:"This page does not exist"});
}