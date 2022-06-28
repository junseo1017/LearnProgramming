// Caching, Synchronization

// options
// cacheTime : 메모리에 얼마만큼 있을 건지 (default 5분)
// staleTime : 얼마의 시간이 흐른 후에 데이터를 stale 취급할 것인지 (default 0)

// refetchOnMount / refetchOnWindowFocus / refetchOnReconnect
// true면 Mount /window focus / reconnect 시점에 data가 stale이라고 판단되면 모두 refetch(모두 default true)

// query 상태흐름
// fetching > fresh(staleTime 만료되기 전까지) > stale(스크린에서 사용되는 동안 유지됨) > inaction(스크린에서 없어지면, cacheTime 만료되기 전까지 유지) > deleted(cacheTime 만료)

// stale까지는 refetch 이벤트가 발생하거나, Mount,window focus 등의 옵션에 따른 트리거 발생

// queryClient는 내부적으로 ContextAPI사용

/////-----------------------------/////////////

// 장점
// 서버상태 관리 용이(Redux,MobX보다) 직관적인 API호출
// API 처리에 관한 각종 인터페이스 및 옵션
// Client Store가 fe에서 필요한 전역 상태만 남아 Store답게 사용됨.
// devtool 제공으로 디버깅 원할
// cache 전략 필요할 떄 유용

// 고민점
// Component가 비대해짐(설계/분리 고민 필요)
// 난이도가 높아진 프로젝트 설계(component 유착 최소화 및 사용처 파악 필요)

// react query 도입 추천
// 전역상태가 api통신과 엮여있어 비대해진 store를 축소
// api 통신 관련 코드를 보다 간단하게 구현
// 데이터 caching 전략
