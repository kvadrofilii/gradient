//- Получаем DOM-элемент с id "color-list1"
const colorList1 = document.querySelector('#color-list1');
//- Получаем DOM-элемент с id "color-list2"
const colorList2 = document.querySelector('#color-list2');
//- Переменные для цветов градиента
let color1 = '#0097bd';
let color2 = '#9d4410';

//- Считываем нажатие кнопок с выбором первого цвета
colorList1.addEventListener('click', (event) => {
  //- Проверяем нажатие кнопок с выбором первого цвета
  if (event.target.classList.contains('color-btn')) {
    //- Записываем в переменную color1 значение "data-color" от нажатой кнопки
    color1 = event.target.getAttribute('data-color');
  }
});

//- Считываем нажатие кнопок с выбором второго цвета
colorList2.addEventListener('click', (event) => {
  //- Проверяем нажатие кнопок с выбором второго цвета
  if (event.target.classList.contains('color-btn')) {
    //- Записываем в переменную color2 значение "data-color" от нажатой кнопки
    color2 = event.target.getAttribute('data-color');
  }
});
