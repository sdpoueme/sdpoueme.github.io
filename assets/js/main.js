// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.getElementById('site-nav');
  nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  // Add mobile menu toggle
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMobileMenu);
  }
});
