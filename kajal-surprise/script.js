const surpriseBtn = document.getElementById('surpriseBtn');
const surpriseBox = document.getElementById('surpriseBox');

const careLines = [
  'Kajal, main tumhari baat dhyan se sununga.',
  'Main tumhari feelings ki respect karunga.',
  'Agar meri wajah se tumhe bura laga ho, I am sorry.',
  'Main gusse se zyada patience choose karunga.',
  'Main words se zyada actions se better banna chahta hoon.',
  'Tum hamesha respect, peace aur care deserve karti ho.'
];

surpriseBtn.addEventListener('click', () => {
  surpriseBox.classList.toggle('hidden');

  if (surpriseBox.classList.contains('hidden')) {
    surpriseBtn.textContent = 'Open Surprise 💝';
  } else {
    surpriseBtn.textContent = 'Close Surprise 🌙';
    addHinglishMessage();
    createHearts();
  }
});

function addHinglishMessage() {
  let messageBox = document.getElementById('hinglishMessage');

  if (!messageBox) {
    messageBox = document.createElement('div');
    messageBox.id = 'hinglishMessage';
    messageBox.className = 'hinglish-message';
    surpriseBox.appendChild(messageBox);
  }

  messageBox.innerHTML = `
    <h3>Ek honest baat, Kajal 🤍</h3>
    <p>${careLines[0]}</p>
    <p>${careLines[1]}</p>
    <p>${careLines[2]}</p>
    <p>${careLines[3]}</p>
    <p>${careLines[4]}</p>
    <p class="promise-line">${careLines[5]}</p>
  `;
}

function createHearts() {
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement('span');
    heart.textContent = ['💖', '🌸', '✨', '🤍'][Math.floor(Math.random() * 4)];
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100vh';
    heart.style.fontSize = Math.random() * 20 + 18 + 'px';
    heart.style.animation = 'rise 2.8s ease forwards';
    heart.style.pointerEvents = 'none';
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2800);
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

  .hinglish-message {
    margin-top: 18px;
    padding: 18px;
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.75);
    text-align: left;
    line-height: 1.55;
    animation: messageIn 0.6s ease;
  }

  .hinglish-message h3 {
    color: #be185d;
    margin-bottom: 10px;
    text-align: center;
  }

  .hinglish-message p {
    margin: 8px 0;
    color: #444;
  }

  .promise-line {
    font-weight: bold;
    color: #be185d !important;
    text-align: center;
  }

  @keyframes messageIn {
    from {
      opacity: 0;
      transform: translateY(12px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

console.log('For Kajal: Respect, patience, care, and honest efforts.');
