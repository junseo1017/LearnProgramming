// 객체 간의 비교
// {}==={} 는 false가 출력됨. 왜냐하면 {}를 쓴 순간 객체를 생성하고 비교한 것이기 때문. []배열도 같은 결과를 보임
// 갯체가 아닌 숫자, 문자열, 불 값, null, undefined는 모두 true를 반환함.
// 객체는 모양이 같아도 생성할 때마다 새로운 객체가 생성됨. 같은 객체인지 비교하고 싶다면 기존 객체를 변수에 저장해 두어야 한다.
const a = { name: "junseo" };
const array = [1, 2, a];
console.log(a === array[2]); // 실행결과 >> true

// 참조(reference)와 복사
// 아래의 경우 객체를 저장한 변수를 다른 변수에 대입하면 두 변수 모두 같은 객체를 저장하는 셈이 됨.
// a,b 모두 같은 객체를 저장하고 있으므로 객체의 속성 값을 바꾸면 a,b 모두 바뀌는 것처럼 보임.
// 이런 상황일 때 변수 a,b가 같은 객체를 참조하고 있다고 표현함. 또는  a,b 그리고 객체 간에 참조 관계가 있다고 표현함.
const a = { name: "junseo" };
const b = a;
a.name = "hero";
console.log(b.name); // 실행결과 >> hero
// 다만, 객체가 아닌 값(문자열, 숫자, 불 값, null, undefined)의 경우 다름.
let a = "junseo";
let b = a;
a = "hero";
console.log(b); // 실행결과 >> junseo

const junseo = {
  name: {
    first: "준서",
    last: "이",
  },
  gender: "m",
};
junseo.name.last; // 실행결과 >> '이'
junseo["name"]["last"]; // 실행결과 >> '이'
