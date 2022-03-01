// 객체 리터럴 : 중괄호를 이용하여 객체를 표현하는 것을 객체 리터럴이라고 함.
// 객체 내부의 name,year,month와 같은 정보들을 속성(property)이라고 함. 
// 단순히 묶는 배열과는 다르게 정보에 이름을 붙일 수 있음.
const junseo = {
    name : '이준서',
    year : 1995,
    month : 10,
}
console.log(junseo.name); // 실행결과 >> '이준서'
console.log(junseo['name']); // 속성이름에 특수문자나 숫자가 제일 앞에 오는 경우 앞의 값을 사용하면 된다. 따옴표로 항상 감싸줘야 함

// 객체 추가, 수정 방법은 동일함
junseo.month = 9;
console.log(junseo['month']); // 실행결과 >> 9

// 객체 삭제
delete junseo.month;
console.log(junseo.month);   

// 배열과 함수가 객체인 이유 : 객체의 성질을 모두 사용할 수 있기 때문, 속성을 추가,수정,제거할 수 있음.
// 객체는 함수와 배열을 포함하는 개념이기 때문에 {}를 사용하여 만든 객체를 객체 리터럴이라고 따로 부름
// 함수와 배열 / 객체 리터럴과는 다른 목적으로 사용함. 함수와 배열에 임의 속성을 넣는 경우는 드뭄.
function hello() {
    hello.a = 'aaa';
    const array = [];
    array.b = 'bbb';
    console.log(hello.a); 
    console.log(hello.b);
} // 실행결과 >> aaa, bbb

// 메서드 : 객체의 속성값으로 함수를 넣었을 때 이 속성을 메서드라고 부름
// a 객체 안의 log 메서드 표현할 수 있음.
const a = {
    log : function(value){
        console.log(value);
    },
};
a.log('hello');

