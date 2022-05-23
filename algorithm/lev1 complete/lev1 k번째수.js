function solution(array, commands) {
  const answer = [];
  commands.forEach((e) => {
    let a = array.slice(e[0] - 1, e[1]).sort();
    answer.push(a[e[2] - 1]);
  });
  return answer;
}
solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
