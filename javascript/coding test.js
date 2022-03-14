// 입출력할 수 있는 모듈을 생성한 뒤 배열을 생성하고 특정한 값을 지우는 메서드
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
var fruits = [];
var remove = ["콩", "무"];
rl.on("line", function (line) {
  fruits = line.split(" ");
  fruits = fruits.filter((element) => !remove.includes(element));
  rl.close();
}).on("close", function () {
  console.log(fruits);
});

// 오름차순 정리하는 메서드
var soldier = [12, 2, 5, 3, 7, 4, 10, 8, 1, 9, 13, 11, 6];
var count = soldier.length;
soldier.sort(function (a, b) {
  return a - b;
});
console.log(soldier);
console.log(count);

//몫과 나머지 구하는 메서드
var num1 = 23781367;
var num2 = 1754;
console.log(Math.floor(num1 / num2));
console.log(num1 % num2);

//입력받은 문자열을 숫자로 바꾸고 평균 구하는 메서드
var input = [];
rl.on("line", (line) => {
  input = line.split(" ");
  input = line.split(" ").map((x) => parseInt(x));
  rl.close();
}).on("close", () => {
  console.log(Math.floor((input[0] + input[1] + input[2]) / input.length));
});

//배열에서 요소를 삭제하고 문자 p의 개수를 세는 메서드
var words = [
  "i",
  "have",
  "a",
  "pen",
  "i",
  "have",
  "pineapple",
  "i",
  "have",
  "an",
  "apple",
  "pen",
];
words.splice(4, 2);
words.splice(5, 3);
var lyrics = words.join(" ");
console.log(lyrics);
console.log(lyrics.match(/p/g).length);

// N줄에 걸쳐 주어지는 문자를 문자열로 만들어 출력하는 메서드.

var count = 0;
var N = 0;
var input = [];
rl.on("line", function (x) {
  count += 1;
  if (count === 1) {
    N = x;
  } else {
    input.push(x);
  }
  if (count > N) {
    rl.close();
  }
}).on("close", function () {
  console.log(input.join(""));
});

//입력된 금액에 따라 출력하는 메서드

rl.on("line", function (money) {
  if (money >= 1000) {
    console.log("택시");
  } else if (money >= 500) {
    console.log("버스");
  } else if (money >= 300) {
    console.log("지하철");
  } else {
    console.log("도보");
  }
  rl.close();
}).on("close", function () {});

