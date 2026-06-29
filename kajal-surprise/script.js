const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseBox = document.getElementById('surpriseBox');

surpriseBtn.addEventListener('click', () => {
  surpriseBox.classList.toggle('hidden');

  if (surpriseBox.classList.contains('hidden')) {
    surpriseBtn.textContent = 'Open Surprise 💝';
  } else {
    surpriseBtn.textContent = 'Close Surprise 🌙';
    createHearts();
  }
});

function createHearts() {
  for (let i = 0; i < 12; i++) {
    const heart = document.createElement('span');
    heart.textContent = '💖';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 18 + 'px';
    heart.style.animation = 'rise 2.5s ease forwards';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2500);
  }
}

const style = document.createElement('style');
style.textContent = `
  @keyframes rise {
    to {
      transform: translateY(-110vh) rotate(360deg);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);
