// Theme Toggle
const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Modal Functionality
const loginBtn = document.querySelector('.login-btn');
const registerBtn = document.querySelector('.register-btn');
const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const closeBtns = document.querySelectorAll('.close');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loginModal.style.display = 'block';
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    registerModal.style.display = 'block';
});

closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.style.display = 'none';
        registerModal.style.display = 'none';
    });
});

window.addEventListener('click', (e) => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
});

// Form Submission
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted!');
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});