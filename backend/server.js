const express = require('express');
const cors = require('cors');

const app = express();


//Middlewares
app.use(cors());
app.use(express.json());





app.listen(5000, () => {
  console.log('Server listening on port 5000!');
});