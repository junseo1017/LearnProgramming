// function solution(participant, completion) {
//   const ex = new Set(participant);
//   const arr = Array.from(ex);
//   let a = '';
//   if (arr.length === completion.length) {
//     participant.forEach((e) => {
//       if (participant.indexOf(e) !== participant.lastIndexOf(e)) {
//         a = e;
//       }
//     });
//     return console.log(a);
//   } else {
//     const [b] = participant.filter((e) => completion.indexOf(e) === -1);
//     return console.log(b);
//   }
// }

// solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']);

// function solution(participant, completion) {
//     for (let i = 0; i < completion.length; i++) {
//       if (participant.indexOf(completion[i]) >= 0) {
//         participant.splice(participant.indexOf(completion[i]), 1);
//       }
//     }
//     const [answer] = participant;
//     return answer;
//   }
console.log(participant);
console.log(completion);
function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();
  for (let i = 0; i < completion.length; i++) {
    if (participant[i] !== completion[i]) return participant[i];
  }
  return participant[participant.length - 1];
}

solution(['mislav', 'stanko', 'ana', 'boca'], ['stanko', 'ana', 'mislav']);
