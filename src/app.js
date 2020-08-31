// const shortId = require('shortid');
// const axios = require('axios');

// // import { logUpperCase, logLowerCase } from './logger';
// import * as loggerModule from './logger';

// require('./styles.css');

// преобразование в ES6
import shortId from 'shortId';
import axios from 'axios';
import * as logger from './logger';
import './styles.css';

axios
  .get('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => console.log(res.data));

console.log(shortId());

// logUpperCase('qweqwe message upper!!!!');
// logLowerCase('CHECK these letters WITH small');
// --------------------------------------------------------
// loggerModule.logLowerCase('CHECK THIS MAN ');
// loggerModule.logUpperCase('from small letters');
// --------------------------------------------------
logger.logLowerCase('CHECK THIS NEW ATTEMPT');
logger.logUpperCase('new att with small letters');
