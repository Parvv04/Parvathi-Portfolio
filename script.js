// No JavaScript is required for this static portfolio, but you can add interactivity here if needed.

// Smooth scroll for sidebar navigation (if you add anchor links)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in animation on scroll for sections
function revealOnScroll() {
  const sections = document.querySelectorAll('.portfolio-section');
  const triggerBottom = window.innerHeight * 0.92;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Highlight project cards on hover
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach(item => {
  item.addEventListener('mouseenter', () => item.classList.add('highlight'));
  item.addEventListener('mouseleave', () => item.classList.remove('highlight'));
});
