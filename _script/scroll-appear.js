document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll('.scroll-appear');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.25 // You can tweak this to control how much must be visible
  });

  scrollElements.forEach(el => observer.observe(el));
});
