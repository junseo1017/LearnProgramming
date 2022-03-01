// 객체(object)란 자료형의 일종으로 다양한 값을 모아둔 또다른 값. 
// 객체의 종류에는 크게 배열(array), 함수(function), 배열이나 함수가 아닌 객체로 나눌 수 있음

// 배열. 다양한 값을 나열하는 경우. 하단과 같이 묶을 수 있음
// 대괄호[]로 값을 감싸주고 값은 쉼표,로 구분함.
const apple = '사과'
const orange = '오렌지'
const pear = '배'

const fruits = ['사과','오렌지','배']

// 배열 내부의 값을 개별적으로 불러올 수도 있음. 배열 이름 뒤에 불러오고 싶은 값의 자릿수를 적어주면 됨.
// 숫자는 0부터 시작하며, 프로그래밍에서는 자릿수를 인덱스라고 부름 \
const fruits = ['사과','오렌지','배']
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// 배열 안에 있는 값은 모두 문자열이지만, 값의 자료형이 모두 같아야 할 필요는 없음. 배열 안에 다른 배열이나 변수를 넣을 수 있음.
// 배열 내부에 배열이 들어있는 걸 이차원 배열이라고 부름
const arrayOfArray = [[1,2,3],[4,5]]
arrayOfArray[0]; // [1,2,3]
const a = 10;
const b = 20;
const variableArray = [a, b, 30];
variableArray[1]; // 20 (b의 값)

// 배열 내부의 값은 중복되어도 되고, 아무 값이 없는 배열도 만들 수 있음.
// 배열 내부에 든 값을 요소(element)라고 부르며, 프로그래밍으로 요소의 개수를 구할 수도 있음
const everything = ['사과',1,undefined,true,'배열',null];
const duplicated = ['가','가','가','가'];
const empty = [];

// 빈 값도 유효한 값이며, 요소 개수를 셀 때 포함됨.
const everything = ['사과',1,undefined,true,'배열',null];
console.log(everything.length); // 실행결과 > 6 

// 배열의 요소 개수에서 1을 때면 마지막 요소의 인덱스가 됨. 이를 활용하여 마지막 요소를 찾을 수 있음
const findLastElement = ['a','b','c','d','e'];
console.log(findLastElement[findLestElement.length-1]); // 실행결과 > e

// 배열을 만든 후, 중간에 배열을 수정할 수 있음. 배열에 요소를 추가할 수도 있으며, 특정 인덱스의 요소를 수정하고 제거할 수 있음. 
const target = ['a','b','c','d','e'];
target[5] = 'f'; // 이런 방식은 길이가 각기 다른 식에서 효율적이지 않음
console.log(target); // ["a","b","c","d","e","f"]
target(target.length)='바'; // 배열 마지막에 '바'를 효율적으로 추가하는 과정

// 배열 가장 앞에 요소를 추가하고 싶을 때 배열[0] = '값';을 한다면 index 0에 추가가 아닌 수정이 되버리는 현상이 발생
// 제일 앞에 추가할 때는 unshift라는 기능을 활용
const target = ['b','c','d','e'];
target.unshift('a');
console.log(target); // 실행결과 > a, b, c, d, e

// 제일 뒤에 추가할 때는 push라는 기능을 활용
const target = ['b','c','d','e'];
target.push('f');
console.log(target); // 실행결과 > b, c, d, e, f

// 위와 같이 상수 const의 값이 바뀌는 것을 확일할 수 있음.
// 배열의 내부값은 추가하거나 수정이 가능하지만, const에 선언된 값을 (=) 새롭게 대입하는 것은 불가능함.
// const에 객체(배열, 함수, 객체 리터럴)가 대입된 경우 객체 내부의 속성이나 배열의 요소는 수정할 수 있음
const target = ['a','b','c','d','e'];
target = ['f','g']; // 불가능
target[0] = ['h']; // 가능

// 배열 요소 제거 
// pop이라는 기능을 사용하면 배열의 마지막 요소 삭제가 가능하다.
const target = ['a','b','c','d','e'];
target.pop();
console.log(target); // 실행결과 a, b, c, d
// shift 기능은 첫 번째 요소를 제거할 수 있음
const target = ['a','b','c','d','e'];
target.shift();
console.log(target); // 실행결과 > b, c , d, e
// 중간에 있는 요소를 삭제할 경우  splice 기능을 사용
const target = ['a','b','c','d','e'];
target.splice(1,1); // b를 삭제하고 싶은 경우, splice(지우고 싶은 인덱스 번호, 그 번호로부터 지우고 싶은 요소의 개수)
const target = ['a','b','c','d','e'];
target.splice(2,2); // 실행결과 > a, b, e
const target = ['a','b','c','d','e'];
target.splice(2); // 실행결과 > a, b // 콤마, 뒤에 숫자를 지정하지 않을 시 지우고 싶은 인덱스 번호를 포함한 뒤의 요소들 모두 삭제됨.

// splice 기능 활용
// 삭제 후 그 자리에 값추가. 삭제 지정한 값의 콤바 뒤에는 새로운 값('가','나')을 추가할 수 있다. 지운 자리에서부터 추가됨
const target = ['a','b','c','d','e'];
target.splice(1,3,'가','나'); // 삭제 지정한 값의 콤바 뒤에는 새로운 값('가','나')을 추가할 수 있다. 지운 자리에서부터 추가됨 // 실행결과 > a, 가, 나, e
// 삭제없이 배열 중간에 값 추가. 추가하고 싶은 위치 직전 인덱스를 선택하고, 지우고 싶은 요소 개수를 0으로 설정한 뒤, 추가하고 싶은 값을 입력한다.
const target = ['a','b','c','d','e'];
target.splice(1,0,'x'); // 실행결과 > a b x c d e


// 배열에서 요소 찾기. includes 기능을 사용
const target = ['a','b','c','d','e'];
const result = target.includes('e');
const result2 = target.includes('x');
console.log(result); // 실행결과 > true
console.log(result2); // 실행결과 > false

// 몇 번째 인덱스에 위치하는 지 검색 
// indexOf, lastIndexOf 기능 사용
const target = ['a','b','e','d','e'];
const result = target.indexOf('e'); // 배열의 앞에서부터 검색
const result2 = target.lastIndexOf('b'); // 배열의 뒤에서부터 검색
const result3 = target.indexOf('x'); 
console.log(result); // 실행결과 > 2
console.log(result2); // 실행결과 > 1
console.log(result3); // 실행결과 > -1 // 배열에 값이 없을 경우 -1이 나옴

// 배열 반복
const target = ['a','b','e','d','e'];
let i = 0;
while (i < target.length){
    console.log(targer[i]);
    i++;
} 
// 실행결과 > a,b,c,d,e
const target = ['a','b','e','d','e'];
for (let i=0;i<target.length;i++){
    console.log(target[i]);
}
// 실행결과 > a,b,c,d,e


// 배열에서 '라'를 모두 제거하세요.
const target = ['a','b','c','b','d','b'];
let i = 'b';
while (target.indexOf !== -1){
    target.splice(target.indexOf(i),1);
    console.log(target);
}

// 풀이
let index = target.indexOf('b');
while(index > -1){
    target.splice(index,1);
    index = target.indexOf('b');
}
