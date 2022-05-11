const {odd, even} = require('./var');
const checkNumber = require('./func'); // module을 받을 때 변수명은 수정 가능 / 구조분해 할당 시에는 이름이 같아야 함

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}
console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));
