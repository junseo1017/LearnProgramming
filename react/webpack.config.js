const path = require('path'); // 경로 조작 // nodejs 깔려있으면 알아서 path깔아져있음
const webpack = require('webpack');
module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스 : production
  devtool: 'eval', // 빠르게
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  entry: {
    app: ['./client.jsx'], // 합칠 파일 // client.jsx 파일에서 이미 wordrelay파일을 불러오고 있기 때문에 굳이 써주진 않는다. 알아서 합쳐줌
  }, //입력

  module: {
    rules: [
      {
        // 여러개의 규칙 적용
        test: /\.jsx?/, //룰을 적용할 파일 js,jsx파일에 이 룰을 적용하겠다는 정규표현식
        loader: 'babel-loader', // 최신문법과 호환되게 바꿔주겠다는 의미
        options: {
          //바벨의 옵션
          presets: [
            // plugin의 모음
            '@babel/preset-env',
            // {
            //   targets: {
            //     browsers: ['> 5% in KR'], // 지원하는 브라우저 한국에서 5%점유율까지;
            //   },
            //   debug: true,
            // },
            '@babel/preset-react',
          ],
          plugins: ['@babel/plugin-proposal-class-properties'],
        },
      },
    ],
  }, //entry 파일 적용 module로 연결해서 output으로 뺀다는 느낌
  plugins: [new webpack.LoaderOptionsPlugin({debug: true})],
  output: {
    path: path.join(__dirname, 'dist'), // nodejs를 사용하여 폴더 지정 // path.join 경로를 알아서 설정해줌 dirname 현재 폴더 안에 있는 dist 폴더를 설정
    filename: 'app.js',
  }, //출력
};
