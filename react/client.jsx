// npm에 설치한 react,reactdom 불러오기
// js확장자, jsx확장자
// jsx로 쓰면 jsx확장자로 해놓는게 리액트 전용 파일인지 아닌지 구분이 쉬움
const React = require('react');
const WordRelay = require('./WordRelay'); // 다른 파일에서 export 한 파일을 불러옴
const {createRoot} = require('react-dom/client');
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<WordRelay />);
