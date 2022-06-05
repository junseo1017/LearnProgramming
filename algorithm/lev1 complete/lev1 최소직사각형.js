function solution(sizes) {
  let row = 0;
  let column = 0;
  sizes.map((e) => e.sort((a, b) => b - a));
  for (let e of sizes) {
    if (row <= e[0]) {
      row = e[0];
    }
    if (column <= e[1]) {
      column = e[1];
    }
  }
  return row * column;
}
solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);
// 1	60	50
// 2	30	70
// 3	60	30
// 4	80	40
