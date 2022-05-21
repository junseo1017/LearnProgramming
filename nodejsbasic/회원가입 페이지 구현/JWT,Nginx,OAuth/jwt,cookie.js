// 로그인 로직에 jwt 토큰 생성 및 쿠키 전달
const passport = require('passport');

// res.cookie 함수 사용하여 token을 클라이언트에 쿠키로 전달
setUserToken = (res, use) => {
  const token = jwt.sign(user, secret); // jwt 토큰 생성
  res.cookie('token', token); // 'token'이라는 이름의 쿠키를 생성한 토큰을 넣어서 응답
};

router.post('/', passport.authenticate('local'), (req, res, next) => {
  setUserToken(res, req.user); //req.user 정보를 바탕으로 서명된 jwt가 cookie에 저장되어 res에 넣어짐
  res.redirect('/');
});

// passport-jwt 패키지를 이용해, 요청된 jwt 토큰의 서명을 확인하고 인증하는 기능을 구현
const JwtStrategy = require('passport-jwt').Strategy;
const cookieExtractor = (req) => {
  const {token} = req.cookies; // req.cookies에서 token을 추출하고 token을 반환
  return token;
};
const opts = {
  secretOrKey: secret, // jwt 토큰을 생성할 때 만들었던 secret 변수
  jwtFromRequest: cookieExtractor, //
};
module.exports = new JwtStrategy(opts, (user, done) => {
  done(null, user);
});

passport.use(jwt);
