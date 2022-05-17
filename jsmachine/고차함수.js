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
