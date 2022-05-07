const fs = require('fs');

const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16}); // 16바이트씩 파일 읽기
const writeStream = fs.createWriteStream('./lorem.txt'); //
readStream.pipe(writeStream); // 읽어서 받은 것을 다시 16바이트씩 lorem.txt에 쓰게됨 (파일복사)

// 파일을 읽어서 압축한 걸 다른 파일에 쓰기
const fs = require('fs');
const zlib = require('zlib');
const readStream = fs.createReadStream('./readme.txt', {highWaterMark: 16});
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./lorem.txt'); //
readStream.pipe(zlibStream).pipe(writeStream);
