// 비동기는 동시가 아니라 순서다.
// 비동기 코드도 정해진 순서가 있다.
// 비동기를 동기로 바꾸지 마라.

setTimeout(() => {
  console.log('a');
}, 0);

setTimeout(() => {
  console.log('b');
}, 10);

setTimeout(() => {
  console.log('c');
}, 20);

// 본래 이벤트루프는 페이즈별로 세분화되어 있음.
// background 부분은 web api, js 엔진, 운영체제를 포괄하는 개념
// background에는 프로미스, setTimeout, 네트워크 요청(ajax 요청 등), 이벤트 리스너, 커스텀 이벤트 등이 들어갈 수 있다.
// background에서 실행된 함수는 task queue(macro, mirco queue)에 쌓이게 된다. queue에 쌓인 함수는 FIFO 형태

// 큐에 쌓인 함수가 동시에 실행되어야 하는 특정 상황일 때 micro queue의 함수가 먼저 실행된다.
// 계속해서 마이크로 태스트큐가 쌓이게 되면 매크로 태스트는 계속 실행이 안 됨
// Macro : 나머지(setTimeout, eventListener)
// Micro : promise, process.nextTick
