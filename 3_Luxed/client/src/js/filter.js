/* eslint-disable no-unused-expressions */

import Isotope from '../../node_modules/isotope-layout/js/isotope';

const elem = document.getElementById('filter');
const iso = new Isotope(elem, {
  itemSelector: '.filter-card',
  layoutMode: 'masonry',
});

const filterbtn = Array.from(document.getElementsByClassName('filter-btn'));

filterbtn.forEach(el => {
  el.addEventListener('click', e => {
    const { filter } = e.currentTarget.dataset;
    iso.arrange({ filter: `${filter}` })
    filterbtn.forEach(item => {
      item !== e.target ? item.classList.remove('filter-btn--is-active') : item.classList.add('filter-btn--is-active')
    })
  })
})

const elem1 = document.getElementById('filter2');
const iso1 = new Isotope(elem1, {
  itemSelector: '.filter-card',
  layoutMode: 'masonry',
});

filterbtn.forEach(el => {
  el.addEventListener('click', e => {
    const { filter } = e.currentTarget.dataset;
    iso1.arrange({ filter: `${filter}` })
    filterbtn.forEach(item => {
      item !== e.target ? item.classList.remove('filter-btn--is-active') : item.classList.add('filter-btn--is-active')
    })
  })
})

const elem2 = document.getElementById('filter3');
const iso2 = new Isotope(elem2, {
  itemSelector: '.filter-card',
  layoutMode: 'masonry',
});

filterbtn.forEach(el => {
  el.addEventListener('click', e => {
    const { filter } = e.currentTarget.dataset;
    iso2.arrange({ filter: `${filter}` })
    filterbtn.forEach(item => {
      item !== e.target ? item.classList.remove('filter-btn--is-active') : item.classList.add('filter-btn--is-active')
    })
  })
})
