const firstColorList = document.querySelector('#firs-color-list');
const secondColorList = document.querySelector('#second-color-list');
const sidebar = document.querySelector('#sidebar');
let firstColor = '#0097bd';
let secondColor = '#9d4410';

firstColorList.addEventListener('click', (event) => {
  if (event.target.classList.contains('color-btn')) {
    firstColor = event.target.getAttribute('data-color');
    setGradient(sidebar);
  }
});

secondColorList.addEventListener('click', (event) => {
  if (event.target.classList.contains('color-btn')) {
    secondColor = event.target.getAttribute('data-color');
    setGradient(sidebar);
  }
});

function setGradient(element) {
  element.style.background = `linear-gradient(45deg, ${firstColor}, ${secondColor})`;
}

function setColorList(element, color) {
  element.addEventListener('click', (event) => {
    if (event.target.classList.contains('color-btn')) {
      color = event.target.getAttribute('data-color');
      setGradient(sidebar);
    }
  });
}
