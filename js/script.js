document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-navigation');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      if (!expanded) {
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.gap = '0.5rem';
      } else {
        nav.style.display = '';
      }
    });
  }

  // Simple lightbox for featured images
  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox?.querySelector('img');
  const lbClose = lightbox?.querySelector('.lightbox-close');

  document.querySelectorAll('.cake img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      if (!lightbox || !lbImg) return;
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  if (lbClose) lbClose.addEventListener('click', () => lightbox.setAttribute('aria-hidden', 'true'));
  if (lightbox) lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.setAttribute('aria-hidden', 'true');
  });
});
