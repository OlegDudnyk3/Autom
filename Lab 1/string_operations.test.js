const { isPalindrome, isAnagram } = require('./string_operations');

test('перевірка чи текст є паліндромом', () => {
  expect(isPalindrome("абба")).toBe(true);
  expect(isPalindrome("мадам")).toBe(true);
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("radar")).toBe(true);
});

test('перевірка чи текст є анаграмою', () => {
  expect(isAnagram("listen", "silent")).toBe(true);
  expect(isAnagram("triangle", "integral")).toBe(true);
  expect(isAnagram("hello", "world")).toBe(false);
});
