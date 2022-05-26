function solution(n, lost, reserve) {
  let count = lost.length;

  lost.forEach((e, i) => {
    const correct = reserve.indexOf(e);
    const front = reserve.indexOf(e - 1);
    const back = reserve.indexOf(e + 1);
    if (correct >= 0) {
      reserve.splice(correct, 1);
      count -= 1;
    } else if (front >= 0) {
      reserve.splice(front, 1);
      count -= 1;
      return;
    } else if (back >= 0) {
      reserve.splice(back, 1);
      count -= 1;
      return;
    }
  });
  return n - count;
}
solution(5, [2, 4], [1, 3, 5]);
