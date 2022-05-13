const fs = require('fs');

fs.readFile('./readme.txt', (err, data) => {
  // callback을 가지고 있음 노드의 콜백함수 매개변수는 err data 순서이다.
  if (err) {
    throw err;
  }
  console.log(data);
  console.log(data.toString());
});
// node readfile
// result <Buffer 48 65 6c 6c 6f 2e 20 77 6f 72 6c 64 2e>
// 2진법을 16진법을 바꾼 것
// buffer나 바이너리로 되어 있다면 컴퓨터가 다루는 언어구나 생각하면 됨 data.toString을 해줘야 함.
// result Hello. world.

// fs는 콜백으로 사용할 수 있기 때문에 콜백헬을 방지하기 위해
// util.promisify를 사용하거나
// 자체 API인, promises을 활용.
// async,await도 사용할 수 있음.
const fs = require('fs').promises;

fs.readFile('./readme.txt')
    .then((data)=>{
      console.log(data);
      console.log(data.toString())
    })
    .catch((err)=>{throw err;});

