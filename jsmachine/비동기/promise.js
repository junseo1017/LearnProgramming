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
