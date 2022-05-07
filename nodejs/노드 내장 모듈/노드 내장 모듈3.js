// child_process
// 다른 언어를 호출할 수 있음
const exec = require('child_process').exec; //child process 노드 프로세스말고 다른 프로세스를 하나 더 띄울 수 있음

var process = exec('cmd /c chcp 65001>nul && dir'); // exec을 하면 그 프로그램은 보통 터미널이 되는데 터미널을 띄워서 dir이라는 명령어를 치는거랑 같은 의미

process.stdout.on('data', function (data) {
  // 콘솔 호출해서 데이터에 담기
  console.log(data.toString()); // toString 안하면 2진법 언어 나옴
});

process.stderr.on('data', function (data) {
  console.error(data.toString());
});

// 명령어 node (파일명) 입력하면
// exec(명령어)가 실행됨.

--
// 다른 프로세스 불러오는 방식
// spawn.js 생성 
const spawn = require('child_process').spawn;
const process = spawn('python',['test.py']); // spawn('사용하는 언어',['연동할 파일'])
process.stdout.on('data', function (data) {
  console.log(data.toString()); 
});
process.stderr.on('data', function (data) {
  console.error(data.toString());
});

