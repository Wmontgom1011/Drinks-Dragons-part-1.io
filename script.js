const menuBtn = document.getElementById('menuButton');
const primaryNav = document.getElementById('primaryNav');

if (menuBtn && primaryNav) {
  const firstLink = () => primaryNav.querySelector('a');

  const openMenu = () => {
    primaryNav.hidden = false;
    menuBtn.setAttribute('aria-expanded', 'true');
    firstLink()?.focus();
  };

  const closeMenu = () => {
    primaryNav.hidden = true;
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
  };

  menuBtn.addEventListener('click', () => {
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    expanded ? closeMenu() : openMenu();
  });

  primaryNav.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const reserveForm = document.getElementById('reserveForm');
if (reserveForm) {
  reserveForm.addEventListener('submit', (e) => {
    if (!reserveForm.checkValidity()) {
      e.preventDefault();
      reserveForm.querySelector(':invalid')?.focus();
      return;
    }
    e.preventDefault();
    document.getElementById('reserve-status').textContent = 'Reservation request sent! Check your inbox.';
  });
}

const newsForm = document.getElementById('newsForm');
if (newsForm) {
  newsForm.addEventListener('submit', (e) => {
    if (!newsForm.checkValidity()) {
      e.preventDefault();
      newsForm.querySelector(':invalid')?.focus();
      return;
    }
    e.preventDefault();
    document.getElementById('news-status').textContent = 'Thanks for joining the guild!';
  });
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

