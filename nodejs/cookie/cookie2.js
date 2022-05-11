const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');

const parseCookies = (cookie = '') =>
  cookie
    .split(';')
    .map((v) => v.split('='))
    .reduce((acc, [k, v]) => {
      acc[k.trim()] = decodeURIComponent(v);
      return acc;
    }, {});

http
  .createServer(async (req, res) => {
    const cookies = parseCookies(req.headers.cookie); // { mycookie: 'test' }
    // 주소가 /login으로 시작하는 경우
    if (req.url.startsWith('/login')) {
      // html에서 보낸 login get요청
      const {query} = url.parse(req.url);
      const {name} = qs.parse(query); // 쿼리스트링에서 네임을 추출해냈음
      const expires = new Date();
      // 쿠키 유효 시간을 현재시간 + 5분으로 설정
      expires.setMinutes(expires.getMinutes() + 5);
      res.writeHead(302, {
        // 302 > redirection
        Location: '/',
        'Set-Cookie': `name=${encodeURIComponent(name)}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        // encodeURIComponent를 통해 한글을 읽을 수 있게 만든다.
        // expires 쿠키의 유효기간 설정 안쓰면 세션 쿠키로 취급(브라우저를 닫아야 쿠키가 없어짐)
        // httpOnly는 자바스크립트로 쿠키에 접근 못하게 함. 로그인을 위해 사용하는 쿠키는 httponly가 필수임.
        // path는 '/'기본페이지의 하위 경로는 쿠키가 유효하다는 뜻
      });
      res.end();
      // name이라는 쿠키가 있는 경우
    } else if (cookies.name) {
      res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
      res.end(`${cookies.name}님 안녕하세요`);
    } else {
      try {
        const data = await fs.readFile('./cookie2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
      } catch (err) {
        res.writeHead(500, {'Content-Type': 'text/plain; charset=utf-8'});
        res.end(err.message);
      }
    }
  })
  .listen(8084, () => {
    console.log('8084번 포트에서 서버 대기 중입니다!');
  });
