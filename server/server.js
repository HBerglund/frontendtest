const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(express.json({ limit: '5MB' }));
app.use(cors());

app.listen(PORT, () =>
  console.log('Server is up and running on port' + ' ' + PORT)
);
