function calculate() {
    console.log( (3 * 10 / 2 % 3).toString());
}

// calculate();

function calculate(number){
    console.log((number * 10 / 2 % 3).toString());
}

calculate(4);

/**
 * 함수에서 입력받는 값에 대한 정의를
 * Parameter라고 한다.(위 함수에선 number)
 * 
 * 실제 입력하는 값은 argument 라고 한다.
 * (위 함수에선 calculate)
 */

// 여러 개의 파라미터를 사용하는 방법

function multiply(x, y){
    console.log(x * y);
}

multiply(2, 4);

/**
 * 순서대로 컴마를 기준으로 여러개의 파라미터들을
 * 받을 수 있음.
 */

// 디폴트 파라미터

function multiply(x, y = 10){
    console.log(x * y);
}
multiply(2, 4);
multiply(2);


/**
 * 반환 받기
 * return 받기
 * (결과 값을 함수 외부에서 반환 받고 싶을 때 씀.)
 */
console.log('-------------');

function multiply(x, y){
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

/**
 * Arrow 함수
 */

/**
 * const multiply = (파라미터) => {
 *      함수 바디
 * }
 */

const multiply2 = (x, y) => {
    return x * y
}
console.log(multiply2(3, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4, 5));

/**
 * Arrow 함수를 사용하면 굳이 70번 라인 코드처럼
 * 작성하지 않아도 75번 라인 코드처럼 요약함으로써
 * 간결하게 작성 가능하다.
 */

const multiply4 = x => x * 2;
console.log(multiply4(2));

/**
 * 파라미터가 하나일때는 파라미터 괄호마저도 삭제 가능.
 */

const multiply5 = x => y => z => `x: ${x} y: ${y} z: ${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x){
    return function(y){
        return function(z){
            return `x: ${x} y: ${y} z: ${z}`
        }
    }
}
console.log(multiply6(3)(4)(5));

/**
 * 91번 라인 코드와 94번 라인 코드는 결과적으로
 * 같은 코드임. 91번 라인 코드가 간결해서
 * 더 좋은 코드. 위는 Arrow 함수, 밑은 일반함수.
 */

const multiplyTwo = function(x, y){
    return x * y;
}
console.log(multiplyTwo(4, 5));

/**
 * 위와 같이 Arrow 함수에서 했던 것처럼
 * 변수 선언 하듯이 일반함수에서도 가능하다.
 */


const multiplyThree = function(x, y, z){
    console.log(arguments);
    return x * y * z;
}

console.log('------------');
console.log(multiplyThree(4, 5, 6));


// immediately invoked function
// 즉시실행 함수

(function(x, y){
    console.log(x * y);
})(4, 5)

console.log(typeof multiply);
console.log(multiply instanceof Object);

/**
 * instanceof 키워드
 * Ex) console.log(multiply instanceof Object);
 * -> multiply 함수가 Object인가? 를 식별 할 때.
 * 
 * -> 쉽게 생각하면 좌측에 있는게 우측에 있는 것과
 * 같은 타입인지를 질문하는 키워드다 정도만 알고있기. 
 */