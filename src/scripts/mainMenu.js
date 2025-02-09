document.getElementById('close-menu').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
});

document.querySelector('.menuOpen').addEventListener('click', () => {
  document.querySelector('.blur-background').classList.toggle('active');
  document.querySelector('nav').classList.toggle('active');
});

// hover on projects

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

// Close menu after navigation
const navLinks = document.querySelectorAll('.navlinks a[href="#projects"], .navlinks a[href="#about"], .navlinks a[href="#contact"], .navlinks a[href="#hola"]');

function closeMenuAfterNavigation() {
  document.querySelector('.blur-background').classList.remove('active');
  document.querySelector('nav').classList.remove('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', closeMenuAfterNavigation);
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

// progress bar
document.addEventListener('DOMContentLoaded', () => {
  const progressBars = document.querySelectorAll('.progress-bar');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const progressFill = progressBar.querySelector('.progress-fill');
        const progressValue = progressBar.getAttribute('data-progress');
        progressFill.style.width = `${progressValue}%`;
        observer.unobserve(progressBar);
      }
    });
  }, {
    threshold: 0.5
  });

  progressBars.forEach(bar => {
    observer.observe(bar);
  });
});
