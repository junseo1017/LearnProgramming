function solution(answers) {
  let oneRef = [1, 2, 3, 4, 5];
  let twoRef = [2, 1, 2, 3, 2, 4, 2, 5];
  let threeRef = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];
  let answer = [];
  answers.forEach((e, i) => {
    if (e === oneRef[i % 5]) {
      count[0] += 1;
    }
    if (e === twoRef[i % 8]) {
      count[1] += 1;
    }
    if (e === threeRef[i % 10]) {
      count[2] += 1;
    }
  });
  let compare = Math.max(...count);
  for (let i = 0; i < 3; i++) {
    if (count[i] === compare) {
      return answer.push(i + 1);
    }
  }
  return answer;
}

solution([5, 3, 4, 1, 2]);

// function solution(answers) {
//     let oneRef = [1, 2, 3, 4, 5];
//     let twoRef = [2, 1, 2, 3, 2, 4, 2, 5];
//     let threeRef = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
//     let count = [0, 0, 0];
//     let answer = [];
//     answers.forEach((e, i) => {
//       if (e === oneRef[i % 5]) {
//         count[0] += 1;
//       }
//       if (e === twoRef[i % 8]) {
//         count[1] += 1;
//       }
//       if (e === threeRef[i % 10]) {
//         count[2] += 1;
//       }
//     });

//     let sort = Object.entries(count).sort((a, b) => {
//       return b[1] - a[1];
//     });
//     sort.forEach((e, i) => {
//       if (e[1] !== 0) {
//         answer.push(Number(sort[i][0]) + 1);
//       }
//     });
//     console.log(answer);
//   }
