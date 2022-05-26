function solution(N, stages) {
  let answer = [];
  let countChalNumber = 0;
  let countClearNumber = 0;
  for (let i = 1; i < N + 1; i++) {
    answer.push([i, 0]);
  }
  answer.forEach((a) => {
    countChalNumber = stages.filter((e) => e >= a[0]).length;
    countClearNumber = stages.filter((e) => e === a[0]).length;
    a[1] = countClearNumber / countChalNumber;
  });
  answer.sort((a, b) => {
    if (a[1] === b[1]) {
      b[0] - a[0];
    }
    return b[1] - a[1];
  });
  let A = answer.map((e) => e[0]);
  return A;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
