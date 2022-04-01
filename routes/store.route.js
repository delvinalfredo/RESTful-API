const express = require('express')
const router = express.Router()

const controllerStores = require('../controllers/store.controller')

router.get('/order', controllerStores.getOrders);

router.get('/order/:id', controllerStores.getOrdersByID);


// // create new employee
// router.post('/', employeeController.createNewEmployee);

// // update employee
// router.put('/:id', employeeController.updateEmployee);

// // delete employee
// router.delete('/:id',employeeController.deleteEmployee);

module.exports = router;