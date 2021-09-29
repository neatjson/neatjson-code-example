const { NeatFile } = require('neatjson');

const file = new NeatFile('index.njson');
const index = file.toObject();

console.log(index['text']);
