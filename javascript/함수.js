// 함수 : 일정한 동작을 수행하는 코드를 의미
// function 예약어를 사용하거나 => 기호를 사용함. 화살표 깋를 사용한 함수를 화살표 함수(arrow function)라고 부름.
function a() {}
const b = function() {};
const c = () => {}; // 화살표 함수는 무조건 변수의 이름으로 대신 써넣어야 함.
// a와 같이 fucntion 키워드 뒤에 함수 이름을 넣어주는 방식을 '함수 선언문'이라고 부름
// b와 같이 상수 나 변수에 대입하는 방식을 '함수 표현식'이라고 부름
// c는 '화살표 함수' 

// 함수의 호출(call)
function a() {}
a(); // 실행결과 >> (없음)
function a(){
    console.log('hello');
    console.log('function');
}
a(); // 실행결과 >> hello, function
a(); a(); a(); // 실행결과 >> hello function hello function hello function 함수는 여러번 호출할 수 있음 

// 반환값(return value)
// 함수를 호출할 때는 항상 결과값이 따라옴 기본값은 undifined이며 이 값을 반환값이라고 한다. 
// return 문을 추가하면 반환값을 직접 추가할 수 있음.
function a(){
    return 10;
} // 실행결과 >> undifined
a(); // 실행결과 >> 10

// % 함수의 반환값을 상수나 변수에 대입할 수 있음. 
function a(){
    return 10;
}
const b = a();
console.log(b); // 실행결과 >> 10

// 반환값을 여러개를 두고 싶다면 배열을 이용한다.
function a(){
    return [1,5];
}

// 반환값은 함수의 실행을 중간에 멈추는 역할도 함.
function a(){
    console.log('hello');
    return;
    console.log('return');
}
a(); // 실행결과 >> hello

// 아래와 같이 조건부로 return문을 실행할 수 있음. 다양하게 활용 가능
function a() {
    if (false){
        return;
    }
    console.log('실행');
}
a();


// 함수 스코프와 블록 스코프
// 함수를 경계로 접근 여부가 달라지는 것을 함수 스코프라고 함.
// 아래 식의 실행결과는 error: a is not defined며, 함수 내부에서 선언된 변수 a를 함수 바깥에서 접근할 수 없음.
// 하지만 if 내부에서 선언한 변수는 외부에서 접근이 가능함
// var + 비동기 프로그래밍 사이에서 발생하는 문제를 해결하기 위해선 var를 함수 내부에 가두는 방식이 사용됨.
function b() {
    var a = 1;
}
console.log(a);
// 블록 스코프
// 블록(for,if, while,function등 중괄호를 가지는 모든 식) 내부에서 선언된 변수에 블록 외부에서 접근할 수 없음

