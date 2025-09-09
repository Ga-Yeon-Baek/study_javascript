/***
 * Array Functions
 */

let iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

// push()
iveMembers.push('코드팩토리');
console.log(iveMembers);
//push()함수는 Array맨끝에 항목을 추가한다.

console.log('----------');

// pop()
console.log(iveMembers.pop());
console.log(iveMembers);
/**pop()함수는 마지막 엘리멘트를 삭제하고 
 * 그 값을 반환 해 준다.*/

console.log('----------');

// shift()

console.log(iveMembers.shift());
console.log(iveMembers);
/**
 * pop() 함수와 똑같지만 shift는
 * 첫번째 엘리멘트를 삭제하고 그 값을 반환 해 준다.
 */

// unshift()
console.log(iveMembers.unshift('안유진'));
console.log(iveMembers);
/**
 * unshift()는 push()와 같지만,
 * 첫번째에다가 값을 넣게 된다.
 * 그리고 새로 변경된 Array의 길이를 반환해준다.
 */

console.log('--------------');

// splice
console.log(iveMembers.splice(0, 3))
console.log(iveMembers);

/**
 * splice(어디부터 삭제를 할지, 몇 개를 삭제할지)
 * 두 개의 값을 쓰는게 권장 되는 함수.
 * 삭제 후 Array로 만들어서 반환 해 줌.
 */

/**
 * 다만 요즘 트렌드는 한번 선언한 변수는
 * 변경하지 않는다는 개념으로 프로그래밍이 좋다.
 */

iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
]

console.log(iveMembers);


// concat()

console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

/**
 * concat() 함수는 새로운 Array를 만들어서
 * 반환 해 주기 때문에(아예 다른 메모리 공간에 저장된
 * 값이 반환이 되는 것이기 때문에) 원래 Array를
 * 변경하지 않는다.
 */

// slice()
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

/**
 * splice()의 Array가 변경되지 않는 버전.
 * slice(어떤 인덱스부터 삭제할지, 몇 번 인덱스까지 삭제할지 +1)
 */



// 여기서부턴 압도적으로 많이 쓰는 함수들!

// join()
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));
// 모든 값들이 ,로 나눠져서 string으로 합쳐진다.
// ()안에 아규먼트도 넣을 수 있다.


// sort()
// 오름차순 정렬
iveMembers.sort();
console.log(iveMembers);

/**
 * sort()의 또다른 사용
 * 
 * a, b를 비교했을때
 * 
 * 1) a를 b 보다 나중에 정렬하려면 (뒤에 두려면)
 * 0보다 큰 숫자를 반환
 * 
 * 2) a를 b 보다 먼저 정렬하려면 (앞에 두려면)
 * 0보다 작은 숫자를 반환
 * 
 * 3) 원래 순서를 그대로 두려면 0을 반환
 */

let numbers = [
    1,
    9,
    7,
    5,
    3,
];

numbers.sort((a, b)=>{
    return a > b ? 1 : -1;
});
console.log(numbers);
/**
 * 위 예제에선 a자리에 1이 들어가고 b에 3이 들어감.
 * 순서대로. 1을 3보다 앞에 정렬하고 나머지는 '순서대로
 * 정렬' 하게 됌.
 */

numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);
//이런식으로 sort()내림차순도 가능!

// reverse()
// 내림차순 정렬
console.log(iveMembers.reverse());

// map()
console.log('--------------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '안유진'){
        return `아이브: ${x}`;
    }else{
        return x;
    }
}));
console.log(iveMembers);

// filter()
numbers = [1, 8, 7, 6, 3];

console.log(numbers.filter((x => x % 2 === 0)));
/**
 * true를 반환하면 keep하게되고
 * false를 반환하면 keep하지 않게 된다.
 * 위 예제처럼 사용도 가능!
 */

// fide()

console.log(numbers.find((x) => x % 2 === 0));

/**
 * filter()와 비슷하지만 Array 아님.
 * 맨 첫 숫자만 반환 해 줌. 
 */

// findIndex()

console.log(numbers.findIndex((x) => x % 2 === 0));
/**
 * 위 예제에서 8에 해당하는 인덱스 값은 1이라서
 * 1이 반환 됌.
 */

// reduce()

console.log(numbers.reduce((p, n) => p + n, 0));

/**
 * reduce() 퀴즈
 * reduce() 함수를 사용해서 iveMembers 변수에 있는
 * 모든 스트링 값들의 길이를 더해서 반환하라.
 * 참고로 string의 길이는 .length를 이용해서 구할 수 있다.
 */

console.log(iveMembers.reduce((p, n) => p + n.length, 0));