// 모델 만들기

const mongoose = require('mongoose'); // 몽구스 패키지 로드
const PostSchema = require('./schemas/board'); // post 스키마 로드
exports.Post = mongoose.model('Post', PostSchema); // model함수를 사용하여 post라는 이름으로 postschema와 함께 모델 함수에 전달해서 Post라는 모델을 만들어줬음. Post모델은 export하여 모델 모듈안에서 사용할 수 있도록 만듬.
// 작성된 스키마를 mongoose에서 사용할 수 있는 모델로 만들어야 함
// 모델의 이름을 지정하여 Populate 등에서 해당 이름으로 모델을 호출할 수 있음
