const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll("section, .logo-grid img, .dog-card-grid img, .why-points div").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
