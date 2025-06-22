// Scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Dropdown on mobile
document.querySelectorAll('.dropdown > a').forEach(item => {
  item.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = item.parentElement;
      parent.classList.toggle('open');
    }
  });
});
