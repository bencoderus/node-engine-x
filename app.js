const express = require('express');
const { okResponse, badRequestResponse } = require('response-transformer');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => okResponse(res, 'Hello world'));

app.get('/error', (req, res) =>
  badRequestResponse(res, 'An error occurred', {
    reason: 'The request was malformed',
  }),
);

app.get('/heavy', (req, res) => {
  let counter = 0;

  while (counter < 10000000000) {
    counter++;
  }

  res.json(`Hello World! ${counter}`);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
