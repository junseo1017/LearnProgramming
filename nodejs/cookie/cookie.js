// 쿠키의 필요성
//  - 누가 요청을 보냈는지 모름(IP 주소와 브라우저 정보 정도만 앎)
//  - 로그인을 구현하면 됨
//  - 쿠키와 세션

// 쿠키 : key=value의 쌍
//  - 매 요청마다 서버에 동봉해서 보냄
//  - 서버는 쿠키를 읽어 누구인지 파악

// 쿠키 넣는 것을 직접 구현
const http = require('http');
http
  .createServer((req, res) => {
    res.writeHead(200, {'Set-Cookie': 'mycookie=test'});
    // 헤더에 set-cookie를 넣을 수 있음 mycookie > key, test > value
    // 한번 쿠키를 넣어주고 그 다음부터는 알아서 브라우저가 쿠키를 서버에 넣어서 보내줌
    res.end('Hello Cookie');
  })
  .listen(8083, () => {
    console.log('8083 port');
  });

// http 요청과 응답은 헤더와 본문을 가짐
// 헤더는 요청 또는 응답에 대한 정보를 가지고
// 본문은 주고받는 실제 데이터
// 쿠키는 부가적인 정보이므로 헤더에 저장
