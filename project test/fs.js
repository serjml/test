const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), err => {   //create folder
//   if (err) throw err;
//   console.log('folder was create');
// });

// fs.mkdir('notes2', err => {  //create folder
//   if (err) throw err;
//   console.log('folder was create');
// });

// fs.writeFile(                                                                   // create file with string 'hello everyone'
//   path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello Everyone', (err) => {
//     if (err) throw err;
//     console.log('file was created');
//   }
// )

// fs.appendFile (                                                                    // added extra string to file
//   path.join(__dirname, 'notes', 'mynotes.txt'), 'From append file', (err) => {
//     if (err) throw err;
//     console.log('Файл был изменен');
//   }
// );

// fs.readFile(                                                                          // read file information
//   path.join(__dirname, 'notes', 'mynotes.txt'), 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

// fs.rename (
//   path.join(__dirname, 'notes', 'mynotes.txt'),
//   path.join(__dirname, 'notes', 'notes.txt'),
//   err => {
//     if (err) throw err;
//     console.log('Файл переименован');
// }
// )

const os = require('os');

// Платформа
console.log(os.platform());

// Архитектура
console.log(os.arch());

// Информация о CPU
console.log(os.cpus());

// Общий объём памяти
console.log(os.totalmem());

// Объём свободной памяти
console.log(os.freemem());

// Корневая директория
console.log(os.homedir());

// Время работы системы
console.log(os.uptime());

// Символ окончания строки в данной системе
console.log(os.EOL);