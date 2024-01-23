const { add, logger } = require('./func');
const path = require('node:path');

console.log(add(2, 4));
logger('hello world');

let d = path.parse(__dirname);
let f = path.parse(__filename);
console.log(d);
console.log(f);
// -----------------------------------------------
const Logger = require('./func');

const logger2 = new Logger();

logger2.on('loginAMessage', (arg) => console.log('message from the app file', arg));

logger2.log('this is cool!');

// ------------------------------------------------

// const http = require('http');

// const server = http.createServer((req, res) => {
//   if (req.url == '/') {
//     res.write('hello server');
//     res.end();
//   } else {
//     res.write('different route!');
//     res.end();
//   }
// });

// server.listen(3000);
// console.log('listening at port 3000: http://localhost:3000/');
