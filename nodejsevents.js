const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const MyEmitter = new MyEmitter();
MyEmitter.on('WaterFull', () => {
    console.log('Please turn off motor!');
    setTimeout(() => {
        console.log('Please turn off motor! Its a gentle reminder');
    }, 3000)
});

console.log("the script is running");
MyEmitter.emit('WaterFull');
console.log("the script is still running");
