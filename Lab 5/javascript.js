// Приклад реалізації тестового сценарію для пошуку товарів
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function searchTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://rozetka.com.ua/');
    await driver.findElement(By.name('search')).sendKeys('smartphone', Key.RETURN);
    await driver.wait(until.titleContains('smartphone'), 5000);
    const results = await driver.findElements(By.className('goods-tile'));
    if (results.length === 0) {
      throw new Error('Результати пошуку не знайдено.');
    }
    console.log('Тест успішний!');
  } finally {
    await driver.quit();
  }
})();

//Для перевірки веб-доступності
const { Builder } = require('selenium-webdriver');
const { Options } = require('selenium-webdriver/chrome');
const { AxeBuilder, WebDriver } = require('axe-webdriverjs');

(async function accessibilityTest() {
  let driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new Options().headless())
    .build();
  try {
    await driver.get('https://rozetka.com.ua/');
    const results = await new AxeBuilder(driver).analyze();
    const violations = results.violations;
    if (violations.length > 0) {
      console.error('Знайдено наступні дефекти веб-доступності:');
      violations.forEach(violation => {
        console.error(violation.id, violation.description);
      });
    } else {
      console.log('Веб-сайт пройшов перевірку веб-доступності без критичних дефектів.');
    }
  } finally {
    await driver.quit();
  }
})();
