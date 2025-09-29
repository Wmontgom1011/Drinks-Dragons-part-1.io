js
// === Mobile nav toggle (accessible) ===
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

  // Close menu with Escape key when focus is inside the nav
  primaryNav.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });
}

// === Footer year ===
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// === Progressive enhancement: Reservation form ===
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

// === Progressive enhancement: Newsletter form ===
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

// === Respect reduced motion for any future animations ===
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// Use `prefersReduced` in any animation logic you add later.
