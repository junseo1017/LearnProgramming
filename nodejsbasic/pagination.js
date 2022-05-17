// pagination
// 데이터가 많아지면 한 페이지의 목록에 모든 데이터를 표현하기 어려움
// pagination은 데이터를 균일한 수로 나누어 페이지로 분리하는 것
// ex) 10개씩 나누어 1페이지는 1~10번까지, 2페이지엔 11~20번까지 보여주기
router.get(...=>{
    const page=Number(req.query.page||1)
    const perPage = Number(req.query.perPage||10)
})
// page = 현재 페이지
// perPage = 페이지 당 게시글 수
// /post?page=1&perPage=10일반적으로 url query를 사용해 전달
// query는 문자열로 전달되기 때문에 Number로 형변환이 필요함




// mongoose의 pagination
// mongodb의 limit과 skip을 사용하여 pagination 구현 가능
// limit 검색 결과 수 제한
// skip 검색 시 포함하지 않을 데이터 수
// pagination 시에는 데이터의 순서가 유지될 수 있도록 sort를 사용할 수 있도록 함
// 게시글 수 / 페이지 당 게시글 수 = 총 페이지 수
router.get(...=>{

    const total = await Post.countDocument({}); // 총 게시글 수를 카운트함
    const posts = await Post.find({}).sort({createdAt:-1}).skip(perPage*(page-1)).limit(perPage) // 몇 개의 게시글을 생략하고 검색한 뒤 데이터 생성 시간의 역순으로 정렬한 // 
    const totalPage = Math.ceil(total/perPage)
})


//pagination
mixin pagination(path)
p
    -for(let i=i;i<=totalPage;i++)
    a(href=`${path}?page=${i}&perPage=${perPage}`)
    if i == page
        b=i
    else
     = ii
    =" "

    ----
include pagination
tr
    td
        +pagination("/posts")


// PM2 Process Manager
// Node.js 작업을 관리해주는 Process Manager
// node 명령어로 실행 시 오류 발생이나 실행 상태 관리를 할 수 없음
// pm2는 작업 관리를 위한 다양한 유용한 기능을 제공해 줌

// 사용하는 이유
// 안정적인 프로세스 실행 - 오류발생 시 자동 재실행
// 빠른 개발환경 - 소스 코드 변경 시 자동 재실행
// 배포 시 편리한 관리 - pm2에 모든 프로세스를 한 번에 관리