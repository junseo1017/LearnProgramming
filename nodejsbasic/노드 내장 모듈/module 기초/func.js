// const value = require('./var');
//require는 노드에서 제공하는 api임
// console.log(value);
// result : {odd:'홀수입니다.',even:'짝수입니다.',}

// var.js 모듈이 배열로 넘어왔다면 (module exports = [odd, even])
// console.log(value);
// result : ['홀수입니다','짝수입니다']

const {odd, even} = require('./var.js');
// 이런식으로 구조분해할당해서 바로 사용가능
// odd = value.odd / even = value.even

function checkOddorEven(number) {
  if (number % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = checkOddorEven; // 다른 곳에서 넘겨받은 변수를 가지고 만든 식을 또 넘겨줄 수 있음
// module.exports = {checkOddorEven, odd, even}; // 이미 받은 변수를 또 넘겨줄수도 있음. 배열 객체 모두 가능
// module.exports는 파일에서 단 한번만 사용가능
