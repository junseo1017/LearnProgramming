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
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
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
  rl.close();
}).on("close", function () {});

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
