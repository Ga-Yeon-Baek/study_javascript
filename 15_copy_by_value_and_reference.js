/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reperence다.
 * 
 * 오브젝트를 빼고 생성되는 모든 데이터 타입들은
 * 모두 primitive 값들이다.
 * (function, Array까지 포함. 세가지 빼고 다.)
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('-----------------')
console.log(original);
console.log(clone);