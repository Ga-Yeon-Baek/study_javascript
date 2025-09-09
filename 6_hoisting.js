/**
 * Hoisting
 */

console.log('Hello');
console.log('World');
console.log('-----------');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);


// 윗 코드와 같은 메커니즘.
// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

/**
 * Hoisting 이란 무엇인가?
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼
 * 느껴지는 현상을 이야기한다.
 */

// let 과 const 도 Hoisting이 된다!
// <- 인터뷰에서 많이 나오는 질문이니 알아두기!