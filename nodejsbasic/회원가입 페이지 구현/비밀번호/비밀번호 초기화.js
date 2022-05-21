const router = require("../../express/express/routes");

// generateRandomPassword는 임의의 문자열을 만들어주는 함수
function generateRandomPassword() {
  return Math.floor(Math.random() * 10 ** 8)
    .toString()
    .padStart('0', 8);
}

// email을 받아서 생성된 임의의 문자열로 사용자의 비밀번호 초기화 후 초기화한 비밀번호를 메일로 발송
router.post(
  '/reset-password', // 요청받은 경로
  asyncHandler((req, res, next) => {
    const {email} = req.body;
    const randomPassword = generateRandomPassword();
    await User.findOneAndUpdate({email},{ // 랜덤으로 생상된 비밀번호 
        password:getHash(password)
    })
    await Sendmail(email,'...',password) 
    // ex) await sendMail(email,'비밀번호가 변경되었습니다.',`변경된 비밀번호는 :${randomPassword} 입니다`);
    res.redirect('/')
  }));

// 초기화 후 로그인 시 비밀번호 변경 요청
const UserSchema = {
    passwordReset:{
        type:Boolean,
        default:false,
    }
}
router.post ('/reset-password',async() =>{
    await User.findOneAndUpdate({
        passwordReset:true,
    })
})

// 비밀번호 변경 요청
function checkPasswordReset(req,res,next){
    if(req.user && req.user.passwordReset){
        res.redirect('/update-password');
        return;
    }
    next();
}
router.post('/update-password',async()=>{
    await User.findOneAndUpdate({
        passwordReset:false,
    })
})