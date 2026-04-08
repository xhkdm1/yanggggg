/*emailjs.init('CuT36pWvON0drOFmg');

const form = document.querySelector('form');
const submitButton = document.querySelector('#sendEmail');
const dimOverlay = document.querySelector('#dimOverlay');

// 1. 모든 하트 버튼들(배열 형태)과 숫자 도화지 가져오기
const hearts = document.querySelectorAll(".heart-trigger");
const confessCountDisplay = document.querySelector("#confess-count");

// 2. 고백 횟수 수첩 (0부터 시작)
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

hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    
    // 4. 어떤 하트를 누르든 숫자 1 증가!
    confessCount++;
    
    // 5. 화면 갱신
    confessCountDisplay.textContent = confessCount.toLocaleString();
    
    // 6. 누른 그 하트만 빨간 하트로 변신시키기
    heart.textContent = "❤️";
    
    // 7. (보너스) 한 번 누르면 더 이상 못 누르게 하거나 효과 주기
    heart.style.pointerEvents = "none"; // 한 하트는 한 번만 고백 가능!
  });
  
});

// 이벤트 함수 연습용
yuushiButton.addEventListener("click",( ) => {
  console.log('유우시 버튼이 클릭되었습니다. 유우시 사진으로 사람들을 행복하게 해주세요. 네 미소로 세상을 구할 수 있어..아디오스..');
  yuushiImage.classList.toggle('on');
  yuushiImage.classList.toggle('off');
}, false);

let greet = (name) => console.log(`안녕, ${name}님 반가워요!`);    //backtick을 이용하여 문자열과 변수를 함께 출력하는 방법

greet('케진'); */




// ========================================================
// 💌 1순위 실행: 나한테 고백한 사람 수 (버튼 클릭)
// ========================================================
const confessBtn = document.querySelector("#confess-area"); 
const confessCountDisplay = document.querySelector("#confess-count"); 
let confessCount = 0; 

confessBtn.addEventListener("click", () => {
  confessCount++; // 숫자 1 증가
  confessCountDisplay.textContent = confessCount.toLocaleString(); // 화면 갱신
  console.log("하트 눌림! 현재 숫자:", confessCount); // F12에서 확인용
});
// ======================================================== 

emailjs.init('CuT36pWvON0drOFmg');

const form = document.querySelector('form');
const submitButton = document.querySelector('#sendEmail');
const dimOverlay = document.querySelector('#dimOverlay');


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

// ========================================================
// 💌 고백 버튼 클릭 이벤트
// ========================================================
confessBtn.addEventListener("click", () => {
  confessCount++; // 숫자 1 증가
  confessCountDisplay.textContent = confessCount.toLocaleString(); // 화면 갱신
  console.log("하트 눌림! 현재 숫자:", confessCount);
}); 


// 이벤트 함수 연습용 (오타 수정 완료!)
yuushiButton.addEventListener("click",( ) => {
  console.log('유우시 버튼이 클릭되었습니다. 유우시 사진으로 사람들을 행복하게 해주세요. 네 미소로 세상을 구할 수 있어..아디오스..');
  yuushiImage.classList.toggle('on');
  yuushiImage.classList.toggle('off');
}, false);

let greet = (name) => console.log(`안녕, ${name}님 반가워요!`);    //backtick을 이용하여 문자열과 변수를 함께 출력하는 방법

greet('케진');