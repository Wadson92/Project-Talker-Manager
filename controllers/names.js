const fs = require('fs');

const HTTP_OK_STATUS = 200;

module.exports = (_req, res, _next) => {
  try {
    const response = fs.readFileSync('./talker.json');
    res.status(HTTP_OK_STATUS).send(JSON.parse(response));
  } catch (err) {
    console.log('Erro', err.message);
  }
};
