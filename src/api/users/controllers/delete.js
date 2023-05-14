import User from "../../../models/user.js";


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
 * /api/users/{id}:
 *  delete:
 *   summary: Delete a user
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
 *    400:
 *     description: Something went wrong
 *    500:
 *     description: UnKwnown Error 
 */

const userDelete = async (request, response, next) => { 
  const id = request.params.id
  try { 
     const userDelete = await User.findByIdAndDelete(id);
     response.status(200).json({
       delete:("Ok"),
       data: userDelete
     })
   } catch (error) { 
     next (error);
   };
 }

export default userDelete;
