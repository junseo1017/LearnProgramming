function solution(arr) {
  const check = /[0-9]+/g;
  const answer = arr.join().match(check);
  return answer;
}
solution([1, 1, 3, 3, 0, 1, 1]);
