// 클로저 문제 > 스코프, 비동기, var
// 클로저를 사용해서 해결하는 문제
// 반복문과 비동기를 함께 사용하면 종종 발생

// 아래 지문의 result  > 5 5 5 5 5
function a() {
  for (var i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
// 5 5 5 5 5가 나오는 이유
// var은 블록이 아닌 함수를 따라가기 때문에 i는 a의 scope체인에서 호출되어 계속해서 실행되며
// 비동기 함수인 setTimeout은 호출 스택이 다 종료된 뒤 i의 값을 찾기 때문에 5가 출력된다.

// 해결방법
// 0 1 2 3 4
// 해결법 : var 유지 > 즉시실행함수로 클로저 생성
// 해결법 : var > let
// 즉시실행함수를 묶어줌으로서 setTimeout내부의 j의 값을 j=i로 그때그때할당하여 고정시킨다.
function a() {
  for (var i = 0; i < 5; i++) {
    (function (j) {
      setTimeout(() => {
        console.log(j);
      }, i * 1000);
    })(i);
  }
}

// let일 때
// let은 for문의 스코프에 속하게 되고
// for은 스코프를 매번 생성하고 i는 각각의 scope에 종속되기 때문에 의도한 값이 출력된다.
function a() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}

// var
// function a 스코프는 1개고, i는 a의 스코프에 종속되어 실행되기 때문에 호출 스택에서 실행되기 때문에
// a스코프에서 이미 5가 되어 버리는 것.

// 클로져
// 함수와 외부 변수와의 관계
//
