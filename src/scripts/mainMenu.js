document.getElementById('close-menu').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
});

document.querySelector('.menuOpen').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
});


const projects = document.querySelectorAll('.project');

projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    const content = project.querySelector('.content');
    content.classList.add('show'); 
  });

  project.addEventListener('mouseout', () => {
    const content = project.querySelector('.content');
    content.classList.remove('show');
  });
});

// carousel

const carousel = document.getElementById('carouselimg');
let scrollSpeed = 2;

const image = carousel.children;
const imageCount = image.length;

for (let j = 0; j < imageCount; j++) {
  for (let i = 0; i < imageCount; i++) {
    let clone = image[i].cloneNode(true);
    carousel.appendChild(clone);
  }
}

function moveCarousel() {
  carousel.scrollLeft += scrollSpeed;

  if (carousel.scrollLeft >= image[0].clientWidth * imageCount) { 
    carousel.scrollLeft = 0;
  }
}

setInterval(moveCarousel, 20);
