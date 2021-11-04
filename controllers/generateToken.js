const crypto = require('crypto');

const generate = (param) => crypto.randomBytes(param).toString('hex').slice(param);

module.exports = generate;