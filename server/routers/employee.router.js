const express = require('express');

const {
  getAllEmployees,
  saveNewEmployee,
  updateEmployee,
} = require('../controllers/employee.controller');

const employeeRouter = express.Router();

employeeRouter.get('/employees', getAllEmployees);
employeeRouter.post('/employees', saveNewEmployee);
employeeRouter.put('/employees/:id', updateEmployee);

module.exports = employeeRouter;
