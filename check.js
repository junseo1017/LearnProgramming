function solution(sizes) {
  const sortSizeArr = sizes.map((e) => e.sort((a, b) => b - a));
  const filterWidth = sortSizeArr.map((e) => e[0]);
  const filterHeight = sortSizeArr.map((e) => e[1]);
  const answer = Math.max(...filterWidth) * Math.max(...filterHeight);
  return answer;
}
