const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.json('Hello World!'));

app.get('/heavy', (req, res) => {
  let counter = 0;

  while (counter < 10000000000) {
    counter++;
  }

  res.json(`Hello World! ${counter}`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
