const icon = document.getElementsByClassName('js-item-search')[0];
const search = document.getElementsByClassName('search')[0];

icon.addEventListener('click', () => {
  search.classList.toggle('search-is-active');
});
