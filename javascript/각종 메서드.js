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

['af','ab'].sort((a,b) => a.localeCompare(b); // 실행결과 [ab,af] localecompare 메서드는 한글,영어 문자열 정렬을 실행함