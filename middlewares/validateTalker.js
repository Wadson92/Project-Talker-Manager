const NOT_FOUND = {
  status: 400,
  message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios',
};

module.exports = (req, res, next) => {
  const { talk } = req.body;
  try {
    if (!talk || !talk.watchedAt || !talk.rate) {
      return res.status(NOT_FOUND.status).json({ message: NOT_FOUND.message });
    }
  } catch (error) {
    console.log(error);
  }
  next();
};