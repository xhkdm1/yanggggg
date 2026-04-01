emailjs.init('CuT36pWvON0drOFmg');

const form = document.querySelector('form');
const submitButton = document.querySelector('#sendEmail');
const dimOverlay = document.querySelector('#dimOverlay');

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