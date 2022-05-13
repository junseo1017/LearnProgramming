const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i = 0; i <= 10_000_000; i++) {
  // 대략 1기가 정도되는 파일 생성
  file.write('create file!');
}
file.end();

// 다른 파일을  만들었어야 했는데 그냥 안만들었음
// 메모리 사용량 비교
// 버퍼 방식 
// 파일 사이즈만큼 메모리 용량이 듦
const fs = require('fs');
console.log('before', process.memoryUsage().rss); // 약 19메가바이트
const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big.txt', data1);
console.log('buffer', process.memoryUsage().rss); // 약 1기가바이트

// 스트림 방식
// 1gb 바이트 옮기는데 12mb밖에 들지 않음(12mb에서도 노드 서버 실행하는데 들어간 메모리가 대부분임.)
const fs = require('fs');
console.log('before', process.memoryUsage().rss);  // 약 19메가 바이트
const readStream = fs.createReadStream('./big.txt'); 
const writeStream = fs.createWriteStream('./big3.txt');
console.log('buffer', process.memoryUsage().rss); // 약 31메가 바이트
