import * as express from 'express';
const swaggerUi = require('swagger-ui-express');
import * as specs from './swagger';

//import sub-routers
import * as registerRouter from './controllers/Register';
import * as loginRouter from './controllers/Login';

let router = express.Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs.default));

router.get('/', (req, res) => res.send('Welcome to API UNDI-UNDI'));

//Router Language
router.use('/registration', registerRouter);
router.use('/login', loginRouter)

module.exports = router;