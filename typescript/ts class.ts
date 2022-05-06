// 객체 지향 프로그래밍 OOP
// 장점
// 프로그램을 유연하고 변경이 용이하게 만든다.
// 프로그램 개발과 보수를 간편하게 만듬
// 직관적인 코드 분석이 가능
// 중요한 특성 : 강한 응집력과 약한 결합력을 지향한다.


// Class 용어
// 아래 3가지를 합쳐서 member라고 칭함
// 필드(field)
// 생성자(constructor)
// 메서드(method)
// 인스턴스(instance) : new 연산자에 의해 생성된 객체

// 예제
// new를 사용하여 Person의 인스턴스를 생성
// person클래스의 멤버는 name,constructor,say()
// class 내부에서 this를 앞에 붙이면 클래스의 멤버를 의미함.
class Person {
  name:string;
  constructor(name:string){
    this.name=name;
  }
  say(){
    return `hello, my name is ${this.name}`
  }
}
let person = new Person('Kim');


// 접근 제어자
// 속성 또는 메소드로의 접근을 제한하기 위해 사용한다.
// Typescript에는 3종류의 접근 제어자가 존재한다.
// public > protected > private
// Java와 다르게 package개념이 없어 default접근 제어자는 존재하지 않는다.

// public
// 프로그램 내에서 선언된 멤버들이 자유롭게 접근할 수 있다.
// default 값은 public이다.
class Animal{
  public name:string;
  constructor(theName:string){
    this.name=theName;
  }
}
new Animal('cat').name;

// private
// 멤버가 포함된 클래스 외부에서의 접근을 막는다.
class Animal{
  private name:string;
  constructor(theName:string){
    this.name=theName;
  }
}
new Animal('cat').name; // error

// 상속
// OOP는 상속을 이용하여 존재하는 클래스를 확장해 새로운 클래스를 생성할 수 있다.
// extends로 클래스의 파생이 가능해지고, 파생된 클래스는 하위클래스(subclass) 기초 클래스는 상위클래스(superclass)라고 부른다.
class Animals{
  move(distance:number){
    console.log(`move${distance}m`)
  }
}

class Dog extends Animals{
  makeSound(){
    console.log('bow')
  }
}

class Cat extends Animals{
  dance(){
    console.log('meow');
  }
}

new Dog().move(3);
new Dog().makeSound();
new Cat().move(5);
new Cat().dance();

// 접근 제어자(protected)
// 멤버가 포함된 클래스와 그 하위 클래스 외부에서의 접근을 막는다.
// person에서 파생된 employee의 인스턴스 메서드에서는 name을 사용할 수 있다. 
class Person {
  protected name : string
  constructor(name:string){
    this.name=name;
  }
}

class Employee extends Person{
  private department : string
  constructor(name:string,department:string){
    super(name);
    this.department=department;
  }

public getElevatorPitch(){
  return `hello my name is ${this.name} and I work in ${this.department}`
}
}

let howard = new Employee('howard','sales');
console.log(howard.getElevatorPitch()); // 인스턴스 메서드로는 사용가능
console.log(howard.name); // error person의 name property에 protected가 선언되었기 떄문에 직접적으로 호출이 불가능





// Getter & Setters / readonly / static
// getters, setters
// 비공개로 설정하려는 속성은 private으로 설정하고, 속성값을 읽고 수정하는 getter/setter 함수를 사용한다.
// readonly 
// 읽기만 가능한 속성을 선언하기 위해 사용
// static
// 전역 멤버를 선언할 때 사용


// getters, setters
// class의 속성에 직접 접근하는 것을 막고 getter,setter 함수를 사용해 값을 받아오거나 수정
// 속성에 직접 접근해 수정하면 데이터 무결성이 깨질 수 있음(캡슐화 권장)
// 각 객체의 멤버에 접근하는 방법을 세밀하게 제어할 수 있다.
class Person {
  private _name: string

  get name(){
    return this._name;
  }

  set name(name:string){
    if(name.length>10){
      throw new Error('name too long')
    }
  this._name = name;
  }
}

let person = new Person()
console.log(person.name) // undefined
person.name = 'kim';
console.log(person.name) // 'kim'
person.name = 'assdsdsdsdsd' // error

//readonly
// 속성을 읽기 전용으로 설정해 변경할 수 없게 만듬
// 선언될 때나 생성자에서 값을 설정하면 이후로 수정이 불가능함.
class Person{
  readonly age : number = 20 // 선언 초기화
  constructor(age:number){
    this.age=age;
  }
}
let person = new Person(10); // 생성자 초기화
person.age=30; // error 

// static
// 각 인스턴스가 아닌 클래스 자체에서 보이는 전역 멤버를 생성
// 범용적으로 사용되는 값에 설정함
// 'class명.'을 앞에 붙여 static 멤버에 접근할 수 있음.
// Grid.origin 으로 외부에서 접근이 가능하며 값 할당도 가능하다.
class Grid{
  static origin={x:0,y:0}
  calculateDistanceFromOrigin(point:{x:number,y:number}) {
    let xDist = point.x-Grid.origin.x;
    let yDist = point.y-Grid.origin.y;
    return Math.sqrt(xDist*xDist+yDist*yDist) / this.scale;
  }
  constructor(public scale:number){}
}
let grid1 = new Grid(1.0); 
let grid2 = new Grid(5.0); 

console.log(grid1.calculateDistanceFromOrigin({x:10,y:10}));
console.log(grid2.calculateDistanceFromOrigin({x:10,y:10}))


// 추상 클래스
// 다른 클래스들이 파생될 수 있는 기초 클래스
// 직접 인스턴스화 할 수 없다.
// abstract 키워드는 추상 클래스나 추상 메소드를 정의하는데 사용된다.
// 추상 메소드는 클래스에는 구현되어 있지 않고, 파생된 클래스에서 사용해야 된다. 
abstract class Animal { // 추상 클래스 선언
  protected name : string
  constructor(name:string){
    this.name=name;
  }

  abstract makeSound():void // 추상 메서드 선언
  move(): void{
    console.log("move!!");
  }
}

class Dog extends Animal {
  constructor(name:string){
    super(name) // 파생된 클래스의 생성자는 반드시 super()를 호출
  }
  makeSound():void{ // 반드시 파생된 클래스에서 구현해줘야 함
    console.log(this.name);
  }
}
const animal = new Animal('animal'); // error 추상클래스이기 때문에 직접 선언하면 에러가 발생.
const dog = new Dog('강아지');
dog.makeSound(); // 강아지

// 추상 클래스를 활용한 디자인 패턴(Templete Method Pattern)
// 프로그램의 일부분을 서브 클래스로 캡슐화해 전체 구조를 바꾸지 않고 특정 단계의 기능을 바꾸는 것을 디자인 패턴이라고 함.
// 전체적인 알고리즘은 상위 클래스에서 구현하고 다른 부분은 하위 클래스에서 구현한다.
// 전체 구조는 유사하지만 부분적으로 다른 구문으로 구성된 메소드의 코드 중복을 최소화 할 수 있다. 
abstract class Parent{
  public do(){
    console.log('parent에서 실행-a')
    this.hook();
    console.log('parent에서 실행-b')
  }
  abstract hook():void // 추상메서드 선언
}

class Child extends Parent {
  hook(): void { // 추상 메서드 재구현
      console.log('child');
  }
}

const child = new Child();
child.do(); // 상위 클래스의 뼈대는 가져오되 특정 메서드(or 변수)를 수정할 수 있음. 재사용성이 높아짐