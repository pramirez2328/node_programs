const _ = require('underscore');

var stooges = [
  { name: 'moe', age: 40 },
  { name: 'larry', age: 50 },
  { name: 'curly', age: 60 },
];
const names = _.pluck(stooges, 'name');

console.log(names); // ['moe', 'larry', 'curly']
