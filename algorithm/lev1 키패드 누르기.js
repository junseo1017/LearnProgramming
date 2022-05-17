function solution(numbers, hand) {
  let answer = '';
  let [leftRi, leftCi] = [3, 0];
  let [rightRi, rightCi] = [3, 2];

  numbers.forEach((e) => {
    if (e === 0) e === 11;
    if (e === 1 || e === 4 || e === 7) {
      answer += 'L';
      [leftRi, leftCi] = [Math.floor((e - 1) / 3), 0];
      return;
    }
    if (e === 3 || e === 6 || e === 9) {
      answer += 'R';
      [rightRi, rightCi] = [Math.floor((e - 1) / 3), 0];
      return;
    }
    if (e === 2 || e === 5 || e === 8 || e === 0) {
      if (e === 0) e = 11;
      console.log(e);
      let [nextRi, nextCi] = [Math.floor((e - 1) / 3), 1];
      let leftDistance = Math.abs(nextRi - leftRi) + Math.abs(nextCi - leftCi);
      let rightDistance = Math.abs(nextRi - rightRi) + Math.abs(nextCi - rightCi);
      console.log(`left : ${leftDistance} rigth : ${rightDistance}`);
      if (leftDistance < rightDistance || (leftDistance === rightDistance && hand === 'left')) {
        answer += 'L';
        [leftRi, leftCi] = [nextRi, nextCi];
        return;
      } else if (leftDistance > rightDistance || (leftDistance === rightDistance && hand === 'right')) {
        answer += 'R';
        [rightRi, rightCi] = [nextRi, nextCi];
        return;
      }
    }
  });
  return answer;
}

console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
