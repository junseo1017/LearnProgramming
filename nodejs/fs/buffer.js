const buffer = Buffer.from('buffer buffer buffer');
console.log(buffer); // <Buffer 62 75 66 66 65 72 20 62 75 66 66 65 72 20 62 75 66 66 65 72>
console.log(buffer.length); // 20
console.log(buffer.toString()); // buffer buffer buffer

// 버퍼를 배열로 나누어서 concat으로 합칠 수 있음.
const array = [Buffer.from('this '), Buffer.from('is '), Buffer.from('phrase ')];
console.log(Buffer.concat(array).toString()); // this is phrase

// 아무것도 들어있지 않은 5byte짜리 버퍼를 생성하는 것도 가능
console.log(Buffer.alloc(5)); // <Buffer 00 00 00 00 00>


