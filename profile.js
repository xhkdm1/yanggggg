const form = document.querySelector('form');
const submitButton = document.querySelector('#sendEmail');
const dimOverlay = document.querySelector('#dimOverlay');

const sendEmail = () => {
  // 스피너와 dim 화면 표시
  dimOverlay.classList.add('on');

  emailjs
    .sendForm('service_j44ao5m', 'template_v1zd1s2', form, {
      publicKey: 'CuT36pWvON0drOFmg', // 💡 주석(//) 지우기!
    })
    .then(
      () => {
        // 스피너와 dim 화면 숨기기
        dimOverlay.classList.remove('on');
        alert(`${form.from_name.value}님, 메일 전송에 성공했습니다 :)`);
        // 폼 리셋
        form.reset();
      },
      (error) => {
        // 스피너와 dim 화면 숨기기
        dimOverlay.classList.remove('on');
        alert(`${form.from_name.value}님, 메일 전송에 실패했습니다 :(`);
        console.error('메일 전송 실패:', error);
      },
    );
};

// 💡 버튼 클릭 시 새로고침 방지 코드 추가
submitButton.addEventListener('click', (event) => {
  event.preventDefault(); // 폼이 제출되면서 화면이 새로고침되는 것을 꽉 막아줌!
  sendEmail();
});