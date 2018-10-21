var EventEmitter = require('events');

class MyFunc extends EventEmitter {}

const myFunc = new MyFunc();
myFunc.on('sachina', () => {
  console.log('an event occurred sachina!');
});
myFunc.emit('sachina');