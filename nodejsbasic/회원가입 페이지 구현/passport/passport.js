// express.js 어플리케이션에 간단하게 사용자 인증 기능을 구현하게 도와주는 패키지
// 유저 세션 관리 및 다양한 로그인 방식 추가 가능

// passport-local
// 다양한 로그인 방식을 구현하기 위해 strategy라는 인터페이스를 제공
// strategy 인터페이스에 맞게 설계된 다양한 구현체들이 있음(facebook,google 등)
// passport-local은 username,password를 사용하는 로그인의 구현체

// 로그인 기능 구현하기
// 로그인 화면 구성
// passport-local strategy로 로그인 구현하기
// passport.js 설정하기
// passport로 요청처리하기

// passport 폴더 따로 구성
// passport-local strategy
// passport는 config를 설정해야 함
// LocalStrategy가 보내는 요청에 대해 요청의 필드 중 email,password을 확인하영 LocalStrategy authenticate 부분에 전달해줌
const config = {
  usernameField: 'email',
  passwordField: 'password',
};

const local = new LocalStrategy(config, async (email, password, done) => {
  try {
    const user = await User.findOne({email});
    if (!user) {
      throw new Error('회원을 찾을 수 없습니다.');
    }
    if (user.password !== password) {
      // password는 hash값으로 변경해서 비교해야 함.
      throw new Error('비밀번호가 일치하지 않습니다.');
    }
    done(null, {
      // 로그인 확인한 뒤 세션에 저장하고 싶은 부분
      // 세션에 저장되는 유저정보의 최소화
      shortId: user.shortId,
      email: user.email,
      name: user.name,
    });
  } catch (err) {
    done(err, null);
  }
});
// 작성한 strategy는 passport.use 함수를 통해 사용할 수 있도록 선언해야 함
// 선언한 뒤 passport.authenticate를 사용해 해당 strategy를 이용해 요청을 처리할 수 있음

// passport의 적용
// passport.authenticate 함수를 http라우팅에 연결하면 passport가 자동으로 해당하는 strategy를 사용하는 request handler를 자동 생성
// express-session과 passport.session()을 사용하면 passport가 로그인 시 유저 정보를 세션에 저장하고 가져오는 동작으로 자동으로 수행함

// routes/auth.js
router.post('/', passport.authenticate('local')); // 만들었던 local를 starategy 그대로 local입력
// app.js
const session = require('express-session');
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize);
app.use(passport.session());
app.use('/auth', authRouter);

//passport 적용
// session을 이용해 user를 사용할 때에는 serializeUser와 deserializeUser를 설정해야 함
// 세션에 user정보를 변환하여 저장하고 가져오는 기능을 제공
// passport 함수가 동작하려면 위 두 함수를 작성해야 함.

// logout
// passport req.logout 함수를 통해 세션의 로그인 정보를 삭제하여,로그아웃 기능을 구현할 수 있음
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

// login 확인 미들웨어
// 로그인을 필수로 설정하고 싶을 경우, 미들웨어를 사용하여 체크할 수 있음
function loginRequired(req, res, next) {
  if (!req.user) {
    // 로그인 정보를 확인하여 유저 정보가 없으면
    res.redirect('/'); // 메인 화면으로 리다이렉트
    return;
  }
  next();
}
app.use('/posts', loginRequired, postsRouter); // post라는 경로를 이용할 때 로그인이 되어있어야 한다는 뜻,로그인 되어 있으면 postRouter가 동작
