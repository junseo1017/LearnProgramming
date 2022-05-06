const odd = '홀수입니다';
const even = '짝수입니다';
module.exports = {odd, even}; //내가 다른 파일에서 쓰고 싶은 변수를 모듈 익스포츠에 할당을 해서 넘겨줌

// 원래는 아래 식과 동일하지만 key와 value가 같으면 생략이 가능
// module.exports = {
//   odd: odd,
//   even: even,
// };
