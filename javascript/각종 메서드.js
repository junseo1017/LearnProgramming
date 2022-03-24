// forEach 배열을 기준으로 배열요소를 반복하는 함수.
// for문보다 성능은 좋지 않지만 배열메서드는 연달아 썼을 떄 편리함 forEach, map
const ob = [];
ob.forEach((요소, index) => { 
}); 
// ob 배열 안에 있는 요소 하나 하나에 forEach 내부에 있는 함수를 적용함.
const answer = [3,1,4,6];
const value = '3214';
let strike = 0;
let ball = 0;
// 아래는 for 문
const num = value.indexOf(answer[i]);
if (num > -1){
    if(num === i){
        strike +=1;
    } else {
        ball += 1;
    }
}
// 아래는 forEach문
answer.forEach((element, i) => {
    const num = value.indexOf(element);
    if (num > -1){
        if(num === i){
            strike +=1;
        } else {
            ball += 1;
        }
    }  
});

// map
// map 각각의 요소를 반복문처럼 다른 값으로 바꿔줄 수 있음
// 기존 배열 고유의 값은 바뀌지 않고, 기존 배열의 값을 바꾼 새로운 배열을 생성한다는 개념
const array = [1,2,3,4];
array.map((요소,인덱스)=>{
    return 요소 * 2;
}) // 실행결과 [2,4,6,8]

// map 응용
Array(9); //길이가 9인데, 안이 텅 빈 배열을 생성함
Array(9).fill() // 텅 빈 배열 안을 채워넣는 메서드 fill. ()안을 빈 칸으로 둘 경우 undifined로 가득차게 됨.
Array(9).fill(0).map((요소,인덱스) => {
    return 인덱스 + 1;
}) // 실행결과 [1,2,3,4,5,6,7,8,9]

// 피셔 예이츠 셔플 알고리즘
const candidate = Array(45).fill().map((v,i)=> i+1);
const shuffle = [];
while (candidate.length > 38){
  const random = Math.floor(Math.random() * candidate.length);
  const spliceArray = candidate.splice(random,1);
  const value = spliceArray[0];
  shuffle.push(value);
}

// slice 
// 배열에서 일부분을 추출하고 싶을 때 사용
// map과 동일하게 기존 배열의 수정이 아니고 새로운 배열의 생성 개념임
const array = [1,2,3,4,5,6];
array.slice(2,5); // 실행결과 [3,4,5] 
array.slice(3); // 실행결과 [4,5,6]
array.slice(-4,-1); // [3,4,5] 뒤에서부터 네번째부터 뒤에서 첫 번째 전까지

//sort 
//sort는 오름차순, 내림차순 정렬을 실행하는 메서드이다.
// 배열. sort(비교함수); 구조로 되어 있으며 비교 함수는 (a,b) => 반환값 의 구조를 지니고 있음 반환값이 0보다 크면 b,a순 작으면 a,b순으로 정렬됨
//sort는 원본을 수정하는 메서드이기 떄문에 중간에 slice 등의 원본을 복사하여 배열을 생성하는 메서드를 함께 사용하면 이를 대처할 수 있다.
//mdn array.prototype.sort()를 참고하면 문자열 정렬에 대해서 확인할수있음.
const array = [1,2,3,4,5,6];
array.slice().sort((a,b) => b-a); //실행결과 [6,5,4,3,2,1] b-a 내림차순, a-b 오름차순.
['af','ab'].sort((a,b) => a.localeCompare(b)); // 실행결과 [ab,af] localecompare 메서드는 한글,영어 문자열 정렬을 실행함


//removeEventLisner
//같은 값을 가지는 함수일 때 remove가 가능해짐

const a = (값) => () => {
    console.log('ㅇㅇ',값);
} 
tag.addEventLisner('click', a(1)); 
//을 제거하고 싶을 경우
tag.removeEventLisner('click', a(1));
//위 코드르 실행하면 제거가 되지 않음. 함수는 객체이기 때문에 새로운 객체를 매번 생성하는 개념.  a(1) === a(1)은 false. [] === [] false. (()=>{})=== (()=>{}) false.
// 객체를 변수로 담아서 삭제해줘야 '같은 값'을 가짐
// 따라서 위 이벤트리스너를 삭제하기 위해선 아래와 같이 변수 선언을 한 뒤 삭제 해줘야 함.
const a1 = a(1);
tag.addEventLisner('click', a1);
tag.removeEventLisner('click', a1); 

//classList 
태그.classList.add('클래스'); // 추가 이름이 중복되는 것은 무시한다.
태그.classList.replace('기존클래스','수정클래스'); // 수정
태그.classList.remove('클래스'); // 삭제
태그.classList.contains('클래스'); // 해당 클래스를 포함하는지 불린값을 반환한다.

// reduce 
[1,2,3,4].reduce((a,c) => {return a+c;}, 0) // a는 누적값, c는 현재값, 0은 초기값 // 초기값이 생략되면 첫 번째 값이 초기값이 된다.
// a:0 c:1
// a:1 c:2
// a:3 c:3
// 리턴값은 최종 누적값
[1,2,3,4].reduce((a,c)=>(a*c),1) // 실행결과 24
// a:1 c:1
// a:1 c:2
// a:2 c:3...
['a','b','c','d'].reduce((a,c,i) => {a[i] = c; return a},{}) //  i는 인덱스, 실행결과 객체리터럴로 변경됨
[1,2,3,4].reduce((a,c)=>{
    a[c] = c*10;
    return a;
}, {}) // 실행결과 {1:10, 2:20, 3:30, 4:40}


//Math.module
//round 반올림, ceil 올림, floor 내림