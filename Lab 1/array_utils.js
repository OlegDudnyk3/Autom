// array_utils.js

// Функція для обчислення суми елементів масиву
function sumArray(array) {
    return array.reduce((acc, curr) => acc + curr, 0);
  }
  
  // Функція для фільтрації позитивних чисел у масиві
  function filterPositiveNumbers(array) {
    return array.filter(num => num > 0);
  }
  
  // Функція для фільтрації негативних чисел у масиві
  function filterNegativeNumbers(array) {
    return array.filter(num => num < 0);
  }
  
  // Експортуємо функції для використання у інших файлах
  module.exports = {
    sumArray,
    filterPositiveNumbers,
    filterNegativeNumbers,
  };
  