// Initialize Lucide icons
lucide.createIcons();

// Modal functionality
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const modalOverlay = document.querySelector('.modal-overlay');

function toggleModal() {
  loginModal.classList.toggle('active');
}

loginBtn.addEventListener('click', toggleModal);
closeModal.addEventListener('click', toggleModal);
modalOverlay.addEventListener('click', toggleModal);

// Prevent modal close when clicking modal content
document.querySelector('.modal-content').addEventListener('click', (e) => {
  e.stopPropagation();
});

// Form submissions
const contactForm = document.getElementById('contactForm');
const loginForm = document.getElementById('loginForm');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(contactForm);
  const data = Object.fromEntries(formData);
  console.log('Contact form submission:', data);
  // Here you would typically send the data to your backend
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(loginForm);
  const data = Object.fromEntries(formData);
  console.log('Login attempt:', data);
  // Here you would typically authenticate with your backend
  alert('Login functionality will be implemented soon!');
  loginForm.reset();
  toggleModal();
});

// Feature card animations
const featureCards = document.querySelectorAll('.feature-card');

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

featureCards.forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
