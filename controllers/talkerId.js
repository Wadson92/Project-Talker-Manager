const fs = require('fs');

const HTTP_OK_STATUS = 200;
const talkerJson = './talker.json';
const NOT_FOUND = {
  status: 404,
  message: 'Pessoa palestrante não encontrada',
};

module.exports = (req, res, next) => {
  try {
    const { id } = req.params;
    const response = fs.readFileSync(talkerJson);
    const allTalkers = JSON.parse(response);
    const talker = allTalkers.find((talk) => +talk.id === +id);
    if (!talker) {
      return next(NOT_FOUND);
    }
    res.status(HTTP_OK_STATUS).json(talker);
  } catch (erro) {
    console.log(erro);
  }
};
