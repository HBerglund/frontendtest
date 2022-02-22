const express = require('express');

const { getAllEmployees } = require('../controllers/employee.controller');

const employeeRouter = express.Router();

employeeRouter.get('/employees', getAllEmployees);

module.exports = employeeRouter;
