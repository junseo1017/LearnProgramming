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
  let reports = [];
  let reported = [];
  for (let i = 0; i < report.length; i++) {
    reports.push(report[i].split(' ')[0]);
    reported.push(report[i].split(' ')[1]);
  }
  // 중첩 반복문을 통해 신고 횟수가 k에 도달하면 중복신고 변수에 푸쉬
  // count가 정상적으로 작동하지 않음 살펴봐야함.
  let duplicateReport = [];
  let count = 0;
  for (let i = 0; i < reported.length; i++) {
    for (let u = i; u < reported.length; u++) {
      if (reported[i] === reported[u]) {
        count += 1;
      }
    }
    if (count < k) {
      count = 0;
    } else if (count >= k || duplicateReport.indexOf(reported[i]) === -1) {
      duplicateReport.push(reported[i]);
      count = 0;
    }
  }
  let result = Array(id_list.length).fill(0);
  for (let i = 0; i < duplicateReport.length; i++) {
    for (let u = 0; u < reported.length; u++) {
      if (duplicateReport[i] === reported[u]) {
        let resultIndex = id_list.indexOf(reports[u]);
        result[resultIndex] += 1;
      }
    }
  }
  return result;
}

// 다른 사람 풀이
function solution(id_list, report, k) {
  //report를 set을 이용하여 중복제거, 각 id 당 신고당한 횟수 reportedCount에 저장,
  //각 id를 신고한 사람 array를 reportedBy에 저장,
  //k번 이상 신고당한 id를 신고한 id가 받을 메일 수를 mailCount에 저장
  //answer에 mailCount에 저장된 값을 id_list와 같은 id 순서로 저장.
  const reportSet = new Set(report);
  const reportedCount = {}; //{"id": Number(count)}
  const reportedBy = {}; //{"id":[]}
  const mailCount = {}; //{"id":Number(count)}

  for (const reportedId in reportedCount) {
    if (reportedCount[reportedId] >= k) {
      reportedBy[reportedId].forEach((reporter) => {
        mailCount[reporter] += 1;
      });
    }
  }
  return id_list.map((id) => mailCount[id]);
}

function solution(id_list, report) {
  const reportSet = new Set(report);
  const reportedCount = {}; //{"id": Number(count)}
  const reportedBy = {}; //{"id":[]}
  const mailCount = {}; //{"id":Number(count)}

  id_list.forEach((element) => {
    reportedCount[element] = 0;
    mailCount[element] = 0;
    reportedBy[element] = [];
  });
  console.log(reportedCount);
  console.log(mailCount);
  console.log(reportedBy);
}

['muzi', 'frodo', 'apeach', 'neo'];
id_list.forEach((e) => {
  reportedCount[element] = 0;
  mailCount[element] = 0;
  reportedBy[element] = [];
});



["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]
reportSet.forEach((element) => {
  const [id, reported] = element.split(' ');
  reportedCount[reported] += 1;
  reportedBy[reported].push(id);
});




for (const reportedId in reportedCount) {
  if (reportedCount[reportedId] >= k) {
    reportedBy[reportedId].forEach((reporter) => {
      mailCount[reporter] += 1;
    });
  }
}