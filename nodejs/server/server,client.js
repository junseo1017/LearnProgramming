// 서버와 클라이언트의 관계
// 클라이언트가 서버로 요청(request)을 보냄

// 서버는 요청을 처리
// 처리 후 클라이언트로 응답(response)을 보냄
//     예를 들어 네이버에서 검색을 했을 때, 웹브라우저는 클라이언트가 되고 서버는 네이버에 있는 컴퓨터

// 요청과 응답은 http라는 공통된 프로토콜(규약)에 의해서 이루어짐
// 서버쪽 프로그래밍할 때 http 지식을 익혀둬야 함


// 노드로 http 서버 만들기
// createServer로 요청이벤트에 대기
// req 객체는 요청에 관한 정보가, res 객체는 응답에 관한 정보가 담겨 있음.
const http = require('http');
http.createServer((req,res)=>{
    // 응답할 내용을 작성
})