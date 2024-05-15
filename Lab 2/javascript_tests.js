//2

test('перевірка, що проміс вирішується з рядком "hello world"', () => {
    return expect(asyncFunction()).resolves.toBe("hello world");
  });

  //3

  test('перевірка, що значення вирішеної обіцянки є числом', async () => {
    const result = await asyncFunctionCaller();
    expect(typeof result).toBe('string');
  });

  //4

  test('перевірка, що проміс відхиляється з очікуваною помилкою', () => {
    return expect(asyncFunctionWithError()).rejects.toThrow("Something went wrong");
  });

  //5

  test('перевірка, що відповідь є очікуваним об’єктом JSON', async () => {
    const data = await fetchData();
    expect(data).toEqual(expect.objectContaining({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String)
    }));
  });

  //6

  test('перевірка, що відповідь є очікуваним об’єктом JSON', async () => {
    const data = await fetchDataFromAPI();
    expect(data).toEqual(expect.objectContaining({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String)
    }));
  });
  
  