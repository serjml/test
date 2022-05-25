const os = require('os');
const { userName, sayHi } = require('./test');

const nameSon = 'Herman';

console.log(sayHi(userName));
console.log(os.platform(), os.release());

module.exports = nameSon;

