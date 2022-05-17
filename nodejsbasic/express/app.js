const express = require('express');
const path = require('path');
const {addAbortSignal} = require('stream');
const Index = require('./routes/index');
const app = express();

app.set('port', process.env.PORT || 3000);
// 서버에 port라는 속성를 3000으로 넣는 개념 // 전역변수같은 개념

app.use(
  (req, res, next) => {
    // app 객체 내부 함수는 미들웨어, use는 모든 요청에 실행하고 싶을 때 사용
    console.log('모든 요청에 실행');
    next();
  },
  (req, res, next) => {
    throw new Error('에러 발생');
  }
);

app.get('/', (req, res) => {
  //sendFile을 통해 html 파일 서빙 // 기존 fs.readFile 개념
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', (req, res) => {
  res.send('<h1>hello express</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>hello express</h1>');
});

app.get('/category/:name', (req, res) => {
  // 미들웨어는 위에서 아래로 내려오면서 실행되기 때문에 와일드카드는 보통 아래쪽에 둔다
  res.send(`hello ${req.params.name}`);
});

app.get('*', (req, res) => {
  // 모든 요청을 처리하겠다는 뜻
  res.send('<h1>I will take every request</h1>');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send('에러에러');
});

app.listen(app.get('port'), () => {
  console.log('3000번 포트에서 서버 실행 중');
});
