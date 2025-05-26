const buttons = document.querySelectorAll('.tab-button');
const videoContainers = document.querySelectorAll('.video-container.switch');
const newsTitles = document.querySelectorAll('.news-title');

function switchTab(tab) {

  buttons.forEach((btn) => {
    btn.classList.remove('active');
    const status = btn.querySelector('.status-live');
    if (status) {
      status.classList.remove('active');
      void status.offsetWidth;
    }
  });

  videoContainers.forEach((vc) => (vc.style.display = 'none'));

  newsTitles.forEach((title) => (title.style.display = 'none'));

  const btn = document.querySelector(`.tab-button.${tab}`);
  if (btn) {
    btn.classList.add('active');
    const status = btn.querySelector('.status-live');
    if (status) {
      status.classList.add('active');
    }
  }

  const video = document.getElementById(`video-${tab}`);
  if (video) {
    video.style.display = 'block';
  }


  const title = document.querySelector(`.news-title.${tab}`);
  if (title) {
    title.style.display = 'block';
  }
}