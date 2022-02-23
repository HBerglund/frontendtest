const express = require('express');
const cors = require('cors');
const employeeRouter = require('./routers/employee.router');
const companyRouter = require('./routers/company.router');

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.use(employeeRouter);
app.use(companyRouter);

app.listen(PORT, () =>
  console.log('Server is up and running on port' + ' ' + PORT)
);
