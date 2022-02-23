const express = require('express');

const {
  getAllEmployees,
  saveNewEmployee,
} = require('../controllers/employee.controller');

const employeeRouter = express.Router();

employeeRouter.get('/employees', getAllEmployees);
employeeRouter.post('/employees', saveNewEmployee);

module.exports = employeeRouter;
