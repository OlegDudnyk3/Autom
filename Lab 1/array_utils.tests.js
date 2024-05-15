const { sumArray, filterPositiveNumbers, filterNegativeNumbers } = require('./array_utils');

let testArray;

beforeAll(() => {
  testArray = [1, -2, 3, -4, 5];
});

test('сума елементів масиву', () => {
  expect(sumArray(testArray)).toBe(3);
});

test('фільтрація позитивних чисел', () => {
  expect(filterPositiveNumbers(testArray)).toEqual([1, 3, 5]);
});

test('фільтрація негативних чисел', () => {
  expect(filterNegativeNumbers(testArray)).toEqual([-2, -4]);
});
