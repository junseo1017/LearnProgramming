// ts에서 함수 작성 시 반환 타입을 추론 하도록 하는 것을 권장함.
// 함수의 매개 변수와 인수의 타입이 호환 가능하게 작성
// 인수의 타입을 잘못 전달하면 에러가 발생

// 함수 선언식
function funcA(name: string): string {
  return `hello${name}`;
}
const funcB = (name: string): string => {
  return `hello${name}`;
};

// 타입 추론
// tsc는 방정식의 한쪽에만 타입이 있더라도 타입을 추론할 수 있음.(contextual typing)
// 이를 통해 프로그램에서 타입을 유지하기 위한 노력을 줄일 수 있음.

let f12: (baseValue: number, increment: number) => number = function (x, y) {
  return x + y;
};

// 선택적 매개변수(optional parameter)
// 변수명 뒤에 ?붙여줌. 인수가 없다면 undefined가 된다.
function funcA(name: string, age?: number) {
  if (age) return name + age;
  else return name;
}

// 기본-초기화 매개변수(Default Parameter)
// 값을 제공하지 않거나, undefined로 했을 때 매개변수의 값 할당이 가능하다.

function funcB(name: string, food = 'beef') {
  return name + 'eats' + food;
}
let result1 = funcB('Lee'); // Lee eats beef;
let result2 = funcB('Park', undefined); // Park eats beef
let result3 = funcB('Kim', 'kimchi'); // Kim eats kimchi

// 나머지 매개변수 (Rest Parameters)
// 컴파일러 생략 부호 뒤의 인자 배열을 빌드해 함수에서 활용할 수 있음
// 아무것도 넘겨주지 않을수도 있음.

function funcC(name: string, ...foods: string[]) {
  // foods = [kimchi, burger, pizza]
  return name + 'ate' + foods.join('');
}

let foodlist = funcC('kim', 'pizza', 'chicken', 'burger'); // result kimatepizzachickenburger
