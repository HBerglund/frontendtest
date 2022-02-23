const express = require('express');

const {
  getAllCompanies,
  saveNewCompany,
} = require('../controllers/company.controller');

const companyRouter = express.Router();

companyRouter.get('/companies', getAllCompanies);
companyRouter.post('/companies', saveNewCompany);

module.exports = companyRouter;
