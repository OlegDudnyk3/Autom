const { Builder, By, Key, until } = require('selenium-webdriver');

(async function googleTest() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.wait(until.titleIs('webdriver - Пошук Google'), 1000);
    
    // Перевірка наявності елементів
    await driver.findElement(By.id('hplogo'));
    await driver.findElement(By.name('q'));
    await driver.findElement(By.name('btnK'));
    await driver.findElement(By.linkText('Gmail'));
    
    console.log('Тест успішний!');
  } finally {
    await driver.quit();
  }
})();
