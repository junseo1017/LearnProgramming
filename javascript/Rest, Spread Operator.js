// Rest Operator
//   - 함수의 인자, 배열, 객체 중 나머지 값을 묶어 사용하도록 한다.
//   - 함수의 인자 중 나머지를 가리킨다.
//   - 배열의 나머지 인자를 가리킨다.
//   - 객체의 나머지 필드를 가리킨다. 

// 인자 rest operater
function findMin(...rest){
  return rest.reduce((a,b)=> a<b?a:b)
}
findMin(7,6,5,4,3,1); // 1

//  객체 rest operater
const o = {
  name: 'junseo',
  age:28,
  address:'nangok',
  job:'software'
}
const {age,name,...rest} = o;

// 배열 rest operater
function sumArray(sum,arr){
  if(arr.length ===0) return sum;
  const [head, ...tail]=arr;
  return sumArray(sum+head,tail);
}
sumArray(0,[1,2,3,4,5]);

  // Spread Operator
  // - 묶인 배열 혹은 객체를 각각의 필드로 반환한다.
  // - 객체는 또 다른 객체로의 spread를 지원한다.
  // - 배열은 또 다른 배열의 인자, 함수의 인자로의 spread를 지원한다. 

  let o = {
    name:'js',
    age:27,
    address:'nan',
    job:'baek'
  }
  let o2={...o,name:'Tom',age:24}
  let o3={name:'tom',age:24,...o}

  function findMinInObject(o){
    return Math.min(...Object.values(o))
  }
  let o1 ={a:1}
  let o2 ={b:1}
  let o3 ={c:1}

  findMinInObject(mergeObjects(o1,o2,o3))