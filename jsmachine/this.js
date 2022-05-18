// this는 기본적으로 window다.
// 함수에서도 this는 window
// node에서는 global
// 현재는 globalThis로 합쳐졌음
// 엄격모드에서는 this는 undefined임.

const obj = {
  name: 'ryan',
  sayName() {
    console.log(this.name);
  },
};
obj.sayName(); // this는 obj를 가리킴

const sayN = obj.sayName;
sayN(); // this는 윈도우를 가리킴 window
// this는 함수가 호출될 때 결정됨.
// 함수를 호출할 때 함수 앞에 객체가 붙으면 this는 객체를 가리킴

const obj2 = {
  name: 'ryan',
  sayName: () => {
    console.log(this.name);
  },
};
obj.sayName(); // 화삼표 함수의 this는 window를 가리킴

//
function Human(name) {
  this.name = name;
}
new Human('ryan'); // name : 'ryan'
// new를 통해 함수를 호출하는 경우 this는 객체를 가리킴

//
function sayName() {
  console.log(this.name);
}
sayName.bind({name: 'ryan'})(); // ryan
sayName.apply({name: 'ryan'}); // ryan
sayName.call({name: 'ryan'}); // ryan
// bind call apply로 this를 직접적으로 바꿀 수 있음

//
const obj3 = {
  name: 'ryan',
  sayName: () => {
    console.log(this.name); // this > obj
    function inner() {
      console.log(this.name); // this > window
    }
    inner(); // this를 바꿔주는 동작이 없음 // inner의 스코프 체인은 sayName
  },
};
// obj3.sayName() // this > window

//
const obj4 = {
  name: 'ryan',
  sayName: () => {
    console.log(this.name); // this > obj
    const inner = () => {
      console.log(this.name); // this > obj
    };
    inner(); // 화살표 함수는 부모 함수가 '호출'될 때의 this를 그대로 가져옴
  },
};
obj4.sayName(); // ryan, ryan
////

// this를 분석할 수 없는 케이스
const header = document.querySelector('#header');
header.addEventListener('click', function () {
  console.log(this); // this > header
});
// 위의 경우 공식문서를 참고하기 전까지 분석할 수 없음.
// 일반적으로 EventListener에서의 this는 이벤트가 발생하는 dom(header)이 된다.

header.addEventListener('click', () => {
  console.log(this); // this > window
});
// 화살표 함수는 call를 못 붙임
// 콜백에 등록된 화살표 함수는 호출이 아닌 선언임.
// addEventListener는 호출임.
// 선언에 대한 부모는 addEventListener가 될 수 없음.
// 선언의 부모는 annonymous됨.

// bind this만 바꾼 새로운 함수를 만듬
b = a.bind(window); // a라는 함수에 this만 바꿔서 새로 생성하는 것
b(); // 따로 호출해줘야 함

// apply this를 바꾸고 새로운 함수를 만들어준 뒤 호출까지 해줌
function add(a, b) {
  return a + b;
}
add.apply(null, [3, 5]); // 8 // 매개변수들을 배열로 넣음
add.call(null, 3, 5); // 8 // 매개변수를 순서대로 넣음
