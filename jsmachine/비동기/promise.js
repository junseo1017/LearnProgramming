// promise
// 실행됐는데 결과값을 나중에 쓸 수 있는거

// 일반적인 비동기 콜백
// 1000ms 뒤에 무조건 실행된다.
setTimeout(() => {
  console.log('a');
}, 1000);

// 프로미스 원할 때 결괏값을 사용할 수 있다.
const a = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 1000);
});
const b = a.then((res) => {
  console.log(res);
});
b.then(() => {});

// promise
const p1 = axios.get('url');
const p2 = axios.get('url');
const p3 = axios.get('url');
const p4 = axios.get('url');
const p5 = axios.get('url');
const p6 = axios.get('url');
// promise.all의 단점 하나라도 문제가 생기면 catch로 받아진다. 어떤게 실패했는지 알 수 없음
Promise.all([p1, p2, p3, p4, p5, p6])
  .then((results) => {})
  .catch((error) => {}); // 여기서의 catch는 promise.all과 then까지 포함된 catch다.

// 성공과 실패 모두 then에서 구분해서 받을 수 있음
Promise.allSettled([p1, p2, p3, p4, p5, p6])
  .then((result) => {})
  .catch((error) => {})
  .finally(() => {});

try {
} catch {
} finally {
}
// 콜백헬이 안좋은 이유
// 가독성이 떨어지는 것도 이유지만
// 근본적인 문제는 결괏값을 바로 받아야 한다.
axios.get('url', function (res) {
  axios.get('url2', function (res) {
    axios.get('url3', function (res) {
      return console.log(res);
    });
  });
});

let a = 2;
const p = new Promise((resolve, reject) => {
  // new Promise의 익명함수가 바로 호출된다.
  console.log('good');
  setTimeout(() => {
    a = 5;
    console.log(a);
    resolve(a);
  }, 0);
});
console.log('hi');
p.then((result) => {
  // then은 이벤트 리스너처럼 생각하는게 편함, 이벤트 루프 백그라운드로 이동
  // then이 호출 스택에 불리기 위한 조건은 resolve가 호출되는 것. 그 전까지는 web api에서 대기
  console.log('result', result);
});
// result
// good hi 5 result,5

//프로미스로 반환하기
function delayP(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
    reject(err);
  });
}

async function a() {
  const a = await 1;
  const b = await Promise.resolve(1); // resovle 값이 b에 할당된다.
}

// 프로미스 변환
async function a() {
  const a = await 1; // await > then
  console.log('a', a);
  console.log('hi');
  await null;
  const b = await Promise.resolve(1);
  console.log(b);
}
// await 1은 반환값이 프로미스가 아니기 때문에 Promise.resolve(1)로 변환하여 프로미스를 반환시킨다.
Promise.resolve(1)
  .then((a) => {
    console.log('a', a);
    console.log('hi');
    return null;
  })
  .then(() => {
    return Promise.resolve(1);
  })
  .then((b) => {
    console.log(b);
  });

// async 호출 스택 분석할 떄 async 함수 a의 내부 첫 번째 await을 만나면 a는 실행이 끝난 것으로 처리한다.
