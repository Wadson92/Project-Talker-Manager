const express = require('express');
const bodyParser = require('body-parser');
const names = require('./controllers/names');
const talkerId = require('./controllers/talkerId');
const error = require('./middlewares/error');
const { emailSection, passSection, token } = require('./middlewares/LoginValidation');
const createTalk = require('./controllers/createTalkers');
const auth = require('./middlewares/auth');
const validateName = require('./middlewares/validateName');
const validateAge = require('./middlewares/validaeAge');
const validateTalk = require('./middlewares/validateTalk');
const validateTalker = require('./middlewares/validateTalker');
const updateTalker = require('./controllers/updateTalkers');

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
app.post('/talker', auth, validateName, validateAge, validateTalker, validateTalk, createTalk);
app.put(
  '/talker/:id',
  auth,
  validateName,
  validateAge,
  validateTalker,
  validateTalk,
  updateTalker,
);

app.use(error);

app.listen(PORT, () => {
  console.log('Online');
});
