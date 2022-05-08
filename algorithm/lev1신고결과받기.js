function solution(id_list, report, k) {
  // 중첩 반복문을 배열 요소 내 중복 값을 확인하고 splice로 배열 수정
  for (let i = 0; i < report.length; i++) {
    for (let u = i + 1; u < report.length; u++) {
      if (report[i] === report[u]) {
        report.splice(u, 1);
      }
    }
  }

  // 신고당한사람과 신고한 사람 배열로 따로 나누기
  let singoham = [];
  let singodangham = [];
  for (let i = 0; i < report.length; i++) {
    singoham.push(report[i].split(' ')[0]);
    singodangham.push(report[i].split(' ')[1]);
  }
  // 중첩 반복문을 통해 신고 횟수가 k에 도달하면 중복신고 변수에 푸쉬
  // count가 정상적으로 작동하지 않음 살펴봐야함.
  let joogboksingo = [];
  let count = 0;
  for (let i = 0; i < singodangham.length; i++) {
    for (let u = i; u < singodangham.length; u++) {
      if (singodangham[i] === singodangham[u]) {
        count += 1;
      }
    }
    if (count < k) {
      count = 0;
    } else if (count >= k || joogboksingo.indexOf(singodangham[i]) === -1) {
      joogboksingo.push(singodangham[i]);
      count = 0;
    }
  }
  let result = Array(id_list.length).fill(0);
  for (let i = 0; i < joogboksingo.length; i++) {
    for (let u = 0; u < singodangham.length; u++) {
      if (joogboksingo[i] === singodangham[u]) {
        let resultIndex = id_list.indexOf(singoham[u]);
        result[resultIndex] += 1;
      }
    }
  }
  return result;
}

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있음.
// 신고 횟수에 제한없음, 서로 다른 유저를 계속해서 신고할 수 있음
// 한 유저 여러 번 신고할 수 있지만 동일한 유저에 대한 신고 횟수 1회 처리

// k번 이상 신고된 유저 게시판 이용 정지
// 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지시킴과 동시에 메일 발송
