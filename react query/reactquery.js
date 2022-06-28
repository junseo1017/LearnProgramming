// Client State와 Server State

// Queries
// GET으로 받아오는 대부분의 API에 사용
// CRUD에서 Reading에서만 사용 ( 데이터 Fetching용)

import {useQuery} from 'react-query';
function App() {
  const info = useQuery('todos', fetchTodoList);
  // 'todos'는 query key : query key에 따라 query caching을 관리함 // key를 기준으로 value를 구분함.
  // fetchTodoList는 query function : promise를 반환하는 함수 -> resolve 또는 throw error
  // useQuery의 반환값 : data(resolve된 데이터), error(에러가 발생했을 때 반환되는 객체),
  // isFetching(Request가 in-flight 중일 때 true), status, isLoading, isSuccess, isLading 등 모두 query의 상태
  // refetch(해당 query refetch하는 함수 제공), remove(해당 query chahe에서 지우는 함수 제공)
}
// query key는 string과 array 형태로도 쓸 수 있음
useQuery(['todo', 5, {preview: true}], fetchTodoList);

// config option 예제 (options에 있음)
useQuery('todos', fetchTodoList, options);
// option에 들어가는 것.
// onSuccess, onError,onSettled:query fetching  성공/실패/완료 시 실행할 Side Effect 정의
// enabled: 자동으로 query를 실행시킬지 말지 여부
// retry : query 동작 실패 시, 자동으로 retry 할지 결정하는 옵션
// select :  성공 시 가져온 data를 가공해서 전달
// keepPreviousData : 새롭게 fetching 시 이전 데이터 유지 여부
// refetchInterval : 주기적으로 refetch 할지 결정하는 옵션

// query 여러개 동시에 쓸 떄
// 자동으로 비동기 실행해준다(동적으로 실행하려면 설정필요)
function Praction() {
  const todo = useQuery('todos', fetchTodoList);
  const project = useQuery('project', fetchProject);
  const food = useQuery('food', fetchFood);
}

// Mutations
// 데이터 updating 시 사용 (데이터 생성/수정/삭제)
// query key넣으면 devtools에서 확인할 수 있음.
const mutation = useMutation((newTodo) => {
  // 반환값 : mutata(mutation을 실행하는 함수), mutateAsync(mutate와 비슷 promise를 반환), reset(mutation 내부 상태 clean), 이외 useQuery와 비슷
  // mutation은 자동으로 실행되지 않음. mutate함수와 비동기 함수인 mutateAsync로 실행해야 함.
  return axios.post('/todos', newTodo);
});

// Mutation option
const mutationOp = useMutation(mutationFn, options);
// onMutate : Mutation 동작 전 먼저 동작하는 함수, Optimistic update 적용할 때 유용

// Query Invalidation
// queryClient를 통해 invalidate 메소드를 호출 (invalidate내부의 캐시 clean 후 refetch)
queryClient.invalidateQueries(); // 캐시 내의 모든 쿼리 무효화
queryClient.invalidateQueries('todos'); // 'todos'로 시작하는 모든 쿼리 무효화
// 해당 키를 가진 query는 stale되고, 현재 rendering 되고 있는 query들은 백그라운드에서 refetch 됨.
