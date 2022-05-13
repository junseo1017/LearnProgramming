// crypto : 단방향 암호화
// 암호화는 멀티 스레드로 작동되는게 일반적(cpu를 많이 사용하기 때문에) 가능하지만 복호화는 불가능
// 암호화 : 평문을 암호로 만듬
// 복호화 : 암호를 평문으로 해동
// 단방향 암호화의 대표 주자는 해시 기법
// 해시 : 문자열을 고정된 길이의 다른 문자열로 바꾸는 방식
// ryan > 암호화 > abc라는 해시를 만들었을 때 웹 상에는 ryan이라는 정보는 존재하지 않고 abc라는 정보만으로 비교확인하기 때문에 안전하다.
// 평문을 해시로 만들고 다시 되돌리기는 어려움
// createHash(알고리즘) : 사용할 해시 알고리즘
// update(문자열) : 변환할 문자열을 작성
// digest(인코딩) : 인코딩할 알고리즘을 넣어줌
// base64,hex,latin1이 주로 사용됨. base64가 결과 문자열이 가장 짧아 애용됨.
// 예제
const crypto = require('crypto');
console.log(crypto.createHash('sha512').update('password(비밀번호').digest('base64'));

// 양방향 암호화
// 대칭형 암호화
// key 사용됨
// 암호화할 때 복호화 할 때 같은 Key를 사용해야 함.
// 백엔드와 달리 프론트단에서는 누구나 개발자 도구를 통해 내부 정보를 확인할 수 있음.
// 서버에서 보내준 암호화해준 무언가를 프론트에서 해독하려면 key를 노출시켜야 됨. 프론트와 서버관계에서는 같은 키를 사용하는 알고리즘은 지양해야됨
// crypto.createCipheriv를 통해 사용할 수 있지만, 조금 더 간편한 방법으로 crypto.js API를 사용 권장

// util : 각종 편의 기능을 모아둔 모듈
// 노드로 만든 프로그램에서 코드의 수정사항이 발생했을 때 함부로 수정하지 못함. (이미 잘못된 코드로 많은 코드가 빌드되었기 때문에)
// deprecated는 더 이상 사용되지 않고, 잘못된 코드를 사용할 때 노티스를 보내줌.
const dontUse = util.deprecated((x, y) => {
  return x + y;
}, 'dontuse는 deprecated되었으니 사용하지 마세요');
// promisify 노드 환경에서 콜백 함수를 감싸주면 then, catch 문법을 사용할 수 있게 됨.
// 단, 콜백 함수의 매개변수가 (err, data) => {}형태로 되어 있어야 함.
const funcA = util.promisify(crypto.funcA); // 콜백함수를 감싸줌
funcA(1)
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.error(err);
  });





// worker_threads
// 노드에서 멀티 스레드를 사용하는 경우는 극히 드묾(암호화, 압축 등)
// 대부분의 경우 싱글 스레드로 생각해야 됨.
// 메인스레드는 if문쪽에 코드 처리 워커스레드는 else쪽에 처리
// 처음에는 메인스레드에서 실행돼서 메인스레드에서 워커스레드를 실행하고 작업의 분배를 함.
// 워커스레드가 일을 마치면 메인스레드로 보내고 메인스레드에서 작업을 합치고 반환하는 방식.
// 기본적인 예제
const {Worker, isMainThread, parentPort} = require('worker_threads');
if (isMainThread) {
  // 메인스레드
  const worker = new Worker(__filename); //
  worker.on('message', (value) => console.log(value)); // worker스레드에서 작업이 완료되면 메세지를 받음
  worker.on('exit', () => console.log('워커 종료')); // worker thread 종료
  worker.postMessage('ping'); // 워커 스레드에게 ping(작업)을 보냄
} else {
  // 워커스레드
  parentPort.on('message', (value) => console.log(value));
  // parentPort를 통해 부로로부터 메세지를 받을 수 있음
  // 부모가 보낸 ping(작업)은 value라는 인자로 받게 됨.
  parentPort.postMessage('pong'); // 부모에게 pong(완료된 작업의 결과값)이라는 메세지를 보냄
  parentPort.close();
}

// 다중 스레드 사용
const {Worker, isMainThread, parentPort, workerData} = require('worker_threads');

if (isMainThread) {
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      workerData: {start: 1}, // 초기 데이터가 있을 경우 초기 데이터를 삽입
    })
  );
  threads.add(
    new Worker(__filename, {
      workerData: {start: 2}, // 원하는 만큼 threads constance에 추가
    })
  );
  for (let worker of threads) {
    // 반복문을 통해 작업 진행
    worker.on('message', (value) => console.log(value));
    worker.on('exit', () => {
      threads.delete(worker); // 작업이 종료될 경우 thread에서 worker 삭제
      if (threads.size === 0) {
        // 모든 워커가 종료된 경우
        console.log('워커 종료');
      }
    });
  }
  // 아래와 같이 여러개의 worker constance를 만들어도 기능은 하지만 관리가 어렵기 때문에,
  // 중복되지 않는 배열인 Set instance를 통해 관리한다.
  // const worker = new Worker(__filename);
  // const worker2 = new Worker(__filename);
  // const worker3 = new Worker(__filename);
  worker.on('message', (value) => console.log(value));
  worker.on('exit', () => console.log('워커 종료'));
} else {
  const data = workerData; // 위에서 설정한 초기데이터는 workerData를 통해 받아올 수 있음
  pparentPort.postMessage(data.start + 100); // 구체적인 작업 실행
}
