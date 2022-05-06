// process 현재 실행중인 프로세스에 대한 정보를 담고 있음.
// 명령어 node 입력 후 process
// process.version
// process.arch : 프로세서 아키텍쳐 정보
// process.platform :운영체제 플랫폼 정보
// process.pid : 프로세스 아이디, 프로세스 여러개 가질 때 구분 가능
// process.uptime : 프로세스가 시작된 후 흐른 시간 (단위 : 초)
// process.execPath : 노드의 경로
// process.cwd() : 노드 명령어를 어디서 실행했는지 확인
// process.cpuUsage : cpu 사용량

// process.env : 시스템 환경 변수들이 들어있는 객체
// 비밀키(데이터베이스 비밀번호, 서드파티 앱 키)를 보관하는 용도로도 쓰임
// 환경 변수는 process.env로 접근 가능

// process.nextTick() : 이벤트 루프가 다른 콜백 함수들보다 nextTick의 콜백 함수를 우선적으로 처리함.
// 너무 남용하면 다른 콜백 함수들 실행이 늦어짐
// 비슷한 경우로 promise가 있음

// process.exit(0) : 서버를 끄고 싶을 때.
// process.exit(1) : 비정상 종료
