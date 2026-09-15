// Heaven Pet Club - Scripts Interativos: Smooth Scroll & Reveal on Scroll
document.addEventListener('DOMContentLoaded', () => {
  // 1. Rolagem Suave Personalizada para links âncora
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 2. IntersectionObserver para Reveal on Scroll
  const revealOptions = {
    threshold: 0.12,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, revealOptions);

  // Observa todos os elementos marcados para animação de scroll
  const revealTargets = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade'
  );
  revealTargets.forEach(el => revealObserver.observe(el));
});
