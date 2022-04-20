const express = require("express");
const router = express.Router();

const userCtrl = require("../controller/userController");
const employeeCtrl = require("../controller/employeeController")

router.post('/register', userCtrl.register);

router.get('/login', userCtrl.login);

// Employee
// Create Employee
router.post('/createEmploy', employeeCtrl.createEmployee);
// List Employee
router.get('/listEmployees', employeeCtrl.findEmployees);

module.exports = router;