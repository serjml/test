const fs = require('fs');                                                    // подключаем модуль
const zlib = require('zlib');                                                 // модуль для преобразования/сжатия


const readStream = fs.createReadStream('./docs/text.txt');                   // читает файл 
const writeStream = fs.createWriteStream('./docs/new-text.txt');             // записывает файл
const compressStream = zlib.createGzip();                                     // сжимающий поток



// readStream.on('data', (chunk) => {                                        // читаем файл text.txt, а потом его записывем в новый файл new-text.txt 
//   writeStream.write('\n----CHUNK START-----\n');
//   writeStream.write(chunk);
//   writeStream.write('\n-----CHUNK END------\n');
// });

// readStream.pipe(writeStream);                                                 // читаем файл text.txt, а потом его записывем в новый файл new-text.txt 


const handleError = () => {                                                   // функция хэндлер
  console.log('Error');
  readStream.destroy();                                                       // если ошибка, уничтожаем читающий поток
  writeStream.end('Fatal! Finish with error...');                                                        // в конец читающего потока выводим сообщение об ошибке
}

readStream
  .on('error', handleError)
  .pipe(compressStream)                 // данные будут сжиматься и в файле будет набор непонятных символов
  .pipe(writeStream)
  .on('error', handleError);            // проверяем ошибку при чтении и при записи