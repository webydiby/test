const LIKE_BTNS = document.querySelectorAll('.like-btn');
const MENU_BAR_BTNS = document.querySelectorAll('.menu-bar');
const MENU_BAR_HAM_BTNS = document.querySelectorAll('.menu-bar ham-btn');
const MENU_BAR_GRID_BTNS = document.querySelectorAll('.menu-bar grid-btn');

LIKE_BTNS.forEach((e) => {
  e.addEventListener('click', () => {
    e.classList.toggle('checked');
  });
});

MENU_BAR_BTNS.forEach((e) => {
  e.addEventListener('click', (el) => {
    if (el.target.matches('.ham-btn'))
      e.classList.remove('grid');
    if (el.target.matches('.grid-btn'))
      e.classList.add('grid');
  });
});