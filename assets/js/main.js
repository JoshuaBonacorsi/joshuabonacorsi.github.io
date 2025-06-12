// Burger menu toggle
const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

burger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  burger.classList.toggle('open');
});

// Smooth scroll + close burger
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (navMenu.classList.contains('open')) navMenu.classList.remove('open');
  });
});

// Typewriter effect
const words = [
  'Applied Mathematics Engineer',
  'AI Enthusiast',
  'Business Oriented'
];
let wordIndex = 0;
let charIndex = 0;
const typedText = document.querySelector('.typed-text');
const cursor = document.querySelector('.cursor');

function type() {
  if (!typedText) return;
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 80);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (words.length) setTimeout(type, 500);
});

const navbar = document.querySelector('.navbar');
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const current = window.pageYOffset;
  if (current <= 0) {
    navbar.classList.add('hidden');
  } else {
    navbar.classList.remove('hidden');
  }
  lastScroll = current;
});
