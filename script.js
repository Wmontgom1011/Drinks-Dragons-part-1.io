// Accessible mobile menu toggle
const btn = document.getElementById('menuButton');
const nav = document.getElementById('primaryNav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.hidden = expanded; // hide/show the list
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Reservation form progressive enhancement
const reserveForm = document.querySelector('#reserve form');
reserveForm?.addEventListener('submit', (e) => {
  const form = e.currentTarget;
  if (!form.checkValidity()) {
    e.preventDefault();
    form.querySelectorAll(':invalid')[0]?.focus();
    return;
  }
  e.preventDefault();
  document.getElementById('reserve-status').textContent = 'Reservation request sent! Check your inbox.';
});

// Newsletter form progressive enhancement
const newsForm = document.querySelector('#newsletter form');
newsForm?.addEventListener('submit', (e) => {
  const form = e.currentTarget;
  if (!form.checkValidity()) {
    e.preventDefault();
    form.querySelectorAll(':invalid')[0]?.focus();
    return;
  }
  e.preventDefault();
  document.getElementById('news-status').textContent = 'Thanks for joining the guild!';
});
