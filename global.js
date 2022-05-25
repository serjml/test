// console.log(global);

// setTimeout (() => {
//   console.log('hello')
// }, 2000);

// console.log(__dirname);
// console.log(__filename);

// console.log(process.argv);
// console.log(`hello, ${process.argv[2]}`);

const url = new URL('htttp://vk.com/path/name#test');
console.log(url.hostname);
console.log(url.href);
console.log(url.pathname);
console.log(url.hash);