// forEach 배열을 기준으로 배열요소를 반복하는 함수.
// for문보다 성능은 좋지 않지만 배열메서드는 연달아 썼을 떄 편리함 forEach, map
const ob = [];
ob.forEach((요소, index) => { 
}); 
// ob 배열 안에 있는 요소 하나하나씩 forEach 내부에 있는 함수를 적용함.
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