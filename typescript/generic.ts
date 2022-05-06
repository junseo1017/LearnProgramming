// Generic
// 제네릭이란 데이터 타입을 일반화한다는 것을 의미.
// 정적 타입언어는 클래스나 함수를 정의할 떄 타입을 선언해야 함.
// 제네릭은 코드를 작성할 때가 아니라 코드가 수행될 때 타입을 명시한다.
// 코드를 작성할 때 식별자를 써서 아직 정해지지 않은 타입을 표시함.
  // 일반적으로 식별자는 T, U, V를 사용하고
  // 필드 이름의 첫 글자를 사용하기도 한다. 

// 제네릭을 사용하는 이유
// 재사용성이 높은 함수와 클래스를 생성할 수 있음 (데이터 타입의 외부에서 지정하여 생성 시점의 타입을 명시할 수 있기 떄문에)
  // 여러 타입에서 동작이 가능
  // 코드의 가독성이 향상됨.

// 오류를 쉽게 포착할 수 있다.
  // any타입을 사용하면 컴파일 시 타입을 체크하지 않아 컴파일 시에 컴파일러가 오류를 찾지 못함.
  // 제네릭은 any처럼 미리 타입을 지정하지는 않지만, 타입을 체크하여 컴파일러가 오류를 찾을 수 있음.


// function
function sort<T>(items:T[]):T[]{
  return items.sort();
}

const nums:number[]=[1,2,3,4];
const chars:string[]=['a','b','c','d'];

sort<number>(nums);
sort<string>(chars);

//class
class Queue<T>{
  protected data:Array<T>=[];
  push(item:T){
    this.data.push(item);
  }
  pop():T|undefined{
    return this.data.shift();
  }
}

const numberQueue= new Queue<number>();
numberQueue.push(0);
numberQueue.push(+ '1'); // error 

// Union type
// 두 개 이상의 타입을 선언하는 방식
// generic처럼 여러 타입을 다룰 수 있지만 선언한 공통된 메소드만 사용할 수 있음.
// 리턴 값이 하나의 타입이 아닌 선언된 Union타입으로 저장됨.
const printM = (message:string|number)=>{
  return message;
}
const message1 = printM(1234);
const message2 = printM('hello');
message1.length // error message1은 number에는 없고, string에는 있는 메소드기 떄문에 사용불가.


// 제약조건
// 원하지 않는 속성에 접근하는 것을 막기 위해 Generic에 제약 조건을 사용한다.
// 1. Constraints : 특정 타입들로만 동작하는 제네릭 함수를 만들 때 사용
// 2. Keyof : 두 객체를 비교할 때 사용

// Constraints
// 제네릭 T에 제약 조건을 설정한다.(문자열 or 숫자)
// 제약 조건을 벗어나는 타입을 선언하면 에러가 발생한다.
const printMessage = <T extends string|number>(message:T):T=>{ // extends 키워드를 통해 ㅇstring과 number타입만 선언할 수 있음.
  return message;
}

// keyof 
// 두번째 함수에서 오류가 발생한다.
// 제네릭 T는 키 값이 a,b,c만 존재하는 object이다.
// U의 값인 'z'가 제네릭 T의 키 값 중 존재하지 않기 떄문에 오류가 발생한다. 

const getProperty = <T extends object, U extends keyof T>(obj:T,key:U)=>{
  return obj[key]
}
getProperty({a:1,b:2,c:3},'a');
getProperty({a:1,b:2,c:3},'z'); // error U의 값 z는 genericT의 키 값 a,b,c에 존재하지 않음.


// 디자인 패턴 (Factory Pattern with Generic)
// 객체를 생성하는 인터페이스만 미리 정의하고 인스턴스를 만들 클래스의 결정은 서브 클래스가 내리는 패턴
// 여러 개의 서브 클래스를 가진 슈퍼 클래스가 있을 때, 입력에 따라 하나의 서브 클래스의 인스턴스를 반환

interface Car{
  drive():void;
}

class Bus implements Car{
  dirve():void {};
}
class Taxi implements Car{
  dirve():void {};
}
class SUV implements Car{
  dirve():void {};
}

export class CarFactory{
  static getInstance<T extends Car>(type:{new():T}):T{
    return new type();
  }
}
const bus = CarFactory.getInstance(Bus);