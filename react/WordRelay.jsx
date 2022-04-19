const React = require('react');
const {Component} = React; // 원래는 아래 extends React.Component라고 해도 되는데 구조분해할당으로 생략해서 표시할 수 있게함

class WordRelay extends Component {
  state = {
    text: 'hello webpack',
  };
  render() {
    return <h1>{this.state.text}</h1>;
  }
}

module.exports = WordRelay;
