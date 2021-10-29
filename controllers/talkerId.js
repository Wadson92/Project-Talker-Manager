const fs = require('fs');

const HTTP_OK_STATUS = 200;

module.exports = (_req, res, next) => {
  try {
    const response = fs.readFileSync('./talker.json');
    const test = JSON.parse(response);
    res.status(HTTP_OK_STATUS).send(test[0]);
  } catch (err) {
    next(err);
  }
};
