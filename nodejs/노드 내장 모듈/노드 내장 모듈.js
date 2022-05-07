// os(Operating System) : 운영체제 정보를 담고 있음
// module은 require로 가져옴(내장 모듈이기 때문에 경로 대신 이름만 적어도 됨.)
const os = require('os');
// console.log(os.cpus)/ totalmem freemem 자주 쓰임
// https://nodejs.org/dist/latest-v18.x/docs/api/os.html 페이지 참조

// path : 폴더와 파일의 경로를 쉽게 조작하도록 도와주실 모듈
// 운영체제마다 파일 경로를 지정하는 방식이 다르기 때문에 path 모듈을 사용하여 알아서 경로를 설정.
const path = require('path');
path.join(__dirname, 'var.js'); // 상대경로로 처리 현재 파일 기준. 같은 경로면 점 하나(.), 한 단계 상위 경로면 점 두개
path.join(__dirname, '..', 'var.js'); //  상위 폴더가  ../임을 이용해서 상위 폴더에 지정
// \nodejs-book\var.js < windwo)
// /nodejs-book/var.js (맥, 리눅스 / 합쳐서 포식스 POSIX라고 부름)

// /var.js 처럼 앞에 /를 붙으면 절대 경로라는 의미로 최상위 폴더에 속함 resolve는 이런 절대경로 표시를 확인하고 적용하지만 join은 절대 경로를 무시하고 상대경로로 차리함.

path.resolve(__dirname, '..', '/var.js');
// join과 유사, 절대 경로로 처리 루트 폴더나 노드 프로세스가 실행되는 위치가 기준가장 상위 폴더의 var.js

// path.nomalize 슬래시 역슬래시 섞어서 쓰면 올바르게 수정해줌
// path.isAbsolute('C:\\') > true// 절대경로인지 아닌지. 가장 위에서부터 출발하는게 절대 경로, 상대경로는 지금 속한 폴더에서 출발
// path.isAbsolute('./home') > false //
// path.relative(a,b) : a에서 b를 가기 위한 방법을 알려줌

// join과 resolve의 차이 resolve는 /를 절대 경로로 처리 , join은 상대경로로 처리
// 상대경로 : 현재 파일 기준, 같은 경로면 점 하나(.), 한 단계 상위 경로면 점 두개(..)
// 절대경로는 루트 폴더나 노드 프로세스가 실행되는 위치 기준
path.join('/a', '/b', 'c'); // /a/b/c
path.resolve('/a', '/b', 'c'); // /b/c

// \\와 \차이는 윈도우 경로 구분자, \\는 자바스크립트 문자열 안에서 사용(\가 \특수문자이기 때문에 \\로 이스케이프)

// url 모듈
// - 인터넷 주소를 쉽게 조작하도록 도와주는 모듈
// url 처리에 크게 두가지 방식이 있음(기존 노드 방식, WHATWG방식)

const url = require('url');
// 노드
const {URL} = url;
const myURL = new URL('http://www.naver.com');
console.log(myURL);
console.log(url.format(myURL));
////////////////////
// WHATWG
const parseUrl = url.parse('http://www.naver.com');
console.log(parseUrl);
console.log(url.format(parseUrl));
