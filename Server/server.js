const express = require('express');
const cors = require('cors');
const { EmployeeData } = require('./Data/Data');
const app = express();
const PORT = 3000;

app.use(cors());

app.get('/api/employees', (req, res) => {
  res.json(EmployeeData);
});

// Handle requests to the root path
app.get('/', (req, res) => {
    res.json(EmployeeData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
