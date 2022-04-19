// 컴포넌트의 이름은 항상 대문자
// 사용방식은 아래와 같음.
// App.js
const name = 'elice';
function Hello() {
  return <h1>Hello,{name}</h1>;
}
export default Hello;
// index.js
import Hello from 'App.js';
ReactDOM.render(<Hello />, document.getElementById('root'));

// 함수형 컴포넌트 vs 클래스형 컴포넌트
// 함수형 컴포넌트를 더 선호하는 이유
// UI로직이 덜 복잡하다
// Component 선언이 편하다.
// 클래스형보다 메모리 자원 덜 사용한다.

// 클래스형 컴포넌트의 단점
// Class 키워드가 필요하다
// Component를 상속받아야 한다
// Render() 메소드 반드시 필요하다
