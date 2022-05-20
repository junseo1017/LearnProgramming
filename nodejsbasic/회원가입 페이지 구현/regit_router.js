const getHash = require('/') // hash 유틸 저장한 곳


router.post((req, res, next) => {
  const {email, name, password} = req.body;
  const pwHash = getHash(password); // 비밀번호 hash값 저장
  const exists = await User.findOne({  // 존재하는 회원인지 체크
      email,
  })
  if(exists){
      throw new Error('이미 가입된 메일입니다.')
  }

  await User.create({
      email,
      name,
      password:pwHash,
  })
    res.redirect('/') // 가입 완료 후 메인페이지로 redirect
});