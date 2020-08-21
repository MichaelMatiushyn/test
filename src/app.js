var shortId = require('shortid');
var loggerModule = require('./logger.js');
var axios = require('axios');

require('./styles.css')
axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res.data));

console.log(loggerModule);
console.log(shortId());

loggerModule.log('qweqwe message!!!!');
