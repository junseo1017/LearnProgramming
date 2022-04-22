// 코드 실행 시 변수 처리
//  - 자바스크립트 엔진이 코드를 읽으면 생성 단계에서 실행 컨텍스트를 생성.
//  - 함수 선언문은 실행 단계에서 함수 전체가 실행 컨텍스트에 저장된다.
//  - var 변수는 저장 시 undefined로 초기화된다. < 값이 있는거
//  - let,const는 초기화되지 않는다.  < 값이 없는거

// Hoisting : 변수가 선언된 시점보다 앞에서 사용되는 현상
//   - 이는 var 변수가 생성 단계에서 undefined로 초기화되는 것이 원인이다.
//   - 함수는 생성 단계에서 함수 전체가 저장되므로 뒤에서 선언되어도 호출이 가능하다. 
// 예시

console.log(callMe())//undefined
var x = 10
console.log(callMe()) //10
function callMe(){
  return x;
}