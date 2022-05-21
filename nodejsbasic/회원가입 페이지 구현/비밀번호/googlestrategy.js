const passport = require('passport');
const router = require('../../express/express/routes');

// 구글 로그인이 완료된 후 결과를 전달받는 부분
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = {
  // OAuth 클라이언트 설정값 및 완료 결과를 전달받을 callbackURL을 config로 설정
  clientID: 'clientID',
  clientSecret: 'clientSecret',
  callbackURL: 'callbackUrl', // 구글 로그인이 완료되면 다시 서비스로 돌아와야 하는데 그 서비스 url임
};
//accessToken, refreshToken은 다른 구글 API들을 사용하기 위한 토큰
new GoogleStrategy(config, (accessToken, refreshToken, profile, done) => {
  // profile은 전달받은 유저 정보. 이를 이용해 유저를 생성하거나 OAuth 정보를 업데이트 함.
  const {email, name} = profile._json;
});

// authenticate
// auth/google 접근 시 자동으로 구글 로그인 페이지로 넘어감
// 로그인 완료 후 로그인 정보를 /auth/google/callback으로 전달해 줌
// 전달받은 데이터는 strategy에서 처리
// 처리가 완료되면 request handler 실행
passport.use(google);
router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}), (req, res, next) => {
  res.redirect('/');
});

// 구글 로그인
// /auth/google로 link시 passport가 자동으로 구글 로그인 페이지로 이동시켜주고, 로그인 결과를 /auth/google/callback으로 전달해 줌
td: a((href = '/auth/google'));
