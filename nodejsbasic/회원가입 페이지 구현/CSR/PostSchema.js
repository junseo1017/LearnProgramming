// mongoose의 sub-schema를 이용하여 Post 스키마에 comment를 배열로 추가
// populate를 사용할 떄 oid만 저장하는 것과는 다르게 comment의 내용을 게시글이 포함하게 됨.

const CommentSchema = new Schema(
  {
    content: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {timestamps: true}
);

const PostSchema = new Schema({
  comments: [CommentSchema],
});
