/**
 * Operators
 * 
 * 연산자
 */

/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);

console.log('-----------')

console.log(10 * (10+10));

/**
 * 증가와 감소
 */

let number = 1;

number ++;
console.log(number);


number --;
console.log(number);
console.log('----------')

/**
 * 연산자의 위치
 */

let result = 1;
console.log(result);

result = number ++;
console.log(result, number);
result = number --;
console.log(result, number);

result = ++ number;
console.log(result, number);
result = -- number;
console.log(result, number);

// 이렇게 앞에도 쓸 순 있지만 실전에선 절대 하지말기!

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 어떻게 될까?
 */

let sample = '99';
console.log(+sample);
console.log(typeof +sample);

console.log(sample);
console.log(typeof sample);

// 스트링에 넘버 값이 될 수 있는 값이 들어있으면 변환 가능.
// 원래 값이 바뀌진 않고 계산하는 줄에서만 변경 되는 것.

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = false;
console.log(+sample);
console.log(typeof +sample);

// 불리안 타입도 변환 가능.

sample = '안유진';
console.log(+sample);
// NaN -> Not a Number

sample = '99';
console.log(-sample);
console.log(typeof -sample);
// -붙이면 앞에 -붙이기도 가능. 다른 것들도 가능?

sample_1 = '2'
sample_2 = '3'

console.log(-sample_1 * +sample_2);

console.log('----------');

// 이런 식도 가능!!
// 윗줄에서 +가 없어져도 값은 같이 나온다.(생략 가능)
// 아마 같은 줄이라 같은 넘버 값으로 쳐 주는듯.


/**
 * 할당 연산자 (assignment operator)
 * (계산 후 값을 다시 저장한다는 뜻.)
 */

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);

/**
 * % <- 얘는 나머지 연산자. 나머지를 반환함.
 * & <- 얘는 비트AND 연산자(0과 1의 2진수).
 * AND 연산을 수행함.
 * 대응되는 두 bit가 모두 1일때만 결과가 1이다.
 * && <- 얘는 논리 AND 연산자.
 * 두 피연산자가 모두 참일 경우 참을 반환함.
 */



/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 === 5);
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

// 대체로 실무에선 === 세개를 쓰는게 맞고 바람직하다!

console.log(5 !== 5);
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');

console.log('-----------')
// 대체로 실무에서도 !== 이렇게도 많이 사용함!
// != 이건 지양하도록 하자!

/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);
console.log(100 <= 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */

console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
// true를 반환하면 왼쪽값을 출력, 반대는 오른쪽 값을 출력.
console.log('-----------')

/**
 * 논리 연산자
 * 
 * 1) && (and)
 * 2) || (or)
 */

// && 조건은 모두 true여야 ture를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('--------------')

// ||는 하나만 true 여도 true를 반환한다.
console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);

/**
 * 단축평가 (short circuti evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

// 실제로 실무에서 많이 씀! 그냥 외우기!

console.log('-----------')

 console.log(true || '아이브');
 console.log(false || '아이브');
 console.log(false && '아이브');
 console.log(true && '아이브');

 console.log(true && true && '아이브');
// true와 '아이브' 먼저 비교. 아이브가 우측 값.

 console.log(true && false && '아이브');
//  false와 '아이브' 먼저 비교. false가 왼쪽 값.


/**
 * 지수 연산자
 */

console.log(2 ** 3);
console.log(10 ** 3);


console.log('-----------')

/**
 * null 연산자
 */

let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);
// ??는 null이나 undifinde일때 값을 반환하는 명령어

name = name ?? '아이브';
console.log(name);
// 이후 콘솔로그 찍어도 언디파인드나 널값이 아니었기 때문에
// 새로 ??로 값을 부여해도 안 먹힘.

let name2;
name2 ??= '코드팩토리';
console.log(name2);
// 전에 배운 코드 줄여쓰기 응용. 261번 코드랑
// 사실상 같은 코드임.