//문자열로 숫자를 입력받고 공백을 기준으로 배열을 만든 다음 조건에 맞게 불린값을 반환한 값을 출력하는 메서드
rl.on("line", function (num) {
  var check = (num) => {
    var sepNum = num.split(" ");
    var a = sepNum[0];
    var b = sepNum[1];
    var c = sepNum[2];
    var d = sepNum[3];
    if (a <= b && a == d && b > c && c < 6) {
      return true;
    } else if (a == b && a == c && a == d) {
      return true;
    } else {
      return false;
    }
  };
  console.log(check(num));

// 정수를 입력받고 약수를 구한다음 약수를 10개씩 문자열로 연결한 뒤 나열하는 메서드
const divisorList = [];
const divisor = (N) => {
  let n = parseInt(N);
  for (let i = 0; i <= N; i++) {
    if (N % i === 0) {
      divisorList.push(i);
    }
  }
};
divisor(N);
while (divisorList.length > 0) {
  console.log(divisorList.splice(0, 10).join(" "));
}

// 3,6,9 게임 1~30까지의 문자 배열을 생성
// 배열 내 특정 문자를 검색하고 불린값을 반환하는 메서드
var list = Array(30)
  .fill()
  .map((v, i) => String(i + 1));
for (let i = 0; i <= 29; i++) {
  if (list[i].match("3") || list[i].match("6") || list[i].match("9")) {
    console.log("짝!");
  } else console.log(list[i]);
}

// 숫자를 입력하면 그 전 숫자까지 배열로 추가되고
// 배열을 문자열로 합치는 메서드
var list = [];
const listNum = (num) => {
for(var i = 1;i<=num;i++){
    list.push(i);
}
}
listNum(num);
console.log(list.join(', '));

// 문자열 내 특정한 단어의 개수를 정규표현식을 통해 카운트하는 메서드
if(line.includes('촉촉한 초코칩')){
  var wordCount = line.match(/촉촉한 초코칩/g).length;
  console.log(wordCount);
  } else console.log("this string doesn't have '촉촉한 초코칩'");

// 기존 타율이 입력되어 있는 상태에서 타율을 입력받는다. 단 타율을 두 번 입력받을 수 있게 입력문에 조건문을 걸었음
// 입력문에서 입력이 문자이기 때문에 숫자로 바꿔줬다.
// 입력된 타석과 안타는 배열로 추가하고 타율을 계산한 뒤 타율은 문자로 바꿔서 소수자리 하나하나 배열로 만들었고
// 이를 다시 map을 통해 숫자로 바꿔주는 메서드
var list = [];
rl.on("line", function (x) {
    list.push(x);
    if(list.length===1){
    list[0] = parseInt(list[0])+16;
}
    if(list.length===2){
    list[1] = parseInt(list[1])+6;
        rl.close();
    }
}).on("close", () => {
    var hit = Math.floor(list[1]/list[0]*1000)/1000;
    var hitStr = String(hit).split('').splice(2).map((e,i) =>{
    return parseInt(e);
});
    if(hitStr[0] && hitStr[0] !== 0){
        console.log(hitStr[0]+'할'); 
    }
    if(hitStr[1] && hitStr[1] !== 0){
        console.log(hitStr[1]+'푼'); 
    }
    if(hitStr[2] && hitStr[2] !== 0){
        console.log(hitStr[2]+'리'); 
    }
});

// 입력한 문자열을 배열로 나누고 유니코드를 통해 문자열에서 문자를 삭제하고 숫자만을 남기는 메서드
var str = line.split('');
for(var i = 0;i<str.length;){
    if(str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0)<=57){
        i++;
    } else {
    str.splice(i,1);    
    }
}
console.log(str.join(''));

// 일정 조건을 만족시키면 웹화면에 태그를 추가하여 특정 문구를 표시하는 메서드
var scores = {
  "kor": 55,
  "mat": 75,
  "eng": 50
}
var $kor = scores.kor;
var $mat = scores.mat;
var $eng = scores.eng;
var average = ($kor+$mat+$eng)/3;
const index = document.createElement('div');
document.body.append(index);

if($kor >= 40 && $mat >= 40 && $eng >= 40){
  if(average >= 60){        
      index.appendChild('pass');
  }
} else  {
      index.append('fail');
}

//1~100까지 짝수 화면에 띄우는 메서드
var str = '';
for(let i = 1;i<=100;i++){
    if((i+1)%2===0){
    } else {
    str += String(i);
    }
}
const index = document.createElement('div');
const text = document.createTextNode(str);
index.appendChild(text);
document.body.appendChild(index);

// 식사리스트에서 점심 메뉴만 화면에 출력하기
var foods = ["hamburger", "pasta", "curry", "chicken", "salad", "tteokbokki", "ramen", "pizza", "gimbap", "sushi"]
var lunch = [];
const index = document.createElement('div');
document.body.append(index);
for(let i=0;i<foods.length;i++){
    if(i%2===0){
    lunch.push(foods[i]);
    }
}
index.append(foods.length, document.createElement('br'));
for(let i=0;i<lunch.length;i++){
    index.append(lunch[i], document.createElement('br'));
}

// 배열에서 특정 문자로 시작하는 요소를 찾아 개수를 세고 화면에 출력하는 메서드
const fruits = ['apple', 'banana', 'orange', 'blueberry', 'strawberry']
var sum = 0; 
for(let i = 0;i<fruits.length;i++){
    if(fruits[i].indexOf('b') === 0){
    sum += 1;
}
}
const index = document.createElement('div');
document.body.append(index);
index.append('b로 시작하는 과일은 '+sum+'개');

// 특정 문자를 다른 문자로 변환해서 출력하는 메서드
var str = [];
rl.on("line", function (line) {
var trans = line.split('');
for(let i = 0;i<trans.length;i++){
    if(trans[i] == ' ' || trans[i] == '.'){
    } else str.push('링딩동 ');
    if(trans[i] == ' '){
    str.push('링디기디기');
    console.log(str.join(''));
    str=[];
}   if(trans[i] === '.'){
    str.push('딩딩딩');
    console.log(str.join(''));
    str=[];
}
}
console.log(str.join(''));


// 입력한 값 n보다 작은 수의 피보나찌 수열 메서드
var list = [0,1,1];
rl.on("line", function (line) {
var zero = 0;
var one = 1;
var two = 1;
for(;;){
    if(list[list.length-1]<line){
    zero = one + two;
    list.push(zero);
    one = two;
    two = zero;
    } else {
    list.splice(-1,1);
    break;
    } 
}
console.log(list);




//N줄 입력 처리
var count = 0; // 몇 번째 입력인지 기록
var N = 0; // 첫 번째 줄에 입력된 N
var input = [];

rl.on("line", function (x) {
  count += 1; // 입력 횟수가 증가
  if (count === 1) {
    // 첫 번째 입력인 경우 앞으로 주어질 입력 개수 기록
    N = x;
  } else {
    // 이후 입력되는 N개의 입력은 배열에 저장
    input.push(x);
  }
  if (count > N) {
    // N번 입력을 받은 뒤 종료
    rl.close();
  }
}).on("close", function () {
  // 입력 종료 후 동작할 코드
  console.log(input);
});

// 여러 줄 입력 처리(몇 번 입력할지 확실할 때)
var count = 0; // 몇 번째 입력인지 기록
rl.on("line", function (x) {
  count += 1; // 입력 횟수가 증가

  if (count === 1) {
    // 첫 번째 입력인 경우 동작
  } else if (count === 2) {
    // 두 번째 입력인 경우 동작
  } else if (count === 3) {
    // 세 번째 입력인 경우 동작
  } else {
    // 네 번째 입력인 경우 동작
    rl.close(); // 입력 종료
  }
}).on("close", function () {
  // 입력 종료 후 동작할 코드
});