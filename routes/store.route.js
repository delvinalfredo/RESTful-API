const express = require('express')
const router = express.Router()

const controllerStores = require('../controllers/store.controller')

router.get('/order', controllerStores.getOrders);

router.get('/order/:id', controllerStores.getOrdersByID);

router.post('/create', controllerStores.createNewOrders);

router.put('/order/:id', controllerStores.updateOrders);

router.delete('/order/:id',controllerStores.deleteOrders);

module.exports = router;