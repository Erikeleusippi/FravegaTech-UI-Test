import { BasePage } from './BasePage';

export class HomePage extends BasePage {           
    postalNumber = '#header-geo-location-form-postal-number';
    titleModalWrapper = '.sc-gweoQa';
    textModalWrapper = '.sc-eIcdZJ';
    textModalWrapperWhitoutZipCode = '.sc-gEkIjz';
    IconModalWrapper = '.sc-fFlnrN';
    searchInput = '.sc-ejfMa-d > .sc-dkmUuB > .sc-sLsrZ';
    searchButton = '.sc-iEXKAA';
    savePostalCodeButton = '.sc-bOQTJJ button';
    geoLocationUser = '.sc-jdUcAg';     
    mainBanner = '[data-test-id="Vitrinas"]';     
    wrapper = '.wrapper';
    offersBody ='.sc-1b3c17b8-0 > :nth-child(1) > :nth-child(4)';
    bannerBody ='.sc-1b3c17b8-0 > :nth-child(1) > :nth-child(5)';
    newProductsBody='.sc-1b3c17b8-0 > :nth-child(1) > :nth-child(6)';
    secondBannerBody ='.sc-1b3c17b8-0 > :nth-child(1) > :nth-child(7)';
    bestSellerBody = '.sc-1b3c17b8-0 > :nth-child(1) > :nth-child(8)';
    thridBannerBody = '.sc-1b3c17b8-0 > :nth-child(1) > :nth-child(9)';
    mostViewedBody = '.sc-1b3c17b8-0 > :nth-child(1) > :nth-child(10)';
    

    zipCode = '1416';

      fillAndSubmitZipCode() {
        this.typeText(this.postalNumber, this.zipCode);
        this.clickElement(this.savePostalCodeButton);
      }
      verifyModalWrapper() {
        this.assertText(this.titleModalWrapper, 'Ingresá tu código postal');
        this.assertText(this.textModalWrapper, 'para ver las mejores opciones de envío y retiro.');
        this.assertText(this.textModalWrapperWhitoutZipCode, 'No sé mi código');
        this.getElement(this.IconModalWrapper).should('be.visible');
      }
      verifyHomePage() {
        this.assertUrlContains('fravega.com');
        this.assertText(this.geoLocationUser, 'Estás en Capital Federal (' + this.zipCode + ')');  
        this.verifyHeader();        
        this.getElement(this.mainBanner).should('exist');       
        this.getElement(this.wrapper).should('be.visible');
        this.getElement(this.offersBody).should('be.visible');
        this.getElement(this.bannerBody).should('be.visible');
        this.getElement(this.newProductsBody).should('be.visible');
        this.getElement(this.secondBannerBody).should('be.visible');
        this.getElement(this.bestSellerBody).should('be.visible');
        this.getElement(this.thridBannerBody).should('be.visible');
        this.getElement(this.mostViewedBody).should('be.visible');
        this.verifyFooter();   
    }    
    searchProduct(productName) {
        this.typeText(this.searchInput, productName);
        this.getElement(this.searchInput).should('have.value', productName);
        this.clickElement(this.searchButton);        
    }
    acceptCookies() {
        this.clickElement(this.acceptCookiesButton);
    }
    openMenu() {
        this.clickElement(this.menuButton);
    }
    openCart() {
        this.clickElement(this.cartButton);
    }
    
    
    


} 
