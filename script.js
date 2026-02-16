function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
  const maxFade = 600;
  const opacity = Math.min(window.scrollY / maxFade, 1);
  document.documentElement.style.setProperty('--overlay-opacity', opacity);
});