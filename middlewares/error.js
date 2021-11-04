module.exports = (err, _req, res, _next) => {
  console.log('caiu aqui');
  res.status(400).send({ message: err.message });
};
