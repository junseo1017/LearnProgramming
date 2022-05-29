function solution(d, budget) {
  answer = 0;
  d.sort((a, b) => a - b);
  d.forEach((e) => {
    if (budget - e >= 0) {
      budget -= e;
      answer += 1;
    } else {
      return;
    }
  });
  return answer;
}

function solution(d, budget) {
  let answer = 0;
  d.sort((a, b) => a - b);
  for (const iterable of d) {
    if (budget < iterable) break;
    answer += 1;
    budget -= iterable;
  }
  return answer;
}

solution([1, 3, 2, 5, 4], 9);
