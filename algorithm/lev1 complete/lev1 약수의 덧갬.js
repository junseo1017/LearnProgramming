function solution(left, right) {
  let array = [];
  for (let i = left; i <= right; i++) {
    array.push(i);
  }
  let divisorArr = array.map((e) => divisor(e));
  let reduceArr = divisorArr.reduce((acc, cur) => {
    if (cur[1] % 2 == 0) {
      return (acc += cur[0]);
    } else if (cur[1] % 2 !== 0) {
      return (acc -= cur[0]);
    }
  }, 0);
  return reduceArr;
}

function divisor(e) {
  let count = 0;
  if (e === 1) {
    return [e, 1];
  }
  let half = Math.ceil(e / 2);
  for (let i = 1; i <= half; i++) {
    if (e % i === 0) {
      count += 1;
    }
  }
  count++;
  return [e, count];
}

solution(13, 17);
