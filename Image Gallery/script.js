let scrollContainer = document.querySelector('.gallery');
let backBtn = document.getElementById('back-btn');
let nextBtn = document.getElementById('next-btn');

nextBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft += scrollContainer.clientWidth;
});

backBtn.addEventListener('click', () => {
  scrollContainer.scrollLeft -= scrollContainer.clientWidth;
});
