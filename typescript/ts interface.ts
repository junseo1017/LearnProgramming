// interface
// 일반적으로 변수, 함수, 클래스에 타입 체크를 위해 사용된다.
// 직접 인스턴스를 생성할 수 없고 모든 메소드가 추상 메소드이다.
// 추상 클래스의 추상 메소드와 달리 abstract 키워드는 사용할 수 없다.
// ES6는 인터페이스를 지원하지 않지만 Typescript는 인터페이스를 지원한다.

// interface를 사용하는 이유
// 타입의 이름을 짓고 코드 안의 계약을 정의한다.
// 프로젝트 외부에서 사용하는 코드의 계약을 정의하는 강력한 방법
// 다음과 같은 범주에 대해 계약을 정의할 수 있음.
// 객체의 스펙(속성과 속성의 타입 / 함수의 파라미터 / 함수의 스펙(파라미터,반환 타입) / 배열과 객체에 접근하는 방식 / 클래스)

// 기본 예제
function sayName(obj:{name:string}){
  console.log(obj.name);
}

let person = {name:'june'};
sayName(person);

//interface적용
interface Person {
  name:String
}
function sayName(obj:Person){
  console.log(obj.name);
}
let person = {name:'june'};
sayName(person);
// interface를 추가하여 함수 매개변수 프로퍼티를 정의할 수 있음
// 정의한 프로퍼티 값은 누락하거나 정의하지 않는 값을 인수로 전달 시 컴파일 에러가 발생


// Properties
// 컴파일러는 프로퍼티의 두 가지 요소를 검사한다.
// 필수요소 프로퍼티의 유무 / 프로퍼티 타입
// 예약어를 통해 프로퍼티를 세밀하게 컨트롤 할 수 있다.
// ?(Optional Properties / readonly(readonly properties))

// Optional Properties
// 프로퍼티 선언 시 이름 끝에 ?를 붙여서 표현
// 인터페이스에 속하지 않는 프로퍼티의 사용을 방지하면서 사용 가능한 프로퍼티를 기술할 때 사용
// 객채 안의 몇 개의 프로퍼티만 채워 함수에 전달하는 'option bags' 같은 패턴에 유용함.
interface SquareConfig{
  color?:string
  width?:number
}

function createSquare(config:SquareConfig):{color:String; area:number}{
  let newSquare = {color:'white',area:100};
  if(config.color){
    newSquare.color=config.color;
  }
  if(config.width){
    newSquare.area=config.width*config.width
  }
  return newSquare;
}

let mySquare = createSquare({color:'black'}); //width프로퍼티가 없어도 에러가 발생하지 않음

// Readonly properties
// 객체가 처음 생성될 때만 값 설정이 가능하고, 이후 수정이 불가능하다.
// 프로퍼티 이름 앞에 readonly를 붙여 사용한다. 
interface Point {
  readonly x:number
  readonly y:number
}

let point : Point = {x:10,y:20};
point.x = 5; // error 재할당 불가능

// readonly && const
// 일반적으로 변수는 const를 사용하고 프로퍼티는 readonly를 사용한다. 
// readonly는 배열에 값을 추가하는 것 또한 error가 발생한다. 


// interface types
// interface를 함수 내에서 사용할 수 있다.
// 함수
// javascript 객체가 가질 수 있는 넓은 범위의 형태를 기술한다.
// 프로퍼티로 객체를 기술하는 것 외에도, 인터페이스는 함수 타입을 설명한다.
// 클래스
// 클래스가 특정 통신 프로토콜을 충족하도록 명시적으로 강제한다.

// function type
// 함수의 인자의 타입과 반환 값의 타입을 정의할 수 있음
// 함수의 타입을 정의할 때에도 사용

interface SearchFunc{
  (source:string,subString:string):boolean // 인자와 반환값의 타입 정의
}

let mySearch:SearchFunc // 함수의 타입 정의
mySearch = function(src,sub){
  let result = src.search(sub);
  return result > -1
}

// class type
// 클래스가 특정 계약(contract)를 충족하도록 명시적으로 강제
interface Animal{
  makeSound():void
}

class Dog implements Animal{ // implements > class에 interface를 적용
  makeSound(): void {
      console.log('bow');
  }
}

// interface 확장
// 클래스와 유사하게 interface의 확장이 가능
interface Animal {
  makeSound():void
}

interface Dog extends Animal{
  speed:number
}
class Bulldog implements Dog{
  makeSound(): void {
      console.log('bow');
  }
}

// hybrid type
// 여러가지 타입을 조합할 수 있음 
interface Counter{
  (start:number):string
  interval:number
  reset():void
}
function getCounter():Counter{
  let counter = function(start:number){} as Counter
  counter.interval = 123;
  counter.reset =function (){}
  return counter;
}

let c = getCounter();
c(10);
c.reset();



// interface design pattern(Strategy Pattern)
// 객체가 할 수 있는 행위들을 전략으로 만들어놓고 동적으로 행위의 수정이 필요한 경우 전략을 바꾸는 것 만으로 수정이 가능하도록 만든 패턴.
interface PaymentStrategy {
  pay():void
}
class CardPaymentStrategy implements PaymentStrategy {
  pay(): void {
      console.log('card pay')
  }
}

class CashPaymentStrategy implements PaymentStrategy {
  pay(): void {
      console.log("Cash pay")
  }
}

class VendingMachine{
  private paymentStrategy : PaymentStrategy
  setPaymentStrategy(paymentStrategy:PaymentStrategy){
    this.paymentStrategy = paymentStrategy;
  } 
  pay() {
    this.paymentStrategy.pay();
  }
}

const vendingMachine = new VendingMachine();
vendingMachine.setPaymentStrategy(new CardPaymentStrategy());
vendingMachine.pay(); // card pay
vendingMachine.setPaymentStrategy(new CashPaymentStrategy());
vendingMachine.pay(); // cash pay

