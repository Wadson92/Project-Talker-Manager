const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', (_req, res, _next) => {
  try {
    const response = fs.readFileSync('./talker.json');
    res.status(HTTP_OK_STATUS).send(JSON.parse(response));
  } catch (err) {
    console.log('Erro', err.message);
  }
});

app.listen(PORT, () => {
  console.log('Online');
});
