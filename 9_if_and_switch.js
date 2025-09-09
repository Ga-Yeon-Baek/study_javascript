/**
 * If and Switch
 */

let number = 5;

if (number % 2 === 0){
    console.log('number 변수는 짝수입니다.')
}else{
    console.log('number 변수는 홀수입니다.')
}

if (number % 2 === 0) {
    console.log('2의 배수입니다.');
} else if (number % 3 === 0) {
    console.log('3의 배수입니다.');
} else if (number % 4 === 0) {
    console.log('4의 배수입니다.');
} else if (number % 5 === 0) {
    console.log('5의 배수입니다.');
} else {
    console.log('2, 3, 4, 5의 배수가 아닙니다.')
}

// switch문

const englishDay = 'monday';

let koreanDay;

switch(englishDay){
    case 'monday':
        koreanDay = '월요일';
        break;
    case 'tuesday':
        koreanDay = '화요일';
        break;
    case 'wednesday':
        koreanDay = '수요일';
        break;
    case 'thursday' :
        koreanDay = '목요일';
        break;
    case 'friday':
        koreanDay = '금요일';
        break;
    default:
        koreanDay = '주말'
        break;
}

console.log(koreanDay);

//디폴트는 나머지값? 같은 개념으로 생각하면 됌.
// 디폴트값은 그냥 위처럼 입력 바로 가능.
// 27번 라인에 monday 입력말고 임의의 없는 날짜를 입력하면
// 디폴트에 입력한 주말이 출력됌.