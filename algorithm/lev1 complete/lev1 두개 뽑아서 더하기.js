function solution(numbers) {
  arr = [];
  numbers.forEach((e, i) => {
    console.log(i);
    for (let j = i + 1; j < numbers.length; j++) {
      if (i === numbers.length - 1) return;
      arr.push(e + numbers[j]);
    }
  });
  const answer = Array.from(new Set(arr));
  return answer.sort((a, b) => a - b);
}

solution([2, 1, 3, 4, 1]);
// [2,1,3,4,1]	[2,3,4,5,6,7]
