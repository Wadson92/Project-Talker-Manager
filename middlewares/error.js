module.exports = (err, _req, res, _next) => {
  res.status(404).send({ message: 'Pessoa palestrante não encontrada' });
};