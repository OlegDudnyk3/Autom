const { function1 } = require('./your_code');

test('перевірка аргументів при виклику функції 2 з функції 1', () => {
  // Створюємо макет функції 2
  const function2Mock = jest.fn();
  
  // Викликаємо функцію 1, передаючи макет функції 2
  function1(function2Mock);
  
  // Перевіряємо, чи була функція 2 викликана з правильними аргументами
  expect(function2Mock).toHaveBeenCalledWith({ name: 'John', lastname: 'Doe' });
});

//2

function asyncFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("hello world");
      }, 1000);
    });
  }
  
  //3

  async function asyncFunctionCaller() {
    const result = await asyncFunction();
    return result;
  }

  //4

  function asyncFunctionWithError() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("Something went wrong"));
      }, 1000);
    });
  }

  //5

  async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    return data;
  }

  //6

  async function fetchDataFromAPI() {
    const response = await fetchData();
    return response;
  }
  
