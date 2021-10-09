function openButton() {
  const navLinks = document.querySelector('.nav-links');

  navLinks.style.transform = 'translateX(0)';
}

function closeButton() {
  const navLinks = document.querySelector('.nav-links');

  navLinks.style.transform = 'translateX(100%)';
}
