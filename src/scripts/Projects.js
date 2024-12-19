const projects = document.querySelectorAll('.project'); 

projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    const content = project.querySelector('.content');
    content.style.display = 'flex';
  });

  project.addEventListener('mouseout', () => {
    const content = project.querySelector('.content');
    content.style.display = 'none';
  });
});
