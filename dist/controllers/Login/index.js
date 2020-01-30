"use strict";
const express = require("express");
const login = require("./login");
let router = express.Router();
/**
 * @swagger
 *
 * definitions:
 *  Login:
 *      type: object
 *      required:
 *          - email
 *          - password
 *      properties:
 *          email:
 *              example: varchar
 *              type: varchar
 *          password:
 *              example: varchar
 *              type: varchar
*/
/**
 * @swagger
 * /login:
 *      post:
 *          tags:
 *              - Login
 *          summary: Login
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: body
 *                in: body
 *                description: Login
 *                required: true
 *                type: string
 *                schema:
 *                  $ref: '#/definitions/Login'
 *          responses:
 *             200:
 *                  description: Login Succesful
 *                  content:
 *                      - application/json
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              example:
 *                                  Login Success
 *                          token:
 *                              example: varchar
 *                              type: varchar
 *                          success:
 *                              example: 1
 *                              type: boolean
 *             422:
 *                  description: Invalid
 *                  content:
 *                      - application/json
 *                  schema:
 *                      type: object
 *                      properties:
 *                          message:
 *                              example:
 *                                  "Username or Password Incorrect"
 *                          success:
 *                              example: 0
 *                              type: boolean
 */
router.route('').post(login.postLogin);
module.exports = router;
