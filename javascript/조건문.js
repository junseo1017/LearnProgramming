// 조건문 : conditional statement 주어진 조건에 따라 코드를 실행하는 문.

// if 문 : if 뒤 (조건)을 넣고, 다음 줄에 동작 문을 넣으면 됨. 
if (true) {
console.log('Hello,if!');
}
// true 자리에 주로 선언된 변수를 넣음. 
// 중괄호 내에 동작문 여러개를 넣어도 됨.


// else 문 : 조건식이 true거나 false 일 때 각각 다른 동작을 실행하기 위함.
// if나 else if뒤에만 나올 수 있음.
if ('조건식') { // 조건식이 참인 값일 때 실행
	동작문;
} else { // 조건식이 거짓인 값일 때 실행
 	동작문;
}

let value = 'pencil';
let school = false;
if (school) { 
	value = 'eraser';
} else {
 	value = 'pen';
}
// pen이 출력됨

// else if문 : 많은 경우의 수를 조건문으로 표현하고 싶을 때 사용
// 식은 기본적으로 else과 동일함.
// 앞의 모든 조건을 만족하지 않을 때 실행됨.



// switch 문(비교조건)
switch (조건식) {
	case 비교조건식 : 
동작문;
}
// switch 문에는 조건식 두 개가 사용됨. switch 옆 소괄호 조건식의 값이 case의 비교 조건식 값과 일치(===)하면 해당 동작문이 실행됩니다. 보통 조건식에 변수를 넣고, 비교 조건식에는 변수와 비교할 값을 넣음. 

let value = 'a';
switch (value) {
	case 'a' :
	console.log('c')
} 
// c가 출력됨 변수 value의 값과 비교조건식인 ‘a’라는 값이 일치하기 때문에

let value = 'a'
switch (value) {
	case 'a' :
	console.log('a');
	case 'b' :  
	console.log('b');
    case 'c' : 
	console.log('c');
} 
// b,c가 출력됨 여러개를 설정해놓을 수 있지만 switch 문은 일치하는 case를 발견하면 일치 여부와 관계없이 그 아래 case의 동작을 모두 실행함. 
// 원하는 결과만 얻으려면 수동으로 case에서 빠져나와야 하고 이 때 break문이 사용됨. 
 
let value = 'b'
switch (value) {
	case 'a' :
	console.log('a');
	break;
	case 'b' :
	console.log('b');
	break;
	case 'c' :
	console.log('c');
	break;
} 

// 어떠한 case도 일치하지 않을 때 동작하는 case도 만들 수 있음. 이때는 default라는 특수한 예약어를 사용.
// 이 때는 break;를 붙이지 않아도 됨. 마지막 case라서.
// if문이 === 연산자만 사용한다면 switch문으로 대체 가능.
// default는 어디에나 위치할 수 있음.

let value = 'd'
switch (value) {
	case 'a' :
	console.log('a');
	break;
	case 'b' :
	console.log('b');
	break;
	case 'c' :
	console.log('c');
	break;
	default:
	console.log('King');
} 

