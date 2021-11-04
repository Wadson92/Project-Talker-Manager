const express = require('express');
const bodyParser = require('body-parser');
const names = require('./controllers/names');
const talkerId = require('./controllers/talkerId');
const error = require('./middlewares/error');
const { emailSection, passSection, token } = require('./middlewares/LoginValidation');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', names);
app.get('/talker/:id', talkerId);
app.post('/login', emailSection, passSection, token);

app.use(error);

app.listen(PORT, () => {
  console.log('Online');
});
