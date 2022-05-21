// api 라우터를 추가하고 restful하게
// api/posts/{postId}/comments 경로로 댓글 작성 기능 구현

// 게시글 업데이트 시 $push를 사용하여 comments 배열에 새로 작성된 댓글 추가 > 동시에 들어오는 요청에 대해 정확하게 처리
// api는 render하지 않고 json으로 응답

// 댓글 작성 api
router.post('/posts/:shortId/commnets',(req,res,next)=>{
    const {shortId} = req.params;
    const {content} = req.body;
    const author = await User.findOne({shortId:req.user.shortId})
    await Post.updateOne({shortId},{
        $push:{ //push operator를 사용하여 하나씩 db에 추가함
            comments:{
                content,author,
            }
        }
    })
    res.json({result:'success'}) // api는 render하지 않고 json으로 응답
})


//댓글 목록 api
// find에 populate하지 않고 User(model)의 populate를 사용하는 방법도 가능
router.get('/posts/:shortId/commnets',(req,res,next)=>{
    const {shortId} = req.params;
    const post = await Post.findOne({shortId});

    await User.populate(post.comments,{
        path:'author'
    });

    res.json(post.commnets);
})