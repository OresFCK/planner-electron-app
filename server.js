const express = require('express');
const cors = require('cors');
const db = require('./db');
const usersRouter = require('./routes/users'); 

const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
