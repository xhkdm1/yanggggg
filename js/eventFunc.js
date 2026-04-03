const modalButton=document.querySelector('#modal_bt');
const catImage=document.querySelector('.cat');

modalButton.addEventListener("click",( ) => {    //이벤트가 발생했을 때 해야 하는 일
        console.log('버튼이 클릭되었습니다')    //콘솔창에 버튼이 클릭되었다는 메시지를 출력
        catImage.classList.toggle('on');    //무슨일을 하는지 작성
        catImage.classList.toggle('off');   //무슨일을 하는지 작성
        catImage.classList.toggle;
    }, false);  

/* A대상(누구에게).메서드("B트리거(무엇을 하는지)",( ) => {    
       c와 d를 작성하되, 이를 품는것이 함수임을 기억할 것 
       (함수 안에 -> 무슨 일을 하는지 작성)
    }, false); */
    
// 선언식 함수
function greet(name) {
    return console.log(`안녕, ${name}님 반가워요!`);    //backtick을 이용하여 문자열과 변수를 함께 출력하는 방법
}

//표현식 함수 -> 이름을 쓰지 않는 익명함수 
let greet2 = function(name2) {
    return console.log(`안녕, ${name2}님 반가워요!`);    //backtick을 이용하여 문자열과 변수를 함께 출력하는 방법
}

//화살표 함수 
let greet3 = (name3) => console.log(`안녕, ${name3}님 반가워요!`);    //backtick을 이용하여 문자열과 변수를 함께 출력하는 방법


//호출
/*greet('혜진');
greet2('혜진');*/   
greet3('혜진');