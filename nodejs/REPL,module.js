// REPL
// R(READ) 읽고 / E(Evaluate) 실행하고 / P(Print) 결과출력 / L(Loop) 반복
// 윈도우에서는 명령 프롬프트에 node 입력
// 경로 설정 후 node (파일명) 입력하면 실행 가능 (결과 출력)
function helloWorld() {
  console.log('hello world');
  helloNode();
}
function helloNode() {
  console.log('hellow node');
}
helloWorld();

// 모듈
// 노드는 자바스크립트 코드를 모듈로 만들 수 있음
// 모듈 : 특정한 기능을 하는 함수나 변수들의 집합, 모듈로 만들면 여러 프로그램에서 사용 가능
// 저장 주의해야됨
// 다양한 파일에서 사용되는 함수, 객체, 배열, 변수를 모듈화 시켜서 코드 중복을 제거한다.
// module.exports / require는 노드 모듈 시스템 문법인데 자바스크립트에서도 모듈 시스템 문법이 생겼음 > import, export
// 아래와 같이 변경.
// 하지만 현재 완전히 동일한 기능은 하지 않는다는 점을 주의해야 됨. 
// 
const {odd, even} = require('./var');
import {odd, even} from './var';

module.exports = checkOddorEven;
export default checkOddorEven;
