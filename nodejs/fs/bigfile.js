const fs = require('fs');
const file = fs.createWriteStream('./big.txt');

for (let i = 0; i <= 10_000_000; i++) {
  // 대략 1기가 정도되는 파일 생성
  file.write('create file!');
}
file.end();

// 다른 파일을  만들었어야 했는데 그냥 안만들었음
// 메모리 비교
// 버퍼 방식
const fs = require('fs');
console.log('before', process.memoryUsage().rss);
const data1 = fs.readFileSync('./big.txt');
fs.writeFileSync('./big.txt', data1);
console.log('buffer', process.memoryUsage().rss);

// 스트림 방식
const fs = require('fs');
console.log('before', process.memoryUsage().rss);
const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
console.log('buffer', process.memoryUsage().rss);
