//1 Авторизація на сайті та перевірка правильного входу
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function signInTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://automationpractice.com');
    await driver.findElement(By.className('login')).click();
    await driver.wait(until.titleIs('Login - My Store'), 5000);

    await driver.findElement(By.id('email')).sendKeys('your_email@example.com');
    await driver.findElement(By.id('passwd')).sendKeys('your_password', Key.RETURN);
    
    await driver.wait(until.titleIs('My account - My Store'), 5000);
    
    const userName = await driver.findElement(By.className('account')).getText();
    if (userName !== 'Your Name') {
      throw new Error('Користувач не авторизований або ім\'я відображено невірно.');
    }
    
    console.log('Тест успішний!');
  } finally {
    await driver.quit();
  }
})();

//2 Перевірка виведення повідомлення про обов'язкове поле Email address
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function emptyEmailTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://automationpractice.com');
    await driver.findElement(By.className('login')).click();
    
    await driver.findElement(By.id('email_create')).sendKeys(Key.RETURN);
    
    const alertText = await driver.switchTo().alert().getText();
    if (alertText !== 'An email address required') {
      throw new Error('Повідомлення про обов\'язкове поле Email address не виведено.');
    }
    
    console.log('Тест успішний!');
  } finally {
    await driver.quit();
  }
})();

//3 Перевірка виведення повідомлення про обов'язкове поле Password
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function emptyPasswordTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://automationpractice.com');
    await driver.findElement(By.className('login')).click();
    
    await driver.findElement(By.id('passwd')).sendKeys(Key.RETURN);
    
    const alertText = await driver.switchTo().alert().getText();
    if (alertText !== 'Password is required') {
      throw new Error('Повідомлення про обов\'язкове поле Password не виведено.');
    }
    
    console.log('Тест успішний!');
  } finally {
    await driver.quit();
  }
})();

//4 Додавання товару в корзину та перевірка коректності замовлення
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function addToCartTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://automationpractice.com');
    await driver.findElement(By.className('login')).click();
    
    await driver.findElement(By.id('email')).sendKeys('your_email@example.com');
    await driver.findElement(By.id('passwd')).sendKeys('your_password', Key.RETURN);
    
    await driver.findElement(By.linkText('T-shirts')).click();
    await driver.findElement(By.linkText('Faded Short Sleeve T-shirts')).click();
    await driver.findElement(By.name('Submit')).click();
    await driver.findElement(By.linkText('Proceed to checkout')).click();
    
    const itemName = await driver.findElement(By.css('.cart_description .product-name')).getText();
    if (itemName !== 'Faded Short Sleeve T-shirts') {
      throw new Error('Товар у корзині відображається невірно.');
    }
    
    const itemPrice = await driver.findElement(By.css('.cart_total .price')).getText();
    if (itemPrice !== '$16.51') {
      throw new Error('Ціна товару в корзині відображається невірно.');
    }
    
    await driver.findElement(By.name('quantity')).clear();
    await driver.findElement(By.name('quantity')).sendKeys('2');
    await driver.findElement(By.name('quantity')).sendKeys(Key.RETURN);
    
    const totalPrice = await driver.findElement(By.id('total_product')).getText();
    if (totalPrice !== '$33.02') {
      throw new Error('Загальна вартість товару в корзині відображається невірно.');
    }
    
    console.log('Тест успішний!');
  } finally {
    await driver.quit();
  }
})();

//5 Пошук товару зі знижкою та перевірка наявності знижки
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function discountTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://automationpractice.com');
    await driver.findElement(By.className('login')).click();
    
    await driver.findElement(By.id('email')).sendKeys('your_email@example.com');
    await driver.findElement(By.id('passwd')).sendKeys('your_password', Key.RETURN);
    
    await driver.findElement(By.id('search_query_top')).sendKeys('Printed Chiffon Dress', Key.RETURN);
    
    const itemName = await driver.findElement(By.className('product-name')).getText();
    if (itemName !== 'Printed Chiffon Dress') {
      throw new Error('Товар не знайдено або назва відображається невірно.');
    }
    
    const discountPercent = await driver.findElement(By.css('.price-percent-reduction')).getText();
    if (discountPercent !== '-20%') {
      throw new Error('Знижка на товар не відображається або відображається невірно.');
    }
    
    console.log('Тест успішний!');
  } finally {
    await driver.quit();
  }
})();
