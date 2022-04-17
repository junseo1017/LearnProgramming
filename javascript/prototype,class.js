// class는 객체를 생성하기 위한 템플릿.
// 기존에는 함수를 생성해서 객체를 반환하는 함수, 즉 factory 함수를 통해 객체를 생성했음. 
// 예시
function CreateMonster(name,hp,att,xp){
  return {name, hp, att, xp};
}
const monster1 = CreateMonster('슬라임',25,10,10);
const monster2 = CreateMonster('오크',25,10,10);

// 비슷한 예시로 new를 붙여 호출하는 함수를 생성자 함수 참고 
// 생성자 함수는 대문자로 시작
function Monster(name,hp,att,xp){
  this.name = name;
  this.hp = hp;
  this.att = att;
  this.xp = xp;
}
const monster1 = new Monster('슬라임',25,10,10);
const monster2 = new Monster('오크',25,10,10);

// 클래스를 적용한 함수는 아래와 같음 
// new를 써서 객체를 생성하지 않으면 오류가 남
class Monster{
  constructor(name,hp,att,xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }
}

const monster1 = new Monster('슬라임',25,10,10);
const monster2 = new Monster('오크',25,10,10);

// 객체 안에 메서드를 추가
class Monster{
  constructor(name,hp,att,xp){
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }
  attack(monster){
    monster.hp -= this.att;
    this.hp -= monster.att;
  }
}


// prototype
// 프로토타입은 유전자라고 이해하면 편함.
// 부모 함수
function a(){
  this.name = 'kim';
  this.height = '170';
}
// 자식 함수 // 위 생성자 함수와 동일
const b = new a();

// 부모 유전자에 새로운 속성을 부여
a.prototype.hobby='movie';

// 자식 함수에 값을 직접 추가하지 않아도 자식 함수에서 속성이 추가됨
// 하지만 부모 함수에 추가한게 아니라 부모 함수의 유전자에 추가한 것이기 때문에 부모 함수는 프로토타입으로 추가된 속성값을 가지지 않음.th
console.log(b.hobby); // 'movie'  
console.log(a.hobby); // undefined