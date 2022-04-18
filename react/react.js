// react는 데이터 바인딩(서버에서 데이터를 받아 HTML에 적용하는 것)이 쉽다는 장점이 있음.
// 데이터 바인딩을 쉽게 할 수 있도록 도와줌
// 전통적인 데이터 바인딩 // document.querySelect와 같은 방법을 사용했음
//react의 경우 {변수명}를 입력하여 바로 적용 가능 / 함수도 사용 가능
// {} 중괄호를 사용하여 변수, 함수, 클래스명, href, id, src 등 다양하게 사용 가능

// react를 사용하는 이유
// single page application
// 앱과 비슷한 느낌으로 사용자 경험이 좋아짐.
// 데이터와 화면 일치
// 재활용 가능한 웹 컴포넌트(중복되는 요소를 하나로 묶어줌)

// style 적용
// oject 자료형으로 만든 스타일을 작성해야함
// font-size와 같은 기호는 사용하지 않고 camelCase 작명 방식을 사용
function App() {
  return <div style={{ color: 'red', fontSize: '30px' }}>hi</div>;
}
// 보통은 직접 스타일을 작성하지 않고 변수명으로 묶어서 사용
let post = { color: 'red', fontSize: '30px' };
function App() {
  return <div style={post}>hi</div>;
}

// state
// 데이터는 변수 또는 state에 넣어야 함.
// state를 사용하는 이유 : 웹이 app처럼 동작하게 하려면 state에 데이터를 저장해놔야 함. > state는 변경되면 HTML이 자동으로 재렌더링이 됨.
// 일반 변수는 변경되어도 재렌더링이 안됨.
// 자주 바뀌는, 중요한 데이터는 변수 말고 state로 저장해야 함.

// useState는 항상 2개인 배열이 생성됨.
// 이를 활용해 구조할당분배를 적용하여 test라는 변수에 값을 저장하는 방식
// useState 내에는 문자,숫자,배열,객체 모두 저장 가능.
import React, { useState } from 'react';
function App() {
  let [test, fixText] = useState('테스트');
  let [test2, fixText2] = useState('테스트');

  return <div>{test}</div>;
}
// 결과값. '테스트'

// 이벤트리스너 달기
// onClick이벤트
// onClick 이후에는 중괄호를 넣고 함수가 들어가야 함
function App() {
  return (
    <div
      onClick={() => {
        console.log(1);
      }}>
      {test}
    </div>
  );
}

// state 변경
// 깊은 복사를 통해 새로운 변수에 저장하고 그 변수를 수정한다.
// state 선언 시 생성됐던 배열의 두번째 요소에 저장한 변수를 적용한다.

// Component 문법
// HTML을 한 단어로 줄여서 쓸 수 있는 방법
// Component를 생성할 때는 대문자로 시작하기
// return () 내부를 묶을 때 의미없는 <div> 쓰지 않으려면 <> </> 빈태그로 묶기 프래그먼트 문법
// 컴포넌트 안에 컴포넌트를 만들어둘 수 있어 관리가 편해짐.
// 자주 변경되거나 반복적으로 출현하는 HTML 덩어리 들을 Component로 만들면 좋음
// 다른 페이지를 만들 때도 컴포넌트로 만듬
// 다른 component에서 만든 state를 쓰려면 props를 이용해서 데이터를 전달해줘야 함
