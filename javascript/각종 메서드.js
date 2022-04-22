// forEach 배열을   준으로 배열요소를 반복하는 함수.
// for문보다 성능은 좋지 않지만 배열메서드는 연달아 썼을 떄 편리함 forEach, map
const ob = [];
ob.forEach((요소, index) => {});
// ob 배열 안에 있는 요소 하나 하나에 forEach 내부에 있는 함수를 적용함.
const answer = [3, 1, 4, 6];
const value = "3214";
let strike = 0;
let ball = 0;
// 아래는 for 문
const num = value.indexOf(answer[i]);
if (num > -1) {
  if (num === i) {
    strike += 1;
  } else {
    ball += 1;
  }
}
// 아래는 forEach문
answer.forEach((element, i) => {
  const num = value.indexOf(element);
  if (num > -1) {
    if (num === i) {
      strike += 1;
    } else {
      ball += 1;
    }
  }
});

// map
// map 각각의 요소를 반복문처럼 다른 값으로 바꿔줄 수 있음
// 기존 배열 고유의 값은 바뀌지 않고, 기존 배열의 값을 바꾼 새로운 배열을 생성한다는 개념
const array = [1, 2, 3, 4];
array.map((요소, 인덱스) => {
  return 요소 * 2;
}); // 실행결과 [2,4,6,8]

// map 응용
Array(9); //길이가 9인데, 안이 텅 빈 배열을 생성함
Array(9).fill(); // 텅 빈 배열 안을 채워넣는 메서드 fill. ()안을 빈 칸으로 둘 경우 undifined로 가득차게 됨.
Array(9)
  .fill(0)
  .map((요소, 인덱스) => {
    return 인덱스 + 1;
  }); // 실행결과 [1,2,3,4,5,6,7,8,9]

