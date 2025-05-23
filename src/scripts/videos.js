const buttons = document.querySelectorAll('.tab-button');
const videoContainers = document.querySelectorAll('.video-container');
const status = document.querySelector('.score-status.live');

function switchTab(tab) {
  buttons.forEach((btn) => btn.classList.remove('active'));
  videoContainers.forEach((vc) => (vc.style.display = 'none'));
  status.classList.remove('active');

  if (tab === 'brasil') {
    document.querySelector('.score-status.live').classList.add('active');
    document.querySelector('.tab-button:nth-child(1)').classList.add('active');
    document.getElementById('video-brasil').style.display = 'block';
  } else {
    document.querySelector('.score-status.live').classList.add('active');
    document.querySelector('.tab-button:nth-child(2)').classList.add('active');
    document.getElementById('video-money').style.display = 'block';
  }
}
