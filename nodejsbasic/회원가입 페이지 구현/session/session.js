// session
// - 클라이언트의 정보를 클라이어트별로 구분하여 서버에 저장하고 클라이언트 요청 시 Session ID를 사용하여 클라이언트의 정보를 다시 확인하는 기술
// - 클라이언트가 정보를 저장하고, 요청 시 정보를 보내는 COOKIE와 대조됨

// 작동 방식
// - 서버는 세션을 생성하여 세션의 구분자인 Session id를 클라이언트에 전달함
// - 클라이언트 요청 시 session id를 함께 요청에 담아서 전송
// - 서버는 전달받은 session id로 해당하는 세션을 찾아 클라이언트 정보를 확인

// express의 세션
// - express-session 패키지를 사용하여 간단하게 session 동작을 구현할 수 있음
// - 특별한 설정없이 자동으로 session 동작을 구현해 줌
// > 자동으로 session id를 클라이언트에 전달, session id로 클라이언트 정보 확인

// session-store를 사용하는 이유
// - express-session 패키지는 session을 기본적으로 메모리에 저장함
// - 따라서 구현된 어플리케이션을 종료 후 다시 실행하면 모든 유저의 로그인이 해제됨
// - 혹은 서버가 여러 대가 있을 경우, 서버 간 세션 정보를 공유할 수 없음.

// mongoDB를 session store로 사용하기
// - connect-mongo 패키지를 이용해, mongoDB를 session store로 사용할 수 있음
// - connect-mongo 패키지는 express-session 패키지의 옵션으로 전달 가능
// - 자동으로 session 값이 변경될 때 update되고, session이 호출될 때 find함

// connect mongo
// 패키지를 사용해 express-session 설정 시 store옵션에 전달하고 mongoURL를 설정
// 세션데이터를 몽고디비에 저장하고 관리하는 기능을 자동으로 수행해 줌
const MongoStore = require('connect-mongo');
app.use(
  session({ 
    secret: 'SeCrEt',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: 'mongoUrl',
    }),
  })
);
