/* ── NAV TOGGLE ── */
function toggleMenu() {
  document.getElementById('navmenu').classList.toggle('open');
}
document.querySelectorAll('#navmenu a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('navmenu').classList.remove('open'));
});

/* ── NAV SHRINK ON SCROLL ── */
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  nav.style.padding = window.scrollY > 40 ? '12px 48px' : '18px 48px';
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── TOOL BAR REVEAL ── */
const toolObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.tool-card').forEach(el => toolObserver.observe(el));

/* ── COUNTER ANIMATION ── */
const counters = document.querySelectorAll('.count');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.target);
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = Math.floor(current);
    }, step);
    countObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => countObserver.observe(c));

/* ── HERO STAGGER ON LOAD ── */
window.addEventListener('load', () => {
  document.querySelectorAll('#hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 80 + i * 110);
  });
});