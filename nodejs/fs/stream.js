const fs = require('fs');
const readStream = fs.createReadStream('./lorem.txt');
const data = [];
readStream.on('data', (chunk) => {
  data.push(chunk);
  // 나눠진 chunk를 받을 때마다 배열로 넣어주기
  console.log('data', chunk, chunk.length);
});
readStream.on('end', () => {
  console.log('end', Buffer.concat(data).toString());
  // 배열에 들어간 data를 concat으로 합치기
});
readStream.on('error', (err) => {
  console.log('err', err);
});

// createReadStream이 한번에 읽는 데이터 chunk가 64kb임
// stream은 효율성도 있지만 안정성에도 좋다. 4gb 파일에 버퍼방식을 적용한다면 서버 메모리도 4gb가 되어야 하고 메모리가 견디지 못하면 서버가 터지지만 stream은 데이터를 잘게 나눠서 처리할 수 있기 때문이다.
// hignWaterMark로 나눠서 처리하는 양을 조절할 수 있다.

// 읽는거 말고 수정할 때
const fs = require('fs');
const writeStream = fs.createWriteStream('./lorem.txt');
writeStream.on('finish', () => {
  console.log('파일 쓰기 완료');
});
writeStream.write('이 글을 씁니다.\n'); // 하나가 하나의 버퍼라고 생각하면 됨
writeStream.write('good good.\n');
writeStream.end();
