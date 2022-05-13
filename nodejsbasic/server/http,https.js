// https
//  - 웹 서버에 SSL 암호화를 추가하는 모듈
//  - 오고 가는 데이터를 암호화해서 중간에 다른 사람이 요청을 가로채더라도 내용을 확인할 수 없음
//  - HTTPS 적용이 필수(개인 정보가 있는 곳은 특히)

// https 적용
const https = require('https');
const fs = require('fs');
https
  .createServer(
    {
      // 인수가 하나 추가됨 (cert,key,ca)
      // 암호화해서돼서 인증서를 인증 기관에서 얻어야 하는 절차가 있음.
      // 싱크쓰는 이유는 서버 시작 전 초기화할 때 실행해야 되기 때문.
      // 공식 인증 기관중 유명한 곳 Let'sencrypt

      cert: fs.readFileSync('도메인 인증서 경로'),
      key: fs.readFileSync('도메인 비밀키 경로'),
      ca: [fs.readFileSync('상위 인증서 경로'), fs.readFileSync('상위 인증서 경로')],
    },
    (req, res) => {
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.write('<h1>hello node!</h1>');
      res.end('<p>hello server!</p>');
    }
  )
  .listen(443, () => {
    //https인 경우에는 443. 생략을 위해선 443으로 해야됨
    console.log('443서버에서 대기중');
  });

// http2
// SSL 암호화와 더불어 최신 HTTP 프로토콜인 http/2를 사용하는 모듈
// 요청 및 응답 방식이 기존 http/1.1보다 개선됨
// 웹의 속도도 개선됨
const http2 = require('http2');
const fs = require('fs');
http2
  .createServer(
    {
      // 인수가 하나 추가됨 (cert,key,ca)
      // 암호화해서돼서 인증서를 인증 기관에서 얻어야 하는 절차가 있음.
      // 싱크쓰는 이유는 서버 시작 전 초기화할 때 실행해야 되기 때문.
      // 공식 인증 기관중 유명한 곳 Let'sencrypt

      cert: fs.readFileSync('도메인 인증서 경로'),
      key: fs.readFileSync('도메인 비밀키 경로'),
      ca: [fs.readFileSync('상위 인증서 경로'), fs.readFileSync('상위 인증서 경로')],
    },
    (req, res) => {
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
      res.write('<h1>hello node!</h1>');
      res.end('<p>hello server!</p>');
    }
  )
  .listen(443, () => {
    //https인 경우에는 443. 생략을 위해선 443으로 해야됨
    console.log('443서버에서 대기중');
  });

// cluster
// http2 적용할 때 함께 적용하면 좋음
// 싱글 스레드인 노드가 cpu 코어를 모두 사용할 수 있게 해주는 모듈
// 포트를 공유하는 노드 프로세스를 여러 개 둘 수 있음
// 요청이 많이 들어왔을 때 병렬로 실행된 서버의 개수만큼 요청이 분산됨
// 서버에 무리가 덜 감
// cluster로 코어 하나당 노드 프로세스 하나를 배정 가능
// 단점 : 컴퓨터 자원(메모리,세션) 공유 못함
// Redis등 별도 서버로 해결

