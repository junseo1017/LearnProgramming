const http = require('http');
const fs = require('fs').promises;
const server = http
  .createServer(async (req, res) => {
    // html인지 문자열이 구분을 못하는 브라우저도 존재함 이런 경우에 html이라고 알려줘야 함.
    // 한글 인식을 못하는 곳도 있기 때문에 utf-8도 추가해준다.
    try {
      res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}); // text/html은 html이란 걸 알려줌
      const data = await fs.readFile('./server2.html'); // html을 읽고
      res.end(data); // html을 응답해준다.
    } catch (error) {
      // 비동기는 항상 error 처리 해주기
      console.error(error);
      res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'}); // text/plain은 일반 문자열이란 걸 알려줌
      res.end(err.messsage);
    }
  })
  .listen(8080);
server.on('listening', () => {
  console.log('8080번 포트에서 서버 대기 중');
});
server.on('error', (err) => {
  console.error(err);
});
