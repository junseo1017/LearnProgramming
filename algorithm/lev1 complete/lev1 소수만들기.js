function solution(nums) {
  let count = 0;
  const arr = [];
  for (let i = 0; i <= nums.length - 3; i++) {
    for (let j = i + 1; j <= nums.length - 2; j++) {
      for (let k = j + 1; k <= nums.length - 1; k++) {
        arr.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }
  arr.forEach((e) => {
    const arr = [];
    for (let i = 1; i <= e; i++) {
      if (e % i === 0) {
        arr.push(i);
      }
    }
    if (arr.length === 2) {
      count += 1;
    }
  });
  console.log(count);
}

