const routes = require('express').Router();
const { getAll, getId, created, update, destroy } = require('./suggestions/controlles');


routes.get('', getAll );
routes.post('', created );
routes.get('/:id', getId );
routes.put('/:id', update );
routes.delete('/:id', destroy );

module.exports = routes;