function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((e, i) => {
    if (!signs[i]) {
      e = -e;
    }
    answer += e;
  });
  return answer;
}

solution([4, 7, 12], [true, false, true]);
