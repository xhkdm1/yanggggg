const form = document.querySelector('form');
const submitButton = document.querySelector('#sendEmail');
const dimOverlay = document.querySelector('#dimOverlay');
const toast = document.querySelector('#toast');

// ✨ 예쁜 토스트 창을 띄우는 함수 (3초 뒤 사라짐)
const showToast = (message) => {
  toast.textContent = message;
  toast.classList.add('show');
  
  // 3초(3000ms) 뒤에 다시 숨기기
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

const sendEmail = () => {
  // 전송 시작: 화면을 어둡게 만듦
  dimOverlay.classList.add('on');

  // EmailJS로 폼 데이터 전송
  emailjs
    .sendForm('service_j44ao5m', 'template_v1zd1s2', form, {
      publicKey: 'CuT36pWvON0drOFmg', // 🚨 여기에 EmailJS에서 발급받은 Public Key를 입력하세요
    })
    .then(
      () => {
        // 성공 시: 오버레이 끄고, 성공 토스트 띄우고, 폼 리셋
        dimOverlay.classList.remove('on');
        showToast(`${form.from_name.value}님, 메일 전송에 성공했습니다 :)`);
        form.reset();
      },
      (error) => {
        // 실패 시: 오버레이 끄고, 실패 토스트 띄우기
        dimOverlay.classList.remove('on');
        showToast(`메일 전송에 실패했습니다 :(`);
        console.error('메일 전송 실패:', error);
      },
    );
};

// 버튼 클릭 시 새로고침을 막고 sendEmail 함수 실행
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // 🚨 제일 중요: 폼 제출 시 페이지 새로고침 방지
  sendEmail();
});