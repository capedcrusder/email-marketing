const crypto = require('crypto'); // this module is downloaded in node.js module


const base64Key = crypto.randomBytes(32).toString('base64');
console.log(base64Key);

/*
const utf8Key = crypto.randomBytes(32).toString('utf8');
console.log(utf8Key);
*/
