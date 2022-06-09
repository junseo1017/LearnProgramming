function solution(record) {
  const answer = [];
  const user = {};
  record.forEach((e) => {
    const split = e.split(' ');
    if (split[0] !== 'Leave') {
      user[split[1]] = split[2];
    } else return;
  });
  console.log(user);
  record.forEach((e) => {
    const split = e.split(' ');
    switch (split[0]) {
      case 'Enter':
        return answer.push(`${user[split[1]]}님이 들어왔습니다.`);
      case 'Leave':
        return answer.push(`${user[split[1]]}님이 나갔습니다.`);
      case 'Change':
        return;
      default:
        break;
    }
  });
  return answer;
}

solution(['Enter uid1234 Muzi', 'Enter uid4567 Prodo', 'Leave uid1234', 'Enter uid1234 Prodo', 'Change uid4567 Ryan']);

// ["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]

// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
