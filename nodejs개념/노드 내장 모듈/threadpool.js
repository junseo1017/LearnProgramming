// fs, crypto, zlib 같은 모듈의 메서드를 실행할 때는 백그라운드에서 동시에 실행된다.
// 하지만 백그라운드에서 모듈을 무한정으로 동시에 실행할 수는 없으며 노드에서는 기본적으로 4개를 실행하며,
// node 명령어 SET UV_THREADPOOL_SIZE=8로 동시에 실행하는 모듈을 늘릴 수 있다.

// test
const crpyto = require('crypto');
const pass = 'pass';
const salt = 'salt';
const start = Date.now();
crpyto.pbkdf2(pass, salt, 1_000_000, 128, 'sha512', () => {
  console.log(1, Date.now() - start);
});

// 이벤트
// 이거는 알아두면 편리
// 브라우저처럼 이벤트를 등록해놓을 수가 있음
// 나중에 이벤트를 실행했을 때 특정 동작을 실행할 수 있음
// 이벤트 패턴으로 여러 파일간 동작을 공유할 수 있음.
// 어떤 파일에다 이벤트1을 심어놓고, 다른 파일에 이벤트1을 호출하면 그 파일에서 이벤트1의 콜백함수가 실행되고 blahblahblah

const EventEmitter = require('events'); // EventEmitter라는 생성자 생성
const {listeners} = require('process');
const myEvent = new EventEmitter(); // 나만의 커스텀 이벤트 생성
myEvent.addListener('event1', () => {
  console.log('event1');
});
myEvent.on('event2', () => {
  // on === adListener
  console.log('event2');
});
myEvent.on('event2', consoleEvent2_2); // 같은 이벤트에 콜백을 여러개 둘 수 있음

myEvent.once('event3', () => {
  // 이벤트가 한 번만 실행됨.
  console.log('add event2.1');
});

myEvent.emit('event1');
myEvent.emit('event2');
myEvent.emit('event3');
myEvent.emit('event3'); // error once메서드는 이벤트를 한 번만 실행

myEvent.removeAllListeners('event1'); // event1의 모든 이벤트(콜백) 삭제
myEvent.emit('event1'); // error

myEvent.removeListener('event2', consoleEvent2_2); // 모든 이벤트가 특정 이벤트를 삭제할 수 있음. 변수로 넣어줘야함

console.log(myEvent.listenerCount('event2')); // 이벤트에 콜백함수가 몇개 등록되어 있는지 확인
