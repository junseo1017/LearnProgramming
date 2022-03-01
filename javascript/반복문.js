// 반복하는 동작을 처리함.
while (조건식)
 동작문;

 while(조건식){
  동작문1;
  동작문2;
  동작문3;
 }
// while 문은 조건식이 true인 동안 반복해서 동작문을 실행함. 동작문이 하나 이상인 경우에는 중괄호로 묶어서 사용.
// 아래와 같은 무한반복문 주의하면서 작성
while (true){
    console.log('hello, while!');
}
// 100번만 하고 중지시키기 위해선 변수를 선언해야 함. 보통 변수의 시작은 0부터 시작해야 함. 프로그래밍은 숫자를 0부터 세기 때문에.
let i = 0;
while (i <= 100){
    console.log('hello,world');
    i += 1; // 혹은 i++ 혹은 i = i + 1
}

// for문의 소괄호에는 세 가지 요소가 들어감. 시작(식과 변수 선언)과 조건식, 종료식이다. 
// 조건식과 동작문은 while문과 같으며, 동작문이 여러 개인 경우 중괄호로 묶을 수 있음.
for (시작; 조건식; 종료식)
동작문;

// 동작문의 실행 순서는 시작 > 조건식 > 동작문 > 종료식이고
// 조건식 > 동작문 > 종료식이 반복된다.
// while에서는 흩어져 있는 요소들이 for에는 모아져 있어서 보기 편할 수 있다. 
for (let i =0; i<100; i++){
    console.log('hello world');
}

// for문의 시작, 조건식, 종료식은 생략할 수 있음. 
for (;;){
} // >> 출력 무한반복

//1부터 100까지 출력하는 코드를 for문으로 작성
for (let i=0; i<100; i = i+1){
    console.log(i+1);
}

// break 문은 반복문을 중간에 멈춰야 하는 명령어다. 반복문으로 값을 찾다가 원하는 값을 찾으면 반복문을 멈춰야 함.
// 그렇지 않으면 반복문이 실행되느라 다음 코드를 실행할 수 없고, 찾은 값을 사용할 수 없음. 이 때 break를 사용
let i = 0;
while (true){
    if (i === 5) break;
    i++;
}
console.log(i);


// continue 문은 반복문이 특정 조건에서 실행되기를 원할 때 코드 실행을 건너뛸 수 있게 해주는 명령어이다. continue 이후의 코드를 생략해줌.
// 아래와 같이 입력하면 짝수일 경우에 continue; 이후의 코드는 생략하게 된다. 
let i = 0;
    while (i<10){
        i++;
        if(i % 2 === 0){
            continue;
        }
        console.log(i);
    }
// 무한반복문을 표현할 때는 보통 while문을 더 많이 사용함. while문에서 좀 더 간결하게 표현 가능.


// 중첩 반복문, 반복문안에 반복문인 경우 반복문이 중첩됐다고 표현함.
// 안쪽에 있는 반복문이 조건식을 만족할 때까지 실행되고 만족하지 않을 경우, 바깥쪽의 반복문이 실행된다. 바깥쪽의 반복문이 한 번 실행되면, 안쪽에 있는 반복문을 다시 실행시키기 때문에
// 출력은 0, 0~9 / 1, 0~9 ~ 9, 9~9 까지 순차적으로 실행된다
for (let i = 0; i<10;i++){
    for (let j = 0; j<10; j++){
        console.log(i,j);
    }
}

// 실무에서는 대부분 이중 중첩이나, 삼중 중첩 반복문만 사용함.
for (let i = 0;i < 5; i++){
    if (i % 2 === 0) continue;
    for (let j = 0; j < 5; j++) {
        if( j % 2 === 0) continue;
        for (let k = 0; k < 5; k++){
            if(k % 2 === 0) continue;
        }
    }
}

// 구구단을 출력하되, 결과에 짝수가 하나도 나오지 않게. continue 사용.
for (let i = 0; i<=9; i++){
    if (i % 2 === 0) continue;
    for (let j = 0; j<=9; j++){
        if (j % 2 === 0) continue;
        console.log(i*j);
    }
}

for (let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        if (i % 2 ===0 || j % 2 === 0) continue;
        console.log(i, '*', j, '=', i*j);
    }
}

// 별 순서대로 5개까지 찍기
for (let a = 0; a < 1; a++){
    console.log('*');
    for(let b = 0; b < 1; b++){
        console.log('**');
        for(let c = 0; c < 1; c++){
            console.log('***');
            for(let d = 0; d < 1; d++){
                console.log('****');
                for(let e = 0; e < 1; e++){
                    console.log('*****');
                }
            }
        }
    }
}

for (let i=0;i<5;i=i+1){
    console.log('*'.repeat(i-4));
}

//13579

for (let i=0;i<10;i++){
    if(i % 2 ===0) continue;
    console.log('*'.repeat(i));
}

for (let i=0;i<10;i++){
    if(i % 2 ===0) continue;
    console.log('*'.repeat(10-i));
}

//54321 앞쪽에 공백

for(let i = 0; i<5; i++)
console.log(' '.repeat(i),'*'.repeat(5-i));
