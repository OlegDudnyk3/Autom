// math_operations.js

// Функція додавання
function add(a, b) {
    return a + b;
  }
  
  // Функція віднімання
  function subtract(a, b) {
    return a - b;
  }
  
  // Функція множення
  function multiply(a, b) {
    return a * b;
  }
  
  // Функція ділення
  function divide(a, b) {
    // Перевірка ділення на нуль
    if (b === 0) {
      throw new Error("Ділення на нуль неможливе.");
    }
    return a / b;
  }
  
  // Експортуємо функції для використання у інших файлах
  module.exports = {
    add,
    subtract,
    multiply,
    divide,
  };