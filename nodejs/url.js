const url = require('url');
// WHATWG방식
const {URL} = url;
const myURL = new URL('http://www.naver.com');
console.log(myURL);
console.log(url.format(myURL));
