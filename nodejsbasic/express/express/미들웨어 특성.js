app.use((req, res, next) => {
  // app 객체 내부 함수는 미들웨어, use는 모든 요청에 실행하고 싶을 때 사용
  console.log('모든 요청에 실행');
  next();
});
////

app.use('/about', (req, res, next) => {
  // 주소를 붙이면 about에서만 실행됨
  console.log('모든 요청에 실행');
  next();
});
////

app.use(
  // app 객체 하나에 여러개의 미들웨어가 있어도 됨
  (req, res, next) => {
    console.log('모든 요청에 실행');
    next();
  },
  (req, res, next) => {
    console.log('모든 요청에 실행');
    next();
  },
  (req, res, next) => {
    console.log('모든 요청에 실행');
    next();
  }
);
////

app.use((req, res, next) => {
  // 기본적으로 상태코드 200 생략되어 있음
  res.status(200).send('hi');
});
////

app.get('/', (req, res) => {
  // 한 요청(이전 미들웨어도 포함)에 에서 두 번이상 response하면 에러나옴
  res.sendFile(path.join(__dirname, 'index.html'));
  res.json();
  res.send('hi');
});
////

app.get('/', (req, res) => {
  // 기존 http에서는 아래와 같이 표기
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('hi');

  // header도 더 간편하게 표기
  res.setHeader('Content-Type', 'text/html');
  // express에서는 위 두줄을 아래 한 줄로 표기
  res.status(200).send('안녕하세요'); //status 생략가능
});

// server 순서
// app과 관련된 세팅
// 공통 적용하는 미들웨어 세팅
// 라우터 세팅(범위가 넓을수록 아래쪽)
// 에러 미들웨어
