const path = require('path');

// console.log(__filename);
// console.log(path.basename(__filename));
// console.log(path.dirname(__filename));
// console.log(path.extname(__filename));
// console.log(path.parse(__filename));
// console.log(path.join(__dirname, 'test', 'second.html'));

console.log(path.resolve(__dirname, './test', '/second.html'));