// 클로저
//   - 함수의 일급 객체 성질을 이용한다.
//   - 함수가 생성될 때, 함수 내부에서 사용되는 변수들이 외부에 존재하는 경우 그 변수들은 함수의 스코프에 저장된다.
//   - 함수와 함수가 사용하는 변수들을 저장한 공간을 클로저(closure)라 한다.

// 일급 객체(first-class object)
//   - 일급 객체란, 다른 변수처럼 대상을 다룰 수 있는 것을 말함
//     - 변수에 할당(assignment)할 수 있다.
//     - 다른 함수를 인자(argument)로 전달 받는다.(고차함수, 콜백함수가 가능해진다. )
//     - 다른 함수의 결과로서 리턴될 수 있다.
//   - 자바스크립트에서 함수는 일급 객체이다.
//   - 자바스크립트에서 함수는 변수처럼 다룰 수 있다.

function createCard() {
  let title = '';
  let content = '';
  function changeTitle(text) {
    title = text;
  }
  function changeContent(text) {
    title = text;
  }
  function print() {
    console.log(title);
    console.log(contetn);
  }
  return {changeTitle, changeContent, title};
}

const card1 = createCard();
card1.changeTitle('생일');
card1.changeContent('축하');
card1.print();
