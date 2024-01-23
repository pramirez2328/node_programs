const EventEmitter = require('events');

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    this.emit('loginAMessage', { id: 0, url: 'https://pramirez.net' });
  }
}

const add = (a, b) => a + b;
const logger = (m) => console.log(m);
module.exports = Logger;
module.exports.add = add;
module.exports.logger = logger;
