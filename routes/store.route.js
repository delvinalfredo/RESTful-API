const express = require('express')
const router = express.Router()

const controllerStores = require('../controllers/store.controller')

router.get('/', employeeController.getEmployeeList);

module.exports = router;