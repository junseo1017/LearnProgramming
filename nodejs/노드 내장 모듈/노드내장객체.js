// 노드가 생김으로서 자바스크립트에 없는 다양한 기능을 제공

// global
// 노드의 전역 객체
// 모든 파일에서 접근 가능 / window처럼 생략도 가능
// globalThis로 통일됐음.
// node에서 window나 document가 동작하지 않음

// console
// console.log : 에러 로깅
// console.dir : 객체 로깅
// console.trace : 호출 스택 로깅
// console.time / timeEnd
// time과 timeEnd 사이가 실행되는데 걸리는 시간을 콘솔로 띄워줌

// setTimeout setInterval setImmediate
// 코드가 백그라운드에서 비동기적으로 실행되게 인위적으로 작성할 수 있음'

// __filename(현재 파일 경로), __dirname(현재 폴더, 디렉토리)
// 브라우저와 다르게 노드는 컴퓨터에 접근을 해서 파일을 직접적으로 수정할 수 있음.
// console.log(__filename) ..

// module exports
// module.exports === exports === {}
// module.exports에 함수를 넣으면 참조관계가 끊기게 됨.
// 한가지만 모듈로 빼고 싶으면 module.export로 빼면 좋고, 여러개를 넣고 싶으면 export.odd = odd;와같이 분리해도 좋다.
// exports를 사용한 다음 module.exports를 사용해서도 안된다 한가지만 사용,

// this
// 전역 스코프에서 this는 this === module.exports임
// function 안의 this는 global

// require의 특성
require('./var'); // 이렇게만 해도 불러오는 파일을 실행시킬 수 있음
// require의 property 중
// main : require을 실행시키면 기본적으로 module임. require.main을 통해서 어떤 파일을 실행한 건지 알아낼 수 있음
// cache : 예를 들어 node index를 실행시켜보면 require를 실행하게 될텐데 한번 읽으면 읽은 정보를 require cache property 내부에 저장해놓음. 후에 다시 한번 더 실행시키면 캐시에 저장된 파일을 불러옴. 하드디스크에 있는 정보를 메모리에서 옮기는 갈 캐싱이라고 함.
// 하드디스크를 읽는 것은 비교적 느리고 메모리를 읽는 것은 비교적 빠르다.
// require가 제일 위에 올 필요는 없음 // but import는 가장 위에 있어야 함.
// require에 한번 require한 모듈에 대한 캐싱 정보가 들어있음.
// require main은 노드 실행 시 첫 모듈을 가리침

// 순환 참조
// dep1.js
require('./dep2');
// dep2.js
require('./dep1');
// 이런 상황을 막기 위해 순환 참조가 발생하면 {} 빈 객체로 변경함. 