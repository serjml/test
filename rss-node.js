// // const { stdin, stdout } = require("process");

// // // const { stdin, stdout } = process;
// // stdout.write('What is your name?\n');

// // stdin.on('data', data => {
// //   const dataStr = data.toString();
// //   const revName = dataStr.split('').reverse().join('');
// //   stdout.write(revName);
// //   process.exit();
// // })


// // const myBuffer = Buffer.from('Hi Node.js!', 'utf-8');


// // console.log(myBuffer);
// // const bufferStringified = myBuffer.toString();
// // // Hi Node.js!
// // console.log(bufferStringified);

// // const flagIndex = process.argv.indexOf('-m');
// // if (flagIndex !== -1) {
// //   const message = process.argv[flagIndex + 1];
// //   console.log(message);
// // }

// // console.log(process.argv);
// // console.log(process.argv.slice(2));

// // function getValue(flag) {
// //   const flagIndex = process.argv.indexOf(flag);
// //   return flagIndex !== -1 ? process.argv[flagIndex + 1] : 'Error';
// // }

// // const message = getValue('-m');
// // console.log(message)

// // test.js
// // const protoObj = {
// //   sayHi() {
// //       console.log('Hi!');
// //   }
// // };
// // const obj = {};
// // obj.__proto__ = protoObj;
// // obj.sayHi();

// // const productionMode = process.env.PRODUCTION === "true";
// // if (productionMode) {
// //   console.log('Application is running in production mode');
// //   // do production things
// // } else {
// //   console.log('Application is running in development mode');
// //   // do dev things
// // }

// const { stdout, stdin, exit } = process;
// const flag = process.argv[2];
// const allowedFlags = ['-m', '-s'];
// if (!allowedFlags.includes(flag)) {
//     stdout.write('Попробуйте ещё раз запустить файл с флагом -s или -m');
//     exit();
// }
// stdout.write('Введите, пожалуйста, два числа\n');
// stdin.on('data', data => {
//     const numString = data.toString();
//     const numStringsArray = numString.split(' ');
//     const hasIncorrectLength = numStringsArray.length !== 2;
//     const hasIncorrectValues = numStringsArray.some(numStr => Number.isNaN(+numStr));
//     if (hasIncorrectLength || hasIncorrectValues) {
//         stdout.write('Нужно ввести 2 числа, разделенных пробелом');
//         exit();
//     }
//     const [firstNum, secondNum] = numStringsArray.map(numStr => +numStr);
//     if (flag === '-s') {
//         const sum = firstNum + secondNum;
//         stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
//     } else {
//         const mult = firstNum * secondNum;
//         stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
//     }
//     exit();
// });

const { stdin, stdout } = process;
stdin.on('data', data => stdout.write(data));
process.on('exit', () => stdout.write('Удачи в изучении Node.js!'));