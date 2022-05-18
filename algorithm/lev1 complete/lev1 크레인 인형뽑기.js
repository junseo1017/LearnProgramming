function solution(board, moves) {
  let answer = 0;
  let arr = 0;
  let pick = [];

  moves.forEach((e) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][e - 1] !== 0) {
        if (board[i][e - 1] === pick[pick.length - 1]) {
          pick.pop();
          arr += 2;
        } else {
          pick.push(board[i][e - 1]);
        }
        board[i][e - 1] = 0;
        return;
      }
    }
  });
  return arr
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
