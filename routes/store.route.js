const express = require('express')
const router = express.Router()

const controllerStores = require('../controllers/store.controller')

router.get('/order', controllerStores.getOrders);

module.exports = router;