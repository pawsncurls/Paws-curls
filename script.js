const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('section, .stat-card, .why-grid div, .service-grid article').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});
