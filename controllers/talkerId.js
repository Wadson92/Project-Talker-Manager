const fs = require('fs');

const HTTP_OK_STATUS = 200;
const NOT_FOUND = {
  status: 404,
  message: 'Pessoa palestrante não encontrada',
};

module.exports = (req, res, next) => {
  try {
    const talkerJson = './talker.json';
    const { id } = req.params;
    const response = fs.readFileSync(talkerJson);
    const allTalkers = JSON.parse(response);
    const talker = allTalkers.find((talk) => talk.id === parseInt(id, 10));
    if (!talker) {
      return next(NOT_FOUND);
    }
    return res.status(HTTP_OK_STATUS).json(talker);
  } catch (error) {
    console.log(error.message);
  }
};
