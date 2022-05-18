function solution(numbers) {
  let answer = 0;
  for (let i = 0; i < 10; i++) {
    if (numbers.indexOf(i) === -1) {
      answer += i;
    }
  }

  console.log(answer);
}

solution([5, 8, 4, 0, 6, 7, 9]);
