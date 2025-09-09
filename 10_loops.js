/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

// (기준 잡을 변수;조건; for loop가 한번씩 될 때 마다 어떤 행동을 취할것인지)
// i 는 index의 약자. 
for(let i = 0; i < 10; i ++){
    console.log(i);
}

console.log('--------')
for(let i = 10; i > 0; i--){
    console.log(i);
}

// Loop 중복으로 겹쳐서 쓰기 응용
for(let i =0; i <3; i++){
    for(let j = 3; j > 0; j--){
        console.log(i, j);
    }
}

// Loop는 오타, 버그나면 더 복잡해지고 난잡해지니까
// 항상 마지막에 더 특히 확인하기!

// 하나가 정렬이 이상한 이유는 소괄호 안에 있어서인듯.
//  -> 속하는 개념이니까.



// 퀴즈. *을 이용해서 6x6의 정사각형을 출력해라.
let square = '';
let side = 6;

for(let i = 0; i < side; i++){
    for(let j = 0; j < side; j++){
        square += '*';
    }
    square += '\n';
}

console.log(square);

/**
 * for...in
 * (Looping을 할때마다 key 값을 받을 수 있음.)
 */

const yuJin = {
    name : '안유진',
    year : 2003,
    group: '아이브',
}

console.log('-----------')

for(let key in yuJin){
    console.log(key);
}

// object를 for...in을 사용하면 key값을 받는다.

const iveMemverArray = ['안유진', '가을', '레이', '장원영', '리즈', '이서'];

console.log('---------------');
for(let key in iveMemverArray){
    console.log(key);
    console.log(`${key}:${iveMemverArray[key]}`)
}

// Array(리스트)에서 for...in을 사용하면 index를 받는다.
// 71번 라인 코드처럼 작성하면 직접적으로 인덱스 값을 가져올 수 있다.

/**
 * for...of
 */

for(let value of iveMemverArray){
    console.log(value);
}

// for...in 은 index 값 가져올 때.
// for...of 는 value 값 가져올 때.


/**
 * While
 */

let number = 0;

while(number < 10){
    number ++;
}

console.log(number);

/**
 * console.log에서 10이 나오는 이유는
 * 95번 라인에서 9는 10보다 작으니까 true가 되고,
 * 다음으로 96라인으로 넘어가서 number에 1이 더해져서
 * 최종적으로 console.log에 10이 찍히게 되는 것.
 * while문은 조건이 false가 되는 순간 Loop이 끝남.
 */


/**
 * do...while
 */

// do...while은 실무에서 거의 쓰지 않는다. 바람직하지 않음.
number = 0;

do {
    number++;
} while (number < 10);

console.log(number);

/**
 * while - 조건 파악 후 바디를 실행 시킴.
 * do...while - 바디를 먼저 실행시키고 조건에 해당되는지를 판단함.
 */


/**
 * break
 */

console.log('----------')

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('-----------');
number = 0;

while(number < 10){
    if(number === 5){
        break;
    }
    number ++;
    console.log(number);
}

/**
 * continue
 * (i=설정 값과 같으면 현재 진행하고 있는 이 Loop만
 * 종료하고 다음 Loop으로 진행하는 기능.)
 */

console.log('--------------');

for(let i = 0; i < 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}

console.log('--------------');

number = 0;

while(number < 10){
    number ++;

    if(number === 5){
        continue;
    }
    console.log(number);
}