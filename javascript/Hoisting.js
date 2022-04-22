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
// let, const 변수의 경우 생성 단계에서 초기화(실행 단계에서 초기화 됨)되지 않기 때문에, 선언문 이전에 접근 시 refererror가 발생
// 이 경계를 Temporal Dead Zone(TDZ)라 한다.
// let,const는 hoisting이 발생하지 않는다. 


//////////////////////

// var,let,const
// varFor에서 i는 varFor 함수 범위에 존재하는 변수
// 따라서 setTimeout이 호출될 때 i는 for블럭이 끝난 시점에 소멸하지 않는다.
// letFor에서 i는 for블럭 안에 존재하는 변수
// 각 for block이 실행되고 i는 소멸한다. 다만 이 경우 각 화살표 함수의 closure에 저장된다. //varFor의 i는 varFor의 클로져에 저장됨
function varFor(){
  for(var i = 0;i<3;i++){
    setTimeout(()=> console.log('i: ',i),0)
  }
}
function letFor(){
  for(let i = 0;i<3;i++){
    setTimeout(()=> console.log('i: ',i),0)
  }
}
varFor(); // 3 3 3 
letFor(); // 0 1 2