const dataValidate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

const NOT_FOUND_DATA = {
  status: 400,
  message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
};

const NOT_FOUND_RATE = {
  status: 400,
  message: 'O campo "rate" deve ser um inteiro de 1 à 5',
};

module.exports = (req, res, next) => {
  const { talk: { watchedAt, rate } } = req.body;
  try {
    if (!dataValidate.test(watchedAt)) {
      return res.status(NOT_FOUND_DATA.status).json({ message: NOT_FOUND_DATA.message });
    }
    if (+rate < 1 || +rate > 5) {
      return res.status(NOT_FOUND_RATE.status).json({ message: NOT_FOUND_RATE.message });
    }
  } catch (error) {
    console.log(error);
  }
  next();
};