//Функція для перевірки, чи містить масив вказаний об’єкт
  function arrayContainsObject(array, obj) {
    return array.some(item => JSON.stringify(item) === JSON.stringify(obj));
  }
  
  test('перевірка, чи містить масив вказаний об’єкт', () => {
    const array = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Doe' }];
    const obj = { id: 2, name: 'Jane' };
    expect(arrayContainsObject(array, obj)).toBe(true);
  });

  //Функція для перевірки, чи містить текстовий фрагмент вказане слово
  function textContainsWord(text, word) {
    return text.split(' ').includes(word);
  }
  
  test('перевірка, чи містить текстовий фрагмент вказане слово', () => {
    const text = 'Quick brown fox jumps over the lazy dog';
    const word = 'fox';
    expect(textContainsWord(text, word)).toBe(true);
  });

  //Функція для перевірки, чи містить об’єкт який повертає функція вказане поле
  function objectContainsField(obj, field) {
    return Object.keys(obj).includes(field);
  }
  
  test('перевірка, чи містить об’єкт вказане поле', () => {
    const obj = { id: 1, name: 'John' };
    const field = 'name';
    expect(objectContainsField(obj, field)).toBe(true);
  });

  //Функція, яка приймає масив та зворотній виклик і виконує зворотній виклик над елементами масиву
  function arrayCallback(array, callback) {
    array.forEach(item => callback(item));
  }
  
  test('перевірка кількості викликів зворотнього виклику', () => {
    const mockCallback = jest.fn();
    const array = [1, 2, 3, 4, 5];
    arrayCallback(array, mockCallback);
    expect(mockCallback.mock.calls.length).toBe(array.length);
  });

  //Функція, яка приймає текстовий рядок із фразою та зворотній виклик
  function phraseToArrayAndCallback(phrase, callback) {
    const words = phrase.split(' ');
    callback(words);
  }
  
  test('перевірка аргументів зворотнього виклику', () => {
    const mockCallback = jest.fn();
    const phrase = 'Hello world';
    phraseToArrayAndCallback(phrase, mockCallback);
    expect(mockCallback).toHaveBeenCalledWith(['Hello', 'world']);
  });

  //творення об’єкта з методом introduce та перевірка кількості викликів методу за допомогою jest.spyOn
  const person = {
    firstName: 'John',
    lastName: 'Doe',
    introduce() {
      console.log(`Hello, I'm ${this.firstName} ${this.lastName}`);
    }
  };
  
  test('перевірка кількості викликів методу introduce', () => {
    const spy = jest.spyOn(person, 'introduce');
    person.introduce();
    expect(spy).toHaveBeenCalledTimes(1);
  });
  