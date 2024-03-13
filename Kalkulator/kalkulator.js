const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const result = document.getElementById('result');

add.addEventListener('click', () => {
  const sum = Number(number1.value) + Number(number2.value);
  result.textContent = `Hasil: ${sum}`;
});

subtract.addEventListener('click', () => {
  const difference = Number(number1.value) - Number(number2.value);
  result.textContent = `Hasil: ${difference}`;
});