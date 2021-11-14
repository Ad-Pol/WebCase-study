const burger = document.getElementsByClassName('header-burger')[0];
const menu = document.getElementsByClassName('header-menu')[0];

burger.addEventListener('click', () => {
  burger.classList.toggle('header-burger--is-active');
  menu.classList.toggle('header-menu--is-active');
});
