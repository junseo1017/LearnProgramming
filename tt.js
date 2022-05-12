function solution(lottos, win_nums) {
  let zero = lottos.filter((e) => e === 0).length;
  let correct = win_nums.filter((e) => lottos.includes(e)).length;
  const Rank = [6, 6, 5, 4, 3, 2, 1];
  let lowRank = Rank[correct];
  let HighRank = Rank[correct + zero];
  return [HighRank, lowRank];
}

// lottos                 	win_nums	                result
// [44, 1, 0, 0, 31, 25]	[31, 10, 45, 1, 6, 19]   	[3, 5]
// [0, 0, 0, 0, 0, 0]	    [38, 19, 20, 40, 15, 25]	[1, 6]
// [45, 4, 35, 20, 3, 9]	[20, 9, 3, 45, 4, 35]	    [1, 1]
