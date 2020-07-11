const express = require('express');

const ComapanyController = require('./controllers/company');

const routes = express.Router();

routes.get('/', ComapanyController.index);
routes.post('/company', ComapanyController.create);


module.exports = routes;