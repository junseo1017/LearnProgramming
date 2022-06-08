function solution(s) {
  answerArr = [];
  checkArr = [];
  count = 1;
  for (let count = 1; count <= s.length; count++) {
    for (let i = 0; i < s.length; i += count) {
      checkArr.push(s.substr(i, count));
    }
    answerArr.push(arrCount(checkArr));
    checkArr = [];
  }
  return Math.min(...answerArr);
}

function arrCount(checkArr) {
  same = 1;
  filter = [];
  checkArr.forEach((e, i) => {
    if (e === checkArr[i + 1]) {
      return same++;
    } else {
      if (same === 1) return filter.push(e);
      let el = String(same) + e;
      same = 1;
      return filter.push(el);
    }
  });
  return filter.join('').length;
}

solution('ababcdcdababcdcd');

// "aabbaccc"  7
// "ababcdcdababcdcd"  9
// "abcabcdede"  8
// "abcabcabcabcdededededede"  14
// "xababcdcdababcdcd"  17
