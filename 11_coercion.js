/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적

let stringAge = age.toString();
console.log(typeof stringAge, stringAge);
// typeof, 타입, 값

/**
 * 위와 같이 32는 number타입이었는데
 * .toString()함수로 string타입으로 변환을 했음.
 */


// 암묵적

let test = age + '';
console.log(typeof test, test);

// 숫자 + 글자를 더하면 string값이 되어버림.

console.log('98' + 2);
console.log('98' * 2);
console.log('98' - 2);

console.log('------------');

/**
 * 명시적 변환 몇가지 더 배우기
 */

console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

/**
 * 명시적으로 string으로 바꿀때는
 * 일반적으로 .toString()을 사용하면 된다.
 */

// 숫자 타입으로 변환

console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');

/**
 * 정수는 parseInt
 * 실수는 parseFloat를 사용해야함.
 */

console.log('-------------');

/**
 * Boolean 타입으로의 변환
 * (실무에서 상당히 많이 씀.)
 */

// String값 안에 어떤 값이 있더라도 Boolean 기준으론
// 무조건 true 다. '' <- 이 상태는 false.


console.log(!!'sdfasffasfx');

console.log(!!'');

console.log(!!0);
// 0이라는 숫자는 false

console.log(!!'0');
// 0이라는 string은 true(string이라서.)

console.log(!!'false');
// false라도 spring으로 입력하면 true다.

console.log(!!false);
// false 값을 직접 입력하면 false가 나온다.

console.log(!!undefined);

console.log(!!null);

// undefined와 null값을 직접 입력하면 false가 나온다.

/**
 * 무언가 값이 없을 때, 숫자 0, 이런식일때
 * 불리안 기준으로 false를 반환한다.
 * 값이 있으면 대체로 true.
 */

console.log(!!{});
// 오브젝트는 불리안 값으로 변환했을때 무조건 true.

console.log(!![]);
// 어레이도 불리안 값으로 변환했을때 무조건 true.


/**
 * 1) 아무 글자도 없는 String
 * 2) 값이 없는 경우
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */