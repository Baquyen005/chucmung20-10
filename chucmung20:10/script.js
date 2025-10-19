// --- Hiệu ứng từng chữ cái xuất hiện ---
const message = document.getElementById("message");
const text = message.textContent.trim();
message.textContent = "";

[...text].forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.classList.add("letter");
  span.style.animationDelay = `${index * 0.15}s`;
  message.appendChild(span);
});

// --- Hiệu ứng cánh hoa rơi ---
const petalTypes = ['petal1', 'petal2', 'petal3'];

function createPetal() {
  const petal = document.createElement('div');
  const type = petalTypes[Math.floor(Math.random() * petalTypes.length)];
  petal.classList.add('petal', type);
  petal.style.left = Math.random() * 100 + 'vw';
  petal.style.animationDuration = 5 + Math.random() * 6 + 's';
  petal.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 12000);
}

setInterval(createPetal, 150);
