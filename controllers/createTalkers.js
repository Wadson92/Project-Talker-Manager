const fs = require('fs');

const createTalk = (req, res, _next) => {
  try {
    const { name, age, talk } = req.body;
    const talker = fs.readFileSync('./talker.json');
    const everyTalk = JSON.parse(talker);
    const newTalker = {
      id: everyTalk.length + 1,
      name,
      age,
      talk,
    };
  
    everyTalk.push(newTalker);
    
    fs.writeFileSync('./talker.json', JSON.stringify(everyTalk));
    return res.status(201).json(newTalker);
  } catch (error) {
    console.log(error);
  }
};

module.exports = createTalk;
