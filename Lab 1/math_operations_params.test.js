const {
    add,
    subtract,
    multiply,
    divide,
  } = require('./math_operations');
  
  // Параметризовані тести для функції додавання
  test.each([
    [3, 5, 8],
    [-3, 5, 2],
    [0, 0, 0],
  ])('додає %i та %i, результат має бути %i', (a, b, expected) => {
    expect(add(a, b)).toBe(expected);
  });
  
  // Параметризовані тести для функції віднімання
  test.each([
    [8, 3, 5],
    [5, -3, 8],
    [0, 0, 0],
  ])('віднімає %i з %i, результат має бути %i', (a, b, expected) => {
    expect(subtract(a, b)).toBe(expected);
  });
  
  // Параметризовані тести для функції множення
  test.each([
    [4, 7, 28],
    [-4, 7, -28],
    [0, 5, 0],
  ])('множить %i на %i, результат має бути %i', (a, b, expected) => {
    expect(multiply(a, b)).toBe(expected);
  });
  
  // Параметризовані тести для функції ділення
  test.each([
    [10, 2, 5],
    [-10, 2, -5],
    [10, -2, -5],
  ])('ділить %i на %i, результат має бути %i', (a, b, expected) => {
    expect(divide(a, b)).toBe(expected);
  });
  
  test('ділення на 0, очікується помилка', () => {
    expect(() => { divide(5, 0) }).toThrow("Ділення на нуль неможливе.");
  });