const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const MyEmitter = new MyEmitter();
MyEmitter.on('event', () => {
    console.log('an event occurred!');
});
MyEmitter.emit('event');