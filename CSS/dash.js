const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.dash');
hamburger.addEventListener('click', () => {
  navLink.classList.toggle('hide');
});