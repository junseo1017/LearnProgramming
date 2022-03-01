// if 문과 switch 문 외에도 분기 처리에 사용하는 식이 조건부 연산자이며, 삼항 연산자라고 하는 연산자로 표현함.
// 기본형식 >>  조건식 ? 참일 때 실행되는 식 : 거짓일 때 실행되는 식

// 조건부 연산자는 문이 아니라 식이기 때문에 결과값이 나옴. 
5 > 0 ? '참입니다' : '거짓입니다';
출력 > '참입니다' 

// 조건부 연산자는 보통 조건에 따라 달라지는 값을 변수에 대입하기 위해 사용하며 아래와 같음.가
let value = 5 < 0 ? '참입니다' : '거짓입니다';
value;
출력 > '거짓입니다'

//if문으로도 변경이 가능하다
let condition = true; 
let value = condition ? '참' : '거짓';
console.log(value);
if (condition) {
    value = '참';
} else {
    value = '거짓';
}
    console.log(value);

// 조건부 연산도 중첩해서 사용할 수 있음
let condition1 = true;
let condition2 = false;
let value = condition1 ? condition2 ? '둘 다 참' : 'condition1만 참' : 'condition1이 거짓';
console.log(value)
// 그럴 땐 괄호로 정리해서 보는게 편하다 
let condition1 = true;
let condition2 = false;
let value = condition1 ? (condition2 ? '둘 다 참' : 'condition1만 참') : 'condition1이 거짓';
console.log(value)
출력 > 'condition1만 참'
// 혹은 들여쓰기로 구분 가능
let condition1 = true;
let condition2 = false;
let value = condition1 
    ? condition2
      ? '둘 다 참' 
      : 'condition1만 참'
          : 'condition1이 거짓';
console.log(value)

// 첫 번째 조건이 참인 경우에 중첩된 조건부 연산에 들어갔지만, 거짓인 경우에 들어갈 수도 있음
let condition = false;
let condition = true;
let value = condition1 ? 'condition1이 참' : condition2 ? 'condition2가 참' : ' 둘 다 거짓';
console.log(value);
출력 > 'condition2가 참'




//quiz 바꿔쓰기
let cond = true;
let value = '';
if (cond){
    value ='참';
} else {
    value = '거짓';
}

//삼항 연산자
let value = cond ? '참' : '거짓';

//switch
let cond = true;
let value = '';
switch (cond) {
    case true:
    value = '참';
    break;
    case false :
    value = '거짓';
    break;
} 