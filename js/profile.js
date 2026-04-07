emailjs.init('CuT36pWvON0drOFmg');

const form = document.querySelector('form');
const submitButton = document.querySelector('#sendEmail');
const dimOverlay = document.querySelector('#dimOverlay');

// 1. HTML에서 하트 버튼과 숫자 도화지 리모컨 가져오기
const heartBtn = document.querySelector("#heart-btn");
const confessCountDisplay = document.querySelector("#confess-count");
// 2. 고백 횟수를 기억할 비밀 수첩 만들기 (0명부터 시작!)
let confessCount = 0;

// 이벤트 함수 연습용 요소들
const yuushiButton = document.querySelector('#yuushi_toggle_btn');
const yuushiImage = document.querySelector('.yuushi_photo');  

const sendEmail = () => {
  dimOverlay.classList.add('on');

  emailjs.sendForm('service_j44ao5m', 'template_v1zd1s2', form)
    .then(
      () => {
        dimOverlay.classList.remove('on');  // ← dim 꺼주기
        alert(`${form.from_name.value}님, 메일 전송에 성공했습니다 :)`);
        form.reset();
      },
      (error) => {
        dimOverlay.classList.remove('on');  // ← 실패해도 dim 꺼주기
        alert('메일 전송에 실패했습니다 :(');
        console.error('메일 전송 실패:', error);
      }
    );
};

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  sendEmail();
});

// 3. 하트 버튼에 클릭 감지기(알바생) 달아주기
heartBtn.addEventListener("click", () => {
  
  // 4. 하트를 누를 때마다 숫자 1 올리기
  confessCount++;
  
  // 5. 바뀐 숫자를 화면에 덮어쓰기
  confessCountDisplay.textContent = confessCount;

  // 6. (보너스 기능) 누를 때 하트 색깔을 빨간색으로 바꾸기!
  heartBtn.textContent = "❤️"; 
  
});

// 이벤트 함수 연습용
yuushiButton.addEventListener("click",( ) => {
  conosole.log('유우시 버튼이 클릭되었습니다. 유우시 사진으로 사람들을 행복하게 해주세요. 네 미소로 세상을 구할 수 있어..아디오스..');
  yuushiImage.classList.toggle('on');
  yuushiImage.classList.toggle('off');
  yuushiImage.classList.toggle;
}, false);

let greet = (name) => console.log(`안녕, ${name}님 반가워요!`);    //backtick을 이용하여 문자열과 변수를 함께 출력하는 방법

greet('케진');