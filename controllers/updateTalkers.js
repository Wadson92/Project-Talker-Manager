const fs = require('fs');

const talker = fs.readFileSync('./talker.json');

const updateTalker = (req, res, _next) => {
  try {
    const { id } = req.params;
    const { name, age, talk } = req.body;
    const everyTalk = JSON.parse(talker);
    const talkerById = everyTalk.findIndex((talkerId) => talkerId.id === Number(id));
    const newTalker = {
      id: Number(id),
      name,
      age,
      talk,
    };
    everyTalk[talkerById] = newTalker;
    fs.writeFileSync('./talker.json', JSON.stringify(everyTalk));
    return res.status(200).json(everyTalk[talkerById]);
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateTalker;
