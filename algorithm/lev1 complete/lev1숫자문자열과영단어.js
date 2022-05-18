function solution(s) {
  const answer = [];
  let word = [];
  let reg = /[0-9]/;
  let splitS = s.split('');
  function join(e) {
    switch (e.join('')) {
      case 'zero':
        answer.push(0);
        word = [];
        break;
      case 'one':
        answer.push(1);
        word = [];
        break;
      case 'two':
        answer.push(2);
        word = [];
        break;
      case 'three':
        answer.push(3);
        word = [];
        return;
      case 'four':
        answer.push(4);
        word = [];
        break;
      case 'five':
        answer.push(5);
        word = [];
        break;
      case 'six':
        answer.push(6);
        word = [];
        break;
      case 'seven':
        answer.push(7);
        word = [];
        break;
      case 'eight':
        answer.push(8);
        word = [];
        break;
      case 'nine':
        answer.push(9);
        word = [];
        break;
      default:
        break;
    }
  }
  splitS.forEach((e) => {
    if (reg.test(e)) {
      answer.push(e);
    } else {
      word.push(e);
      join(word);
    }
  });
  return Number(answer.join(''));
}

function solution(s) {
  const word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  for (let i = 0; i < 10; i++) {
    s = s.split(word[i]).join(i);
  }
  return Number(s);
}
