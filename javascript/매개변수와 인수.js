// 함수를 선언할 때는 매개변수(parameter)
// 함수를 호출할 때는 인수(argument)
// 함수 a를 호출할 때 소괄호에 있는 인수 문자열이 함수 선언할 때 소괄호에 넣은 매개변수와 연결되기 때문에 매개변수는 인수의 값을 가짐. 
// 즉, parameter = 'argument'와 같고, 실제로 parameter는 변수와 같은 특성을 가짐
function a(parameter) {
     console.log(parameter);
 }
 a('argument');

 // 함수는 여러개의 매개변수와 인수를 가질 수 있고, 각각의 개수가 일치하지 않아도 됨.
 function a(w,x,y,z) {
     console.log(w,x,y,z);
     console.log(arguments);
 }
 a('hello', 'parameter','argument')
 // 실행결과 >> hello parameter argument undefined / Arguments(3) ['hello','parameter','argument']
 // arguments 값은 함수 내에서 사용할 수 있으며, 호출 시 넣었던 인수 목록을 확인할 수 있음

 // 인수는 같지만, 매개변수의 개수가 더 적을 경우, 개수가 더 많은 매개변수는 자동으로 무시됨.
 function a(x,y){
     console.log(x,y);
 }
 a ('hello', 'parameter', 'argument');
 // 실행결과 >> 'hello, parameter

 // quiz : 매개변수 xyz를 가지고 곱한 값을 반환하는 multiply 함수를 만들어라. 화살표 함수로
 const multiply = (x,y,z) => {
     return x*y*z;
 };
 a(1,2,3);
 // 화살표 함수는 중괄호와 리턴값을 생략해서 사용할 수 있음
 const multiply = (x,y,z) => x*y*z; 

 // 함수내에서 변수나 상수를 선언할 수도 있고, 함수 외부의 변수나 상수를 가져올 수 있다. 
 function a(x,y){
     const a = 100;
     return (x-y)*a;
 }
 console.log(a(5,3));



a = () =>{
return b = () =>{}
}

c= () =>{
  b();
}