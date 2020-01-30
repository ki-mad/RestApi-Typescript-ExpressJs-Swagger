"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const swaggerJsDoc = require('swagger-jsdoc');
const options = {
    apis: ['**/*.ts'],
    basePath: '/',
    swaggerDefinition: {
        info: {
            description: 'UNDI UNDI API',
            swagger: '2.0',
            title: 'Documentation API RedBox',
            version: '1.0.0',
        },
    }
};
const specs = swaggerJsDoc(options);
exports.default = specs;
