// JWT 미들웨어 추가
// JWT 토큰은 기본적으로 모든 요청에 포함
// 요청에 토큰이 있는 경우 로그인된 상태로 처리하기 위해
// 모든 요청에 공통적으로 적용할 수 있는 미들웨어로 JWT 로그인을 추가
const passport = require('passport');
app.use((req, res, next) => {
  if ((!req.cookies, token)) {
    next(); // req에 쿠키가 없다면 로그인 안된 상태로 넘어가기
    return;
  }
  return passport.authenticate('jwt')(req, res, next); // jwt Strategy를 사용하여 인증을 하고 req에 저장
});

// jwt logout
// 클라이언트 쿠키를 삭제하여 처리 가능
res.cookie('token', null, {
  // 쿠키에 null 값을 전달해주고 쿠키의 만료 시간을 0으로 설정하여 클라이언트가 쿠키를 바로 만료시키도록 전달
  maxAge: 0,
});
