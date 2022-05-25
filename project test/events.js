// const EventEmitter = require('events');

// const emitter = new EventEmitter;

// emitter.on('start', (message, msg) => console.log(message + ' ' + msg ));

// emitter.emit('start', 'hithere', 'hello');

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// const handler1 = () => console.log(1);
// const handler2 = () => console.log(2);
// const handler3 = () => console.log(3);
// const handler4 = () => console.log(4);


// emitter.on('start', handler1);
// emitter.on('start', handler2);
// emitter.on('start', handler3);
// emitter.prependListener('start', handler4);

// emitter.emit('start');
const EventEmitter = require('events');
const emitter = new EventEmitter();

const handler = message => console.log(message);

emitter.on('start', handler);

emitter.emit('start', 'Hello'); // Hello

emitter.off('start', handler); // дальнейшие события не будут обработаны

emitter.emit('start', 'from'); 
emitter.emit('start', 'Node.js');