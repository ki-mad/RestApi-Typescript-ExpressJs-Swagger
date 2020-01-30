"use strict";
const express = require("express");
const register = require("./register");
let router = express.Router();
/**
 * @swagger
 *
 * definitions:
 *  Registration:
 *      type: object
 *      required:
 *          - id
 *          - email
 *          - handphone
 *          - identity
 *      properties:
 *          email:
 *              example: varchar
 *              type: varchar
 *          handphone:
 *              example: 0
 *              type: varchar
 *          identity:
 *              example: 0
 *              type: varchar
 *          accountname:
 *              example: varchar
 *              type: varchar
 *          fullname:
 *              example: string
 *              type: varchar
 *          password:
 *              example: varchar
 *              type: varchar
 *          address:
 *              example: varchar
 *              type: varchar
 *          city:
 *              example: string
 *              type: varchar
 *
*/
/**
 * @swagger
 * /registration:
 *      post:
 *          tags:
 *              - Registration
 *          summary: Create a new profile
 *          produces:
 *              - application/json
 *          parameters:
 *              - name: body
 *                in: body
 *                description: Insert a new profile
 *                required: true
 *                type: string
 *                schema:
 *                  $ref: '#/definitions/Registration'
 *          responses:
 *             201:
 *                  description: Register Succesful
 *                  content:
 *                      - application/json
 *                  schema:
 *                      type: object
 *                      properties:
 *                          token:
 *                              example: varchar
 *                              type: varchar
 *                          message:
 *                              example: "Registration Success"
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
 *                              example: "Registration Failed"
 *                          success:
 *                              example: 0
 *                              type: boolean
 */
router.route('').post(register.postRegistration);
module.exports = router;
