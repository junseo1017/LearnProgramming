// 노드에서의 예외
// 예외(Exception) : 처리하지 못한 에러
// 노드스레드를 멈춤
// 노드는 싱글 스레드이기 때문에 스레드 에러를 잘 처리하지 못하면 프로세스 자체가 멈추게 됨.

// 예외 처리 방식
// 에러가 발생할 만한 곳을 try catch로 감싼다.
setInterval(() => {
  console.log('시작');
  try {
    throw new Error('에러 발생시키기');
  } catch (err) {
    console.error(err); // 에러를 처리함으로서 에러가 발생해도 프로세스가 멈추지 않는다.
  }
}, 1000);

// 모든 곳에 위처럼 처리할 필요는 없음(try catch를 써야되는 곳과 안써도 되는 곳을 구분할 줄 알아야 함)
// fs모듈같은 경우 콜백 함수에서 error 객체를 제공하기 때문에 안써도 되는 것이다.
const fs = require('fs');
setInterval(() => {
  fs.unlink('./abcdefg.js', (err) => {
    console.error(err);
  });
}, 1000);
// node 실행하면 에러가 반복해서 콘솔에 찍힘(프로세스가 멈추지 않음)
// node에서 비동기 모듈의 콜백 함수에서의 에러는 프로세스를 멈추지 않는다.

// 모든 에러를 한 곳으로 모아서 처리시키는 방법도 있음

process.on('uncaughtException', (err) => {
  console.error('에러 발생', err);
});
