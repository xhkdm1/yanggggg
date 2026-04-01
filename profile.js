const form = document.querySelector('form');
const submitButton = document.querySelector('#sendEmail');
const dimOverlay = document.querySelector('#dimOverlay');

// ✨ HTML에서 만든 토스트 요소 가져오기
const toast = document.querySelector('#toast');

// ✨ 토스트창을 3초 동안 보여주는 함수
const showToast = (message) => {
  toast.textContent = message; // 전달받은 메시지로 글자 변경
  toast.classList.add('show'); // 짠! 하고 나타나게 함
  
  // 3초(3000ms) 뒤에 다시 숨기기
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
};

const sendEmail = () => {
  dimOverlay.classList.add('on');

  emailjs
    .sendForm('service_j44ao5m', 'template_hj2lofy', form, {
      publicKey: 'CuT36pWvON0drOFmg',
    })
    .then(
      () => {
        dimOverlay.classList.remove('on');
        // 🚨 투박한 alert 대신 예쁜 showToast 사용!
        showToast(`${form.from_name.value}님, 메일 전송에 성공했습니다 :)`);
        form.reset();
      },
      (error) => {
        dimOverlay.classList.remove('on');
        // 🚨 실패했을 때도 토스트로 띄워줌
        showToast(`${form.from_name.value}님, 메일 전송에 실패했습니다 :(`);
        console.error('메일 전송 실패:', error);
      },
    );
};

// 버튼 클릭 시 sendEmail 함수 호출
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); 
  sendEmail();
});