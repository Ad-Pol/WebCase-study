const searchbtn = document.getElementsByClassName('search-js')[0];
const headersearch = document.getElementsByClassName('header-search')[0];
const input = document.getElementsByClassName('js-input')[0];
const jsb = document.getElementsByClassName('js-b')[0];

searchbtn.addEventListener('click', () => {
  headersearch.classList.add('header-search--active');
})

window.addEventListener('click', e => {
  if (e.target !== input && e.target !== searchbtn && e.target !== jsb) {
    headersearch.classList.remove('header-search--active');
  }
})
