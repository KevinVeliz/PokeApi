const express = require("express");
const router = express.Router();
const Pokemon_Schema = require('./models/pokemons')

  /**
   * @swagger
   * components:
   *  schemas:
   *    Pokemon:
   *      type: object
   *      properties:
   *        name:
   *          type: string
   *          description: The pokemon name
   *        id:
   *          type: string
   *          description: The pokemon id
   *        _id:
   *          type: string
   *          description: The pokemon id identifier
   *        height:
   *          type: string
   *          description: The Pokemon height
   *        weight:
   *          type: string
   *          description: The Pokemon weight
   *        sprites:
   *          type: array
   *          description: The Pokemon image
   *          items:
   *            other:
   *              home:
   *                front_default:
   *        types:
   *          type: array
   *          description: The pokemon type
   *          items:
   *            type: object
   *            properties:
   *             type:
   *               name:
   *                 type: string
   *                 description: The pokemon type
   *      required:
   *        - name
   *        - id
   *        - _id
   *      example:
   *        name: Bulbasaur
   *        id: 1
   *        -id: 1
   *        height: 7
   *        weight: 69
   *        sprites:
   *          other:
   *            home:
   *              front_default: https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png
   *        types:
   *          -type:
   *            name: grass
   */

  /**
   * @swagger
   * /api/pokemon:
   *  post:
   *    summary: Create a new Pokemon
   *    tags: [Pokemon]
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            type: object
   *            $ref: '#/components/schemas/Pokemon'
   *    response:
   *      200:
   *        description: New Pokemon created!
   */
  router.post("/pokemon", (req, res) => {
    const pokemon = Pokemon_Schema(req.body);
    console.log(pokemon)
    pokemon
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json({ message: err.message }));
    console.log("Pokemon Guardado en la Base")
  });
  
  /**
 * @swagger
 * /api/pokemon:
 *  get:
 *    summary: return all pokemons in the data base
 *    tags: [Pokemon]
 *    responses:
 *      200:
 *        description: Get all the pokemon
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Pokemon'
 */

  router.get("/pokemon", (req, res) => {
    Pokemon_Schema
      .find()
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err.message }));
      console.log("Lectura de la base")
  });

  router.get("/pokemon/:id", (req, res) => {
    const { id } = req.params;
    Pokemon_Schema
      .findById(id)
      .then((data) => res.json(data))
      .catch((err) => res.json({ message: err.message }));
  });

  module.exports = router;