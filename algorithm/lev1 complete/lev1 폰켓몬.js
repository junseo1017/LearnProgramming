function solution(nums) {
  const numsLength = nums.length / 2;
  const set = new Set(nums);
  const arraySet = Array.from(set);
  if (numsLength >= arraySet.length) {
    return arraySet.length;
  } else return numsLength;
}
solution([3, 3, 3, 2, 2, 4]);
