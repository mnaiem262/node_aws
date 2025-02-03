const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from AWS EC2! git hub +  acssssssction');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
