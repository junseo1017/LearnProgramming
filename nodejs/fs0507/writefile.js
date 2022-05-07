const fs = require('fs').promises;

fs.readFile('./writeme.txt', 'Bye. world') // 파일 생성 후 문자 입력
  .then(() => {
    return fs.readFile('./writeme.txt'); // 생성한 파일 읽기
  })
  .then((data) => {
    console.log(data.toString());
  })
  .catch((err) => {
    throw err;
  });
