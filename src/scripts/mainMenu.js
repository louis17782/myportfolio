document.getElementById('close-menu').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
});

document.querySelector('.menuOpen').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
});
