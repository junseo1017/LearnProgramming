// partial<T>
// 프로퍼티를 선택적으로 만드는 타입을 구성
// 주어진 타입의 모든 하위 타입 집합을 나타내는 타입을 반환함

interface Todo {
  title: string;
  description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return {...todo, ...fieldsToUpdate};
}

const todo1 = {
  title: 'room',
  description: 'clean room',
};

const todo2 = updateTodo(todo1, {
  description: '',
});

// Readonly<T>
// 프로퍼티를 읽기 전용(readonly)으로 설정한 타입을 구성한다.
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: 'good',
};

todo.title = 'nice'; //result > error

// Record<T>
// 프로퍼티의 집합 K로 타입을 구성한다.
// 타입의 프로퍼티들을 다른 타입에 매핑시키는데 사용함.
interface Pageinfo {
  title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
  about: {title: 'about'},
  contact: {title: 'contact'},
  home: {subTitle: 'home'}, // error PageInfo에는 subtitle이라는 property가 없기 때문에 error
  main: {title: 'home'}, // error Page에는 main이라는 변수가 없기 때문에 error
};

// Pick<T,K>
// 프로퍼티 K의 집합을 선택해 타입을 구성
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Pick<Todo, 'title' | 'completed'>; // todopreview는 todo interface의 title과 completed만 선언했음
const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
  description: 'description',
};

// Omit<T,K>
// 모든 프로퍼티를 선택한 다음 K를 제거한 타입을 구성함.
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type TodoPreview = Omit<Todo, 'description'>;
// interface의 property에서 description을 제거한 타입을 구성
const todo: TodoPreview = {
  title: 'Cleanroom',
  completed: false,
  description: 'description',
};

// Exclude<T,U>
// T에서 U에 할당할 수 있는 모든 속성을 제외한 타입을 구성
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
// 'b'|'c'
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
// 'c'
type T2 = Exclude<string | number | (() => void), Function>; // string|number

// Extract<T,U>
// T에서 U에 할당할 수 있는 모든 속성을 추출하여 타입을 구성
type T0 = Extract<'a' | 'b' | 'c', 'a' | 'f'>; // "a"
type T1 = Extract<string | number | (() => void), Function>; // Function 타입을 추출하겠다는 의미 ()=> void

// NonNullable<T>
// null과 undefined를 제외한 타입.
type T0 = NonNullable<string | number | undefined>; //string|number

// Parameters<T>
// '함수 타입 T'의 매개변수 타입들의 '튜플 타입'을 구성
declare function f1(arg: {a: number; b: string}): void;
type T0 = Parameters<typeof f1>; // f1 function의 매개변수를 출력 [{a:number,b:string}]
type T1 = Parameters<() => string>; // 인자로 아무것도 선언하지 않았기 때문에 빈 배열 []
type t2 = Parameters<(s: string) => void>; // 인자 타입을 string으로 선언했기 때문에 [string]

// ConstructorParameters<T>
// 생성자 함수 타입의 모든 매개변수 타입을 추출
// 모든 매개변수 타입을 가지는 튜플 타입을 생성함.

// ReturnType<T>
// 함수T의 반환 타입으로 구성된 타입을 생성함.
type T0 = ReturnType<() => string>; // string
type T1 = ReturnType<(s: string) => void>; // void
type T2 = ReturnType<<T extends U, U extends number[]>() => T>; // number[]

// Required<T>
// T의 모든 프로퍼티가 필수로 설정된 타입을 구성
interface Props {
  a?: number;
  b?: string;
}
const obj: Props = {a: 5};
const obj2: Required<Props> = {a: 5};
