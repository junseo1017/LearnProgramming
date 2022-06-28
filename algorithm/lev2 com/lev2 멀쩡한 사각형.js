function solution(w, h) {
  if (w === h) {
    let c = w;
    return c;
  } else if ((w + h) % 2 === 0) {
    let c = Math.floor(Math.sqrt(w ** 2 + h ** 2)) + 2;
    return c;
  } else if ((w + h) % 2 != 0) {
    let c = Math.floor(Math.sqrt(w ** 2 + h ** 2)) + 1;
    return c;
  }
}
