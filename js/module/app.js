//모듈
//이 문법 자체를 "모듈 시스템"이라고 부름 
import {add, subtract} from './math.js';    //math.js에서 add, subtract 함수를 가져옵니다(import).
import {multiply} from './math.js';

//import {add, subtract, multiply} from './math.js';   //한 줄로 여러 함수를 가져올 수도 있습니다.

//모듈 전체 가져오기
//import * as math from './math.js';

//이름 변경해서 가져오기
//import {add as sum} from './math.js';

console.log(add(2, 3));         //add 함수를 사용하여 2와 3을 더한 결과를 콘솔에 출력합니다.
console.log(subtract(5, 2));    
console.log(multiply(4, 6));