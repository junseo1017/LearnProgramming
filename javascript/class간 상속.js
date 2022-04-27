// class
// 객체를 생성하는 템플릿 문법. class 예약어로 클래스 선언.
// constructor 메서드 내부에 코드 작성
// new (클래스이름) 호출 시 constructor 함수가 실행되고 객체가 반환됨.

// 클래스의 constructor의 매개변수나 클래스 내부의 함수가 겹치는 경우가 있는데,
// 이 경우 중복을 제거하기 위해 상속을 한다.
// 속성과 메서드를 공통인 부분을 새로운 클래스로 작성
// 상속은 여러번에 걸쳐서 할 수 있다.

// 아래는 중복된 내용을 작성한 새로운 클래스
class Unit {
  constructor(name, age, email, gender) {
    this.name = name;
    this.age = age;
    //,,,
  }
  overLapFucn(target) {
    target.name = this.name;
  }
}

//아래는 기존 클래스
class Seoul {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  overLapFucn(target) {
    target.name = this.name;
  }
}

// 클래스에 상속 적용하기
class Seoul extends Unit {
  constructor(name, age) {
    super(name, age, email, gender);
    // this.name = name; // 생성자 겹치는 부분만 삭제하고 // 그 외의 부분 뒤에 작성
    // this.age = age;
  }
  //   overLapFucn(target) {
  //     target.name = this.name;
  //   } 삭제해도 똑같이 기능함.
}

// 함수가 유사하나 동일하지 않을 때 사용

// 부모 클래스(Unit)
function overLapFucn(target) {
  target.name = this.name;
}
// 자식 클래스(Seoul)
function overLapFucn(target) {
  target.name = this.name;
  console.log('seoul');
}

// 중복 제거
function overLapFucn(target) {
  super.overLapFucn(target); // ===     target.name = this.name;
  console.log('seoul');
}
