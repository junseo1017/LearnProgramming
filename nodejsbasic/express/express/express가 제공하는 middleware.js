const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cookieParser('crypto')); // cookieParser 선언  괄호안에 특정 암호를 넣고 암호화 할 수 있음
app.use(
  session({
    resave: false, // 요청이 왔을 때 세션에 수정사항이 생기지 않아도 다시 저장할지 여부
    saveUninitialized: false, //세션에 저장할 내역이 없더라도 세션을 저장할지 여부
    secret: 'crypto', // cookieParser 암호랑 똑같이 설정해도 됨
    cookie: {
      httpOnly: true, // 자바스크립트로 해킹 방지
    },
  })
);
app.use(express.json());
app.use(express.urlencoded({extended: true})); // 넣어두면 알아서 데이터가 파싱됨. 필수로 들어가있음.

// express session
app.get('/', (req, res, next) => {
  req.session.id = 'hello'; // 요청을 보낸 사용자만 헬로가 됨. // 개인의 저장공간이 생김 // 요청마다 개인의 저장공간을 만들어줌
  res.sendFile(path.join(__dirname, 'index.html'));
});

//static
app.use('요청경로', express.static(path.join('실제경로')));
// 아래 예시
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  req.body.name; // 등 데이터가 알아서 파싱돼서 바로 사용할 수 있음 req.body.hello 등 req.body로 들어가있음
  req.cookies; // {mycookie:'test'}
  //setCookie
  res.cookie('name', encodeURIComponent(name), {
    expires: new Date(),
    httpOnly: true,
    path: '/',
  });
  //deleteCookie
  res.clearcookie('name', encodeURIComponent(name), {
    httpOnly: true,
    path: '/',
  });
  res.sendFile(path.join(__dirname, 'index.html'));
});
