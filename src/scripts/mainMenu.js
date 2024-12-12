document.getElementsByClassName('traffic-light')[0].addEventListener('click', () => {
  document.getElementsByClassName('navlinks')[0].classList.toggle('expanded');
  document.getElementById('close-menu').classList.toggle('show');
  document.getElementsByClassName('blur-background')[0].classList.toggle('active');
  console.log('Menu toggled');
});

document.getElementById('close-menu').addEventListener('click', () => {
  document.getElementsByClassName('navlinks')[0].classList.remove('expanded');
  document.getElementById('close-menu').classList.remove('show');
  document.getElementsByClassName('blur-background')[0].classList.remove('active');
  console.log('Menu closed');
});