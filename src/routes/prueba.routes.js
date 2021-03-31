const {Router} = require('express');
const route=Router()
const PruebaCtrl= require('../controllers/prueba.controllers');

route.get('/', PruebaCtrl.obtener);
route.post('/', PruebaCtrl.crear);
route.put('/:id', PruebaCtrl.actualizar);
route.delete('/:id', PruebaCtrl.eliminar);

module.exports=route
