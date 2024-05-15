//1 Перевірка успішного входу користувача
describe('Login Test', () => {
    it('should login successfully with valid credentials', () => {
      cy.visit('https://automationexercise.com/');
      cy.contains('Sign in').click();
      cy.get('#email').type('test@example.com');
      cy.get('#passwd').type('password123');
      cy.get('#SubmitLogin').click();
      cy.contains('My account');
    });
  });

  //2 Перевірка можливості додавання товару до кошика
  describe('Add to Cart Test', () => {
    it('should add a product to the cart', () => {
      cy.visit('https://automationexercise.com/');
      cy.get('#search_query_top').type('dress');
      cy.contains('Submit').click();
      cy.contains('.product-container', 'Printed Dress').find('.ajax_add_to_cart_button').click();
      cy.get('.layer_cart_product').should('be.visible');
      cy.get('.button-medium[title="Proceed to checkout"]').click();
      cy.contains('Shopping-cart summary');
    });
  });

  //3 Перевірка виводу результатів пошуку
  describe('Search Test', () => {
    it('should display search results according to input criteria', () => {
      cy.visit('https://automationexercise.com/');
      cy.get('#search_query_top').type('shirt');
      cy.contains('Submit').click();
      cy.get('.product-container').should('have.length.greaterThan', 0);
      cy.contains('.product-container', 'T-Shirt').should('be.visible');
    });
  });

  //4 Перевірка сортування товарів за ціною
  describe('Sort Test', () => {
    it('should sort products by price', () => {
      cy.visit('https://automationexercise.com/');
      cy.get('.sf-menu > :nth-child(3) > .sf-with-ul').click();
      cy.contains('Price, high to low').click();
      cy.get('.product-price').then(prices => {
        const sortedPrices = [...prices].map(price => parseFloat(price.textContent.replace('$', '')));
        expect(sortedPrices).to.eql(sortedPrices.slice().sort((a, b) => b - a));
      });
    });
  });

  //5 Перевірка можливості зміни профілю користувача
  describe('Profile Test', () => {
    it('should allow user to edit their profile', () => {
      cy.visit('https://automationexercise.com/');
      cy.contains('Sign in').click();
      cy.get('#email').type('test@example.com');
      cy.get('#passwd').type('password123');
      cy.get('#SubmitLogin').click();
      cy.contains('My account').click();
      cy.contains('Information').click();
      cy.get('#firstname').clear().type('John');
      cy.get('#old_passwd').type('password123');
      cy.contains('Save').click();
      cy.contains('Your personal information has been successfully updated.');
    });
  });
  
