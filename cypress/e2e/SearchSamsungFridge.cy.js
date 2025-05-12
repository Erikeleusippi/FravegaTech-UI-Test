import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/cartPage';

describe('Búsqueda y compra de Producto', () => {    
    const homePage = new HomePage();
    const searchResultsPage = new SearchResultsPage();
    const productPage = new ProductPage();
    const cartPage = new CartPage();
    
    const searchTerm = 'Heladera Samsung';

    it('Test Case 1: Búsqueda y compra de producto', () => {        
        homePage.visit('https://www.fravega.com/');              
        homePage.verifyModalWrapper();
        homePage.fillAndSubmitZipCode();       
        homePage.verifyHomePage();        
        homePage.searchProduct(searchTerm);       
        searchResultsPage.verifyResultsPage(searchTerm);
        searchResultsPage.validateSecondElemnt(searchTerm);
        searchResultsPage.selectProduct();        
        productPage.verifyProductPage();
        productPage.verifyProductDetails(searchTerm);
        productPage.addToCart();
        productPage.verifyProductAddedToCart();
        productPage.goToCart();
        cartPage.verifyCartPage(searchTerm);
        cartPage.finishBuy();
        

    });
});
