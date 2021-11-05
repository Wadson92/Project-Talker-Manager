const fs = require('fs');

const deleteTalker = (req, res) => {
  try {
    const talker = fs.readFileSync('./talker.json');
    const everyTalk = JSON.parse(talker);
    const { id } = req.params;
    const deleted = everyTalk.filter((talkerId) => talkerId.id !== Number(id));

    fs.writeFileSync('./talker.json', JSON.stringify(deleted));
    return res.status(200).json({ message: 'Pessoa palestrante deletada com sucesso' });
  } catch (error) {
    console.log(error);
  }
};

module.exports = deleteTalker; 
