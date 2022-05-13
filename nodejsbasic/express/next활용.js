app.use((req, res, next) => {
  console.log('모든 요청에 실행');
  next();
});

app.get('/', (req, res, next) => {
  res.json({hello: 'nice'}); // res.json은 return이 아님
  console.log('hello nice'); // res가 돼더라도 콘솔은 실행된다.
});

// api 서버를 만들면 res.json을 많이 쓰고
// 웹 서버를 만들면 res.sendFile을 많이 씀

app.use(
  (req, res, next) => {
    console.log('모든 요청에 실행');
    next();
  },
  (req, res, next) => {
    try {
      console.log('hi');
    } catch (error) {
      next(error); // next에 인수가 들어가면 에러처리 미들웨어로 이동함
    }
  }
);

app.get(
  '/',
  (req, res, next) => {
    res.sendFile('index.html');
    if (true) {
      next('route');
    } else {
      next();
    }
  },
  (req, res) => {
    console.log('??');
  }
);

app.get('/', (req, res) => {
  console.log('!!');
});
