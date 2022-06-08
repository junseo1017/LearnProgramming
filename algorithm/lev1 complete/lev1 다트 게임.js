function solution(dartResult) {
  const num = [];
  [...dartResult].forEach((e, i) => {
    if (e >= '0' && e <= '9') {
      if (e === '1' && [...dartResult][i + 1] === '0') {
        return num.push(e + [...dartResult][i + 1] + [...dartResult][i + 2]);
      }
      if (e === '0' && [...dartResult][i - 1] === '1') {
        return;
      }
      return num.push(e + dartResult[i + 1]);
    } else if (e === '*' || e === '#') {
      return num.push(e);
    } else return;
  });

  const parse = num.map((e) => {
    if (e === '*' || e === '#') {
      return e;
    } else if (e.length === 3) {
      if (e[e.length - 1] === 'S') {
        return Number(e[0] + e[1]);
      } else if (e[e.length - 1] === 'D') {
        return Number(e[0] + e[1]) ** 2;
      } else if (e[e.length - 1] === 'T') {
        return Number(e[0] + e[1]) ** 3;
      }
    } else if (e[e.length - 1] === 'S') {
      return Number(e[0]);
    } else if (e[e.length - 1] === 'D') {
      return Number(e[0]) ** 2;
    } else if (e[e.length - 1] === 'T') {
      return Number(e[0]) ** 3;
    }
  });
  let answer = [];
  parse.forEach((e, i) => {
    if (typeof e === 'number') {
      answer.push(e);
    } else if (e === '*') {
      answer = answer.map((e) => e * 2);
    } else if (e === '#') {
      answer[i - 1] = answer[i - 1] * -1;
    }
  });
  return answer.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);
}

solution('1D2S#10S');
