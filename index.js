const msg1 = document.getElementById('timer1');

let min = 60;
let sec = 0;

setInterval(() => {
  if (sec == 0) {
    min--;
    sec = 60;
  }
  sec--;

  msg1.textContent = `${min}:${sec}`;
  if (min <= 30) {
    msg1.textContent = `лише ${min}:${sec}`;
    msg1.style.color = 'red';
  }
}, 1000);

// =====================================2====================================

const btn = document.getElementById('btn');
const msg2 = document.getElementById('timer2');
const block = document.getElementById('block');

function anim() {
  block.style.width = '200px';
  setTimeout(() => {
    block.style.width = '100px';
  }, 1000);
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  btn.disabled = true;

  let sec = 14;
  let mili = 0;
  let animationInterval;

  const timerInterval = setInterval(() => {
    if (mili === 0) {
      sec--;
      mili = 100;
    }
    mili--;
    msg2.textContent = `${sec}:${mili.toString().padStart(2, '0')}`;

    if (sec <= 10 && !animationInterval) {
      animationInterval = setInterval(() => {
        anim();
      }, 2000);
    }

    if (sec <= 0 && mili <= 0) {
      clearInterval(timerInterval);
      if (animationInterval) clearInterval(animationInterval);
      btn.disabled = false;
    }
  }, 10);
});
