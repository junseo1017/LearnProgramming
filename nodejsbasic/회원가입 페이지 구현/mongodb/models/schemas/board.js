// 스키마 정의하기

const {Schema} = require('mongoose'); // 스키마를 사용하기 위해 mongoose에서 schema 클래스를 가져옴
const PostSchema = new Schema( // 스키마 객체 선언
  {
    title: String, // 데이터타입 선언
    content: String,
  },
  {
    timestamps: true, // timestamps 옵션 추가
  }
);

module.exports = PostSchema;

// 스키마 정의
// Collection에 저장될 Document의 스키마를 Code-Level에서 관리할 수 있도록 Schema를 작성할 수 있음
// 다양한 형식을 미리 지정하여 생성 수정 작업 시 데이터 형식을 체크해주는 기능을 제공함
// timestamps 옵션을 사용하면 생성,수정 시간을 자동으로 기록해줌
