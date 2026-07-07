const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.12 });

document.querySelectorAll("section, .brands-grid img, .dog-grid img, .why-grid div, .stat-box").forEach((el) => {
  el.classList.add("reveal");
  observer.observe(el);
});
