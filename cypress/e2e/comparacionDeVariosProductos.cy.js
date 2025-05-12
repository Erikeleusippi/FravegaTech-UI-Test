import { BasePage } from '../pages/BasePage';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ComparePage } from '../pages/comparePage';
import { CartPage } from '../pages/cartPage';
import { CartEmailPage } from '../pages/cartEmailPage';
import { FinalBuyPage } from '../pages/FinalBuyPage';

Cypress.on('uncaught:exception', (err, runnable) => {    
    return false;
  }); 
  afterEach(() => {
    cy.clearCookies();         
  });  
  beforeEach(() => {
    cy.clearCookies();    
    cy.ignoreTrackers();
    cy.intercept('GET', /google-analytics\.com|analytics\.google\.com|gtag\/js|collect/, {
      statusCode: 200,
      body: {}
    }).as('gaGet');
    cy.intercept('POST', /google-analytics\.com|analytics\.google\.com|gtag\/js|collect/, {
      statusCode: 200,
      body: {}
    }).as('gaPost');
    cy.intercept('POST', 'https://tracker-server.ds.production.fravega.com/records', {
      statusCode: 200,
      body: {}
    }).as('fravegaTracker');
    cy.intercept('GET', /pagead2\.googlesyndication\.com\/pagead\/gen_204/, {
      statusCode: 204,
      body: {}
    }).as('googleAds');
  });    

describe('Comparación de varios productos', () => {
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();
    const searchTerm = 'Freidora';
    const comparePage = new ComparePage();
    const cartPage = new CartPage();
    const cartEmailPage = new CartEmailPage();
    const finalBuyPage = new FinalBuyPage();
    const minPrice = 60000;
    const maxPrice = 200000;
    const maxComparar = 4;
    const email = 'test@fravegatech.com'
    const CodeDiscount = 'Frave15'
    const name = 'Erik '
    const lastName = 'test'
    const document = '12345678'
    const phoneNumber = '1234567890'
    const CardName = 'TESTING';
    const CardNumber = '12121212121212';    
    const zipCode = '1416'         

    it('comparar,validar compra ,validar cupon(ambos casos)', () => {
        homePage.visit('https://www.fravega.com/');
        homePage.verifyModalWrapper();
        homePage.fillAndSubmitZipCode();
        homePage.verifyHomePage();
        homePage.searchProduct(searchTerm);
        searchResultsPage.verifyResultsPage(searchTerm);
        searchResultsPage.useOrderFilter('Menor precio');
        searchResultsPage.useFilter();
        searchResultsPage.setPriceFilter(minPrice, maxPrice);
        searchResultsPage.selectCompareItem(maxComparar);
        searchResultsPage.confirmCompare();    
        comparePage.VerifyComparePage();
        comparePage.selectProduct(3);
        cartPage.verifyCartPage(searchTerm);
        cartPage.fillCodeDiscount(CodeDiscount);
        cartPage.validateCodeDiscount(CodeDiscount);        
        cartPage.finishBuy();
        cartEmailPage.verifyCartEmailPage();
        cartEmailPage.fillMailAndFinishPage(email);
        finalBuyPage.verifyFinalBuyStepOnePage(email);
        finalBuyPage.fillFinalBuyStepOnePage(name, lastName, document, phoneNumber);
        finalBuyPage.continueStep();              
        finalBuyPage.VerifiAndfillStepTwoPage(zipCode);
        finalBuyPage.verifyAndFillLocalStore();
        finalBuyPage.continueStep();
        finalBuyPage.verifyAndFillStepThreePage();
        finalBuyPage.iframeDebitCard(CardName, CardNumber);       
        })
    
});  