// 피셔 예이츠 셔플 알고리즘
const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
const shuffle = [];
while (candidate.length > 38) {
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

// slice
// 배열에서 일부분을 추출하고 싶을 때 사용
// map과 동일하게 기존 배열의 수정이 아니고 새로운 배열의 생성 개념임
const array = [1, 2, 3, 4, 5, 6];
array.slice(2, 5); // 실행결과 [3,4,5]
array.slice(3); // 실행결과 [4,5,6]
array.slice(-4, -1); // [3,4,5] 뒤에서부터 네번째부터 뒤에서 첫 번째 전까지

//sort
//sort는 오름차순, 내림차순 정렬을 실행하는 메서드이다.
// 배열. sort(비교함수); 구조로 되어 있으며 비교 함수는 (a,b) => 반환값 의 구조를 지니고 있음 반환값이 0보다 크면 b,a순 작으면 a,b순으로 정렬됨
//sort는 원본을 수정하는 메서드이기 떄문에 중간에 slice 등의 원본을 복사하여 배열을 생성하는 메서드를 함께 사용하면 이를 대처할 수 있다.
//mdn array.prototype.sort()를 참고하면 문자열 정렬에 대해서 확인할수있음.
const array = [1, 2, 3, 4, 5, 6];
array.slice().sort((a, b) => b - a); //실행결과 [6,5,4,3,2,1] b-a 내림차순, a-b 오름차순.
["af", "ab"].sort((a, b) => a.localeCompare(b)); // 실행결과 [ab,af] localecompare 메서드는 한글,영어 문자열 정렬을 실행함

//removeEventLisner
//같은 값을 가지는 함수일 때 remove가 가능해짐
const a = (값) => () => {
  console.log("ㅇㅇ", 값);
};
tag.addEventLisner("click", a(1));
//을 제거하고 싶을 경우
tag.removeEventLisner("click", a(1));
//위 코드르 실행하면 제거가 되지 않음. 함수는 객체이기 때문에 새로운 객체를 매번 생성하는 개념.
// 객체를 변수로 담아서 삭제해줘야 '같은 값'을 가짐
// 따라서 위 이벤트리스너를 삭제하기 위해선 아래와 같이 변수 선언을 한 뒤 삭제 해줘야 함.
const a1 = a(1);
tag.addEventLisner("click", a1);
tag.removeEventLisner("click", a1);

//classList
태그.classList.add("클래스"); // 추가 이름이 중복되는 것은 무시한다.
태그.classList.replace("기존클래스", "수정클래스"); // 수정
태그.classList.remove("클래스"); // 삭제
태그.classList.contains("클래스"); // 해당 클래스를 포함하는지 불린값을 반환한다.

// reduce
[1, 2, 3, 4]
  .reduce((a, c) => {
    return a + c;
  }, 0) // a는 누적값, c는 현재값, 0은 초기값 // 초기값이 생략되면 첫 번째 값이 초기값이 된다.
  [
    // a:0 c:1
    // a:1 c:2
    // a:3 c:3
    // 리턴값은 최종 누적값
    (1, 2, 3, 4)
  ].reduce((a, c) => a * c, 1) // 실행결과 24
  [
    // a:1 c:1
    // a:1 c:2
    // a:2 c:3...
    ("a", "b", "c", "d")
  ].reduce((a, c, i) => {
    a[i] = c;
    return a;
  }, {}) //  i는 인덱스, 실행결과 객체리터럴로 변경됨
  [(1, 2, 3, 4)].reduce((a, c) => {
    a[c] = c * 10;
    return a;
  }, {}); // 실행결과 {1:10, 2:20, 3:30, 4:40}

//Math.module
//round 반올림, ceil 올림, floor 내림

//구조 분해 할당(destructuring)
const { body, createElement } = document;
// 위 식은 아래와 같은 의미
const body = document.body;
const createElement = document.createElement;
// 어떤 객체의 속성을 변수에 담는 변수명이 같을 때
// 식의 가독성을 더 높여줄 수 있다.

// 배열에도 아래와 같이 적용 가능
const arr = [1, 2, 3, 4, 5];
const one = arr[0];
const two = arr[1];
const three = arr[2];
const four = arr[3];
const five = arr[4];
// 구조 할당 분해 적용 후
const [one, two, three, four, five] = arr;
const [one, , three, , five] = arr; // two,four를 쓰지 않을 때 칸을 비우면 됨.

// 객체 리터럴에도 적용 가능
const obj = { a: 1, b: 2 };
const a = obj.a;
const b = obj.b;
// 위 2줄을 아래 한 줄로 표현 가능
const { a, b } = obj;

//응용 버전 a,c,e에 구조분해할당
const obj = {
  a: "hello",
  b: {
    c: "hi",
    d: { e: "wow" },
  },
};
const {
  a,
  b: {
    c,
    d: { e },
  },
} = obj;
// b,d는 구조분해할당할 수 없음 (중괄호 여는 애들)

// 이벤트버블링
// html의 속성으로 발생하는 현상
// 자식태그에서 이벤트가 발생했을 경우 부모태그를 따라서 이벤트가 발생함 td 클릭시 > tr > table > body
event.currentTarget; // 이벤트가 발생한 태그가 아닌 이벤트를 연결한 태그에 접근하기.
event.stopPropagation(); // 이벤트 버블링을 막기위해 사용하는 메서드
// 이벤트캡쳐링
// 버블링과 반대로 부모 태그를 클릭했을 때 자식 태그에게 이벤트가 발생함
// 특정 메서드를 사용해야 캡쳐링이 발생함
// 기본값은 false

// 이차원배열 이중반복문을 통핸 인덱스 구하기로 위치 산출하기
const check = () => {
  let rowIndex;
  let cellIndex;
  rows.forEach((row, ri) => {
    row.forEach((cell, ci) => {
      if (cell === target) {
        rowIndex = ri;
        cellIndex = ci;
      }
    });
  });
};

// 유사배열
$tag.children; //이 유사배열인 경우 (children 또는 parentNode)
Array.from($tag.children); //을 통해 배열로 바꿔줄 수 있다.
Array.from($tag.children).forEach(() => {}); // 등의 배열 메서드를 사용할 수 있음

// every
// 모두 true여야 true이고, 하나라도 false이면 false가 되는 메서드
// 기존 사용했던 forEach는 하나의 false를 발견해도 남은 배열에 실행되는 비효율적인 메서드
// every는 일차원 배열에서 사용 가능 하지만 flat 메서드를 통해 2차원 배열을 1차원 배열로 바꿀 수 있음
array.flat(); // << ex
array.flat().every((td) => {
  td.texContent;
}); // 텍스트가 모두 차있으면 true
array.flat().some((td) => {
  td.texContent;
}); // 텍스트가 하나라도 차있으면 true;

//JSON.parse
//JSON.stringify
//성능이 느리고 함수나 Math, Date 같은 객체를 복사할 수 없음. (lodash 같은 라이브러리 사용)
//객체를 변수에 대입할 때는 복사인지, 참조인지 잘 판단해야 함.
monsterList = [{ name: "슬라임", hp: 25, att: 10, xp: 10 }];
const monster1 = JSON.parse(JSON.stringify(monsterList[0])); // monster1에 '복사'하는 개념. 깊은 복사. 전부 참조관계가 끊긴다.
const monster2 = monsterList[0]; // monster2 객체를 대입하여 참조하는 개념. 좌변 또는 우변 중 하나의 값이 변하면 나머지 변도 같이 바뀐다.
monster1.name = "새 몬스터";
console.log(monsterList[0].name); // 슬라임
monster2.name = "새 몬스터";
console.log(monsterList[0].name); // 새 몬스터
monsterList[0] === monster1; // false
monsterList[0] === monster2; // true
//얕은 복사
//중첩된 객체가 있을 때 바깥 객체만 복사되고 내부 객체는 참조 관계를 유지
//문자열, 숫자와 같은 값은 복사되지만, 복사한 객체,배열 내부의 배열,객체의 값은 참조가 됨.
const monster2 = { ...monster[0] }; // 객체를 복사할 떄는 {}
const arr2 = [...arr]; //배열을 복사할 떄는 []
arr2 = arr.slice();
arr3 = arr.concat();

// this
// 기본 적으로 window를 가르킨다. 하지만 객체 내에서는 객체를 가르킨다.
// 하지만 객채 내에서 무조건 this===객체가 아니라 객체.메서드() 형태로 작성해야지만 this는 속한 객체를 가르킨다.
// addEventListener 내의 this는 무조건 이벤트 대상이다.
// 객체 내에서 this를 사용하고 싶을 경우, 화살표 함수가 아닌 function 함수를 사용해야 함.
// 화살표 함수를 쓰면 this는 바로 바깥쪽의 this를 가리킴.
// 


// new
// 새로운 객체를 생성
// 함수 앞에 new를 생성하면 this는 윈도우가 아닌 자기 자신을 가르킴


// reduce
// arr.reduce((acc,cur,e,i,초기값)=>{return acc += cur});
// acc 누적된 값
// cur 현재 요소
// 초기값을 따로 설정하지 않으면 첫 번째 요소를 초기값으로 사용함.
// reduce는 기존 배열을 변형시킴.