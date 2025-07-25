let highestZ = 30;

document.querySelectorAll('.paper').forEach(paper => {
  let holding = false;
  let startX = 0, startY = 0;
  let offsetX = 0, offsetY = 0;

  const startDrag = (x, y) => {
    holding = true;
    startX = x;
    startY = y;
    paper.style.zIndex = highestZ++;
  };

  const moveDrag = (x, y) => {
    if (!holding) return;
    offsetX += x - startX;
    offsetY += y - startY;
    startX = x;
    startY = y;
    paper.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  };

  const endDrag = () => {
    holding = false;
  };

  paper.addEventListener('mousedown', e => startDrag(e.clientX, e.clientY));
  document.addEventListener('mousemove', e => moveDrag(e.clientX, e.clientY));
  document.addEventListener('mouseup', endDrag);

  paper.addEventListener('touchstart', e => {
    const t = e.touches[0];
    startDrag(t.clientX, t.clientY);
  });
  document.addEventListener('touchmove', e => {
    const t = e.touches[0];
    moveDrag(t.clientX, t.clientY);
  });
  document.addEventListener('touchend', endDrag);
});

// Floating hearts
function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = Math.random() > 0.5 ? '💖' : '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 6) + 's';
  heart.style.fontSize = (1 + Math.random() * 2) + 'rem';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 10000);
}
setInterval(createHeart, 500);

// Floating texts
function createFloatingText() {
  const text = document.createElement('div');
  text.className = 'floating-text';
  text.textContent = 'I Love You Trina 💖';
  text.style.left = Math.random() * 100 + 'vw';
  text.style.animationDuration = (5 + Math.random() * 5) + 's';
  text.style.fontSize = (1 + Math.random() * 1.5) + 'rem';
  document.querySelector('.floating-texts').appendChild(text);
  setTimeout(() => text.remove(), 10000);
}
setInterval(createFloatingText, 1500);

// Flip toggle
document.querySelectorAll('.flip-paper').forEach(paper => {
  paper.addEventListener('click', () => {
    paper.classList.toggle('active');
  });
});
function createPetal() {
  const petal = document.createElement('div');
  petal.classList.add('petal');
  petal.style.left = Math.random() * window.innerWidth + 'px';
  petal.style.animationDuration = 4 + Math.random() * 3 + 's';
  document.body.appendChild(petal);

  setTimeout(() => {
    petal.remove();
  }, 7000);
}

setInterval(createPetal, 200);
