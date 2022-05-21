const Post = new Schema({ 
    ...
    user:{ // 단일 객체
        type:Schema.Types.ObjectId, // objectid타입을 ㅗ선언
        ref:'User' // user라는 모델로 reference되어 있음
    },
    comments:[{ // 복수 객체
        type:Schema.Types.ObjectId,
        ref:'Comment', // 모델 선언할 때 전달해주었던 모델의 이름
    }],
});

const post = await Post
.find().populate(['user','comments']); // 레퍼런스된 objectid를 사용하면
// post.user.name 또는 post.comments[0].content를 post 객체 안에서 사용 가능

// document 안에 document를 담지 않고, ObjectId를 가지고 reference하여 사용할 수 있는 방법을 제공
// Document에는 reference되는 objectId를 담고, 사용할 때 populate하여 하위 document처럼 사용할 수 있게 해줌