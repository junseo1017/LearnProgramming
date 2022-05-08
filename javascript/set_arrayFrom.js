// Set
// 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장함.
let mySet = new Set();
mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
let o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2}); // o와 다른 객체를 참조하므로 괜찮음

// for in, of
// for in
// 열거가능한 객체에 대해 반복할 수 있다.
for (let props of obj) {
  console.log(props);
} //props는 객체의 key값이다.

// for of
// 반복가능한 객체 (Array, Map, Set, String, TypedArray, arguments 객체 등을 포함)에 대해서 반복
const array1 = ['a', 'b', 'c'];
for (const element of array1) {
  console.log(element);
}
// expected output: "a"
// expected output: "b"
// expected output: "c"
