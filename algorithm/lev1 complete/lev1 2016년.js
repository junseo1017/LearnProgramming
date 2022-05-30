// function solution(a, b) {
//   const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//   const date = new Date(2016, a - 1, b).getDay();
//   return day[date];
// }

function solution(a, b) {
  const {date} = new Date(2016, a - 1, b).getDay();
  const spl = date.split(' ');
  console.log(spl);
}

solution(5, 24);
