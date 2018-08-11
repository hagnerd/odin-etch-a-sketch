/* global window */
/* global document */

const app = document.getElementById('app');
const reset = document.getElementById('reset-button');

const handleChange = e => {
  e.target.style.background = '#201E2F';
};

reset.onclick = function() {
  let newGrid = window.prompt(
    'How many across would you like the new grid to be?',
    16,
  );
  generateGrid(newGrid);
};

const setGridSize = n =>
  document.documentElement.style.setProperty('--base', n);

const generateGrid = num => {
  // Reset any grid that might exist
  app.innerHTML = '';

  const gridArea = num * num;
  setGridSize(num);

  for (let i = 0; i < gridArea; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('grid-element');
    gridElement.id = `grid-${i}`;
    app.append(gridElement);
  }

  const els = document.querySelectorAll('.grid-element');
  els.forEach(el => el.addEventListener('mouseenter', handleChange));
};

window.onload = function() {
  generateGrid(16);
};
