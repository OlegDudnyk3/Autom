const { sumArray, filterPositiveNumbers, filterNegativeNumbers } = require('./array_utils');

describe('Тести для файлу array_utils.js', () => {
  test('перевірка функції sumArray', () => {
    expect(sumArray([1, 2, 3])).toBe(6);
  });

  // Додайте інші тести для функцій filterPositiveNumbers та filterNegativeNumbers, якщо потрібно
});

describe('Тести для файлу string_operations.test.js', () => {
  const { isPalindrome, isAnagram } = require('./string_operations');

  test('перевірка чи текст "абба" є паліндромом', () => {
    expect(isPalindrome("абба")).toBe(true);
  });

  // Додайте інші тести для функції isAnagram, якщо потрібно
});