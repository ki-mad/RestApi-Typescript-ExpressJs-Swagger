"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const swaggerUi = require('swagger-ui-express');
const specs = require("./swagger");
//import sub-routers
const registerRouter = require("./controllers/Register");
const loginRouter = require("./controllers/Login");
let router = express.Router();
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs.default));
router.get('/', (req, res) => res.send('Welcome to API UNDI-UNDI'));
//Router Language
router.use('/registration', registerRouter);
router.use('/login', loginRouter);
module.exports = router;
