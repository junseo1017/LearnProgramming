function solution(id_list, report, k) {
  reportSet = new Set(report);
  let reported = {};
  let reportedBy = {};
  let count = {};

  id_list.forEach((e) => {
    reported[e] = 0;
    reportedBy[e] = [];
    count[e] = 0;
  });

  reportSet.forEach((e) => {
    const [id, reports] = e.split(' ');
    reported[reports] += 1;
    reportedBy[reports].push(id);
  });

  for(let props in count){
    if(reported[props]>=k){
      reportedBy[props].forEach(e=>{
        count[e]+=1
      })
    }
  }

  return id_list.map(e=> count[e])

}
