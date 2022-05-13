// 데이터베이스 연결
const mongoose = require('mongoose');
const {Post} = require('./models');
mongoose.connect('mongodb://localhost:27017/myapp');
// connect 함수를 이용하여 간단하게 데이터베이스에 연결할 수 있음
// mongoose는 자동으로 연결을 관리해주어 직접 연결 상태를 체크하지 않아도
// 모델 사용시 연결 상태를 확인하여 사용이 가능할 때 작업을 실행함.
// 이 때 데이터 베이스에 연결하는데 문제가 있어도 포스트를 바로 사용하게 되면 오류가 발생하지 않고 연결될때까지 기다렸다가 완료되면 post가 실행되는 연결 관리 기능을 제공함

// Create
async function main() {
  const created = await Post.create({
    title: 'first title',
    content: 'second title',
  });
  const multipleCreated = await Post.create([item1, item2]);
}
// create 함수를 사용하여 Document 생성
// create 함수에는 Document Object(단일 document 생성)나 Document Object의 Array(복수 document 생성) 전달 가능
// create는 생성된 document를 반환해줌

// READ (find)
async function main2() {
  const listPost = await Post.find(query);
  const onePost = await Post.findOne(query);
  const postById = await Post.findById(id); // object 아이디를 바로 검색할 수 있음  
}
// find 관련 함수를 사용하여 Document를 검색
// query를 사용하여 검색하거나 findById를 사용하면 ObjectID로 Document를 검색할 수 있음

// UPDATE
async function main3(){
    const updateResult = await Post.updateOne(query, {...})
    const updateResults = await Post.updateMany(query, {...})
    const postById = await Post.findByIdAndUpdate(query, {...})
    const onePost = await Post.findOneIdAndUpdate(query, {...})

}
// update 관련 함수를 사용하여 Document를 수정
// find~ 함수들은 검색된 document를 업데이트를 반영하여 '반환'해줌 변수로 받을 수 있다. 
// mongoose의 update는 기본적으로 $set operator를 사용하여, Document를 통째로 변경하지 않음


// DELETE
async function main(){
    const deleteResult = await Post.deleteOne(query);
    const deleteResults = await Post.deleteMany(query);
    const onePost = await Post.findOneIdAndDelete(query);
    const postById = await Post.findByIdAndDelete(query);
}
// delete 관련 함수를 사용하여 Document 삭제
// find~ 함수들은 검색된 document를 반환해 줌