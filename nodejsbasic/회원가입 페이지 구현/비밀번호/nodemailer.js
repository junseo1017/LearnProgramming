const nodemailer = require('nodemailer');
const transport = nodemailer.createTransport({
  service: 'Gmail', // gmail smtp 서버
  auth: {
    user: 'google account', // 구글 계정
    pass: 'app password', // 앱 비밀번호 넣으면 됨
  },
});

const message = {
  from: 'login account', // 보내는 메일
  to: 'mail address', // 받는 주소
  subject: 'title',
  text: 'message',
};

transport.sendMail(message, (err, info) => {
  if (err) {
    console.error('err', err);
    return;
  }
});
console.log('ok', info);
