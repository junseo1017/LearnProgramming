const add = (a, b) => a + b;

function calculator(func, a, b) {
  return func(a, b);
}

add(3, 5);
calculator(add, 3, 5);

// 함수의 선언과 호출을 구분해야 된다.
// 함수의 호출은 무조건 return 깂으로 대입해서 생각하면 편하다.

const x = 'x';
function c() {
  const y = 'y';
  console.lfog('c');
}

function a() {
  const x = 'x';
  console.log('a');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
  b();
}

a(); // a, b, c
c(); // c

// 호출스택 : FILO
// 큐 : FIFO

const x = 'x';
function c() {
  const y = 'y';
  console.log('c');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
}

function a() {
  const x = 'x';
  console.log('a');
  b();
}

a();
c();

// 호이스팅이 생기는 상황을 안 만드는게 코딩을 잘하는거
// eslint에서 호이스팅 생기는거 방지
// 호이스팅 보는 법
// var은 최상단 하지만 값은 저장되지 않음 변수 선언만 됨
// var을 쓰면 안되는 이유, 호이스팅을 발생시킴.

const x = 'x1';
console.log(z);
var y = 'hehe';
const z = () => {};
function c() {
  const y = 'y';
  console.log('c');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
}
////// 호이스팅 적용
var y;
function c() {
  // function 함수는 상단으로 올라감
  const y = 'y';
  console.log('c');
  function b() {
    const z = 'z';
    console.log('b');
    c();
  }
}
const x = 'x1';
console.log(z); // TDZ
var y = 'hehe';
const z = () => {}; // 화살표 함수 z는 호이스팅되긴 하지만 접근은 불가능 함
