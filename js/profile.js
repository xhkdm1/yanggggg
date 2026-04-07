emailjs.init('CuT36pWvON0drOFmg');

const form = document.querySelector('form');
const submitButton = document.querySelector('#sendEmail');
const dimOverlay = document.querySelector('#dimOverlay');

//방문자 수 표시 요소와 초기 방문자 수 설정
const countDisplay = document.querySelector("#visitor-count");
let visitorCount = 0;

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


  //"입력완료><" 버튼 누를 때마다 방문자 수 1씩 증가시키기
  visitorCount++; // 숫자 1 추가 (visitorCount = visitorCount + 1 과 동일)
  countDisplay.textContent = visitorCount.toLocaleString(); // 콤마 찍어서 화면에 덮어쓰기
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