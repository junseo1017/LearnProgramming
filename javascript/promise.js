// 프로미스 : 내용이 실행은 되었지만 결과를 아직 반환하지 않은 객체
// then을 붙이면 결과를 반환함
// 실행이 완료되지 않았으면 완료된 후에 Then 내부 함수가 실행됨.
// Resolve(성공리턴값) -> then으로 연결
// Reject(실패리턴값) -> catch로 연결
// Finally 부분은 무조건 실행됨.

// Promise 기본 문법은 아래와 같음
let p = new Promise((resolve, reject) => {
  let a = 1 + 2;
  if (a == 3) {
    resolve('trun'); // 성공시 리턴값
  } else {
    reject('false'); // 실패시 리턴값
  }
});

p.then((message) => {
  // 성공시 리턴값이 then의 매개변수
  console.log(message);
}).catch((message) => {
  // 실패시 리턴값이 catch의 매개변수
  console.log(message);
});

// 기존 중첩된 콜백 함수는 아래와 같음
const a = false;
const b = false;

function testFunction(callback, errorCallback) {
  if (a) {
    errorCallback({
      name: 'kim',
      message: 'junseo',
    });
  } else if (b) {
    errorCallback({
      name: 'lee',
      message: 'junseo',
    });
  } else {
    callback('there is no one in the back yard');
  }
}

testFunction(
  (c) => {
    console.log(c);
  },
  (error) => {
    console.log(error.name + error.message);
  }
);

Promise.all; // 프로미스를 모두 실행시키고 제일 마지막으로 실행된 것에서 실행
Promise.race; // 제일 빨리 실행된 것부터 실행
