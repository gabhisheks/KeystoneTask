const folder = `${__dirname}/model`;
const fs = require('fs');

fs.readdirSync(folder).forEach(file => {
  require(`${folder}/${file}`);
});