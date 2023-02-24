const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const MyEmitter = new MyEmitter();
MyEmitter.on('WaterFull', () => {
    console.log('Please turn off motor!');
    setTimeout(() => {
        console.log('Please turn off motor!');
    }, 3000)
});


//MyEmitter.emit('event');